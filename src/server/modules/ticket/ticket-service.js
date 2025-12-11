import { ResponseError } from "@/src/lib/response-error";
import { getUser } from "../../utils/auth";
import { TicketRepository } from "./ticket-repository";
import { TicketValidation } from "./ticket-validation";
import { trackActivity } from "../../utils/trackUser";
import { transformFormData } from "../../utils/helper";
import { uploadImage } from "../../utils/uploadthing";

export class TicketService {

    static async create(request) {
        const user = await getUser();

        const object = transformFormData(request)

        const validatedReq = TicketValidation.CREATE.parse(object);

        let uploadImageData, imageLink;
        //upload image
        if(validatedReq.image instanceof File){
            uploadImageData = await uploadImage(validatedReq.image)
            if(!uploadImageData.data.ufsUrl){
                throw new ResponseError (500, "Failed to upload image please try again")
            }
            imageLink = uploadImageData.data.ufsUrl;
        }

        const ticket = await TicketRepository.createTicket({request: validatedReq, userId: user.userId, imageLink})
        if (!ticket) {throw new ResponseError(400, "Failed to create ticket, site you entered may not exist")}

        const result = {
            id: ticket.id,
            title: ticket.judul,
            priority: ticket.prioritas,
            status:  ticket.status,
            createdAt: ticket.createdAt.toLocaleDateString(),
            image: ticket.gambar
        }

        await trackActivity(user.userId, "Create Ticket", "Ticket", ticket.judul, result)
        return result
    }

    static async getMyTickets(parameter) {
        const user = await getUser();

        const validatedParam = TicketValidation.GETMYTICKETS.parse(parameter);
        
        const query = await TicketRepository.getMyTickets({parameter: validatedParam, userId: user.userId})
        if (query.count === 0){throw new ResponseError(200, "No tickets yet")}

        const result = query.tickets.map((ticket) => ({
            id: ticket.id,
            title: ticket.judul,
            priority: ticket.prioritas,
            status: ticket.status,
            assignee: (ticket.user.profile?.name) ? ticket.user.profile.name : ticket.user.username,
            site: ticket.site.name,
            description: ticket.deskripsi,
            createdAt: ticket.createdAt,
            category: ticket.kategori,
            lastUpdate: ticket.updatedAt,
        }))

        return {
            result,
            paging: {
                size: validatedParam.size,
                total_page: Math.ceil(query.count / validatedParam.size),
                total: query.count,
                current_page: validatedParam.page,
            }
        };
    }

    static async getById(parameter) {
        const user = await getUser();
        const validatedParam = TicketValidation.GETBYID.parse(parameter);
        
        const ticket = await TicketRepository.getById({ticketId: validatedParam.id})
        if(!ticket){throw new ResponseError(200, "Ticket does not exist")}
        if(user.role !== "ADMIN"){
            if(user.role !== "HRD"){
                if (user.userId !== ticket.userId){throw new ResponseError(403, "This resource belong to someone else")}
            }
        }

        let feedback;
        if(ticket.feedback.length !== 0){
            feedback = ticket.feedback.map((f) => ({
                id: f.id,
                user: (f.user.profile?.name) ? f.user.profile.name : f.user.username,
                message: f.feedback,
                createdAt: f.createdAt
            }))
        }

        const result = {
            id: ticket.id,
            title: ticket.judul,
            priority: ticket.prioritas,
            status: ticket.status,
            assignee: (ticket.user.profile?.name) ? ticket.user.profile.name : ticket.user.username,
            site: ticket.site.name,
            description: ticket.deskripsi,
            createdAt: ticket.createdAt,
            category: ticket.kategori,
            resolvedAt: (ticket.resolvedAt) ? ticket.resolvedAt : "-",
            comments: (feedback) ? feedback : "-",
        }

        return result;
    }
}