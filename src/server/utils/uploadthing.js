import { ResponseError } from "@/src/lib/response-error";
import { UTApi } from "uploadthing/server";

//have a default param of token:env.UPLOADTHING_TOKEN 
export const utapi = new UTApi({
  // ...options,
});

export async function uploadImage(images){
  //upload image(s) to uploadthing
  const response = await utapi.uploadFiles(images)
  //check if error exist in uploadthing response, if exist then throw error
  if (images.constructor === Array){
    response.forEach((element) => {
      if (element.error !== null) {
          throw new ResponseError(200, `Created report in database but failed to upload images \n code: ${element.error.code} \n message: ${element.error.message}`)
      }
    })
  } else {
    if (response.error !== null) {
      throw new ResponseError(200, `Created report in database but failed to upload images \n code: ${element.error.code} \n message: ${element.error.message}`)
    }
  }
  return response; 
}
