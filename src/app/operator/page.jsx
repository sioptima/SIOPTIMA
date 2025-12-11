//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS
// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   ChartBarIcon,
//   MapPinIcon,
//   UsersIcon,
//   DocumentChartBarIcon,
//   CogIcon,
//   BellIcon,
//   ArrowRightOnRectangleIcon,
//   Bars3Icon,
//   XMarkIcon,
//   ExclamationTriangleIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   CalendarIcon,
//   DocumentTextIcon,
//   CameraIcon,
//   CalendarDaysIcon,
//   MagnifyingGlassIcon,
//   ExclamationCircleIcon,
//   MapIcon,
//   EyeIcon,
//   PhotoIcon,
//   PlusIcon,
//   UserIcon,
//   ChatBubbleLeftRightIcon,
//   ArrowDownTrayIcon,
//   PaperClipIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";


// // BAGIAN GEOLOKASI OR GEOLOCATION
// //rumus geolokasi
// // Tambahkan kode ini setelah baris import dan sebelum "export default function Operator()"

// // ==================== KONSTANTA GEO-LOCATION ====================
// const COMPANY_COORDINATES = {
//   latitude: -7.2375495, // GANTI DENGAN KOORDINAT PERUSAHAAN ANDA
//   longitude: 112.7271187, // GANTI DENGAN KOORDINAT PERUSAHAAN ANDA
// };
// const ALLOWED_RADIUS_METERS = 100; // Radius 100 meter
// // ==================== KONSTANTA GEO-LOCATION ====================

// // Fungsi untuk menghitung jarak antara dua koordinat (rumus Haversine)
// const calculateDistance = (lat1, lon1, lat2, lon2) => {
//   const R = 6371e3; // Radius bumi dalam meter
//   const φ1 = (lat1 * Math.PI) / 180;
//   const φ2 = (lat2 * Math.PI) / 180;
//   const Δφ = ((lat2 - lat1) * Math.PI) / 180;
//   const Δλ = ((lon2 - lon1) * Math.PI) / 180;

//   const a =
//     Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//     Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c; // Jarak dalam meter
// };
// // Fungsi untuk menghitung jarak antara dua koordinat (rumus Haversine)
// // BAGIAN GEOLOKASI OR GEOLOCATION


// // Fungsi untuk mengecek permission kamera
// const checkCameraPermission = async () => {
//   try {
//     if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//       throw new Error("Browser tidak mendukung akses kamera");
//     }

//     // Cek permission tanpa langsung membuka kamera
//     const permissionStatus = await navigator.permissions.query({
//       name: "camera",
//     });

//     if (permissionStatus.state === "denied") {
//       throw new Error(
//         "Akses kamera ditolak. Harap izinkan akses kamera di pengaturan browser."
//       );
//     }

//     return true;
//   } catch (error) {
//     console.error("Camera permission check failed:", error);
//     return false;
//   }
// };
// //rumus geolokasi

// export default function Operator() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const router = useRouter();
//   const dropdownRef = useRef(null);
//   const notificationRef = useRef(null);

//   // ==================== DATA USER ====================
//   const [user, setUser] = useState({
//     name: "Budi Santoso",
//     email: "budi.santoso@email.com",
//     role: "Operator",
//     site: "Jakarta Utara - Site A",
//     initial: "B",
//   });

//   // Refs untuk berbagai keperluan
//   const dateInputRef = useRef(null);
//   const timeInputRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const cameraRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const statusDropdownRef = useRef(null);
//   const priorityDropdownRef = useRef(null);
//   const videoRefCheckIn = useRef(null);
//   const videoRefCheckOut = useRef(null);
//   const canvasRefCheckIn = useRef(null);
//   const canvasRefCheckOut = useRef(null);

//   // State untuk Notifikasi
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       title: "Laporan Disetujui",
//       message: "Laporan harian 10 Nov 2024 telah disetujui oleh Admin",
//       time: "2 jam yang lalu",
//       type: "success",
//       read: false,
//     },
//     {
//       id: 2,
//       title: "Absensi Perlu Konfirmasi",
//       message: "Absensi tanggal 9 Nov 2024 menunggu approval",
//       time: "1 hari yang lalu",
//       type: "warning",
//       read: false,
//     },
//     {
//       id: 3,
//       title: "Tiket Baru Direspons",
//       message: "Tiket #001 telah direspons oleh technical support",
//       time: "3 hari yang lalu",
//       type: "info",
//       read: true,
//     },
//     {
//       id: 4,
//       title: "Pemeliharaan Rutin",
//       message: "Jadwal pemeliharaan minggu depan telah ditetapkan",
//       time: "5 hari yang lalu",
//       type: "info",
//       read: false,
//     },
//   ]);

//   // State untuk Dashboard
//   const [dashboardData, setDashboardData] = useState({
//     reportsSubmitted: 0,
//     attendanceRate: "0%",
//     pHLevel: "0.0",
//     flowRate: "0 L/h",
//     tds: "0 ppm",
//     ec: "0 μS/cm",
//   });

//   const [pHData, setPHData] = useState([]);
//   const [flowRateData, setFlowRateData] = useState([]);

//   // State untuk Daily Report
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     pHLevel: "",
//     flowRate: "",
//     volt: "",
//     ampere: "",
//     tds: "",
//     ec: "",
//     agitatorStatus: "Normal",
//     settleStatus: "Normal",
//     outFilterStatus: "Normal",
//     additionalNotes: "",
//   });

//   const [uploadedFiles, setUploadedFiles] = useState([]);
//   const [reports, setReports] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [selectedReport, setSelectedReport] = useState(null);
//   const [isReportDetailModalOpen, setIsReportDetailModalOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isImageModalOpen, setIsImageModalOpen] = useState(false);

//   // State untuk Presence
//   const [attendanceData, setAttendanceData] = useState({
//     checkInTime: "--:--",
//     checkOutTime: "--:--",
//     location: "Not located yet",
//     status: "Not Checked In",
//     isCheckedIn: false,
//     isCheckedOut: false,
//   });

//   const [attendanceHistory, setAttendanceHistory] = useState([
//     {
//       id: 1,
//       date: "2025-01-27",
//       checkIn: "08:00 AM",
//       checkOut: "16:00 PM",
//       location: "Jakarta Utara - Site A",
//       status: "approved",
//       approvalStatus: "approved",
//       checkInStatus: "On Time",
//       checkInLocation: "Lat: -6.123456, Long: 106.123456",
//       checkOutLocation: "Lat: -6.123456, Long: 106.123456",
//       selfieCheckIn: null,
//       selfieCheckOut: null,
//       approvedBy: "Admin",
//       approvedAt: "2025-01-27 08:30 AM",
//     },
//   ]);

//   // State untuk modal check-in/check-out
//   const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
//   const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [selectedAttendance, setSelectedAttendance] = useState(null);

//   const [locationCaptured, setLocationCaptured] = useState(false);
//   const [selfieUploaded, setSelfieUploaded] = useState(false);
//   const [selfiePreview, setSelfiePreview] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(
//     "Click to get location"
//   );
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [stream, setStream] = useState(null);

//   const [locationCapturedCheckOut, setLocationCapturedCheckOut] =
//     useState(false);
//   const [selfieUploadedCheckOut, setSelfieUploadedCheckOut] = useState(false);
//   const [selfiePreviewCheckOut, setSelfiePreviewCheckOut] = useState(null);
//   const [currentLocationCheckOut, setCurrentLocationCheckOut] = useState(
//     "Click to get location"
//   );
//   const [isCameraActiveCheckOut, setIsCameraActiveCheckOut] = useState(false);
//   const [streamCheckOut, setStreamCheckOut] = useState(null);

//   // State untuk Help Desk
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       ticketId: "#T001",
//       title: "Masalah Pompa Filter",
//       priority: "High",
//       status: "Open",
//       assignee: "Budi Santoso",
//       site: "IPAL Jakarta Pusat",
//       description: "Pompa filter site Jakarta mengalami penurunan tekanan",
//       createdAt: "2024-01-15",
//       category: "Technical",
//       resolvedAt: null,
//       attachments: [],
//       solution: "",
//     },
//     {
//       id: 4,
//       ticketId: "#T004",
//       title: "Software monitoring tidak bisa connect ke server",
//       priority: "High",
//       status: "Open",
//       assignee: "Budi Santoso",
//       site: "Jakarta Utara - Site A",
//       description:
//         "Software monitoring tidak bisa connect ke server. Error terjadi sejak pagi hari. Sudah dicoba restart tapi belum berhasil.",
//       createdAt: "2025-01-27",
//       category: "Software",
//       resolvedAt: null,
//       attachments: [
//         { name: "error_screenshot.png", type: "image/png", url: "#" },
//       ],
//       solution: "",
//     },
//   ]);

//   // State untuk Help Desk
//   const [newTicket, setNewTicket] = useState({
//     site: user.site,
//     category: "Technical",
//     title: "",
//     description: "",
//     priority: "Medium",
//     attachments: [],
//   });

//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("Semua Status");
//   const [priorityFilter, setPriorityFilter] = useState("Semua Prioritas");
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
//   const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [attachmentFiles, setAttachmentFiles] = useState([]);

//   // State untuk Solution Modal
//   const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
//   const [selectedTicketForSolution, setSelectedTicketForSolution] =
//     useState(null);
//   const [solutionText, setSolutionText] = useState("");
//   const [solutionStatus, setSolutionStatus] = useState("Open");

//   // Menu Items
//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
//     { id: "presensi", name: "Presence", icon: MapPinIcon },
//     { id: "help", name: "Help Desk", icon: CogIcon },
//   ];

//   // ==================== FUNGSI NOTIFIKASI ====================
//   const markNotificationAsRead = (id) => {
//     setNotifications(
//       notifications.map((notif) =>
//         notif.id === id ? { ...notif, read: true } : notif
//       )
//     );
//   };

//   const markAllNotificationsAsRead = () => {
//     setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
//     setIsNotificationOpen(false);
//   };

//   const getUnreadNotificationsCount = () => {
//     return notifications.filter((notif) => !notif.read).length;
//   };

//   const handleViewAllNotifications = () => {
//     setIsNotificationOpen(false);
//     alert("Fitur Lihat Semua Notifikasi akan ditampilkan di sini");
//   };

//   const handleNotificationClick = (notification) => {
//     markNotificationAsRead(notification.id);

//     switch (notification.type) {
//       case "success":
//         setActiveMenu("reports");
//         break;
//       case "warning":
//         setActiveMenu("presensi");
//         break;
//       case "info":
//         setActiveMenu("help");
//         break;
//       default:
//         setActiveMenu("dashboard");
//     }

//     setIsNotificationOpen(false);
//   };

//   // ==================== FUNGSI SINKRONISASI DATA ====================
//   const updateDashboardData = () => {
//     const submittedReports = reports.filter(
//       (report) => report.status === "Submitted"
//     );
//     const latestReport = submittedReports[0];

//     setDashboardData((prev) => ({
//       ...prev,
//       reportsSubmitted: submittedReports.length,
//       pHLevel: latestReport ? latestReport.pHLevel || "0.0" : "0.0",
//       flowRate: latestReport ? `${latestReport.flowRate || "0"} L/h` : "0 L/h",
//       tds: latestReport ? `${latestReport.tds || "0"} ppm` : "0 ppm",
//       ec: latestReport ? `${latestReport.ec || "0"} μS/cm` : "0 μS/cm",
//       attendanceRate:
//         attendanceHistory.filter((att) => att.approvalStatus === "approved")
//           .length > 0
//           ? "98%"
//           : "0%",
//     }));

//     if (submittedReports.length > 0) {
//       const latestReports = submittedReports.slice(0, 7);

//       const newPHData = latestReports.map((report) => {
//         const reportDate = new Date(report.date);
//         const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//         const dayName = days[reportDate.getDay()];

//         return {
//           day: dayName,
//           value: parseFloat(report.pHLevel) || 0,
//         };
//       });

//       const newFlowRateData = latestReports.map((report) => {
//         const reportDate = new Date(report.date);
//         const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//         const dayName = days[reportDate.getDay()];

//         return {
//           day: dayName,
//           value: parseInt(report.flowRate) || 0,
//         };
//       });

//       setPHData(newPHData);
//       setFlowRateData(newFlowRateData);
//     } else {
//       setPHData([]);
//       setFlowRateData([]);
//     }
//   };

//   // Effects
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setIsNotificationOpen(false);
//       }
//       if (
//         statusDropdownRef.current &&
//         !statusDropdownRef.current.contains(event.target)
//       ) {
//         setIsStatusDropdownOpen(false);
//       }
//       if (
//         priorityDropdownRef.current &&
//         !priorityDropdownRef.current.contains(event.target)
//       ) {
//         setIsPriorityDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     return () => {
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//       }
//       if (streamCheckOut) {
//         streamCheckOut.getTracks().forEach((track) => track.stop());
//       }
//     };
//   }, [stream, streamCheckOut]);

//   useEffect(() => {
//     updateDashboardData();
//   }, [reports, attendanceHistory, tickets]);

//   // ==================== DASHBOARD FUNCTIONS ====================
//   const handleQuickAction = (action) => {
//     switch (action) {
//       case "submitReport":
//         setActiveMenu("reports");
//         break;
//       case "recordReadings":
//         const now = new Date();
//         const today = now.toISOString().split("T")[0];
//         const time = now.toTimeString().slice(0, 5);

//         setFormData((prev) => ({
//           ...prev,
//           date: today,
//           time: time,
//           pHLevel: dashboardData.pHLevel.replace(" L/h", ""),
//           flowRate: dashboardData.flowRate.replace(" L/h", ""),
//           tds: dashboardData.tds.replace(" ppm", ""),
//           ec: dashboardData.ec.replace(" μS/cm", ""),
//         }));
//         setActiveMenu("reports");

//         setTimeout(() => {
//           document
//             .getElementById("date")
//             ?.scrollIntoView({ behavior: "smooth" });
//         }, 100);
//         break;
//       case "checkIn":
//         if (!attendanceData.isCheckedIn) {
//           openCheckInModal();
//         }
//         break;
//       case "checkOut":
//         if (attendanceData.isCheckedIn && !attendanceData.isCheckedOut) {
//           openCheckOutModal();
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   // ==================== DAILY REPORT FUNCTIONS ====================
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     if (errors[field]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.date.trim()) newErrors.date = "Tanggal harus diisi";
//     if (!formData.time.trim()) newErrors.time = "Waktu harus diisi";
//     if (!formData.pHLevel.trim()) newErrors.pHLevel = "pH Level harus diisi";
//     if (!formData.flowRate.trim()) newErrors.flowRate = "Flow Rate harus diisi";
//     if (!formData.volt.trim()) newErrors.volt = "Volt harus diisi";
//     if (!formData.ampere.trim()) newErrors.ampere = "Ampere harus diisi";
//     if (!formData.tds.trim()) newErrors.tds = "TDS harus diisi";
//     if (!formData.ec.trim()) newErrors.ec = "EC harus diisi";
//     if (!formData.additionalNotes.trim())
//       newErrors.additionalNotes = "Catatan tambahan harus diisi";

//     if (formData.pHLevel && isNaN(parseFloat(formData.pHLevel))) {
//       newErrors.pHLevel = "pH Level harus berupa angka";
//     }
//     if (formData.flowRate && isNaN(parseFloat(formData.flowRate))) {
//       newErrors.flowRate = "Flow Rate harus berupa angka";
//     }
//     if (formData.volt && isNaN(parseFloat(formData.volt))) {
//       newErrors.volt = "Volt harus berupa angka";
//     }
//     if (formData.ampere && isNaN(parseFloat(formData.ampere))) {
//       newErrors.ampere = "Ampere harus berupa angka";
//     }
//     if (formData.tds && isNaN(parseFloat(formData.tds))) {
//       newErrors.tds = "TDS harus berupa angka";
//     }
//     if (formData.ec && isNaN(parseFloat(formData.ec))) {
//       newErrors.ec = "EC harus berupa angka";
//     }

//     if (uploadedFiles.length === 0) {
//       newErrors.files = "Minimal 1 foto harus diupload";
//     }

//     return newErrors;
//   };

//   const handleSubmitReport = () => {
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       const firstErrorField = Object.keys(formErrors)[0];
//       const element = document.getElementById(firstErrorField);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "center" });
//       }
//       return;
//     }

//     setIsSubmitting(true);

//     setTimeout(() => {
//       const newReport = {
//         id: Date.now(),
//         ...formData,
//         uploadedFiles: [...uploadedFiles],
//         timestamp: new Date().toISOString(),
//         location: user.site,
//         operator: user.name,
//         status: "Submitted",
//       };

//       setReports((prev) => [newReport, ...prev]);
//       setFormData({
//         date: "",
//         time: "",
//         pHLevel: "",
//         flowRate: "",
//         volt: "",
//         ampere: "",
//         tds: "",
//         ec: "",
//         agitatorStatus: "Normal",
//         settleStatus: "Normal",
//         outFilterStatus: "Normal",
//         additionalNotes: "",
//       });
//       setUploadedFiles([]);
//       setErrors({});
//       setIsSubmitting(false);

//       updateDashboardData();

//       setNotifications((prev) => [
//         {
//           id: Date.now(),
//           title: "Laporan Berhasil Disubmit",
//           message: `Laporan harian ${formData.date} telah berhasil disubmit`,
//           time: "Baru saja",
//           type: "success",
//           read: false,
//         },
//         ...prev,
//       ]);

//       alert("Laporan berhasil disubmit!");
//     }, 1000);
//   };

//   const handleSaveDraft = () => {
//     if (!formData.date || !formData.time) {
//       setErrors({
//         date: !formData.date ? "Tanggal harus diisi untuk draft" : "",
//         time: !formData.time ? "Waktu harus diisi untuk draft" : "",
//       });
//       return;
//     }

//     const draftReport = {
//       id: Date.now(),
//       ...formData,
//       uploadedFiles: [...uploadedFiles],
//       timestamp: new Date().toISOString(),
//       location: user.site,
//       operator: user.name,
//       status: "Draft",
//     };

//     setReports((prev) => [draftReport, ...prev]);
//     updateDashboardData();
//     alert("Laporan berhasil disimpan sebagai draft!");
//   };

//   const handleDateIconClick = () => {
//     if (dateInputRef.current) {
//       dateInputRef.current.showPicker();
//     }
//   };

//   const handleTimeIconClick = () => {
//     if (timeInputRef.current) {
//       timeInputRef.current.showPicker();
//     }
//   };

//   const handleContainerClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setUploadedFiles(files);

//     if (files.length > 0 && errors.files) {
//       setErrors((prev) => ({
//         ...prev,
//         files: "",
//       }));
//     }
//   };

//   const handleExportReports = () => {
//     if (reports.length === 0) {
//       alert("Tidak ada data laporan untuk di-export!");
//       return;
//     }

//     const headers = [
//       "Tanggal",
//       "Waktu",
//       "pH Level",
//       "Flow Rate",
//       "Volt",
//       "Ampere",
//       "TDS",
//       "EC",
//       "Status",
//       "Lokasi",
//     ];
//     const csvData = reports.map((report) => [
//       report.date,
//       report.time,
//       report.pHLevel,
//       report.flowRate,
//       report.volt,
//       report.ampere,
//       report.tds,
//       report.ec,
//       report.status,
//       report.location,
//     ]);

//     const csvContent = [headers, ...csvData]
//       .map((row) => row.join(","))
//       .join("\n");
//     const blob = new Blob([csvContent], { type: "text/csv" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `laporan-ipal-${new Date().toISOString().split("T")[0]}.csv`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);

//     alert("Laporan berhasil di-export!");
//   };

//   const openReportDetailModal = (report) => {
//     setSelectedReport(report);
//     setIsReportDetailModalOpen(true);
//   };

//   const openImageModal = (imageFile) => {
//     setSelectedImage(imageFile);
//     setIsImageModalOpen(true);
//   };

//   const filteredReports = reports.filter(
//     (report) =>
//       report.additionalNotes
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       report.status.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // ==================== PRESENCE FUNCTIONS ====================
//   const openDetailModal = (attendance) => {
//     setSelectedAttendance(attendance);
//     setIsDetailModalOpen(true);
//   };

//   const getCurrentLocation = (isCheckOut = false) => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by this browser.");
//       return;
//     }

//     if (isCheckOut) {
//       setCurrentLocationCheckOut("Getting location...");
//     } else {
//       setCurrentLocation("Getting location...");
//     }

//     const options = {
//       enableHighAccuracy: true,
//       timeout: 10000,
//       maximumAge: 0,
//     };

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;

//         // Hitung jarak dari lokasi perusahaan
//         const distance = calculateDistance(
//           latitude,
//           longitude,
//           COMPANY_COORDINATES.latitude,
//           COMPANY_COORDINATES.longitude
//         );

//         const isWithinRadius = distance <= ALLOWED_RADIUS_METERS;

//         // Format lokasi dengan status validasi
//         const locationString = `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`;
//         const statusMessage = isWithinRadius
//           ? `✓ Within allowed radius (${Math.round(distance)} m from company)`
//           : `✗ Outside allowed radius (${Math.round(distance)} m from company)`;

//         const fullLocationString = `${locationString}\n${statusMessage}`;

//         if (isCheckOut) {
//           setCurrentLocationCheckOut(fullLocationString);
//           setLocationCapturedCheckOut(isWithinRadius);

//           if (isWithinRadius) {
//             alert("Location valid! You are within the allowed radius.");
//           } else {
//             alert(
//               `Location outside radius! You are ${Math.round(distance)} meters from company. Maximum ${ALLOWED_RADIUS_METERS} meters allowed.`
//             );
//           }
//         } else {
//           setCurrentLocation(fullLocationString);
//           setLocationCaptured(isWithinRadius);

//           if (isWithinRadius) {
//             alert("Location valid! You are within the allowed radius.");
//           } else {
//             alert(
//               `Location outside radius! You are ${Math.round(distance)} meters from company. Maximum ${ALLOWED_RADIUS_METERS} meters allowed.`
//             );
//           }
//         }
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//         let errorMessage = "Unknown error occurred";
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             errorMessage = "Location access denied by user";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             errorMessage = "Location information unavailable";
//             break;
//           case error.TIMEOUT:
//             errorMessage = "Location request timed out";
//             break;
//         }
//         if (isCheckOut) {
//           setCurrentLocationCheckOut("Location unavailable");
//           setLocationCapturedCheckOut(false);
//         } else {
//           setCurrentLocation("Location unavailable");
//           setLocationCaptured(false);
//         }
//         alert(`Failed to get location: ${errorMessage}`);
//       },
//       options
//     );
//   };

//   const startCamera = async (isCheckOut = false) => {
//     try {
//       // Cek permission kamera terlebih dahulu
//       const hasPermission = await checkCameraPermission();
//       if (!hasPermission) {
//         alert("Please allow camera access in your browser settings first.");
//         return;
//       }

//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         // Meminta akses kamera dengan pesan yang jelas
//         const mediaStream = await navigator.mediaDevices.getUserMedia({
//           video: {
//             facingMode: "user", // Menggunakan kamera depan
//             width: { ideal: 1280 },
//             height: { ideal: 720 },
//           },
//         });

//         if (isCheckOut) {
//           setStreamCheckOut(mediaStream);
//           setIsCameraActiveCheckOut(true);
//           if (videoRefCheckOut.current) {
//             videoRefCheckOut.current.srcObject = mediaStream;
//           }
//         } else {
//           setStream(mediaStream);
//           setIsCameraActive(true);
//           if (videoRefCheckIn.current) {
//             videoRefCheckIn.current.srcObject = mediaStream;
//           }
//         }

//         // Tambahkan event listener untuk menangani saat kamera dimatikan
//         mediaStream.getVideoTracks()[0].addEventListener("ended", () => {
//           if (isCheckOut) {
//             setIsCameraActiveCheckOut(false);
//           } else {
//             setIsCameraActive(false);
//           }
//         });
//       } else {
//         alert("Camera not supported in this browser.");
//       }
//     } catch (error) {
//       console.error("Error accessing camera:", error);

//       if (
//         error.name === "NotAllowedError" ||
//         error.name === "PermissionDeniedError"
//       ) {
//         alert(
//           "Camera access denied. Please allow camera access in your browser settings."
//         );
//       } else if (
//         error.name === "NotFoundError" ||
//         error.name === "DevicesNotFoundError"
//       ) {
//         alert(
//           "Camera not found. Make sure camera is available and not being used by another application."
//         );
//       } else if (
//         error.name === "NotReadableError" ||
//         error.name === "TrackStartError"
//       ) {
//         alert(
//           "Camera is being used by another application. Close other applications using the camera."
//         );
//       } else {
//         alert("Cannot access camera. Please check your camera settings.");
//       }
//     }
//   };

//   const capturePhoto = (isCheckOut = false) => {
//     let video, canvas;
//     if (isCheckOut) {
//       video = videoRefCheckOut.current;
//       canvas = canvasRefCheckOut.current;
//     } else {
//       video = videoRefCheckIn.current;
//       canvas = canvasRefCheckIn.current;
//     }

//     if (video && canvas) {
//       const context = canvas.getContext("2d");
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       const photoDataUrl = canvas.toDataURL("image/png");

//       if (isCheckOut) {
//         setSelfiePreviewCheckOut(photoDataUrl);
//         setSelfieUploadedCheckOut(true);
//       } else {
//         setSelfiePreview(photoDataUrl);
//         setSelfieUploaded(true);
//       }
//       stopCamera(isCheckOut);
//     }
//   };

//   const stopCamera = (isCheckOut = false) => {
//     if (isCheckOut) {
//       if (streamCheckOut) {
//         streamCheckOut.getTracks().forEach((track) => track.stop());
//         setStreamCheckOut(null);
//       }
//       setIsCameraActiveCheckOut(false);
//     } else {
//       if (stream) {
//         stream.getTracks().forEach((track) => track.stop());
//         setStream(null);
//       }
//       setIsCameraActive(false);
//     }
//   };

//   const handleSelfieUpload = (event, isCheckOut = false) => {
//     const file = event.target.files[0];
//     if (file) {
//       if (!file.type.startsWith("image/")) {
//         alert("Please select an image file");
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) {
//         alert("Please select an image smaller than 5MB");
//         return;
//       }
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (isCheckOut) {
//           setSelfiePreviewCheckOut(e.target.result);
//           setSelfieUploadedCheckOut(true);
//         } else {
//           setSelfiePreview(e.target.result);
//           setSelfieUploaded(true);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileInput = (isCheckOut = false) => {
//     const input = document.createElement("input");
//     input.type = "file";
//     input.accept = "image/*";
//     input.onchange = (e) => handleSelfieUpload(e, isCheckOut);
//     input.click();
//   };

//   const openCheckInModal = () => {
//     setIsCheckInModalOpen(true);
//     setLocationCaptured(false);
//     setSelfieUploaded(false);
//     setSelfiePreview(null);
//     setCurrentLocation("Click to get location");
//     setIsCameraActive(false);
//   };

//   const openCheckOutModal = () => {
//     setIsCheckOutModalOpen(true);
//     setLocationCapturedCheckOut(false);
//     setSelfieUploadedCheckOut(false);
//     setSelfiePreviewCheckOut(null);
//     setCurrentLocationCheckOut("Click to get location");
//     setIsCameraActiveCheckOut(false);
//   };

//   const handleConfirmCheckIn = () => {
//     if (!locationCaptured) {
//       alert("Please capture your location first!");
//       return;
//     }

//     if (!selfieUploaded) {
//       alert("Please upload or take a selfie first!");
//       return;
//     }

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const ampm = now.getHours() >= 12 ? "PM" : "AM";
//     const formattedHours = (now.getHours() % 12 || 12)
//       .toString()
//       .padStart(2, "0");
//     const checkInTime = `${formattedHours}:${minutes} ${ampm}`;

//     let checkInStatus = "On Time";
//     const currentTime = now.getHours() * 60 + now.getMinutes();
//     const deadlineTime = 8 * 60 + 15;
//     if (currentTime > deadlineTime) checkInStatus = "Late";

//     const newAttendance = {
//       id: Date.now(),
//       date: new Date().toISOString().split("T")[0],
//       checkIn: checkInTime,
//       checkOut: "--:--",
//       location: currentLocation,
//       status: "pending",
//       approvalStatus: "pending",
//       checkInStatus: checkInStatus,
//       checkInLocation: currentLocation,
//       checkOutLocation: "--:--",
//       selfieCheckIn: selfiePreview,
//       selfieCheckOut: null,
//       approvedBy: null,
//       approvedAt: null,
//     };

//     setAttendanceData((prev) => ({
//       ...prev,
//       checkInTime: checkInTime,
//       status: checkInStatus,
//       isCheckedIn: true,
//       isCheckedOut: false,
//       checkOutTime: "--:--",
//       location: currentLocation,
//     }));

//     setAttendanceHistory((prev) => [newAttendance, ...prev]);
//     setIsCheckInModalOpen(false);

//     // Reset modal state
//     setLocationCaptured(false);
//     setSelfieUploaded(false);
//     setSelfiePreview(null);
//     setCurrentLocation("Click to get location");
//     stopCamera(false);

//     updateDashboardData();

//     alert(
//       `Check-in berhasil! Waktu: ${checkInTime} - Status: ${checkInStatus}. Menunggu approval admin.`
//     );
//   };

//   const handleConfirmCheckOut = () => {
//     if (!locationCapturedCheckOut) {
//       alert("Please capture your location first!");
//       return;
//     }

//     if (!selfieUploadedCheckOut) {
//       alert("Please upload or take a selfie first!");
//       return;
//     }

//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const ampm = now.getHours() >= 12 ? "PM" : "AM";
//     const formattedHours = (now.getHours() % 12 || 12)
//       .toString()
//       .padStart(2, "0");
//     const checkOutTime = `${formattedHours}:${minutes} ${ampm}`;

//     setAttendanceData((prev) => ({
//       ...prev,
//       checkOutTime: checkOutTime,
//       isCheckedOut: true,
//     }));

//     const today = new Date().toISOString().split("T")[0];
//     const updatedHistory = attendanceHistory.map((record) =>
//       record.date === today
//         ? {
//             ...record,
//             checkOut: checkOutTime,
//             checkOutLocation: currentLocationCheckOut,
//             selfieCheckOut: selfiePreviewCheckOut,
//             status: "pending",
//             approvalStatus: "pending",
//           }
//         : record
//     );

//     setAttendanceHistory(updatedHistory);
//     setIsCheckOutModalOpen(false);

//     // Reset modal state
//     setLocationCapturedCheckOut(false);
//     setSelfieUploadedCheckOut(false);
//     setSelfiePreviewCheckOut(null);
//     setCurrentLocationCheckOut("Click to get location");
//     stopCamera(true);

//     updateDashboardData();

//     alert("Check-out berhasil! Menunggu approval admin.");
//   };

//   const getStatusColor = (status) => {
//     if (status === "On Time") return "text-green-600 bg-green-100";
//     if (status === "Late") return "text-red-600 bg-red-100";
//     if (status === "Approved") return "text-green-600 bg-green-100";
//     if (status === "pending") return "text-yellow-600 bg-yellow-100";
//     return "text-gray-600 bg-gray-100";
//   };

//   const getApprovalStatusColor = (status) => {
//     if (status === "approved") return "text-green-600 bg-green-100";
//     if (status === "rejected") return "text-red-600 bg-red-100";
//     if (status === "pending") return "text-yellow-600 bg-yellow-100";
//     return "text-gray-600 bg-gray-100";
//   };

//   // ==================== HELP DESK FUNCTIONS ====================
//   const handleCreateTicket = () => {
//     const errors = {};
//     if (!newTicket.title.trim()) errors.title = "Judul masalah harus diisi";
//     if (!newTicket.description.trim())
//       errors.description = "Deskripsi masalah harus diisi";

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     const ticket = {
//       id: Date.now(),
//       ticketId: `#T${String(Date.now()).slice(-4)}`,
//       title: newTicket.title,
//       priority: newTicket.priority,
//       status: "Open",
//       assignee: user.name,
//       site: newTicket.site,
//       description: newTicket.description,
//       createdAt: new Date().toISOString().split("T")[0],
//       category: newTicket.category,
//       resolvedAt: null,
//       attachments: [...attachmentFiles],
//       solution: "",
//     };

//     setTickets((prev) => [ticket, ...prev]);
//     setNewTicket({
//       site: user.site,
//       category: "Technical",
//       title: "",
//       description: "",
//       priority: "Medium",
//       attachments: [],
//     });
//     setAttachmentFiles([]);
//     setFormErrors({});
//     setIsCreateModalOpen(false);

//     updateDashboardData();

//     setNotifications((prev) => [
//       {
//         id: Date.now(),
//         title: "Tiket Bantuan Diajukan",
//         message: `Tiket "${newTicket.title}" telah berhasil diajukan`,
//         time: "Baru saja",
//         type: "info",
//         read: false,
//       },
//       ...prev,
//     ]);

//     alert("Tiket bantuan berhasil diajukan!");
//   };

//   useEffect(() => {
//     if (isCreateModalOpen) {
//       setFormErrors({});
//     }
//   }, [isCreateModalOpen]);

//   const handleAttachmentUpload = (event) => {
//     const files = Array.from(event.target.files);
//     const newFiles = files.map((file) => ({
//       file,
//       name: file.name,
//       size: file.size,
//       type: file.type,
//       preview: file.type.startsWith("image/")
//         ? URL.createObjectURL(file)
//         : null,
//     }));
//     setAttachmentFiles((prev) => [...prev, ...newFiles]);
//   };

//   const removeAttachment = (index) => {
//     setAttachmentFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const filteredTickets = tickets.filter((ticket) => {
//     const matchesSearch =
//       ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus =
//       statusFilter === "Semua Status" || ticket.status === statusFilter;
//     const matchesPriority =
//       priorityFilter === "Semua Prioritas" ||
//       ticket.priority === priorityFilter;
//     return matchesSearch && matchesStatus && matchesPriority;
//   });

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "High":
//         return "bg-red-100 text-red-800";
//       case "Medium":
//         return "bg-yellow-100 text-yellow-800";
//       case "Low":
//         return "bg-green-100 text-green-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const getTicketStatusColor = (status) => {
//     switch (status) {
//       case "Open":
//         return "bg-blue-100 text-blue-800";
//       case "In Progress":
//         return "bg-yellow-100 text-yellow-800";
//       case "Resolved":
//         return "bg-green-100 text-green-800";
//       case "Closed":
//         return "bg-gray-100 text-gray-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const statusOptions = [
//     "Semua Status",
//     "Open",
//     "In Progress",
//     "Resolved",
//     "Closed",
//   ];
//   const priorityOptions = ["Semua Prioritas", "High", "Medium", "Low"];
//   const categoryOptions = [
//     "Technical",
//     "Operational",
//     "Maintenance",
//     "Software",
//     "Other",
//   ];

//   // ==================== SOLUTION FUNCTIONS ====================
//   const openSolutionModal = (ticket) => {
//     setSelectedTicketForSolution(ticket);
//     setSolutionText(ticket.solution || "");
//     setSolutionStatus(ticket.status);
//     setIsSolutionModalOpen(true);
//   };

//   const handleSubmitSolution = () => {
//     if (!solutionText.trim()) {
//       alert("Solution cannot be empty");
//       return;
//     }

//     const updatedTickets = tickets.map((ticket) =>
//       ticket.id === selectedTicketForSolution.id
//         ? {
//             ...ticket,
//             solution: solutionText,
//             status: solutionStatus,
//             resolvedAt:
//               solutionStatus === "Resolved" || solutionStatus === "Closed"
//                 ? new Date().toISOString().split("T")[0]
//                 : null,
//           }
//         : ticket
//     );

//     setTickets(updatedTickets);
//     setIsSolutionModalOpen(false);
//     setSolutionText("");
//     setSolutionStatus("Open");
//     setSelectedTicketForSolution(null);

//     alert("Solution submitted successfully!");
//   };

//   // ==================== RENDER FUNCTIONS ====================
//   const renderDashboard = () => {
//     const maxPHValue =
//       pHData.length > 0 ? Math.max(...pHData.map((d) => d.value), 7.5) : 7.5;
//     const maxFlowRateValue =
//       flowRateData.length > 0
//         ? Math.max(...flowRateData.map((d) => d.value), 600)
//         : 600;

//     return (
//       <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//         <div className="mb-6">
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//             Operator Dashboard
//           </h2>
//           <p className="text-gray-600 mt-1">
//             Welcome back, {user.name}! Monitor your daily activities and IPAL
//             status
//           </p>
//         </div>

//         <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//           {[
//             {
//               label: "Reports Submitted",
//               value: dashboardData.reportsSubmitted,
//               percent: "+12%",
//               icon: DocumentChartBarIcon,
//             },
//             {
//               label: "Attendance Rate",
//               value: dashboardData.attendanceRate,
//               percent: "+2%",
//               icon: ChartBarIcon,
//             },
//             {
//               label: "Next Shift",
//               value: "Tomorrow",
//               subValue: "08:00",
//               icon: ClockIcon,
//             },
//             { label: "Current Site", value: user.site, icon: MapPinIcon },
//           ].map((item, i) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={i}
//                 className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <p className="text-gray-600 text-sm font-medium">
//                     {item.label}
//                   </p>
//                   <div className="p-2 rounded-lg bg-blue-50">
//                     <Icon className="w-4 h-4 text-blue-600" />
//                   </div>
//                 </div>
//                 <div>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {item.value}
//                   </p>
//                   {item.subValue && (
//                     <p className="text-sm text-gray-600 mt-1">
//                       {item.subValue}
//                     </p>
//                   )}
//                 </div>
//                 {item.percent && (
//                   <p
//                     className={`text-xs font-medium mt-1 ${
//                       item.percent.startsWith("+")
//                         ? "text-green-600"
//                         : "text-red-600"
//                     }`}
//                   >
//                     {item.percent} vs last month
//                   </p>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-bold text-gray-900 mb-4">
//             Today's Latest Readings
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {[
//               {
//                 label: "pH Level",
//                 value: dashboardData.pHLevel,
//                 status: dashboardData.pHLevel === "0.0" ? "no data" : "normal",
//               },
//               {
//                 label: "Flow Rate",
//                 value: dashboardData.flowRate,
//                 status:
//                   dashboardData.flowRate === "0 L/h" ? "no data" : "normal",
//               },
//               {
//                 label: "TDS",
//                 value: dashboardData.tds,
//                 status: dashboardData.tds === "0 ppm" ? "no data" : "normal",
//               },
//               {
//                 label: "EC",
//                 value: dashboardData.ec,
//                 status: dashboardData.ec === "0 μS/cm" ? "no data" : "normal",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <p className="text-gray-600 text-sm font-medium">
//                       {item.label}
//                     </p>
//                     <p className="text-xl font-bold text-gray-900 mt-1">
//                       {item.value}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div
//                     className={`w-2 h-2 rounded-full ${
//                       item.status === "normal"
//                         ? "bg-green-500"
//                         : item.status === "no data"
//                           ? "bg-gray-400"
//                           : "bg-red-500"
//                     }`}
//                   ></div>
//                   <span
//                     className={`text-xs font-medium ${
//                       item.status === "normal"
//                         ? "text-green-600"
//                         : item.status === "no data"
//                           ? "text-gray-600"
//                           : "text-red-600"
//                     }`}
//                   >
//                     {item.status}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DIAGRAM BATANG */}
//         <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* pH Level Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h3 className="font-semibold text-lg text-gray-800 mb-6">
//               pH Level Trends
//             </h3>
//             <div className="relative">
//               <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                 <span>{maxPHValue.toFixed(1)}</span>
//                 <span>{(maxPHValue * 0.75).toFixed(1)}</span>
//                 <span>{(maxPHValue * 0.5).toFixed(1)}</span>
//                 <span>{(maxPHValue * 0.25).toFixed(1)}</span>
//                 <span>0.0</span>
//               </div>
//               <div className="ml-8">
//                 {pHData.length === 0 ? (
//                   <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
//                     <p className="text-gray-500 text-center">
//                       No data available
//                       <br />
//                       <span className="text-sm">
//                         Submit daily reports to see trends
//                       </span>
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
//                     {pHData.map((data, index) => {
//                       const normalizedHeight = Math.min(
//                         (data.value / maxPHValue) * 120,
//                         120
//                       );
//                       return (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           <div
//                             className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
//                             style={{ height: `${normalizedHeight}px` }}
//                             onMouseEnter={() => setHoveredBar(`ph-${index}`)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           >
//                             {hoveredBar === `ph-${index}` && (
//                               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                 {data.value}
//                               </div>
//                             )}
//                           </div>
//                           <span className="text-xs text-gray-600 mt-2">
//                             {data.day}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Flow Rate Chart */}
//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//             <h3 className="font-semibold text-lg text-gray-800 mb-6">
//               Flow Rate Trends
//             </h3>
//             <div className="relative">
//               <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                 <span>{maxFlowRateValue}</span>
//                 <span>{Math.round(maxFlowRateValue * 0.75)}</span>
//                 <span>{Math.round(maxFlowRateValue * 0.5)}</span>
//                 <span>{Math.round(maxFlowRateValue * 0.25)}</span>
//                 <span>0</span>
//               </div>
//               <div className="ml-8">
//                 {flowRateData.length === 0 ? (
//                   <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
//                     <p className="text-gray-500 text-center">
//                       No data available
//                       <br />
//                       <span className="text-sm">
//                         Submit daily reports to see trends
//                       </span>
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
//                     {flowRateData.map((data, index) => {
//                       const normalizedHeight = Math.min(
//                         (data.value / maxFlowRateValue) * 120,
//                         120
//                       );
//                       return (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           <div
//                             className="w-6 bg-gradient-to-t from-green-400 to-green-600 rounded-t transition-all duration-300 hover:from-green-500 hover:to-green-700 cursor-pointer relative group"
//                             style={{ height: `${normalizedHeight}px` }}
//                             onMouseEnter={() => setHoveredBar(`flow-${index}`)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           >
//                             {hoveredBar === `flow-${index}` && (
//                               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                 {data.value} L/h
//                               </div>
//                             )}
//                           </div>
//                           <span className="text-xs text-gray-600 mt-2">
//                             {data.day}
//                           </span>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
//             <h3 className="font-semibold text-lg text-gray-800 mb-3">
//               Quick Actions
//             </h3>
//             <div className="space-y-3">
//               <button
//                 onClick={() => handleQuickAction("submitReport")}
//                 className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 hover:border-blue-300"
//               >
//                 <DocumentTextIcon className="w-5 h-5 text-blue-600" />
//                 <span className="font-medium text-blue-700">
//                   Submit Daily Report
//                 </span>
//               </button>
//               <button
//                 onClick={() => handleQuickAction("recordReadings")}
//                 className="w-full flex text-left gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200 hover:border-green-300"
//               >
//                 <ChartBarIcon className="w-5 h-5 text-green-600" />
//                 <span className="font-medium text-green-700">
//                   Record today's readings
//                 </span>
//               </button>
//               <button
//                 onClick={() => handleQuickAction("checkIn")}
//                 disabled={attendanceData.isCheckedIn}
//                 className={`w-full flex text-left gap-3 p-4 rounded-lg transition-colors border ${
//                   attendanceData.isCheckedIn
//                     ? "bg-gray-100 border-gray-300 cursor-not-allowed"
//                     : "bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300"
//                 }`}
//               >
//                 <MapPinIcon className="w-5 h-5 text-orange-600" />
//                 <span
//                   className={`font-medium ${
//                     attendanceData.isCheckedIn
//                       ? "text-gray-500"
//                       : "text-orange-700"
//                   }`}
//                 >
//                   {attendanceData.isCheckedIn
//                     ? "Already Checked In"
//                     : "Check In Now"}
//                 </span>
//               </button>
//               <button
//                 onClick={() => handleQuickAction("checkOut")}
//                 disabled={
//                   !attendanceData.isCheckedIn || attendanceData.isCheckedOut
//                 }
//                 className={`w-full flex text-left gap-3 p-4 rounded-lg transition-colors border ${
//                   !attendanceData.isCheckedIn || attendanceData.isCheckedOut
//                     ? "bg-gray-100 border-gray-300 cursor-not-allowed"
//                     : "bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-300"
//                 }`}
//               >
//                 <MapPinIcon className="w-5 h-5 text-red-600" />
//                 <span
//                   className={`font-medium ${
//                     !attendanceData.isCheckedIn || attendanceData.isCheckedOut
//                       ? "text-gray-500"
//                       : "text-red-700"
//                   }`}
//                 >
//                   {attendanceData.isCheckedOut
//                     ? "Already Checked Out"
//                     : "Check Out Now"}
//                 </span>
//               </button>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
//             <h3 className="font-semibold text-lg text-gray-800 mb-4">
//               Recent Activity
//             </h3>
//             <div className="space-y-4">
//               {reports.slice(0, 3).map((report, index) => (
//                 <div
//                   key={report.id}
//                   className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
//                 >
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">
//                       Daily report submitted
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       {new Date(report.timestamp).toLocaleTimeString()}
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <CheckCircleIcon className="w-4 h-4 text-green-500" />
//                     <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
//                       {report.status}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//               {reports.length === 0 && (
//                 <div className="text-center py-4 text-gray-500">
//                   No recent activity
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderDailyReport = () => (
//     <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//       <div className="mb-6">
//         <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//           Daily Report
//         </h2>
//         <p className="text-gray-600 mt-1">
//           Submit your daily IPAL operational report
//         </p>
//       </div>

//       <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200 mb-6">
//         <div className="flex items-start gap-3">
//           <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
//             <ExclamationTriangleIcon className="w-4 h-4 text-blue-700" />
//           </div>
//           <div>
//             <h3 className="font-bold text-blue-700 mb-2">
//               Daily Report Guidelines
//             </h3>
//             <p className="text-blue-800 text-sm">
//               Please ensure all measurements are accurate. Take photos of
//               equipment and upload them with your report. Reports must be
//               submitted before end of shift.
//               <strong className="block mt-2">
//                 Semua field harus diisi sebelum submit!
//               </strong>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
//         <div className="p-6 border-b border-gray-200">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Report Information
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div id="date">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Date <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   ref={dateInputRef}
//                   type="date"
//                   value={formData.date}
//                   onChange={(e) => handleInputChange("date", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.date ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//                 />
//                 <button
//                   type="button"
//                   onClick={handleDateIconClick}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
//                 >
//                   <CalendarDaysIcon className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//               {errors.date && (
//                 <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                   <ExclamationCircleIcon className="w-4 h-4" />
//                   {errors.date}
//                 </p>
//               )}
//             </div>

//             <div id="time">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Time <span className="text-red-500">*</span>
//               </label>
//               <div className="relative">
//                 <input
//                   ref={timeInputRef}
//                   type="time"
//                   value={formData.time}
//                   onChange={(e) => handleInputChange("time", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.time ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//                 />
//                 <button
//                   type="button"
//                   onClick={handleTimeIconClick}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
//                 >
//                   <ClockIcon className="w-5 h-5 text-gray-600" />
//                 </button>
//               </div>
//               {errors.time && (
//                 <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                   <ExclamationCircleIcon className="w-4 h-4" />
//                   {errors.time}
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="p-6 border-b border-gray-200">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Water Parameters <span className="text-red-500">*</span>
//           </h3>
//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div id="pHLevel">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   pH Level <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 7.2"
//                   value={formData.pHLevel}
//                   onChange={(e) => handleInputChange("pHLevel", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.pHLevel ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.pHLevel && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.pHLevel}
//                   </p>
//                 )}
//               </div>
//               <div id="flowRate">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Flow Rate (L/h) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 450"
//                   value={formData.flowRate}
//                   onChange={(e) =>
//                     handleInputChange("flowRate", e.target.value)
//                   }
//                   className={`w-full p-3 border ${
//                     errors.flowRate ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.flowRate && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.flowRate}
//                   </p>
//                 )}
//               </div>
//               <div id="volt">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Volt (V) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 220"
//                   value={formData.volt}
//                   onChange={(e) => handleInputChange("volt", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.volt ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.volt && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.volt}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div id="ampere">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Ampere (A) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 15"
//                   value={formData.ampere}
//                   onChange={(e) => handleInputChange("ampere", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.ampere ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.ampere && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.ampere}
//                   </p>
//                 )}
//               </div>
//               <div id="tds">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   TDS (ppm) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 480"
//                   value={formData.tds}
//                   onChange={(e) => handleInputChange("tds", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.tds ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.tds && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.tds}
//                   </p>
//                 )}
//               </div>
//               <div id="ec">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   EC (μS/cm) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g., 720"
//                   value={formData.ec}
//                   onChange={(e) => handleInputChange("ec", e.target.value)}
//                   className={`w-full p-3 border ${
//                     errors.ec ? "border-red-500" : "border-gray-200"
//                   } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                 />
//                 {errors.ec && (
//                   <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                     <ExclamationCircleIcon className="w-4 h-4" />
//                     {errors.ec}
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 border-b border-gray-200">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Equipment Status
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Agitator
//               </label>
//               <select
//                 value={formData.agitatorStatus}
//                 onChange={(e) =>
//                   handleInputChange("agitatorStatus", e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//               >
//                 <option value="Normal">Normal</option>
//                 <option value="Maintenance">Maintenance</option>
//                 <option value="Broken">Broken</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Settle
//               </label>
//               <select
//                 value={formData.settleStatus}
//                 onChange={(e) =>
//                   handleInputChange("settleStatus", e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//               >
//                 <option value="Normal">Normal</option>
//                 <option value="Maintenance">Maintenance</option>
//                 <option value="Broken">Broken</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Out Filter
//               </label>
//               <select
//                 value={formData.outFilterStatus}
//                 onChange={(e) =>
//                   handleInputChange("outFilterStatus", e.target.value)
//                 }
//                 className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//               >
//                 <option value="Normal">Normal</option>
//                 <option value="Maintenance">Maintenance</option>
//                 <option value="Broken">Broken</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 border-b border-gray-200">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Supporting Photos <span className="text-red-500">*</span>
//           </h3>
//           <input
//             type="file"
//             ref={fileInputRef}
//             onChange={handleFileUpload}
//             className="hidden"
//             multiple
//             accept="image/*"
//           />
//           <div
//             onClick={handleContainerClick}
//             className={`border-2 border-dashed ${
//               errors.files ? "border-red-500" : "border-gray-300"
//             } rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
//           >
//             <CameraIcon
//               className={`w-12 h-12 ${
//                 errors.files ? "text-red-500" : "text-gray-600"
//               } mx-auto mb-3`}
//             />
//             <p
//               className={`text-sm mb-3 ${
//                 errors.files ? "text-red-500" : "text-gray-500"
//               }`}
//             >
//               {errors.files
//                 ? errors.files
//                 : "Click anywhere in this area to upload photos of equipment and readings"}
//             </p>
//             {uploadedFiles.length > 0 && (
//               <div className="mt-4">
//                 <p className="text-sm font-medium text-gray-700 mb-2">
//                   Uploaded files:
//                 </p>
//                 <ul className="text-sm text-gray-600">
//                   {uploadedFiles.map((file, index) => (
//                     <li key={index} className="truncate">
//                       {file.name}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="p-6 border-b border-gray-200">
//           <h3 className="font-semibold text-lg text-gray-800 mb-4">
//             Additional Notes <span className="text-red-500">*</span>
//           </h3>
//           <div id="additionalNotes">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Add any additional observations, issues, or inventory needs...
//             </label>
//             <textarea
//               value={formData.additionalNotes}
//               onChange={(e) =>
//                 handleInputChange("additionalNotes", e.target.value)
//               }
//               rows={4}
//               className={`w-full p-3 border ${
//                 errors.additionalNotes ? "border-red-500" : "border-gray-200"
//               } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//               placeholder="Enter any additional information, observations, or requirements..."
//             />
//             {errors.additionalNotes && (
//               <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                 <ExclamationCircleIcon className="w-4 h-4" />
//                 {errors.additionalNotes}
//               </p>
//             )}
//           </div>
//         </div>

//         <div className="p-6">
//           <div className="flex flex-col sm:flex-row gap-4 justify-end">
//             <button
//               onClick={handleSaveDraft}
//               className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//             >
//               Save as Draft
//             </button>
//             <button
//               onClick={handleSubmitReport}
//               disabled={isSubmitting}
//               className={`w-full sm:w-auto px-8 py-3 ${
//                 isSubmitting
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-green-600 hover:bg-green-700"
//               } text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2`}
//             >
//               {isSubmitting ? (
//                 <>
//                   <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                   Submitting...
//                 </>
//               ) : (
//                 "Submit Report"
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-900">Laporan Saya</h2>
//               <p className="text-gray-600 mt-1">Kelola laporan harian Anda</p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Cari laporan..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
//                 />
//                 <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//               </div>
//               <select className="px-4 py-2 border text-gray-800 bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                 <option>Semua Status</option>
//                 <option>Pending</option>
//                 <option>Setujui</option>
//                 <option>Tolak</option>
//               </select>
//               <button
//                 onClick={handleExportReports}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
//               >
//                 <ArrowDownTrayIcon className="w-4 h-4" />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-6">
//           {filteredReports.length === 0 ? (
//             <div className="text-center py-8">
//               <p className="text-gray-500">Belum ada laporan yang disubmit.</p>
//               <p className="text-gray-400 text-sm mt-1">
//                 Submit laporan pertama Anda di atas.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {filteredReports.map((report) => (
//                 <div
//                   key={report.id}
//                   className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
//                 >
//                   <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-2">
//                         <h3 className="font-semibold text-gray-900">
//                           {report.location}
//                         </h3>
//                         <span className="text-gray-400">•</span>
//                         <span className="text-gray-600">{report.operator}</span>
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             report.status === "Submitted"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {report.status}
//                         </span>
//                       </div>
//                       <p className="text-gray-500 text-sm mb-4">
//                         {report.date} {report.time}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {report.flowRate && (
//                           <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                             <MagnifyingGlassIcon className="w-3 h-3" />
//                             Flow Rate: {report.flowRate} L/h
//                           </span>
//                         )}
//                         {report.volt && (
//                           <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                             <MagnifyingGlassIcon className="w-3 h-3" />
//                             Volt: {report.volt} V
//                           </span>
//                         )}
//                         {report.ampere && (
//                           <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
//                             <MagnifyingGlassIcon className="w-3 h-3" />
//                             Ampere: {report.ampere} A
//                           </span>
//                         )}
//                         {report.pHLevel && (
//                           <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
//                             <MagnifyingGlassIcon className="w-3 h-3" />
//                             pH: {report.pHLevel}
//                           </span>
//                         )}
//                       </div>
//                       {report.additionalNotes && (
//                         <p className="text-gray-700 mb-4">
//                           {report.additionalNotes}
//                         </p>
//                       )}
//                       <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                         <span>
//                           Agitator:{" "}
//                           <span className="font-medium">
//                             {report.agitatorStatus}
//                           </span>
//                         </span>
//                         <span>
//                           Settle:{" "}
//                           <span className="font-medium">
//                             {report.settleStatus}
//                           </span>
//                         </span>
//                         <span>
//                           Out Filter:{" "}
//                           <span className="font-medium">
//                             {report.outFilterStatus}
//                           </span>
//                         </span>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => openReportDetailModal(report)}
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//                     >
//                       <MagnifyingGlassIcon className="w-4 h-4" />
//                       Detail
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   const renderPresence = () => (
//     <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
//         <div className="flex-1">
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//             Attendance System
//           </h2>
//           <p className="text-gray-600 mt-1">
//             Mark your attendance with location and selfie verification
//           </p>
//         </div>
//         <div className="flex-shrink-0">
//           {!attendanceData.isCheckedIn ? (
//             <button
//               onClick={openCheckInModal}
//               className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
//             >
//               <CheckCircleIcon className="w-5 h-5" />
//               Check In Now
//             </button>
//           ) : !attendanceData.isCheckedOut ? (
//             <button
//               onClick={openCheckOutModal}
//               className="w-full lg:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
//             >
//               <CheckCircleIcon className="w-5 h-5" />
//               Check Out Now
//             </button>
//           ) : (
//             <div className="text-center px-4 py-3 bg-gray-100 text-gray-600 rounded-lg text-sm lg:text-base">
//               Attendance completed for today
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Today's Attendance Card */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
//         <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//           <h3 className="font-semibold text-lg text-gray-800">
//             Today's Attendance
//           </h3>
//         </div>
//         <div className="p-4 bg-white rounded-b-xl">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <ClockIcon className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-sm font-medium text-gray-600 mb-1">
//                     Check-in Time
//                   </h4>
//                   <p className="text-lg font-bold text-gray-900 mb-2 truncate">
//                     {attendanceData.checkInTime}
//                   </p>
//                   <span
//                     className={`inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
//                       attendanceData.status
//                     )}`}
//                   >
//                     {attendanceData.status}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <ClockIcon className="w-5 h-5 text-red-600" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-sm font-medium text-gray-600 mb-1">
//                     Check-out Time
//                   </h4>
//                   <p className="text-lg font-bold text-gray-900 mb-2 truncate">
//                     {attendanceData.checkOutTime}
//                   </p>
//                   {attendanceData.isCheckedOut ? (
//                     <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                       Completed
//                     </span>
//                   ) : (
//                     <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                       Not checked out
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg p-4 border border-gray-200">
//               <div className="flex items-start gap-3">
//                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <MapIcon className="w-5 h-5 text-blue-600" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="text-sm font-medium text-gray-600 mb-1">
//                     Location
//                   </h4>
//                   <p className="text-sm font-bold text-gray-900 mb-2 leading-tight break-words line-clamp-2">
//                     {attendanceData.location}
//                   </p>
//                   <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                     {attendanceData.location !== "Not located yet"
//                       ? "Verified"
//                       : "Not verified"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Attendance History */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//         <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//           <h3 className="font-semibold text-lg text-gray-800">
//             Attendance History
//           </h3>
//         </div>
//         <div className="p-4 bg-white rounded-b-xl">
//           {/* Mobile View */}
//           <div className="block lg:hidden space-y-4">
//             {attendanceHistory.map((record) => (
//               <div
//                 key={record.id}
//                 className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <p className="font-semibold text-gray-900">{record.date}</p>
//                     <p className="text-sm text-gray-600">{record.location}</p>
//                   </div>
//                   <span
//                     className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(
//                       record.approvalStatus
//                     )}`}
//                   >
//                     {record.approvalStatus === "pending" && "⏳ pending"}
//                     {record.approvalStatus === "approved" && "✓ approved"}
//                     {record.approvalStatus === "rejected" && "✗ rejected"}
//                   </span>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-3">
//                   <div>
//                     <p className="text-xs text-gray-500">Check In</p>
//                     <p className="text-sm font-medium text-gray-900">
//                       {record.checkIn}
//                     </p>
//                     <span
//                       className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
//                         record.checkInStatus
//                       )}`}
//                     >
//                       {record.checkInStatus}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Check Out</p>
//                     <p className="text-sm font-medium text-gray-900">
//                       {record.checkOut}
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => openDetailModal(record)}
//                   className="w-full flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium py-2 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
//                 >
//                   <EyeIcon className="w-4 h-4" />
//                   View Details
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Desktop View */}
//           <div className="hidden lg:block overflow-x-auto">
//             <table className="w-full min-w-[600px]">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Date
//                   </th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Check In
//                   </th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Check Out
//                   </th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Location
//                   </th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Status
//                   </th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {attendanceHistory.map((record) => (
//                   <tr
//                     key={record.id}
//                     className="border-b border-gray-100 hover:bg-gray-50"
//                   >
//                     <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
//                       {record.date}
//                     </td>
//                     <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
//                       <div>
//                         <span>{record.checkIn}</span>
//                         <span
//                           className={`block text-xs mt-1 ${
//                             record.checkInStatus === "On Time"
//                               ? "text-green-600"
//                               : "text-red-600"
//                           }`}
//                         >
//                           {record.checkInStatus}
//                         </span>
//                       </div>
//                     </td>
//                     <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
//                       {record.checkOut}
//                     </td>
//                     <td
//                       className="py-3 px-4 text-gray-900 text-sm max-w-[200px] truncate"
//                       title={record.location}
//                     >
//                       {record.location}
//                     </td>
//                     <td className="py-3 px-4">
//                       <span
//                         className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(
//                           record.approvalStatus
//                         )}`}
//                       >
//                         {record.approvalStatus === "pending" && "⏳ pending"}
//                         {record.approvalStatus === "approved" && "✓ approved"}
//                         {record.approvalStatus === "rejected" && "✗ rejected"}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4">
//                       <button
//                         onClick={() => openDetailModal(record)}
//                         className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap"
//                       >
//                         <EyeIcon className="w-4 h-4" />
//                         Detail
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {attendanceHistory.length === 0 && (
//             <div className="text-center py-8">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <CalendarDaysIcon className="w-8 h-8 text-gray-400" />
//               </div>
//               <p className="text-gray-500">No attendance records found.</p>
//               <p className="text-gray-400 text-sm mt-1">
//                 Your attendance history will appear here.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== RENDER HELPDESK ====================
//   const renderHelpDesk = () => (
//     <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
//         <div className="flex-1">
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//             Help Desk
//           </h2>
//           <p className="text-gray-600 mt-1">
//             Ajukan bantuan atau laporkan masalah
//           </p>
//         </div>
//         <div className="flex-shrink-0">
//           <button
//             onClick={() => setIsCreateModalOpen(true)}
//             className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//           >
//             <PlusIcon className="w-5 h-5" />
//             Buat Tiket
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6">
//         <div className="flex-1">
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
//             <div className="flex flex-col sm:flex-row gap-3 items-center">
//               <div className="flex-1 w-full">
//                 <div className="relative">
//                   <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Cari tiket..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//                   />
//                 </div>
//               </div>
//               <div className="flex gap-2 w-full sm:w-auto">
//                 <div className="relative" ref={statusDropdownRef}>
//                   <button
//                     onClick={() =>
//                       setIsStatusDropdownOpen(!isStatusDropdownOpen)
//                     }
//                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
//                   >
//                     <span className="truncate">{statusFilter}</span>
//                     <svg
//                       className="w-4 h-4 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>
//                   {isStatusDropdownOpen && (
//                     <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
//                       {statusOptions.map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => {
//                             setStatusFilter(option);
//                             setIsStatusDropdownOpen(false);
//                           }}
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
//                             option === statusFilter
//                               ? "bg-blue-50 text-blue-700"
//                               : ""
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <div className="relative" ref={priorityDropdownRef}>
//                   <button
//                     onClick={() =>
//                       setIsPriorityDropdownOpen(!isPriorityDropdownOpen)
//                     }
//                     className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
//                   >
//                     <span className="truncate">{priorityFilter}</span>
//                     <svg
//                       className="w-4 h-4 flex-shrink-0"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </button>
//                   {isPriorityDropdownOpen && (
//                     <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
//                       {priorityOptions.map((option) => (
//                         <button
//                           key={option}
//                           onClick={() => {
//                             setPriorityFilter(option);
//                             setIsPriorityDropdownOpen(false);
//                           }}
//                           className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
//                             option === priorityFilter
//                               ? "bg-blue-50 text-blue-700"
//                               : ""
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//             <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//               <h3 className="font-semibold text-lg text-gray-800">
//                 Daftar Tiket
//               </h3>
//             </div>
//             <div className="p-4">
//               {filteredTickets.map((ticket, index) => (
//                 <div key={ticket.id} className="mb-6 last:mb-0">
//                   <div className="py-4">
//                     <div className="flex items-start gap-3 mb-3">
//                       <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                         <span className="text-white text-xs font-bold">
//                           {index + 1}
//                         </span>
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h4 className="text-lg font-semibold text-gray-900">
//                               {ticket.title}
//                             </h4>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm text-gray-600 font-medium">
//                                 {ticket.ticketId}
//                               </span>
//                               <span className="text-gray-400">•</span>
//                               <span className="text-sm text-gray-600">
//                                 {ticket.assignee}
//                               </span>
//                               <span className="text-gray-400">•</span>
//                               <span className="text-sm text-gray-600">
//                                 {ticket.createdAt}
//                               </span>
//                             </div>
//                           </div>
//                           <span
//                             className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
//                               ticket.priority
//                             )}`}
//                           >
//                             {ticket.priority}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4 mb-3 ml-9">
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <UserIcon className="w-4 h-4 text-gray-400" />
//                         <span className="font-medium">{ticket.assignee}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-400" />
//                         <span>{ticket.site}</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-sm text-gray-600">
//                         <span className="font-medium">Kategori:</span>
//                         <span>{ticket.category}</span>
//                       </div>
//                     </div>
//                     <div className="ml-9">
//                       <p className="text-sm text-gray-600 mb-3">
//                         {ticket.description}
//                       </p>

//                       {/* Attachments */}
//                       {ticket.attachments && ticket.attachments.length > 0 && (
//                         <div className="mb-3">
//                           <p className="text-sm font-medium text-gray-700 mb-2">
//                             Attachments:
//                           </p>
//                           <div className="flex flex-wrap gap-2">
//                             {ticket.attachments.map((attachment, idx) => (
//                               <div
//                                 key={idx}
//                                 className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
//                               >
//                                 <DocumentTextIcon className="w-4 h-4 text-gray-600" />
//                                 <span className="text-sm text-gray-700">
//                                   {attachment.name}
//                                 </span>
//                                 <button className="text-blue-600 hover:text-blue-800 text-sm">
//                                   Download
//                                 </button>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {/* Solution if exists */}
//                       {ticket.solution && (
//                         <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
//                           <p className="text-sm font-medium text-green-800 mb-1">
//                             Solution:
//                           </p>
//                           <p className="text-sm text-green-700">
//                             {ticket.solution}
//                           </p>
//                         </div>
//                       )}

//                       <div className="flex justify-between items-center">
//                         <span
//                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTicketStatusColor(
//                             ticket.status
//                           )}`}
//                         >
//                           {ticket.status}
//                         </span>
//                         <div className="flex items-center gap-2">
//                           {ticket.status === "Open" && (
//                             <button
//                               onClick={() => openSolutionModal(ticket)}
//                               className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 text-sm"
//                             >
//                               <DocumentTextIcon className="w-4 h-4" />
//                               Provide Solution
//                             </button>
//                           )}
//                           <div className="text-xs text-gray-500">
//                             <span>Created: {ticket.createdAt}</span>
//                             {ticket.resolvedAt && (
//                               <span className="ml-2">
//                                 Resolved: {ticket.resolvedAt}
//                               </span>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {index < filteredTickets.length - 1 && (
//                     <hr className="border-gray-200 my-2" />
//                   )}
//                 </div>
//               ))}
//               {filteredTickets.length === 0 && (
//                 <div className="text-center py-8">
//                   <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <DocumentChartBarIcon className="w-8 h-8 text-gray-400" />
//                   </div>
//                   <p className="text-gray-500">Belum ada tiket bantuan</p>
//                   <p className="text-gray-400 text-sm mt-1">
//                     Tiket bantuan yang Anda buat akan muncul di sini
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL CHECK-IN ====================
//   const renderCheckInModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-md max-h-[85vh] flex flex-col">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">Check In</h2>
//             <button
//               onClick={() => {
//                 setIsCheckInModalOpen(false);
//                 stopCamera(false);
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1">
//             Complete the following steps to check in
//           </p>
//           {/* TAMBAHKAN BARIS INI */}
//           <p className="text-xs text-gray-500 mt-1">
//             * Must be within {ALLOWED_RADIUS_METERS} meters from company
//             location
//           </p>
//         </div>
//         <div className="flex-1 overflow-y-auto p-6">
//           {/* Step 1: Location */}
//           <div className="mb-6">
//             <div className="flex items-center gap-3 mb-3">
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center ${locationCaptured ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
//               >
//                 {locationCaptured ? (
//                   <CheckCircleIcon className="w-5 h-5" />
//                 ) : (
//                   <span className="font-bold">1</span>
//                 )}
//               </div>
//               <h3 className="font-semibold text-gray-800">Capture Location</h3>
//             </div>
//             <div className="ml-11">
//               <div className="bg-gray-50 p-3 rounded-lg mb-3">
//                 <p className="text-sm text-gray-600 mb-1">Current Location:</p>
//                 <p className="text-sm text-gray-900 font-medium break-words max-h-20 overflow-y-auto">
//                   {currentLocation}
//                 </p>
//               </div>
//               <button
//                 onClick={() => getCurrentLocation(false)}
//                 className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
//               >
//                 <MapPinIcon className="w-4 h-4" />
//                 {locationCaptured ? "Update Location" : "Get My Location"}
//               </button>
//             </div>
//           </div>

//           {/* Step 2: Selfie */}
//           <div>
//             <div className="flex items-center gap-3 mb-3">
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center ${selfieUploaded ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
//               >
//                 {selfieUploaded ? (
//                   <CheckCircleIcon className="w-5 h-5" />
//                 ) : (
//                   <span className="font-bold">2</span>
//                 )}
//               </div>
//               <h3 className="font-semibold text-gray-800">Take Selfie</h3>
//             </div>
//             <div className="ml-11">
//               {isCameraActive ? (
//                 <div className="space-y-4">
//                   <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
//                     <video
//                       ref={videoRefCheckIn}
//                       autoPlay
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => capturePhoto(false)}
//                       className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
//                     >
//                       Capture Photo
//                     </button>
//                     <button
//                       onClick={() => stopCamera(false)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : selfiePreview ? (
//                 <div className="space-y-4">
//                   <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
//                     <img
//                       src={selfiePreview}
//                       alt="Selfie preview"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => startCamera(false)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Retake Photo
//                     </button>
//                     <button
//                       onClick={() => triggerFileInput(false)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Upload Different
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <button
//                     onClick={() => startCamera(false)}
//                     className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm"
//                   >
//                     <CameraIcon className="w-4 h-4" />
//                     Open Camera
//                   </button>
//                   <button
//                     onClick={() => triggerFileInput(false)}
//                     className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
//                   >
//                     <ArrowUpTrayIcon className="w-4 h-4" />
//                     Upload Selfie
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         {/* Confirm Button - FIXED POSITION */}
//         <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
//           <button
//             onClick={handleConfirmCheckIn}
//             disabled={!locationCaptured || !selfieUploaded}
//             className={`w-full py-3 rounded-lg font-medium ${
//               !locationCaptured || !selfieUploaded
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-green-600 text-white hover:bg-green-700"
//             }`}
//           >
//             Confirm Check In
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL CHECK-OUT ====================
//   const renderCheckOutModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-md max-h-[85vh] flex flex-col">
//         <div className="flex-shrink-0 p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">Check Out</h2>
//             <button
//               onClick={() => {
//                 setIsCheckOutModalOpen(false);
//                 stopCamera(true);
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1 text-sm">
//             Complete the following steps to check out
//           </p>
//         </div>

//         <div className="flex-1 overflow-y-auto p-6">
//           {/* Step 1: Location */}
//           <div className="mb-6">
//             <div className="flex items-center gap-3 mb-3">
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center ${locationCapturedCheckOut ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
//               >
//                 {locationCapturedCheckOut ? (
//                   <CheckCircleIcon className="w-5 h-5" />
//                 ) : (
//                   <span className="font-bold">1</span>
//                 )}
//               </div>
//               <h3 className="font-semibold text-gray-800">Capture Location</h3>
//             </div>
//             <div className="ml-11">
//               <div className="bg-gray-50 p-3 rounded-lg mb-3">
//                 <p className="text-sm text-gray-600 mb-1">Current Location:</p>
//                 <p className="text-sm text-gray-900 font-medium break-words max-h-20 overflow-y-auto">
//                   {currentLocationCheckOut}
//                 </p>
//               </div>
//               <button
//                 onClick={() => getCurrentLocation(true)}
//                 className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
//               >
//                 <MapPinIcon className="w-4 h-4" />
//                 {locationCapturedCheckOut
//                   ? "Update Location"
//                   : "Get My Location"}
//               </button>
//             </div>
//           </div>

//           {/* Step 2: Selfie */}
//           <div>
//             <div className="flex items-center gap-3 mb-3">
//               <div
//                 className={`w-8 h-8 rounded-full flex items-center justify-center ${selfieUploadedCheckOut ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
//               >
//                 {selfieUploadedCheckOut ? (
//                   <CheckCircleIcon className="w-5 h-5" />
//                 ) : (
//                   <span className="font-bold">2</span>
//                 )}
//               </div>
//               <h3 className="font-semibold text-gray-800">Take Selfie</h3>
//             </div>
//             <div className="ml-11">
//               {isCameraActiveCheckOut ? (
//                 <div className="space-y-4">
//                   <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
//                     <video
//                       ref={videoRefCheckOut}
//                       autoPlay
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => capturePhoto(true)}
//                       className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
//                     >
//                       Capture Photo
//                     </button>
//                     <button
//                       onClick={() => stopCamera(true)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : selfiePreviewCheckOut ? (
//                 <div className="space-y-4">
//                   <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
//                     <img
//                       src={selfiePreviewCheckOut}
//                       alt="Selfie preview"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => startCamera(true)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Retake Photo
//                     </button>
//                     <button
//                       onClick={() => triggerFileInput(true)}
//                       className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
//                     >
//                       Upload Different
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <button
//                     onClick={() => startCamera(true)}
//                     className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm"
//                   >
//                     <CameraIcon className="w-4 h-4" />
//                     Open Camera
//                   </button>
//                   <button
//                     onClick={() => triggerFileInput(true)}
//                     className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
//                   >
//                     <ArrowUpTrayIcon className="w-4 h-4" />
//                     Upload Selfie
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Confirm Button - FIXED POSITION */}
//         <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
//           <button
//             onClick={handleConfirmCheckOut}
//             disabled={!locationCapturedCheckOut || !selfieUploadedCheckOut}
//             className={`w-full py-3 rounded-lg font-medium ${
//               !locationCapturedCheckOut || !selfieUploadedCheckOut
//                 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 : "bg-green-600 text-white hover:bg-green-700"
//             }`}
//           >
//             Confirm Check Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL DETAIL ATTENDANCE ====================
//   const renderDetailModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">
//               Attendance Details
//             </h2>
//             <button
//               onClick={() => setIsDetailModalOpen(false)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1">Date: {selectedAttendance?.date}</p>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* Basic Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">
//                 Check In Details
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Time:</span>
//                   <span className="font-medium">
//                     {selectedAttendance?.checkIn}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Status:</span>
//                   <span
//                     className={`font-medium ${selectedAttendance?.checkInStatus === "On Time" ? "text-green-600" : "text-red-600"}`}
//                   >
//                     {selectedAttendance?.checkInStatus}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Location:</span>
//                   <span className="font-medium text-right">
//                     {selectedAttendance?.checkInLocation}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">
//                 Check Out Details
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Time:</span>
//                   <span className="font-medium">
//                     {selectedAttendance?.checkOut}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Location:</span>
//                   <span className="font-medium text-right">
//                     {selectedAttendance?.checkOutLocation}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Approval Status */}
//           <div>
//             <h3 className="font-semibold text-gray-800 mb-3">
//               Approval Status
//             </h3>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-gray-600">Status:</span>
//                 <span
//                   className={`font-medium ${getApprovalStatusColor(selectedAttendance?.approvalStatus)} px-3 py-1 rounded-full text-sm`}
//                 >
//                   {selectedAttendance?.approvalStatus}
//                 </span>
//               </div>
//               {selectedAttendance?.approvedBy && (
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Approved by:</span>
//                   <span className="font-medium">
//                     {selectedAttendance?.approvedBy}
//                   </span>
//                 </div>
//               )}
//               {selectedAttendance?.approvedAt && (
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Approved at:</span>
//                   <span className="font-medium">
//                     {selectedAttendance?.approvedAt}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Selfies */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {selectedAttendance?.selfieCheckIn && (
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3">
//                   Check In Selfie
//                 </h3>
//                 <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
//                   <img
//                     src={selectedAttendance.selfieCheckIn}
//                     alt="Check-in selfie"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             )}
//             {selectedAttendance?.selfieCheckOut && (
//               <div>
//                 <h3 className="font-semibold text-gray-800 mb-3">
//                   Check Out Selfie
//                 </h3>
//                 <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
//                   <img
//                     src={selectedAttendance.selfieCheckOut}
//                     alt="Check-out selfie"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="p-6 border-t border-gray-200">
//           <button
//             onClick={() => setIsDetailModalOpen(false)}
//             className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL CREATE TICKET ====================
//   const renderCreateTicketModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">
//               Buat Tiket Bantuan Baru
//             </h2>
//             <button
//               onClick={() => {
//                 setIsCreateModalOpen(false);
//                 setFormErrors({});
//                 setAttachmentFiles([]);
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1">
//             Isi form berikut untuk mengajukan tiket bantuan
//           </p>
//         </div>
//         <div className="p-6 space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Site <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={newTicket.site}
//                 onChange={(e) =>
//                   setNewTicket({ ...newTicket, site: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//               >
//                 <option>IPAL Jakarta Pusat</option>
//                 <option>IPAL Jakarta Utara</option>
//                 <option>IPAL Jakarta Selatan</option>
//                 <option>IPAL Jakarta Barat</option>
//                 <option>IPAL Jakarta Timur</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Kategori <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={newTicket.category}
//                 onChange={(e) =>
//                   setNewTicket({ ...newTicket, category: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//               >
//                 {categoryOptions.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Prioritas <span className="text-red-500">*</span>
//               </label>
//               <select
//                 value={newTicket.priority}
//                 onChange={(e) =>
//                   setNewTicket({ ...newTicket, priority: e.target.value })
//                 }
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//               >
//                 <option value="Low">Low</option>
//                 <option value="Medium">Medium</option>
//                 <option value="High">High</option>
//               </select>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Judul Masalah <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Masalah pompa filter tidak berfungsi"
//               value={newTicket.title}
//               onChange={(e) => {
//                 setNewTicket({ ...newTicket, title: e.target.value });
//                 if (formErrors.title)
//                   setFormErrors({ ...formErrors, title: "" });
//               }}
//               className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white ${
//                 formErrors.title ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {formErrors.title && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Deskripsi Masalah <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Jelaskan detail masalah yang Anda alami... Contoh: Software monitoring tidak bisa connect ke server. Error terjadi sejak pagi hari. Sudah dicoba restart tapi belum berhasil."
//               value={newTicket.description}
//               onChange={(e) => {
//                 setNewTicket({ ...newTicket, description: e.target.value });
//                 if (formErrors.description)
//                   setFormErrors({ ...formErrors, description: "" });
//               }}
//               className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white ${
//                 formErrors.description ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {formErrors.description && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formErrors.description}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Lampiran (Optional)
//             </label>
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//               <input
//                 type="file"
//                 id="attachment-upload"
//                 multiple
//                 onChange={handleAttachmentUpload}
//                 className="hidden"
//               />
//               <label
//                 htmlFor="attachment-upload"
//                 className="cursor-pointer flex flex-col items-center"
//               >
//                 <PaperClipIcon className="w-8 h-8 text-gray-400 mb-2" />
//                 <p className="text-sm text-gray-600">
//                   Klik untuk upload file pendukung (foto, screenshot, dll.)
//                 </p>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Max 5MB per file. Format: JPG, PNG, PDF, DOC
//                 </p>
//               </label>

//               {/* Preview Attachments */}
//               {attachmentFiles.length > 0 && (
//                 <div className="mt-4">
//                   <p className="text-sm font-medium text-gray-700 mb-2">
//                     File yang akan diupload:
//                   </p>
//                   <div className="space-y-2">
//                     {attachmentFiles.map((file, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center justify-between bg-gray-50 p-2 rounded"
//                       >
//                         <div className="flex items-center gap-2">
//                           {file.type.startsWith("image/") ? (
//                             <PhotoIcon className="w-4 h-4 text-gray-500" />
//                           ) : (
//                             <DocumentTextIcon className="w-4 h-4 text-gray-500" />
//                           )}
//                           <span className="text-sm text-gray-700 truncate max-w-xs">
//                             {file.name}
//                           </span>
//                           <span className="text-xs text-gray-500">
//                             ({(file.size / 1024).toFixed(1)} KB)
//                           </span>
//                         </div>
//                         <button
//                           type="button"
//                           onClick={() => removeAttachment(index)}
//                           className="text-red-500 hover:text-red-700"
//                         >
//                           <XMarkIcon className="w-4 h-4" />
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="p-6 border-t border-gray-200 flex gap-3">
//           <button
//             onClick={() => {
//               setIsCreateModalOpen(false);
//               setFormErrors({});
//               setAttachmentFiles([]);
//             }}
//             className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
//           >
//             Batal
//           </button>
//           <button
//             onClick={handleCreateTicket}
//             className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
//           >
//             <PlusIcon className="w-5 h-5" />
//             Ajukan Tiket
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== SOLUTION MODAL ====================
//   const renderSolutionModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">
//               Provide Solution for the Reported Problem
//             </h2>
//             <button
//               onClick={() => {
//                 setIsSolutionModalOpen(false);
//                 setSolutionText("");
//                 setSolutionStatus("Open");
//                 setSelectedTicketForSolution(null);
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1">
//             Ticket #{selectedTicketForSolution?.ticketId}
//           </p>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* Ticket Information */}
//           <div className="bg-gray-50 rounded-lg p-4">
//             <h3 className="font-semibold text-lg text-gray-800 mb-3">
//               Ticket Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">Ticket ID</p>
//                 <p className="font-medium text-gray-900">
//                   {selectedTicketForSolution?.ticketId}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Submitted Date</p>
//                 <p className="font-medium text-gray-900">
//                   {selectedTicketForSolution?.createdAt} at 11:20
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Operator</p>
//                 <p className="font-medium text-gray-900">
//                   {selectedTicketForSolution?.assignee}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Site</p>
//                 <p className="font-medium text-gray-900">
//                   {selectedTicketForSolution?.site}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Priority</p>
//                 <span
//                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(selectedTicketForSolution?.priority)}`}
//                 >
//                   {selectedTicketForSolution?.priority}
//                 </span>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Category</p>
//                 <p className="font-medium text-gray-900">
//                   {selectedTicketForSolution?.category}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Problem Description */}
//           <div>
//             <h3 className="font-semibold text-lg text-gray-800 mb-3">
//               Problem Description
//             </h3>
//             <div className="bg-gray-50 rounded-lg p-4">
//               <p className="text-gray-700">
//                 {selectedTicketForSolution?.description}
//               </p>
//             </div>
//           </div>

//           {/* Attachments */}
//           {selectedTicketForSolution?.attachments &&
//             selectedTicketForSolution.attachments.length > 0 && (
//               <div>
//                 <h3 className="font-semibold text-lg text-gray-800 mb-3">
//                   Attachments
//                 </h3>
//                 <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <PhotoIcon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">
//                       {selectedTicketForSolution.attachments[0].name}
//                     </p>
//                     <p className="text-sm text-gray-600">Image</p>
//                   </div>
//                   <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
//                     Download
//                   </button>
//                 </div>
//               </div>
//             )}

//           {/* Provide Solution */}
//           <div>
//             <h3 className="font-semibold text-lg text-gray-800 mb-3">
//               Provide Solution
//             </h3>

//             {/* Status Selection */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Status
//               </label>
//               <div className="grid grid-cols-3 gap-2">
//                 <button
//                   onClick={() => setSolutionStatus("Open")}
//                   className={`px-4 py-2 rounded-lg border text-sm font-medium ${
//                     solutionStatus === "Open"
//                       ? "bg-blue-50 border-blue-500 text-blue-700"
//                       : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Open
//                 </button>
//                 <button
//                   onClick={() => setSolutionStatus("Pending")}
//                   className={`px-4 py-2 rounded-lg border text-sm font-medium ${
//                     solutionStatus === "Pending"
//                       ? "bg-yellow-50 border-yellow-500 text-yellow-700"
//                       : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Pending
//                 </button>
//                 <button
//                   onClick={() => setSolutionStatus("Resolved")}
//                   className={`px-4 py-2 rounded-lg border text-sm font-medium ${
//                     solutionStatus === "Resolved"
//                       ? "bg-green-50 border-green-500 text-green-700"
//                       : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   Resolved
//                 </button>
//               </div>
//             </div>

//             {/* Solution Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Solution / Response
//               </label>
//               <textarea
//                 rows={6}
//                 placeholder="Enter your solution, instructions, or request for more information..."
//                 value={solutionText}
//                 onChange={(e) => setSolutionText(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white"
//               />
//               <p className="text-sm text-gray-500 mt-1">
//                 Provide clear instructions or solution. If more information is
//                 needed from operator, explain what is required.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 border-t border-gray-200 flex gap-3">
//           <button
//             onClick={() => {
//               setIsSolutionModalOpen(false);
//               setSolutionText("");
//               setSolutionStatus("Open");
//               setSelectedTicketForSolution(null);
//             }}
//             className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmitSolution}
//             className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
//           >
//             <CheckCircleIcon className="w-5 h-5" />
//             Submit Solution
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== RENDER REPORT DETAIL MODAL ====================
//   const renderReportDetailModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//         <div className="p-6 border-b border-gray-200">
//           <div className="flex items-center justify-between">
//             <h2 className="text-xl font-bold text-gray-900">Report Details</h2>
//             <button
//               onClick={() => setIsReportDetailModalOpen(false)}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>
//           <p className="text-gray-600 mt-1">
//             Date: {selectedReport?.date} | Time: {selectedReport?.time}
//           </p>
//         </div>
//         <div className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">
//                 Report Information
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Operator:</span>
//                   <span className="font-medium">
//                     {selectedReport?.operator}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Location:</span>
//                   <span className="font-medium">
//                     {selectedReport?.location}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Status:</span>
//                   <span
//                     className={`font-medium ${selectedReport?.status === "Submitted" ? "text-green-600" : "text-yellow-600"}`}
//                   >
//                     {selectedReport?.status}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-3">
//                 Water Parameters
//               </h3>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">pH Level:</span>
//                   <span className="font-medium">{selectedReport?.pHLevel}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Flow Rate:</span>
//                   <span className="font-medium">
//                     {selectedReport?.flowRate} L/h
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">TDS:</span>
//                   <span className="font-medium">{selectedReport?.tds} ppm</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">EC:</span>
//                   <span className="font-medium">
//                     {selectedReport?.ec} μS/cm
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-6">
//             <h3 className="font-semibold text-gray-800 mb-3">
//               Additional Notes
//             </h3>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <p className="text-gray-700">{selectedReport?.additionalNotes}</p>
//             </div>
//           </div>
//           {selectedReport?.uploadedFiles &&
//             selectedReport.uploadedFiles.length > 0 && (
//               <div className="mt-6">
//                 <h3 className="font-semibold text-gray-800 mb-3">Photos</h3>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                   {selectedReport.uploadedFiles.map((file, index) => (
//                     <div
//                       key={index}
//                       className="relative h-40 rounded-lg overflow-hidden border border-gray-200"
//                     >
//                       <img
//                         src={URL.createObjectURL(file)}
//                         alt={`Report photo ${index + 1}`}
//                         className="w-full h-full object-cover cursor-pointer hover:opacity-90"
//                         onClick={() => openImageModal(file)}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//         </div>
//         <div className="p-6 border-t border-gray-200">
//           <button
//             onClick={() => setIsReportDetailModalOpen(false)}
//             className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== RENDER IMAGE MODAL ====================
//   const renderImageModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
//       <div className="relative w-full max-w-4xl max-h-[90vh]">
//         <button
//           onClick={() => setIsImageModalOpen(false)}
//           className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
//         >
//           <XMarkIcon className="w-8 h-8" />
//         </button>
//         <img
//           src={URL.createObjectURL(selectedImage)}
//           alt="Full size"
//           className="w-full h-auto max-h-[80vh] object-contain"
//         />
//       </div>
//     </div>
//   );

//   // ==================== ARROW UP TRAY ICON (missing import) ====================
//   const ArrowUpTrayIcon = (props) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={1.5}
//       stroke="currentColor"
//       className="w-6 h-6"
//       {...props}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
//       />
//     </svg>
//   );

//   // ==================== MAIN RENDER ====================
//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-200 ease-in-out ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0`}
//       >
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
//             className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5 text-gray-800" />
//           </button>
//         </div>

//         <nav className="p-4 flex-1">
//           <ul className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => {
//                       setActiveMenu(item.id);
//                       setIsSidebarOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
//                       activeMenu === item.id
//                         ? "bg-cyan-500 text-cyan-100 border-cyan-900"
//                         : "text-gray-800 hover:bg-cyan-100"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5 text-gray-800" />
//                     {item.name}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* User Badge */}
//         <div className="p-4 mt-auto">
//           <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
//         flex items-center justify-center text-white font-bold text-lg shadow-md"
//               >
//                 {user.initial}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="font-semibold text-gray-900 truncate text-sm">
//                   {user.name}
//                 </p>
//                 <p className="text-gray-600 truncate text-xs mt-0.5">
//                   {user.email}
//                 </p>
//                 <div className="flex items-center gap-1 mt-1">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <p className="text-gray-500 text-xs truncate">{user.role}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t border-gray-200 mt-3 pt-3">
//               <div className="flex items-center justify-between text-xs text-gray-600">
//                 <span>{user.site}</span>
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
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="lg:hidden p-2 text-gray-800 hover:text-teal-600"
//               >
//                 <Bars3Icon className="w-6 h-6 text-gray-800" />
//               </button>
//               <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//                 {menuItems.find((m) => m.id === activeMenu)?.name}
//               </h1>
//             </div>
//             <div className="flex items-center gap-4">
//               {/* Notifikasi */}
//               <div ref={notificationRef} className="relative">
//                 <button
//                   onClick={() => setIsNotificationOpen(!isNotificationOpen)}
//                   className="p-2 text-gray-800 hover:text-teal-600 relative transition-colors"
//                 >
//                   <BellIcon className="w-6 h-6 text-gray-800" />
//                   {getUnreadNotificationsCount() > 0 && (
//                     <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1 border-2 border-white font-medium">
//                       {getUnreadNotificationsCount() > 99
//                         ? "99+"
//                         : getUnreadNotificationsCount()}
//                     </span>
//                   )}
//                 </button>
//                 {isNotificationOpen && (
//                   <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999]">
//                     <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
//                       <h3 className="font-semibold text-gray-800">
//                         Notifikasi
//                       </h3>
//                       <button
//                         onClick={markAllNotificationsAsRead}
//                         className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         Tandai semua dibaca
//                       </button>
//                     </div>
//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="text-center py-8">
//                           <BellIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                           <p className="text-gray-500">Tidak ada notifikasi</p>
//                         </div>
//                       ) : (
//                         notifications.map((notification) => (
//                           <div
//                             key={notification.id}
//                             className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
//                               !notification.read ? "bg-blue-50" : ""
//                             }`}
//                             onClick={() =>
//                               handleNotificationClick(notification)
//                             }
//                           >
//                             <div className="flex justify-between items-start mb-1">
//                               <p
//                                 className={`font-medium ${
//                                   notification.read
//                                     ? "text-gray-600"
//                                     : "text-gray-900"
//                                 }`}
//                               >
//                                 {notification.title}
//                               </p>
//                               <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
//                                 {notification.time}
//                               </span>
//                             </div>
//                             <p className="text-sm text-gray-600 mb-2">
//                               {notification.message}
//                             </p>
//                             <div className="flex items-center justify-between">
//                               <div className="flex items-center">
//                                 <div
//                                   className={`w-2 h-2 rounded-full mr-2 ${
//                                     notification.type === "success"
//                                       ? "bg-green-500"
//                                       : notification.type === "warning"
//                                         ? "bg-yellow-500"
//                                         : "bg-blue-500"
//                                   }`}
//                                 ></div>
//                                 <span className="text-xs text-gray-500">
//                                   {notification.type === "success"
//                                     ? "Disetujui"
//                                     : notification.type === "warning"
//                                       ? "Perhatian"
//                                       : "Informasi"}
//                                 </span>
//                               </div>
//                               {!notification.read && (
//                                 <span className="text-xs text-blue-600 font-medium">
//                                   Baru
//                                 </span>
//                               )}
//                             </div>
//                           </div>
//                         ))
//                       )}
//                     </div>
//                     <div className="px-4 py-2 border-t border-gray-200">
//                       <button
//                         onClick={handleViewAllNotifications}
//                         className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1 font-medium"
//                       >
//                         Lihat Semua Notifikasi
//                       </button>
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
//                   <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
//                     {user.initial}
//                   </div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${
//                       dropdownOpen ? "rotate-180" : "rotate-0"
//                     }`}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
//                     {/* User Info Section */}
//                     <div className="px-4 py-3 border-b border-gray-200">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
//                           {user.initial}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="font-semibold text-gray-900 truncate">
//                             {user.name}
//                           </p>
//                           <p className="text-sm text-gray-600 truncate">
//                             {user.email}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {user.role} • {user.site}
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <button
//                       onClick={async () => {
//                         setDropdownOpen(false);
//                         await fetch("/api/auth/logout", { method: "POST" });
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm"
//                     >
//                       <ArrowRightOnRectangleIcon className="w-4 h-4 text-red-600" />
//                       Log Out
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         {activeMenu === "dashboard" && renderDashboard()}
//         {activeMenu === "reports" && renderDailyReport()}
//         {activeMenu === "presensi" && renderPresence()}
//         {activeMenu === "help" && renderHelpDesk()}
//       </div>

//       {/* Modals */}
//       {isCheckInModalOpen && renderCheckInModal()}
//       {isCheckOutModalOpen && renderCheckOutModal()}
//       {isDetailModalOpen && selectedAttendance && renderDetailModal()}
//       {isCreateModalOpen && renderCreateTicketModal()}
//       {isReportDetailModalOpen && selectedReport && renderReportDetailModal()}
//       {isImageModalOpen && renderImageModal()}
//       {isSolutionModalOpen &&
//         selectedTicketForSolution &&
//         renderSolutionModal()}

//       {/* Canvas untuk capture foto (hidden) */}
//       <canvas ref={canvasRefCheckIn} className="hidden" />
//       <canvas ref={canvasRefCheckOut} className="hidden" />
//     </div>
//   );
// }
//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS
//INI JANGAN DIHAPUS





















































































//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  ChartBarIcon,
  MapPinIcon,
  UsersIcon,
  DocumentChartBarIcon,
  CogIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  DocumentTextIcon,
  CameraIcon,
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  ExclamationCircleIcon,
  MapIcon,
  EyeIcon,
  PhotoIcon,
  PlusIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  ArrowDownTrayIcon,
  PaperClipIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";


// BAGIAN GEOLOKASI OR GEOLOCATION
//rumus geolokasi
// Tambahkan kode ini setelah baris import dan sebelum "export default function Operator()"

// ==================== KONSTANTA GEO-LOCATION ====================
const COMPANY_COORDINATES = {
  latitude: -7.2375495, // GANTI DENGAN KOORDINAT PERUSAHAAN ANDA
  longitude: 112.7271187, // GANTI DENGAN KOORDINAT PERUSAHAAN ANDA
};
const ALLOWED_RADIUS_METERS = 100; // Radius 100 meter
// ==================== KONSTANTA GEO-LOCATION ====================

// Fungsi untuk menghitung jarak antara dua koordinat (rumus Haversine)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Radius bumi dalam meter
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Jarak dalam meter
};
// Fungsi untuk menghitung jarak antara dua koordinat (rumus Haversine)
// BAGIAN GEOLOKASI OR GEOLOCATION


// Fungsi untuk mengecek permission kamera
const checkCameraPermission = async () => {
  try {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("Browser tidak mendukung akses kamera");
    }

    // Cek permission tanpa langsung membuka kamera
    const permissionStatus = await navigator.permissions.query({
      name: "camera",
    });

    if (permissionStatus.state === "denied") {
      throw new Error(
        "Akses kamera ditolak. Harap izinkan akses kamera di pengaturan browser."
      );
    }

    return true;
  } catch (error) {
    console.error("Camera permission check failed:", error);
    return false;
  }
};
//rumus geolokasi

export default function Operator() {
  const [selectedRange, setSelectedRange] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);

  // ==================== DATA USER ====================
  const [user, setUser] = useState({
    name: "Budi Santoso",
    email: "budi.santoso@email.com",
    role: "Operator",
    site: "Jakarta Utara - Site A",
    initial: "B",
  });

  // Refs untuk berbagai keperluan
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const priorityDropdownRef = useRef(null);
  const videoRefCheckIn = useRef(null);
  const videoRefCheckOut = useRef(null);
  const canvasRefCheckIn = useRef(null);
  const canvasRefCheckOut = useRef(null);

  // State untuk Notifikasi
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Laporan Disetujui",
      message: "Laporan harian 10 Nov 2024 telah disetujui oleh Admin",
      time: "2 jam yang lalu",
      type: "success",
      read: false,
    },
    {
      id: 2,
      title: "Absensi Perlu Konfirmasi",
      message: "Absensi tanggal 9 Nov 2024 menunggu approval",
      time: "1 hari yang lalu",
      type: "warning",
      read: false,
    },
    {
      id: 3,
      title: "Tiket Baru Direspons",
      message: "Tiket #001 telah direspons oleh technical support",
      time: "3 hari yang lalu",
      type: "info",
      read: true,
    },
    {
      id: 4,
      title: "Pemeliharaan Rutin",
      message: "Jadwal pemeliharaan minggu depan telah ditetapkan",
      time: "5 hari yang lalu",
      type: "info",
      read: false,
    },
  ]);

  // State untuk Dashboard
  const [dashboardData, setDashboardData] = useState({
    reportsSubmitted: 0,
    attendanceRate: "0%",
    pHLevel: "0.0",
    flowRate: "0 L/h",
    tds: "0 ppm",
    ec: "0 μS/cm",
  });

  const [pHData, setPHData] = useState([]);
  const [flowRateData, setFlowRateData] = useState([]);

  // State untuk Daily Report
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    pHLevel: "",
    flowRate: "",
    volt: "",
    ampere: "",
    tds: "",
    ec: "",
    agitatorStatus: "Normal",
    settleStatus: "Normal",
    outFilterStatus: "Normal",
    additionalNotes: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [reports, setReports] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportDetailModalOpen, setIsReportDetailModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // State untuk Presence
  const [attendanceData, setAttendanceData] = useState({
    checkInTime: "--:--",
    checkOutTime: "--:--",
    location: "Not located yet",
    status: "Not Checked In",
    isCheckedIn: false,
    isCheckedOut: false,
  });

  const [attendanceHistory, setAttendanceHistory] = useState([
    {
      id: 1,
      date: "2025-01-27",
      checkIn: "08:00 AM",
      checkOut: "16:00 PM",
      location: "Jakarta Utara - Site A",
      status: "approved",
      approvalStatus: "approved",
      checkInStatus: "On Time",
      checkInLocation: "Lat: -6.123456, Long: 106.123456",
      checkOutLocation: "Lat: -6.123456, Long: 106.123456",
      selfieCheckIn: null,
      selfieCheckOut: null,
      approvedBy: "Admin",
      approvedAt: "2025-01-27 08:30 AM",
    },
  ]);

  // State untuk modal check-in/check-out
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  const [locationCaptured, setLocationCaptured] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(
    "Click to get location"
  );
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState(null);

  const [locationCapturedCheckOut, setLocationCapturedCheckOut] =
    useState(false);
  const [selfieUploadedCheckOut, setSelfieUploadedCheckOut] = useState(false);
  const [selfiePreviewCheckOut, setSelfiePreviewCheckOut] = useState(null);
  const [currentLocationCheckOut, setCurrentLocationCheckOut] = useState(
    "Click to get location"
  );
  const [isCameraActiveCheckOut, setIsCameraActiveCheckOut] = useState(false);
  const [streamCheckOut, setStreamCheckOut] = useState(null);

  // State untuk Help Desk
  const [tickets, setTickets] = useState([
    {
      id: 1,
      ticketId: "#T001",
      title: "Masalah Pompa Filter",
      priority: "High",
      status: "Open",
      assignee: "Budi Santoso",
      site: "IPAL Jakarta Pusat",
      description: "Pompa filter site Jakarta mengalami penurunan tekanan",
      createdAt: "2024-01-15",
      category: "Technical",
      resolvedAt: null,
      attachments: [],
      solution: "",
    },
    {
      id: 4,
      ticketId: "#T004",
      title: "Software monitoring tidak bisa connect ke server",
      priority: "High",
      status: "Open",
      assignee: "Budi Santoso",
      site: "Jakarta Utara - Site A",
      description:
        "Software monitoring tidak bisa connect ke server. Error terjadi sejak pagi hari. Sudah dicoba restart tapi belum berhasil.",
      createdAt: "2025-01-27",
      category: "Software",
      resolvedAt: null,
      attachments: [
        { name: "error_screenshot.png", type: "image/png", url: "#" },
      ],
      solution: "",
    },
  ]);

  // State untuk Help Desk
  const [newTicket, setNewTicket] = useState({
    site: user.site,
    category: "Technical",
    title: "",
    description: "",
    priority: "Medium",
    attachments: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const [priorityFilter, setPriorityFilter] = useState("Semua Prioritas");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [attachmentFiles, setAttachmentFiles] = useState([]);

  // State untuk Solution Modal
  const [isSolutionModalOpen, setIsSolutionModalOpen] = useState(false);
  const [selectedTicketForSolution, setSelectedTicketForSolution] =
    useState(null);
  const [solutionText, setSolutionText] = useState("");
  const [solutionStatus, setSolutionStatus] = useState("Open");

  // Menu Items
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
    { id: "presensi", name: "Presence", icon: MapPinIcon },
    { id: "help", name: "Help Desk", icon: CogIcon },
  ];

  // ==================== FUNGSI NOTIFIKASI ====================
  const markNotificationAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
    setIsNotificationOpen(false);
  };

  const getUnreadNotificationsCount = () => {
    return notifications.filter((notif) => !notif.read).length;
  };

  const handleViewAllNotifications = () => {
    setIsNotificationOpen(false);
    alert("Fitur Lihat Semua Notifikasi akan ditampilkan di sini");
  };

  const handleNotificationClick = (notification) => {
    markNotificationAsRead(notification.id);

    switch (notification.type) {
      case "success":
        setActiveMenu("reports");
        break;
      case "warning":
        setActiveMenu("presensi");
        break;
      case "info":
        setActiveMenu("help");
        break;
      default:
        setActiveMenu("dashboard");
    }

    setIsNotificationOpen(false);
  };

  // ==================== FUNGSI SINKRONISASI DATA ====================
  const updateDashboardData = () => {
    const submittedReports = reports.filter(
      (report) => report.status === "Submitted"
    );
    const latestReport = submittedReports[0];

    setDashboardData((prev) => ({
      ...prev,
      reportsSubmitted: submittedReports.length,
      pHLevel: latestReport ? latestReport.pHLevel || "0.0" : "0.0",
      flowRate: latestReport ? `${latestReport.flowRate || "0"} L/h` : "0 L/h",
      tds: latestReport ? `${latestReport.tds || "0"} ppm` : "0 ppm",
      ec: latestReport ? `${latestReport.ec || "0"} μS/cm` : "0 μS/cm",
      attendanceRate:
        attendanceHistory.filter((att) => att.approvalStatus === "approved")
          .length > 0
          ? "98%"
          : "0%",
    }));

    if (submittedReports.length > 0) {
      const latestReports = submittedReports.slice(0, 7);

      const newPHData = latestReports.map((report) => {
        const reportDate = new Date(report.date);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[reportDate.getDay()];

        return {
          day: dayName,
          value: parseFloat(report.pHLevel) || 0,
        };
      });

      const newFlowRateData = latestReports.map((report) => {
        const reportDate = new Date(report.date);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[reportDate.getDay()];

        return {
          day: dayName,
          value: parseInt(report.flowRate) || 0,
        };
      });

      setPHData(newPHData);
      setFlowRateData(newFlowRateData);
    } else {
      setPHData([]);
      setFlowRateData([]);
    }
  };

  // Effects
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setIsStatusDropdownOpen(false);
      }
      if (
        priorityDropdownRef.current &&
        !priorityDropdownRef.current.contains(event.target)
      ) {
        setIsPriorityDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      if (streamCheckOut) {
        streamCheckOut.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream, streamCheckOut]);

  useEffect(() => {
    updateDashboardData();
  }, [reports, attendanceHistory, tickets]);

  // ==================== DASHBOARD FUNCTIONS ====================
  const handleQuickAction = (action) => {
    switch (action) {
      case "submitReport":
        setActiveMenu("reports");
        break;
      case "recordReadings":
        const now = new Date();
        const today = now.toISOString().split("T")[0];
        const time = now.toTimeString().slice(0, 5);

        setFormData((prev) => ({
          ...prev,
          date: today,
          time: time,
          pHLevel: dashboardData.pHLevel.replace(" L/h", ""),
          flowRate: dashboardData.flowRate.replace(" L/h", ""),
          tds: dashboardData.tds.replace(" ppm", ""),
          ec: dashboardData.ec.replace(" μS/cm", ""),
        }));
        setActiveMenu("reports");

        setTimeout(() => {
          document
            .getElementById("date")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        break;
      case "checkIn":
        if (!attendanceData.isCheckedIn) {
          openCheckInModal();
        }
        break;
      case "checkOut":
        if (attendanceData.isCheckedIn && !attendanceData.isCheckedOut) {
          openCheckOutModal();
        }
        break;
      default:
        break;
    }
  };

  // ==================== DAILY REPORT FUNCTIONS ====================
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date.trim()) newErrors.date = "Tanggal harus diisi";
    if (!formData.time.trim()) newErrors.time = "Waktu harus diisi";
    if (!formData.pHLevel.trim()) newErrors.pHLevel = "pH Level harus diisi";
    if (!formData.flowRate.trim()) newErrors.flowRate = "Flow Rate harus diisi";
    if (!formData.volt.trim()) newErrors.volt = "Volt harus diisi";
    if (!formData.ampere.trim()) newErrors.ampere = "Ampere harus diisi";
    if (!formData.tds.trim()) newErrors.tds = "TDS harus diisi";
    if (!formData.ec.trim()) newErrors.ec = "EC harus diisi";
    if (!formData.additionalNotes.trim())
      newErrors.additionalNotes = "Catatan tambahan harus diisi";

    if (formData.pHLevel && isNaN(parseFloat(formData.pHLevel))) {
      newErrors.pHLevel = "pH Level harus berupa angka";
    }
    if (formData.flowRate && isNaN(parseFloat(formData.flowRate))) {
      newErrors.flowRate = "Flow Rate harus berupa angka";
    }
    if (formData.volt && isNaN(parseFloat(formData.volt))) {
      newErrors.volt = "Volt harus berupa angka";
    }
    if (formData.ampere && isNaN(parseFloat(formData.ampere))) {
      newErrors.ampere = "Ampere harus berupa angka";
    }
    if (formData.tds && isNaN(parseFloat(formData.tds))) {
      newErrors.tds = "TDS harus berupa angka";
    }
    if (formData.ec && isNaN(parseFloat(formData.ec))) {
      newErrors.ec = "EC harus berupa angka";
    }

    if (uploadedFiles.length === 0) {
      newErrors.files = "Minimal 1 foto harus diupload";
    }

    return newErrors;
  };

  const handleSubmitReport = () => {
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      const firstErrorField = Object.keys(formErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(async () => {
      const newReport = {
        id: Date.now(),
        ...formData,
        uploadedFiles: [...uploadedFiles],
        timestamp: new Date().toISOString(),
        location: user.site,
        operator: user.name,
        status: "Submitted",
      };

      setReports((prev) => [newReport, ...prev]);
      setFormData({
        date: "",
        time: "",
        pHLevel: "",
        flowRate: "",
        volt: "",
        ampere: "",
        tds: "",
        ec: "",
        agitatorStatus: "Normal",
        settleStatus: "Normal",
        outFilterStatus: "Normal",
        additionalNotes: "",
      });
      setUploadedFiles([]);
      setErrors({});
      setIsSubmitting(false);

      updateDashboardData();

      setNotifications((prev) => [
        {
          id: Date.now(),
          title: "Laporan Berhasil Disubmit",
          message: `Laporan harian ${formData.date} telah berhasil disubmit`,
          time: "Baru saja",
          type: "success",
          read: false,
        },
        ...prev,
      ]);
      
      alert("Laporan berhasil disubmit!");
    }, 1000);
  };

  const createReport = async (request) => {
    const formData  = new FormData();

    for(const name in request) {
      formData.append(name, request[name]);
    }


    try {
      const res = await fetch("/api/operator/report", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.error || "Failed to create site");
        return;
      }
    } catch (err) {
      console.log(`${err.message}`);
    }
  };

  const handleSaveDraft = () => {
    if (!formData.date || !formData.time) {
      setErrors({
        date: !formData.date ? "Tanggal harus diisi untuk draft" : "",
        time: !formData.time ? "Waktu harus diisi untuk draft" : "",
      });
      return;
    }

    const draftReport = {
      id: Date.now(),
      ...formData,
      uploadedFiles: [...uploadedFiles],
      timestamp: new Date().toISOString(),
      location: user.site,
      operator: user.name,
      status: "Draft",
    };

    setReports((prev) => [draftReport, ...prev]);
    updateDashboardData();
    alert("Laporan berhasil disimpan sebagai draft!");
  };

  const handleDateIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  const handleTimeIconClick = () => {
    if (timeInputRef.current) {
      timeInputRef.current.showPicker();
    }
  };

  const handleContainerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(files);
    console.log(files)

    if (files.length > 0 && errors.files) {
      setErrors((prev) => ({
        ...prev,
        files: "",
      }));
    }
  };

  const handleExportReports = () => {
    if (reports.length === 0) {
      alert("Tidak ada data laporan untuk di-export!");
      return;
    }

    const headers = [
      "Tanggal",
      "Waktu",
      "pH Level",
      "Flow Rate",
      "Volt",
      "Ampere",
      "TDS",
      "EC",
      "Status",
      "Lokasi",
    ];
    const csvData = reports.map((report) => [
      report.date,
      report.time,
      report.pHLevel,
      report.flowRate,
      report.volt,
      report.ampere,
      report.tds,
      report.ec,
      report.status,
      report.location,
    ]);

    const csvContent = [headers, ...csvData]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `laporan-ipal-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert("Laporan berhasil di-export!");
  };

  const openReportDetailModal = (report) => {
    setSelectedReport(report);
    setIsReportDetailModalOpen(true);
  };

  const openImageModal = (imageFile) => {
    setSelectedImage(imageFile);
    setIsImageModalOpen(true);
  };

  const filteredReports = reports.filter(
    (report) =>
      report.additionalNotes
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ==================== PRESENCE FUNCTIONS ====================
  const openDetailModal = (attendance) => {
    setSelectedAttendance(attendance);
    setIsDetailModalOpen(true);
  };

 const getCurrentLocation = (isCheckOut = false) => {
  // Mapping site ke koordinat yang sudah ditentukan
  const siteCoordinates = {
    "Jakarta Utara - Site A": { 
      name: "Jakarta Utara - Site A", 
      lat: -6.123456, 
      lng: 106.123456 
    },
    "Jakarta Utara - Site B": { 
      name: "Jakarta Utara - Site B", 
      lat: -6.234567, 
      lng: 106.234567 
    },
    "Jakarta Utara - Site C": { 
      name: "Jakarta Utara - Site C", 
      lat: -6.345678, 
      lng: 106.345678 
    },
    "IPAL Jakarta Pusat": { 
      name: "IPAL Jakarta Pusat", 
      lat: -6.181818, 
      lng: 106.818181 
    },
    "IPAL Jakarta Utara": { 
      name: "IPAL Jakarta Utara", 
      lat: -6.123456, 
      lng: 106.123456 
    },
    "IPAL Jakarta Selatan": { 
      name: "IPAL Jakarta Selatan", 
      lat: -6.261626, 
      lng: 106.810623 
    },
    "IPAL Jakarta Barat": { 
      name: "IPAL Jakarta Barat", 
      lat: -6.167347, 
      lng: 106.758987 
    },
    "IPAL Jakarta Timur": { 
      name: "IPAL Jakarta Timur", 
      lat: -6.225013, 
      lng: 106.900146 
    }
  };


   // Gunakan site dari user, default ke "Jakarta Utara - Site A" jika tidak ditemukan
  const userSite = user.site || "Jakarta Utara - Site A";
  const siteData = siteCoordinates[userSite] || siteCoordinates["Jakarta Utara - Site A"];
  
  const locationString = `${siteData.name} (Lat: ${siteData.lat.toFixed(6)}, Long: ${siteData.lng.toFixed(6)})`;





    if (isCheckOut) {
      setCurrentLocationCheckOut("Getting location...");
    } else {
      setCurrentLocation("Getting location...");
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Hitung jarak dari lokasi perusahaan
        const distance = calculateDistance(
          latitude,
          longitude,
          COMPANY_COORDINATES.latitude,
          COMPANY_COORDINATES.longitude
        );

        const isWithinRadius = distance <= ALLOWED_RADIUS_METERS;

        // Format lokasi dengan status validasi
        const locationString = `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`;
        const statusMessage = isWithinRadius
          ? `✓ Within allowed radius (${Math.round(distance)} m from company)`
          : `✗ Outside allowed radius (${Math.round(distance)} m from company)`;

        const fullLocationString = `${locationString}\n${statusMessage}`;

        if (isCheckOut) {
          setCurrentLocationCheckOut(fullLocationString);
          setLocationCapturedCheckOut(isWithinRadius);

          if (isWithinRadius) {
            alert("Location valid! You are within the allowed radius.");
          } else {
            alert(
              `Location outside radius! You are ${Math.round(distance)} meters from company. Maximum ${ALLOWED_RADIUS_METERS} meters allowed.`
            );
          }
        } else {
          setCurrentLocation(fullLocationString);
          setLocationCaptured(isWithinRadius);

          if (isWithinRadius) {
            alert("Location valid! You are within the allowed radius.");
          } else {
            alert(
              `Location outside radius! You are ${Math.round(distance)} meters from company. Maximum ${ALLOWED_RADIUS_METERS} meters allowed.`
            );
          }
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        let errorMessage = "Unknown error occurred";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information unavailable";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out";
            break;
        }
        if (isCheckOut) {
          setCurrentLocationCheckOut("Location unavailable");
          setLocationCapturedCheckOut(false);
        } else {
          setCurrentLocation("Location unavailable");
          setLocationCaptured(false);
        }
        alert(`Failed to get location: ${errorMessage}`);
      },
      options
    );
  };

  const startCamera = async (isCheckOut = false) => {
    try {
      // Cek permission kamera terlebih dahulu
      const hasPermission = await checkCameraPermission();
      if (!hasPermission) {
        alert("Please allow camera access in your browser settings first.");
        return;
      }

      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Meminta akses kamera dengan pesan yang jelas
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "user", // Menggunakan kamera depan
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });

        if (isCheckOut) {
          setStreamCheckOut(mediaStream);
          setIsCameraActiveCheckOut(true);
          if (videoRefCheckOut.current) {
            videoRefCheckOut.current.srcObject = mediaStream;
          }
        } else {
          setStream(mediaStream);
          setIsCameraActive(true);
          if (videoRefCheckIn.current) {
            videoRefCheckIn.current.srcObject = mediaStream;
          }
        }

        // Tambahkan event listener untuk menangani saat kamera dimatikan
        mediaStream.getVideoTracks()[0].addEventListener("ended", () => {
          if (isCheckOut) {
            setIsCameraActiveCheckOut(false);
          } else {
            setIsCameraActive(false);
          }
        });
      } else {
        alert("Camera not supported in this browser.");
      }
    } catch (error) {
      console.error("Error accessing camera:", error);

      if (
        error.name === "NotAllowedError" ||
        error.name === "PermissionDeniedError"
      ) {
        alert(
          "Camera access denied. Please allow camera access in your browser settings."
        );
      } else if (
        error.name === "NotFoundError" ||
        error.name === "DevicesNotFoundError"
      ) {
        alert(
          "Camera not found. Make sure camera is available and not being used by another application."
        );
      } else if (
        error.name === "NotReadableError" ||
        error.name === "TrackStartError"
      ) {
        alert(
          "Camera is being used by another application. Close other applications using the camera."
        );
      } else {
        alert("Cannot access camera. Please check your camera settings.");
      }
    }
  };

  const capturePhoto = (isCheckOut = false) => {
    let video, canvas;
    if (isCheckOut) {
      video = videoRefCheckOut.current;
      canvas = canvasRefCheckOut.current;
    } else {
      video = videoRefCheckIn.current;
      canvas = canvasRefCheckIn.current;
    }

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photoDataUrl = canvas.toDataURL("image/png");

      if (isCheckOut) {
        setSelfiePreviewCheckOut(photoDataUrl);
        setSelfieUploadedCheckOut(true);
      } else {
        setSelfiePreview(photoDataUrl);
        setSelfieUploaded(true);
      }
      stopCamera(isCheckOut);
    }
  };

  const stopCamera = (isCheckOut = false) => {
    if (isCheckOut) {
      if (streamCheckOut) {
        streamCheckOut.getTracks().forEach((track) => track.stop());
        setStreamCheckOut(null);
      }
      setIsCameraActiveCheckOut(false);
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
      setIsCameraActive(false);
    }
  };

  const handleSelfieUpload = (event, isCheckOut = false) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isCheckOut) {
          setSelfiePreviewCheckOut(e.target.result);
          setSelfieUploadedCheckOut(true);
        } else {
          setSelfiePreview(e.target.result);
          setSelfieUploaded(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = (isCheckOut = false) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => handleSelfieUpload(e, isCheckOut);
    input.click();
  };

  const openCheckInModal = () => {
    setIsCheckInModalOpen(true);
    setLocationCaptured(false);
    setSelfieUploaded(false);
    setSelfiePreview(null);
    setCurrentLocation("Click to get location");
    setIsCameraActive(false);
  };

  const openCheckOutModal = () => {
    setIsCheckOutModalOpen(true);
    setLocationCapturedCheckOut(false);
    setSelfieUploadedCheckOut(false);
    setSelfiePreviewCheckOut(null);
    setCurrentLocationCheckOut("Click to get location");
    setIsCameraActiveCheckOut(false);
  };

  const handleConfirmCheckIn = () => {
    if (!locationCaptured) {
      alert("Please capture your location first!");
      return;
    }

    if (!selfieUploaded) {
      alert("Please upload or take a selfie first!");
      return;
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const formattedHours = (now.getHours() % 12 || 12)
      .toString()
      .padStart(2, "0");
    const checkInTime = `${formattedHours}:${minutes} ${ampm}`;

    let checkInStatus = "On Time";
    const currentTime = now.getHours() * 60 + now.getMinutes();
    const deadlineTime = 8 * 60 + 15;
    if (currentTime > deadlineTime) checkInStatus = "Late";

    const newAttendance = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      checkIn: checkInTime,
      checkOut: "--:--",
      location: currentLocation,
      status: "pending",
      approvalStatus: "pending",
      checkInStatus: checkInStatus,
      checkInLocation: currentLocation,
      checkOutLocation: "--:--",
      selfieCheckIn: selfiePreview,
      selfieCheckOut: null,
      approvedBy: null,
      approvedAt: null,
    };

    setAttendanceData((prev) => ({
      ...prev,
      checkInTime: checkInTime,
      status: checkInStatus,
      isCheckedIn: true,
      isCheckedOut: false,
      checkOutTime: "--:--",
      location: currentLocation,
    }));

    setAttendanceHistory((prev) => [newAttendance, ...prev]);
    setIsCheckInModalOpen(false);

    // Reset modal state
    setLocationCaptured(false);
    setSelfieUploaded(false);
    setSelfiePreview(null);
    setCurrentLocation("Click to get location");
    stopCamera(false);

    updateDashboardData();

    alert(
      `Check-in berhasil! Waktu: ${checkInTime} - Status: ${checkInStatus}. Menunggu approval admin.`
    );
  };

  const handleConfirmCheckOut = () => {
    if (!locationCapturedCheckOut) {
      alert("Please capture your location first!");
      return;
    }

    if (!selfieUploadedCheckOut) {
      alert("Please upload or take a selfie first!");
      return;
    }

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const formattedHours = (now.getHours() % 12 || 12)
      .toString()
      .padStart(2, "0");
    const checkOutTime = `${formattedHours}:${minutes} ${ampm}`;

    setAttendanceData((prev) => ({
      ...prev,
      checkOutTime: checkOutTime,
      isCheckedOut: true,
    }));

    const today = new Date().toISOString().split("T")[0];
    const updatedHistory = attendanceHistory.map((record) =>
      record.date === today
        ? {
            ...record,
            checkOut: checkOutTime,
            checkOutLocation: currentLocationCheckOut,
            selfieCheckOut: selfiePreviewCheckOut,
            status: "pending",
            approvalStatus: "pending",
          }
        : record
    );

    setAttendanceHistory(updatedHistory);
    setIsCheckOutModalOpen(false);

    // Reset modal state
    setLocationCapturedCheckOut(false);
    setSelfieUploadedCheckOut(false);
    setSelfiePreviewCheckOut(null);
    setCurrentLocationCheckOut("Click to get location");
    stopCamera(true);

    updateDashboardData();

    alert("Check-out berhasil! Menunggu approval admin.");
  };

  const getStatusColor = (status) => {
    if (status === "On Time") return "text-green-600 bg-green-100";
    if (status === "Late") return "text-red-600 bg-red-100";
    if (status === "Approved") return "text-green-600 bg-green-100";
    if (status === "pending") return "text-yellow-600 bg-yellow-100";
    return "text-gray-600 bg-gray-100";
  };

  const getApprovalStatusColor = (status) => {
    if (status === "approved") return "text-green-600 bg-green-100";
    if (status === "rejected") return "text-red-600 bg-red-100";
    if (status === "pending") return "text-yellow-600 bg-yellow-100";
    return "text-gray-600 bg-gray-100";
  };

  // ==================== HELP DESK FUNCTIONS ====================
  const handleCreateTicket = () => {
    const errors = {};
    if (!newTicket.title.trim()) errors.title = "Judul masalah harus diisi";
    if (!newTicket.description.trim())
      errors.description = "Deskripsi masalah harus diisi";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const ticket = {
      id: Date.now(),
      ticketId: `#T${String(Date.now()).slice(-4)}`,
      title: newTicket.title,
      priority: newTicket.priority,
      status: "Open",
      assignee: user.name,
      site: newTicket.site,
      description: newTicket.description,
      createdAt: new Date().toISOString().split("T")[0],
      category: newTicket.category,
      resolvedAt: null,
      attachments: [...attachmentFiles],
      solution: "",
    };

    setTickets((prev) => [ticket, ...prev]);
    setNewTicket({
      site: user.site,
      category: "Technical",
      title: "",
      description: "",
      priority: "Medium",
      attachments: [],
    });
    setAttachmentFiles([]);
    setFormErrors({});
    setIsCreateModalOpen(false);

    updateDashboardData();

    setNotifications((prev) => [
      {
        id: Date.now(),
        title: "Tiket Bantuan Diajukan",
        message: `Tiket "${newTicket.title}" telah berhasil diajukan`,
        time: "Baru saja",
        type: "info",
        read: false,
      },
      ...prev,
    ]);

    alert("Tiket bantuan berhasil diajukan!");
  };

  useEffect(() => {
    if (isCreateModalOpen) {
      setFormErrors({});
    }
  }, [isCreateModalOpen]);

  const handleAttachmentUpload = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));
    setAttachmentFiles((prev) => [...prev, ...newFiles]);
  };

  const removeAttachment = (index) => {
    setAttachmentFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.ticketId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "Semua Status" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "Semua Prioritas" ||
      ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTicketStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const statusOptions = [
    "Semua Status",
    "Open",
    "In Progress",
    "Resolved",
    "Closed",
  ];
  const priorityOptions = ["Semua Prioritas", "High", "Medium", "Low"];
  const categoryOptions = [
    "Technical",
    "Operational",
    "Maintenance",
    "Software",
    "Other",
  ];

  // ==================== SOLUTION FUNCTIONS ====================
  const openSolutionModal = (ticket) => {
    setSelectedTicketForSolution(ticket);
    setSolutionText(ticket.solution || "");
    setSolutionStatus(ticket.status);
    setIsSolutionModalOpen(true);
  };

  const handleSubmitSolution = () => {
    if (!solutionText.trim()) {
      alert("Solution cannot be empty");
      return;
    }

    const updatedTickets = tickets.map((ticket) =>
      ticket.id === selectedTicketForSolution.id
        ? {
            ...ticket,
            solution: solutionText,
            status: solutionStatus,
            resolvedAt:
              solutionStatus === "Resolved" || solutionStatus === "Closed"
                ? new Date().toISOString().split("T")[0]
                : null,
          }
        : ticket
    );

    setTickets(updatedTickets);
    setIsSolutionModalOpen(false);
    setSolutionText("");
    setSolutionStatus("Open");
    setSelectedTicketForSolution(null);

    alert("Solution submitted successfully!");
  };

  // ==================== RENDER FUNCTIONS ====================
  const renderDashboard = () => {
    const maxPHValue =
      pHData.length > 0 ? Math.max(...pHData.map((d) => d.value), 7.5) : 7.5;
    const maxFlowRateValue =
      flowRateData.length > 0
        ? Math.max(...flowRateData.map((d) => d.value), 600)
        : 600;

    return (
      <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Operator Dashboard
          </h2>
          <p className="text-gray-600 mt-1">
            Welcome back, {user.name}! Monitor your daily activities and IPAL
            status
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            {
              label: "Reports Submitted",
              value: dashboardData.reportsSubmitted,
              percent: "+12%",
              icon: DocumentChartBarIcon,
            },
            {
              label: "Attendance Rate",
              value: dashboardData.attendanceRate,
              percent: "+2%",
              icon: ChartBarIcon,
            },
            {
              label: "Next Shift",
              value: "Tomorrow",
              subValue: "08:00",
              icon: ClockIcon,
            },
            { label: "Current Site", value: user.site, icon: MapPinIcon },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <p className="text-gray-600 text-sm font-medium">
                    {item.label}
                  </p>
                  <div className="p-2 rounded-lg bg-blue-50">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  {item.subValue && (
                    <p className="text-sm text-gray-600 mt-1">
                      {item.subValue}
                    </p>
                  )}
                </div>
                {item.percent && (
                  <p
                    className={`text-xs font-medium mt-1 ${
                      item.percent.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.percent} vs last month
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Today's Latest Readings
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "pH Level",
                value: dashboardData.pHLevel,
                status: dashboardData.pHLevel === "0.0" ? "no data" : "normal",
              },
              {
                label: "Flow Rate",
                value: dashboardData.flowRate,
                status:
                  dashboardData.flowRate === "0 L/h" ? "no data" : "normal",
              },
              {
                label: "TDS",
                value: dashboardData.tds,
                status: dashboardData.tds === "0 ppm" ? "no data" : "normal",
              },
              {
                label: "EC",
                value: dashboardData.ec,
                status: dashboardData.ec === "0 μS/cm" ? "no data" : "normal",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">
                      {item.label}
                    </p>
                    <p className="text-xl font-bold text-gray-900 mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "normal"
                        ? "bg-green-500"
                        : item.status === "no data"
                          ? "bg-gray-400"
                          : "bg-red-500"
                    }`}
                  ></div>
                  <span
                    className={`text-xs font-medium ${
                      item.status === "normal"
                        ? "text-green-600"
                        : item.status === "no data"
                          ? "text-gray-600"
                          : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIAGRAM BATANG */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* pH Level Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800 mb-6">
              pH Level Trends
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxPHValue.toFixed(1)}</span>
                <span>{(maxPHValue * 0.75).toFixed(1)}</span>
                <span>{(maxPHValue * 0.5).toFixed(1)}</span>
                <span>{(maxPHValue * 0.25).toFixed(1)}</span>
                <span>0.0</span>
              </div>
              <div className="ml-8">
                {pHData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                      <br />
                      <span className="text-sm">
                        Submit daily reports to see trends
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {pHData.map((data, index) => {
                      const normalizedHeight = Math.min(
                        (data.value / maxPHValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`ph-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `ph-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {data.value}
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {data.day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Flow Rate Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800 mb-6">
              Flow Rate Trends
            </h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                <span>{maxFlowRateValue}</span>
                <span>{Math.round(maxFlowRateValue * 0.75)}</span>
                <span>{Math.round(maxFlowRateValue * 0.5)}</span>
                <span>{Math.round(maxFlowRateValue * 0.25)}</span>
                <span>0</span>
              </div>
              <div className="ml-8">
                {flowRateData.length === 0 ? (
                  <div className="w-full h-48 flex items-center justify-center border-b border-l border-gray-200">
                    <p className="text-gray-500 text-center">
                      No data available
                      <br />
                      <span className="text-sm">
                        Submit daily reports to see trends
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200 overflow-hidden">
                    {flowRateData.map((data, index) => {
                      const normalizedHeight = Math.min(
                        (data.value / maxFlowRateValue) * 120,
                        120
                      );
                      return (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          <div
                            className="w-6 bg-gradient-to-t from-green-400 to-green-600 rounded-t transition-all duration-300 hover:from-green-500 hover:to-green-700 cursor-pointer relative group"
                            style={{ height: `${normalizedHeight}px` }}
                            onMouseEnter={() => setHoveredBar(`flow-${index}`)}
                            onMouseLeave={() => setHoveredBar(null)}
                          >
                            {hoveredBar === `flow-${index}` && (
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                {data.value} L/h
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-gray-600 mt-2">
                            {data.day}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => handleQuickAction("submitReport")}
                className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 hover:border-blue-300"
              >
                <DocumentTextIcon className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-700">
                  Submit Daily Report
                </span>
              </button>
              <button
                onClick={() => handleQuickAction("recordReadings")}
                className="w-full flex text-left gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200 hover:border-green-300"
              >
                <ChartBarIcon className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-700">
                  Record today's readings
                </span>
              </button>
              <button
                onClick={() => handleQuickAction("checkIn")}
                disabled={attendanceData.isCheckedIn}
                className={`w-full flex text-left gap-3 p-4 rounded-lg transition-colors border ${
                  attendanceData.isCheckedIn
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed"
                    : "bg-orange-50 hover:bg-orange-100 border-orange-200 hover:border-orange-300"
                }`}
              >
                <MapPinIcon className="w-5 h-5 text-orange-600" />
                <span
                  className={`font-medium ${
                    attendanceData.isCheckedIn
                      ? "text-gray-500"
                      : "text-orange-700"
                  }`}
                >
                  {attendanceData.isCheckedIn
                    ? "Already Checked In"
                    : "Check In Now"}
                </span>
              </button>
              <button
                onClick={() => handleQuickAction("checkOut")}
                disabled={
                  !attendanceData.isCheckedIn || attendanceData.isCheckedOut
                }
                className={`w-full flex text-left gap-3 p-4 rounded-lg transition-colors border ${
                  !attendanceData.isCheckedIn || attendanceData.isCheckedOut
                    ? "bg-gray-100 border-gray-300 cursor-not-allowed"
                    : "bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-300"
                }`}
              >
                <MapPinIcon className="w-5 h-5 text-red-600" />
                <span
                  className={`font-medium ${
                    !attendanceData.isCheckedIn || attendanceData.isCheckedOut
                      ? "text-gray-500"
                      : "text-red-700"
                  }`}
                >
                  {attendanceData.isCheckedOut
                    ? "Already Checked Out"
                    : "Check Out Now"}
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
            <h3 className="font-semibold text-lg text-gray-800 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-4">
              {reports.slice(0, 3).map((report, index) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      Daily report submitted
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(report.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      {report.status}
                    </span>
                  </div>
                </div>
              ))}
              {reports.length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  No recent activity
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderDailyReport = () => (
    <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Daily Report
        </h2>
        <p className="text-gray-600 mt-1">
          Submit your daily IPAL operational report
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
            <ExclamationTriangleIcon className="w-4 h-4 text-blue-700" />
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">
              Daily Report Guidelines
            </h3>
            <p className="text-blue-800 text-sm">
              Please ensure all measurements are accurate. Take photos of
              equipment and upload them with your report. Reports must be
              submitted before end of shift.
              <strong className="block mt-2">
                Semua field harus diisi sebelum submit!
              </strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Report Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="date">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  ref={dateInputRef}
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.date ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                />
                <button
                  type="button"
                  onClick={handleDateIconClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <CalendarDaysIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.date}
                </p>
              )}
            </div>

            <div id="time">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  ref={timeInputRef}
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.time ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                />
                <button
                  type="button"
                  onClick={handleTimeIconClick}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <ClockIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.time}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Water Parameters <span className="text-red-500">*</span>
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div id="pHLevel">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  pH Level <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 7.2"
                  value={formData.pHLevel}
                  onChange={(e) => handleInputChange("pHLevel", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.pHLevel ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.pHLevel && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.pHLevel}
                  </p>
                )}
              </div>
              <div id="flowRate">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flow Rate (L/h) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 450"
                  value={formData.flowRate}
                  onChange={(e) =>
                    handleInputChange("flowRate", e.target.value)
                  }
                  className={`w-full p-3 border ${
                    errors.flowRate ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.flowRate && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.flowRate}
                  </p>
                )}
              </div>
              <div id="volt">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Volt (V) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 220"
                  value={formData.volt}
                  onChange={(e) => handleInputChange("volt", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.volt ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.volt && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.volt}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div id="ampere">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ampere (A) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 15"
                  value={formData.ampere}
                  onChange={(e) => handleInputChange("ampere", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.ampere ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.ampere && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.ampere}
                  </p>
                )}
              </div>
              <div id="tds">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  TDS (ppm) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 480"
                  value={formData.tds}
                  onChange={(e) => handleInputChange("tds", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.tds ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.tds && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.tds}
                  </p>
                )}
              </div>
              <div id="ec">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  EC (μS/cm) <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 720"
                  value={formData.ec}
                  onChange={(e) => handleInputChange("ec", e.target.value)}
                  className={`w-full p-3 border ${
                    errors.ec ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.ec && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.ec}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Equipment Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Agitator
              </label>
              <select
                value={formData.agitatorStatus}
                onChange={(e) =>
                  handleInputChange("agitatorStatus", e.target.value)
                }
                className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="Normal">Normal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Settle
              </label>
              <select
                value={formData.settleStatus}
                onChange={(e) =>
                  handleInputChange("settleStatus", e.target.value)
                }
                className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="Normal">Normal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Out Filter
              </label>
              <select
                value={formData.outFilterStatus}
                onChange={(e) =>
                  handleInputChange("outFilterStatus", e.target.value)
                }
                className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="Normal">Normal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Supporting Photos <span className="text-red-500">*</span>
          </h3>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            multiple
            accept="image/*"
          />
          <div
            onClick={handleContainerClick}
            className={`border-2 border-dashed ${
              errors.files ? "border-red-500" : "border-gray-300"
            } rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
          >
            <CameraIcon
              className={`w-12 h-12 ${
                errors.files ? "text-red-500" : "text-gray-600"
              } mx-auto mb-3`}
            />
            <p
              className={`text-sm mb-3 ${
                errors.files ? "text-red-500" : "text-gray-500"
              }`}
            >
              {errors.files
                ? errors.files
                : "Click anywhere in this area to upload photos of equipment and readings"}
            </p>
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Uploaded files:
                </p>
                <ul className="text-sm text-gray-600">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="truncate">
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Additional Notes <span className="text-red-500">*</span>
          </h3>
          <div id="additionalNotes">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add any additional observations, issues, or inventory needs...
            </label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) =>
                handleInputChange("additionalNotes", e.target.value)
              }
              rows={4}
              className={`w-full p-3 border ${
                errors.additionalNotes ? "border-red-500" : "border-gray-200"
              } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
              placeholder="Enter any additional information, observations, or requirements..."
            />
            {errors.additionalNotes && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.additionalNotes}
              </p>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={handleSaveDraft}
              className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Save as Draft
            </button>
            <button
              onClick={handleSubmitReport}
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              } text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                "Submit Report"
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Laporan Saya</h2>
              <p className="text-gray-600 mt-1">Kelola laporan harian Anda</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari laporan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <select className="px-4 py-2 border text-gray-800 bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Semua Status</option>
                <option>Pending</option>
                <option>Setujui</option>
                <option>Tolak</option>
              </select>
              <button
                onClick={handleExportReports}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredReports.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Belum ada laporan yang disubmit.</p>
              <p className="text-gray-400 text-sm mt-1">
                Submit laporan pertama Anda di atas.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {report.location}
                        </h3>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{report.operator}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            report.status === "Submitted"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">
                        {report.date} {report.time}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {report.flowRate && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            <MagnifyingGlassIcon className="w-3 h-3" />
                            Flow Rate: {report.flowRate} L/h
                          </span>
                        )}
                        {report.volt && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            <MagnifyingGlassIcon className="w-3 h-3" />
                            Volt: {report.volt} V
                          </span>
                        )}
                        {report.ampere && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            <MagnifyingGlassIcon className="w-3 h-3" />
                            Ampere: {report.ampere} A
                          </span>
                        )}
                        {report.pHLevel && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                            <MagnifyingGlassIcon className="w-3 h-3" />
                            pH: {report.pHLevel}
                          </span>
                        )}
                      </div>
                      {report.additionalNotes && (
                        <p className="text-gray-700 mb-4">
                          {report.additionalNotes}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>
                          Agitator:{" "}
                          <span className="font-medium">
                            {report.agitatorStatus}
                          </span>
                        </span>
                        <span>
                          Settle:{" "}
                          <span className="font-medium">
                            {report.settleStatus}
                          </span>
                        </span>
                        <span>
                          Out Filter:{" "}
                          <span className="font-medium">
                            {report.outFilterStatus}
                          </span>
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => openReportDetailModal(report)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <MagnifyingGlassIcon className="w-4 h-4" />
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderPresence = () => (
    <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Attendance System
          </h2>
          <p className="text-gray-600 mt-1">
            Mark your attendance with location and selfie verification
          </p>
        </div>
        <div className="flex-shrink-0">
          {!attendanceData.isCheckedIn ? (
            <button
              onClick={openCheckInModal}
              className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Check In Now
            </button>
          ) : !attendanceData.isCheckedOut ? (
            <button
              onClick={openCheckOutModal}
              className="w-full lg:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Check Out Now
            </button>
          ) : (
            <div className="text-center px-4 py-3 bg-gray-100 text-gray-600 rounded-lg text-sm lg:text-base">
              Attendance completed for today
            </div>
          )}
        </div>
      </div>

      {/* Today's Attendance Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h3 className="font-semibold text-lg text-gray-800">
            Today's Attendance
          </h3>
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ClockIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">
                    Check-in Time
                  </h4>
                  <p className="text-lg font-bold text-gray-900 mb-2 truncate">
                    {attendanceData.checkInTime}
                  </p>
                  <span
                    className={`inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      attendanceData.status
                    )}`}
                  >
                    {attendanceData.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ClockIcon className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">
                    Check-out Time
                  </h4>
                  <p className="text-lg font-bold text-gray-900 mb-2 truncate">
                    {attendanceData.checkOutTime}
                  </p>
                  {attendanceData.isCheckedOut ? (
                    <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Not checked out
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">
                    Location
                  </h4>
                  <p className="text-sm font-bold text-gray-900 mb-2 leading-tight break-words line-clamp-2">
                    {attendanceData.location}
                  </p>
                  <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {attendanceData.location !== "Not located yet"
                      ? "Verified"
                      : "Not verified"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h3 className="font-semibold text-lg text-gray-800">
            Attendance History
          </h3>
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          {/* Mobile View */}
          <div className="block lg:hidden space-y-4">
            {attendanceHistory.map((record) => (
              <div
                key={record.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-gray-900">{record.date}</p>
                    <p className="text-sm text-gray-600">{record.location}</p>
                  </div>
                  <span
                    className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(
                      record.approvalStatus
                    )}`}
                  >
                    {record.approvalStatus === "pending" && "⏳ pending"}
                    {record.approvalStatus === "approved" && "✓ approved"}
                    {record.approvalStatus === "rejected" && "✗ rejected"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500">Check In</p>
                    <p className="text-sm font-medium text-gray-900">
                      {record.checkIn}
                    </p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        record.checkInStatus
                      )}`}
                    >
                      {record.checkInStatus}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Check Out</p>
                    <p className="text-sm font-medium text-gray-900">
                      {record.checkOut}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => openDetailModal(record)}
                  className="w-full flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium py-2 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <EyeIcon className="w-4 h-4" />
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Check In
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Check Out
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {attendanceHistory.map((record) => (
                  <tr
                    key={record.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
                      {record.date}
                    </td>
                    <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
                      <div>
                        <span>{record.checkIn}</span>
                        <span
                          className={`block text-xs mt-1 ${
                            record.checkInStatus === "On Time"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {record.checkInStatus}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-900 whitespace-nowrap">
                      {record.checkOut}
                    </td>
                    <td
                      className="py-3 px-4 text-gray-900 text-sm max-w-[200px] truncate"
                      title={record.location}
                    >
                      {record.location}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(
                          record.approvalStatus
                        )}`}
                      >
                        {record.approvalStatus === "pending" && "⏳ pending"}
                        {record.approvalStatus === "approved" && "✓ approved"}
                        {record.approvalStatus === "rejected" && "✗ rejected"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => openDetailModal(record)}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap"
                      >
                        <EyeIcon className="w-4 h-4" />
                        Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {attendanceHistory.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No attendance records found.</p>
              <p className="text-gray-400 text-sm mt-1">
                Your attendance history will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // ==================== RENDER HELPDESK ====================
  const renderHelpDesk = () => (
    <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Help Desk
          </h2>
          <p className="text-gray-600 mt-1">
            Ajukan bantuan atau laporkan masalah
          </p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            Buat Tiket
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="flex-1 w-full">
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari tiket..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <div className="relative" ref={statusDropdownRef}>
                  <button
                    onClick={() =>
                      setIsStatusDropdownOpen(!isStatusDropdownOpen)
                    }
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
                  >
                    <span className="truncate">{statusFilter}</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isStatusDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
                      {statusOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setStatusFilter(option);
                            setIsStatusDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
                            option === statusFilter
                              ? "bg-blue-50 text-blue-700"
                              : ""
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative" ref={priorityDropdownRef}>
                  <button
                    onClick={() =>
                      setIsPriorityDropdownOpen(!isPriorityDropdownOpen)
                    }
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
                  >
                    <span className="truncate">{priorityFilter}</span>
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isPriorityDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
                      {priorityOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setPriorityFilter(option);
                            setIsPriorityDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
                            option === priorityFilter
                              ? "bg-blue-50 text-blue-700"
                              : ""
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
              <h3 className="font-semibold text-lg text-gray-800">
                Daftar Tiket
              </h3>
            </div>
            <div className="p-4">
              {filteredTickets.map((ticket, index) => (
                <div key={ticket.id} className="mb-6 last:mb-0">
                  <div className="py-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {ticket.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-600 font-medium">
                                {ticket.ticketId}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-600">
                                {ticket.assignee}
                              </span>
                              <span className="text-gray-400">•</span>
                              <span className="text-sm text-gray-600">
                                {ticket.createdAt}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                              ticket.priority
                            )}`}
                          >
                            {ticket.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-3 ml-9">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <UserIcon className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{ticket.assignee}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-400" />
                        <span>{ticket.site}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">Kategori:</span>
                        <span>{ticket.category}</span>
                      </div>
                    </div>
                    <div className="ml-9">
                      <p className="text-sm text-gray-600 mb-3">
                        {ticket.description}
                      </p>

                      {/* Attachments */}
                      {ticket.attachments && ticket.attachments.length > 0 && (
                        <div className="mb-3">
                          <p className="text-sm font-medium text-gray-700 mb-2">
                            Attachments:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {ticket.attachments.map((attachment, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                              >
                                <DocumentTextIcon className="w-4 h-4 text-gray-600" />
                                <span className="text-sm text-gray-700">
                                  {attachment.name}
                                </span>
                                <button className="text-blue-600 hover:text-blue-800 text-sm">
                                  Download
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Solution if exists */}
                      {ticket.solution && (
                        <div className="mb-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-sm font-medium text-green-800 mb-1">
                            Solution:
                          </p>
                          <p className="text-sm text-green-700">
                            {ticket.solution}
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTicketStatusColor(
                            ticket.status
                          )}`}
                        >
                          {ticket.status}
                        </span>
                        <div className="flex items-center gap-2">
                          {ticket.status === "Open" && (
                            <button
                              onClick={() => openSolutionModal(ticket)}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 text-sm"
                            >
                              <DocumentTextIcon className="w-4 h-4" />
                              Provide Solution
                            </button>
                          )}
                          <div className="text-xs text-gray-500">
                            <span>Created: {ticket.createdAt}</span>
                            {ticket.resolvedAt && (
                              <span className="ml-2">
                                Resolved: {ticket.resolvedAt}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < filteredTickets.length - 1 && (
                    <hr className="border-gray-200 my-2" />
                  )}
                </div>
              ))}
              {filteredTickets.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DocumentChartBarIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Belum ada tiket bantuan</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Tiket bantuan yang Anda buat akan muncul di sini
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL CHECK-IN ====================
  const renderCheckInModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Check In</h2>
            <button
              onClick={() => {
                setIsCheckInModalOpen(false);
                stopCamera(false);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Complete the following steps to check in
          </p>
          {/* TAMBAHKAN BARIS INI */}
          <p className="text-xs text-gray-500 mt-1">
            * Must be within {ALLOWED_RADIUS_METERS} meters from company
            location
          </p>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 1: Location */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${locationCaptured ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
              >
                {locationCaptured ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <span className="font-bold">1</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800">Capture Location</h3>
            </div>
            <div className="ml-11">
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-600 mb-1">Current Location:</p>
                <p className="text-sm text-gray-900 font-medium break-words max-h-20 overflow-y-auto">
                  {currentLocation}
                </p>
              </div>
              <button
                onClick={() => getCurrentLocation(false)}
                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MapPinIcon className="w-4 h-4" />
                {locationCaptured ? "Update Location" : "Get My Location"}
              </button>
            </div>
          </div>

          {/* Step 2: Selfie */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${selfieUploaded ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
              >
                {selfieUploaded ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <span className="font-bold">2</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800">Take Selfie</h3>
            </div>
            <div className="ml-11">
              {isCameraActive ? (
                <div className="space-y-4">
                  <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
                    <video
                      ref={videoRefCheckIn}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => capturePhoto(false)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Capture Photo
                    </button>
                    <button
                      onClick={() => stopCamera(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : selfiePreview ? (
                <div className="space-y-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={selfiePreview}
                      alt="Selfie preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startCamera(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Retake Photo
                    </button>
                    <button
                      onClick={() => triggerFileInput(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Upload Different
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => startCamera(false)}
                    className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm"
                  >
                    <CameraIcon className="w-4 h-4" />
                    Open Camera
                  </button>
                  <button
                    onClick={() => triggerFileInput(false)}
                    className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
                  >
                    <ArrowUpTrayIcon className="w-4 h-4" />
                    Upload Selfie
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Confirm Button - FIXED POSITION */}
        <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
          <button
            onClick={handleConfirmCheckIn}
            disabled={!locationCaptured || !selfieUploaded}
            className={`w-full py-3 rounded-lg font-medium ${
              !locationCaptured || !selfieUploaded
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Confirm Check In
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL CHECK-OUT ====================
  const renderCheckOutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[85vh] flex flex-col">
        <div className="flex-shrink-0 p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Check Out</h2>
            <button
              onClick={() => {
                setIsCheckOutModalOpen(false);
                stopCamera(true);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1 text-sm">
            Complete the following steps to check out
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 1: Location */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${locationCapturedCheckOut ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
              >
                {locationCapturedCheckOut ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <span className="font-bold">1</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800">Capture Location</h3>
            </div>
            <div className="ml-11">
              <div className="bg-gray-50 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-600 mb-1">Current Location:</p>
                <p className="text-sm text-gray-900 font-medium break-words max-h-20 overflow-y-auto">
                  {currentLocationCheckOut}
                </p>
              </div>
              <button
                onClick={() => getCurrentLocation(true)}
                className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <MapPinIcon className="w-4 h-4" />
                {locationCapturedCheckOut
                  ? "Update Location"
                  : "Get My Location"}
              </button>
            </div>
          </div>

          {/* Step 2: Selfie */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${selfieUploadedCheckOut ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}`}
              >
                {selfieUploadedCheckOut ? (
                  <CheckCircleIcon className="w-5 h-5" />
                ) : (
                  <span className="font-bold">2</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800">Take Selfie</h3>
            </div>
            <div className="ml-11">
              {isCameraActiveCheckOut ? (
                <div className="space-y-4">
                  <div className="relative w-full h-48 bg-gray-900 rounded-lg overflow-hidden">
                    <video
                      ref={videoRefCheckOut}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => capturePhoto(true)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Capture Photo
                    </button>
                    <button
                      onClick={() => stopCamera(true)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : selfiePreviewCheckOut ? (
                <div className="space-y-4">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={selfiePreviewCheckOut}
                      alt="Selfie preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startCamera(true)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Retake Photo
                    </button>
                    <button
                      onClick={() => triggerFileInput(true)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Upload Different
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => startCamera(true)}
                    className="w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 text-sm"
                  >
                    <CameraIcon className="w-4 h-4" />
                    Open Camera
                  </button>
                  <button
                    onClick={() => triggerFileInput(true)}
                    className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-2 text-sm"
                  >
                    <ArrowUpTrayIcon className="w-4 h-4" />
                    Upload Selfie
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Confirm Button - FIXED POSITION */}
        <div className="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
          <button
            onClick={handleConfirmCheckOut}
            disabled={!locationCapturedCheckOut || !selfieUploadedCheckOut}
            className={`w-full py-3 rounded-lg font-medium ${
              !locationCapturedCheckOut || !selfieUploadedCheckOut
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 text-white hover:bg-green-700"
            }`}
          >
            Confirm Check Out
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL DETAIL ATTENDANCE ====================
  const renderDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Attendance Details
            </h2>
            <button
              onClick={() => setIsDetailModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">Date: {selectedAttendance?.date}</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Check In Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">
                    {selectedAttendance?.checkIn}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`font-medium ${selectedAttendance?.checkInStatus === "On Time" ? "text-green-600" : "text-red-600"}`}
                  >
                    {selectedAttendance?.checkInStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-right">
                    {selectedAttendance?.checkInLocation}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Check Out Details
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium">
                    {selectedAttendance?.checkOut}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-right">
                    {selectedAttendance?.checkOutLocation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Approval Status */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">
              Approval Status
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`font-medium ${getApprovalStatusColor(selectedAttendance?.approvalStatus)} px-3 py-1 rounded-full text-sm`}
                >
                  {selectedAttendance?.approvalStatus}
                </span>
              </div>
              {selectedAttendance?.approvedBy && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Approved by:</span>
                  <span className="font-medium">
                    {selectedAttendance?.approvedBy}
                  </span>
                </div>
              )}
              {selectedAttendance?.approvedAt && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Approved at:</span>
                  <span className="font-medium">
                    {selectedAttendance?.approvedAt}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Selfies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedAttendance?.selfieCheckIn && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Check In Selfie
                </h3>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={selectedAttendance.selfieCheckIn}
                    alt="Check-in selfie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {selectedAttendance?.selfieCheckOut && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Check Out Selfie
                </h3>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={selectedAttendance.selfieCheckOut}
                    alt="Check-out selfie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setIsDetailModalOpen(false)}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL CREATE TICKET ====================
  const renderCreateTicketModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Buat Tiket Bantuan Baru
            </h2>
            <button
              onClick={() => {
                setIsCreateModalOpen(false);
                setFormErrors({});
                setAttachmentFiles([]);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Isi form berikut untuk mengajukan tiket bantuan
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Site <span className="text-red-500">*</span>
              </label>
              <select
                value={newTicket.site}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, site: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              >
                <option>IPAL Jakarta Pusat</option>
                <option>IPAL Jakarta Utara</option>
                <option>IPAL Jakarta Selatan</option>
                <option>IPAL Jakarta Barat</option>
                <option>IPAL Jakarta Timur</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori <span className="text-red-500">*</span>
              </label>
              <select
                value={newTicket.category}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prioritas <span className="text-red-500">*</span>
              </label>
              <select
                value={newTicket.priority}
                onChange={(e) =>
                  setNewTicket({ ...newTicket, priority: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Judul Masalah <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Masalah pompa filter tidak berfungsi"
              value={newTicket.title}
              onChange={(e) => {
                setNewTicket({ ...newTicket, title: e.target.value });
                if (formErrors.title)
                  setFormErrors({ ...formErrors, title: "" });
              }}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white ${
                formErrors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.title && (
              <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Masalah <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Jelaskan detail masalah yang Anda alami... Contoh: Software monitoring tidak bisa connect ke server. Error terjadi sejak pagi hari. Sudah dicoba restart tapi belum berhasil."
              value={newTicket.description}
              onChange={(e) => {
                setNewTicket({ ...newTicket, description: e.target.value });
                if (formErrors.description)
                  setFormErrors({ ...formErrors, description: "" });
              }}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white ${
                formErrors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.description && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.description}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lampiran (Optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                id="attachment-upload"
                multiple
                onChange={handleAttachmentUpload}
                className="hidden"
              />
              <label
                htmlFor="attachment-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <PaperClipIcon className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">
                  Klik untuk upload file pendukung (foto, screenshot, dll.)
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Max 5MB per file. Format: JPG, PNG, PDF, DOC
                </p>
              </label>

              {/* Preview Attachments */}
              {attachmentFiles.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    File yang akan diupload:
                  </p>
                  <div className="space-y-2">
                    {attachmentFiles.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded"
                      >
                        <div className="flex items-center gap-2">
                          {file.type.startsWith("image/") ? (
                            <PhotoIcon className="w-4 h-4 text-gray-500" />
                          ) : (
                            <DocumentTextIcon className="w-4 h-4 text-gray-500" />
                          )}
                          <span className="text-sm text-gray-700 truncate max-w-xs">
                            {file.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <XMarkIcon className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => {
              setIsCreateModalOpen(false);
              setFormErrors({});
              setAttachmentFiles([]);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
          >
            Batal
          </button>
          <button
            onClick={handleCreateTicket}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            Ajukan Tiket
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== SOLUTION MODAL ====================
  const renderSolutionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">
              Provide Solution for the Reported Problem
            </h2>
            <button
              onClick={() => {
                setIsSolutionModalOpen(false);
                setSolutionText("");
                setSolutionStatus("Open");
                setSelectedTicketForSolution(null);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Ticket #{selectedTicketForSolution?.ticketId}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Ticket Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Ticket Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Ticket ID</p>
                <p className="font-medium text-gray-900">
                  {selectedTicketForSolution?.ticketId}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Submitted Date</p>
                <p className="font-medium text-gray-900">
                  {selectedTicketForSolution?.createdAt} at 11:20
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Operator</p>
                <p className="font-medium text-gray-900">
                  {selectedTicketForSolution?.assignee}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Site</p>
                <p className="font-medium text-gray-900">
                  {selectedTicketForSolution?.site}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Priority</p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(selectedTicketForSolution?.priority)}`}
                >
                  {selectedTicketForSolution?.priority}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-medium text-gray-900">
                  {selectedTicketForSolution?.category}
                </p>
              </div>
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Problem Description
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700">
                {selectedTicketForSolution?.description}
              </p>
            </div>
          </div>

          {/* Attachments */}
          {selectedTicketForSolution?.attachments &&
            selectedTicketForSolution.attachments.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Attachments
                </h3>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <PhotoIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {selectedTicketForSolution.attachments[0].name}
                    </p>
                    <p className="text-sm text-gray-600">Image</p>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                    Download
                  </button>
                </div>
              </div>
            )}

          {/* Provide Solution */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Provide Solution
            </h3>

            {/* Status Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setSolutionStatus("Open")}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    solutionStatus === "Open"
                      ? "bg-blue-50 border-blue-500 text-blue-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Open
                </button>
                <button
                  onClick={() => setSolutionStatus("Pending")}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    solutionStatus === "Pending"
                      ? "bg-yellow-50 border-yellow-500 text-yellow-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Pending
                </button>
                <button
                  onClick={() => setSolutionStatus("Resolved")}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    solutionStatus === "Resolved"
                      ? "bg-green-50 border-green-500 text-green-700"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Resolved
                </button>
              </div>
            </div>

            {/* Solution Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solution / Response
              </label>
              <textarea
                rows={6}
                placeholder="Enter your solution, instructions, or request for more information..."
                value={solutionText}
                onChange={(e) => setSolutionText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white"
              />
              <p className="text-sm text-gray-500 mt-1">
                Provide clear instructions or solution. If more information is
                needed from operator, explain what is required.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => {
              setIsSolutionModalOpen(false);
              setSolutionText("");
              setSolutionStatus("Open");
              setSelectedTicketForSolution(null);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmitSolution}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== RENDER REPORT DETAIL MODAL ====================
  const renderReportDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Report Details</h2>
            <button
              onClick={() => setIsReportDetailModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Date: {selectedReport?.date} | Time: {selectedReport?.time}
          </p>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Report Information
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Operator:</span>
                  <span className="font-medium">
                    {selectedReport?.operator}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium">
                    {selectedReport?.location}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span
                    className={`font-medium ${selectedReport?.status === "Submitted" ? "text-green-600" : "text-yellow-600"}`}
                  >
                    {selectedReport?.status}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Water Parameters
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">pH Level:</span>
                  <span className="font-medium">{selectedReport?.pHLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Flow Rate:</span>
                  <span className="font-medium">
                    {selectedReport?.flowRate} L/h
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">TDS:</span>
                  <span className="font-medium">{selectedReport?.tds} ppm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">EC:</span>
                  <span className="font-medium">
                    {selectedReport?.ec} μS/cm
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800 mb-3">
              Additional Notes
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{selectedReport?.additionalNotes}</p>
            </div>
          </div>
          {selectedReport?.uploadedFiles &&
            selectedReport.uploadedFiles.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedReport.uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="relative h-40 rounded-lg overflow-hidden border border-gray-200"
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Report photo ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer hover:opacity-90"
                        onClick={() => openImageModal(file)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setIsReportDetailModalOpen(false)}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== RENDER IMAGE MODAL ====================
  const renderImageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-4xl max-h-[90vh]">
        <button
          onClick={() => setIsImageModalOpen(false)}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        <img
          src={URL.createObjectURL(selectedImage)}
          alt="Full size"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>
    </div>
  );

  // ==================== ARROW UP TRAY ICON (missing import) ====================
  const ArrowUpTrayIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );

  // ==================== MAIN RENDER ====================
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-200 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
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
            className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition"
          >
            <XMarkIcon className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                      activeMenu === item.id
                        ? "bg-cyan-500 text-cyan-100 border-cyan-900"
                        : "text-gray-800 hover:bg-cyan-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-gray-800" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Badge */}
        <div className="p-4 mt-auto">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
        flex items-center justify-center text-white font-bold text-lg shadow-md"
              >
                {user.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate text-sm">
                  {user.name}
                </p>
                <p className="text-gray-600 truncate text-xs mt-0.5">
                  {user.email}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-500 text-xs truncate">{user.role}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>{user.site}</span>
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-800 hover:text-teal-600"
              >
                <Bars3Icon className="w-6 h-6 text-gray-800" />
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                {menuItems.find((m) => m.id === activeMenu)?.name}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {/* Notifikasi */}
              <div ref={notificationRef} className="relative">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="p-2 text-gray-800 hover:text-teal-600 relative transition-colors"
                >
                  <BellIcon className="w-6 h-6 text-gray-800" />
                  {getUnreadNotificationsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1 border-2 border-white font-medium">
                      {getUnreadNotificationsCount() > 99
                        ? "99+"
                        : getUnreadNotificationsCount()}
                    </span>
                  )}
                </button>
                {isNotificationOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999]">
                    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-800">
                        Notifikasi
                      </h3>
                      <button
                        onClick={markAllNotificationsAsRead}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Tandai semua dibaca
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="text-center py-8">
                          <BellIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500">Tidak ada notifikasi</p>
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors ${
                              !notification.read ? "bg-blue-50" : ""
                            }`}
                            onClick={() =>
                              handleNotificationClick(notification)
                            }
                          >
                            <div className="flex justify-between items-start mb-1">
                              <p
                                className={`font-medium ${
                                  notification.read
                                    ? "text-gray-600"
                                    : "text-gray-900"
                                }`}
                              >
                                {notification.title}
                              </p>
                              <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                {notification.time}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${
                                    notification.type === "success"
                                      ? "bg-green-500"
                                      : notification.type === "warning"
                                        ? "bg-yellow-500"
                                        : "bg-blue-500"
                                  }`}
                                ></div>
                                <span className="text-xs text-gray-500">
                                  {notification.type === "success"
                                    ? "Disetujui"
                                    : notification.type === "warning"
                                      ? "Perhatian"
                                      : "Informasi"}
                                </span>
                              </div>
                              {!notification.read && (
                                <span className="text-xs text-blue-600 font-medium">
                                  Baru
                                </span>
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200">
                      <button
                        onClick={handleViewAllNotifications}
                        className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1 font-medium"
                      >
                        Lihat Semua Notifikasi
                      </button>
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
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                    {user.initial}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                          {user.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {user.email}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {user.role} • {user.site}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={async () => {
                        setDropdownOpen(false);
                        await fetch("/api/auth/logout", { method: "POST" });
                        router.push("/");
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm"
                    >
                      <ArrowRightOnRectangleIcon className="w-4 h-4 text-red-600" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        {activeMenu === "dashboard" && renderDashboard()}
        {activeMenu === "reports" && renderDailyReport()}
        {activeMenu === "presensi" && renderPresence()}
        {activeMenu === "help" && renderHelpDesk()}
      </div>

      {/* Modals */}
      {isCheckInModalOpen && renderCheckInModal()}
      {isCheckOutModalOpen && renderCheckOutModal()}
      {isDetailModalOpen && selectedAttendance && renderDetailModal()}
      {isCreateModalOpen && renderCreateTicketModal()}
      {isReportDetailModalOpen && selectedReport && renderReportDetailModal()}
      {isImageModalOpen && renderImageModal()}
      {isSolutionModalOpen &&
        selectedTicketForSolution &&
        renderSolutionModal()}

      {/* Canvas untuk capture foto (hidden) */}
      <canvas ref={canvasRefCheckIn} className="hidden" />
      <canvas ref={canvasRefCheckOut} className="hidden" />
    </div>
  );
}
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT
//KODE DENGAN GEOLOKASI DEFAULT