// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ChartBarIcon,
//   MapPinIcon,
//   UsersIcon,
//   DocumentChartBarIcon,
//   BellIcon,
//   ArrowRightOnRectangleIcon,
//   Bars3Icon,
//   XMarkIcon,
//   ExclamationTriangleIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   MagnifyingGlassIcon,
//   PlusIcon,
//   CheckIcon,
//   EyeIcon,
//   XCircleIcon,
//   EnvelopeIcon,
//   UserPlusIcon,
//   CogIcon,
//   PencilIcon,
//   TrashIcon,
//   ArrowDownTrayIcon,
//   InformationCircleIcon,
//   QuestionMarkCircleIcon, // Ikon untuk Help
//   ChatBubbleLeftRightIcon, // Ikon untuk tiket
//   ExclamationCircleIcon, // Ikon untuk tiket urgent
//   PaperAirplaneIcon, // Ikon untuk kirim solusi
//   PhotoIcon, // Ikon untuk gambar
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   // ==================== STATE EXISTING ====================
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [selectedStatus, setSelectedStatus] = useState("All Status");
//   const [selectedRole, setSelectedRole] = useState("all");
//   const [selectedSite, setSelectedSite] = useState("all");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const [hoveredPie, setHoveredPie] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [notificationFilter, setNotificationFilter] = useState("all");
//   const [isAddSiteModalOpen, setIsAddSiteModalOpen] = useState(false);
//   const [isEditSiteModalOpen, setIsEditSiteModalOpen] = useState(false);
//   const [editingSite, setEditingSite] = useState(null);
//     // State untuk modal delete user
//   const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
//   const [userToDelete, setUserToDelete] = useState(null);
//   const deleteUserModalRef = useRef(null);
//   const [newSiteData, setNewSiteData] = useState({
//     name: "",
//     city: "",
//     address: "",
//     province: "",
//     status: "active",
//   });
//   const [formErrors, setFormErrors] = useState({});

//   // State untuk modal user
//   const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
//   const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [newUserData, setNewUserData] = useState({
//     name: "",
//     email: "",
//     role: "operator",
//     site: "",
//     status: "active",
//   });
//   const [userFormErrors, setUserFormErrors] = useState({});

//   // State untuk export reports
//   const [isExportModalOpen, setIsExportModalOpen] = useState(false);
//   const [exportFormat, setExportFormat] = useState("pdf");
//   const [exportDateRange, setExportDateRange] = useState("today");
//   const [exportStatus, setExportStatus] = useState("all");

//   // State untuk modal review detail
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
//   const [selectedReport, setSelectedReport] = useState(null);

//   // ==================== STATE BARU UNTUK HELP/TICKET SYSTEM ====================
//   const [helpTickets, setHelpTickets] = useState([
//     {
//       id: 1,
//       ticketNumber: "TICK-2025-001",
//       operatorId: 1,
//       operatorName: "Budi Santoso",
//       operatorEmail: "budi.santoso@email.com",
//       site: "Jakarta Utara - Site A",
//       subject: "Kesalahan pembacaan pH meter",
//       description:
//         "pH meter menunjukkan nilai yang tidak stabil, terkadang 7.2, terkadang 6.8 padahal sampel sama. Sudah saya kalibrasi ulang tetap tidak stabil.",
//       priority: "high",
//       status: "open", // open, pending, closed
//       createdAt: "2025-01-27 08:30",
//       updatedAt: "2025-01-27 08:30",
//       attachments: ["ph_meter_error.jpg"],
//       adminNotes: "",
//       solution: "",
//       closedAt: null,
//       closedBy: null,
//     },
//     {
//       id: 2,
//       ticketNumber: "TICK-2025-002",
//       operatorId: 2,
//       operatorName: "Siti Nurhaliza",
//       operatorEmail: "siti.nurhaliza@email.com",
//       site: "Bandung - Site B",
//       subject: "Flow meter tidak berfungsi",
//       description:
//         "Flow meter di unit 3 tidak menunjukkan pembacaan sama sekali. Indikator lampu mati. Sudah dicek power supply normal.",
//       priority: "high",
//       status: "pending",
//       createdAt: "2025-01-26 14:20",
//       updatedAt: "2025-01-27 09:15",
//       attachments: ["flow_meter.jpg", "wiring_diagram.pdf"],
//       adminNotes: "Menunggu spare part dari supplier",
//       solution: "",
//       closedAt: null,
//       closedBy: null,
//     },
//     {
//       id: 3,
//       ticketNumber: "TICK-2025-003",
//       operatorId: 1,
//       operatorName: "Budi Santoso",
//       operatorEmail: "budi.santoso@email.com",
//       site: "Jakarta Utara - Site A",
//       subject: "Software crash saat generate report",
//       description:
//         "Aplikasi monitoring crash setiap kali mencoba generate report bulanan. Error message: 'Memory allocation failed'.",
//       priority: "medium",
//       status: "closed",
//       createdAt: "2025-01-25 10:45",
//       updatedAt: "2025-01-26 16:30",
//       attachments: ["error_screenshot.png", "log_file.txt"],
//       adminNotes: "Telah diperbaiki dengan update patch v2.1.3",
//       solution:
//         "Sudah diinstal patch terbaru v2.1.3 yang memperbaiki memory leak. Operator sudah dikonfirmasi bisa generate report normal.",
//       closedAt: "2025-01-26 16:30",
//       closedBy: "Admin User",
//     },
//     {
//       id: 4,
//       ticketNumber: "TICK-2025-004",
//       operatorId: 4,
//       operatorName: "Operator 2",
//       operatorEmail: "operator2@email.com",
//       site: "Bandung - Site B",
//       subject: "Kebutuhan training penggunaan alat baru",
//       description:
//         "Mohon dijadwalkan training untuk penggunaan TDS meter digital yang baru datang. Ada 3 operator yang perlu training.",
//       priority: "low",
//       status: "open",
//       createdAt: "2025-01-27 11:20",
//       updatedAt: "2025-01-27 11:20",
//       attachments: [],
//       adminNotes: "",
//       solution: "",
//       closedAt: null,
//       closedBy: null,
//     },
//   ]);

//   const [selectedTicket, setSelectedTicket] = useState(null);
//   const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
//   const [solutionText, setSolutionText] = useState("");
//   const [adminNotesText, setAdminNotesText] = useState("");
//   const [ticketFilter, setTicketFilter] = useState("all"); // all, open, pending, closed
//   const [ticketPriorityFilter, setTicketPriorityFilter] = useState("all"); // all, high, medium, low

//   const router = useRouter();
//   const dropdownRef = useRef(null);
//   const notificationRef = useRef(null);
//   const notificationModalRef = useRef(null);
//   const exportModalRef = useRef(null);
//   const reviewModalRef = useRef(null);
//   const ticketModalRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setNotificationOpen(false);
//       }
//       if (
//         notificationModalRef.current &&
//         !notificationModalRef.current.contains(event.target) &&
//         isNotificationModalOpen
//       ) {
//         setIsNotificationModalOpen(false);
//       }
//       if (
//         exportModalRef.current &&
//         !exportModalRef.current.contains(event.target) &&
//         isExportModalOpen
//       ) {
//         setIsExportModalOpen(false);
//       }
//       if (
//         reviewModalRef.current &&
//         !reviewModalRef.current.contains(event.target) &&
//         isReviewModalOpen
//       ) {
//         setIsReviewModalOpen(false);
//       }
//       if (
//         ticketModalRef.current &&
//         !ticketModalRef.current.contains(event.target) &&
//         isTicketModalOpen
//       ) {
//         setIsTicketModalOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [
//     isNotificationModalOpen,
//     isExportModalOpen,
//     isReviewModalOpen,
//     isTicketModalOpen,
//        isDeleteUserModalOpen, // tambahkan ini
//   ]);

//   // ==================== MENU ITEMS DENGAN HELP ====================
//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//     { id: "help", name: "Help", icon: QuestionMarkCircleIcon }, // Menu baru
//   ];

//   // ==================== MASTER DATA STATE ====================
//   // Semua data disimpan dalam state terpusat agar sinkron
//   const [sitesData, setSitesData] = useState([
//     {
//       id: 1,
//       name: "Jakarta Utara - Site A",
//       city: "Jakarta Utara",
//       address: "Jl. Industri No. 123, Jakarta Utara",
//       province: "DKI Jakarta",
//       operators: 3,
//       status: "active",
//       lastReport: "2 hours ago",
//     },
//     {
//       id: 2,
//       name: "Bandung - Site B",
//       city: "Bandung",
//       address: "Jl. Soekarno Hatta No. 456, Bandung",
//       province: "Jawa Barat",
//       operators: 2,
//       status: "active",
//       lastReport: "3 hours ago",
//     },
//     {
//       id: 3,
//       name: "Surabaya - Site C",
//       city: "Surabaya",
//       address: "Jl. Basuki Rahmat No. 789, Surabaya",
//       province: "Jawa Timur",
//       operators: 4,
//       status: "active",
//       lastReport: "5 hours ago",
//     },
//     {
//       id: 4,
//       name: "Semarang - Site D",
//       city: "Semarang",
//       address: "Jl. Pemuda No. 321, Semarang",
//       province: "Jawa Tengah",
//       operators: 2,
//       status: "inactive",
//       lastReport: "2 days ago",
//     },
//     {
//       id: 5,
//       name: "Yogyakarta - Site E",
//       city: "Yogyakarta",
//       address: "Jl. Malioboro No. 654, Yogyakarta",
//       province: "DI Yogyakarta",
//       operators: 3,
//       status: "maintenance",
//       lastReport: "1 hour ago",
//     },
//   ]);

//   const [usersData, setUsersData] = useState([
//     {
//       id: 1,
//       name: "Budi Santoso",
//       email: "budi.santoso@email.com",
//       role: "operator",
//       site: "Jakarta Utara - Site A",
//       status: "active",
//       lastActive: "2 hours ago",
//       initial: "B",
//     },
//     {
//       id: 2,
//       name: "Katira Sala",
//       email: "katira.sala@email.com",
//       role: "hrd",
//       site: "Central Office",
//       status: "active",
//       lastActive: "1 day ago",
//       initial: "K",
//     },
//     {
//       id: 3,
//       name: "Admin User",
//       email: "admin@sioptima.com",
//       role: "admin",
//       site: "Head Office",
//       status: "active",
//       lastActive: "5 minutes ago",
//       initial: "A",
//     },
//     {
//       id: 4,
//       name: "Operator 2",
//       email: "operator2@email.com",
//       role: "operator",
//       site: "Bandung - Site B",
//       status: "inactive",
//       lastActive: "3 days ago",
//       initial: "O",
//     },
//   ]);

//   const [reportsData, setReportsData] = useState([
//     {
//       id: 1,
//       date: "2025-01-27",
//       time: "08:30",
//       site: "Jakarta Utara - Site A",
//       operator: "Budi Santoso",
//       pH: 7.2,
//       flowRate: "450 L/h",
//       status: "pending",
//       details: {
//         temperature: "28°C",
//         tds: "450 ppm",
//         turbidity: "2.5 NTU",
//         chlorine: "1.2 mg/L",
//         notes: "Semua parameter dalam batas normal. Operasi berjalan lancar.",
//         images: ["sample1.jpg", "sample2.jpg"],
//       },
//     },
//     {
//       id: 2,
//       date: "2025-01-27",
//       time: "08:15",
//       site: "Bandung - Site B",
//       operator: "Siti Nurhaliza",
//       pH: 6.8,
//       flowRate: "380 L/h",
//       status: "approved",
//       details: {
//         temperature: "26°C",
//         tds: "420 ppm",
//         turbidity: "1.8 NTU",
//         chlorine: "1.0 mg/L",
//         notes:
//           "Kondisi air cukup baik, sedikit penurunan pH namun masih dalam batas wajar.",
//         images: ["sample3.jpg"],
//       },
//     },
//     {
//       id: 3,
//       date: "2025-01-27",
//       time: "08:25",
//       site: "Surabaya - Site C",
//       operator: "Ahmad Yani",
//       pH: 7.5,
//       flowRate: "520 L/h",
//       status: "rejected",
//       details: {
//         temperature: "30°C",
//         tds: "520 ppm",
//         turbidity: "5.2 NTU",
//         chlorine: "0.8 mg/L",
//         notes: "Turbidity melebihi batas maksimal. Perlu pengecekan filter.",
//         images: ["sample4.jpg", "sample5.jpg", "sample6.jpg"],
//       },
//     },
//     {
//       id: 4,
//       date: "2025-01-26",
//       time: "14:20",
//       site: "Jakarta Utara - Site A",
//       operator: "Budi Santoso",
//       pH: 7.1,
//       flowRate: "430 L/h",
//       status: "approved",
//       details: {
//         temperature: "27°C",
//         tds: "440 ppm",
//         turbidity: "2.1 NTU",
//         chlorine: "1.1 mg/L",
//         notes: "Performa stabil, tidak ada kendala operasional.",
//         images: ["sample7.jpg"],
//       },
//     },
//     {
//       id: 5,
//       date: "2025-01-26",
//       time: "11:45",
//       site: "Bandung - Site B",
//       operator: "Siti Nurhaliza",
//       pH: 6.9,
//       flowRate: "390 L/h",
//       status: "pending",
//       details: {
//         temperature: "25°C",
//         tds: "410 ppm",
//         turbidity: "2.8 NTU",
//         chlorine: "1.3 mg/L",
//         notes: "Aliran air sedikit berkurang, perlu monitoring lebih lanjut.",
//         images: [],
//       },
//     },
//   ]);

//   // ==================== DERIVED DATA ====================
//   // Data yang dihitung dari master data untuk menjaga konsistensi

//   // Hitung statistik untuk Dashboard dari data aktual
//   const totalSites = sitesData.length;
//   const activeSites = sitesData.filter(
//     (site) => site.status === "active"
//   ).length;
//   const maintenanceSites = sitesData.filter(
//     (site) => site.status === "maintenance"
//   ).length;
//   const totalOperators = usersData.filter(
//     (user) => user.role === "operator" && user.status === "active"
//   ).length;
//   const totalReports = reportsData.length;
//   const approvedReports = reportsData.filter(
//     (report) => report.status === "approved"
//   ).length;
//   const pendingReports = reportsData.filter(
//     (report) => report.status === "pending"
//   ).length;
//   const rejectedReports = reportsData.filter(
//     (report) => report.status === "rejected"
//   ).length;
//   const complianceRate =
//     totalReports > 0 ? Math.round((approvedReports / totalReports) * 100) : 0;

//   // ==================== FILTER HELP TICKETS ====================
//   const filteredHelpTickets = helpTickets
//     .filter((ticket) => {
//       // Filter by status
//       if (ticketFilter !== "all" && ticket.status !== ticketFilter)
//         return false;

//       // Filter by priority
//       if (
//         ticketPriorityFilter !== "all" &&
//         ticket.priority !== ticketPriorityFilter
//       )
//         return false;

//       // Filter by search query
//       if (searchQuery) {
//         const query = searchQuery.toLowerCase();
//         return (
//           ticket.ticketNumber.toLowerCase().includes(query) ||
//           ticket.operatorName.toLowerCase().includes(query) ||
//           ticket.subject.toLowerCase().includes(query) ||
//           ticket.site.toLowerCase().includes(query)
//         );
//       }

//       return true;
//     })
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//   // ==================== STATE BARU UNTUK VALIDASI ====================
//   const [solutionError, setSolutionError] = useState("");

//   // ==================== HELP TICKET FUNCTIONS ====================
//   const handleViewTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setSolutionText(ticket.solution || "");
//     setAdminNotesText(ticket.adminNotes || "");
//     setSolutionError(""); // Reset error saat membuka modal
//     setIsTicketModalOpen(true);
//   };

//   const handleCloseTicket = () => {
//     // Validasi field solution wajib diisi
//     if (!solutionText.trim()) {
//       setSolutionError("Solution wajib diisi sebelum menutup tiket!");
//       return;
//     }

//     const updatedTickets = helpTickets.map((ticket) =>
//       ticket.id === selectedTicket.id
//         ? {
//             ...ticket,
//             status: "closed",
//             solution: solutionText,
//             adminNotes: adminNotesText,
//             closedAt:
//               new Date().toISOString().split("T")[0] +
//               " " +
//               new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               }),
//             closedBy: "Admin User",
//             updatedAt:
//               new Date().toISOString().split("T")[0] +
//               " " +
//               new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               }),
//           }
//         : ticket
//     );

//     setHelpTickets(updatedTickets);
//     alert(`Tiket ${selectedTicket.ticketNumber} berhasil ditutup!`);
//     setIsTicketModalOpen(false);
//     setSelectedTicket(null);
//     setSolutionText("");
//     setAdminNotesText("");
//     setSolutionError(""); // Reset error
//   };

//   const handleSetPending = () => {
//     const updatedTickets = helpTickets.map((ticket) =>
//       ticket.id === selectedTicket.id
//         ? {
//             ...ticket,
//             status: "pending",
//             adminNotes: adminNotesText,
//             updatedAt:
//               new Date().toISOString().split("T")[0] +
//               " " +
//               new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               }),
//           }
//         : ticket
//     );

//     setHelpTickets(updatedTickets);
//     alert(
//       `Tiket ${selectedTicket.ticketNumber} status diubah menjadi Pending!`
//     );
//     setIsTicketModalOpen(false);
//     setSelectedTicket(null);
//     setSolutionText("");
//     setAdminNotesText("");
//   };

//   const handleSaveNotes = () => {
//     const updatedTickets = helpTickets.map((ticket) =>
//       ticket.id === selectedTicket.id
//         ? {
//             ...ticket,
//             adminNotes: adminNotesText,
//             updatedAt:
//               new Date().toISOString().split("T")[0] +
//               " " +
//               new Date().toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               }),
//           }
//         : ticket
//     );

//     setHelpTickets(updatedTickets);
//     alert("Catatan admin berhasil disimpan!");
//     // Tetap di modal, tidak ditutup
//   };

//   const getTicketPriorityConfig = (priority) => {
//     const config = {
//       high: {
//         color: "text-red-600",
//         bgColor: "bg-red-100",
//         borderColor: "border-red-200",
//         label: "High",
//         icon: ExclamationCircleIcon,
//       },
//       medium: {
//         color: "text-yellow-600",
//         bgColor: "bg-yellow-100",
//         borderColor: "border-yellow-200",
//         label: "Medium",
//         icon: ExclamationTriangleIcon,
//       },
//       low: {
//         color: "text-blue-600",
//         bgColor: "bg-blue-100",
//         borderColor: "border-blue-200",
//         label: "Low",
//         icon: InformationCircleIcon,
//       },
//     };
//     return config[priority] || config.medium;
//   };

//   const getTicketStatusConfig = (status) => {
//     const config = {
//       open: {
//         color: "text-blue-600",
//         bgColor: "bg-blue-100",
//         borderColor: "border-blue-200",
//         label: "Open",
//         icon: ClockIcon,
//       },
//       pending: {
//         color: "text-yellow-600",
//         bgColor: "bg-yellow-100",
//         borderColor: "border-yellow-200",
//         label: "Pending",
//         icon: ClockIcon,
//       },
//       closed: {
//         color: "text-green-600",
//         bgColor: "bg-green-100",
//         borderColor: "border-green-200",
//         label: "Closed",
//         icon: CheckCircleIcon,
//       },
//     };
//     return config[status] || config.open;
//   };

//   // ==================== FUNGSI UNTUK MEMBUKA GAMBAR ====================
//   const handleOpenImage = (filename) => {
//     // Simulasi membuka gambar di tab baru
//     const imageUrl = `/uploads/${filename}`;
//     window.open(imageUrl, "_blank");
//   };

//   const handleDownloadImage = (filename) => {
//     // Simulasi download gambar
//     const imageUrl = `/uploads/${filename}`;
//     const link = document.createElement("a");
//     link.href = imageUrl;
//     link.download = filename;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Data untuk Dashboard Charts
//   // ==================== DASHBOARD DATA ====================
//   const waterQualityData = [
//     { day: "Mon", ec: 670, tds: 440, pH: 7.0 },
//     { day: "Tue", ec: 720, tds: 480, pH: 6.8 },
//     { day: "Wed", ec: 580, tds: 390, pH: 7.2 },
//     { day: "Thu", ec: 810, tds: 520, pH: 6.9 },
//     { day: "Fri", ec: 630, tds: 410, pH: 7.1 },
//     { day: "Sat", ec: 590, tds: 380, pH: 7.3 },
//     { day: "Sun", ec: 690, tds: 450, pH: 7.0 },
//   ];

//   // PERBAIKAN: Hitung persentase yang benar untuk pie chart
//   const reportStatusData = [
//     {
//       status: "Approved",
//       value:
//         totalReports > 0
//           ? Math.round((approvedReports / totalReports) * 100)
//           : 0,
//       count: approvedReports,
//       color: "#10B981",
//     },
//     {
//       status: "Pending",
//       value:
//         totalReports > 0
//           ? Math.round((pendingReports / totalReports) * 100)
//           : 0,
//       count: pendingReports,
//       color: "#F59E0B",
//     },
//     {
//       status: "Rejected",
//       value:
//         totalReports > 0
//           ? Math.round((rejectedReports / totalReports) * 100)
//           : 0,
//       count: rejectedReports,
//       color: "#EF4444",
//     },
//   ];

//   // Pastikan total persentase = 100%
//   const totalPercentage = reportStatusData.reduce(
//     (sum, item) => sum + item.value,
//     0
//   );
//   if (totalPercentage !== 100 && reportStatusData.length > 0) {
//     // Koreksi rounding error dengan menyesuaikan item pertama
//     reportStatusData[0].value += 100 - totalPercentage;
//   }

//   const sitePerformanceData = sitesData.map((site) => {
//     const siteReports = reportsData.filter(
//       (report) => report.site === site.name
//     );
//     const approvedSiteReports = siteReports.filter(
//       (report) => report.status === "approved"
//     ).length;
//     const compliance =
//       siteReports.length > 0
//         ? Math.round((approvedSiteReports / siteReports.length) * 100)
//         : 0;

//     return {
//       city: site.city,
//       compliance: compliance,
//       reports: siteReports.length,
//     };
//   });

//   // Filter data untuk masing-masing menu
//   // PERBAIKAN: Tambahkan filter untuk maintenance
//   const filteredSites = sitesData
//     .filter(
//       (site) =>
//         (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           site.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           site.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
//         (selectedStatus === "All Status" ||
//           (selectedStatus === "Active" && site.status === "active") ||
//           (selectedStatus === "Inactive" && site.status === "inactive") ||
//           (selectedStatus === "Maintenance" && site.status === "maintenance"))
//     )
//     .sort((a, b) => b.id - a.id);

//   const filteredUsers = usersData
//     .filter(
//       (user) =>
//         (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
//         (selectedStatus === "All Users" ||
//           (selectedStatus === "Active" && user.status === "active") ||
//           (selectedStatus === "Inactive" && user.status === "inactive")) &&
//         (selectedRole === "all" || user.role === selectedRole)
//     )
//     .sort((a, b) => b.id - a.id);

//   const filteredReports = reportsData
//     .filter(
//       (report) =>
//         (report.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           report.date.includes(searchQuery)) &&
//         (selectedStatus === "All Reports" ||
//           (selectedStatus === "Approved" && report.status === "approved") ||
//           (selectedStatus === "Pending" && report.status === "pending") ||
//           (selectedStatus === "Rejected" && report.status === "rejected")) &&
//         (selectedSite === "all" || report.site === selectedSite)
//     )
//     .sort((a, b) => {
//       const dateCompare = b.date.localeCompare(a.date);
//       if (dateCompare !== 0) return dateCompare;
//       return b.time.localeCompare(a.time);
//     });

//   const uniqueSites = [...new Set(reportsData.map((report) => report.site))];

//   // ==================== VALIDASI FORM ====================
//   const validateForm = (data) => {
//     const errors = {};
//     if (!data.name.trim()) errors.name = "Nama site harus diisi";
//     if (!data.city.trim()) errors.city = "Kota harus diisi";
//     if (!data.address.trim()) errors.address = "Alamat harus diisi";
//     if (!data.province.trim()) errors.province = "Provinsi harus diisi";
//     return errors;
//   };

//   const validateUserForm = (data) => {
//     const errors = {};
//     if (!data.name.trim()) errors.name = "Nama user harus diisi";
//     if (!data.email.trim()) errors.email = "Email harus diisi";
//     if (!data.email.includes("@")) errors.email = "Format email tidak valid";
//     if (!data.site.trim()) errors.site = "Site harus diisi";
//     return errors;
//   };

//   // ==================== SITE HANDLERS ====================
//   const handleAddSite = () => {
//     const errors = validateForm(newSiteData);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     const newId =
//       sitesData.length > 0
//         ? Math.max(...sitesData.map((site) => site.id)) + 1
//         : 1;

//     const newSite = {
//       id: newId,
//       name: newSiteData.name,
//       city: newSiteData.city,
//       address: newSiteData.address,
//       province: newSiteData.province,
//       operators: Math.floor(Math.random() * 5) + 1,
//       status: newSiteData.status,
//       lastReport: "Just now",
//     };

//     setSitesData([newSite, ...sitesData]);
//     alert(`Site ${newSiteData.name} berhasil ditambahkan!`);
//     setIsAddSiteModalOpen(false);
//     setNewSiteData({
//       name: "",
//       city: "",
//       address: "",
//       province: "",
//       status: "active",
//     });
//     setFormErrors({});
//   };

//   const handleEditSite = (site) => {
//     setEditingSite({ ...site });
//     setIsEditSiteModalOpen(true);
//     setFormErrors({});
//   };

//   const handleUpdateSite = () => {
//     const errors = validateForm(editingSite);
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     setSitesData(
//       sitesData.map((site) => (site.id === editingSite.id ? editingSite : site))
//     );

//     // Update juga data users yang terkait site ini
//     setUsersData(
//       usersData.map((user) =>
//         user.site === editingSite.name
//           ? { ...user, site: editingSite.name }
//           : user
//       )
//     );

//     // Update juga data reports yang terkait site ini
//     setReportsData(
//       reportsData.map((report) =>
//         report.site === editingSite.name
//           ? { ...report, site: editingSite.name }
//           : report
//       )
//     );

//     alert(`Site ${editingSite.name} berhasil diupdate!`);
//     setIsEditSiteModalOpen(false);
//     setEditingSite(null);
//     setFormErrors({});
//   };

//   const handleDeleteSite = (siteId) => {
//     const siteToDelete = sitesData.find((site) => site.id === siteId);

//     if (
//       confirm(`Apakah Anda yakin ingin menghapus site ${siteToDelete.name}?`)
//     ) {
//       // Cek apakah ada user yang menggunakan site ini
//       const usersWithThisSite = usersData.filter(
//         (user) => user.site === siteToDelete.name
//       );
//       if (usersWithThisSite.length > 0) {
//         alert(
//           `Tidak dapat menghapus site karena terdapat ${usersWithThisSite.length} user yang menggunakan site ini.`
//         );
//         return;
//       }

//       // Cek apakah ada reports yang terkait site ini
//       const reportsWithThisSite = reportsData.filter(
//         (report) => report.site === siteToDelete.name
//       );
//       if (reportsWithThisSite.length > 0) {
//         alert(
//           `Tidak dapat menghapus site karena terdapat ${reportsWithThisSite.length} reports yang terkait dengan site ini.`
//         );
//         return;
//       }

//       setSitesData(sitesData.filter((site) => site.id !== siteId));
//       alert("Site berhasil dihapus!");
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setNewSiteData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     if (formErrors[field]) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   const handleEditInputChange = (field, value) => {
//     setEditingSite((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     if (formErrors[field]) {
//       setFormErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   // ==================== USER HANDLERS ====================
//   const handleAddUser = () => {
//     const errors = validateUserForm(newUserData);
//     if (Object.keys(errors).length > 0) {
//       setUserFormErrors(errors);
//       return;
//     }

//     const newId =
//       usersData.length > 0
//         ? Math.max(...usersData.map((user) => user.id)) + 1
//         : 1;

//     const newUser = {
//       id: newId,
//       name: newUserData.name,
//       email: newUserData.email,
//       role: newUserData.role,
//       site: newUserData.site,
//       status: newUserData.status,
//       lastActive: "Just now",
//       initial: newUserData.name.charAt(0).toUpperCase(),
//     };

//     setUsersData([newUser, ...usersData]);

//     // Update operator count di sites data
//     if (newUserData.role === "operator" && newUserData.status === "active") {
//       setSitesData(
//         sitesData.map((site) =>
//           site.name === newUserData.site
//             ? { ...site, operators: site.operators + 1 }
//             : site
//         )
//       );
//     }

//     alert(`User ${newUserData.name} berhasil ditambahkan!`);
//     setIsAddUserModalOpen(false);
//     setNewUserData({
//       name: "",
//       email: "",
//       role: "operator",
//       site: "",
//       status: "active",
//     });
//     setUserFormErrors({});
//   };

//   const handleEditUser = (user) => {
//     setEditingUser({ ...user });
//     setIsEditUserModalOpen(true);
//     setUserFormErrors({});
//   };

//   const handleUpdateUser = () => {
//     const errors = validateUserForm(editingUser);
//     if (Object.keys(errors).length > 0) {
//       setUserFormErrors(errors);
//       return;
//     }

//     const oldUserData = usersData.find((u) => u.id === editingUser.id);

//     setUsersData(
//       usersData.map((user) =>
//         user.id === editingUser.id
//           ? {
//               ...editingUser,
//               initial: editingUser.name.charAt(0).toUpperCase(),
//             }
//           : user
//       )
//     );

//     // Update operator count jika ada perubahan role atau site
//     if (oldUserData.role === "operator" && oldUserData.status === "active") {
//       if (
//         editingUser.role !== "operator" ||
//         editingUser.status !== "active" ||
//         editingUser.site !== oldUserData.site
//       ) {
//         // Kurangi count di site lama
//         setSitesData(
//           sitesData.map((site) =>
//             site.name === oldUserData.site
//               ? { ...site, operators: Math.max(0, site.operators - 1) }
//               : site
//           )
//         );
//       }
//     }

//     if (editingUser.role === "operator" && editingUser.status === "active") {
//       if (
//         oldUserData.role !== "operator" ||
//         oldUserData.status !== "active" ||
//         editingUser.site !== oldUserData.site
//       ) {
//         // Tambah count di site baru
//         setSitesData(
//           sitesData.map((site) =>
//             site.name === editingUser.site
//               ? { ...site, operators: site.operators + 1 }
//               : site
//           )
//         );
//       }
//     }

//     // Update reports data jika nama operator berubah
//     if (
//       oldUserData.name !== editingUser.name &&
//       oldUserData.role === "operator"
//     ) {
//       setReportsData(
//         reportsData.map((report) =>
//           report.operator === oldUserData.name
//             ? { ...report, operator: editingUser.name }
//             : report
//         )
//       );
//     }

//     alert(`User ${editingUser.name} berhasil diupdate!`);
//     setIsEditUserModalOpen(false);
//     setEditingUser(null);
//     setUserFormErrors({});
//   };

//   const handleDeleteUser = (userId) => {
//     const userToDelete = usersData.find((user) => user.id === userId);

//     if (
//       confirm(`Apakah Anda yakin ingin menghapus user ${userToDelete.name}?`)
//     ) {
//       // Cek apakah ada reports yang dibuat oleh user ini
//       const userReports = reportsData.filter(
//         (report) => report.operator === userToDelete.name
//       );
//       if (userReports.length > 0) {
//         alert(
//           `Tidak dapat menghapus user karena terdapat ${userReports.length} reports yang dibuat oleh user ini.`
//         );
//         return;
//       }

//       // Update operator count jika user adalah operator aktif
//       if (
//         userToDelete.role === "operator" &&
//         userToDelete.status === "active"
//       ) {
//         setSitesData(
//           sitesData.map((site) =>
//             site.name === userToDelete.site
//               ? { ...site, operators: Math.max(0, site.operators - 1) }
//               : site
//           )
//         );
//       }

//       setUsersData(usersData.filter((user) => user.id !== userId));
//       alert("User berhasil dihapus!");
//     }
//   };

//   const handleUserInputChange = (field, value) => {
//     setNewUserData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     if (userFormErrors[field]) {
//       setUserFormErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   const handleEditUserInputChange = (field, value) => {
//     setEditingUser((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//     if (userFormErrors[field]) {
//       setUserFormErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   // ==================== REPORT HANDLERS ====================
//   const handleReview = (reportId) => {
//     const report = reportsData.find((r) => r.id === reportId);
//     setSelectedReport(report);
//     setIsReviewModalOpen(true);
//   };

//   const handleApprove = (reportId) => {
//     setReportsData((prev) =>
//       prev.map((report) =>
//         report.id === reportId ? { ...report, status: "approved" } : report
//       )
//     );
//     alert(` Report ${reportId} berhasil disetujui!`);
//   };

//   const handleReject = (reportId) => {
//     setReportsData((prev) =>
//       prev.map((report) =>
//         report.id === reportId ? { ...report, status: "rejected" } : report
//       )
//     );
//     alert(` Report ${reportId} berhasil ditolak!`);
//   };

//   // ==================== EXPORT HANDLERS ====================
//   const handleExportReport = () => {
//     setIsExportModalOpen(true);
//   };

//   const handleConfirmExport = () => {
//     // Filter reports berdasarkan pilihan
//     let reportsToExport = [...filteredReports];

//     // Filter tambahan berdasarkan modal export
//     if (exportStatus !== "all") {
//       reportsToExport = reportsToExport.filter(
//         (report) => report.status === exportStatus
//       );
//     }

//     // Filter berdasarkan date range (simulasi sederhana)
//     if (exportDateRange === "today") {
//       reportsToExport = reportsToExport.filter(
//         (report) => report.date === "2025-01-27"
//       );
//     } else if (exportDateRange === "week") {
//       reportsToExport = reportsToExport.slice(
//         0,
//         Math.min(reportsToExport.length, 10)
//       );
//     }

//     if (exportFormat === "pdf") {
//       exportToPDF(reportsToExport);
//     } else {
//       exportToCSV(reportsToExport);
//     }

//     setIsExportModalOpen(false);
//   };

//   const exportToPDF = (reports) => {
//     // Simulasi pembuatan file PDF
//     const reportCount = reports.length;
//     const statusCount = {
//       approved: reports.filter((r) => r.status === "approved").length,
//       pending: reports.filter((r) => r.status === "pending").length,
//       rejected: reports.filter((r) => r.status === "rejected").length,
//     };

//     const dateRangeText = {
//       today: "Hari Ini",
//       week: "Minggu Ini",
//       month: "Bulan Ini",
//       all: "Semua Data",
//     }[exportDateRange];

//     const statusText = {
//       all: "Semua Status",
//       approved: "Disetujui",
//       pending: "Pending",
//       rejected: "Ditolak",
//     }[exportStatus];

//     // Simulasi download file PDF
//     const element = document.createElement("a");
//     const fileContent = `Laporan IPAL Monitoring\n\nTotal Data: ${reportCount}\nFormat: PDF\nRentang Waktu: ${dateRangeText}\nStatus: ${statusText}\n\nDisetujui: ${
//       statusCount.approved
//     }\nPending: ${statusCount.pending}\nDitolak: ${
//       statusCount.rejected
//     }\n\nTanggal Export: ${new Date().toLocaleDateString("id-ID")}`;
//     const file = new Blob([fileContent], { type: "application/pdf" });
//     element.href = URL.createObjectURL(file);
//     element.download = `laporan-ipal-${
//       new Date().toISOString().split("T")[0]
//     }.pdf`;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);

//     alert(
//       `Export PDF Berhasil!\n\nFile "laporan-ipal-${
//         new Date().toISOString().split("T")[0]
//       }.pdf" telah didownload.`
//     );
//   };

//   const exportToCSV = (reports) => {
//     // Membuat file CSV
//     const headers = [
//       "Date",
//       "Time",
//       "Site",
//       "Operator",
//       "pH",
//       "Flow Rate",
//       "Status",
//     ];
//     const csvData = reports.map((report) => [
//       report.date,
//       report.time,
//       `"${report.site}"`,
//       `"${report.operator}"`,
//       report.pH,
//       report.flowRate,
//       report.status,
//     ]);

//     const csvContent = [
//       headers.join(","),
//       ...csvData.map((row) => row.join(",")),
//     ].join("\n");

//     // Download file CSV
//     const element = document.createElement("a");
//     const file = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
//     element.href = URL.createObjectURL(file);
//     element.download = `laporan-ipal-${
//       new Date().toISOString().split("T")[0]
//     }.csv`;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);

//     alert(
//       ` Export CSV Berhasil!\n\nFile "laporan-ipal-${
//         new Date().toISOString().split("T")[0]
//       }.csv" telah didownload.`
//     );
//   };

//   // ==================== NOTIFICATION DATA ====================
//   const [extendedNotifications, setExtendedNotifications] = useState([
//     {
//       id: 5,
//       type: "alert",
//       title: "Water quality alert - Site Jakarta",
//       description:
//         "pH levels outside normal range detected at Jakarta treatment plant",
//       time: "Just now",
//       icon: ExclamationTriangleIcon,
//       color: "text-red-600",
//       bgColor: "bg-red-100",
//       priority: "high",
//       unread: true,
//       action: "viewSites",
//     },
//     {
//       id: 4,
//       type: "system",
//       title: "System maintenance scheduled",
//       description: "Planned system maintenance scheduled for next weekend",
//       time: "10 mins ago",
//       icon: CogIcon,
//       color: "text-orange-600",
//       bgColor: "bg-orange-100",
//       priority: "low",
//       unread: true,
//       action: "viewDashboard",
//     },
//     {
//       id: 3,
//       type: "report",
//       title: "New daily reports submitted",
//       description:
//         "3 new daily operation reports have been submitted and require validation",
//       time: "2 hours ago",
//       icon: DocumentChartBarIcon,
//       color: "text-purple-600",
//       bgColor: "bg-purple-100",
//       priority: "high",
//       unread: true,
//       action: "viewReports",
//     },
//     {
//       id: 2,
//       type: "request",
//       title: "Friend requests pending approval",
//       description:
//         "8 new friend requests from operators awaiting your approval",
//       time: "1 day ago",
//       icon: UserPlusIcon,
//       color: "text-green-600",
//       bgColor: "bg-green-100",
//       priority: "medium",
//       unread: false,
//       action: "viewUsers",
//     },
//     {
//       id: 1,
//       type: "message",
//       title: "New messages from Site Operators",
//       description:
//         "You have 4 unread messages from various site operators requiring attention",
//       time: "2 days ago",
//       icon: EnvelopeIcon,
//       color: "text-blue-600",
//       bgColor: "bg-blue-100",
//       priority: "high",
//       unread: false,
//       action: "viewMessages",
//     },
//   ]);

//   // PERBAIKAN: Hitung unreadCount dari extendedNotifications
//   const unreadCount = extendedNotifications.filter(
//     (notification) => notification.unread
//   ).length;

//   // Notifications untuk dropdown (3 terbaru yang unread)
//   const notifications = extendedNotifications
//     .filter((notification) => notification.unread)
//     .slice(0, 3)
//     .map((notification) => ({
//       ...notification,
//       count: 1, // Setiap notifikasi dihitung 1
//     }));

//   // Filter notifications based on selected filter
//   const filteredNotifications = extendedNotifications.filter((notification) => {
//     if (notificationFilter === "all") return true;
//     return notification.type === notificationFilter;
//   });

//   // ==================== NOTIFICATION HANDLERS ====================
//   const handleNotificationAction = (action, notificationId = null) => {
//     setNotificationOpen(false);
//     setIsNotificationModalOpen(false);

//     // Mark as read if notificationId is provided
//     if (notificationId) {
//       setExtendedNotifications((prev) =>
//         prev.map((notif) =>
//           notif.id === notificationId ? { ...notif, unread: false } : notif
//         )
//       );
//     }

//     // Navigate based on action
//     switch (action) {
//       case "viewMessages":
//         alert(
//           "Opening messages... This would navigate to messages page in a real application."
//         );
//         break;
//       case "viewRequests":
//         alert(
//           "Opening friend requests... This would navigate to friend requests page in a real application."
//         );
//         break;
//       case "viewReports":
//         setActiveMenu("reports");
//         break;
//       case "viewUsers":
//         setActiveMenu("users");
//         break;
//       case "viewSites":
//         setActiveMenu("sites");
//         break;
//       case "viewDashboard":
//         setActiveMenu("dashboard");
//         break;
//       default:
//         setActiveMenu("dashboard");
//     }
//   };

//   const handleSeeAllNotifications = () => {
//     setNotificationOpen(false);
//     setIsNotificationModalOpen(true);
//   };

//   const handleMarkAllAsRead = () => {
//     setExtendedNotifications((prev) =>
//       prev.map((notif) => ({ ...notif, unread: false }))
//     );
//   };

//   const handleMarkAsRead = (notificationId) => {
//     setExtendedNotifications((prev) =>
//       prev.map((notif) =>
//         notif.id === notificationId ? { ...notif, unread: false } : notif
//       )
//     );
//   };

//   const handleReply = (notificationId) => {
//     alert(
//       "Opening reply form... This would open a reply form in a real application."
//     );
//     handleMarkAsRead(notificationId);
//   };

//   // ==================== CHART CALCULATIONS ====================
//   const calculatePieChart = () => {
//     let accumulatedValue = 0;
//     return reportStatusData.map((item, index) => {
//       const startAngle = (accumulatedValue / 100) * 360;
//       accumulatedValue += item.value;
//       const endAngle = (accumulatedValue / 100) * 360;

//       const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

//       const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
//       const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
//       const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
//       const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));

//       return {
//         ...item,
//         path: `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
//         startAngle,
//         endAngle,
//         middleAngle: (startAngle + endAngle) / 2,
//       };
//     });
//   };

//   const pieChartData = calculatePieChart();

//   const getStatusConfig = (status) => {
//     const config = {
//       approved: {
//         icon: CheckCircleIcon,
//         color: "text-green-100",
//         bgColor: "bg-green-800",
//         borderColor: "border-green-200",
//         text: "Approved",
//         textColor: "text-green-800",
//       },
//       pending: {
//         icon: ClockIcon,
//         color: "text-yellow-600",
//         bgColor: "bg-yellow-300",
//         borderColor: "border-yellow-200",
//         text: "Pending",
//         textColor: "text-yellow-800",
//       },
//       rejected: {
//         icon: XCircleIcon,
//         color: "text-red-100",
//         bgColor: "bg-red-600",
//         borderColor: "border-red-200",
//         text: "Rejected",
//         textColor: "text-red-800",
//       },
//     };
//     return config[status] || config.pending;
//   };

//   // ==================== PERBAIKAN: Fungsi untuk mendapatkan warna status site ====================
//   const getSiteStatusConfig = (status) => {
//     const config = {
//       active: {
//         bgColor: "bg-green-100",
//         textColor: "text-green-800",
//         dotColor: "bg-green-400",
//       },
//       inactive: {
//         bgColor: "bg-gray-100",
//         textColor: "text-gray-800",
//         dotColor: "bg-gray-400",
//       },
//       maintenance: {
//         bgColor: "bg-yellow-100",
//         textColor: "text-yellow-800",
//         dotColor: "bg-yellow-400",
//       },
//     };
//     return config[status] || config.inactive;
//   };

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* PERBAIKAN: Sidebar background diubah menjadi putih */}
//       <div
//         className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col
//         z-50 transform transition-transform duration-200 ease-in-out
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       >
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white">
//           <img
//             src="/hero/logosioptima.png"
//             alt="logo"
//             className="w-9 h-9 rounded"
//           />
//           <div>
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600">IPAL Monitoring</p>
//           </div>

//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden ml-auto p-2 text-gray-600 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Sidebar menu */}
//         <nav className="p-4 flex-1">
//           <ul className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   {/* PERBAIKAN: Warna menu aktif dan hover diubah */}
//                   <button
//                     onClick={() => {
//                       setActiveMenu(item.id);
//                       setIsSidebarOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
//                       ${
//                         activeMenu === item.id
//                           ? "bg-teal-100 text-teal-800 border-teal-600 shadow-sm"
//                           : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
//                       }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {item.name}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Admin badge */}
//         {/* Admin badge - REVISI: BACKGROUND ABU-ABU DENGAN KOTAK ROUNDED YANG ESTETIK */}
//         <div className="p-4 mt-auto">
//           <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-12 h-12 bg-gradient-to-r  from-teal-500 to-cyan-600 rounded-full
//         flex items-center justify-center text-white font-bold text-lg shadow-md"
//               >
//                 {usersData.find((user) => user.role === "admin")?.initial ||
//                   "A"}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="font-semibold text-gray-900 truncate text-sm">
//                   {usersData.find((user) => user.role === "admin")?.name ||
//                     "Admin User"}
//                 </p>
//                 <p className="text-gray-600 truncate text-xs mt-0.5">
//                   {usersData.find((user) => user.role === "admin")?.email ||
//                     "admin@sioptima.com"}
//                 </p>
//                 <div className="flex items-center gap-1 mt-1">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <p className="text-gray-500 text-xs truncate">
//                     {usersData.find((user) => user.role === "admin")?.role ||
//                       "Admin"}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-200 mt-3 pt-3">
//               <div className="flex items-center justify-between text-xs text-gray-600">
//                 <span>
//                   {usersData.find((user) => user.role === "admin")?.site ||
//                     "Head Office"}
//                 </span>
//                 <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
//                   Active
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Area */}
//       <div className="flex-1 lg:ml-64">
//         <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
//           <div className="flex justify-between items-center px-4 lg:px-6 py-4">
//             {/* Hamburger */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="lg:hidden p-2 text-gray-600 hover:text-teal-600"
//               >
//                 <Bars3Icon className="w-6 h-6" />
//               </button>

//               <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//                 {menuItems.find((m) => m.id === activeMenu)?.name}
//               </h1>
//             </div>

//             {/* Icons right */}
//             <div className="flex items-center gap-4">
//               {/* Notification Dropdown */}
//               <div
//                 ref={notificationRef}
//                 className="relative flex flex-col items-end gap-2"
//               >
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setNotificationOpen((prev) => !prev);
//                   }}
//                   className="p-2 text-gray-600 hover:text-teal-600 relative transition"
//                 >
//                   <BellIcon className="w-6 h-6" />
//                   {unreadCount > 0 && (
//                     <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                       {unreadCount}
//                     </span>
//                   )}
//                 </button>

//                 {notificationOpen && (
//                   <div
//                     className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     {/* Notification Header */}
//                     <div className="px-4 py-3 border-b border-gray-200">
//                       <div className="flex justify-between items-center">
//                         <h3 className="font-semibold text-gray-800 text-lg">
//                           {unreadCount} Notifications
//                         </h3>
//                         <button
//                           onClick={handleSeeAllNotifications}
//                           className="text-teal-600 hover:text-teal-800 text-sm font-medium"
//                         >
//                           See All
//                         </button>
//                       </div>
//                     </div>

//                     {/* Notification List */}
//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.map((notification) => {
//                         const Icon = notification.icon;
//                         return (
//                           <div
//                             key={notification.id}
//                             className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
//                             onClick={() =>
//                               handleNotificationAction(
//                                 notification.action,
//                                 notification.id
//                               )
//                             }
//                           >
//                             <div className="flex items-start gap-3">
//                               <div
//                                 className={`p-2 rounded-full ${notification.bgColor} flex-shrink-0`}
//                               >
//                                 <Icon
//                                   className={`w-5 h-5 ${notification.color}`}
//                                 />
//                               </div>
//                               <div className="flex-1 min-w-0">
//                                 <div className="flex items-center justify-between mb-1 gap-2">
//                                   <h4 className="font-semibold text-gray-900 text-sm truncate flex-1">
//                                     {notification.title}
//                                   </h4>
//                                   <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
//                                     {notification.time}
//                                   </span>
//                                 </div>
//                                 <div className="flex items-center justify-between gap-2">
//                                   <p className="text-sm text-gray-600 truncate flex-1">
//                                     {notification.description}
//                                   </p>
//                                   <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
//                                     new
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Profile Dropdown */}
//               <div
//                 ref={dropdownRef}
//                 className="relative flex flex-col items-end gap-2"
//               >
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setDropdownOpen((prev) => !prev);
//                   }}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <div
//                     className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     {usersData.find((user) => user.role === "admin")?.initial ||
//                       "A"}
//                   </div>

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className={`w-4 h-4 text-gray-600 transition-transform duration-200
//         ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {dropdownOpen && (
//                   <div
//                     className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     {/* User Info Section - MENGGUNAKAN DATA REAL DARI usersData */}
//                     <div className="px-4 py-3 border-b border-gray-200">
//                       <div className="flex items-center gap-3">
//                         <div
//                           className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
//             rounded-full flex items-center justify-center text-white font-bold"
//                         >
//                           {usersData.find((user) => user.role === "admin")
//                             ?.initial || "A"}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="font-semibold text-gray-900 truncate">
//                             {usersData.find((user) => user.role === "admin")
//                               ?.name || "Admin User"}
//                           </p>
//                           <p className="text-sm text-gray-600 truncate">
//                             {usersData.find((user) => user.role === "admin")
//                               ?.email || "admin@sioptima.com"}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {usersData.find((user) => user.role === "admin")
//                               ?.site || "Head Office"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Logout Button */}
//                     <button
//                       onClick={async () => {
//                         setDropdownOpen(false);
//                         await fetch("/api/auth/logout", { method: "POST" });
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2
//         text-red-600 hover:bg-red-50 text-left text-sm"
//                     >
//                       <ArrowRightOnRectangleIcon className="w-4 h-4" />
//                       Log Out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* ==================== HELP/TICKET CONTENT ==================== */}
//         {activeMenu === "help" && (
//           <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
//               <div>
//                 <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   Help Ticket System
//                 </h1>
//                 <p className="text-gray-600 text-sm">
//                   Kelola tiket bantuan dari operator dan berikan solusi
//                 </p>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Total Tickets
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
//                     <ChatBubbleLeftRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {helpTickets.length}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Open
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
//                     <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {
//                     helpTickets.filter((ticket) => ticket.status === "open")
//                       .length
//                   }
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Pending
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
//                     <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {
//                     helpTickets.filter((ticket) => ticket.status === "pending")
//                       .length
//                   }
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Closed
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
//                     <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {
//                     helpTickets.filter((ticket) => ticket.status === "closed")
//                       .length
//                   }
//                 </p>
//               </div>
//             </div>

//             {/* Search and Filter */}
//             <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
//               <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start lg:items-center">
//                 <div className="relative flex-1 w-full">
//                   <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search tickets by number, operator, or subject..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-1 sm:gap-2">
//                   {["all", "open", "pending", "closed"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => setTicketFilter(status)}
//                       className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
//                         ticketFilter === status
//                           ? "bg-teal-600 text-white shadow-sm"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {status.charAt(0).toUpperCase() + status.slice(1)}
//                     </button>
//                   ))}
//                 </div>

//                 <select
//                   value={ticketPriorityFilter}
//                   onChange={(e) => setTicketPriorityFilter(e.target.value)}
//                   className="w-full lg:w-auto px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
//                 >
//                   <option value="all">All Priority</option>
//                   <option value="high">High</option>
//                   <option value="medium">Medium</option>
//                   <option value="low">Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Tickets Table */}
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Desktop Table Header */}
//               <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
//                 <div className="col-span-2">Ticket ID</div>
//                 <div className="col-span-2">Operator</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-3">Subject</div>
//                 <div className="col-span-1 text-center">Priority</div>
//                 <div className="col-span-1 text-center">Status</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>

//               {/* Table Body */}
//               <div className="divide-y divide-gray-200">
//                 {filteredHelpTickets.length === 0 ? (
//                   <div className="p-6 sm:p-8 text-center text-gray-500 text-sm">
//                     No tickets found matching your criteria.
//                   </div>
//                 ) : (
//                   filteredHelpTickets.map((ticket) => {
//                     const priorityConfig = getTicketPriorityConfig(
//                       ticket.priority
//                     );
//                     const statusConfig = getTicketStatusConfig(ticket.status);
//                     const PriorityIcon = priorityConfig.icon;
//                     const StatusIcon = statusConfig.icon;

//                     return (
//                       <div
//                         key={ticket.id}
//                         className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
//                       >
//                         {/* Mobile View */}
//                         <div className="lg:hidden space-y-3">
//                           <div className="flex justify-between items-start">
//                             <div className="space-y-1">
//                               <p className="font-semibold text-gray-900 text-sm">
//                                 {ticket.ticketNumber}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {ticket.createdAt}
//                               </p>
//                             </div>
//                             <div className="flex flex-col items-end gap-1">
//                               <span
//                                 className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}
//                               >
//                                 <PriorityIcon className="w-3 h-3" />
//                                 {priorityConfig.label}
//                               </span>
//                               <span
//                                 className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}
//                               >
//                                 <StatusIcon className="w-3 h-3" />
//                                 {statusConfig.label}
//                               </span>
//                             </div>
//                           </div>

//                           <div>
//                             <p className="text-xs text-gray-500 mb-1">
//                               Operator
//                             </p>
//                             <p className="text-sm font-medium text-gray-900">
//                               {ticket.operatorName}
//                             </p>
//                           </div>

//                           <div>
//                             <p className="text-xs text-gray-500 mb-1">Site</p>
//                             <p className="text-sm font-medium text-gray-900">
//                               {ticket.site}
//                             </p>
//                           </div>

//                           <div>
//                             <p className="text-xs text-gray-500 mb-1">
//                               Subject
//                             </p>
//                             <p className="text-sm font-medium text-gray-900">
//                               {ticket.subject}
//                             </p>
//                           </div>

//                           <div className="flex justify-end pt-3 border-t border-gray-200">
//                             <button
//                               onClick={() => handleViewTicket(ticket)}
//                               className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 border border-blue-200 text-xs font-medium"
//                             >
//                               <EyeIcon className="w-3 h-3" />
//                               View Details
//                             </button>
//                           </div>
//                         </div>

//                         {/* Desktop View */}
//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <div>
//                             <p className="font-medium text-gray-900 text-sm">
//                               {ticket.ticketNumber}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                               {ticket.createdAt.split(" ")[0]}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <div>
//                             <p className="font-medium text-gray-900 text-sm">
//                               {ticket.operatorName}
//                             </p>
//                             <p className="text-xs text-gray-500 truncate">
//                               {ticket.operatorEmail}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p className="text-gray-700 text-sm truncate">
//                             {ticket.site}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-3 items-center">
//                           <p
//                             className="text-gray-700 text-sm truncate"
//                             title={ticket.subject}
//                           >
//                             {ticket.subject}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <span
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}
//                             title={priorityConfig.label}
//                           >
//                             <PriorityIcon className="w-3 h-3" />
//                             {priorityConfig.label}
//                           </span>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <span
//                             className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}
//                             title={statusConfig.label}
//                           >
//                             <StatusIcon className="w-3 h-3" />
//                             {statusConfig.label}
//                           </span>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <button
//                             onClick={() => handleViewTicket(ticket)}
//                             className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
//                             title="View Ticket Details"
//                           >
//                             <EyeIcon className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     );
//                   })
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Modal Detail Tiket */}
//         {/* Modal Detail Tiket - REVISI DENGAN VALIDASI DAN TOMBOL RAPI */}
//         {isTicketModalOpen && selectedTicket && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
//             <div
//               ref={ticketModalRef}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[95vh]"
//             >
//               {/* Header Modal */}
//               <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">
//                     Ticket Details - {selectedTicket.ticketNumber}
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     Submitted by {selectedTicket.operatorName} on{" "}
//                     {selectedTicket.createdAt}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     setIsTicketModalOpen(false);
//                     setSolutionError("");
//                   }}
//                   className="p-2 hover:bg-gray-200 rounded-lg transition"
//                 >
//                   <XMarkIcon className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="flex-1 overflow-y-auto p-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {/* Left Column - Ticket Information */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
//                       Ticket Information
//                     </h3>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Ticket ID
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedTicket.ticketNumber}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Status
//                         </label>
//                         {(() => {
//                           const config = getTicketStatusConfig(
//                             selectedTicket.status
//                           );
//                           const Icon = config.icon;
//                           return (
//                             <span
//                               className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.bgColor} ${config.color} border ${config.borderColor}`}
//                             >
//                               <Icon className="w-4 h-4" />
//                               {config.label}
//                             </span>
//                           );
//                         })()}
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Operator
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedTicket.operatorName}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Email
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedTicket.operatorEmail}
//                         </p>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Site
//                       </label>
//                       <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                         {selectedTicket.site}
//                       </p>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Priority
//                       </label>
//                       {(() => {
//                         const config = getTicketPriorityConfig(
//                           selectedTicket.priority
//                         );
//                         const Icon = config.icon;
//                         return (
//                           <span
//                             className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.bgColor} ${config.color} border ${config.borderColor}`}
//                           >
//                             <Icon className="w-4 h-4" />
//                             {config.label}
//                           </span>
//                         );
//                       })()}
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Subject
//                       </label>
//                       <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded border">
//                         {selectedTicket.subject}
//                       </p>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Description
//                       </label>
//                       <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded border whitespace-pre-wrap">
//                         {selectedTicket.description}
//                       </div>
//                     </div>

//                     {/* Attachments from Operator - REVISI DENGAN FITUR BUKA/INSTALL */}
//                     {selectedTicket.attachments &&
//                       selectedTicket.attachments.length > 0 && (
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Attachments from Operator
//                           </label>
//                           <div className="flex flex-wrap gap-2">
//                             {selectedTicket.attachments.map((file, index) => {
//                               const isImage =
//                                 /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file);
//                               return (
//                                 <div
//                                   key={index}
//                                   className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
//                                 >
//                                   {isImage ? (
//                                     <PhotoIcon className="w-4 h-4 text-blue-600" />
//                                   ) : (
//                                     <DocumentChartBarIcon className="w-4 h-4 text-gray-600" />
//                                   )}
//                                   <span className="text-sm text-gray-700 truncate max-w-[150px]">
//                                     {file}
//                                   </span>
//                                   <div className="flex gap-1">
//                                     <button
//                                       onClick={() => handleOpenImage(file)}
//                                       className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
//                                       title="Open File"
//                                     >
//                                       <EyeIcon className="w-4 h-4" />
//                                     </button>
//                                     <button
//                                       onClick={() => handleDownloadImage(file)}
//                                       className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
//                                       title="Download File"
//                                     >
//                                       <ArrowDownTrayIcon className="w-4 h-4" />
//                                     </button>
//                                   </div>
//                                 </div>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       )}
//                   </div>

//                   {/* Right Column - Admin Actions */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
//                       Admin Actions
//                     </h3>

//                     {/* Admin Notes */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Admin Notes (Internal)
//                       </label>
//                       <textarea
//                         value={adminNotesText}
//                         onChange={(e) => setAdminNotesText(e.target.value)}
//                         placeholder="Catatan internal untuk tim admin..."
//                         rows={4}
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm resize-none"
//                       />
//                       <p className="text-xs text-gray-500 mt-1">
//                         Catatan ini hanya visible untuk admin
//                       </p>
//                     </div>

//                     {/* Solution dengan validasi */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Solution (Visible to Operator){" "}
//                         <span className="text-red-500">*</span>
//                       </label>
//                       <textarea
//                         value={solutionText}
//                         onChange={(e) => {
//                           setSolutionText(e.target.value);
//                           if (solutionError) setSolutionError("");
//                         }}
//                         placeholder="Masukkan solusi untuk kendala operator..."
//                         rows={6}
//                         className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm resize-none ${
//                           solutionError ? "border-red-500" : "border-gray-300"
//                         }`}
//                         required
//                       />
//                       {solutionError && (
//                         <p className="text-red-500 text-xs mt-1">
//                           {solutionError}
//                         </p>
//                       )}
//                       <p className="text-xs text-gray-500 mt-1">
//                         Solusi ini akan dikirim ke operator dan status tiket
//                         berubah menjadi "Selesai"
//                       </p>
//                     </div>

//                     {/* Closed Info */}
//                     {selectedTicket.status === "closed" && (
//                       <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                         <div className="flex items-start gap-3">
//                           <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
//                           <div>
//                             <p className="text-sm font-medium text-green-900">
//                               Ticket Already Closed
//                             </p>
//                             <p className="text-xs text-green-700 mt-1">
//                               Closed by {selectedTicket.closedBy} on{" "}
//                               {selectedTicket.closedAt}
//                             </p>
//                             {selectedTicket.solution && (
//                               <div className="mt-2">
//                                 <p className="text-xs font-medium text-green-900">
//                                   Solution Provided:
//                                 </p>
//                                 <p className="text-xs text-green-700 mt-1 whitespace-pre-wrap">
//                                   {selectedTicket.solution}
//                                 </p>
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Footer Actions - REVISI TOMBOL LEBIH RAPI */}
//               <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
//                 <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//                   <div className="text-sm text-gray-600">
//                     Last updated: {selectedTicket.updatedAt}
//                   </div>
//                   <div className="flex gap-3 flex-wrap justify-end">
//                     {selectedTicket.status !== "closed" && (
//                       <>
//                         <button
//                           onClick={handleSaveNotes}
//                           className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
//                         >
//                           <PencilIcon className="w-4 h-4" />
//                           Save Notes
//                         </button>
//                         <button
//                           onClick={handleSetPending}
//                           className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition font-medium text-sm"
//                         >
//                           <ClockIcon className="w-4 h-4" />
//                           Set Pending
//                         </button>
//                         <button
//                           onClick={handleCloseTicket}
//                           className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
//                         >
//                           <PaperAirplaneIcon className="w-4 h-4" />
//                           Send Solution & Close
//                         </button>
//                       </>
//                     )}
//                     <button
//                       onClick={() => {
//                         setIsTicketModalOpen(false);
//                         setSolutionError("");
//                       }}
//                       className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium text-sm"
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Modal Review Detail */}
//         {isReviewModalOpen && selectedReport && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
//             <div
//               ref={reviewModalRef}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[95vh]"
//             >
//               {/* Header Modal */}
//               <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">
//                     Report Details
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     Review detailed information for report #{selectedReport.id}
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setIsReviewModalOpen(false)}
//                   className="p-2 hover:bg-gray-200 rounded-lg transition"
//                 >
//                   <XMarkIcon className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="flex-1 overflow-y-auto p-6">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {/* Basic Information */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
//                       Basic Information
//                     </h3>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Report ID
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           #{selectedReport.id}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Date & Time
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedReport.date} at {selectedReport.time}
//                         </p>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Site
//                       </label>
//                       <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                         {selectedReport.site}
//                       </p>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Operator
//                       </label>
//                       <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                         {selectedReport.operator}
//                       </p>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           pH Level
//                         </label>
//                         <p
//                           className={`text-sm font-medium p-2 rounded border ${
//                             parseFloat(selectedReport.pH) >= 7.0 &&
//                             parseFloat(selectedReport.pH) <= 8.5
//                               ? "bg-green-100 text-green-800 border-green-200"
//                               : parseFloat(selectedReport.pH) >= 6.5
//                                 ? "bg-yellow-100 text-yellow-800 border-yellow-200"
//                                 : "bg-red-100 text-red-800 border-red-200"
//                           }`}
//                         >
//                           {selectedReport.pH}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Flow Rate
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedReport.flowRate}
//                         </p>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Status
//                       </label>
//                       <span
//                         className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
//                           selectedReport.status === "approved"
//                             ? "bg-green-100 text-green-800 border border-green-200"
//                             : selectedReport.status === "pending"
//                               ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
//                               : "bg-red-100 text-red-800 border border-red-200"
//                         }`}
//                       >
//                         {selectedReport.status === "approved" && (
//                           <CheckCircleIcon className="w-4 h-4" />
//                         )}
//                         {selectedReport.status === "pending" && (
//                           <ClockIcon className="w-4 h-4" />
//                         )}
//                         {selectedReport.status === "rejected" && (
//                           <XCircleIcon className="w-4 h-4" />
//                         )}
//                         {selectedReport.status.charAt(0).toUpperCase() +
//                           selectedReport.status.slice(1)}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Detailed Parameters */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
//                       Water Quality Parameters
//                     </h3>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Temperature
//                         </label>
//                         <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
//                           {selectedReport.details.temperature}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           TDS
//                         </label>
//                         <p
//                           className={`text-sm font-medium p-2 rounded border ${
//                             parseInt(selectedReport.details.tds) <= 500
//                               ? "bg-green-100 text-green-800 border-green-200"
//                               : parseInt(selectedReport.details.tds) <= 1000
//                                 ? "bg-yellow-100 text-yellow-800 border-yellow-200"
//                                 : "bg-red-100 text-red-800 border-red-200"
//                           }`}
//                         >
//                           {selectedReport.details.tds}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Turbidity
//                         </label>
//                         <p
//                           className={`text-sm font-medium p-2 rounded border ${
//                             parseFloat(selectedReport.details.turbidity) <= 5.0
//                               ? "bg-green-100 text-green-800 border-green-200"
//                               : parseFloat(selectedReport.details.turbidity) <=
//                                   10.0
//                                 ? "bg-yellow-100 text-yellow-800 border-yellow-200"
//                                 : "bg-red-100 text-red-800 border-red-200"
//                           }`}
//                         >
//                           {selectedReport.details.turbidity}
//                         </p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                           Chlorine
//                         </label>
//                         <p
//                           className={`text-sm font-medium p-2 rounded border ${
//                             parseFloat(selectedReport.details.chlorine) >=
//                               0.5 &&
//                             parseFloat(selectedReport.details.chlorine) <= 2.0
//                               ? "bg-green-100 text-green-800 border-green-200"
//                               : parseFloat(selectedReport.details.chlorine) > 0
//                                 ? "bg-yellow-100 text-yellow-800 border-yellow-200"
//                                 : "bg-red-100 text-red-800 border-red-200"
//                           }`}
//                         >
//                           {selectedReport.details.chlorine}
//                         </p>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Operator Notes
//                       </label>
//                       <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded border min-h-[80px]">
//                         {selectedReport.details.notes}
//                       </p>
//                     </div>

//                     {/* PERBAIKAN: Attached Image - bisa diklik untuk preview */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Attached Image
//                       </label>
//                       <div className="flex gap-2">
//                         {selectedReport.details.images &&
//                         selectedReport.details.images.length > 0 ? (
//                           <div className="relative">
//                             <button
//                               onClick={() => {
//                                 // Simulasi membuka gambar dalam tab baru atau modal preview
//                                 const imageUrl = `/images/reports/${selectedReport.details.images[0]}`;
//                                 window.open(imageUrl, "_blank");
//                               }}
//                               className="w-32 h-32 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//                             >
//                               <div className="text-center">
//                                 <DocumentChartBarIcon className="w-8 h-8 text-gray-500 mx-auto mb-2" />
//                                 <span className="text-xs text-gray-600 block truncate px-1">
//                                   {selectedReport.details.images[0]}
//                                 </span>
//                                 <span className="text-xs text-blue-600 mt-1 block font-medium">
//                                   Click to view
//                                 </span>
//                               </div>
//                             </button>
//                           </div>
//                         ) : (
//                           <div className="w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
//                             <div className="text-center">
//                               <DocumentChartBarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                               <p className="text-xs text-gray-500">No image</p>
//                               <p className="text-xs text-gray-400">attached</p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                       <p className="text-xs text-gray-500 mt-2">
//                         Operator can attach only one image per report. Click the
//                         image to view in full size.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer Actions */}
//               <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
//                 <div className="text-sm text-gray-600">
//                   Last updated: {selectedReport.date} {selectedReport.time}
//                 </div>
//                 <div className="flex gap-3 flex-wrap justify-center">
//                   {selectedReport.status === "pending" && (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleApprove(selectedReport.id);
//                           setIsReviewModalOpen(false);
//                         }}
//                         className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
//                       >
//                         <CheckIcon className="w-4 h-4" />
//                         Approve
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleReject(selectedReport.id);
//                           setIsReviewModalOpen(false);
//                         }}
//                         className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
//                       >
//                         <XCircleIcon className="w-4 h-4" />
//                         Reject
//                       </button>
//                     </>
//                   )}
//                   <button
//                     onClick={() => setIsReviewModalOpen(false)}
//                     className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Modal Notifikasi Lengkap */}
//         {isNotificationModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
//             <div
//               ref={notificationModalRef}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
//             >
//               {/* Header Modal */}
//               <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">
//                     All Notifications
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     Manage and review all system notifications
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setIsNotificationModalOpen(false)}
//                   className="p-2 hover:bg-gray-200 rounded-lg transition"
//                 >
//                   <XMarkIcon className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               {/* Filter Options */}
//               <div className="px-6 py-4 border-b border-gray-200 bg-white">
//                 <div className="flex flex-wrap gap-2">
//                   {[
//                     { key: "all", label: "All" },
//                     { key: "message", label: "Messages" },
//                     { key: "request", label: "Requests" },
//                     { key: "report", label: "Reports" },
//                     { key: "system", label: "System" },
//                     { key: "alert", label: "Alerts" },
//                   ].map((filter) => (
//                     <button
//                       key={filter.key}
//                       onClick={() => setNotificationFilter(filter.key)}
//                       className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
//                         notificationFilter === filter.key
//                           ? "bg-teal-600 text-white"
//                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {filter.label}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Notifications List */}
//               <div className="overflow-y-auto max-h-[60vh]">
//                 {filteredNotifications.length === 0 ? (
//                   <div className="px-6 py-8 text-center text-gray-500">
//                     No notifications found for the selected filter.
//                   </div>
//                 ) : (
//                   filteredNotifications.map((notification) => {
//                     const Icon = notification.icon;
//                     return (
//                       <div
//                         key={notification.id}
//                         className={`px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition ${
//                           notification.unread ? "bg-blue-50" : ""
//                         }`}
//                       >
//                         <div className="flex items-start gap-3">
//                           <div
//                             className={`p-2 rounded-full ${notification.bgColor} flex-shrink-0`}
//                           >
//                             <Icon className={`w-5 h-5 ${notification.color}`} />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <div className="flex items-start justify-between mb-1">
//                               <div className="flex items-center gap-2 flex-1 min-w-0">
//                                 <h4 className="font-semibold text-gray-900 text-sm truncate">
//                                   {notification.title}
//                                 </h4>
//                                 {notification.priority === "high" && (
//                                   <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex-shrink-0">
//                                     High Priority
//                                   </span>
//                                 )}
//                                 {notification.unread && (
//                                   <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
//                                 )}
//                               </div>
//                               <span className="text-xs text-gray-500 whitespace-nowrap ml-2 flex-shrink-0">
//                                 {notification.time}
//                               </span>
//                             </div>
//                             <p className="text-sm text-gray-600 mb-2 break-words">
//                               {notification.description}
//                             </p>
//                             <div className="flex gap-2 flex-wrap">
//                               <button
//                                 className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
//                                 onClick={() =>
//                                   handleNotificationAction(
//                                     notification.action,
//                                     notification.id
//                                   )
//                                 }
//                               >
//                                 View Details
//                               </button>
//                               <button
//                                 className="text-xs text-gray-600 hover:text-gray-800 hover:underline"
//                                 onClick={() =>
//                                   handleMarkAsRead(notification.id)
//                                 }
//                               >
//                                 Mark as Read
//                               </button>
//                               {notification.type === "message" && (
//                                 <button
//                                   className="text-xs text-green-600 hover:text-green-800 hover:underline"
//                                   onClick={() => handleReply(notification.id)}
//                                 >
//                                   Reply
//                                 </button>
//                               )}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })
//                 )}
//               </div>

//               {/* Footer Actions */}
//               <div className="px-6 py-1 border-t border-gray-200 bg-gray-50 flex justify-end">
//                 <button
//                   className="text-sm text-teal-600 hover:text-teal-800 font-medium transition px-3 py-1 rounded hover:bg-teal-50"
//                   onClick={handleMarkAllAsRead}
//                 >
//                   Mark All as Read
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Modal Export Reports */}
//         {isExportModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
//             <div
//               ref={exportModalRef}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden"
//             >
//               {/* Header Modal */}
//               <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">
//                     Export Laporan
//                   </h2>
//                   <p className="text-sm text-gray-600">
//                     Pilih format dan filter export
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setIsExportModalOpen(false)}
//                   className="p-2 hover:bg-gray-200 rounded-lg transition"
//                 >
//                   <XMarkIcon className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               {/* Form Content */}
//               <div className="p-6 overflow-y-auto flex-1">
//                 <div className="space-y-6">
//                   {/* Format Export */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-900 mb-3">
//                       Format Export
//                     </label>
//                     <div className="grid grid-cols-2 gap-3">
//                       <button
//                         onClick={() => setExportFormat("pdf")}
//                         className={`p-4 border-2 rounded-lg text-center transition ${
//                           exportFormat === "pdf"
//                             ? "border-teal-500 bg-teal-50 text-teal-700"
//                             : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
//                         }`}
//                       >
//                         <DocumentChartBarIcon className="w-8 h-8 mx-auto mb-2" />
//                         <span className="font-medium">PDF</span>
//                         <p className="text-xs text-gray-500 mt-1">
//                           Format dokumen
//                         </p>
//                       </button>
//                       <button
//                         onClick={() => setExportFormat("csv")}
//                         className={`p-4 border-2 rounded-lg text-center transition ${
//                           exportFormat === "csv"
//                             ? "border-teal-500 bg-teal-50 text-teal-700"
//                             : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
//                         }`}
//                       >
//                         <ArrowDownTrayIcon className="w-8 h-8 mx-auto mb-2" />
//                         <span className="font-medium">CSV</span>
//                         <p className="text-xs text-gray-500 mt-1">
//                           Format spreadsheet
//                         </p>
//                       </button>
//                     </div>
//                   </div>

//                   {/* Rentang Waktu */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-900 mb-2">
//                       Rentang Waktu
//                     </label>
//                     <select
//                       value={exportDateRange}
//                       onChange={(e) => setExportDateRange(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
//                     >
//                       <option value="today">Hari Ini</option>
//                       <option value="week">Minggu Ini</option>
//                       <option value="month">Bulan Ini</option>
//                       <option value="all">Semua Data</option>
//                     </select>
//                   </div>

//                   {/* Status Laporan */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-900 mb-2">
//                       Status Laporan
//                     </label>
//                     <select
//                       value={exportStatus}
//                       onChange={(e) => setExportStatus(e.target.value)}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
//                     >
//                       <option value="all">Semua Status</option>
//                       <option value="approved">Disetujui</option>
//                       <option value="pending">Pending</option>
//                       <option value="rejected">Ditolak</option>
//                     </select>
//                   </div>

//                   {/* Informasi Export */}
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//                     <div className="flex items-start gap-3">
//                       <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                       <div>
//                         <p className="text-sm font-medium text-blue-900">
//                           Informasi Export
//                         </p>
//                         <p className="text-xs text-blue-700 mt-1">
//                           Data akan diexport berdasarkan filter yang aktif:
//                           {searchQuery && ` pencarian "${searchQuery}"`}
//                           {selectedStatus !== "All Reports" &&
//                             ` status "${selectedStatus}"`}
//                           {selectedSite !== "all" && ` site "${selectedSite}"`}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Footer Actions */}
//               <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
//                 <button
//                   onClick={() => setIsExportModalOpen(false)}
//                   className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
//                 >
//                   Batal
//                 </button>
//                 <button
//                   onClick={handleConfirmExport}
//                   className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium"
//                 >
//                   <ArrowDownTrayIcon className="w-4 h-4" />
//                   Export {exportFormat.toUpperCase()}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* DASHBOARD CONTENT - PERBAIKAN RESPONSIVITAS UTAMA */}
//         {activeMenu === "dashboard" && (
//           <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
//             {/* Headline + Time Range Filter */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8">
//               <div className="mb-4 lg:mb-0">
//                 <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   Admin Dashboard
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Monitor IPAL operations across all sites
//                 </p>
//               </div>

//               {/* tombol ini tidak perlu, dinonaktifkan saja */}
//               {/* <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-full p-1 w-full lg:w-auto justify-center">
//                 {["Week", "Month", "Year"].map((range) => (
//                   <button
//                     key={range}
//                     onClick={() => setSelectedRange(range)}
//                     className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex-1 lg:flex-none
//               ${
//                 selectedRange === range
//                   ? "bg-teal-600 text-white shadow-sm"
//                   : "text-gray-700 hover:bg-gray-200"
//               }
//             `}
//                   >
//                     {range}
//                   </button>
//                 ))}
//               </div> */}
//               {/* tombol ini tidak perlu, dinonaktifkan saja */}
//             </div>

//             {/* TOP KPIs - PERBAIKAN: Grid responsive untuk semua ukuran layar */}
//             <div className="mb-6 lg:mb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
//               {[
//                 {
//                   label: "Total Sites",
//                   value: totalSites,
//                   percent: "+4.2%",
//                   icon: MapPinIcon,
//                 },
//                 {
//                   label: "Active Operators",
//                   value: totalOperators,
//                   percent: "+2.1%",
//                   icon: UsersIcon,
//                 },
//                 {
//                   label: "Daily Reports",
//                   value: totalReports,
//                   percent: "+8.5%",
//                   icon: DocumentChartBarIcon,
//                 },
//                 {
//                   label: "Compliance Rate",
//                   value: `${complianceRate}%`,
//                   percent: "+1.2%",
//                   icon: ChartBarIcon,
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200"
//                   >
//                     <div className="flex justify-between items-start mb-2 sm:mb-3">
//                       <p className="text-xs sm:text-sm text-gray-600 font-medium">
//                         {item.label}
//                       </p>
//                       <div className="p-1 sm:p-2 rounded-lg bg-teal-50">
//                         <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                       </div>
//                     </div>
//                     <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
//                       {item.value}
//                     </p>
//                     <p className="text-xs text-green-600 font-medium">
//                       {item.percent} vs last month
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* SECOND ROW - Charts - PERBAIKAN: Layout responsive */}
//             <div className="mb-6 lg:mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
//               {/* Water Quality Trends */}
//               <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
//                   Water Quality Trends
//                 </h3>
//                 <div className="relative">
//                   <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-2 sm:py-4">
//                     <span>800</span>
//                     <span>600</span>
//                     <span>400</span>
//                     <span>200</span>
//                     <span>0</span>
//                   </div>

//                   <div className="ml-6 sm:ml-8">
//                     <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 px-1 sm:px-2 border-b border-l border-gray-200">
//                       {waterQualityData.map((data, index) => (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           <div
//                             className="w-3 sm:w-4 lg:w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
//                             style={{ height: `${(data.ec / 800) * 80}px` }}
//                             onMouseEnter={() => setHoveredBar(index)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           />

//                           <span className="text-xs text-gray-600 mt-1 sm:mt-2">
//                             {data.day}
//                           </span>

//                           {hoveredBar === index && (
//                             <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 min-w-28 sm:min-w-32 shadow-lg">
//                               <div className="flex items-center gap-1 sm:gap-2 mb-1">
//                                 <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
//                                 <p>EC: {data.ec}</p>
//                               </div>
//                               <div className="flex items-center gap-1 sm:gap-2 mb-1">
//                                 <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
//                                 <p>TDS: {data.tds}</p>
//                               </div>
//                               <div className="flex items-center gap-1 sm:gap-2">
//                                 <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded"></div>
//                                 <p>pH: {data.pH}</p>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>

//                     <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs">
//                       <div className="flex items-center gap-1">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
//                         <span className="text-gray-600">EC</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
//                         <span className="text-gray-600">TDS</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded"></div>
//                         <span className="text-gray-600">pH</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Report Status - PERBAIKAN: Layout responsive untuk pie chart */}

//               <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
//                 {/* PERBAIKAN: Tambahkan tanggal seperti di HRD */}
//                 <div className="flex justify-between items-center mb-4 sm:mb-5">
//                   <h3 className="font-semibold text-base sm:text-lg text-gray-800">
//                     Report Status
//                   </h3>
//                   <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded hidden sm:block">
//                     {new Date().toLocaleDateString("en-US", {
//                       weekday: "long",
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </div>
//                   <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded sm:hidden">
//                     {new Date().toLocaleDateString("en-US", {
//                       month: "short",
//                       day: "numeric",
//                     })}
//                   </div>
//                 </div>

//                 <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
//                   <div className="relative flex flex-col items-center">
//                     <svg
//                       width="120"
//                       height="120"
//                       className="sm:w-140 sm:h-140 lg:w-160 lg:h-160 cursor-pointer"
//                       viewBox="0 0 100 100"
//                     >
//                       {pieChartData.map((item, index) => (
//                         <path
//                           key={item.status}
//                           d={item.path}
//                           fill={item.color}
//                           className={`transition-all duration-300 ${
//                             hoveredPie === index
//                               ? "opacity-80 scale-105"
//                               : "opacity-100"
//                           }`}
//                           stroke="white"
//                           strokeWidth="2"
//                           onMouseEnter={() => setHoveredPie(index)}
//                           onMouseLeave={() => setHoveredPie(null)}
//                         />
//                       ))}
//                     </svg>

//                     <div className="text-center mt-2 sm:mt-4">
//                       <div className="text-xl sm:text-2xl font-bold text-gray-800">
//                         {complianceRate}%
//                       </div>
//                       <div className="text-sm text-gray-600">Approved</div>
//                     </div>

//                     {hoveredPie !== null && (
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 shadow-lg">
//                         <div className="flex items-center gap-1 sm:gap-2">
//                           <div
//                             className="w-2 h-2 sm:w-3 sm:h-3 rounded"
//                             style={{
//                               backgroundColor: pieChartData[hoveredPie].color,
//                             }}
//                           ></div>
//                           <span>
//                             {pieChartData[hoveredPie].status}:{" "}
//                             {pieChartData[hoveredPie].value}%
//                           </span>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 w-full">
//                     {reportStatusData.map((item, index) => (
//                       <div
//                         key={item.status}
//                         className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
//                           hoveredPie === index
//                             ? "bg-gray-50 transform scale-105"
//                             : ""
//                         }`}
//                         onMouseEnter={() => setHoveredPie(index)}
//                         onMouseLeave={() => setHoveredPie(null)}
//                       >
//                         <div className="flex items-center gap-2 sm:gap-3">
//                           <div
//                             className="w-3 h-3 sm:w-4 sm:h-4 rounded transition-transform duration-200"
//                             style={{ backgroundColor: item.color }}
//                           ></div>
//                           <span className="text-sm text-gray-700 font-medium">
//                             {item.status}
//                           </span>
//                         </div>
//                         <span className="text-base sm:text-lg font-bold text-gray-900">
//                           {item.value}%
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* THIRD ROW - Site Performance - PERBAIKAN: Responsive chart */}
//             <div className="mb-6 lg:mb-8 bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
//               <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
//                 Site Performance
//               </h3>

//               <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded"></div>
//                   <span className="text-gray-600">Compliance</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
//                   <span className="text-gray-600">Reports</span>
//                 </div>
//               </div>

//               <div className="relative">
//                 <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-2 sm:py-4">
//                   <span>100%</span>
//                   <span>75%</span>
//                   <span>50%</span>
//                   <span>25%</span>
//                   <span>0%</span>
//                 </div>

//                 <div className="ml-6 sm:ml-8">
//                   <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-2 sm:gap-3 lg:gap-4 px-1 sm:px-2 border-b border-l border-gray-200 overflow-x-auto">
//                     {sitePerformanceData.map((site, index) => (
//                       <div
//                         key={index}
//                         className="flex flex-col items-center flex-1 min-w-[50px] sm:min-w-[60px] relative"
//                       >
//                         <div className="flex gap-1 sm:gap-2 items-end w-full justify-center">
//                           <div
//                             className="w-2 sm:w-3 lg:w-4 bg-teal-500 rounded-t transition-all duration-300 hover:bg-teal-600 cursor-pointer relative group"
//                             style={{
//                               height: `${(site.compliance / 100) * 80}px`,
//                             }}
//                           >
//                             <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
//                               Compliance: {site.compliance}%
//                             </div>
//                           </div>

//                           <div
//                             className="w-2 sm:w-3 lg:w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 cursor-pointer relative group"
//                             style={{ height: `${(site.reports / 15) * 80}px` }}
//                           >
//                             <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
//                               Reports: {site.reports}
//                             </div>
//                           </div>
//                         </div>

//                         <span className="text-xs text-gray-600 mt-1 sm:mt-2 text-center w-full truncate px-1">
//                           {site.city}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* LAST ROW - PERBAIKAN: Layout responsive untuk tables dan alerts */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
//               <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md lg:col-span-2">
//                 <div className="flex justify-between items-center mb-4 sm:mb-5">
//                   <h3 className="font-semibold text-base sm:text-lg text-gray-800">
//                     Recent Reports
//                   </h3>
//                   <button
//                     className="text-teal-600 text-sm font-medium hover:underline"
//                     onClick={() => setActiveMenu("reports")}
//                   >
//                     View All
//                   </button>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm text-gray-800">
//                     <thead>
//                       <tr className="border-b border-gray-200">
//                         <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
//                           Site
//                         </th>
//                         <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
//                           Operator
//                         </th>
//                         <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
//                           pH
//                         </th>
//                         <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
//                           Status
//                         </th>
//                         <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
//                           Time
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {reportsData.slice(0, 5).map((report) => (
//                         <tr
//                           key={report.id}
//                           className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
//                         >
//                           <td className="py-3 sm:py-4 font-medium text-gray-900 text-xs sm:text-sm">
//                             <span className="truncate max-w-[80px] sm:max-w-none block">
//                               {report.site}
//                             </span>
//                           </td>
//                           <td className="py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">
//                             <span className="truncate max-w-[70px] sm:max-w-none block">
//                               {report.operator}
//                             </span>
//                           </td>
//                           <td className="py-3 sm:py-4">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs ${
//                                 parseFloat(report.pH) >= 7.0
//                                   ? "bg-green-100 text-green-800"
//                                   : parseFloat(report.pH) >= 6.5
//                                     ? "bg-yellow-100 text-yellow-800"
//                                     : "bg-red-100 text-red-800"
//                               }`}
//                             >
//                               pH {report.pH}
//                             </span>
//                           </td>
//                           <td className="py-3 sm:py-4">
//                             <span
//                               className={`px-2 py-1 rounded-full text-xs ${
//                                 report.status === "approved"
//                                   ? "bg-green-100 text-green-800"
//                                   : report.status === "pending"
//                                     ? "bg-yellow-100 text-yellow-800"
//                                     : "bg-red-100 text-red-800"
//                               }`}
//                             >
//                               {report.status}
//                             </span>
//                           </td>
//                           <td className="py-3 sm:py-4 text-gray-500 text-xs sm:text-sm">
//                             <span className="whitespace-nowrap">
//                               {report.time}
//                             </span>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
//                   System Alerts
//                 </h3>
//                 <div className="space-y-3 sm:space-y-4 text-sm text-gray-800">
//                   {[
//                     [
//                       "pH level above threshold at Site Jakarta B",
//                       "1 hour ago",
//                       "warning",
//                     ],
//                     [
//                       `${pendingReports} reports pending validation`,
//                       "2 hours ago",
//                       "pending",
//                     ],
//                     [
//                       "All sites reported successfully today",
//                       "5 hours ago",
//                       "success",
//                     ],
//                   ].map(([message, time, type], i) => (
//                     <div
//                       key={i}
//                       className="p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 transition-all duration-200 hover:bg-gray-100 cursor-pointer"
//                     >
//                       <div
//                         className={`p-1 sm:p-2 rounded-lg border flex items-center justify-center flex-shrink-0 ${
//                           type === "warning"
//                             ? "bg-red-50 text-red-600 border-red-200"
//                             : type === "pending"
//                               ? "bg-yellow-50 text-yellow-700 border-yellow-200"
//                               : "bg-green-50 text-green-700 border-green-200"
//                         }`}
//                       >
//                         {type === "warning" && (
//                           <ExclamationTriangleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                         )}
//                         {type === "pending" && (
//                           <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                         )}
//                         {type === "success" && (
//                           <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                         )}
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <p className="font-medium text-sm sm:text-base truncate">
//                           {message}
//                         </p>
//                         <p className="text-xs text-gray-500 mt-1">{time}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* SITES CONTENT - PERBAIKAN RESPONSIVITAS */}
//         {activeMenu === "sites" && (
//           <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
//               <div className="mb-4 sm:mb-0">
//                 <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   Site Management
//                 </h1>
//                 <p className="text-gray-600 text-sm">
//                   Manage IPAL sites and locations
//                 </p>
//               </div>
//               <button
//                 onClick={() => setIsAddSiteModalOpen(true)}
//                 className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center"
//               >
//                 <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="text-sm sm:text-base">Add New Site</span>
//               </button>
//             </div>

//             {/* Modal Tambah Site Baru */}
//             {isAddSiteModalOpen && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
//                 <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
//                   {/* Header Modal */}
//                   <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
//                     <div>
//                       <h2 className="text-lg sm:text-xl font-bold text-gray-900">
//                         Tambah Site Baru
//                       </h2>
//                       <p className="text-xs sm:text-sm text-gray-700">
//                         Masukkan informasi site IPAL baru
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => {
//                         setIsAddSiteModalOpen(false);
//                         setFormErrors({});
//                       }}
//                       className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
//                     >
//                       <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//                     </button>
//                   </div>

//                   {/* Form Content */}
//                   <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
//                     <div className="space-y-3 sm:space-y-4">
//                       {/* Nama Site */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Nama Site <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={newSiteData.name}
//                           onChange={(e) =>
//                             handleInputChange("name", e.target.value)
//                           }
//                           placeholder="IPAL Jakarta Pusat"
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.name
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.name && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.name}
//                           </p>
//                         )}
//                       </div>

//                       {/* Kota */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Kota <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={newSiteData.city}
//                           onChange={(e) =>
//                             handleInputChange("city", e.target.value)
//                           }
//                           placeholder="Jakarta Pusat"
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.city
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.city && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.city}
//                           </p>
//                         )}
//                       </div>

//                       {/* Alamat Lengkap */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Alamat Lengkap <span className="text-red-500">*</span>
//                         </label>
//                         <textarea
//                           value={newSiteData.address}
//                           onChange={(e) =>
//                             handleInputChange("address", e.target.value)
//                           }
//                           placeholder="Jl. Sudirman No. 123, Jakarta Pusat"
//                           rows={3}
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white text-gray-900 text-sm ${
//                             formErrors.address
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.address && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.address}
//                           </p>
//                         )}
//                       </div>

//                       {/* Provinsi */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Provinsi <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={newSiteData.province}
//                           onChange={(e) =>
//                             handleInputChange("province", e.target.value)
//                           }
//                           placeholder="DKI Jakarta"
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.province
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.province && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.province}
//                           </p>
//                         )}
//                       </div>

//                       {/* Status */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Status
//                         </label>
//                         <select
//                           value={newSiteData.status}
//                           onChange={(e) =>
//                             handleInputChange("status", e.target.value)
//                           }
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
//                         >
//                           <option value="active">Aktif</option>
//                           <option value="maintenance">Maintenance</option>
//                           <option value="inactive">Tidak Aktif</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Footer Actions */}
//                   <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
//                     <button
//                       onClick={() => {
//                         setIsAddSiteModalOpen(false);
//                         setFormErrors({});
//                       }}
//                       className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
//                     >
//                       Batal
//                     </button>
//                     <button
//                       onClick={handleAddSite}
//                       disabled={Object.keys(formErrors).length > 0}
//                       className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
//                         Object.keys(formErrors).length > 0
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-teal-600 hover:bg-teal-700"
//                       }`}
//                     >
//                       <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
//                       Tambah Site
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Modal Edit Site */}
//             {isEditSiteModalOpen && editingSite && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
//                 <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
//                   {/* Header Modal */}
//                   <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
//                     <div>
//                       <h2 className="text-lg sm:text-xl font-bold text-gray-900">
//                         Edit Site
//                       </h2>
//                       <p className="text-xs sm:text-sm text-gray-700">
//                         Edit informasi site IPAL
//                       </p>
//                     </div>
//                     <button
//                       onClick={() => {
//                         setIsEditSiteModalOpen(false);
//                         setFormErrors({});
//                       }}
//                       className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
//                     >
//                       <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//                     </button>
//                   </div>

//                   {/* Form Content */}
//                   <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
//                     <div className="space-y-3 sm:space-y-4">
//                       {/* Nama Site */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Nama Site <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={editingSite.name}
//                           onChange={(e) =>
//                             handleEditInputChange("name", e.target.value)
//                           }
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.name
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.name && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.name}
//                           </p>
//                         )}
//                       </div>

//                       {/* Kota */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Kota <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={editingSite.city}
//                           onChange={(e) =>
//                             handleEditInputChange("city", e.target.value)
//                           }
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.city
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.city && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.city}
//                           </p>
//                         )}
//                       </div>

//                       {/* Alamat Lengkap */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Alamat Lengkap <span className="text-red-500">*</span>
//                         </label>
//                         <textarea
//                           value={editingSite.address}
//                           onChange={(e) =>
//                             handleEditInputChange("address", e.target.value)
//                           }
//                           rows={3}
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white text-gray-900 text-sm ${
//                             formErrors.address
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.address && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.address}
//                           </p>
//                         )}
//                       </div>

//                       {/* Provinsi */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Provinsi <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           value={editingSite.province}
//                           onChange={(e) =>
//                             handleEditInputChange("province", e.target.value)
//                           }
//                           className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
//                             formErrors.province
//                               ? "border-red-500"
//                               : "border-gray-300"
//                           }`}
//                         />
//                         {formErrors.province && (
//                           <p className="text-red-500 text-xs mt-1">
//                             {formErrors.province}
//                           </p>
//                         )}
//                       </div>

//                       {/* Status */}
//                       <div>
//                         <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
//                           Status
//                         </label>
//                         <select
//                           value={editingSite.status}
//                           onChange={(e) =>
//                             handleEditInputChange("status", e.target.value)
//                           }
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
//                         >
//                           <option value="active">Aktif</option>
//                           <option value="maintenance">Maintenance</option>
//                           <option value="inactive">Tidak Aktif</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Footer Actions */}
//                   <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
//                     <button
//                       onClick={() => {
//                         setIsEditSiteModalOpen(false);
//                         setFormErrors({});
//                       }}
//                       className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
//                     >
//                       Batal
//                     </button>
//                     <button
//                       onClick={handleUpdateSite}
//                       disabled={Object.keys(formErrors).length > 0}
//                       className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
//                         Object.keys(formErrors).length > 0
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-teal-600 hover:bg-teal-700"
//                       }`}
//                     >
//                       <PencilIcon className="w-3 h-3 sm:w-4 sm:h-4" />
//                       Update Site
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Stats Cards - PERBAIKAN: Grid responsive */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Total Sites
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
//                     <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {totalSites}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Active Sites
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
//                     <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {activeSites}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Maintenance
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
//                     <CogIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {maintenanceSites}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Total Operators
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
//                     <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {totalOperators}
//                 </p>
//               </div>
//             </div>

//             {/* Search and Filter - PERBAIKAN: Layout responsive */}
//             <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center">
//                 <div className="relative flex-1 max-w-lg w-full">
//                   <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search sites by name, address, or city..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
//                   />
//                 </div>

//                 <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto justify-center">
//                   {["All Status", "Active", "Inactive", "Maintenance"].map(
//                     (status) => (
//                       <button
//                         key={status}
//                         onClick={() => setSelectedStatus(status)}
//                         className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
//                           selectedStatus === status
//                             ? "bg-teal-600 text-white shadow-sm"
//                             : "text-gray-700 hover:bg-gray-200"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* PERBAIKAN: Tabel Sites dengan spacing yang lebih baik dan responsive */}
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* HEADER TABEL - PERBAIKAN: Menyesuaikan grid columns untuk semua ukuran layar */}
//               <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
//                 <div className="col-span-3">Site Name</div>
//                 <div className="col-span-2">Kota</div>
//                 <div className="col-span-2">Alamat</div>
//                 <div className="col-span-1">Provinsi</div>
//                 <div className="col-span-1 text-center">Operators</div>
//                 <div className="col-span-1 text-center">Status</div>
//                 <div className="col-span-1 text-center">Last Report</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>

//               {/* BODY TABEL - PERBAIKAN: Layout responsive untuk mobile dan desktop */}
//               <div className="divide-y divide-gray-200">
//                 {filteredSites.map((site) => {
//                   const statusConfig = getSiteStatusConfig(site.status);
//                   return (
//                     <div
//                       key={site.id}
//                       className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
//                     >
//                       <div className="lg:hidden space-y-3">
//                         {/* Tampilan mobile - diperbaiki layoutnya */}
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
//                               {site.name}
//                             </p>
//                             <p className="text-xs text-gray-500 mt-1">
//                               {site.city}, {site.province}
//                             </p>
//                           </div>
//                           <span
//                             className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} ml-2 flex-shrink-0`}
//                           >
//                             <span
//                               className={`w-1.5 h-1.5 rounded-full mr-1 ${statusConfig.dotColor}`}
//                             ></span>
//                             {site.status}
//                           </span>
//                         </div>

//                         <div className="text-sm space-y-2">
//                           <div>
//                             <p className="text-gray-600 text-xs">Alamat</p>
//                             <p className="text-gray-900 font-medium text-sm truncate">
//                               {site.address}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-2 gap-3 text-sm">
//                           <div>
//                             <p className="text-gray-600 text-xs">Operators</p>
//                             <div className="flex items-center gap-1">
//                               <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
//                                 <UsersIcon className="h-3 w-3" />
//                                 <span className="text-xs font-medium">
//                                   {site.operators}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                           <div>
//                             <p className="text-gray-600 text-xs">Last Report</p>
//                             <p className="text-gray-900 font-medium text-sm">
//                               {site.lastReport}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                           <div className="flex gap-2">
//                             <button
//                               onClick={() => handleEditSite(site)}
//                               className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
//                               title="Edit Site"
//                             >
//                               <PencilIcon className="w-4 h-4" />
//                             </button>
//                             <button
//                               onClick={() => handleDeleteSite(site.id)}
//                               className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
//                               title="Delete Site"
//                             >
//                               <TrashIcon className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Tampilan Desktop - PERBAIKAN: Kolom Status dan Last Report diperbaiki */}
//                       <div className="hidden lg:block col-span-3">
//                         <p
//                           className="font-medium text-gray-900 truncate text-sm"
//                           title={site.name}
//                         >
//                           {site.name}
//                         </p>
//                       </div>

//                       <div className="hidden lg:block col-span-2">
//                         <p
//                           className="text-gray-700 truncate text-sm"
//                           title={site.city}
//                         >
//                           {site.city}
//                         </p>
//                       </div>

//                       <div className="hidden lg:block col-span-2">
//                         <p
//                           className="text-gray-700 text-sm truncate"
//                           title={site.address}
//                         >
//                           {site.address}
//                         </p>
//                       </div>

//                       <div className="hidden lg:block col-span-1">
//                         <p
//                           className="text-gray-700 truncate text-sm"
//                           title={site.province}
//                         >
//                           {site.province}
//                         </p>
//                       </div>

//                       <div className="hidden lg:block col-span-1 text-center">
//                         <div className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full mx-auto w-fit">
//                           <UsersIcon className="h-3 w-3" />
//                           <span className="text-xs font-medium">
//                             {site.operators}
//                           </span>
//                         </div>
//                       </div>

//                       {/* PERBAIKAN: Kolom Status - menggunakan text yang lebih pendek */}
//                       <div className="hidden lg:block col-span-1 text-center">
//                         <span
//                           className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
//                           title={site.status}
//                         >
//                           <span
//                             className={`w-1.5 h-1.5 rounded-full mr-1 ${statusConfig.dotColor}`}
//                           ></span>
//                           {site.status === "maintenance"
//                             ? "Maint"
//                             : site.status === "active"
//                               ? "Active"
//                               : "Inactive"}
//                         </span>
//                       </div>

//                       {/* PERBAIKAN: Kolom Last Report - text lebih kecil */}
//                       <div className="hidden lg:block col-span-1 text-center">
//                         <p
//                           className="text-gray-700 text-xs font-medium"
//                           title={site.lastReport}
//                         >
//                           {site.lastReport}
//                         </p>
//                       </div>

//                       <div className="hidden lg:block col-span-1 text-center">
//                         <div className="flex gap-1 justify-center">
//                           <button
//                             onClick={() => handleEditSite(site)}
//                             className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
//                             title="Edit Site"
//                           >
//                             <PencilIcon className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteSite(site.id)}
//                             className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
//                             title="Delete Site"
//                           >
//                             <TrashIcon className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* USERS CONTENT - PERBAIKAN PADDING */}
//         {activeMenu === "users" && (
//           <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
//             {/* Kode users content tetap sama, hanya padding yang diubah */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
//               <div>
//                 <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   User Management
//                 </h1>
//                 <p className="text-gray-600 text-sm">
//                   Manage system users and permissions
//                 </p>
//               </div>
//               <button
//                 onClick={() => setIsAddUserModalOpen(true)}
//                 className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center mt-4 sm:mt-0"
//               >
//                 <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="text-sm sm:text-base">Add New User</span>
//               </button>
//             </div>

//             {/* Stats Cards - PERBAIKAN: Grid responsive */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Total Users
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
//                     <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {usersData.length}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Operators
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
//                     <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {usersData.filter((user) => user.role === "operator").length}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     HRD
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
//                     <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {usersData.filter((user) => user.role === "hrd").length}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Admins
//                   </h3>
//                   <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
//                     <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
//                   </div>
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {usersData.filter((user) => user.role === "admin").length}
//                 </p>
//               </div>
//             </div>

//             {/* Search and Filter - PERBAIKAN: Layout responsive */}
//             <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
//               <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center">
//                 <div className="relative flex-1 max-w-lg w-full">
//                   <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search users by name, email, or role..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
//                   />
//                 </div>

//                 <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto justify-center">
//                   {["All Users", "Active", "Inactive"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => setSelectedStatus(status)}
//                       className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
//                         selectedStatus === status
//                           ? "bg-teal-600 text-white shadow-sm"
//                           : "text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="relative w-full sm:w-auto">
//                   <select
//                     className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
//                     onChange={(e) => setSelectedRole(e.target.value)}
//                   >
//                     <option value="all">All Roles</option>
//                     <option value="operator">Operator</option>
//                     <option value="hrd">HRD</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Tabel Users */}
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* HEADER TABEL */}
//               <div className="hidden md:grid grid-cols-12 gap-4 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
//                 <div className="col-span-4">User</div>
//                 <div className="col-span-2">Role</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-2">Status</div>
//                 <div className="col-span-1">Last Active</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>

//               {/* BODY TABEL */}
//               <div className="divide-y divide-gray-200">
//                 {filteredUsers.map((user) => (
//                   <div
//                     key={user.id}
//                     className="md:grid md:grid-cols-12 md:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 hover:bg-gray-50 transition"
//                   >
//                     {/* Mobile View */}
//                     <div className="md:hidden space-y-3">
//                       <div className="flex justify-between items-start">
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`w-10 h-10 bg-gradient-to-r ${
//                               user.role === "operator"
//                                 ? "from-teal-500 to-cyan-600"
//                                 : user.role === "hrd"
//                                   ? "from-orange-500 to-red-600"
//                                   : "from-purple-500 to-indigo-600"
//                             } rounded-full flex items-center justify-center text-white font-bold`}
//                           >
//                             {user.initial}
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
//                               {user.name}
//                             </p>
//                             <p className="text-sm text-gray-500 truncate">
//                               {user.email}
//                             </p>
//                           </div>
//                         </div>
//                         <span
//                           className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
//                             user.status === "active"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-3 text-sm">
//                         <div>
//                           <p className="text-gray-600 text-xs">Role</p>
//                           <p className="text-gray-900 font-medium text-sm capitalize">
//                             {user.role}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-gray-600 text-xs">Site</p>
//                           <p className="text-gray-900 font-medium text-sm truncate">
//                             {user.site}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                         <div>
//                           <p className="text-gray-600 text-xs">Last Active</p>
//                           <p className="text-gray-900 font-medium text-sm">
//                             {user.lastActive}
//                           </p>
//                         </div>
//                         <div className="flex gap-2">
//                           <button
//                             onClick={() => handleEditUser(user)}
//                             className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
//                           >
//                             <PencilIcon className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteUser(user.id)}
//                             className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
//                           >
//                             <TrashIcon className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop View */}
//                     <div className="hidden md:flex col-span-4 items-center gap-3">
//                       <div
//                         className={`w-10 h-10 bg-gradient-to-r ${
//                           user.role === "operator"
//                             ? "from-teal-500 to-cyan-600"
//                             : user.role === "hrd"
//                               ? "from-orange-500 to-red-600"
//                               : "from-purple-500 to-indigo-600"
//                         } rounded-full flex items-center justify-center text-white font-bold overflow-hidden`}
//                       >
//                         {user.initial}
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="font-medium text-gray-900 text-sm truncate">
//                           {user.name}
//                         </p>
//                         <p className="text-sm text-gray-500 truncate">
//                           {user.email}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="hidden md:flex col-span-2 items-center">
//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           user.role === "operator"
//                             ? "bg-blue-100 text-blue-800"
//                             : user.role === "hrd"
//                               ? "bg-orange-100 text-orange-800"
//                               : "bg-purple-100 text-purple-800"
//                         } capitalize`}
//                       >
//                         {user.role}
//                       </span>
//                     </div>

//                     <div className="hidden md:flex col-span-2 items-center">
//                       <p
//                         className="text-gray-700 text-sm truncate"
//                         title={user.site}
//                       >
//                         {user.site}
//                       </p>
//                     </div>

//                     <div className="hidden md:flex col-span-2 items-center">
//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           user.status === "active"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-gray-100 text-gray-800"
//                         }`}
//                       >
//                         {user.status}
//                       </span>
//                     </div>

//                     <div className="hidden md:flex col-span-1 items-center">
//                       <p className="text-gray-700 text-sm">{user.lastActive}</p>
//                     </div>

//                     <div className="hidden md:flex col-span-1 items-center justify-center">
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => handleEditUser(user)}
//                           className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
//                         >
//                           <PencilIcon className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleDeleteUser(user.id)}
//                           className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
//                         >
//                           <TrashIcon className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* REPORTS CONTENT - TETAP SAMA */}
//         {/* REPORTS CONTENT - PERBAIKAN PADDING */}
//         {activeMenu === "reports" && (
//           <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
//               <div>
//                 <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   Report Monitoring
//                 </h1>
//                 <p className="text-gray-600 text-sm">
//                   Review and validate daily IPAL reports
//                 </p>
//               </div>
//               <button
//                 onClick={handleExportReport}
//                 className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center mt-4 sm:mt-0"
//               >
//                 <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="text-sm sm:text-base">Export Report</span>
//               </button>
//             </div>

//             {/* Stats Cards - PERBAIKAN: Grid responsive */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Total Reports
//                   </h3>
//                   <DocumentChartBarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {totalReports}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Approved
//                   </h3>
//                   <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {approvedReports}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Pending
//                   </h3>
//                   <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {pendingReports}
//                 </p>
//               </div>

//               <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2 sm:mb-3">
//                   <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
//                     Rejected
//                   </h3>
//                   <XCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
//                 </div>
//                 <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
//                   {rejectedReports}
//                 </p>
//               </div>
//             </div>

//             {/* Search and Filter - PERBAIKAN: Layout responsive */}
//             <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
//               <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start lg:items-center">
//                 <div className="relative flex-1 w-full">
//                   <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search reports..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-1 sm:gap-2">
//                   {["All Reports", "Approved", "Pending", "Rejected"].map(
//                     (status) => (
//                       <button
//                         key={status}
//                         onClick={() => setSelectedStatus(status)}
//                         className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
//                           selectedStatus === status
//                             ? "bg-teal-600 text-white shadow-sm"
//                             : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                         }`}
//                       >
//                         {status}
//                       </button>
//                     )
//                   )}
//                 </div>

//                 <select
//                   value={selectedSite}
//                   onChange={(e) => setSelectedSite(e.target.value)}
//                   className="w-full lg:w-auto px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
//                 >
//                   <option value="all">All Sites</option>
//                   {uniqueSites.map((site) => (
//                     <option key={site} value={site}>
//                       {site}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Reports Table */}
//             <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Desktop Table Header */}
//               <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
//                 <div className="col-span-2">Date & Time</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-2">Operator</div>
//                 <div className="col-span-1 text-center">pH</div>
//                 <div className="col-span-2">Flow Rate</div>
//                 <div className="col-span-2">Status</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>

//               {/* Table Body */}
//               <div className="divide-y divide-gray-200">
//                 {filteredReports.length === 0 ? (
//                   <div className="p-6 sm:p-8 text-center text-gray-500 text-sm">
//                     No reports found matching your criteria.
//                   </div>
//                 ) : (
//                   filteredReports.map((report) => {
//                     const statusConfig = getStatusConfig(report.status);
//                     const StatusIcon = statusConfig.icon;

//                     return (
//                       <div
//                         key={report.id}
//                         className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
//                       >
//                         {/* Mobile View */}
//                         <div className="lg:hidden space-y-3">
//                           <div className="flex justify-between items-start">
//                             <div className="space-y-1">
//                               <p className="font-semibold text-gray-900 text-sm">
//                                 {report.date}
//                               </p>
//                               <p className="text-xs text-gray-500">
//                                 {report.time}
//                               </p>
//                             </div>
//                             <span
//                               className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
//                             >
//                               <StatusIcon
//                                 className={`w-3 h-3 ${statusConfig.color}`}
//                               />
//                               {statusConfig.text}
//                             </span>
//                           </div>

//                           <div className="grid grid-cols-2 gap-3">
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">Site</p>
//                               <p className="text-sm font-medium text-gray-900 truncate">
//                                 {report.site}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">
//                                 Operator
//                               </p>
//                               <p className="text-sm font-medium text-gray-900 truncate">
//                                 {report.operator}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-2 gap-3">
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">pH</p>
//                               <p className="text-sm font-medium text-gray-900">
//                                 {report.pH}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">
//                                 Flow Rate
//                               </p>
//                               <p className="text-sm font-medium text-gray-900">
//                                 {report.flowRate}
//                               </p>
//                             </div>
//                           </div>

//                           <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
//                             <button
//                               onClick={() => handleReview(report.id)}
//                               className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-2 py-1.5 rounded-lg hover:bg-blue-50 border border-blue-200 text-xs font-medium"
//                             >
//                               <EyeIcon className="w-3 h-3" />
//                               Review
//                             </button>
//                             {report.status === "pending" && (
//                               <>
//                                 <button
//                                   onClick={() => handleApprove(report.id)}
//                                   className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-2 py-1.5 rounded-lg hover:bg-green-50 border border-green-200 text-xs font-medium"
//                                 >
//                                   <CheckIcon className="w-3 h-3" />
//                                   Approve
//                                 </button>
//                                 <button
//                                   onClick={() => handleReject(report.id)}
//                                   className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-2 py-1.5 rounded-lg hover:bg-red-50 border border-red-200 text-xs font-medium"
//                                 >
//                                   <XCircleIcon className="w-3 h-3" />
//                                   Reject
//                                 </button>
//                               </>
//                             )}
//                           </div>
//                         </div>

//                         {/* Desktop View */}
//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <div>
//                             <p className="font-medium text-gray-900 text-sm">
//                               {report.date}
//                             </p>
//                             <p className="text-xs text-gray-500">
//                               {report.time}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p
//                             className="text-gray-700 text-sm truncate"
//                             title={report.site}
//                           >
//                             {report.site}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p
//                             className="text-gray-700 text-sm truncate"
//                             title={report.operator}
//                           >
//                             {report.operator}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <p className="text-gray-900 font-medium text-sm">
//                             {report.pH}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p className="text-gray-700 text-sm">
//                             {report.flowRate}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <span
//                             className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
//                           >
//                             <StatusIcon
//                               className={`w-3 h-3 ${statusConfig.color}`}
//                             />
//                             {statusConfig.text}
//                           </span>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <div className="flex items-center gap-1">
//                             <button
//                               onClick={() => handleReview(report.id)}
//                               className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
//                               title="Review Report"
//                             >
//                               <EyeIcon className="w-3 h-3" />
//                             </button>
//                             {report.status === "pending" && (
//                               <>
//                                 <button
//                                   onClick={() => handleApprove(report.id)}
//                                   className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition border border-transparent hover:border-green-200"
//                                   title="Approve Report"
//                                 >
//                                   <CheckIcon className="w-3 h-3" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleReject(report.id)}
//                                   className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-200"
//                                   title="Reject Report"
//                                 >
//                                   <XCircleIcon className="w-3 h-3" />
//                                 </button>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ==========================================
// // // ==========================================KODINGAN YANG ASLI // // ======================================



















































"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChartBarIcon,
  MapPinIcon,
  UsersIcon,
  DocumentChartBarIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CheckIcon,
  EyeIcon,
  XCircleIcon,
  EnvelopeIcon,
  UserPlusIcon,
  CogIcon,
  PencilIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon, // Ikon untuk Help
  ChatBubbleLeftRightIcon, // Ikon untuk tiket
  ExclamationCircleIcon, // Ikon untuk tiket urgent
  PaperAirplaneIcon, // Ikon untuk kirim solusi
  PhotoIcon, // Ikon untuk gambar
} from "@heroicons/react/24/outline";

export default function Admin() {
  // ==================== STATE EXISTING ====================
  const [selectedRange, setSelectedRange] = useState("Month");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSite, setSelectedSite] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationFilter, setNotificationFilter] = useState("all");
  const [isAddSiteModalOpen, setIsAddSiteModalOpen] = useState(false);
  const [isEditSiteModalOpen, setIsEditSiteModalOpen] = useState(false);
  const [editingSite, setEditingSite] = useState(null);
    // State untuk modal delete user
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const deleteUserModalRef = useRef(null);
  const [newSiteData, setNewSiteData] = useState({
    name: "",
    city: "",
    address: "",
    province: "",
    status: "active",
  });
  const [formErrors, setFormErrors] = useState({});

  // State untuk modal user
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    role: "operator",
    site: "",
    status: "active",
  });
  const [userFormErrors, setUserFormErrors] = useState({});

  // State untuk export reports
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState("pdf");
  const [exportDateRange, setExportDateRange] = useState("today");
  const [exportStatus, setExportStatus] = useState("all");

  // State untuk modal review detail
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);

  // ==================== STATE BARU UNTUK HELP/TICKET SYSTEM ====================
  const [helpTickets, setHelpTickets] = useState([
    {
      id: 1,
      ticketNumber: "TICK-2025-001",
      operatorId: 1,
      operatorName: "Budi Santoso",
      operatorEmail: "budi.santoso@email.com",
      site: "Jakarta Utara - Site A",
      subject: "Kesalahan pembacaan pH meter",
      description:
        "pH meter menunjukkan nilai yang tidak stabil, terkadang 7.2, terkadang 6.8 padahal sampel sama. Sudah saya kalibrasi ulang tetap tidak stabil.",
      priority: "high",
      status: "open", // open, pending, closed
      createdAt: "2025-01-27 08:30",
      updatedAt: "2025-01-27 08:30",
      attachments: ["ph_meter_error.jpg"],
      adminNotes: "",
      solution: "",
      closedAt: null,
      closedBy: null,
    },
    {
      id: 2,
      ticketNumber: "TICK-2025-002",
      operatorId: 2,
      operatorName: "Siti Nurhaliza",
      operatorEmail: "siti.nurhaliza@email.com",
      site: "Bandung - Site B",
      subject: "Flow meter tidak berfungsi",
      description:
        "Flow meter di unit 3 tidak menunjukkan pembacaan sama sekali. Indikator lampu mati. Sudah dicek power supply normal.",
      priority: "high",
      status: "pending",
      createdAt: "2025-01-26 14:20",
      updatedAt: "2025-01-27 09:15",
      attachments: ["flow_meter.jpg", "wiring_diagram.pdf"],
      adminNotes: "Menunggu spare part dari supplier",
      solution: "",
      closedAt: null,
      closedBy: null,
    },
    {
      id: 3,
      ticketNumber: "TICK-2025-003",
      operatorId: 1,
      operatorName: "Budi Santoso",
      operatorEmail: "budi.santoso@email.com",
      site: "Jakarta Utara - Site A",
      subject: "Software crash saat generate report",
      description:
        "Aplikasi monitoring crash setiap kali mencoba generate report bulanan. Error message: 'Memory allocation failed'.",
      priority: "medium",
      status: "closed",
      createdAt: "2025-01-25 10:45",
      updatedAt: "2025-01-26 16:30",
      attachments: ["error_screenshot.png", "log_file.txt"],
      adminNotes: "Telah diperbaiki dengan update patch v2.1.3",
      solution:
        "Sudah diinstal patch terbaru v2.1.3 yang memperbaiki memory leak. Operator sudah dikonfirmasi bisa generate report normal.",
      closedAt: "2025-01-26 16:30",
      closedBy: "Admin User",
    },
    {
      id: 4,
      ticketNumber: "TICK-2025-004",
      operatorId: 4,
      operatorName: "Operator 2",
      operatorEmail: "operator2@email.com",
      site: "Bandung - Site B",
      subject: "Kebutuhan training penggunaan alat baru",
      description:
        "Mohon dijadwalkan training untuk penggunaan TDS meter digital yang baru datang. Ada 3 operator yang perlu training.",
      priority: "low",
      status: "open",
      createdAt: "2025-01-27 11:20",
      updatedAt: "2025-01-27 11:20",
      attachments: [],
      adminNotes: "",
      solution: "",
      closedAt: null,
      closedBy: null,
    },
  ]);

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [solutionText, setSolutionText] = useState("");
  const [adminNotesText, setAdminNotesText] = useState("");
  const [ticketFilter, setTicketFilter] = useState("all"); // all, open, pending, closed
  const [ticketPriorityFilter, setTicketPriorityFilter] = useState("all"); // all, high, medium, low

  const router = useRouter();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const notificationModalRef = useRef(null);
  const exportModalRef = useRef(null);
  const reviewModalRef = useRef(null);
  const ticketModalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
      if (
        notificationModalRef.current &&
        !notificationModalRef.current.contains(event.target) &&
        isNotificationModalOpen
      ) {
        setIsNotificationModalOpen(false);
      }
      if (
        exportModalRef.current &&
        !exportModalRef.current.contains(event.target) &&
        isExportModalOpen
      ) {
        setIsExportModalOpen(false);
      }
      if (
        reviewModalRef.current &&
        !reviewModalRef.current.contains(event.target) &&
        isReviewModalOpen
      ) {
        setIsReviewModalOpen(false);
      }
      if (
        ticketModalRef.current &&
        !ticketModalRef.current.contains(event.target) &&
        isTicketModalOpen
      ) {
        setIsTicketModalOpen(false);
      }
      if (
        deleteUserModalRef.current &&
        !deleteUserModalRef.current.contains(event.target) &&
        isDeleteUserModalOpen
      ) {
        setIsDeleteUserModalOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [
    isNotificationModalOpen,
    isExportModalOpen,
    isReviewModalOpen,
    isTicketModalOpen,
       isDeleteUserModalOpen, // tambahkan ini
  ]);

  // ==================== MENU ITEMS DENGAN HELP ====================
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "sites", name: "Sites", icon: MapPinIcon },
    { id: "users", name: "Users", icon: UsersIcon },
    { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
    { id: "help", name: "Help", icon: QuestionMarkCircleIcon }, // Menu baru
  ];

  // ==================== MASTER DATA STATE ====================
  // Semua data disimpan dalam state terpusat agar sinkron
  const [sitesData, setSitesData] = useState([
    {
      id: 1,
      name: "Jakarta Utara - Site A",
      city: "Jakarta Utara",
      address: "Jl. Industri No. 123, Jakarta Utara",
      province: "DKI Jakarta",
      operators: 3,
      status: "active",
      lastReport: "2 hours ago",
    },
    {
      id: 2,
      name: "Bandung - Site B",
      city: "Bandung",
      address: "Jl. Soekarno Hatta No. 456, Bandung",
      province: "Jawa Barat",
      operators: 2,
      status: "active",
      lastReport: "3 hours ago",
    },
    {
      id: 3,
      name: "Surabaya - Site C",
      city: "Surabaya",
      address: "Jl. Basuki Rahmat No. 789, Surabaya",
      province: "Jawa Timur",
      operators: 4,
      status: "active",
      lastReport: "5 hours ago",
    },
    {
      id: 4,
      name: "Semarang - Site D",
      city: "Semarang",
      address: "Jl. Pemuda No. 321, Semarang",
      province: "Jawa Tengah",
      operators: 2,
      status: "inactive",
      lastReport: "2 days ago",
    },
    {
      id: 5,
      name: "Yogyakarta - Site E",
      city: "Yogyakarta",
      address: "Jl. Malioboro No. 654, Yogyakarta",
      province: "DI Yogyakarta",
      operators: 3,
      status: "maintenance",
      lastReport: "1 hour ago",
    },
  ]);

  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      role: "operator",
      site: "Jakarta Utara - Site A",
      status: "active",
      lastActive: "2 hours ago",
      initial: "B",
    },
    {
      id: 2,
      name: "Katira Sala",
      email: "katira.sala@email.com",
      role: "hrd",
      site: "Central Office",
      status: "active",
      lastActive: "1 day ago",
      initial: "K",
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@sioptima.com",
      role: "admin",
      site: "Head Office",
      status: "active",
      lastActive: "5 minutes ago",
      initial: "A",
    },
    {
      id: 4,
      name: "Operator 2",
      email: "operator2@email.com",
      role: "operator",
      site: "Bandung - Site B",
      status: "inactive",
      lastActive: "3 days ago",
      initial: "O",
    },
  ]);

  const [reportsData, setReportsData] = useState([
    {
      id: 1,
      date: "2025-01-27",
      time: "08:30",
      site: "Jakarta Utara - Site A",
      operator: "Budi Santoso",
      pH: 7.2,
      flowRate: "450 L/h",
      status: "pending",
      details: {
        temperature: "28°C",
        tds: "450 ppm",
        turbidity: "2.5 NTU",
        chlorine: "1.2 mg/L",
        notes: "Semua parameter dalam batas normal. Operasi berjalan lancar.",
        images: ["sample1.jpg", "sample2.jpg"],
      },
    },
    {
      id: 2,
      date: "2025-01-27",
      time: "08:15",
      site: "Bandung - Site B",
      operator: "Siti Nurhaliza",
      pH: 6.8,
      flowRate: "380 L/h",
      status: "approved",
      details: {
        temperature: "26°C",
        tds: "420 ppm",
        turbidity: "1.8 NTU",
        chlorine: "1.0 mg/L",
        notes:
          "Kondisi air cukup baik, sedikit penurunan pH namun masih dalam batas wajar.",
        images: ["sample3.jpg"],
      },
    },
    {
      id: 3,
      date: "2025-01-27",
      time: "08:25",
      site: "Surabaya - Site C",
      operator: "Ahmad Yani",
      pH: 7.5,
      flowRate: "520 L/h",
      status: "rejected",
      details: {
        temperature: "30°C",
        tds: "520 ppm",
        turbidity: "5.2 NTU",
        chlorine: "0.8 mg/L",
        notes: "Turbidity melebihi batas maksimal. Perlu pengecekan filter.",
        images: ["sample4.jpg", "sample5.jpg", "sample6.jpg"],
      },
    },
    {
      id: 4,
      date: "2025-01-26",
      time: "14:20",
      site: "Jakarta Utara - Site A",
      operator: "Budi Santoso",
      pH: 7.1,
      flowRate: "430 L/h",
      status: "approved",
      details: {
        temperature: "27°C",
        tds: "440 ppm",
        turbidity: "2.1 NTU",
        chlorine: "1.1 mg/L",
        notes: "Performa stabil, tidak ada kendala operasional.",
        images: ["sample7.jpg"],
      },
    },
    {
      id: 5,
      date: "2025-01-26",
      time: "11:45",
      site: "Bandung - Site B",
      operator: "Siti Nurhaliza",
      pH: 6.9,
      flowRate: "390 L/h",
      status: "pending",
      details: {
        temperature: "25°C",
        tds: "410 ppm",
        turbidity: "2.8 NTU",
        chlorine: "1.3 mg/L",
        notes: "Aliran air sedikit berkurang, perlu monitoring lebih lanjut.",
        images: [],
      },
    },
  ]);

  // ==================== DERIVED DATA ====================
  // Data yang dihitung dari master data untuk menjaga konsistensi

  // Hitung statistik untuk Dashboard dari data aktual
  const totalSites = sitesData.length;
  const activeSites = sitesData.filter(
    (site) => site.status === "active"
  ).length;
  const maintenanceSites = sitesData.filter(
    (site) => site.status === "maintenance"
  ).length;
  const totalOperators = usersData.filter(
    (user) => user.role === "operator" && user.status === "active"
  ).length;
  const totalReports = reportsData.length;
  const approvedReports = reportsData.filter(
    (report) => report.status === "approved"
  ).length;
  const pendingReports = reportsData.filter(
    (report) => report.status === "pending"
  ).length;
  const rejectedReports = reportsData.filter(
    (report) => report.status === "rejected"
  ).length;
  const complianceRate =
    totalReports > 0 ? Math.round((approvedReports / totalReports) * 100) : 0;

  // ==================== FILTER HELP TICKETS ====================
  const filteredHelpTickets = helpTickets
    .filter((ticket) => {
      // Filter by status
      if (ticketFilter !== "all" && ticket.status !== ticketFilter)
        return false;

      // Filter by priority
      if (
        ticketPriorityFilter !== "all" &&
        ticket.priority !== ticketPriorityFilter
      )
        return false;

      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          ticket.ticketNumber.toLowerCase().includes(query) ||
          ticket.operatorName.toLowerCase().includes(query) ||
          ticket.subject.toLowerCase().includes(query) ||
          ticket.site.toLowerCase().includes(query)
        );
      }

      return true;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  // ==================== STATE BARU UNTUK VALIDASI ====================
  const [solutionError, setSolutionError] = useState("");

  // ==================== HELP TICKET FUNCTIONS ====================
  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setSolutionText(ticket.solution || "");
    setAdminNotesText(ticket.adminNotes || "");
    setSolutionError(""); // Reset error saat membuka modal
    setIsTicketModalOpen(true);
  };

  const handleCloseTicket = () => {
    // Validasi field solution wajib diisi
    if (!solutionText.trim()) {
      setSolutionError("Solution wajib diisi sebelum menutup tiket!");
      return;
    }

    const updatedTickets = helpTickets.map((ticket) =>
      ticket.id === selectedTicket.id
        ? {
            ...ticket,
            status: "closed",
            solution: solutionText,
            adminNotes: adminNotesText,
            closedAt:
              new Date().toISOString().split("T")[0] +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            closedBy: "Admin User",
            updatedAt:
              new Date().toISOString().split("T")[0] +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
          }
        : ticket
    );

    setHelpTickets(updatedTickets);
    alert(`Tiket ${selectedTicket.ticketNumber} berhasil ditutup!`);
    setIsTicketModalOpen(false);
    setSelectedTicket(null);
    setSolutionText("");
    setAdminNotesText("");
    setSolutionError(""); // Reset error
  };

  const handleSetPending = () => {
    const updatedTickets = helpTickets.map((ticket) =>
      ticket.id === selectedTicket.id
        ? {
            ...ticket,
            status: "pending",
            adminNotes: adminNotesText,
            updatedAt:
              new Date().toISOString().split("T")[0] +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
          }
        : ticket
    );

    setHelpTickets(updatedTickets);
    alert(
      `Tiket ${selectedTicket.ticketNumber} status diubah menjadi Pending!`
    );
    setIsTicketModalOpen(false);
    setSelectedTicket(null);
    setSolutionText("");
    setAdminNotesText("");
  };

  const handleSaveNotes = () => {
    const updatedTickets = helpTickets.map((ticket) =>
      ticket.id === selectedTicket.id
        ? {
            ...ticket,
            adminNotes: adminNotesText,
            updatedAt:
              new Date().toISOString().split("T")[0] +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
          }
        : ticket
    );

    setHelpTickets(updatedTickets);
    alert("Catatan admin berhasil disimpan!");
    // Tetap di modal, tidak ditutup
  };

  const getTicketPriorityConfig = (priority) => {
    const config = {
      high: {
        color: "text-red-600",
        bgColor: "bg-red-100",
        borderColor: "border-red-200",
        label: "High",
        icon: ExclamationCircleIcon,
      },
      medium: {
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-200",
        label: "Medium",
        icon: ExclamationTriangleIcon,
      },
      low: {
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        label: "Low",
        icon: InformationCircleIcon,
      },
    };
    return config[priority] || config.medium;
  };

  const getTicketStatusConfig = (status) => {
    const config = {
      open: {
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200",
        label: "Open",
        icon: ClockIcon,
      },
      pending: {
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-200",
        label: "Pending",
        icon: ClockIcon,
      },
      closed: {
        color: "text-green-600",
        bgColor: "bg-green-100",
        borderColor: "border-green-200",
        label: "Closed",
        icon: CheckCircleIcon,
      },
    };
    return config[status] || config.open;
  };

  // ==================== FUNGSI UNTUK MEMBUKA GAMBAR ====================
  const handleOpenImage = (filename) => {
    // Simulasi membuka gambar di tab baru
    const imageUrl = `/uploads/${filename}`;
    window.open(imageUrl, "_blank");
  };

  const handleDownloadImage = (filename) => {
    // Simulasi download gambar
    const imageUrl = `/uploads/${filename}`;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Data untuk Dashboard Charts
  // ==================== DASHBOARD DATA ====================
  const waterQualityData = [
    { day: "Mon", ec: 670, tds: 440, pH: 7.0 },
    { day: "Tue", ec: 720, tds: 480, pH: 6.8 },
    { day: "Wed", ec: 580, tds: 390, pH: 7.2 },
    { day: "Thu", ec: 810, tds: 520, pH: 6.9 },
    { day: "Fri", ec: 630, tds: 410, pH: 7.1 },
    { day: "Sat", ec: 590, tds: 380, pH: 7.3 },
    { day: "Sun", ec: 690, tds: 450, pH: 7.0 },
  ];

  // PERBAIKAN: Hitung persentase yang benar untuk pie chart
  const reportStatusData = [
    {
      status: "Approved",
      value:
        totalReports > 0
          ? Math.round((approvedReports / totalReports) * 100)
          : 0,
      count: approvedReports,
      color: "#10B981",
    },
    {
      status: "Pending",
      value:
        totalReports > 0
          ? Math.round((pendingReports / totalReports) * 100)
          : 0,
      count: pendingReports,
      color: "#F59E0B",
    },
    {
      status: "Rejected",
      value:
        totalReports > 0
          ? Math.round((rejectedReports / totalReports) * 100)
          : 0,
      count: rejectedReports,
      color: "#EF4444",
    },
  ];

  // Pastikan total persentase = 100%
  const totalPercentage = reportStatusData.reduce(
    (sum, item) => sum + item.value,
    0
  );
  if (totalPercentage !== 100 && reportStatusData.length > 0) {
    // Koreksi rounding error dengan menyesuaikan item pertama
    reportStatusData[0].value += 100 - totalPercentage;
  }

  const sitePerformanceData = sitesData.map((site) => {
    const siteReports = reportsData.filter(
      (report) => report.site === site.name
    );
    const approvedSiteReports = siteReports.filter(
      (report) => report.status === "approved"
    ).length;
    const compliance =
      siteReports.length > 0
        ? Math.round((approvedSiteReports / siteReports.length) * 100)
        : 0;

    return {
      city: site.city,
      compliance: compliance,
      reports: siteReports.length,
    };
  });

  // Filter data untuk masing-masing menu
  // PERBAIKAN: Tambahkan filter untuk maintenance
  const filteredSites = sitesData
    .filter(
      (site) =>
        (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          site.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          site.city.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStatus === "All Status" ||
          (selectedStatus === "Active" && site.status === "active") ||
          (selectedStatus === "Inactive" && site.status === "inactive") ||
          (selectedStatus === "Maintenance" && site.status === "maintenance"))
    )
    .sort((a, b) => b.id - a.id);

  const filteredUsers = usersData
    .filter(
      (user) =>
        (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedStatus === "All Users" ||
          (selectedStatus === "Active" && user.status === "active") ||
          (selectedStatus === "Inactive" && user.status === "inactive")) &&
        (selectedRole === "all" || user.role === selectedRole)
    )
    .sort((a, b) => b.id - a.id);

  const filteredReports = reportsData
    .filter(
      (report) =>
        (report.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
          report.date.includes(searchQuery)) &&
        (selectedStatus === "All Reports" ||
          (selectedStatus === "Approved" && report.status === "approved") ||
          (selectedStatus === "Pending" && report.status === "pending") ||
          (selectedStatus === "Rejected" && report.status === "rejected")) &&
        (selectedSite === "all" || report.site === selectedSite)
    )
    .sort((a, b) => {
      const dateCompare = b.date.localeCompare(a.date);
      if (dateCompare !== 0) return dateCompare;
      return b.time.localeCompare(a.time);
    });

  const uniqueSites = [...new Set(reportsData.map((report) => report.site))];

  // ==================== VALIDASI FORM ====================
  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Nama site harus diisi";
    if (!data.city.trim()) errors.city = "Kota harus diisi";
    if (!data.address.trim()) errors.address = "Alamat harus diisi";
    if (!data.province.trim()) errors.province = "Provinsi harus diisi";
    return errors;
  };

  const validateUserForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Nama user harus diisi";
    if (!data.email.trim()) errors.email = "Email harus diisi";
    if (!data.email.includes("@")) errors.email = "Format email tidak valid";
    if (!data.site.trim()) errors.site = "Site harus diisi";
    return errors;
  };

  // ==================== SITE HANDLERS ====================
  const handleAddSite = () => {
    const errors = validateForm(newSiteData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newId =
      sitesData.length > 0
        ? Math.max(...sitesData.map((site) => site.id)) + 1
        : 1;

    const newSite = {
      id: newId,
      name: newSiteData.name,
      city: newSiteData.city,
      address: newSiteData.address,
      province: newSiteData.province,
      operators: Math.floor(Math.random() * 5) + 1,
      status: newSiteData.status,
      lastReport: "Just now",
    };

    setSitesData([newSite, ...sitesData]);
    alert(`Site ${newSiteData.name} berhasil ditambahkan!`);
    setIsAddSiteModalOpen(false);
    setNewSiteData({
      name: "",
      city: "",
      address: "",
      province: "",
      status: "active",
    });
    setFormErrors({});
  };

  const handleEditSite = (site) => {
    setEditingSite({ ...site });
    setIsEditSiteModalOpen(true);
    setFormErrors({});
  };

  const handleUpdateSite = () => {
    const errors = validateForm(editingSite);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSitesData(
      sitesData.map((site) => (site.id === editingSite.id ? editingSite : site))
    );

    // Update juga data users yang terkait site ini
    setUsersData(
      usersData.map((user) =>
        user.site === editingSite.name
          ? { ...user, site: editingSite.name }
          : user
      )
    );

    // Update juga data reports yang terkait site ini
    setReportsData(
      reportsData.map((report) =>
        report.site === editingSite.name
          ? { ...report, site: editingSite.name }
          : report
      )
    );

    alert(`Site ${editingSite.name} berhasil diupdate!`);
    setIsEditSiteModalOpen(false);
    setEditingSite(null);
    setFormErrors({});
  };

  const handleDeleteSite = (siteId) => {
    const siteToDelete = sitesData.find((site) => site.id === siteId);

    if (
      confirm(`Apakah Anda yakin ingin menghapus site ${siteToDelete.name}?`)
    ) {
      // Cek apakah ada user yang menggunakan site ini
      const usersWithThisSite = usersData.filter(
        (user) => user.site === siteToDelete.name
      );
      if (usersWithThisSite.length > 0) {
        alert(
          `Tidak dapat menghapus site karena terdapat ${usersWithThisSite.length} user yang menggunakan site ini.`
        );
        return;
      }

      // Cek apakah ada reports yang terkait site ini
      const reportsWithThisSite = reportsData.filter(
        (report) => report.site === siteToDelete.name
      );
      if (reportsWithThisSite.length > 0) {
        alert(
          `Tidak dapat menghapus site karena terdapat ${reportsWithThisSite.length} reports yang terkait dengan site ini.`
        );
        return;
      }

      setSitesData(sitesData.filter((site) => site.id !== siteId));
      alert("Site berhasil dihapus!");
    }
  };

  const handleInputChange = (field, value) => {
    setNewSiteData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleEditInputChange = (field, value) => {
    setEditingSite((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // ==================== USER HANDLERS ====================
  const handleAddUser = () => {
    const errors = validateUserForm(newUserData);
    if (Object.keys(errors).length > 0) {
      setUserFormErrors(errors);
      return;
    }

    const newId =
      usersData.length > 0
        ? Math.max(...usersData.map((user) => user.id)) + 1
        : 1;

    const newUser = {
      id: newId,
      name: newUserData.name,
      email: newUserData.email,
      role: newUserData.role,
      site: newUserData.site,
      status: newUserData.status,
      lastActive: "Just now",
      initial: newUserData.name.charAt(0).toUpperCase(),
    };

    setUsersData([newUser, ...usersData]);

    // Update operator count di sites data
    if (newUserData.role === "operator" && newUserData.status === "active") {
      setSitesData(
        sitesData.map((site) =>
          site.name === newUserData.site
            ? { ...site, operators: site.operators + 1 }
            : site
        )
      );
    }

    alert(`User ${newUserData.name} berhasil ditambahkan!`);
    setIsAddUserModalOpen(false);
    setNewUserData({
      name: "",
      email: "",
      role: "operator",
      site: "",
      status: "active",
    });
    setUserFormErrors({});
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
    setIsEditUserModalOpen(true);
    setUserFormErrors({});
  };

  const handleUpdateUser = () => {
    const errors = validateUserForm(editingUser);
    if (Object.keys(errors).length > 0) {
      setUserFormErrors(errors);
      return;
    }

    const oldUserData = usersData.find((u) => u.id === editingUser.id);

    setUsersData(
      usersData.map((user) =>
        user.id === editingUser.id
          ? {
              ...editingUser,
              initial: editingUser.name.charAt(0).toUpperCase(),
            }
          : user
      )
    );

    // Update operator count jika ada perubahan role atau site
    if (oldUserData.role === "operator" && oldUserData.status === "active") {
      if (
        editingUser.role !== "operator" ||
        editingUser.status !== "active" ||
        editingUser.site !== oldUserData.site
      ) {
        // Kurangi count di site lama
        setSitesData(
          sitesData.map((site) =>
            site.name === oldUserData.site
              ? { ...site, operators: Math.max(0, site.operators - 1) }
              : site
          )
        );
      }
    }

    if (editingUser.role === "operator" && editingUser.status === "active") {
      if (
        oldUserData.role !== "operator" ||
        oldUserData.status !== "active" ||
        editingUser.site !== oldUserData.site
      ) {
        // Tambah count di site baru
        setSitesData(
          sitesData.map((site) =>
            site.name === editingUser.site
              ? { ...site, operators: site.operators + 1 }
              : site
          )
        );
      }
    }

    // Update reports data jika nama operator berubah
    if (
      oldUserData.name !== editingUser.name &&
      oldUserData.role === "operator"
    ) {
      setReportsData(
        reportsData.map((report) =>
          report.operator === oldUserData.name
            ? { ...report, operator: editingUser.name }
            : report
        )
      );
    }

    alert(`User ${editingUser.name} berhasil diupdate!`);
    setIsEditUserModalOpen(false);
    setEditingUser(null);
    setUserFormErrors({});
  };

  // ==================== FUNGSI DELETE USER YANG DIPERBAIKI ====================
  const handleDeleteUser = (userId) => {
    const userToDelete = usersData.find((user) => user.id === userId);

    // Cek apakah ada reports yang dibuat oleh user ini
    const userReports = reportsData.filter(
      (report) => report.operator === userToDelete.name
    );
    if (userReports.length > 0) {
      alert(
        `Tidak dapat menghapus user karena terdapat ${userReports.length} reports yang dibuat oleh user ini.`
      );
      setIsDeleteUserModalOpen(false);
      return;
    }

    // Update operator count jika user adalah operator aktif
    if (
      userToDelete.role === "operator" &&
      userToDelete.status === "active"
    ) {
      setSitesData(
        sitesData.map((site) =>
          site.name === userToDelete.site
            ? { ...site, operators: Math.max(0, site.operators - 1) }
            : site
        )
      );
    }

    setUsersData(usersData.filter((user) => user.id !== userId));
    alert("User berhasil dihapus!");
    setIsDeleteUserModalOpen(false);
  };

  const handleUserInputChange = (field, value) => {
    setNewUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (userFormErrors[field]) {
      setUserFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleEditUserInputChange = (field, value) => {
    setEditingUser((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (userFormErrors[field]) {
      setUserFormErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // ==================== REPORT HANDLERS ====================
  const handleReview = (reportId) => {
    const report = reportsData.find((r) => r.id === reportId);
    setSelectedReport(report);
    setIsReviewModalOpen(true);
  };

  const handleApprove = (reportId) => {
    setReportsData((prev) =>
      prev.map((report) =>
        report.id === reportId ? { ...report, status: "approved" } : report
      )
    );
    alert(` Report ${reportId} berhasil disetujui!`);
  };

  const handleReject = (reportId) => {
    setReportsData((prev) =>
      prev.map((report) =>
        report.id === reportId ? { ...report, status: "rejected" } : report
      )
    );
    alert(` Report ${reportId} berhasil ditolak!`);
  };

  // ==================== EXPORT HANDLERS ====================
  const handleExportReport = () => {
    setIsExportModalOpen(true);
  };

  const handleConfirmExport = () => {
    // Filter reports berdasarkan pilihan
    let reportsToExport = [...filteredReports];

    // Filter tambahan berdasarkan modal export
    if (exportStatus !== "all") {
      reportsToExport = reportsToExport.filter(
        (report) => report.status === exportStatus
      );
    }

    // Filter berdasarkan date range (simulasi sederhana)
    if (exportDateRange === "today") {
      reportsToExport = reportsToExport.filter(
        (report) => report.date === "2025-01-27"
      );
    } else if (exportDateRange === "week") {
      reportsToExport = reportsToExport.slice(
        0,
        Math.min(reportsToExport.length, 10)
      );
    }

    if (exportFormat === "pdf") {
      exportToPDF(reportsToExport);
    } else {
      exportToCSV(reportsToExport);
    }

    setIsExportModalOpen(false);
  };

  const exportToPDF = (reports) => {
    // Simulasi pembuatan file PDF
    const reportCount = reports.length;
    const statusCount = {
      approved: reports.filter((r) => r.status === "approved").length,
      pending: reports.filter((r) => r.status === "pending").length,
      rejected: reports.filter((r) => r.status === "rejected").length,
    };

    const dateRangeText = {
      today: "Hari Ini",
      week: "Minggu Ini",
      month: "Bulan Ini",
      all: "Semua Data",
    }[exportDateRange];

    const statusText = {
      all: "Semua Status",
      approved: "Disetujui",
      pending: "Pending",
      rejected: "Ditolak",
    }[exportStatus];

    // Simulasi download file PDF
    const element = document.createElement("a");
    const fileContent = `Laporan IPAL Monitoring\n\nTotal Data: ${reportCount}\nFormat: PDF\nRentang Waktu: ${dateRangeText}\nStatus: ${statusText}\n\nDisetujui: ${
      statusCount.approved
    }\nPending: ${statusCount.pending}\nDitolak: ${
      statusCount.rejected
    }\n\nTanggal Export: ${new Date().toLocaleDateString("id-ID")}`;
    const file = new Blob([fileContent], { type: "application/pdf" });
    element.href = URL.createObjectURL(file);
    element.download = `laporan-ipal-${
      new Date().toISOString().split("T")[0]
    }.pdf`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    alert(
      `Export PDF Berhasil!\n\nFile "laporan-ipal-${
        new Date().toISOString().split("T")[0]
      }.pdf" telah didownload.`
    );
  };

  const exportToCSV = (reports) => {
    // Membuat file CSV
    const headers = [
      "Date",
      "Time",
      "Site",
      "Operator",
      "pH",
      "Flow Rate",
      "Status",
    ];
    const csvData = reports.map((report) => [
      report.date,
      report.time,
      `"${report.site}"`,
      `"${report.operator}"`,
      report.pH,
      report.flowRate,
      report.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");

    // Download file CSV
    const element = document.createElement("a");
    const file = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `laporan-ipal-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    alert(
      ` Export CSV Berhasil!\n\nFile "laporan-ipal-${
        new Date().toISOString().split("T")[0]
      }.csv" telah didownload.`
    );
  };

  // ==================== NOTIFICATION DATA ====================
  const [extendedNotifications, setExtendedNotifications] = useState([
    {
      id: 5,
      type: "alert",
      title: "Water quality alert - Site Jakarta",
      description:
        "pH levels outside normal range detected at Jakarta treatment plant",
      time: "Just now",
      icon: ExclamationTriangleIcon,
      color: "text-red-600",
      bgColor: "bg-red-100",
      priority: "high",
      unread: true,
      action: "viewSites",
    },
    {
      id: 4,
      type: "system",
      title: "System maintenance scheduled",
      description: "Planned system maintenance scheduled for next weekend",
      time: "10 mins ago",
      icon: CogIcon,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      priority: "low",
      unread: true,
      action: "viewDashboard",
    },
    {
      id: 3,
      type: "report",
      title: "New daily reports submitted",
      description:
        "3 new daily operation reports have been submitted and require validation",
      time: "2 hours ago",
      icon: DocumentChartBarIcon,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      priority: "high",
      unread: true,
      action: "viewReports",
    },
    {
      id: 2,
      type: "request",
      title: "Friend requests pending approval",
      description:
        "8 new friend requests from operators awaiting your approval",
      time: "1 day ago",
      icon: UserPlusIcon,
      color: "text-green-600",
      bgColor: "bg-green-100",
      priority: "medium",
      unread: false,
      action: "viewUsers",
    },
    {
      id: 1,
      type: "message",
      title: "New messages from Site Operators",
      description:
        "You have 4 unread messages from various site operators requiring attention",
      time: "2 days ago",
      icon: EnvelopeIcon,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      priority: "high",
      unread: false,
      action: "viewMessages",
    },
  ]);

  // PERBAIKAN: Hitung unreadCount dari extendedNotifications
  const unreadCount = extendedNotifications.filter(
    (notification) => notification.unread
  ).length;

  // Notifications untuk dropdown (3 terbaru yang unread)
  const notifications = extendedNotifications
    .filter((notification) => notification.unread)
    .slice(0, 3)
    .map((notification) => ({
      ...notification,
      count: 1, // Setiap notifikasi dihitung 1
    }));

  // Filter notifications based on selected filter
  const filteredNotifications = extendedNotifications.filter((notification) => {
    if (notificationFilter === "all") return true;
    return notification.type === notificationFilter;
  });

  // ==================== NOTIFICATION HANDLERS ====================
  const handleNotificationAction = (action, notificationId = null) => {
    setNotificationOpen(false);
    setIsNotificationModalOpen(false);

    // Mark as read if notificationId is provided
    if (notificationId) {
      setExtendedNotifications((prev) =>
        prev.map((notif) =>
          notif.id === notificationId ? { ...notif, unread: false } : notif
        )
      );
    }

    // Navigate based on action
    switch (action) {
      case "viewMessages":
        alert(
          "Opening messages... This would navigate to messages page in a real application."
        );
        break;
      case "viewRequests":
        alert(
          "Opening friend requests... This would navigate to friend requests page in a real application."
        );
        break;
      case "viewReports":
        setActiveMenu("reports");
        break;
      case "viewUsers":
        setActiveMenu("users");
        break;
      case "viewSites":
        setActiveMenu("sites");
        break;
      case "viewDashboard":
        setActiveMenu("dashboard");
        break;
      default:
        setActiveMenu("dashboard");
    }
  };

  const handleSeeAllNotifications = () => {
    setNotificationOpen(false);
    setIsNotificationModalOpen(true);
  };

  const handleMarkAllAsRead = () => {
    setExtendedNotifications((prev) =>
      prev.map((notif) => ({ ...notif, unread: false }))
    );
  };

  const handleMarkAsRead = (notificationId) => {
    setExtendedNotifications((prev) =>
      prev.map((notif) =>
        notif.id === notificationId ? { ...notif, unread: false } : notif
      )
    );
  };

  const handleReply = (notificationId) => {
    alert(
      "Opening reply form... This would open a reply form in a real application."
    );
    handleMarkAsRead(notificationId);
  };

  // ==================== CHART CALCULATIONS ====================
  const calculatePieChart = () => {
    let accumulatedValue = 0;
    return reportStatusData.map((item, index) => {
      const startAngle = (accumulatedValue / 100) * 360;
      accumulatedValue += item.value;
      const endAngle = (accumulatedValue / 100) * 360;

      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

      const startX = 50 + 40 * Math.cos((startAngle - 90) * (Math.PI / 180));
      const startY = 50 + 40 * Math.sin((startAngle - 90) * (Math.PI / 180));
      const endX = 50 + 40 * Math.cos((endAngle - 90) * (Math.PI / 180));
      const endY = 50 + 40 * Math.sin((endAngle - 90) * (Math.PI / 180));

      return {
        ...item,
        path: `M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArcFlag} 1 ${endX} ${endY} Z`,
        startAngle,
        endAngle,
        middleAngle: (startAngle + endAngle) / 2,
      };
    });
  };

  const pieChartData = calculatePieChart();

  const getStatusConfig = (status) => {
    const config = {
      approved: {
        icon: CheckCircleIcon,
        color: "text-green-100",
        bgColor: "bg-green-800",
        borderColor: "border-green-200",
        text: "Approved",
        textColor: "text-green-800",
      },
      pending: {
        icon: ClockIcon,
        color: "text-yellow-600",
        bgColor: "bg-yellow-300",
        borderColor: "border-yellow-200",
        text: "Pending",
        textColor: "text-yellow-800",
      },
      rejected: {
        icon: XCircleIcon,
        color: "text-red-100",
        bgColor: "bg-red-600",
        borderColor: "border-red-200",
        text: "Rejected",
        textColor: "text-red-800",
      },
    };
    return config[status] || config.pending;
  };

  // ==================== PERBAIKAN: Fungsi untuk mendapatkan warna status site ====================
  const getSiteStatusConfig = (status) => {
    const config = {
      active: {
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        dotColor: "bg-green-400",
      },
      inactive: {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
        dotColor: "bg-gray-400",
      },
      maintenance: {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
        dotColor: "bg-yellow-400",
      },
    };
    return config[status] || config.inactive;
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Overlay mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* PERBAIKAN: Sidebar background diubah menjadi putih */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col
        z-50 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white">
          <img
            src="/hero/logosioptima.png"
            alt="logo"
            className="w-9 h-9 rounded"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
            <p className="text-sm text-gray-600">IPAL Monitoring</p>
          </div>

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden ml-auto p-2 text-gray-600 hover:text-teal-600 transition"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar menu */}
        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  {/* PERBAIKAN: Warna menu aktif dan hover diubah */}
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
                      ${
                        activeMenu === item.id
                          ? "bg-teal-100 text-teal-800 border-teal-600 shadow-sm"
                          : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Admin badge */}
        {/* Admin badge - REVISI: BACKGROUND ABU-ABU DENGAN KOTAK ROUNDED YANG ESTETIK */}
        <div className="p-4 mt-auto">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-gradient-to-r  from-teal-500 to-cyan-600 rounded-full
        flex items-center justify-center text-white font-bold text-lg shadow-md"
              >
                {usersData.find((user) => user.role === "admin")?.initial ||
                  "A"}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate text-sm">
                  {usersData.find((user) => user.role === "admin")?.name ||
                    "Admin User"}
                </p>
                <p className="text-gray-600 truncate text-xs mt-0.5">
                  {usersData.find((user) => user.role === "admin")?.email ||
                    "admin@sioptima.com"}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-500 text-xs truncate">
                    {usersData.find((user) => user.role === "admin")?.role ||
                      "Admin"}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>
                  {usersData.find((user) => user.role === "admin")?.site ||
                    "Head Office"}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 lg:ml-64">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex justify-between items-center px-4 lg:px-6 py-4">
            {/* Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:text-teal-600"
              >
                <Bars3Icon className="w-6 h-6" />
              </button>

              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                {menuItems.find((m) => m.id === activeMenu)?.name}
              </h1>
            </div>

            {/* Icons right */}
            <div className="flex items-center gap-4">
              {/* Notification Dropdown */}
              <div
                ref={notificationRef}
                className="relative flex flex-col items-end gap-2"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setNotificationOpen((prev) => !prev);
                  }}
                  className="p-2 text-gray-600 hover:text-teal-600 relative transition"
                >
                  <BellIcon className="w-6 h-6" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>

                {notificationOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
      py-2 z-[9999] transition-transform origin-top"
                  >
                    {/* Notification Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-lg">
                          {unreadCount} Notifications
                        </h3>
                        <button
                          onClick={handleSeeAllNotifications}
                          className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                        >
                          See All
                        </button>
                      </div>
                    </div>

                    {/* Notification List */}
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => {
                        const Icon = notification.icon;
                        return (
                          <div
                            key={notification.id}
                            className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition cursor-pointer"
                            onClick={() =>
                              handleNotificationAction(
                                notification.action,
                                notification.id
                              )
                            }
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`p-2 rounded-full ${notification.bgColor} flex-shrink-0`}
                              >
                                <Icon
                                  className={`w-5 h-5 ${notification.color}`}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1 gap-2">
                                  <h4 className="font-semibold text-gray-900 text-sm truncate flex-1">
                                    {notification.title}
                                  </h4>
                                  <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">
                                    {notification.time}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                  <p className="text-sm text-gray-600 truncate flex-1">
                                    {notification.description}
                                  </p>
                                  <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                                    new
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile Dropdown */}
              <div
                ref={dropdownRef}
                className="relative flex flex-col items-end gap-2"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen((prev) => !prev);
                  }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
      rounded-full flex items-center justify-center text-white font-bold"
                  >
                    {usersData.find((user) => user.role === "admin")?.initial ||
                      "A"}
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-600 transition-transform duration-200
        ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropdownOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
      py-2 z-[9999] transition-transform origin-top"
                  >
                    {/* User Info Section - MENGGUNAKAN DATA REAL DARI usersData */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
            rounded-full flex items-center justify-center text-white font-bold"
                        >
                          {usersData.find((user) => user.role === "admin")
                            ?.initial || "A"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {usersData.find((user) => user.role === "admin")
                              ?.name || "Admin User"}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {usersData.find((user) => user.role === "admin")
                              ?.email || "admin@sioptima.com"}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {usersData.find((user) => user.role === "admin")
                              ?.site || "Head Office"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Logout Button */}
                    <button
                      onClick={async () => {
                        setDropdownOpen(false);
                        await fetch("/api/auth/logout", { method: "POST" });
                        router.push("/");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2
        text-red-600 hover:bg-red-50 text-left text-sm"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ==================== HELP/TICKET CONTENT ==================== */}
        {activeMenu === "help" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Help Ticket System
                </h1>
                <p className="text-gray-600 text-sm">
                  Kelola tiket bantuan dari operator dan berikan solusi
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Total Tickets
                  </h3>
                  <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
                    <ChatBubbleLeftRightIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {helpTickets.length}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Open
                  </h3>
                  <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {
                    helpTickets.filter((ticket) => ticket.status === "open")
                      .length
                  }
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Pending
                  </h3>
                  <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {
                    helpTickets.filter((ticket) => ticket.status === "pending")
                      .length
                  }
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Closed
                  </h3>
                  <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {
                    helpTickets.filter((ticket) => ticket.status === "closed")
                      .length
                  }
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start lg:items-center">
                <div className="relative flex-1 w-full">
                  <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search tickets by number, operator, or subject..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["all", "open", "pending", "closed"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setTicketFilter(status)}
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                        ticketFilter === status
                          ? "bg-teal-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>

                <select
                  value={ticketPriorityFilter}
                  onChange={(e) => setTicketPriorityFilter(e.target.value)}
                  className="w-full lg:w-auto px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
                >
                  <option value="all">All Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            {/* Tickets Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table Header */}
              <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
                <div className="col-span-2">Ticket ID</div>
                <div className="col-span-2">Operator</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-3">Subject</div>
                <div className="col-span-1 text-center">Priority</div>
                <div className="col-span-1 text-center">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredHelpTickets.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center text-gray-500 text-sm">
                    No tickets found matching your criteria.
                  </div>
                ) : (
                  filteredHelpTickets.map((ticket) => {
                    const priorityConfig = getTicketPriorityConfig(
                      ticket.priority
                    );
                    const statusConfig = getTicketStatusConfig(ticket.status);
                    const PriorityIcon = priorityConfig.icon;
                    const StatusIcon = statusConfig.icon;

                    return (
                      <div
                        key={ticket.id}
                        className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
                      >
                        {/* Mobile View */}
                        <div className="lg:hidden space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <p className="font-semibold text-gray-900 text-sm">
                                {ticket.ticketNumber}
                              </p>
                              <p className="text-xs text-gray-500">
                                {ticket.createdAt}
                              </p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}
                              >
                                <PriorityIcon className="w-3 h-3" />
                                {priorityConfig.label}
                              </span>
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}
                              >
                                <StatusIcon className="w-3 h-3" />
                                {statusConfig.label}
                              </span>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Operator
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {ticket.operatorName}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 mb-1">Site</p>
                            <p className="text-sm font-medium text-gray-900">
                              {ticket.site}
                            </p>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Subject
                            </p>
                            <p className="text-sm font-medium text-gray-900">
                              {ticket.subject}
                            </p>
                          </div>

                          <div className="flex justify-end pt-3 border-t border-gray-200">
                            <button
                              onClick={() => handleViewTicket(ticket)}
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-1.5 rounded-lg hover:bg-blue-50 border border-blue-200 text-xs font-medium"
                            >
                              <EyeIcon className="w-3 h-3" />
                              View Details
                            </button>
                          </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:flex col-span-2 items-center">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {ticket.ticketNumber}
                            </p>
                            <p className="text-xs text-gray-500">
                              {ticket.createdAt.split(" ")[0]}
                            </p>
                          </div>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {ticket.operatorName}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {ticket.operatorEmail}
                            </p>
                          </div>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p className="text-gray-700 text-sm truncate">
                            {ticket.site}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-3 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={ticket.subject}
                          >
                            {ticket.subject}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`}
                            title={priorityConfig.label}
                          >
                            <PriorityIcon className="w-3 h-3" />
                            {priorityConfig.label}
                          </span>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.color}`}
                            title={statusConfig.label}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig.label}
                          </span>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <button
                            onClick={() => handleViewTicket(ticket)}
                            className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
                            title="View Ticket Details"
                          >
                            <EyeIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}

        {/* Modal Detail Tiket */}
        {/* Modal Detail Tiket - REVISI DENGAN VALIDASI DAN TOMBOL RAPI */}
        {isTicketModalOpen && selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div
              ref={ticketModalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[95vh]"
            >
              {/* Header Modal */}
              <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Ticket Details - {selectedTicket.ticketNumber}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Submitted by {selectedTicket.operatorName} on{" "}
                    {selectedTicket.createdAt}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsTicketModalOpen(false);
                    setSolutionError("");
                  }}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column - Ticket Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Ticket Information
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ticket ID
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedTicket.ticketNumber}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Status
                        </label>
                        {(() => {
                          const config = getTicketStatusConfig(
                            selectedTicket.status
                          );
                          const Icon = config.icon;
                          return (
                            <span
                              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.bgColor} ${config.color} border ${config.borderColor}`}
                            >
                              <Icon className="w-4 h-4" />
                              {config.label}
                            </span>
                          );
                        })()}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Operator
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedTicket.operatorName}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedTicket.operatorEmail}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Site
                      </label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                        {selectedTicket.site}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Priority
                      </label>
                      {(() => {
                        const config = getTicketPriorityConfig(
                          selectedTicket.priority
                        );
                        const Icon = config.icon;
                        return (
                          <span
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${config.bgColor} ${config.color} border ${config.borderColor}`}
                          >
                            <Icon className="w-4 h-4" />
                            {config.label}
                          </span>
                        );
                      })()}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded border">
                        {selectedTicket.subject}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                      </label>
                      <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded border whitespace-pre-wrap">
                        {selectedTicket.description}
                      </div>
                    </div>

                    {/* Attachments from Operator - REVISI DENGAN FITUR BUKA/INSTALL */}
                    {selectedTicket.attachments &&
                      selectedTicket.attachments.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Attachments from Operator
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {selectedTicket.attachments.map((file, index) => {
                              const isImage =
                                /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(file);
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
                                >
                                  {isImage ? (
                                    <PhotoIcon className="w-4 h-4 text-blue-600" />
                                  ) : (
                                    <DocumentChartBarIcon className="w-4 h-4 text-gray-600" />
                                  )}
                                  <span className="text-sm text-gray-700 truncate max-w-[150px]">
                                    {file}
                                  </span>
                                  <div className="flex gap-1">
                                    <button
                                      onClick={() => handleOpenImage(file)}
                                      className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                                      title="Open File"
                                    >
                                      <EyeIcon className="w-4 h-4" />
                                    </button>
                                    <button
                                      onClick={() => handleDownloadImage(file)}
                                      className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
                                      title="Download File"
                                    >
                                      <ArrowDownTrayIcon className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Right Column - Admin Actions */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Admin Actions
                    </h3>

                    {/* Admin Notes */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Admin Notes (Internal)
                      </label>
                      <textarea
                        value={adminNotesText}
                        onChange={(e) => setAdminNotesText(e.target.value)}
                        placeholder="Catatan internal untuk tim admin..."
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm resize-none"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Catatan ini hanya visible untuk admin
                      </p>
                    </div>

                    {/* Solution dengan validasi */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Solution (Visible to Operator){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={solutionText}
                        onChange={(e) => {
                          setSolutionText(e.target.value);
                          if (solutionError) setSolutionError("");
                        }}
                        placeholder="Masukkan solusi untuk kendala operator..."
                        rows={6}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm resize-none ${
                          solutionError ? "border-red-500" : "border-gray-300"
                        }`}
                        required
                      />
                      {solutionError && (
                        <p className="text-red-500 text-xs mt-1">
                          {solutionError}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Solusi ini akan dikirim ke operator dan status tiket
                        berubah menjadi "Selesai"
                      </p>
                    </div>

                    {/* Closed Info */}
                    {selectedTicket.status === "closed" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-green-900">
                              Ticket Already Closed
                            </p>
                            <p className="text-xs text-green-700 mt-1">
                              Closed by {selectedTicket.closedBy} on{" "}
                              {selectedTicket.closedAt}
                            </p>
                            {selectedTicket.solution && (
                              <div className="mt-2">
                                <p className="text-xs font-medium text-green-900">
                                  Solution Provided:
                                </p>
                                <p className="text-xs text-green-700 mt-1 whitespace-pre-wrap">
                                  {selectedTicket.solution}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer Actions - REVISI TOMBOL LEBIH RAPI */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-600">
                    Last updated: {selectedTicket.updatedAt}
                  </div>
                  <div className="flex gap-3 flex-wrap justify-end">
                    {selectedTicket.status !== "closed" && (
                      <>
                        <button
                          onClick={handleSaveNotes}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm"
                        >
                          <PencilIcon className="w-4 h-4" />
                          Save Notes
                        </button>
                        <button
                          onClick={handleSetPending}
                          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition font-medium text-sm"
                        >
                          <ClockIcon className="w-4 h-4" />
                          Set Pending
                        </button>
                        <button
                          onClick={handleCloseTicket}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm"
                        >
                          <PaperAirplaneIcon className="w-4 h-4" />
                          Send Solution & Close
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => {
                        setIsTicketModalOpen(false);
                        setSolutionError("");
                      }}
                      className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Delete User */}
        {isDeleteUserModalOpen && userToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div
              ref={deleteUserModalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] flex flex-col"
            >
              {/* Header Modal */}
              <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Hapus User
                  </h2>
                  <p className="text-sm text-gray-600">
                    Konfirmasi penghapusan user
                  </p>
                </div>
                <button
                  onClick={() => setIsDeleteUserModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        userToDelete.role === "operator"
                          ? "from-teal-500 to-cyan-600"
                          : userToDelete.role === "hrd"
                          ? "from-orange-500 to-red-600"
                          : "from-purple-500 to-indigo-600"
                      } rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {userToDelete.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{userToDelete.name}</p>
                      <p className="text-sm text-gray-600">{userToDelete.email}</p>
                      <p className="text-xs text-gray-500">{userToDelete.role} • {userToDelete.site}</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-yellow-900">
                          Peringatan
                        </p>
                        <p className="text-xs text-yellow-700 mt-1">
                          Tindakan ini akan menghapus user secara permanen dan tidak dapat dibatalkan.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm">
                    Apakah Anda yakin ingin menghapus user <span className="font-semibold">{userToDelete.name}</span>? 
                    Tindakan ini tidak dapat dibatalkan.
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                <button
                  onClick={() => setIsDeleteUserModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  Batal
                </button>
                <button
                  onClick={() => handleDeleteUser(userToDelete.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                >
                  Hapus User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Edit User */}
        {isEditUserModalOpen && editingUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
              {/* Header Modal */}
              <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Edit User
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Edit informasi user
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsEditUserModalOpen(false);
                    setUserFormErrors({});
                  }}
                  className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
                <div className="space-y-3 sm:space-y-4">
                  {/* Nama User */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Nama User <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) =>
                        handleEditUserInputChange("name", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {userFormErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        handleEditUserInputChange("email", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {userFormErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Role
                    </label>
                    <select
                      value={editingUser.role}
                      onChange={(e) =>
                        handleEditUserInputChange("role", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                    >
                      <option value="operator">Operator</option>
                      <option value="hrd">HRD</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  {/* Site */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Site <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={editingUser.site}
                      onChange={(e) =>
                        handleEditUserInputChange("site", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.site
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Pilih Site</option>
                      {sitesData.map((site) => (
                        <option key={site.id} value={site.name}>
                          {site.name}
                        </option>
                      ))}
                    </select>
                    {userFormErrors.site && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.site}
                      </p>
                    )}
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Status
                    </label>
                    <select
                      value={editingUser.status}
                      onChange={(e) =>
                        handleEditUserInputChange("status", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setIsEditUserModalOpen(false);
                    setUserFormErrors({});
                  }}
                  className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                >
                  Batal
                </button>
                <button
                  onClick={handleUpdateUser}
                  disabled={Object.keys(userFormErrors).length > 0}
                  className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                    Object.keys(userFormErrors).length > 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700"
                  }`}
                >
                  <PencilIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Update User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Add User */}
        {isAddUserModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
            <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
              {/* Header Modal */}
              <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Tambah User Baru
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-700">
                    Masukkan informasi user baru
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsAddUserModalOpen(false);
                    setUserFormErrors({});
                  }}
                  className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
                <div className="space-y-3 sm:space-y-4">
                  {/* Nama User */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Nama User <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={newUserData.name}
                      onChange={(e) =>
                        handleUserInputChange("name", e.target.value)
                      }
                      placeholder="Nama lengkap user"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {userFormErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={newUserData.email}
                      onChange={(e) =>
                        handleUserInputChange("email", e.target.value)
                      }
                      placeholder="email@domain.com"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {userFormErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Role
                    </label>
                    <select
                      value={newUserData.role}
                      onChange={(e) =>
                        handleUserInputChange("role", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                    >
                      <option value="operator">Operator</option>
                      <option value="hrd">HRD</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>

                  {/* Site */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Site <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newUserData.site}
                      onChange={(e) =>
                        handleUserInputChange("site", e.target.value)
                      }
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        userFormErrors.site
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Pilih Site</option>
                      {sitesData.map((site) => (
                        <option key={site.id} value={site.name}>
                          {site.name}
                        </option>
                      ))}
                    </select>
                    {userFormErrors.site && (
                      <p className="text-red-500 text-xs mt-1">
                        {userFormErrors.site}
                      </p>
                    )}
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Status
                    </label>
                    <select
                      value={newUserData.status}
                      onChange={(e) =>
                        handleUserInputChange("status", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setIsAddUserModalOpen(false);
                    setUserFormErrors({});
                  }}
                  className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                >
                  Batal
                </button>
                <button
                  onClick={handleAddUser}
                  disabled={Object.keys(userFormErrors).length > 0}
                  className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                    Object.keys(userFormErrors).length > 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700"
                  }`}
                >
                  <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Tambah User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Review Detail */}
        {isReviewModalOpen && selectedReport && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div
              ref={reviewModalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[95vh]"
            >
              {/* Header Modal */}
              <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Report Details
                  </h2>
                  <p className="text-sm text-gray-600">
                    Review detailed information for report #{selectedReport.id}
                  </p>
                </div>
                <button
                  onClick={() => setIsReviewModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Basic Information
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Report ID
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          #{selectedReport.id}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date & Time
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedReport.date} at {selectedReport.time}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Site
                      </label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                        {selectedReport.site}
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Operator
                      </label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                        {selectedReport.operator}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          pH Level
                        </label>
                        <p
                          className={`text-sm font-medium p-2 rounded border ${
                            parseFloat(selectedReport.pH) >= 7.0 &&
                            parseFloat(selectedReport.pH) <= 8.5
                              ? "bg-green-100 text-green-800 border-green-200"
                              : parseFloat(selectedReport.pH) >= 6.5
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-red-100 text-red-800 border-red-200"
                          }`}
                        >
                          {selectedReport.pH}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Flow Rate
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedReport.flowRate}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                          selectedReport.status === "approved"
                            ? "bg-green-100 text-green-800 border border-green-200"
                            : selectedReport.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                              : "bg-red-100 text-red-800 border border-red-200"
                        }`}
                      >
                        {selectedReport.status === "approved" && (
                          <CheckCircleIcon className="w-4 h-4" />
                        )}
                        {selectedReport.status === "pending" && (
                          <ClockIcon className="w-4 h-4" />
                        )}
                        {selectedReport.status === "rejected" && (
                          <XCircleIcon className="w-4 h-4" />
                        )}
                        {selectedReport.status.charAt(0).toUpperCase() +
                          selectedReport.status.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Detailed Parameters */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Water Quality Parameters
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Temperature
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedReport.details.temperature}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          TDS
                        </label>
                        <p
                          className={`text-sm font-medium p-2 rounded border ${
                            parseInt(selectedReport.details.tds) <= 500
                              ? "bg-green-100 text-green-800 border-green-200"
                              : parseInt(selectedReport.details.tds) <= 1000
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-red-100 text-red-800 border-red-200"
                          }`}
                        >
                          {selectedReport.details.tds}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Turbidity
                        </label>
                        <p
                          className={`text-sm font-medium p-2 rounded border ${
                            parseFloat(selectedReport.details.turbidity) <= 5.0
                              ? "bg-green-100 text-green-800 border-green-200"
                              : parseFloat(selectedReport.details.turbidity) <=
                                  10.0
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-red-100 text-red-800 border-red-200"
                          }`}
                        >
                          {selectedReport.details.turbidity}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Chlorine
                        </label>
                        <p
                          className={`text-sm font-medium p-2 rounded border ${
                            parseFloat(selectedReport.details.chlorine) >=
                              0.5 &&
                            parseFloat(selectedReport.details.chlorine) <= 2.0
                              ? "bg-green-100 text-green-800 border-green-200"
                              : parseFloat(selectedReport.details.chlorine) > 0
                                ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                : "bg-red-100 text-red-800 border-red-200"
                          }`}
                        >
                          {selectedReport.details.chlorine}
                        </p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Operator Notes
                      </label>
                      <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded border min-h-[80px]">
                        {selectedReport.details.notes}
                      </p>
                    </div>

                    {/* PERBAIKAN: Attached Image - bisa diklik untuk preview */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Attached Image
                      </label>
                      <div className="flex gap-2">
                        {selectedReport.details.images &&
                        selectedReport.details.images.length > 0 ? (
                          <div className="relative">
                            <button
                              onClick={() => {
                                // Simulasi membuka gambar dalam tab baru atau modal preview
                                const imageUrl = `/images/reports/${selectedReport.details.images[0]}`;
                                window.open(imageUrl, "_blank");
                              }}
                              className="w-32 h-32 bg-gray-100 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                              <div className="text-center">
                                <DocumentChartBarIcon className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                                <span className="text-xs text-gray-600 block truncate px-1">
                                  {selectedReport.details.images[0]}
                                </span>
                                <span className="text-xs text-blue-600 mt-1 block font-medium">
                                  Click to view
                                </span>
                              </div>
                            </button>
                          </div>
                        ) : (
                          <div className="w-32 h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <DocumentChartBarIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-xs text-gray-500">No image</p>
                              <p className="text-xs text-gray-400">attached</p>
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Operator can attach only one image per report. Click the
                        image to view in full size.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Last updated: {selectedReport.date} {selectedReport.time}
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  {selectedReport.status === "pending" && (
                    <>
                      <button
                        onClick={() => {
                          handleApprove(selectedReport.id);
                          setIsReviewModalOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                      >
                        <CheckIcon className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => {
                          handleReject(selectedReport.id);
                          setIsReviewModalOpen(false);
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
                      >
                        <XCircleIcon className="w-4 h-4" />
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Notifikasi Lengkap */}
        {isNotificationModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div
              ref={notificationModalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
            >
              {/* Header Modal */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    All Notifications
                  </h2>
                  <p className="text-sm text-gray-600">
                    Manage and review all system notifications
                  </p>
                </div>
                <button
                  onClick={() => setIsNotificationModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Filter Options */}
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: "all", label: "All" },
                    { key: "message", label: "Messages" },
                    { key: "request", label: "Requests" },
                    { key: "report", label: "Reports" },
                    { key: "system", label: "System" },
                    { key: "alert", label: "Alerts" },
                  ].map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setNotificationFilter(filter.key)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                        notificationFilter === filter.key
                          ? "bg-teal-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Notifications List */}
              <div className="overflow-y-auto max-h-[60vh]">
                {filteredNotifications.length === 0 ? (
                  <div className="px-6 py-8 text-center text-gray-500">
                    No notifications found for the selected filter.
                  </div>
                ) : (
                  filteredNotifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition ${
                          notification.unread ? "bg-blue-50" : ""
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`p-2 rounded-full ${notification.bgColor} flex-shrink-0`}
                          >
                            <Icon className={`w-5 h-5 ${notification.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-1">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <h4 className="font-semibold text-gray-900 text-sm truncate">
                                  {notification.title}
                                </h4>
                                {notification.priority === "high" && (
                                  <span className="bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full flex-shrink-0">
                                    High Priority
                                  </span>
                                )}
                                {notification.unread && (
                                  <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                                )}
                              </div>
                              <span className="text-xs text-gray-500 whitespace-nowrap ml-2 flex-shrink-0">
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 break-words">
                              {notification.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                              <button
                                className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                                onClick={() =>
                                  handleNotificationAction(
                                    notification.action,
                                    notification.id
                                  )
                                }
                              >
                                View Details
                              </button>
                              <button
                                className="text-xs text-gray-600 hover:text-gray-800 hover:underline"
                                onClick={() =>
                                  handleMarkAsRead(notification.id)
                                }
                              >
                                Mark as Read
                              </button>
                              {notification.type === "message" && (
                                <button
                                  className="text-xs text-green-600 hover:text-green-800 hover:underline"
                                  onClick={() => handleReply(notification.id)}
                                >
                                  Reply
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-1 border-t border-gray-200 bg-gray-50 flex justify-end">
                <button
                  className="text-sm text-teal-600 hover:text-teal-800 font-medium transition px-3 py-1 rounded hover:bg-teal-50"
                  onClick={handleMarkAllAsRead}
                >
                  Mark All as Read
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Export Reports */}
        {isExportModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div
              ref={exportModalRef}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden"
            >
              {/* Header Modal */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Export Laporan
                  </h2>
                  <p className="text-sm text-gray-600">
                    Pilih format dan filter export
                  </p>
                </div>
                <button
                  onClick={() => setIsExportModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Form Content */}
              <div className="p-6 overflow-y-auto flex-1">
                <div className="space-y-6">
                  {/* Format Export */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Format Export
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setExportFormat("pdf")}
                        className={`p-4 border-2 rounded-lg text-center transition ${
                          exportFormat === "pdf"
                            ? "border-teal-500 bg-teal-50 text-teal-700"
                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <DocumentChartBarIcon className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-medium">PDF</span>
                        <p className="text-xs text-gray-500 mt-1">
                          Format dokumen
                        </p>
                      </button>
                      <button
                        onClick={() => setExportFormat("csv")}
                        className={`p-4 border-2 rounded-lg text-center transition ${
                          exportFormat === "csv"
                            ? "border-teal-500 bg-teal-50 text-teal-700"
                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <ArrowDownTrayIcon className="w-8 h-8 mx-auto mb-2" />
                        <span className="font-medium">CSV</span>
                        <p className="text-xs text-gray-500 mt-1">
                          Format spreadsheet
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Rentang Waktu */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Rentang Waktu
                    </label>
                    <select
                      value={exportDateRange}
                      onChange={(e) => setExportDateRange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
                    >
                      <option value="today">Hari Ini</option>
                      <option value="week">Minggu Ini</option>
                      <option value="month">Bulan Ini</option>
                      <option value="all">Semua Data</option>
                    </select>
                  </div>

                  {/* Status Laporan */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Status Laporan
                    </label>
                    <select
                      value={exportStatus}
                      onChange={(e) => setExportStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900"
                    >
                      <option value="all">Semua Status</option>
                      <option value="approved">Disetujui</option>
                      <option value="pending">Pending</option>
                      <option value="rejected">Ditolak</option>
                    </select>
                  </div>

                  {/* Informasi Export */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">
                          Informasi Export
                        </p>
                        <p className="text-xs text-blue-700 mt-1">
                          Data akan diexport berdasarkan filter yang aktif:
                          {searchQuery && ` pencarian "${searchQuery}"`}
                          {selectedStatus !== "All Reports" &&
                            ` status "${selectedStatus}"`}
                          {selectedSite !== "all" && ` site "${selectedSite}"`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
                <button
                  onClick={() => setIsExportModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
                >
                  Batal
                </button>
                <button
                  onClick={handleConfirmExport}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium"
                >
                  <ArrowDownTrayIcon className="w-4 h-4" />
                  Export {exportFormat.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD CONTENT - PERBAIKAN RESPONSIVITAS UTAMA */}
        {activeMenu === "dashboard" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            {/* Headline + Time Range Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 lg:mb-8">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Monitor IPAL operations across all sites
                </p>
              </div>

              {/* tombol ini tidak perlu, dinonaktifkan saja */}
              {/* <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-full p-1 w-full lg:w-auto justify-center">
                {["Week", "Month", "Year"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedRange(range)}
                    className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition flex-1 lg:flex-none
              ${
                selectedRange === range
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-200"
              }
            `}
                  >
                    {range}
                  </button>
                ))}
              </div> */}
              {/* tombol ini tidak perlu, dinonaktifkan saja */}
            </div>

            {/* TOP KPIs - PERBAIKAN: Grid responsive untuk semua ukuran layar */}
            <div className="mb-6 lg:mb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  label: "Total Sites",
                  value: totalSites,
                  percent: "+4.2%",
                  icon: MapPinIcon,
                },
                {
                  label: "Active Operators",
                  value: totalOperators,
                  percent: "+2.1%",
                  icon: UsersIcon,
                },
                {
                  label: "Daily Reports",
                  value: totalReports,
                  percent: "+8.5%",
                  icon: DocumentChartBarIcon,
                },
                {
                  label: "Compliance Rate",
                  value: `${complianceRate}%`,
                  percent: "+1.2%",
                  icon: ChartBarIcon,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {item.label}
                      </p>
                      <div className="p-1 sm:p-2 rounded-lg bg-teal-50">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-green-600 font-medium">
                      {item.percent} vs last month
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SECOND ROW - Charts - PERBAIKAN: Layout responsive */}
            <div className="mb-6 lg:mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {/* Water Quality Trends */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
                  Water Quality Trends
                </h3>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-2 sm:py-4">
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>0</span>
                  </div>

                  <div className="ml-6 sm:ml-8">
                    <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 px-1 sm:px-2 border-b border-l border-gray-200">
                      {waterQualityData.map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className="w-3 sm:w-4 lg:w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
                            style={{ height: `${(data.ec / 800) * 80}px` }}
                            onMouseEnter={() => setHoveredBar(index)}
                            onMouseLeave={() => setHoveredBar(null)}
                          />

                          <span className="text-xs text-gray-600 mt-1 sm:mt-2">
                            {data.day}
                          </span>

                          {hoveredBar === index && (
                            <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 min-w-28 sm:min-w-32 shadow-lg">
                              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
                                <p>EC: {data.ec}</p>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
                                <p>TDS: {data.tds}</p>
                              </div>
                              <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded"></div>
                                <p>pH: {data.pH}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center gap-3 sm:gap-4 mt-3 sm:mt-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
                        <span className="text-gray-600">EC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
                        <span className="text-gray-600">TDS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded"></div>
                        <span className="text-gray-600">pH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Status - PERBAIKAN: Layout responsive untuk pie chart */}

              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                {/* PERBAIKAN: Tambahkan tanggal seperti di HRD */}
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Report Status
                  </h3>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded hidden sm:block">
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded sm:hidden">
                    {new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                  <div className="relative flex flex-col items-center">
                    <svg
                      width="120"
                      height="120"
                      className="sm:w-140 sm:h-140 lg:w-160 lg:h-160 cursor-pointer"
                      viewBox="0 0 100 100"
                    >
                      {pieChartData.map((item, index) => (
                        <path
                          key={item.status}
                          d={item.path}
                          fill={item.color}
                          className={`transition-all duration-300 ${
                            hoveredPie === index
                              ? "opacity-80 scale-105"
                              : "opacity-100"
                          }`}
                          stroke="white"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredPie(index)}
                          onMouseLeave={() => setHoveredPie(null)}
                        />
                      ))}
                    </svg>

                    <div className="text-center mt-2 sm:mt-4">
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">
                        {complianceRate}%
                      </div>
                      <div className="text-sm text-gray-600">Approved</div>
                    </div>

                    {hoveredPie !== null && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 shadow-lg">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded"
                            style={{
                              backgroundColor: pieChartData[hoveredPie].color,
                            }}
                          ></div>
                          <span>
                            {pieChartData[hoveredPie].status}:{" "}
                            {pieChartData[hoveredPie].value}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 w-full">
                    {reportStatusData.map((item, index) => (
                      <div
                        key={item.status}
                        className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                          hoveredPie === index
                            ? "bg-gray-50 transform scale-105"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredPie(index)}
                        onMouseLeave={() => setHoveredPie(null)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded transition-transform duration-200"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-sm text-gray-700 font-medium">
                            {item.status}
                          </span>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-gray-900">
                          {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THIRD ROW - Site Performance - PERBAIKAN: Responsive chart */}
            <div className="mb-6 lg:mb-8 bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
                Site Performance
              </h3>

              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-500 rounded"></div>
                  <span className="text-gray-600">Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-600">Reports</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-2 sm:py-4">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                <div className="ml-6 sm:ml-8">
                  <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-2 sm:gap-3 lg:gap-4 px-1 sm:px-2 border-b border-l border-gray-200 overflow-x-auto">
                    {sitePerformanceData.map((site, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center flex-1 min-w-[50px] sm:min-w-[60px] relative"
                      >
                        <div className="flex gap-1 sm:gap-2 items-end w-full justify-center">
                          <div
                            className="w-2 sm:w-3 lg:w-4 bg-teal-500 rounded-t transition-all duration-300 hover:bg-teal-600 cursor-pointer relative group"
                            style={{
                              height: `${(site.compliance / 100) * 80}px`,
                            }}
                          >
                            <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
                              Compliance: {site.compliance}%
                            </div>
                          </div>

                          <div
                            className="w-2 sm:w-3 lg:w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 cursor-pointer relative group"
                            style={{ height: `${(site.reports / 15) * 80}px` }}
                          >
                            <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap">
                              Reports: {site.reports}
                            </div>
                          </div>
                        </div>

                        <span className="text-xs text-gray-600 mt-1 sm:mt-2 text-center w-full truncate px-1">
                          {site.city}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LAST ROW - PERBAIKAN: Layout responsive untuk tables dan alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md lg:col-span-2">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Recent Reports
                  </h3>
                  <button
                    className="text-teal-600 text-sm font-medium hover:underline"
                    onClick={() => setActiveMenu("reports")}
                  >
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-800">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
                          Site
                        </th>
                        <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
                          Operator
                        </th>
                        <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
                          pH
                        </th>
                        <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
                          Status
                        </th>
                        <th className="pb-2 sm:pb-3 text-left font-semibold text-xs sm:text-sm">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportsData.slice(0, 5).map((report) => (
                        <tr
                          key={report.id}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 sm:py-4 font-medium text-gray-900 text-xs sm:text-sm">
                            <span className="truncate max-w-[80px] sm:max-w-none block">
                              {report.site}
                            </span>
                          </td>
                          <td className="py-3 sm:py-4 text-gray-600 text-xs sm:text-sm">
                            <span className="truncate max-w-[70px] sm:max-w-none block">
                              {report.operator}
                            </span>
                          </td>
                          <td className="py-3 sm:py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                parseFloat(report.pH) >= 7.0
                                  ? "bg-green-100 text-green-800"
                                  : parseFloat(report.pH) >= 6.5
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              pH {report.pH}
                            </span>
                          </td>
                          <td className="py-3 sm:py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                report.status === "approved"
                                  ? "bg-green-100 text-green-800"
                                  : report.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                              }`}
                            >
                              {report.status}
                            </span>
                          </td>
                          <td className="py-3 sm:py-4 text-gray-500 text-xs sm:text-sm">
                            <span className="whitespace-nowrap">
                              {report.time}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
                  System Alerts
                </h3>
                <div className="space-y-3 sm:space-y-4 text-sm text-gray-800">
                  {[
                    [
                      "pH level above threshold at Site Jakarta B",
                      "1 hour ago",
                      "warning",
                    ],
                    [
                      `${pendingReports} reports pending validation`,
                      "2 hours ago",
                      "pending",
                    ],
                    [
                      "All sites reported successfully today",
                      "5 hours ago",
                      "success",
                    ],
                  ].map(([message, time, type], i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                    >
                      <div
                        className={`p-1 sm:p-2 rounded-lg border flex items-center justify-center flex-shrink-0 ${
                          type === "warning"
                            ? "bg-red-50 text-red-600 border-red-200"
                            : type === "pending"
                              ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                              : "bg-green-50 text-green-700 border-green-200"
                        }`}
                      >
                        {type === "warning" && (
                          <ExclamationTriangleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        {type === "pending" && (
                          <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                        {type === "success" && (
                          <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm sm:text-base truncate">
                          {message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SITES CONTENT - PERBAIKAN RESPONSIVITAS */}
        {activeMenu === "sites" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Site Management
                </h1>
                <p className="text-gray-600 text-sm">
                  Manage IPAL sites and locations
                </p>
              </div>
              <button
                onClick={() => setIsAddSiteModalOpen(true)}
                className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center"
              >
                <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Add New Site</span>
              </button>
            </div>

            {/* Modal Tambah Site Baru */}
            {isAddSiteModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
                <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                  {/* Header Modal */}
                  <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        Tambah Site Baru
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Masukkan informasi site IPAL baru
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsAddSiteModalOpen(false);
                        setFormErrors({});
                      }}
                      className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
                    >
                      <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                  </div>

                  {/* Form Content */}
                  <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Nama Site */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Nama Site <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={newSiteData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="IPAL Jakarta Pusat"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Kota */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Kota <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={newSiteData.city}
                          onChange={(e) =>
                            handleInputChange("city", e.target.value)
                          }
                          placeholder="Jakarta Pusat"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.city
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.city && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.city}
                          </p>
                        )}
                      </div>

                      {/* Alamat Lengkap */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Alamat Lengkap <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={newSiteData.address}
                          onChange={(e) =>
                            handleInputChange("address", e.target.value)
                          }
                          placeholder="Jl. Sudirman No. 123, Jakarta Pusat"
                          rows={3}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white text-gray-900 text-sm ${
                            formErrors.address
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.address && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.address}
                          </p>
                        )}
                      </div>

                      {/* Provinsi */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Provinsi <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={newSiteData.province}
                          onChange={(e) =>
                            handleInputChange("province", e.target.value)
                          }
                          placeholder="DKI Jakarta"
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.province
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.province && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.province}
                          </p>
                        )}
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Status
                        </label>
                        <select
                          value={newSiteData.status}
                          onChange={(e) =>
                            handleInputChange("status", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                        >
                          <option value="active">Aktif</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="inactive">Tidak Aktif</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
                    <button
                      onClick={() => {
                        setIsAddSiteModalOpen(false);
                        setFormErrors({});
                      }}
                      className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleAddSite}
                      disabled={Object.keys(formErrors).length > 0}
                      className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                        Object.keys(formErrors).length > 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-teal-600 hover:bg-teal-700"
                      }`}
                    >
                      <PlusIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Tambah Site
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Edit Site */}
            {isEditSiteModalOpen && editingSite && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-3 sm:p-4">
                <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
                  {/* Header Modal */}
                  <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-300 bg-gray-200">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        Edit Site
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Edit informasi site IPAL
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsEditSiteModalOpen(false);
                        setFormErrors({});
                      }}
                      className="p-1 sm:p-2 hover:bg-gray-300 rounded-lg transition"
                    >
                      <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                    </button>
                  </div>

                  {/* Form Content */}
                  <div className="p-4 sm:p-6 overflow-y-auto max-h-[60vh] bg-gray-100">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Nama Site */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Nama Site <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editingSite.name}
                          onChange={(e) =>
                            handleEditInputChange("name", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.name
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Kota */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Kota <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editingSite.city}
                          onChange={(e) =>
                            handleEditInputChange("city", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.city
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.city && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.city}
                          </p>
                        )}
                      </div>

                      {/* Alamat Lengkap */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Alamat Lengkap <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={editingSite.address}
                          onChange={(e) =>
                            handleEditInputChange("address", e.target.value)
                          }
                          rows={3}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white text-gray-900 text-sm ${
                            formErrors.address
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.address && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.address}
                          </p>
                        )}
                      </div>

                      {/* Provinsi */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Provinsi <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={editingSite.province}
                          onChange={(e) =>
                            handleEditInputChange("province", e.target.value)
                          }
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                            formErrors.province
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                        {formErrors.province && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.province}
                          </p>
                        )}
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                          Status
                        </label>
                        <select
                          value={editingSite.status}
                          onChange={(e) =>
                            handleEditInputChange("status", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm"
                        >
                          <option value="active">Aktif</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="inactive">Tidak Aktif</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-300 bg-gray-200 flex justify-end gap-2 sm:gap-3">
                    <button
                      onClick={() => {
                        setIsEditSiteModalOpen(false);
                        setFormErrors({});
                      }}
                      className="px-3 sm:px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                    >
                      Batal
                    </button>
                    <button
                      onClick={handleUpdateSite}
                      disabled={Object.keys(formErrors).length > 0}
                      className={`px-3 sm:px-4 py-2 text-white rounded-lg transition flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${
                        Object.keys(formErrors).length > 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-teal-600 hover:bg-teal-700"
                      }`}
                    >
                      <PencilIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Update Site
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Stats Cards - PERBAIKAN: Grid responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Total Sites
                  </h3>
                  <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {totalSites}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Active Sites
                  </h3>
                  <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                    <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {activeSites}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Maintenance
                  </h3>
                  <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
                    <CogIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {maintenanceSites}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Total Operators
                  </h3>
                  <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {totalOperators}
                </p>
              </div>
            </div>

            {/* Search and Filter - PERBAIKAN: Layout responsive */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-lg w-full">
                  <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search sites by name, address, or city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                  />
                </div>

                <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto justify-center">
                  {["All Status", "Active", "Inactive", "Maintenance"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
                          selectedStatus === status
                            ? "bg-teal-600 text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* PERBAIKAN: Tabel Sites dengan spacing yang lebih baik dan responsive */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* HEADER TABEL - PERBAIKAN: Menyesuaikan grid columns untuk semua ukuran layar */}
              <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
                <div className="col-span-3">Site Name</div>
                <div className="col-span-2">Kota</div>
                <div className="col-span-2">Alamat</div>
                <div className="col-span-1">Provinsi</div>
                <div className="col-span-1 text-center">Operators</div>
                <div className="col-span-1 text-center">Status</div>
                <div className="col-span-1 text-center">Last Report</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* BODY TABEL - PERBAIKAN: Layout responsive untuk mobile dan desktop */}
              <div className="divide-y divide-gray-200">
                {filteredSites.map((site) => {
                  const statusConfig = getSiteStatusConfig(site.status);
                  return (
                    <div
                      key={site.id}
                      className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
                    >
                      <div className="lg:hidden space-y-3">
                        {/* Tampilan mobile - diperbaiki layoutnya */}
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                              {site.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              {site.city}, {site.province}
                            </p>
                          </div>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} ml-2 flex-shrink-0`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full mr-1 ${statusConfig.dotColor}`}
                            ></span>
                            {site.status}
                          </span>
                        </div>

                        <div className="text-sm space-y-2">
                          <div>
                            <p className="text-gray-600 text-xs">Alamat</p>
                            <p className="text-gray-900 font-medium text-sm truncate">
                              {site.address}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="text-gray-600 text-xs">Operators</p>
                            <div className="flex items-center gap-1">
                              <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                <UsersIcon className="h-3 w-3" />
                                <span className="text-xs font-medium">
                                  {site.operators}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-600 text-xs">Last Report</p>
                            <p className="text-gray-900 font-medium text-sm">
                              {site.lastReport}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditSite(site)}
                              className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
                              title="Edit Site"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteSite(site.id)}
                              className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
                              title="Delete Site"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Tampilan Desktop - PERBAIKAN: Kolom Status dan Last Report diperbaiki */}
                      <div className="hidden lg:block col-span-3">
                        <p
                          className="font-medium text-gray-900 truncate text-sm"
                          title={site.name}
                        >
                          {site.name}
                        </p>
                      </div>

                      <div className="hidden lg:block col-span-2">
                        <p
                          className="text-gray-700 truncate text-sm"
                          title={site.city}
                        >
                          {site.city}
                        </p>
                      </div>

                      <div className="hidden lg:block col-span-2">
                        <p
                          className="text-gray-700 text-sm truncate"
                          title={site.address}
                        >
                          {site.address}
                        </p>
                      </div>

                      <div className="hidden lg:block col-span-1">
                        <p
                          className="text-gray-700 truncate text-sm"
                          title={site.province}
                        >
                          {site.province}
                        </p>
                      </div>

                      <div className="hidden lg:block col-span-1 text-center">
                        <div className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-full mx-auto w-fit">
                          <UsersIcon className="h-3 w-3" />
                          <span className="text-xs font-medium">
                            {site.operators}
                          </span>
                        </div>
                      </div>

                      {/* PERBAIKAN: Kolom Status - menggunakan text yang lebih pendek */}
                      <div className="hidden lg:block col-span-1 text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
                          title={site.status}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-1 ${statusConfig.dotColor}`}
                          ></span>
                          {site.status === "maintenance"
                            ? "Maint"
                            : site.status === "active"
                              ? "Active"
                              : "Inactive"}
                        </span>
                      </div>

                      {/* PERBAIKAN: Kolom Last Report - text lebih kecil */}
                      <div className="hidden lg:block col-span-1 text-center">
                        <p
                          className="text-gray-700 text-xs font-medium"
                          title={site.lastReport}
                        >
                          {site.lastReport}
                        </p>
                      </div>

                      <div className="hidden lg:block col-span-1 text-center">
                        <div className="flex gap-1 justify-center">
                          <button
                            onClick={() => handleEditSite(site)}
                            className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
                            title="Edit Site"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteSite(site.id)}
                            className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
                            title="Delete Site"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* USERS CONTENT - PERBAIKAN PADDING DAN TOMBOL ACTION */}
        {activeMenu === "users" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            {/* Kode users content tetap sama, hanya padding yang diubah */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  User Management
                </h1>
                <p className="text-gray-600 text-sm">
                  Manage system users and permissions
                </p>
              </div>
              <button
                onClick={() => setIsAddUserModalOpen(true)}
                className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center mt-4 sm:mt-0"
              >
                <PlusIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Add New User</span>
              </button>
            </div>

            {/* Stats Cards - PERBAIKAN: Grid responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Total Users
                  </h3>
                  <div className="p-1 sm:p-2 bg-teal-100 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {usersData.length}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Operators
                  </h3>
                  <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {usersData.filter((user) => user.role === "operator").length}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    HRD
                  </h3>
                  <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {usersData.filter((user) => user.role === "hrd").length}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Admins
                  </h3>
                  <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
                    <UsersIcon className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {usersData.filter((user) => user.role === "admin").length}
                </p>
              </div>
            </div>

            {/* Search and Filter - PERBAIKAN: Layout responsive */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-lg w-full">
                  <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search users by name, email, or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                  />
                </div>

                <div className="flex gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1 w-full sm:w-auto justify-center">
                  {["All Users", "Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 sm:flex-none ${
                        selectedStatus === status
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-auto">
                  <select
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="all">All Roles</option>
                    <option value="operator">Operator</option>
                    <option value="hrd">HRD</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tabel Users dengan tombol action yang diperbaiki */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* HEADER TABEL */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
                <div className="col-span-4">User</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1">Last Active</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* BODY TABEL dengan tombol action yang aktif */}
              <div className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="md:grid md:grid-cols-12 md:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 hover:bg-gray-50 transition"
                  >
                    {/* Mobile View */}
                    <div className="md:hidden space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${
                              user.role === "operator"
                                ? "from-teal-500 to-cyan-600"
                                : user.role === "hrd"
                                  ? "from-orange-500 to-red-600"
                                  : "from-purple-500 to-indigo-600"
                            } rounded-full flex items-center justify-center text-white font-bold`}
                          >
                            {user.initial}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-sm sm:text-base truncate">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {user.email}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-600 text-xs">Role</p>
                          <p className="text-gray-900 font-medium text-sm capitalize">
                            {user.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-xs">Site</p>
                          <p className="text-gray-900 font-medium text-sm truncate">
                            {user.site}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div>
                          <p className="text-gray-600 text-xs">Last Active</p>
                          <p className="text-gray-900 font-medium text-sm">
                            {user.lastActive}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditUser(user)}
                            className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setUserToDelete(user);
                              setIsDeleteUserModalOpen(true);
                            }}
                            className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop View dengan tombol action yang aktif */}
                    <div className="hidden md:flex col-span-4 items-center gap-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${
                          user.role === "operator"
                            ? "from-teal-500 to-cyan-600"
                            : user.role === "hrd"
                              ? "from-orange-500 to-red-600"
                              : "from-purple-500 to-indigo-600"
                        } rounded-full flex items-center justify-center text-white font-bold overflow-hidden`}
                      >
                        {user.initial}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex col-span-2 items-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === "operator"
                            ? "bg-blue-100 text-blue-800"
                            : user.role === "hrd"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-purple-100 text-purple-800"
                        } capitalize`}
                      >
                        {user.role}
                      </span>
                    </div>

                    <div className="hidden md:flex col-span-2 items-center">
                      <p
                        className="text-gray-700 text-sm truncate"
                        title={user.site}
                      >
                        {user.site}
                      </p>
                    </div>

                    <div className="hidden md:flex col-span-2 items-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>

                    <div className="hidden md:flex col-span-1 items-center">
                      <p className="text-gray-700 text-sm">{user.lastActive}</p>
                    </div>

                    <div className="hidden md:flex col-span-1 items-center justify-center">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setUserToDelete(user);
                            setIsDeleteUserModalOpen(true);
                          }}
                          className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* REPORTS CONTENT - TETAP SAMA */}
        {/* REPORTS CONTENT - PERBAIKAN PADDING */}
        {activeMenu === "reports" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Report Monitoring
                </h1>
                <p className="text-gray-600 text-sm">
                  Review and validate daily IPAL reports
                </p>
              </div>
              <button
                onClick={handleExportReport}
                className="bg-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium w-full sm:w-auto justify-center mt-4 sm:mt-0"
              >
                <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Export Report</span>
              </button>
            </div>

            {/* Stats Cards - PERBAIKAN: Grid responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Total Reports
                  </h3>
                  <DocumentChartBarIcon className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600" />
                  </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {totalReports}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Approved
                  </h3>
                  <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {approvedReports}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Pending
                  </h3>
                  <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {pendingReports}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Rejected
                  </h3>
                  <XCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {rejectedReports}
                </p>
              </div>
            </div>

            {/* Search and Filter - PERBAIKAN: Layout responsive */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start lg:items-center">
                <div className="relative flex-1 w-full">
                  <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["All Reports", "Approved", "Pending", "Rejected"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                          selectedStatus === status
                            ? "bg-teal-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>

                <select
                  value={selectedSite}
                  onChange={(e) => setSelectedSite(e.target.value)}
                  className="w-full lg:w-auto px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700 text-sm"
                >
                  <option value="all">All Sites</option>
                  {uniqueSites.map((site) => (
                    <option key={site} value={site}>
                      {site}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reports Table */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table Header */}
              <div className="hidden lg:grid grid-cols-12 gap-2 px-4 sm:px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-700">
                <div className="col-span-2">Date & Time</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-2">Operator</div>
                <div className="col-span-1 text-center">pH</div>
                <div className="col-span-2">Flow Rate</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredReports.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center text-gray-500 text-sm">
                    No reports found matching your criteria.
                  </div>
                ) : (
                  filteredReports.map((report) => {
                    const statusConfig = getStatusConfig(report.status);
                    const StatusIcon = statusConfig.icon;

                    return (
                      <div
                        key={report.id}
                        className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
                      >
                        {/* Mobile View */}
                        <div className="lg:hidden space-y-3">
                          <div className="flex justify-between items-start">
                            <div className="space-y-1">
                              <p className="font-semibold text-gray-900 text-sm">
                                {report.date}
                              </p>
                              <p className="text-xs text-gray-500">
                                {report.time}
                              </p>
                            </div>
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
                            >
                              <StatusIcon
                                className={`w-3 h-3 ${statusConfig.color}`}
                              />
                              {statusConfig.text}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Site</p>
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {report.site}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">
                                Operator
                              </p>
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {report.operator}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">pH</p>
                              <p className="text-sm font-medium text-gray-900">
                                {report.pH}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">
                                Flow Rate
                              </p>
                              <p className="text-sm font-medium text-gray-900">
                                {report.flowRate}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
                            <button
                              onClick={() => handleReview(report.id)}
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-2 py-1.5 rounded-lg hover:bg-blue-50 border border-blue-200 text-xs font-medium"
                            >
                              <EyeIcon className="w-3 h-3" />
                              Review
                            </button>
                            {report.status === "pending" && (
                              <>
                                <button
                                  onClick={() => handleApprove(report.id)}
                                  className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-2 py-1.5 rounded-lg hover:bg-green-50 border border-green-200 text-xs font-medium"
                                >
                                  <CheckIcon className="w-3 h-3" />
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleReject(report.id)}
                                  className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-2 py-1.5 rounded-lg hover:bg-red-50 border border-red-200 text-xs font-medium"
                                >
                                  <XCircleIcon className="w-3 h-3" />
                                  Reject
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:flex col-span-2 items-center">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">
                              {report.date}
                            </p>
                            <p className="text-xs text-gray-500">
                              {report.time}
                            </p>
                          </div>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={report.site}
                          >
                            {report.site}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={report.operator}
                          >
                            {report.operator}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <p className="text-gray-900 font-medium text-sm">
                            {report.pH}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p className="text-gray-700 text-sm">
                            {report.flowRate}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <span
                            className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
                          >
                            <StatusIcon
                              className={`w-3 h-3 ${statusConfig.color}`}
                            />
                            {statusConfig.text}
                          </span>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleReview(report.id)}
                              className="p-1.5 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
                              title="Review Report"
                            >
                              <EyeIcon className="w-3 h-3" />
                            </button>
                            {report.status === "pending" && (
                              <>
                                <button
                                  onClick={() => handleApprove(report.id)}
                                  className="p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition border border-transparent hover:border-green-200"
                                  title="Approve Report"
                                >
                                  <CheckIcon className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleReject(report.id)}
                                  className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-200"
                                  title="Reject Report"
                                >
                                  <XCircleIcon className="w-3 h-3" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
