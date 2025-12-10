// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================

// "use client";
// import dynamic from "next/dynamic";
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
//   MagnifyingGlassIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ClockIcon,
//   EyeIcon,
//   ExclamationTriangleIcon,
//   DocumentTextIcon,
//   UserIcon,
//   CogIcon,
//   PlusIcon,
//   PencilIcon,
//   TrashIcon,
//   CalendarIcon,
//   UserGroupIcon,
//   BuildingOfficeIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";

// // Storage keys untuk sinkronisasi
// const STORAGE_KEYS = {
//   ATTENDANCE: "synchronized_attendance_data",
//   NOTIFICATIONS: "synchronized_notifications",
//   DASHBOARD: "synchronized_dashboard_data",
//   SHIFTS: "synchronized_shifts_data",
//   SITES: "synchronized_sites_data",
//   LEAVE_REQUESTS: "synchronized_leave_requests",
//   LAST_SYNC: "last_sync_timestamp",
// };

// export default function HRD() {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const [hoveredPie, setHoveredPie] = useState(null);
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [selectedAttendance, setSelectedAttendance] = useState(null);

//   // State baru untuk fitur tambahan
//   const [showShiftForm, setShowShiftForm] = useState(false);
//   const [showSiteForm, setShowSiteForm] = useState(false);
//   const [showLeaveModal, setShowLeaveModal] = useState(false);
//   const [editingShift, setEditingShift] = useState(null);
//   const [editingSite, setEditingSite] = useState(null);
//   const [selectedLeave, setSelectedLeave] = useState(null);

//   // Form state untuk shift
//   const [shiftForm, setShiftForm] = useState({
//     name: "",
//     startTime: "08:00",
//     endTime: "17:00",
//     siteId: "",
//     maxOperators: 5,
//   });

//   // Form state untuk site
//   const [siteForm, setSiteForm] = useState({
//     name: "",
//     location: "",
//     address: "",
//     capacity: 10,
//     supervisor: "",
//     contact: "",
//   });

//   const router = useRouter();
//   const dropdownRef = useRef(null);
//   const notificationRef = useRef(null);
//   const shiftFormRef = useRef(null);
//   const siteFormRef = useRef(null);
//   const sidebarRef = useRef(null);

//   // ==================== FUNGSI SINKRONISASI ====================

//   const getSynchronizedData = (key, defaultValue) => {
//     if (typeof window === "undefined") return defaultValue;

//     try {
//       const stored = localStorage.getItem(key);
//       if (stored) {
//         return JSON.parse(stored);
//       }
//     } catch (error) {
//       console.error(`Error reading ${key} from localStorage:`, error);
//     }

//     return defaultValue;
//   };

//   const setSynchronizedData = (key, data) => {
//     if (typeof window === "undefined") return;

//     try {
//       localStorage.setItem(key, JSON.stringify(data));
//       localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
//     } catch (error) {
//       console.error(`Error saving ${key} to localStorage:`, error);
//     }
//   };

//   const setupDataSync = () => {
//     if (typeof window === "undefined") return;

//     const handleStorageChange = (e) => {
//       if (e.key === STORAGE_KEYS.ATTENDANCE) {
//         const newData = JSON.parse(e.newValue || "[]");
//         setAttendanceData(newData);
//         updateDashboardStats(newData);
//       } else if (e.key === STORAGE_KEYS.NOTIFICATIONS) {
//         const newData = JSON.parse(e.newValue || "[]");
//         setNotifications(newData);
//       } else if (e.key === STORAGE_KEYS.DASHBOARD) {
//         const newData = JSON.parse(e.newValue || "{}");
//         setDashboardData(newData);
//       } else if (e.key === STORAGE_KEYS.SHIFTS) {
//         const newData = JSON.parse(e.newValue || "[]");
//         setShifts(newData);
//       } else if (e.key === STORAGE_KEYS.SITES) {
//         const newData = JSON.parse(e.newValue || "[]");
//         setSites(newData);
//       } else if (e.key === STORAGE_KEYS.LEAVE_REQUESTS) {
//         const newData = JSON.parse(e.newValue || "[]");
//         setLeaveRequests(newData);
//       }
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   };

//   const updateDashboardStats = (attendanceData) => {
//     const totalOperators = 127;
//     const pendingValidation = attendanceData.filter(
//       (item) => item.status === "pending"
//     ).length;
//     const approvedToday = attendanceData.filter(
//       (item) =>
//         item.status === "approved" &&
//         item.date === new Date().toISOString().split("T")[0]
//     ).length;

//     const attendanceRate =
//       totalOperators > 0
//         ? Math.round((approvedToday / totalOperators) * 100 * 10) / 10
//         : 0;

//     const newDashboardData = {
//       totalOperators,
//       presentToday: approvedToday,
//       attendanceRate,
//       pendingValidation,
//     };

//     setDashboardData(newDashboardData);
//     setSynchronizedData(STORAGE_KEYS.DASHBOARD, newDashboardData);
//   };

//   // ==================== DATA YANG DISINKRONISASI ====================

//   const [attendanceData, setAttendanceData] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.ATTENDANCE, [
//       {
//         id: 1,
//         operator: "Budi Santoso",
//         site: "Jakarta Utara - Site A",
//         date: new Date().toISOString().split("T")[0],
//         checkIn: "08:00",
//         checkOut: "16:00",
//         status: "pending",
//         submittedBy: "admin",
//         location: "Jakarta Utara",
//         notes: "Attendance submitted on time",
//         totalHours: "8 hours",
//         lateMinutes: 0,
//       },
//       {
//         id: 2,
//         operator: "Siti Nurhaliza",
//         site: "Bandung - Site B",
//         date: new Date().toISOString().split("T")[0],
//         checkIn: "08:05",
//         checkOut: "16:02",
//         status: "pending",
//         submittedBy: "operator",
//         location: "Bandung",
//         notes: "Slight delay due to traffic",
//         totalHours: "7 hours 57 minutes",
//         lateMinutes: 5,
//       },
//       {
//         id: 3,
//         operator: "Ahmad Hidayat",
//         site: "Surabaya - Site C",
//         date: new Date().toISOString().split("T")[0],
//         checkIn: "07:58",
//         checkOut: "16:05",
//         status: "approved",
//         submittedBy: "admin",
//         location: "Surabaya",
//         notes: "Excellent attendance record",
//         totalHours: "8 hours 7 minutes",
//         lateMinutes: 0,
//       },
//       {
//         id: 4,
//         operator: "Dewi Lestari",
//         site: "Semarang - Site D",
//         date: new Date().toISOString().split("T")[0],
//         checkIn: "08:10",
//         checkOut: "16:00",
//         status: "pending",
//         submittedBy: "operator",
//         location: "Semarang",
//         notes: "Waiting for validation",
//         totalHours: "7 hours 50 minutes",
//         lateMinutes: 10,
//       },
//     ])
//   );

//   const [notifications, setNotifications] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.NOTIFICATIONS, [
//       {
//         id: 1,
//         title: "Attendance perlu validasi",
//         message: `${getSynchronizedData(STORAGE_KEYS.ATTENDANCE, []).filter((item) => item.status === "pending").length} data attendance menunggu validasi`,
//         time: "5 menit lalu",
//         read: false,
//         type: "validation",
//         route: "validation",
//       },
//       {
//         id: 2,
//         title: "Data baru diterima",
//         message: "Budi Santoso mengirim attendance dari Site A",
//         time: "1 jam lalu",
//         read: false,
//         type: "new_data",
//         route: "validation",
//       },
//       {
//         id: 3,
//         title: "Laporan bulanan",
//         message: "Laporan attendance bulan ini sudah tersedia",
//         time: "2 jam lalu",
//         read: true,
//         type: "report",
//         route: "dashboard",
//       },
//     ])
//   );

//   const [dashboardData, setDashboardData] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.DASHBOARD, {
//       totalOperators: 127,
//       presentToday: 118,
//       attendanceRate: 96.5,
//       pendingValidation: getSynchronizedData(STORAGE_KEYS.ATTENDANCE, []).filter(
//         (item) => item.status === "pending"
//       ).length,
//     })
//   );

//   // DATA BARU UNTUK FITUR TAMBAHAN
//   const [shifts, setShifts] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.SHIFTS, [
//       { id: 1, name: "Morning Shift", startTime: "07:00", endTime: "15:00", siteId: "1", maxOperators: 8 },
//       { id: 2, name: "Afternoon Shift", startTime: "15:00", endTime: "23:00", siteId: "2", maxOperators: 6 },
//       { id: 3, name: "Night Shift", startTime: "23:00", endTime: "07:00", siteId: "3", maxOperators: 4 },
//     ])
//   );

//   const [sites, setSites] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.SITES, [
//       { id: 1, name: "Site A", location: "Jakarta Utara", address: "Jl. Raya Jakarta No. 123", capacity: 15, supervisor: "Budi Santoso", contact: "0812-3456-7890" },
//       { id: 2, name: "Site B", location: "Bandung", address: "Jl. Raya Bandung No. 456", capacity: 12, supervisor: "Siti Nurhaliza", contact: "0813-4567-8901" },
//       { id: 3, name: "Site C", location: "Surabaya", address: "Jl. Raya Surabaya No. 789", capacity: 10, supervisor: "Ahmad Hidayat", contact: "0814-5678-9012" },
//     ])
//   );

//   const [leaveRequests, setLeaveRequests] = useState(() =>
//     getSynchronizedData(STORAGE_KEYS.LEAVE_REQUESTS, [
//       { id: 1, operator: "Budi Santoso", type: "izin", startDate: "2024-12-01", endDate: "2024-12-01", reason: "Sakit", status: "pending", submittedDate: "2024-11-28" },
//       { id: 2, operator: "Siti Nurhaliza", type: "libur", startDate: "2024-12-10", endDate: "2024-12-12", reason: "Cuti tahunan", status: "pending", submittedDate: "2024-11-29" },
//       { id: 3, operator: "Ahmad Hidayat", type: "izin", startDate: "2024-12-05", endDate: "2024-12-05", reason: "Keperluan keluarga", status: "approved", submittedDate: "2024-11-27" },
//     ])
//   );

//   const hrdUser = {
//     name: "Katira Sala",
//     email: "katira.sala@email.com",
//     site: "Central Office",
//     initial: "K",
//     role: "HRD Manager",
//   };

//   // ==================== USE EFFECT ====================

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (notificationRef.current && !notificationRef.current.contains(event.target)) {
//         setNotificationOpen(false);
//       }
//       if (shiftFormRef.current && !shiftFormRef.current.contains(event.target) && showShiftForm) {
//         setShowShiftForm(false);
//         setEditingShift(null);
//         resetShiftForm();
//       }
//       if (siteFormRef.current && !siteFormRef.current.contains(event.target) && showSiteForm) {
//         setShowSiteForm(false);
//         setEditingSite(null);
//         resetSiteForm();
//       }
//     }

//     const cleanupSync = setupDataSync();
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       if (cleanupSync) cleanupSync();
//     };
//   }, [showShiftForm, showSiteForm]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.ATTENDANCE, attendanceData);
//     updateDashboardStats(attendanceData);
//   }, [attendanceData]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.NOTIFICATIONS, notifications);
//   }, [notifications]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.DASHBOARD, dashboardData);
//   }, [dashboardData]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.SHIFTS, shifts);
//   }, [shifts]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.SITES, sites);
//   }, [sites]);

//   useEffect(() => {
//     setSynchronizedData(STORAGE_KEYS.LEAVE_REQUESTS, leaveRequests);
//   }, [leaveRequests]);

//   // ==================== FUNGSI UTAMA ====================

// const menuItems = [
//   { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//   { id: "attendance", name: "Attendance", icon: DocumentTextIcon },
//   { id: "validation", name: "Attendance Validation", icon: CheckCircleIcon },
//   { id: "shiftManagement", name: "Shift Management", icon: ClockIcon },
//   { id: "siteManagement", name: "Site Management", icon: BuildingOfficeIcon },
//   { id: "leaveManagement", name: "Leave Management", icon: CalendarIcon },
// ];

//   // Fungsi untuk handle approve attendance
//   const handleApprove = (id) => {
//     const updatedData = attendanceData.map((item) =>
//       item.id === id ? { ...item, status: "approved" } : item
//     );
//     setAttendanceData(updatedData);

//     const approvedItem = attendanceData.find((item) => item.id === id);
//     const newNotification = {
//       id: Date.now(),
//       title: "Attendance Approved",
//       message: `Data attendance ${approvedItem.operator} telah disetujui`,
//       time: "Baru saja",
//       read: false,
//       type: "approval",
//       route: "validation",
//     };
//     setNotifications((prev) => [newNotification, ...prev]);
//   };

//   // Fungsi untuk handle reject attendance
//   const handleReject = (id) => {
//     const updatedData = attendanceData.map((item) =>
//       item.id === id ? { ...item, status: "rejected" } : item
//     );
//     setAttendanceData(updatedData);

//     const rejectedItem = attendanceData.find((item) => item.id === id);
//     const newNotification = {
//       id: Date.now(),
//       title: "Attendance Rejected",
//       message: `Data attendance ${rejectedItem.operator} telah ditolak`,
//       time: "Baru saja",
//       read: false,
//       type: "rejection",
//       route: "validation",
//     };
//     setNotifications((prev) => [newNotification, ...prev]);
//   };

//   // ==================== FUNGSI SHIFT MANAGEMENT ====================

//   const resetShiftForm = () => {
//     setShiftForm({
//       name: "",
//       startTime: "08:00",
//       endTime: "17:00",
//       siteId: "",
//       maxOperators: 5,
//     });
//     setEditingShift(null);
//   };

//   const handleAddShift = () => {
//     if (!shiftForm.name || !shiftForm.siteId) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (editingShift) {
//       const updatedShifts = shifts.map(shift =>
//         shift.id === editingShift.id ? { ...shift, ...shiftForm, id: editingShift.id } : shift
//       );
//       setShifts(updatedShifts);

//       const newNotification = {
//         id: Date.now(),
//         title: "Shift Updated",
//         message: `Shift ${shiftForm.name} has been updated`,
//         time: "Baru saja",
//         read: false,
//         type: "shift",
//         route: "shiftManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     } else {
//       const newShift = {
//         id: shifts.length > 0 ? Math.max(...shifts.map(s => s.id)) + 1 : 1,
//         ...shiftForm,
//       };
//       setShifts([...shifts, newShift]);

//       const newNotification = {
//         id: Date.now(),
//         title: "New Shift Added",
//         message: `Shift ${shiftForm.name} has been added`,
//         time: "Baru saja",
//         read: false,
//         type: "shift",
//         route: "shiftManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     }

//     setShowShiftForm(false);
//     resetShiftForm();
//   };

//   const handleEditShift = (shift) => {
//     setEditingShift(shift);
//     setShiftForm({
//       name: shift.name,
//       startTime: shift.startTime,
//       endTime: shift.endTime,
//       siteId: shift.siteId,
//       maxOperators: shift.maxOperators,
//     });
//     setShowShiftForm(true);
//   };

//   const handleDeleteShift = (id) => {
//     if (window.confirm("Are you sure you want to delete this shift?")) {
//       const shiftToDelete = shifts.find(shift => shift.id === id);
//       setShifts(shifts.filter(shift => shift.id !== id));

//       const newNotification = {
//         id: Date.now(),
//         title: "Shift Deleted",
//         message: `Shift ${shiftToDelete.name} has been deleted`,
//         time: "Baru saja",
//         read: false,
//         type: "shift",
//         route: "shiftManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     }
//   };

//   // ==================== FUNGSI SITE MANAGEMENT ====================

//   const resetSiteForm = () => {
//     setSiteForm({
//       name: "",
//       location: "",
//       address: "",
//       capacity: 10,
//       supervisor: "",
//       contact: "",
//     });
//     setEditingSite(null);
//   };

//   const handleAddSite = () => {
//     if (!siteForm.name || !siteForm.location || !siteForm.address) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (editingSite) {
//       const updatedSites = sites.map(site =>
//         site.id === editingSite.id ? { ...site, ...siteForm, id: editingSite.id } : site
//       );
//       setSites(updatedSites);

//       const newNotification = {
//         id: Date.now(),
//         title: "Site Updated",
//         message: `Site ${siteForm.name} has been updated`,
//         time: "Baru saja",
//         read: false,
//         type: "site",
//         route: "siteManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     } else {
//       const newSite = {
//         id: sites.length > 0 ? Math.max(...sites.map(s => s.id)) + 1 : 1,
//         ...siteForm,
//       };
//       setSites([...sites, newSite]);

//       const newNotification = {
//         id: Date.now(),
//         title: "New Site Added",
//         message: `Site ${siteForm.name} has been added`,
//         time: "Baru saja",
//         read: false,
//         type: "site",
//         route: "siteManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     }

//     setShowSiteForm(false);
//     resetSiteForm();
//   };

//   const handleEditSite = (site) => {
//     setEditingSite(site);
//     setSiteForm({
//       name: site.name,
//       location: site.location,
//       address: site.address,
//       capacity: site.capacity,
//       supervisor: site.supervisor,
//       contact: site.contact,
//     });
//     setShowSiteForm(true);
//   };

//   const handleDeleteSite = (id) => {
//     if (window.confirm("Are you sure you want to delete this site?")) {
//       const siteToDelete = sites.find(site => site.id === id);
//       setSites(sites.filter(site => site.id !== id));

//       const newNotification = {
//         id: Date.now(),
//         title: "Site Deleted",
//         message: `Site ${siteToDelete.name} has been deleted`,
//         time: "Baru saja",
//         read: false,
//         type: "site",
//         route: "siteManagement",
//       };
//       setNotifications((prev) => [newNotification, ...prev]);
//     }
//   };

//   // ==================== FUNGSI LEAVE MANAGEMENT ====================

//   const handleApproveLeave = (id) => {
//     const updatedLeaveRequests = leaveRequests.map(request =>
//       request.id === id ? { ...request, status: "approved" } : request
//     );
//     setLeaveRequests(updatedLeaveRequests);

//     const approvedLeave = leaveRequests.find(request => request.id === id);
//     const newNotification = {
//       id: Date.now(),
//       title: "Leave Request Approved",
//       message: `${approvedLeave.type} request from ${approvedLeave.operator} has been approved`,
//       time: "Baru saja",
//       read: false,
//       type: "leave",
//       route: "leaveManagement",
//     };
//     setNotifications((prev) => [newNotification, ...prev]);
//   };

//   const handleRejectLeave = (id) => {
//     const updatedLeaveRequests = leaveRequests.map(request =>
//       request.id === id ? { ...request, status: "rejected" } : request
//     );
//     setLeaveRequests(updatedLeaveRequests);

//     const rejectedLeave = leaveRequests.find(request => request.id === id);
//     const newNotification = {
//       id: Date.now(),
//       title: "Leave Request Rejected",
//       message: `${rejectedLeave.type} request from ${rejectedLeave.operator} has been rejected`,
//       time: "Baru saja",
//       read: false,
//       type: "leave",
//       route: "leaveManagement",
//     };
//     setNotifications((prev) => [newNotification, ...prev]);
//   };

//   const openLeaveDetail = (leave) => {
//     setSelectedLeave(leave);
//     setShowLeaveModal(true);
//   };

//   // ==================== FUNGSI TAMBAHAN ====================

//   const openDetailModal = (attendance) => {
//     setSelectedAttendance(attendance);
//     setIsDetailModalOpen(true);
//   };

//   const closeDetailModal = () => {
//     setIsDetailModalOpen(false);
//     setSelectedAttendance(null);
//   };

//   const handleViewAllAttendance = () => {
//     setActiveMenu("validation");
//   };

//   const handleNotificationClick = (notification) => {
//     markAsRead(notification.id);
//     if (notification.route) {
//       setActiveMenu(notification.route);
//     }
//     setNotificationOpen(false);
//   };

//   const markAsRead = (id) => {
//     setNotifications((prev) =>
//       prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
//     );
//   };

//   const markAllAsRead = () => {
//     setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
//   };

//   const unreadNotifications = notifications.filter((notif) => !notif.read).length;

//   // ==================== DATA VISUALISASI ====================

//   const calculateWeeklyAttendanceData = () => {
//     const today = new Date();
//     const days = [];

//     for (let i = 6; i >= 0; i--) {
//       const date = new Date(today);
//       date.setDate(today.getDate() - i);
//       const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//       const dayName = dayNames[date.getDay()];

//       const dayData = attendanceData.filter((item) => {
//         const itemDate = new Date(item.date);
//         return itemDate.toDateString() === date.toDateString();
//       });

//       const approved = dayData.filter((item) => item.status === "approved");
//       const pending = dayData.filter((item) => item.status === "pending");
//       const rejected = dayData.filter((item) => item.status === "rejected");

//       const present = approved.filter((item) => item.lateMinutes === 0).length;
//       const late = approved.filter((item) => item.lateMinutes > 0).length;
//       const absent =
//         rejected.length +
//         (dashboardData.totalOperators - approved.length - pending.length);

//       days.push({
//         day: dayName,
//         present: Math.max(0, present),
//         late: Math.max(0, late),
//         absent: Math.max(0, absent),
//       });
//     }

//     return days;
//   };

//   const weeklyAttendanceData = calculateWeeklyAttendanceData();

//   const todayStatusData = [
//     { status: "Present", value: 85, color: "#10B981" },
//     { status: "Late", value: 7, color: "#F59E0B" },
//     { status: "Absent", value: 8, color: "#EF4444" },
//   ];

//   const topPerformersData = [
//     { name: "Budi Santoso", location: "Jakarta Utara", performance: "100%" },
//     { name: "Siti Nurhaliza", location: "Bandung", performance: "98%" },
//     { name: "Ahmad Hidayat", location: "Surabaya", performance: "97%" },
//     { name: "David Lesteri", location: "Seoul", performance: "96%" },
//   ];

//   const recentAttendanceData = attendanceData.slice(0, 4).map((item) => ({
//     id: item.id,
//     name: item.operator,
//     location: item.location,
//     time: item.checkIn,
//     status: item.status,
//     checkOut: item.checkOut,
//   }));

//   const calculatePieChart = () => {
//     let accumulatedValue = 0;
//     return todayStatusData.map((item, index) => {
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

//   const filteredData = attendanceData.filter((item) => {
//     const matchesSearch =
//       item.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.site.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesFilter =
//       selectedFilter === "All" || item.status === selectedFilter.toLowerCase();

//     return matchesSearch && matchesFilter;
//   });

//   const stats = {
//     total: attendanceData.length,
//     pending: attendanceData.filter((item) => item.status === "pending").length,
//     approved: attendanceData.filter((item) => item.status === "approved").length,
//     rejected: attendanceData.filter((item) => item.status === "rejected").length,
//   };

//   // ==================== MODAL SHIFT FORM ====================

//   const ShiftFormModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div ref={shiftFormRef} className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold text-gray-900">
//               {editingShift ? "Edit Shift" : "Add New Shift"}
//             </h3>
//             <button
//               onClick={() => {
//                 setShowShiftForm(false);
//                 resetShiftForm();
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Shift Name *
//               </label>
//               <input
//                 type="text"
//                 value={shiftForm.name}
//                 onChange={(e) => setShiftForm({ ...shiftForm, name: e.target.value })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="e.g., Morning Shift"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Start Time *
//                 </label>
//                 <input
//                   type="time"
//                   value={shiftForm.startTime}
//                   onChange={(e) => setShiftForm({ ...shiftForm, startTime: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   End Time *
//                 </label>
//                 <input
//                   type="time"
//                   value={shiftForm.endTime}
//                   onChange={(e) => setShiftForm({ ...shiftForm, endTime: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Opsi *
//               </label>
//               <div className="relative">
//                 <select
//                   value={shiftForm.siteId}
//                   onChange={(e) => setShiftForm({ ...shiftForm, siteId: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
//                 >
//                   <option value="">Select Opsi</option>
//                   {sites.map((site) => (
//                     <option key={site.id} value={site.id}>
//                       {site.name} - {site.location}
//                     </option>
//                   ))}
//                 </select>
//                 <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Maximum Operators
//               </label>
//               <div className="relative">
//                 <select
//                   value={shiftForm.maxOperators}
//                   onChange={(e) => setShiftForm({ ...shiftForm, maxOperators: parseInt(e.target.value) })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
//                 >
//                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(num => (
//                     <option key={num} value={num}>{num} operator{num !== 1 ? 's' : ''}</option>
//                   ))}
//                 </select>
//                 <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8 flex gap-3">
//             <button
//               onClick={handleAddShift}
//               className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
//             >
//               {editingShift ? "Update Shift" : "Add Shift"}
//             </button>
//             <button
//               onClick={() => {
//                 setShowShiftForm(false);
//                 resetShiftForm();
//               }}
//               className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL SITE FORM ====================

//   const SiteFormModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div ref={siteFormRef} className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold text-gray-900">
//               {editingSite ? "Edit Site" : "Add New Site"}
//             </h3>
//             <button
//               onClick={() => {
//                 setShowSiteForm(false);
//                 resetSiteForm();
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Site Name *
//               </label>
//               <input
//                 type="text"
//                 value={siteForm.name}
//                 onChange={(e) => setSiteForm({ ...siteForm, name: e.target.value })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="e.g., Site A"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Location *
//               </label>
//               <input
//                 type="text"
//                 value={siteForm.location}
//                 onChange={(e) => setSiteForm({ ...siteForm, location: e.target.value })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="e.g., Jakarta Utara"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Address *
//               </label>
//               <textarea
//                 value={siteForm.address}
//                 onChange={(e) => setSiteForm({ ...siteForm, address: e.target.value })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 rows="3"
//                 placeholder="Full address"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Capacity
//                 </label>
//                 <div className="relative">
//                   <select
//                     value={siteForm.capacity}
//                     onChange={(e) => setSiteForm({ ...siteForm, capacity: parseInt(e.target.value) })}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
//                   >
//                     {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map(num => (
//                       <option key={num} value={num}>{num} operators</option>
//                     ))}
//                   </select>
//                   <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Supervisor
//                 </label>
//                 <input
//                   type="text"
//                   value={siteForm.supervisor}
//                   onChange={(e) => setSiteForm({ ...siteForm, supervisor: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Supervisor name"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Contact Number
//               </label>
//               <input
//                 type="tel"
//                 value={siteForm.contact}
//                 onChange={(e) => setSiteForm({ ...siteForm, contact: e.target.value })}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="0812-3456-7890"
//               />
//             </div>
//           </div>

//           <div className="mt-8 flex gap-3">
//             <button
//               onClick={handleAddSite}
//               className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
//             >
//               {editingSite ? "Update Site" : "Add Site"}
//             </button>
//             <button
//               onClick={() => {
//                 setShowSiteForm(false);
//                 resetSiteForm();
//               }}
//               className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== MODAL LEAVE DETAIL ====================

//   const LeaveDetailModal = () => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold text-gray-900">
//               Leave Request Details
//             </h3>
//             <button
//               onClick={() => {
//                 setShowLeaveModal(false);
//                 setSelectedLeave(null);
//               }}
//               className="text-gray-400 hover:text-gray-600"
//             >
//               <XMarkIcon className="w-6 h-6" />
//             </button>
//           </div>

//           {selectedLeave && (
//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-700">Operator</label>
//                 <p className="mt-1 text-lg font-semibold text-gray-900">{selectedLeave.operator}</p>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">Type</label>
//                   <p className="mt-1">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                       selectedLeave.type === 'izin'
//                         ? 'bg-blue-100 text-blue-800'
//                         : 'bg-purple-100 text-purple-800'
//                     }`}>
//                       {selectedLeave.type === 'izin' ? 'Permission (Izin)' : 'Leave (Libur)'}
//                     </span>
//                   </p>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">Status</label>
//                   <p className="mt-1">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                       selectedLeave.status === 'approved'
//                         ? 'bg-green-100 text-green-800'
//                         : selectedLeave.status === 'rejected'
//                         ? 'bg-red-100 text-red-800'
//                         : 'bg-yellow-100 text-yellow-800'
//                     }`}>
//                       {selectedLeave.status}
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">Start Date</label>
//                   <p className="mt-1 text-gray-900">{selectedLeave.startDate}</p>
//                 </div>
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">End Date</label>
//                   <p className="mt-1 text-gray-900">{selectedLeave.endDate}</p>
//                 </div>
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Reason</label>
//                 <p className="mt-1 text-gray-900 p-3 bg-gray-50 rounded-lg">{selectedLeave.reason}</p>
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-gray-700">Submitted Date</label>
//                 <p className="mt-1 text-gray-900">{selectedLeave.submittedDate}</p>
//               </div>

//               {selectedLeave.status === "pending" && (
//                 <div className="mt-6 flex gap-3">
//                   <button
//                     onClick={() => {
//                       handleApproveLeave(selectedLeave.id);
//                       setShowLeaveModal(false);
//                     }}
//                     className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 font-medium"
//                   >
//                     <CheckCircleIcon className="w-5 h-5" />
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleRejectLeave(selectedLeave.id);
//                       setShowLeaveModal(false);
//                     }}
//                     className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 font-medium"
//                   >
//                     <XCircleIcon className="w-5 h-5" />
//                     Reject
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   // ==================== RENDER COMPONENT ====================

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Modal Attendance Detail */}
//       {isDetailModalOpen && selectedAttendance && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Attendance Details
//                 </h3>
//                 <button
//                   onClick={closeDetailModal}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <XMarkIcon className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Operator
//                   </label>
//                   <p className="mt-1 text-sm text-gray-900">
//                     {selectedAttendance.operator}
//                   </p>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Site/Location
//                   </label>
//                   <p className="mt-1 text-sm text-gray-900">
//                     {selectedAttendance.site}
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Date
//                     </label>
//                     <p className="mt-1 text-sm text-gray-900">
//                       {selectedAttendance.date}
//                     </p>
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Status
//                     </label>
//                     <span
//                       className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
//                         selectedAttendance.status === "approved"
//                           ? "bg-green-100 text-green-800"
//                           : selectedAttendance.status === "rejected"
//                           ? "bg-red-100 text-red-800"
//                           : "bg-yellow-100 text-yellow-800"
//                       }`}
//                     >
//                       {selectedAttendance.status}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Check-In
//                     </label>
//                     <div className="flex items-center gap-2 mt-1">
//                       <ClockIcon className="w-4 h-4 text-green-600" />
//                       <p className="text-sm text-gray-900">
//                         {selectedAttendance.checkIn}
//                       </p>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Check-Out
//                     </label>
//                     <div className="flex items-center gap-2 mt-1">
//                       <ClockIcon className="w-4 h-4 text-red-600" />
//                       <p className="text-sm text-gray-900">
//                         {selectedAttendance.checkOut}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Total Hours
//                     </label>
//                     <p className="mt-1 text-sm text-gray-900">
//                       {selectedAttendance.totalHours}
//                     </p>
//                   </div>

//                   <div>
//                     <label className="text-sm font-medium text-gray-700">
//                       Late Minutes
//                     </label>
//                     <p className="mt-1 text-sm text-gray-900">
//                       {selectedAttendance.lateMinutes} minutes
//                     </p>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Submitted By
//                   </label>
//                   <p className="mt-1 text-sm text-gray-900 capitalize">
//                     {selectedAttendance.submittedBy}
//                   </p>
//                 </div>

//                 <div>
//                   <label className="text-sm font-medium text-gray-700">
//                     Notes
//                   </label>
//                   <p className="mt-1 text-sm text-gray-900">
//                     {selectedAttendance.notes}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-6 flex gap-3">
//                 {selectedAttendance.status === "pending" && (
//                   <>
//                     <button
//                       onClick={() => {
//                         handleApprove(selectedAttendance.id);
//                         closeDetailModal();
//                       }}
//                       className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
//                     >
//                       <CheckCircleIcon className="w-4 h-4" />
//                       Approve
//                     </button>
//                     <button
//                       onClick={() => {
//                         handleReject(selectedAttendance.id);
//                         closeDetailModal();
//                       }}
//                       className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
//                     >
//                       <XCircleIcon className="w-4 h-4" />
//                       Reject
//                     </button>
//                   </>
//                 )}
//                 <button
//                   onClick={closeDetailModal}
//                   className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modals untuk fitur baru */}
//       {showShiftForm && <ShiftFormModal />}
//       {showSiteForm && <SiteFormModal />}
//       {showLeaveModal && selectedLeave && <LeaveDetailModal />}

//       {/* Sidebar - DIPERBAIKI SCROLLNYA */}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col
//         z-40 transform transition-transform duration-200 ease-in-out
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       >
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white flex-shrink-0">
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

//         {/* Sidebar menu - DIPERBAIKI DENGAN SCROLL SMOOTH */}
//         <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
//           <ul className="space-y-2 px-4">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => {
//                       setActiveMenu(item.id);
//                       setIsSidebarOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
//                       ${
//                         activeMenu === item.id
//                           ? "bg-gradient-to-r from-emerald-800 to-green-800 text-white shadow-md"
//                           : "text-gray-800 hover:bg-gray-100 hover:shadow-sm"
//                       }`}
//                   >
//                     <Icon className={`w-5 h-5 ${
//                       activeMenu === item.id ? "text-white" : "text-gray-500"
//                     }`} />
//                     <span className="whitespace-nowrap font-medium">{item.name}</span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* HRD badge */}
//         <div className="p-4 mt-auto border-t border-gray-200 flex-shrink-0">
//           <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-12 h-12 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg shadow-md"
//               >
//                 {hrdUser.initial}
//               </div>
//               <div className="flex-1 min-w-0">
//                 <p className="font-semibold text-gray-900 truncate text-sm">
//                   {hrdUser.name}
//                 </p>
//                 <p className="text-gray-600 truncate text-xs mt-0.5">
//                   {hrdUser.email}
//                 </p>
//                 <div className="flex items-center gap-1 mt-1">
//                   <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   <p className="text-gray-500 text-xs truncate">
//                     {hrdUser.role}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-200 mt-3 pt-3">
//               <div className="flex items-center justify-between text-xs text-gray-600">
//                 <span className="truncate">{hrdUser.site}</span>
//                 <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-medium">
//                   Active
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Area */}
//       <div className="flex-1 lg:ml-64 min-w-0">
//         <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
//           <div className="flex justify-between items-center px-4 lg:px-6 py-4">
//             {/* Hamburger */}
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => setIsSidebarOpen(true)}
//                 className="lg:hidden p-2 text-gray-800 hover:text-teal-600"
//               >
//                 <Bars3Icon className="w-6 h-6 text-gray-800" />
//               </button>

//               <h1 className="text-xl lg:text-2xl font-bold text-gray-900 truncate">
//                 {menuItems.find((m) => m.id === activeMenu)?.name}
//               </h1>
//             </div>

//             {/* Icons right */}
//             <div className="flex items-center gap-4">
//               {/* Notifikasi Dropdown */}
//               <div
//                 ref={notificationRef}
//                 className="relative flex flex-col items-end gap-2"
//               >
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setNotificationOpen((prev) => !prev);
//                   }}
//                   className="p-2 text-gray-800 hover:text-teal-600 relative"
//                 >
//                   <BellIcon className="w-6 h-6 text-gray-800" />
//                   {unreadNotifications > 0 && (
//                     <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">
//                       {unreadNotifications}
//                     </span>
//                   )}
//                 </button>

//                 {notificationOpen && (
//                   <div
//                     className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
//                       <h3 className="font-semibold text-gray-900">
//                         Notifications
//                       </h3>
//                       <button
//                         onClick={markAllAsRead}
//                         className="text-sm text-blue-600 hover:text-blue-800 font-medium"
//                       >
//                         Mark all as read
//                       </button>
//                     </div>

//                     <div className="max-h-96 overflow-y-auto">
//                       {notifications.length === 0 ? (
//                         <div className="px-4 py-8 text-center text-gray-500">
//                           No notifications
//                         </div>
//                       ) : (
//                         notifications.map((notification) => (
//                           <div
//                             key={notification.id}
//                             className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
//                               !notification.read ? "bg-blue-50" : ""
//                             }`}
//                             onClick={() =>
//                               handleNotificationClick(notification)
//                             }
//                           >
//                             <div className="flex justify-between items-start">
//                               <div className="flex-1">
//                                 <p className="font-medium text-gray-900 text-sm">
//                                   {notification.title}
//                                 </p>
//                                 <p className="text-gray-600 text-xs mt-1">
//                                   {notification.message}
//                                 </p>
//                               </div>
//                               {!notification.read && (
//                                 <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1 animate-pulse"></div>
//                               )}
//                             </div>
//                             <p className="text-gray-400 text-xs mt-2">
//                               {notification.time}
//                             </p>
//                           </div>
//                         ))
//                       )}
//                     </div>

//                     <div className="px-4 py-2 border-t border-gray-200">
//                       <button
//                         onClick={() => {
//                           setNotificationOpen(false);
//                           setActiveMenu("validation");
//                         }}
//                         className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1 font-medium"
//                       >
//                         View All Notifications
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
//                   <div
//                     className="w-10 h-10 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     {hrdUser.initial}
//                   </div>

//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className={`w-4 h-4 text-gray-800 transition-transform duration-200
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
//                     className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <div className="px-4 py-3 border-b border-gray-200">
//                       <div className="flex items-center gap-3">
//                         <div
//                           className="w-10 h-10 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full flex items-center justify-center text-white font-bold"
//                         >
//                           {hrdUser.initial}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="font-semibold text-gray-900 truncate">
//                             {hrdUser.name}
//                           </p>
//                           <p className="text-sm text-gray-600 truncate">
//                             {hrdUser.email}
//                           </p>
//                           <p className="text-xs text-gray-500 mt-1">
//                             {hrdUser.site}
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

//         {/* DASHBOARD CONTENT */}
//         {activeMenu === "dashboard" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-4 sm:mb-6">
//               <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
//                 HRD Dashboard
//               </h1>
//               <p className="text-xs sm:text-sm text-gray-600">
//                 Monitor operator attendance and performance
//               </p>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
//               {[
//                 {
//                   label: "Total Operators",
//                   value: dashboardData.totalOperators,
//                   percent: "+2.1%",
//                   icon: UsersIcon,
//                 },
//                 {
//                   label: "Present Today",
//                   value: dashboardData.presentToday,
//                   percent: "+1.5%",
//                   icon: CheckCircleIcon,
//                 },
//                 {
//                   label: "Pending Validation",
//                   value: dashboardData.pendingValidation,
//                   percent:
//                     dashboardData.pendingValidation > 0
//                       ? "+" + dashboardData.pendingValidation + " new"
//                       : "No pending",
//                   icon: ClockIcon,
//                 },
//                 {
//                   label: "Attendance Rate",
//                   value: `${dashboardData.attendanceRate}%`,
//                   percent: "+0.8%",
//                   icon: ChartBarIcon,
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex justify-between items-start mb-2 sm:mb-3 lg:mb-4">
//                       <p className="text-gray-700 font-medium text-xs sm:text-sm">
//                         {item.label}
//                       </p>
//                       <div className="p-1 sm:p-2 rounded-lg bg-blue-50">
//                         <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600" />
//                       </div>
//                     </div>
//                     <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
//                       {item.value}
//                     </p>
//                     <p
//                       className={`text-xs font-medium mt-1 ${
//                         item.percent.startsWith("+")
//                           ? "text-green-600"
//                           : item.percent.startsWith("No")
//                           ? "text-gray-500"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {item.percent}{" "}
//                       {item.label === "Pending Validation"
//                         ? ""
//                         : "vs last month"}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
//               <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 shadow-sm sm:shadow-md">
//                 <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 lg:mb-5">
//                   Weekly Attendance Trends
//                 </h3>
//                 <div className="relative">
//                   <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-1 sm:py-2">
//                     <span>150</span>
//                     <span>120</span>
//                     <span>90</span>
//                     <span>60</span>
//                     <span>30</span>
//                     <span>0</span>
//                   </div>
//                   <div className="ml-6 sm:ml-8">
//                     <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-2 border-b border-l border-gray-200 overflow-visible">
//                       {[
//                         { day: "Mon", present: 115, late: 5, absent: 7 },
//                         { day: "Tue", present: 118, late: 4, absent: 5 },
//                         { day: "Wed", present: 120, late: 3, absent: 4 },
//                         { day: "Thu", present: 116, late: 6, absent: 5 },
//                         { day: "Fri", present: 119, late: 4, absent: 4 },
//                         { day: "Sat", present: 110, late: 8, absent: 9 },
//                         { day: "Sun", present: 105, late: 7, absent: 15 },
//                       ].map((data, index) => {
//                         const maxValue = 150;
//                         const chartHeight = 120;
//                         return (
//                           <div key={index} className="flex flex-col items-center flex-1 relative overflow-visible">
//                             <div className="flex items-end justify-center gap-0.5 sm:gap-1.5 w-full overflow-visible">
//                               <div className="w-1.5 sm:w-2 lg:w-2.5 bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600 cursor-pointer relative group"
//                                 style={{ height: `${(data.present / maxValue) * chartHeight}px` }}>
//                                 <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
//                                   Present: {data.present}
//                                 </div>
//                               </div>
//                               <div className="w-1.5 sm:w-2 lg:w-2.5 bg-yellow-400 rounded-t transition-all duration-300 hover:bg-yellow-500 cursor-pointer relative group"
//                                 style={{ height: `${(data.late / maxValue) * chartHeight}px` }}>
//                                 <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
//                                   Late: {data.late}
//                                 </div>
//                               </div>
//                               <div className="w-1.5 sm:w-2 lg:w-2.5 bg-red-500 rounded-t transition-all duration-300 hover:bg-red-600 cursor-pointer relative group"
//                                 style={{ height: `${(data.absent / maxValue) * chartHeight}px` }}>
//                                 <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
//                                   Absent: {data.absent}
//                                 </div>
//                               </div>
//                             </div>
//                             <span className="text-xs text-gray-600 mt-1 sm:mt-2 font-medium">{data.day}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-3 text-xs">
//                       <div className="flex items-center gap-1 sm:gap-1.5">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
//                         <span className="text-gray-700 text-xs sm:text-sm">Present</span>
//                       </div>
//                       <div className="flex items-center gap-1 sm:gap-1.5">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded"></div>
//                         <span className="text-gray-700 text-xs sm:text-sm">Late</span>
//                       </div>
//                       <div className="flex items-center gap-1 sm:gap-1.5">
//                         <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded"></div>
//                         <span className="text-gray-700 text-xs sm:text-sm">Absent</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 shadow-sm sm:shadow-md">
//                 <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
//                   <h3 className="font-semibold text-base sm:text-lg text-gray-800">
//                     Today's Status
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
//                     <svg width="120" height="120" viewBox="0 0 100 100" className="cursor-pointer sm:w-32 sm:h-32 lg:w-36 lg:h-36">
//                       {pieChartData.map((item, index) => (
//                         <path key={item.status} d={item.path} fill={item.color} className={`transition-all duration-300 ${hoveredPie === index ? "opacity-80 scale-105" : "opacity-100"}`} stroke="white" strokeWidth="2" onMouseEnter={() => setHoveredPie(index)} onMouseLeave={() => setHoveredPie(null)} />
//                       ))}
//                     </svg>
//                     <div className="text-center mt-2 sm:mt-3">
//                       <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">85%</div>
//                       <div className="text-sm text-gray-600">Present</div>
//                     </div>
//                     {hoveredPie !== null && (
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm z-10 shadow-lg">
//                         <div className="flex items-center gap-1 sm:gap-2">
//                           <div className="w-2 h-2 sm:w-3 sm:h-3 rounded" style={{ backgroundColor: pieChartData[hoveredPie].color }}></div>
//                           <span>{pieChartData[hoveredPie].status}: {pieChartData[hoveredPie].value}%</span>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 w-full">
//                     {todayStatusData.map((item, index) => (
//                       <div key={item.status} className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${hoveredPie === index ? "bg-gray-50 transform scale-105" : ""}`} onMouseEnter={() => setHoveredPie(index)} onMouseLeave={() => setHoveredPie(null)}>
//                         <div className="flex items-center gap-2 sm:gap-3">
//                           <div className="w-3 h-3 rounded transition-transform duration-200" style={{ backgroundColor: item.color }}></div>
//                           <span className="text-sm text-gray-700 font-medium">{item.status}</span>
//                         </div>
//                         <span className="text-base sm:text-lg font-bold text-gray-900">{item.value}%</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
//               <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md">
//                 <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 lg:mb-5">
//                   Top Performers (This Month)
//                 </h3>
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   {topPerformersData.map((performer, index) => (
//                     <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
//                       <div className="flex items-center gap-2 sm:gap-3">
//                         <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
//                           {index + 1}
//                         </div>
//                         <div className="min-w-0 flex-1">
//                           <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">{performer.name}</p>
//                           <p className="text-gray-600 truncate text-xs sm:text-sm">{performer.location}</p>
//                         </div>
//                       </div>
//                       <div className="text-right flex-shrink-0 ml-2">
//                         <p className="font-bold text-gray-900 text-sm sm:text-base">{performer.performance}</p>
//                         <p className="text-blue-600 font-medium text-xs">excellent</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md">
//                 <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
//                   <h3 className="font-semibold text-base sm:text-lg text-gray-800">Recent Attendance</h3>
//                   <button onClick={handleViewAllAttendance} className="text-blue-600 text-xs sm:text-sm font-medium hover:underline">
//                     View All
//                   </button>
//                 </div>
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   {recentAttendanceData.map((attendance, index) => (
//                     <div key={index} className="flex items-center justify-between p-2 sm:p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
//                       <div className="min-w-0 flex-1">
//                         <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">{attendance.name}</p>
//                         <p className="text-gray-600 truncate text-xs sm:text-sm">{attendance.location} • {attendance.time}</p>
//                       </div>
//                       <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
//                         {attendance.status === "approved" ? <CheckCircleIcon className="w-4 h-4 text-green-500" /> : <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" />}
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${attendance.status === "approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
//                           {attendance.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ATTENDANCE CONTENT */}
//         {activeMenu === "attendance" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-6">
//               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                 Attendance Records
//               </h1>
//              <p className="text-gray-600 text-sm sm:text-base">
//                 Review and validate operator attendance records
//               </p>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
//               {[
//                 {
//                   label: "Total Today",
//                   value: stats.total,
//                   icon: DocumentChartBarIcon,
//                   bgColor: "bg-gray-100",
//                   iconColor: "text-gray-600",
//                 },
//                 {
//                   label: "Approved",
//                   value: stats.approved,
//                   icon: CheckCircleIcon,
//                   bgColor: "bg-green-100",
//                   iconColor: "text-green-600",
//                 },
//                 {
//                   label: "Rejected",
//                   value: stats.rejected,
//                   icon: XCircleIcon,
//                   bgColor: "bg-red-100",
//                   iconColor: "text-red-600",
//                 },
//                 {
//                   label: "Pending Review",
//                   value: stats.pending,
//                   icon: ClockIcon,
//                   bgColor: "bg-yellow-100",
//                   iconColor: "text-yellow-600",
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between mb-3">
//                       <p className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</p>
//                       <div className={`p-2 rounded-lg ${item.bgColor}`}>
//                         <Icon className={`w-5 h-5 ${item.iconColor}`} />
//                       </div>
//                     </div>
//                     <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
//                     <p className="text-xs sm:text-sm text-gray-500">
//                       {item.label === "Total Today" ? `Pending: ${stats.pending}` : item.label === "Pending Review" ? "Awaiting validation" : "Validated records"}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
//               <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
//                 <div className="relative flex-1">
//                   <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input type="text" placeholder="Search operator or site..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 text-sm transition" />
//                 </div>
//                 <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//                   {["All", "Pending", "Approved", "Rejected"].map((filter) => (
//                     <button key={filter} onClick={() => setSelectedFilter(filter)} className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 text-center min-w-[60px] sm:min-w-[80px] ${selectedFilter === filter ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:bg-gray-200"}`}>
//                       {filter}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Operator</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-2">Date</div>
//                 <div className="col-span-1">Check-In</div>
//                 <div className="col-span-1">Check-Out</div>
//                 <div className="col-span-2 text-center">Status</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>
//               <div className="divide-y divide-gray-200">
//                 {filteredData.length === 0 ? (
//                   <div className="text-center py-12 text-gray-500">
//                     <DocumentTextIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                     <p className="text-lg font-medium text-gray-900 mb-2">No attendance records found</p>
//                     <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//                   </div>
//                 ) : (
//                   filteredData.map((item) => (
//                     <div key={item.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
//                       <div className="lg:hidden space-y-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{item.operator}</h3>
//                             <p className="text-gray-500 text-sm mt-1 truncate">{item.site}</p>
//                           </div>
//                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
//                             {item.status}
//                           </span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Date</p>
//                             <p className="text-gray-900 text-sm font-medium">{item.date}</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Submitted By</p>
//                             <p className="text-gray-900 text-sm font-medium capitalize">{item.submittedBy}</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-2">
//                               <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
//                               <div>
//                                 <p className="text-gray-500 text-xs">Check-In</p>
//                                 <p className="text-gray-900 text-sm font-medium">{item.checkIn}</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-2">
//                               <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
//                               <div>
//                                 <p className="text-gray-500 text-xs">Check-Out</p>
//                                 <p className="text-gray-900 text-sm font-medium">{item.checkOut}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex justify-between items-center pt-3 border-t border-gray-200">
//                           <button onClick={() => openDetailModal(item)} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium">
//                             <EyeIcon className="w-4 h-4" /> View Details
//                           </button>
//                           {item.status === "pending" && (
//                             <div className="flex gap-2">
//                               <button onClick={() => handleApprove(item.id)} className="flex items-center gap-2 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium">
//                                 <CheckCircleIcon className="w-4 h-4" /> Approve
//                               </button>
//                               <button onClick={() => handleReject(item.id)} className="flex items-center gap-2 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium">
//                                 <XCircleIcon className="w-4 h-4" /> Reject
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="hidden lg:contents">
//                         <div className="col-span-3 flex items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">{item.operator}</p>
//                             <p className="text-sm text-gray-500 mt-0.5">Submitted by: {item.submittedBy}</p>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center"><p className="text-gray-700 truncate">{item.site}</p></div>
//                         <div className="col-span-2 flex items-center"><p className="text-gray-700">{item.date}</p></div>
//                         <div className="col-span-1 flex items-center">
//                           <div className="flex items-center gap-2 text-gray-700"><ClockIcon className="w-4 h-4 text-green-600" /><span className="font-medium">{item.checkIn}</span></div>
//                         </div>
//                         <div className="col-span-1 flex items-center">
//                           <div className="flex items-center gap-2 text-gray-700"><ClockIcon className="w-4 h-4 text-red-600" /><span className="font-medium">{item.checkOut}</span></div>
//                         </div>
//                         <div className="col-span-2 flex items-center justify-center">
//                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
//                             {item.status}
//                           </span>
//                         </div>
//                         <div className="col-span-1 flex items-center justify-center">
//                           <div className="flex gap-2">
//                             <button onClick={() => openDetailModal(item)} className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50" title="View Details"><EyeIcon className="w-5 h-5" /></button>
//                             {item.status === "pending" && (
//                               <>
//                                 <button onClick={() => handleApprove(item.id)} className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50" title="Approve"><CheckCircleIcon className="w-5 h-5" /></button>
//                                 <button onClick={() => handleReject(item.id)} className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50" title="Reject"><XCircleIcon className="w-5 h-5" /></button>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//             {filteredData.length === 0 && (
//               <div className="text-center py-12">
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <DocumentTextIcon className="w-12 h-12 text-gray-400" />
//                   </div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">No matching records</h3>
//                   <p className="text-gray-600 mb-6">Try adjusting your search terms or filters to find what you're looking for.</p>
//                   <button onClick={() => { setSearchQuery(""); setSelectedFilter("All"); }} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
//                     Clear Filters
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ATTENDANCE VALIDATION CONTENT */}
//         {activeMenu === "validation" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-6">
//               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                 Attendance Validation
//               </h1>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 Review and validate operator attendance records
//               </p>
//               <div className="text-sm text-blue-600 mt-1">
//                 Data tersinkronisasi dengan Admin & Operator
//               </div>
//             </div>

//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
//               {[
//                 {
//                   label: "Total Today",
//                   value: stats.total,
//                   icon: DocumentChartBarIcon,
//                   bgColor: "bg-gray-100",
//                   iconColor: "text-gray-600",
//                 },
//                 {
//                   label: "Approved",
//                   value: stats.approved,
//                   icon: CheckCircleIcon,
//                   bgColor: "bg-green-100",
//                   iconColor: "text-green-600",
//                 },
//                 {
//                   label: "Rejected",
//                   value: stats.rejected,
//                   icon: XCircleIcon,
//                   bgColor: "bg-red-100",
//                   iconColor: "text-red-600",
//                 },
//                 {
//                   label: "Pending Review",
//                   value: stats.pending,
//                   icon: ClockIcon,
//                   bgColor: "bg-yellow-100",
//                   iconColor: "text-yellow-600",
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
//                     <div className="flex items-center justify-between mb-3">
//                       <p className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</p>
//                       <div className={`p-2 rounded-lg ${item.bgColor}`}>
//                         <Icon className={`w-5 h-5 ${item.iconColor}`} />
//                       </div>
//                     </div>
//                     <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
//                     <p className="text-xs sm:text-sm text-gray-500">
//                       {item.label === "Total Today" ? `Pending: ${stats.pending}` : item.label === "Pending Review" ? "Awaiting validation" : "Validated records"}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
//               <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
//                 <div className="relative flex-1">
//                   <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input type="text" placeholder="Search operator or site..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 text-sm transition" />
//                 </div>
//                 <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//                   {["All", "Pending", "Approved", "Rejected"].map((filter) => (
//                     <button key={filter} onClick={() => setSelectedFilter(filter)} className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 text-center min-w-[60px] sm:min-w-[80px] ${selectedFilter === filter ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:bg-gray-200"}`}>
//                       {filter}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Operator</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-2">Date</div>
//                 <div className="col-span-1">Check-In</div>
//                 <div className="col-span-1">Check-Out</div>
//                 <div className="col-span-2 text-center">Status</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>
//               <div className="divide-y divide-gray-200">
//                 {filteredData.length === 0 ? (
//                   <div className="text-center py-12 text-gray-500">
//                     <DocumentTextIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                     <p className="text-lg font-medium text-gray-900 mb-2">No attendance records found</p>
//                     <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//                   </div>
//                 ) : (
//                   filteredData.map((item) => (
//                     <div key={item.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
//                       <div className="lg:hidden space-y-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{item.operator}</h3>
//                             <p className="text-gray-500 text-sm mt-1 truncate">{item.site}</p>
//                           </div>
//                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
//                             {item.status}
//                           </span>
//                         </div>
//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Date</p>
//                             <p className="text-gray-900 text-sm font-medium">{item.date}</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Submitted By</p>
//                             <p className="text-gray-900 text-sm font-medium capitalize">{item.submittedBy}</p>
//                           </div>
//                         </div>
//                         <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-2">
//                               <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
//                               <div>
//                                 <p className="text-gray-500 text-xs">Check-In</p>
//                                 <p className="text-gray-900 text-sm font-medium">{item.checkIn}</p>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-3">
//                             <div className="flex items-center gap-2">
//                               <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
//                               <div>
//                                 <p className="text-gray-500 text-xs">Check-Out</p>
//                                 <p className="text-gray-900 text-sm font-medium">{item.checkOut}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="flex justify-between items-center pt-3 border-t border-gray-200">
//                           <button onClick={() => openDetailModal(item)} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium">
//                             <EyeIcon className="w-4 h-4" /> View Details
//                           </button>
//                           {item.status === "pending" && (
//                             <div className="flex gap-2">
//                               <button onClick={() => handleApprove(item.id)} className="flex items-center gap-2 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium">
//                                 <CheckCircleIcon className="w-4 h-4" /> Approve
//                               </button>
//                               <button onClick={() => handleReject(item.id)} className="flex items-center gap-2 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium">
//                                 <XCircleIcon className="w-4 h-4" /> Reject
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                       <div className="hidden lg:contents">
//                         <div className="col-span-3 flex items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">{item.operator}</p>
//                             <p className="text-sm text-gray-500 mt-0.5">Submitted by: {item.submittedBy}</p>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center"><p className="text-gray-700 truncate">{item.site}</p></div>
//                         <div className="col-span-2 flex items-center"><p className="text-gray-700">{item.date}</p></div>
//                         <div className="col-span-1 flex items-center">
//                           <div className="flex items-center gap-2 text-gray-700"><ClockIcon className="w-4 h-4 text-green-600" /><span className="font-medium">{item.checkIn}</span></div>
//                         </div>
//                         <div className="col-span-1 flex items-center">
//                           <div className="flex items-center gap-2 text-gray-700"><ClockIcon className="w-4 h-4 text-red-600" /><span className="font-medium">{item.checkOut}</span></div>
//                         </div>
//                         <div className="col-span-2 flex items-center justify-center">
//                           <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
//                             {item.status}
//                           </span>
//                         </div>
//                         <div className="col-span-1 flex items-center justify-center">
//                           <div className="flex gap-2">
//                             <button onClick={() => openDetailModal(item)} className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50" title="View Details"><EyeIcon className="w-5 h-5" /></button>
//                             {item.status === "pending" && (
//                               <>
//                                 <button onClick={() => handleApprove(item.id)} className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50" title="Approve"><CheckCircleIcon className="w-5 h-5" /></button>
//                                 <button onClick={() => handleReject(item.id)} className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50" title="Reject"><XCircleIcon className="w-5 h-5" /></button>
//                               </>
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//             {filteredData.length === 0 && (
//               <div className="text-center py-12">
//                 <div className="max-w-md mx-auto">
//                   <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <DocumentTextIcon className="w-12 h-12 text-gray-400" />
//                   </div>
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">No matching records</h3>
//                   <p className="text-gray-600 mb-6">Try adjusting your search terms or filters to find what you're looking for.</p>
//                   <button onClick={() => { setSearchQuery(""); setSelectedFilter("All"); }} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
//                     Clear Filters
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {/* SHIFT MANAGEMENT CONTENT - DENGAN DROPDOWN */}
//         {activeMenu === "shiftManagement" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-6">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//                 <div>
//                   <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                     Shift Management
//                   </h1>
//                   <p className="text-gray-600 text-sm sm:text-base">
//                     Manage operator shift schedules and assignments
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     resetShiftForm();
//                     setShowShiftForm(true);
//                   }}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
//                 >
//                   <PlusIcon className="w-5 h-5" />
//                   Add New Shift
//                 </button>
//               </div>
//             </div>

//             {/* Shift Statistics - DIPINDAHKAN KE ATAS */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">Total Shifts</p>
//                     <p className="text-2xl font-bold text-gray-900 mt-1">{shifts.length}</p>
//                   </div>
//                   <div className="p-3 bg-blue-50 rounded-lg">
//                     <ClockIcon className="w-6 h-6 text-blue-600" />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">Active Sites</p>
//                     <p className="text-2xl font-bold text-gray-900 mt-1">
//                       {[...new Set(shifts.map(s => s.siteId))].length}
//                     </p>
//                   </div>
//                   <div className="p-3 bg-green-50 rounded-lg">
//                     <BuildingOfficeIcon className="w-6 h-6 text-green-600" />
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm text-gray-600">Avg Operators/Shift</p>
//                     <p className="text-2xl font-bold text-gray-900 mt-1">
//                       {shifts.length > 0
//                         ? Math.round(shifts.reduce((acc, shift) => acc + shift.maxOperators, 0) / shifts.length)
//                         : 0
//                       }
//                     </p>
//                   </div>
//                   <div className="p-3 bg-purple-50 rounded-lg">
//                     <UsersIcon className="w-6 h-6 text-purple-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Shift Name</div>
//                 <div className="col-span-2">Time</div>
//                 <div className="col-span-2">Opsi</div>
//                 <div className="col-span-2">Max Operators</div>
//                 <div className="col-span-3 text-center">Actions</div>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 {shifts.length === 0 ? (
//                   <div className="text-center py-12 text-gray-500">
//                     <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                     <p className="text-lg font-medium text-gray-900 mb-2">No shifts found</p>
//                     <p className="text-gray-600">Add your first shift schedule</p>
//                   </div>
//                 ) : (
//                   shifts.map((shift) => {
//                     const site = sites.find(s => s.id === shift.siteId);
//                     return (
//                       <div key={shift.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
//                         <div className="lg:hidden space-y-4">
//                           <div className="flex justify-between items-start">
//                             <div className="flex-1 min-w-0">
//                               <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{shift.name}</h3>
//                               <p className="text-gray-500 text-sm mt-1 truncate">{site ? `${site.name} - ${site.location}` : 'Unknown Opsi'}</p>
//                             </div>
//                             <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded flex-shrink-0">
//                               {shift.maxOperators} ops
//                             </span>
//                           </div>

//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <p className="text-gray-500 text-xs uppercase font-medium mb-1">Start Time</p>
//                               <p className="text-gray-900 text-sm font-medium">{shift.startTime}</p>
//                             </div>
//                             <div>
//                               <p className="text-gray-500 text-xs uppercase font-medium mb-1">End Time</p>
//                               <p className="text-gray-900 text-sm font-medium">{shift.endTime}</p>
//                             </div>
//                           </div>

//                           <div className="flex justify-between items-center pt-3 border-t border-gray-200">
//                             <div className="flex gap-2">
//                               <button
//                                 onClick={() => handleEditShift(shift)}
//                                 className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
//                               >
//                                 <PencilIcon className="w-4 h-4" />
//                                 Edit
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteShift(shift.id)}
//                                 className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
//                               >
//                                 <TrashIcon className="w-4 h-4" />
//                                 Delete
//                               </button>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Desktop View */}
//                         <div className="hidden lg:contents">
//                           <div className="col-span-3 flex items-center">
//                             <div>
//                               <p className="font-medium text-gray-900">{shift.name}</p>
//                               <p className="text-sm text-gray-500 mt-0.5">{shift.startTime} - {shift.endTime}</p>
//                             </div>
//                           </div>
//                           <div className="col-span-2 flex items-center">
//                             <p className="text-gray-700">
//                               {shift.startTime} - {shift.endTime}
//                             </p>
//                           </div>
//                           <div className="col-span-2 flex items-center">
//                             <div className="bg-gray-100 px-3 py-1 rounded-full">
//                               <p className="text-gray-700 truncate text-sm">{site ? site.name : 'Unknown'}</p>
//                             </div>
//                           </div>
//                           <div className="col-span-2 flex items-center">
//                             <span className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
//                               {shift.maxOperators} operators
//                             </span>
//                           </div>
//                           <div className="col-span-3 flex items-center justify-center gap-2">
//                             <button
//                               onClick={() => handleEditShift(shift)}
//                               className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
//                               title="Edit Shift"
//                             >
//                               <PencilIcon className="w-5 h-5" />
//                             </button>
//                             <button
//                               onClick={() => handleDeleteShift(shift.id)}
//                               className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
//                               title="Delete Shift"
//                             >
//                               <TrashIcon className="w-5 h-5" />
//                             </button>
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

//         {/* SITE MANAGEMENT CONTENT */}
//         {activeMenu === "siteManagement" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-6">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
//                 <div>
//                   <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                     Site Management
//                   </h1>
//                   <p className="text-gray-600 text-sm sm:text-base">
//                     Manage IPAL site locations and information
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     resetSiteForm();
//                     setShowSiteForm(true);
//                   }}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
//                 >
//                   <PlusIcon className="w-5 h-5" />
//                   Add New Site
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Site Name</div>
//                 <div className="col-span-2">Location</div>
//                 <div className="col-span-3">Address</div>
//                 <div className="col-span-2">Supervisor</div>
//                 <div className="col-span-2 text-center">Actions</div>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 {sites.length === 0 ? (
//                   <div className="text-center py-12 text-gray-500">
//                     <BuildingOfficeIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                     <p className="text-lg font-medium text-gray-900 mb-2">No sites found</p>
//                     <p className="text-gray-600">Add your first IPAL site</p>
//                   </div>
//                 ) : (
//                   sites.map((site) => (
//                     <div key={site.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
//                       <div className="lg:hidden space-y-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{site.name}</h3>
//                             <p className="text-gray-500 text-sm mt-1 truncate">{site.location}</p>
//                           </div>
//                           <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded flex-shrink-0">
//                             Capacity: {site.capacity}
//                           </span>
//                         </div>

//                         <div>
//                           <p className="text-gray-500 text-xs uppercase font-medium mb-1">Address</p>
//                           <p className="text-gray-900 text-sm line-clamp-2">{site.address}</p>
//                         </div>

//                         <div className="grid grid-cols-2 gap-4">
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Supervisor</p>
//                             <p className="text-gray-900 text-sm font-medium">{site.supervisor}</p>
//                           </div>
//                           <div>
//                             <p className="text-gray-500 text-xs uppercase font-medium mb-1">Contact</p>
//                             <p className="text-gray-900 text-sm font-medium">{site.contact}</p>
//                           </div>
//                         </div>

//                         <div className="flex justify-between items-center pt-3 border-t border-gray-200">
//                           <div className="flex gap-2">
//                             <button
//                               onClick={() => handleEditSite(site)}
//                               className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
//                             >
//                               <PencilIcon className="w-4 h-4" />
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDeleteSite(site.id)}
//                               className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
//                             >
//                               <TrashIcon className="w-4 h-4" />
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Desktop View */}
//                       <div className="hidden lg:contents">
//                         <div className="col-span-3 flex items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">{site.name}</p>
//                             <p className="text-sm text-gray-500 mt-0.5">Capacity: {site.capacity} operators</p>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center">
//                           <p className="text-gray-700">{site.location}</p>
//                         </div>
//                         <div className="col-span-3 flex items-center">
//                           <p className="text-gray-700 truncate">{site.address}</p>
//                         </div>
//                         <div className="col-span-2 flex items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">{site.supervisor}</p>
//                             <p className="text-sm text-gray-500">{site.contact}</p>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center justify-center gap-2">
//                           <button
//                             onClick={() => handleEditSite(site)}
//                             className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
//                             title="Edit Site"
//                           >
//                             <PencilIcon className="w-5 h-5" />
//                           </button>
//                           <button
//                             onClick={() => handleDeleteSite(site.id)}
//                             className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
//                             title="Delete Site"
//                           >
//                             <TrashIcon className="w-5 h-5" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* LEAVE MANAGEMENT CONTENT */}
//         {activeMenu === "leaveManagement" && (
//           <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
//             <div className="mb-6">
//               <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                 Leave & Permission Management
//               </h1>
//               <p className="text-gray-600 text-sm sm:text-base">
//                 Approve or reject operator leave and permission requests
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold text-lg text-gray-800">Pending Requests</h3>
//                   <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {leaveRequests.filter(r => r.status === 'pending').length}
//                   </span>
//                 </div>
//                 <p className="text-gray-600">Requests awaiting your approval</p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold text-lg text-gray-800">Approved</h3>
//                   <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {leaveRequests.filter(r => r.status === 'approved').length}
//                   </span>
//                 </div>
//                 <p className="text-gray-600">Requests that have been approved</p>
//               </div>
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="font-semibold text-lg text-gray-800">Rejected</h3>
//                   <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
//                     {leaveRequests.filter(r => r.status === 'rejected').length}
//                   </span>
//                 </div>
//                 <p className="text-gray-600">Requests that have been rejected</p>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Operator</div>
//                 <div className="col-span-2">Type</div>
//                 <div className="col-span-2">Date Range</div>
//                 <div className="col-span-3">Reason</div>
//                 <div className="col-span-2 text-center">Actions</div>
//               </div>

//               <div className="divide-y divide-gray-200">
//                 {leaveRequests.length === 0 ? (
//                   <div className="text-center py-12 text-gray-500">
//                     <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//                     <p className="text-lg font-medium text-gray-900 mb-2">No leave requests found</p>
//                     <p className="text-gray-600">All requests have been processed</p>
//                   </div>
//                 ) : (
//                   leaveRequests.map((request) => (
//                     <div key={request.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
//                       <div className="lg:hidden space-y-4">
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{request.operator}</h3>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
//                                 request.type === 'izin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
//                               }`}>
//                                 {request.type === 'izin' ? 'Permission' : 'Leave'}
//                               </span>
//                               <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
//                                 request.status === 'approved' ? 'bg-green-100 text-green-800' :
//                                 request.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                                 'bg-yellow-100 text-yellow-800'
//                               }`}>
//                                 {request.status}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <div>
//                           <p className="text-gray-500 text-xs uppercase font-medium mb-1">Date Range</p>
//                           <p className="text-gray-900 text-sm font-medium">
//                             {request.startDate} to {request.endDate}
//                           </p>
//                         </div>

//                         <div>
//                           <p className="text-gray-500 text-xs uppercase font-medium mb-1">Reason</p>
//                           <p className="text-gray-900 text-sm line-clamp-2">{request.reason}</p>
//                         </div>

//                         <div className="flex justify-between items-center pt-3 border-t border-gray-200">
//                           <button
//                             onClick={() => openLeaveDetail(request)}
//                             className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
//                           >
//                             <EyeIcon className="w-4 h-4" />
//                             View Details
//                           </button>

//                           {request.status === "pending" && (
//                             <div className="flex gap-2">
//                               <button
//                                 onClick={() => handleApproveLeave(request.id)}
//                                 className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium"
//                               >
//                                 <CheckCircleIcon className="w-4 h-4" />
//                                 Approve
//                               </button>
//                               <button
//                                 onClick={() => handleRejectLeave(request.id)}
//                                 className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
//                               >
//                                 <XCircleIcon className="w-4 h-4" />
//                                 Reject
//                               </button>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       {/* Desktop View */}
//                       <div className="hidden lg:contents">
//                         <div className="col-span-3 flex items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">{request.operator}</p>
//                             <p className="text-sm text-gray-500 mt-0.5">Submitted: {request.submittedDate}</p>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center">
//                           <div className="flex flex-col gap-1">
//                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
//                               request.type === 'izin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
//                             }`}>
//                               {request.type === 'izin' ? 'Permission (Izin)' : 'Leave (Libur)'}
//                             </span>
//                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                               request.status === 'approved' ? 'bg-green-100 text-green-800' :
//                               request.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                               'bg-yellow-100 text-yellow-800'
//                             }`}>
//                               {request.status}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="col-span-2 flex items-center">
//                           <p className="text-gray-700">
//                             {request.startDate}<br/>
//                             to {request.endDate}
//                           </p>
//                         </div>
//                         <div className="col-span-3 flex items-center">
//                           <p className="text-gray-700 truncate">{request.reason}</p>
//                         </div>
//                         <div className="col-span-2 flex items-center justify-center gap-2">
//                           <button
//                             onClick={() => openLeaveDetail(request)}
//                             className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
//                             title="View Details"
//                           >
//                             <EyeIcon className="w-5 h-5" />
//                           </button>

//                           {request.status === "pending" && (
//                             <>
//                               <button
//                                 onClick={() => handleApproveLeave(request.id)}
//                                 className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50"
//                                 title="Approve"
//                               >
//                                 <CheckCircleIcon className="w-5 h-5" />
//                               </button>
//                               <button
//                                 onClick={() => handleRejectLeave(request.id)}
//                                 className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
//                                 title="Reject"
//                               >
//                                 <XCircleIcon className="w-5 h-5" />
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// // ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================

"use client";
import dynamic from "next/dynamic";
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
  MagnifyingGlassIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  UserIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  CalendarIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

// Storage keys untuk sinkronisasi
const STORAGE_KEYS = {
  ATTENDANCE: "synchronized_attendance_data",
  NOTIFICATIONS: "synchronized_notifications",
  DASHBOARD: "synchronized_dashboard_data",
  SHIFTS: "synchronized_shifts_data",
  SITES: "synchronized_sites_data",
  LEAVE_REQUESTS: "synchronized_leave_requests",
  LAST_SYNC: "last_sync_timestamp",
};

export default function HRD() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedRange, setSelectedRange] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  // State baru untuk fitur tambahan
  const [showShiftForm, setShowShiftForm] = useState(false);
  const [showSiteForm, setShowSiteForm] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [editingShift, setEditingShift] = useState(null);
  const [editingSite, setEditingSite] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);

  // Form state untuk shift
  const [shiftForm, setShiftForm] = useState({
    name: "Morning Shift", // Default value
    startTime: "08:00",
    endTime: "17:00",
    siteId: "",
    maxOperators: 5,
  });

  // Form state untuk site
  const [siteForm, setSiteForm] = useState({
    name: "",
    location: "",
    address: "",
    capacity: 10,
    supervisor: "",
    contact: "",
  });

  const router = useRouter();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const shiftFormRef = useRef(null);
  const siteFormRef = useRef(null);
  const sidebarRef = useRef(null);

  // ==================== FUNGSI SINKRONISASI ====================

  const getSynchronizedData = (key, defaultValue) => {
    if (typeof window === "undefined") return defaultValue;

    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error(`Error reading ${key} from localStorage:`, error);
    }

    return defaultValue;
  };

  const setSynchronizedData = (key, data) => {
    if (typeof window === "undefined") return;

    try {
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    } catch (error) {
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  const setupDataSync = () => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (e) => {
      if (e.key === STORAGE_KEYS.ATTENDANCE) {
        const newData = JSON.parse(e.newValue || "[]");
        setAttendanceData(newData);
        updateDashboardStats(newData);
      } else if (e.key === STORAGE_KEYS.NOTIFICATIONS) {
        const newData = JSON.parse(e.newValue || "[]");
        setNotifications(newData);
      } else if (e.key === STORAGE_KEYS.DASHBOARD) {
        const newData = JSON.parse(e.newValue || "{}");
        setDashboardData(newData);
      } else if (e.key === STORAGE_KEYS.SHIFTS) {
        const newData = JSON.parse(e.newValue || "[]");
        setShifts(newData);
      } else if (e.key === STORAGE_KEYS.SITES) {
        const newData = JSON.parse(e.newValue || "[]");
        setSites(newData);
      } else if (e.key === STORAGE_KEYS.LEAVE_REQUESTS) {
        const newData = JSON.parse(e.newValue || "[]");
        setLeaveRequests(newData);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  const updateDashboardStats = (attendanceData) => {
    const totalOperators = 127;
    const pendingValidation = attendanceData.filter(
      (item) => item.status === "pending"
    ).length;
    const approvedToday = attendanceData.filter(
      (item) =>
        item.status === "approved" &&
        item.date === new Date().toISOString().split("T")[0]
    ).length;

    const attendanceRate =
      totalOperators > 0
        ? Math.round((approvedToday / totalOperators) * 100 * 10) / 10
        : 0;

    const newDashboardData = {
      totalOperators,
      presentToday: approvedToday,
      attendanceRate,
      pendingValidation,
    };

    setDashboardData(newDashboardData);
    setSynchronizedData(STORAGE_KEYS.DASHBOARD, newDashboardData);
  };

  // ==================== DATA YANG DISINKRONISASI ====================

  const [attendanceData, setAttendanceData] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.ATTENDANCE, [
      {
        id: 1,
        operator: "Budi Santoso",
        site: "Jakarta Utara - Site A",
        date: new Date().toISOString().split("T")[0],
        checkIn: "08:00",
        checkOut: "16:00",
        status: "pending",
        submittedBy: "admin",
        location: "Jakarta Utara",
        notes: "Attendance submitted on time",
        totalHours: "8 hours",
        lateMinutes: 0,
      },
      {
        id: 2,
        operator: "Siti Nurhaliza",
        site: "Bandung - Site B",
        date: new Date().toISOString().split("T")[0],
        checkIn: "08:05",
        checkOut: "16:02",
        status: "pending",
        submittedBy: "operator",
        location: "Bandung",
        notes: "Slight delay due to traffic",
        totalHours: "7 hours 57 minutes",
        lateMinutes: 5,
      },
      {
        id: 3,
        operator: "Ahmad Hidayat",
        site: "Surabaya - Site C",
        date: new Date().toISOString().split("T")[0],
        checkIn: "07:58",
        checkOut: "16:05",
        status: "approved",
        submittedBy: "admin",
        location: "Surabaya",
        notes: "Excellent attendance record",
        totalHours: "8 hours 7 minutes",
        lateMinutes: 0,
      },
      {
        id: 4,
        operator: "Dewi Lestari",
        site: "Semarang - Site D",
        date: new Date().toISOString().split("T")[0],
        checkIn: "08:10",
        checkOut: "16:00",
        status: "pending",
        submittedBy: "operator",
        location: "Semarang",
        notes: "Waiting for validation",
        totalHours: "7 hours 50 minutes",
        lateMinutes: 10,
      },
    ])
  );

  const [notifications, setNotifications] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.NOTIFICATIONS, [
      {
        id: 1,
        title: "Attendance perlu validasi",
        message: `${getSynchronizedData(STORAGE_KEYS.ATTENDANCE, []).filter((item) => item.status === "pending").length} data attendance menunggu validasi`,
        time: "5 menit lalu",
        read: false,
        type: "validation",
        route: "attendance",
      },
      {
        id: 2,
        title: "Data baru diterima",
        message: "Budi Santoso mengirim attendance dari Site A",
        time: "1 jam lalu",
        read: false,
        type: "new_data",
        route: "attendance",
      },
      {
        id: 3,
        title: "Laporan bulanan",
        message: "Laporan attendance bulan ini sudah tersedia",
        time: "2 jam lalu",
        read: true,
        type: "report",
        route: "dashboard",
      },
    ])
  );

  const [dashboardData, setDashboardData] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.DASHBOARD, {
      totalOperators: 127,
      presentToday: 118,
      attendanceRate: 96.5,
      pendingValidation: getSynchronizedData(
        STORAGE_KEYS.ATTENDANCE,
        []
      ).filter((item) => item.status === "pending").length,
    })
  );

  // DATA BARU UNTUK FITUR TAMBAHAN
  const [shifts, setShifts] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.SHIFTS, [
      {
        id: 1,
        name: "Morning Shift",
        startTime: "07:00",
        endTime: "15:00",
        siteId: "1",
        maxOperators: 8,
      },
      {
        id: 2,
        name: "Afternoon Shift",
        startTime: "15:00",
        endTime: "23:00",
        siteId: "2",
        maxOperators: 6,
      },
      {
        id: 3,
        name: "Night Shift",
        startTime: "23:00",
        endTime: "07:00",
        siteId: "3",
        maxOperators: 4,
      },
    ])
  );

  const [sites, setSites] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.SITES, [
      {
        id: 1,
        name: "Site A",
        location: "Jakarta Utara",
        address: "Jl. Raya Jakarta No. 123",
        capacity: 15,
        supervisor: "Budi Santoso",
        contact: "0812-3456-7890",
      },
      {
        id: 2,
        name: "Site B",
        location: "Bandung",
        address: "Jl. Raya Bandung No. 456",
        capacity: 12,
        supervisor: "Siti Nurhaliza",
        contact: "0813-4567-8901",
      },
      {
        id: 3,
        name: "Site C",
        location: "Surabaya",
        address: "Jl. Raya Surabaya No. 789",
        capacity: 10,
        supervisor: "Ahmad Hidayat",
        contact: "0814-5678-9012",
      },
    ])
  );

  const [leaveRequests, setLeaveRequests] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.LEAVE_REQUESTS, [
      {
        id: 1,
        operator: "Budi Santoso",
        type: "izin",
        startDate: "2024-12-01",
        endDate: "2024-12-01",
        reason: "Sakit",
        status: "pending",
        submittedDate: "2024-11-28",
      },
      {
        id: 2,
        operator: "Siti Nurhaliza",
        type: "libur",
        startDate: "2024-12-10",
        endDate: "2024-12-12",
        reason: "Cuti tahunan",
        status: "pending",
        submittedDate: "2024-11-29",
      },
      {
        id: 3,
        operator: "Ahmad Hidayat",
        type: "izin",
        startDate: "2024-12-05",
        endDate: "2024-12-05",
        reason: "Keperluan keluarga",
        status: "approved",
        submittedDate: "2024-11-27",
      },
    ])
  );

  const hrdUser = {
    name: "Katira Sala",
    email: "katira.sala@email.com",
    site: "Central Office",
    initial: "K",
    role: "HRD Manager",
  };

  // ==================== USE EFFECT ====================

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
        shiftFormRef.current &&
        !shiftFormRef.current.contains(event.target) &&
        showShiftForm
      ) {
        setShowShiftForm(false);
        setEditingShift(null);
        resetShiftForm();
      }
      if (
        siteFormRef.current &&
        !siteFormRef.current.contains(event.target) &&
        showSiteForm
      ) {
        setShowSiteForm(false);
        setEditingSite(null);
        resetSiteForm();
      }
    }

    const cleanupSync = setupDataSync();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (cleanupSync) cleanupSync();
    };
  }, [showShiftForm, showSiteForm]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.ATTENDANCE, attendanceData);
    updateDashboardStats(attendanceData);
  }, [attendanceData]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.NOTIFICATIONS, notifications);
  }, [notifications]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.DASHBOARD, dashboardData);
  }, [dashboardData]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.SHIFTS, shifts);
  }, [shifts]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.SITES, sites);
  }, [sites]);

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.LEAVE_REQUESTS, leaveRequests);
  }, [leaveRequests]);

  // ==================== FUNGSI UTAMA ====================

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "attendance", name: "Attendance", icon: DocumentTextIcon },
    { id: "shiftManagement", name: "Shift Management", icon: ClockIcon },
    { id: "siteManagement", name: "Site Management", icon: BuildingOfficeIcon },
    { id: "leaveManagement", name: "Leave Management", icon: CalendarIcon },
  ];

  // Fungsi untuk handle approve attendance
  const handleApprove = (id) => {
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, status: "approved" } : item
    );
    setAttendanceData(updatedData);

    const approvedItem = attendanceData.find((item) => item.id === id);
    const newNotification = {
      id: Date.now(),
      title: "Attendance Approved",
      message: `Data attendance ${approvedItem.operator} telah disetujui`,
      time: "Baru saja",
      read: false,
      type: "approval",
      route: "attendance",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Fungsi untuk handle reject attendance
  const handleReject = (id) => {
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, status: "rejected" } : item
    );
    setAttendanceData(updatedData);

    const rejectedItem = attendanceData.find((item) => item.id === id);
    const newNotification = {
      id: Date.now(),
      title: "Attendance Rejected",
      message: `Data attendance ${rejectedItem.operator} telah ditolak`,
      time: "Baru saja",
      read: false,
      type: "rejection",
      route: "attendance",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // ==================== FUNGSI SHIFT MANAGEMENT ====================

  const resetShiftForm = () => {
    setShiftForm({
      name: "Morning Shift", // Default ke Morning Shift
      startTime: "08:00",
      endTime: "17:00",
      siteId: "",
      maxOperators: 5,
    });
    setEditingShift(null);
  };

  const handleAddShift = () => {
    if (!shiftForm.name || !shiftForm.siteId) {
      alert("Please fill all required fields");
      return;
    }

    if (editingShift) {
      const updatedShifts = shifts.map((shift) =>
        shift.id === editingShift.id
          ? { ...shift, ...shiftForm, id: editingShift.id }
          : shift
      );
      setShifts(updatedShifts);

      const newNotification = {
        id: Date.now(),
        title: "Shift Updated",
        message: `Shift ${shiftForm.name} has been updated`,
        time: "Baru saja",
        read: false,
        type: "shift",
        route: "shiftManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    } else {
      const newShift = {
        id: shifts.length > 0 ? Math.max(...shifts.map((s) => s.id)) + 1 : 1,
        ...shiftForm,
      };
      setShifts([...shifts, newShift]);

      const newNotification = {
        id: Date.now(),
        title: "New Shift Added",
        message: `Shift ${shiftForm.name} has been added`,
        time: "Baru saja",
        read: false,
        type: "shift",
        route: "shiftManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }

    setShowShiftForm(false);
    resetShiftForm();
  };

  const handleEditShift = (shift) => {
    setEditingShift(shift);
    setShiftForm({
      name: shift.name,
      startTime: shift.startTime,
      endTime: shift.endTime,
      siteId: shift.siteId,
      maxOperators: shift.maxOperators,
    });
    setShowShiftForm(true);
  };

  const handleDeleteShift = (id) => {
    if (window.confirm("Are you sure you want to delete this shift?")) {
      const shiftToDelete = shifts.find((shift) => shift.id === id);
      setShifts(shifts.filter((shift) => shift.id !== id));

      const newNotification = {
        id: Date.now(),
        title: "Shift Deleted",
        message: `Shift ${shiftToDelete.name} has been deleted`,
        time: "Baru saja",
        read: false,
        type: "shift",
        route: "shiftManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }
  };

  // ==================== FUNGSI SITE MANAGEMENT ====================

  const resetSiteForm = () => {
    setSiteForm({
      name: "",
      location: "",
      address: "",
      capacity: 10,
      supervisor: "",
      contact: "",
    });
    setEditingSite(null);
  };

  const handleAddSite = () => {
    if (!siteForm.name || !siteForm.location || !siteForm.address) {
      alert("Please fill all required fields");
      return;
    }

    if (editingSite) {
      const updatedSites = sites.map((site) =>
        site.id === editingSite.id
          ? { ...site, ...siteForm, id: editingSite.id }
          : site
      );
      setSites(updatedSites);

      const newNotification = {
        id: Date.now(),
        title: "Site Updated",
        message: `Site ${siteForm.name} has been updated`,
        time: "Baru saja",
        read: false,
        type: "site",
        route: "siteManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    } else {
      const newSite = {
        id: sites.length > 0 ? Math.max(...sites.map((s) => s.id)) + 1 : 1,
        ...siteForm,
      };
      setSites([...sites, newSite]);

      const newNotification = {
        id: Date.now(),
        title: "New Site Added",
        message: `Site ${siteForm.name} has been added`,
        time: "Baru saja",
        read: false,
        type: "site",
        route: "siteManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }

    setShowSiteForm(false);
    resetSiteForm();
  };

  const handleEditSite = (site) => {
    setEditingSite(site);
    setSiteForm({
      name: site.name,
      location: site.location,
      address: site.address,
      capacity: site.capacity,
      supervisor: site.supervisor,
      contact: site.contact,
    });
    setShowSiteForm(true);
  };

  const handleDeleteSite = (id) => {
    if (window.confirm("Are you sure you want to delete this site?")) {
      const siteToDelete = sites.find((site) => site.id === id);
      setSites(sites.filter((site) => site.id !== id));

      const newNotification = {
        id: Date.now(),
        title: "Site Deleted",
        message: `Site ${siteToDelete.name} has been deleted`,
        time: "Baru saja",
        read: false,
        type: "site",
        route: "siteManagement",
      };
      setNotifications((prev) => [newNotification, ...prev]);
    }
  };

  // ==================== FUNGSI LEAVE MANAGEMENT ====================

  const handleApproveLeave = (id) => {
    const updatedLeaveRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: "approved" } : request
    );
    setLeaveRequests(updatedLeaveRequests);

    const approvedLeave = leaveRequests.find((request) => request.id === id);
    const newNotification = {
      id: Date.now(),
      title: "Leave Request Approved",
      message: `${approvedLeave.type} request from ${approvedLeave.operator} has been approved`,
      time: "Baru saja",
      read: false,
      type: "leave",
      route: "leaveManagement",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const handleRejectLeave = (id) => {
    const updatedLeaveRequests = leaveRequests.map((request) =>
      request.id === id ? { ...request, status: "rejected" } : request
    );
    setLeaveRequests(updatedLeaveRequests);

    const rejectedLeave = leaveRequests.find((request) => request.id === id);
    const newNotification = {
      id: Date.now(),
      title: "Leave Request Rejected",
      message: `${rejectedLeave.type} request from ${rejectedLeave.operator} has been rejected`,
      time: "Baru saja",
      read: false,
      type: "leave",
      route: "leaveManagement",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  const openLeaveDetail = (leave) => {
    setSelectedLeave(leave);
    setShowLeaveModal(true);
  };

  // ==================== FUNGSI TAMBAHAN ====================

  const openDetailModal = (attendance) => {
    setSelectedAttendance(attendance);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedAttendance(null);
  };

  const handleViewAllAttendance = () => {
    setActiveMenu("attendance");
  };

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    if (notification.route) {
      setActiveMenu(notification.route);
    }
    setNotificationOpen(false);
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
  };

  const unreadNotifications = notifications.filter(
    (notif) => !notif.read
  ).length;

  // ==================== DATA VISUALISASI ====================

  const calculateWeeklyAttendanceData = () => {
    const today = new Date();
    const days = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const dayName = dayNames[date.getDay()];

      const dayData = attendanceData.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate.toDateString() === date.toDateString();
      });

      const approved = dayData.filter((item) => item.status === "approved");
      const pending = dayData.filter((item) => item.status === "pending");
      const rejected = dayData.filter((item) => item.status === "rejected");

      const present = approved.filter((item) => item.lateMinutes === 0).length;
      const late = approved.filter((item) => item.lateMinutes > 0).length;
      const absent =
        rejected.length +
        (dashboardData.totalOperators - approved.length - pending.length);

      days.push({
        day: dayName,
        present: Math.max(0, present),
        late: Math.max(0, late),
        absent: Math.max(0, absent),
      });
    }

    return days;
  };

  const weeklyAttendanceData = calculateWeeklyAttendanceData();

  const todayStatusData = [
    { status: "Present", value: 85, color: "#10B981" },
    { status: "Late", value: 7, color: "#F59E0B" },
    { status: "Absent", value: 8, color: "#EF4444" },
  ];

  const topPerformersData = [
    { name: "Budi Santoso", location: "Jakarta Utara", performance: "100%" },
    { name: "Siti Nurhaliza", location: "Bandung", performance: "98%" },
    { name: "Ahmad Hidayat", location: "Surabaya", performance: "97%" },
    { name: "David Lesteri", location: "Seoul", performance: "96%" },
  ];

  const recentAttendanceData = attendanceData.slice(0, 4).map((item) => ({
    id: item.id,
    name: item.operator,
    location: item.location,
    time: item.checkIn,
    status: item.status,
    checkOut: item.checkOut,
  }));

  const calculatePieChart = () => {
    let accumulatedValue = 0;
    return todayStatusData.map((item, index) => {
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

  const filteredData = attendanceData.filter((item) => {
    const matchesSearch =
      item.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.site.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || item.status === selectedFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: attendanceData.length,
    pending: attendanceData.filter((item) => item.status === "pending").length,
    approved: attendanceData.filter((item) => item.status === "approved")
      .length,
    rejected: attendanceData.filter((item) => item.status === "rejected")
      .length,
  };

  // ==================== MODAL SHIFT FORM ====================

  const ShiftFormModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={shiftFormRef}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {editingShift ? "Edit Shift" : "Add New Shift"}
            </h3>
            <button
              onClick={() => {
                setShowShiftForm(false);
                resetShiftForm();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shift Name *
              </label>
              <div className="relative">
                <select
                  value={shiftForm.name}
                  onChange={(e) =>
                    setShiftForm({ ...shiftForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="Morning Shift">Morning Shift</option>
                  <option value="Afternoon Shift">Afternoon Shift</option>
                  <option value="Night Shift">Night Shift</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time *
                </label>
                <input
                  type="time"
                  value={shiftForm.startTime}
                  onChange={(e) =>
                    setShiftForm({ ...shiftForm, startTime: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time *
                </label>
                <input
                  type="time"
                  value={shiftForm.endTime}
                  onChange={(e) =>
                    setShiftForm({ ...shiftForm, endTime: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Opsi *
              </label>
              <div className="relative">
                <select
                  value={shiftForm.siteId}
                  onChange={(e) =>
                    setShiftForm({ ...shiftForm, siteId: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  <option value="">Select Opsi</option>
                  {sites.map((site) => (
                    <option key={site.id} value={site.id}>
                      {site.name} - {site.location}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Operators
              </label>
              <div className="relative">
                <select
                  value={shiftForm.maxOperators}
                  onChange={(e) =>
                    setShiftForm({
                      ...shiftForm,
                      maxOperators: parseInt(e.target.value),
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                >
                  {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20,
                  ].map((num) => (
                    <option key={num} value={num}>
                      {num} operator{num !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleAddShift}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {editingShift ? "Update Shift" : "Add Shift"}
            </button>
            <button
              onClick={() => {
                setShowShiftForm(false);
                resetShiftForm();
              }}
              className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL SITE FORM ====================

  const SiteFormModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div
        ref={siteFormRef}
        className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {editingSite ? "Edit Site" : "Add New Site"}
            </h3>
            <button
              onClick={() => {
                setShowSiteForm(false);
                resetSiteForm();
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Name *
              </label>
              <input
                type="text"
                value={siteForm.name}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, name: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Site A"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                value={siteForm.location}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, location: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Jakarta Utara"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address *
              </label>
              <textarea
                value={siteForm.address}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, address: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Full address"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Capacity
                </label>
                <div className="relative">
                  <select
                    value={siteForm.capacity}
                    onChange={(e) =>
                      setSiteForm({
                        ...siteForm,
                        capacity: parseInt(e.target.value),
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {[5, 10, 15, 20, 25, 30, 35, 40, 45, 50].map((num) => (
                      <option key={num} value={num}>
                        {num} operators
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Supervisor
                </label>
                <input
                  type="text"
                  value={siteForm.supervisor}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, supervisor: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Supervisor name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                value={siteForm.contact}
                onChange={(e) =>
                  setSiteForm({ ...siteForm, contact: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0812-3456-7890"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleAddSite}
              className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              {editingSite ? "Update Site" : "Add Site"}
            </button>
            <button
              onClick={() => {
                setShowSiteForm(false);
                resetSiteForm();
              }}
              className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL LEAVE DETAIL ====================

  const LeaveDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Leave Request Details
            </h3>
            <button
              onClick={() => {
                setShowLeaveModal(false);
                setSelectedLeave(null);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {selectedLeave && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Operator
                </label>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {selectedLeave.operator}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <p className="mt-1">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedLeave.type === "izin"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {selectedLeave.type === "izin"
                        ? "Permission (Izin)"
                        : "Leave (Libur)"}
                    </span>
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <p className="mt-1">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        selectedLeave.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : selectedLeave.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedLeave.status}
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <p className="mt-1 text-gray-900">
                    {selectedLeave.startDate}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <p className="mt-1 text-gray-900">{selectedLeave.endDate}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Reason
                </label>
                <p className="mt-1 text-gray-900 p-3 bg-gray-50 rounded-lg">
                  {selectedLeave.reason}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Submitted Date
                </label>
                <p className="mt-1 text-gray-900">
                  {selectedLeave.submittedDate}
                </p>
              </div>

              {selectedLeave.status === "pending" && (
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      handleApproveLeave(selectedLeave.id);
                      setShowLeaveModal(false);
                    }}
                    className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2 font-medium"
                  >
                    <CheckCircleIcon className="w-5 h-5" />
                    Approve
                  </button>
                  <button
                    onClick={() => {
                      handleRejectLeave(selectedLeave.id);
                      setShowLeaveModal(false);
                    }}
                    className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2 font-medium"
                  >
                    <XCircleIcon className="w-5 h-5" />
                    Reject
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // ==================== RENDER COMPONENT ====================

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Overlay mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modal Attendance Detail */}
      {isDetailModalOpen && selectedAttendance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Attendance Details
                </h3>
                <button
                  onClick={closeDetailModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Operator
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedAttendance.operator}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Site/Location
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedAttendance.site}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedAttendance.date}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Status
                    </label>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${
                        selectedAttendance.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : selectedAttendance.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedAttendance.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Check-In
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <ClockIcon className="w-4 h-4 text-green-600" />
                      <p className="text-sm text-gray-900">
                        {selectedAttendance.checkIn}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Check-Out
                    </label>
                    <div className="flex items-center gap-2 mt-1">
                      <ClockIcon className="w-4 h-4 text-red-600" />
                      <p className="text-sm text-gray-900">
                        {selectedAttendance.checkOut}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Total Hours
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedAttendance.totalHours}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Late Minutes
                    </label>
                    <p className="mt-1 text-sm text-gray-900">
                      {selectedAttendance.lateMinutes} minutes
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Submitted By
                  </label>
                  <p className="mt-1 text-sm text-gray-900 capitalize">
                    {selectedAttendance.submittedBy}
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <p className="mt-1 text-sm text-gray-900">
                    {selectedAttendance.notes}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                {selectedAttendance.status === "pending" && (
                  <>
                    <button
                      onClick={() => {
                        handleApprove(selectedAttendance.id);
                        closeDetailModal();
                      }}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                      <CheckCircleIcon className="w-4 h-4" />
                      Approve
                    </button>
                    <button
                      onClick={() => {
                        handleReject(selectedAttendance.id);
                        closeDetailModal();
                      }}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
                    >
                      <XCircleIcon className="w-4 h-4" />
                      Reject
                    </button>
                  </>
                )}
                <button
                  onClick={closeDetailModal}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modals untuk fitur baru */}
      {showShiftForm && <ShiftFormModal />}
      {showSiteForm && <SiteFormModal />}
      {showLeaveModal && selectedLeave && <LeaveDetailModal />}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col
        z-40 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white flex-shrink-0">
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

        {/* Sidebar menu */}
        <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
          <ul className="space-y-2 px-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200
                      ${
                        activeMenu === item.id
                          ? "bg-gradient-to-r from-emerald-800 to-green-800 text-white shadow-md"
                          : "text-gray-800 hover:bg-gray-100 hover:shadow-sm"
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        activeMenu === item.id ? "text-white" : "text-gray-500"
                      }`}
                    />
                    <span className="whitespace-nowrap font-medium">
                      {item.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* HRD badge */}
        <div className="p-4 mt-auto border-t border-gray-200 flex-shrink-0">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full
                flex items-center justify-center text-white font-bold text-lg shadow-md"
              >
                {hrdUser.initial}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate text-sm">
                  {hrdUser.name}
                </p>
                <p className="text-gray-600 truncate text-xs mt-0.5">
                  {hrdUser.email}
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-gray-500 text-xs truncate">
                    {hrdUser.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mt-3 pt-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span className="truncate">{hrdUser.site}</span>
                <span className="px-2 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-medium">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 lg:ml-64 min-w-0">
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex justify-between items-center px-4 lg:px-6 py-4">
            {/* Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-800 hover:text-teal-600"
              >
                <Bars3Icon className="w-6 h-6 text-gray-800" />
              </button>

              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 truncate">
                {menuItems.find((m) => m.id === activeMenu)?.name}
              </h1>
            </div>

            {/* Icons right */}
            <div className="flex items-center gap-4">
              {/* Notifikasi Dropdown */}
              <div
                ref={notificationRef}
                className="relative flex flex-col items-end gap-2"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setNotificationOpen((prev) => !prev);
                  }}
                  className="p-2 text-gray-800 hover:text-teal-600 relative"
                >
                  <BellIcon className="w-6 h-6 text-gray-800" />
                  {unreadNotifications > 0 && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse">
                      {unreadNotifications}
                    </span>
                  )}
                </button>

                {notificationOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
                    <div className="px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">
                        Notifications
                      </h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Mark all as read
                      </button>
                    </div>

                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="px-4 py-8 text-center text-gray-500">
                          No notifications
                        </div>
                      ) : (
                        notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                              !notification.read ? "bg-blue-50" : ""
                            }`}
                            onClick={() =>
                              handleNotificationClick(notification)
                            }
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900 text-sm">
                                  {notification.title}
                                </p>
                                <p className="text-gray-600 text-xs mt-1">
                                  {notification.message}
                                </p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full ml-2 mt-1 animate-pulse"></div>
                              )}
                            </div>
                            <p className="text-gray-400 text-xs mt-2">
                              {notification.time}
                            </p>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="px-4 py-2 border-t border-gray-200">
                      <button
                        onClick={() => {
                          setNotificationOpen(false);
                          setActiveMenu("attendance");
                        }}
                        className="w-full text-center text-sm text-blue-600 hover:text-blue-800 py-1 font-medium"
                      >
                        View All Notifications
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
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full flex items-center justify-center text-white font-bold">
                    {hrdUser.initial}
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-800 transition-transform duration-200
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
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-800 to-green-800 rounded-full flex items-center justify-center text-white font-bold">
                          {hrdUser.initial}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 truncate">
                            {hrdUser.name}
                          </p>
                          <p className="text-sm text-gray-600 truncate">
                            {hrdUser.email}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {hrdUser.site}
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

        {/* DASHBOARD CONTENT - VERSI REVISI (SUMMARY DARI SEMUA MENU) */}
        {activeMenu === "dashboard" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                HRD Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Summary dari semua menu aplikasi HRD
              </p>
            </div>

            {/* SUMMARY CARD DARI SEMUA MENU */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
              {/* Attendance Summary */}
              {[
                {
                  label: "Total Operators",
                  value: dashboardData.totalOperators,
                  percent: "+2.1%",
                  icon: UsersIcon,
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                  menu: "attendance",
                },
                {
                  label: "Pending Validation",
                  value: dashboardData.pendingValidation,
                  percent:
                    dashboardData.pendingValidation > 0
                      ? "+" + dashboardData.pendingValidation + " new"
                      : "No pending",
                  icon: ClockIcon,
                  bgColor: "bg-yellow-50",
                  iconColor: "text-yellow-600",
                  menu: "attendance",
                },
                {
                  label: "Attendance Rate",
                  value: `${dashboardData.attendanceRate}%`,
                  percent: "+0.8%",
                  icon: ChartBarIcon,
                  bgColor: "bg-green-50",
                  iconColor: "text-green-600",
                  menu: "attendance",
                },
                {
                  label: "Present Today",
                  value: dashboardData.presentToday,
                  percent: "+1.5%",
                  icon: CheckCircleIcon,
                  bgColor: "bg-emerald-50",
                  iconColor: "text-emerald-600",
                  menu: "attendance",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setActiveMenu(item.menu)}
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3 lg:mb-4">
                      <p className="text-gray-700 font-medium text-xs sm:text-sm">
                        {item.label}
                      </p>
                      <div className={`p-1 sm:p-2 rounded-lg ${item.bgColor}`}>
                        <Icon
                          className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${item.iconColor}`}
                        />
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p
                      className={`text-xs font-medium mt-1 ${
                        item.percent.startsWith("+")
                          ? "text-green-600"
                          : item.percent.startsWith("No")
                            ? "text-gray-500"
                            : "text-red-600"
                      }`}
                    >
                      {item.percent}{" "}
                      {item.label === "Pending Validation"
                        ? ""
                        : "vs last month"}
                    </p>
                    <div className="mt-2 text-right">
                      <span className="text-xs text-blue-600 font-medium">
                        View →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SECOND ROW - OTHER MENU SUMMARIES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {/* Shift Management Summary */}
              <div
                className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActiveMenu("shiftManagement")}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                      Shift Management
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Total shifts: {shifts.length}
                    </p>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  {shifts.slice(0, 3).map((shift, index) => {
                    const site = sites.find((s) => s.id === shift.siteId);
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {shift.name}
                          </p>
                          <p className="text-xs text-gray-600">
                            {shift.startTime} - {shift.endTime}
                          </p>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {site ? site.name : "Unknown"}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View All Shifts →
                  </button>
                </div>
              </div>

              {/* Site Management Summary */}
              <div
                className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActiveMenu("siteManagement")}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                      Site Management
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Total sites: {sites.length}
                    </p>
                  </div>
                  <div className="p-2 bg-green-50 rounded-lg">
                    <BuildingOfficeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  {sites.slice(0, 3).map((site, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {site.name}
                        </p>
                        <p className="text-xs text-gray-600">{site.location}</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {site.capacity} ops
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View All Sites →
                  </button>
                </div>
              </div>

              {/* Leave Management Summary */}
              <div
                className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setActiveMenu("leaveManagement")}
              >
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1">
                      Leave Management
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Pending:{" "}
                      {
                        leaveRequests.filter((r) => r.status === "pending")
                          .length
                      }
                    </p>
                  </div>
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <CalendarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  {leaveRequests.slice(0, 3).map((request, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {request.operator}
                        </p>
                        <p className="text-xs text-gray-600">
                          {request.type} • {request.startDate}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded ${
                          request.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : request.status === "rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View All Leaves →
                  </button>
                </div>
              </div>
            </div>

            {/* CHARTS SECTION */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
              {/* Weekly Attendance Chart */}
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 shadow-sm sm:shadow-md">
                <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Weekly Attendance Trends
                  </h3>
                  <button
                    onClick={() => setActiveMenu("attendance")}
                    className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details →
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 flex flex-col justify-between text-xs text-gray-500 py-1 sm:py-2">
                    <span>150</span>
                    <span>120</span>
                    <span>90</span>
                    <span>60</span>
                    <span>30</span>
                    <span>0</span>
                  </div>
                  <div className="ml-6 sm:ml-8">
                    <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-2 border-b border-l border-gray-200 overflow-visible">
                      {[
                        { day: "Mon", present: 115, late: 5, absent: 7 },
                        { day: "Tue", present: 118, late: 4, absent: 5 },
                        { day: "Wed", present: 120, late: 3, absent: 4 },
                        { day: "Thu", present: 116, late: 6, absent: 5 },
                        { day: "Fri", present: 119, late: 4, absent: 4 },
                        { day: "Sat", present: 110, late: 8, absent: 9 },
                        { day: "Sun", present: 105, late: 7, absent: 15 },
                      ].map((data, index) => {
                        const maxValue = 150;
                        const chartHeight = 120;
                        return (
                          <div
                            key={index}
                            className="flex flex-col items-center flex-1 relative overflow-visible"
                          >
                            <div className="flex items-end justify-center gap-0.5 sm:gap-1.5 w-full overflow-visible">
                              <div
                                className="w-1.5 sm:w-2 lg:w-2.5 bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600 cursor-pointer relative group"
                                style={{
                                  height: `${(data.present / maxValue) * chartHeight}px`,
                                }}
                              >
                                <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
                                  Present: {data.present}
                                </div>
                              </div>
                              <div
                                className="w-1.5 sm:w-2 lg:w-2.5 bg-yellow-400 rounded-t transition-all duration-300 hover:bg-yellow-500 cursor-pointer relative group"
                                style={{
                                  height: `${(data.late / maxValue) * chartHeight}px`,
                                }}
                              >
                                <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
                                  Late: {data.late}
                                </div>
                              </div>
                              <div
                                className="w-1.5 sm:w-2 lg:w-2.5 bg-red-500 rounded-t transition-all duration-300 hover:bg-red-600 cursor-pointer relative group"
                                style={{
                                  height: `${(data.absent / maxValue) * chartHeight}px`,
                                }}
                              >
                                <div className="absolute -top-6 sm:-top-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs whitespace-nowrap z-50 pointer-events-none">
                                  Absent: {data.absent}
                                </div>
                              </div>
                            </div>
                            <span className="text-xs text-gray-600 mt-1 sm:mt-2 font-medium">
                              {data.day}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-3 text-xs">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          Present
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          Late
                        </span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded"></div>
                        <span className="text-gray-700 text-xs sm:text-sm">
                          Absent
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Today's Status Pie Chart */}
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl lg:rounded-2xl border border-gray-200 shadow-sm sm:shadow-md">
                <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Today's Status
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
                      viewBox="0 0 100 100"
                      className="cursor-pointer sm:w-32 sm:h-32 lg:w-36 lg:h-36"
                    >
                      {pieChartData.map((item, index) => (
                        <path
                          key={item.status}
                          d={item.path}
                          fill={item.color}
                          className={`transition-all duration-300 ${hoveredPie === index ? "opacity-80 scale-105" : "opacity-100"}`}
                          stroke="white"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredPie(index)}
                          onMouseLeave={() => setHoveredPie(null)}
                        />
                      ))}
                    </svg>
                    <div className="text-center mt-2 sm:mt-3">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
                        85%
                      </div>
                      <div className="text-sm text-gray-600">Present</div>
                    </div>
                    {hoveredPie !== null && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded text-xs sm:text-sm z-10 shadow-lg">
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
                    {todayStatusData.map((item, index) => (
                      <div
                        key={item.status}
                        className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${hoveredPie === index ? "bg-gray-50 transform scale-105" : ""}`}
                        onMouseEnter={() => setHoveredPie(index)}
                        onMouseLeave={() => setHoveredPie(null)}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className="w-3 h-3 rounded transition-transform duration-200"
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

            {/* RECENT ACTIVITIES SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
              {/* Recent Attendance */}
              <div className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md">
                <div className="flex justify-between items-center mb-3 sm:mb-4 lg:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Recent Attendance
                  </h3>
                  <button
                    onClick={() => setActiveMenu("attendance")}
                    className="text-blue-600 text-xs sm:text-sm font-medium hover:underline"
                  >
                    View All →
                  </button>
                </div>
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  {recentAttendanceData.map((attendance, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 sm:p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() =>
                        openDetailModal(
                          attendanceData.find((a) => a.id === attendance.id)
                        )
                      }
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                          {attendance.name}
                        </p>
                        <p className="text-gray-600 truncate text-xs sm:text-sm">
                          {attendance.location} • {attendance.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
                        {attendance.status === "approved" ? (
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                        ) : (
                          <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" />
                        )}
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${attendance.status === "approved" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {attendance.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Performers */}
            </div>
          </div>
        )}

        {/* ATTENDANCE CONTENT */}
        {activeMenu === "attendance" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Attendance Validation
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Review and validate operator attendance records
              </p>
              <div className="text-sm text-blue-600 mt-1">
                Data tersinkronisasi dengan Admin & Operator
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {[
                {
                  label: "Total Today",
                  value: stats.total,
                  icon: DocumentChartBarIcon,
                  bgColor: "bg-gray-100",
                  iconColor: "text-gray-600",
                },
                {
                  label: "Approved",
                  value: stats.approved,
                  icon: CheckCircleIcon,
                  bgColor: "bg-green-100",
                  iconColor: "text-green-600",
                },
                {
                  label: "Rejected",
                  value: stats.rejected,
                  icon: XCircleIcon,
                  bgColor: "bg-red-100",
                  iconColor: "text-red-600",
                },
                {
                  label: "Pending Review",
                  value: stats.pending,
                  icon: ClockIcon,
                  bgColor: "bg-yellow-100",
                  iconColor: "text-yellow-600",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-gray-700 font-medium text-sm sm:text-base">
                        {item.label}
                      </p>
                      <div className={`p-2 rounded-lg ${item.bgColor}`}>
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.label === "Total Today"
                        ? `Pending: ${stats.pending}`
                        : item.label === "Pending Review"
                          ? "Awaiting validation"
                          : "Validated records"}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                <div className="relative flex-1">
                  <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search operator or site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 text-sm transition"
                  />
                </div>
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  {["All", "Pending", "Approved", "Rejected"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition flex-1 text-center min-w-[60px] sm:min-w-[80px] ${selectedFilter === filter ? "bg-blue-600 text-white shadow-sm" : "text-gray-700 hover:bg-gray-200"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Operator</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-2">Date</div>
                <div className="col-span-1">Check-In</div>
                <div className="col-span-1">Check-Out</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredData.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <DocumentTextIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      No attendance records found
                    </p>
                    <p className="text-gray-600">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                ) : (
                  filteredData.map((item) => (
                    <div
                      key={item.id}
                      className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="lg:hidden space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                              {item.operator}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 truncate">
                              {item.site}
                            </p>
                          </div>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                              Date
                            </p>
                            <p className="text-gray-900 text-sm font-medium">
                              {item.date}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                              Submitted By
                            </p>
                            <p className="text-gray-900 text-sm font-medium capitalize">
                              {item.submittedBy}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <div>
                                <p className="text-gray-500 text-xs">
                                  Check-In
                                </p>
                                <p className="text-gray-900 text-sm font-medium">
                                  {item.checkIn}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <div>
                                <p className="text-gray-500 text-xs">
                                  Check-Out
                                </p>
                                <p className="text-gray-900 text-sm font-medium">
                                  {item.checkOut}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <button
                            onClick={() => openDetailModal(item)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                          >
                            <EyeIcon className="w-4 h-4" /> View Details
                          </button>
                          {item.status === "pending" && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleApprove(item.id)}
                                className="flex items-center gap-2 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium"
                              >
                                <CheckCircleIcon className="w-4 h-4" /> Approve
                              </button>
                              <button
                                onClick={() => handleReject(item.id)}
                                className="flex items-center gap-2 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                              >
                                <XCircleIcon className="w-4 h-4" /> Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="hidden lg:contents">
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              {item.operator}
                            </p>
                            <p className="text-sm text-gray-500 mt-0.5">
                              Submitted by: {item.submittedBy}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <p className="text-gray-700 truncate">{item.site}</p>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <p className="text-gray-700">{item.date}</p>
                        </div>
                        <div className="col-span-1 flex items-center">
                          <div className="flex items-center gap-2 text-gray-700">
                            <ClockIcon className="w-4 h-4 text-green-600" />
                            <span className="font-medium">{item.checkIn}</span>
                          </div>
                        </div>
                        <div className="col-span-1 flex items-center">
                          <div className="flex items-center gap-2 text-gray-700">
                            <ClockIcon className="w-4 h-4 text-red-600" />
                            <span className="font-medium">{item.checkOut}</span>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                          <div className="flex gap-2">
                            <button
                              onClick={() => openDetailModal(item)}
                              className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
                              title="View Details"
                            >
                              <EyeIcon className="w-5 h-5" />
                            </button>
                            {item.status === "pending" && (
                              <>
                                <button
                                  onClick={() => handleApprove(item.id)}
                                  className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50"
                                  title="Approve"
                                >
                                  <CheckCircleIcon className="w-5 h-5" />
                                </button>
                                <button
                                  onClick={() => handleReject(item.id)}
                                  className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
                                  title="Reject"
                                >
                                  <XCircleIcon className="w-5 h-5" />
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DocumentTextIcon className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No matching records
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or filters to find what
                    you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedFilter("All");
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SHIFT MANAGEMENT CONTENT */}
        {activeMenu === "shiftManagement" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Shift Management
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Manage operator shift schedules and assignments
                  </p>
                </div>
                <button
                  onClick={() => {
                    resetShiftForm();
                    setShowShiftForm(true);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
                >
                  <PlusIcon className="w-5 h-5" />
                  Add New Shift
                </button>
              </div>
            </div>

            {/* Shift Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Shifts</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {shifts.length}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Sites</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {[...new Set(shifts.map((s) => s.siteId))].length}
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <BuildingOfficeIcon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Avg Operators/Shift</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {shifts.length > 0
                        ? Math.round(
                            shifts.reduce(
                              (acc, shift) => acc + shift.maxOperators,
                              0
                            ) / shifts.length
                          )
                        : 0}
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <UsersIcon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Shift Name</div>
                <div className="col-span-2">Time</div>
                <div className="col-span-2">Opsi</div>
                <div className="col-span-2">Max Operators</div>
                <div className="col-span-3 text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-200">
                {shifts.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <ClockIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      No shifts found
                    </p>
                    <p className="text-gray-600">
                      Add your first shift schedule
                    </p>
                  </div>
                ) : (
                  shifts.map((shift) => {
                    const site = sites.find((s) => s.id === shift.siteId);
                    return (
                      <div
                        key={shift.id}
                        className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="lg:hidden space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                                {shift.name}
                              </h3>
                              <p className="text-gray-500 text-sm mt-1 truncate">
                                {site
                                  ? `${site.name} - ${site.location}`
                                  : "Unknown Opsi"}
                              </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded flex-shrink-0">
                              {shift.maxOperators} ops
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                                Start Time
                              </p>
                              <p className="text-gray-900 text-sm font-medium">
                                {shift.startTime}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                                End Time
                              </p>
                              <p className="text-gray-900 text-sm font-medium">
                                {shift.endTime}
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEditShift(shift)}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                              >
                                <PencilIcon className="w-4 h-4" />
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteShift(shift.id)}
                                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                              >
                                <TrashIcon className="w-4 h-4" />
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:contents">
                          <div className="col-span-3 flex items-center">
                            <div>
                              <p className="font-medium text-gray-900">
                                {shift.name}
                              </p>
                              <p className="text-sm text-gray-500 mt-0.5">
                                {shift.startTime} - {shift.endTime}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center">
                            <p className="text-gray-700">
                              {shift.startTime} - {shift.endTime}
                            </p>
                          </div>
                          <div className="col-span-2 flex items-center">
                            <div className="bg-gray-100 px-3 py-1 rounded-full">
                              <p className="text-gray-700 truncate text-sm">
                                {site ? site.name : "Unknown"}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center">
                            <span className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                              {shift.maxOperators} operators
                            </span>
                          </div>
                          <div className="col-span-3 flex items-center justify-center gap-2">
                            <button
                              onClick={() => handleEditShift(shift)}
                              className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
                              title="Edit Shift"
                            >
                              <PencilIcon className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDeleteShift(shift.id)}
                              className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
                              title="Delete Shift"
                            >
                              <TrashIcon className="w-5 h-5" />
                            </button>
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

        {/* SITE MANAGEMENT CONTENT */}
        {activeMenu === "siteManagement" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Site Management
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Manage IPAL site locations and information
                  </p>
                </div>
                <button
                  onClick={() => {
                    resetSiteForm();
                    setShowSiteForm(true);
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
                >
                  <PlusIcon className="w-5 h-5" />
                  Add New Site
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Site Name</div>
                <div className="col-span-2">Location</div>
                <div className="col-span-3">Address</div>
                <div className="col-span-2">Supervisor</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-200">
                {sites.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <BuildingOfficeIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      No sites found
                    </p>
                    <p className="text-gray-600">Add your first IPAL site</p>
                  </div>
                ) : (
                  sites.map((site) => (
                    <div
                      key={site.id}
                      className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="lg:hidden space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                              {site.name}
                            </h3>
                            <p className="text-gray-500 text-sm mt-1 truncate">
                              {site.location}
                            </p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded flex-shrink-0">
                            Capacity: {site.capacity}
                          </span>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                            Address
                          </p>
                          <p className="text-gray-900 text-sm line-clamp-2">
                            {site.address}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                              Supervisor
                            </p>
                            <p className="text-gray-900 text-sm font-medium">
                              {site.supervisor}
                            </p>
                          </div>
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                              Contact
                            </p>
                            <p className="text-gray-900 text-sm font-medium">
                              {site.contact}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditSite(site)}
                              className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                            >
                              <PencilIcon className="w-4 h-4" />
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteSite(site.id)}
                              className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                            >
                              <TrashIcon className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden lg:contents">
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              {site.name}
                            </p>
                            <p className="text-sm text-gray-500 mt-0.5">
                              Capacity: {site.capacity} operators
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <p className="text-gray-700">{site.location}</p>
                        </div>
                        <div className="col-span-3 flex items-center">
                          <p className="text-gray-700 truncate">
                            {site.address}
                          </p>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              {site.supervisor}
                            </p>
                            <p className="text-sm text-gray-500">
                              {site.contact}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEditSite(site)}
                            className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
                            title="Edit Site"
                          >
                            <PencilIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteSite(site.id)}
                            className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
                            title="Delete Site"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* LEAVE MANAGEMENT CONTENT */}
        {activeMenu === "leaveManagement" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Leave & Permission Management
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Approve or reject operator leave and permission requests
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Pending Requests
                  </h3>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    {leaveRequests.filter((r) => r.status === "pending").length}
                  </span>
                </div>
                <p className="text-gray-600">Requests awaiting your approval</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Approved
                  </h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {
                      leaveRequests.filter((r) => r.status === "approved")
                        .length
                    }
                  </span>
                </div>
                <p className="text-gray-600">
                  Requests that have been approved
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Rejected
                  </h3>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                    {
                      leaveRequests.filter((r) => r.status === "rejected")
                        .length
                    }
                  </span>
                </div>
                <p className="text-gray-600">
                  Requests that have been rejected
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Operator</div>
                <div className="col-span-2">Type</div>
                <div className="col-span-2">Date Range</div>
                <div className="col-span-3">Reason</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-200">
                {leaveRequests.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      No leave requests found
                    </p>
                    <p className="text-gray-600">
                      All requests have been processed
                    </p>
                  </div>
                ) : (
                  leaveRequests.map((request) => (
                    <div
                      key={request.id}
                      className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="lg:hidden space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                              {request.operator}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                  request.type === "izin"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-purple-100 text-purple-800"
                                }`}
                              >
                                {request.type === "izin"
                                  ? "Permission"
                                  : "Leave"}
                              </span>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                  request.status === "approved"
                                    ? "bg-green-100 text-green-800"
                                    : request.status === "rejected"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {request.status}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                            Date Range
                          </p>
                          <p className="text-gray-900 text-sm font-medium">
                            {request.startDate} to {request.endDate}
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">
                            Reason
                          </p>
                          <p className="text-gray-900 text-sm line-clamp-2">
                            {request.reason}
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <button
                            onClick={() => openLeaveDetail(request)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                          >
                            <EyeIcon className="w-4 h-4" />
                            View Details
                          </button>

                          {request.status === "pending" && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleApproveLeave(request.id)}
                                className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium"
                              >
                                <CheckCircleIcon className="w-4 h-4" />
                                Approve
                              </button>
                              <button
                                onClick={() => handleRejectLeave(request.id)}
                                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                              >
                                <XCircleIcon className="w-4 h-4" />
                                Reject
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden lg:contents">
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">
                              {request.operator}
                            </p>
                            <p className="text-sm text-gray-500 mt-0.5">
                              Submitted: {request.submittedDate}
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <div className="flex flex-col gap-1">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                request.type === "izin"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {request.type === "izin"
                                ? "Permission (Izin)"
                                : "Leave (Libur)"}
                            </span>
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                request.status === "approved"
                                  ? "bg-green-100 text-green-800"
                                  : request.status === "rejected"
                                    ? "bg-red-100 text-red-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {request.status}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <p className="text-gray-700">
                            {request.startDate}
                            <br />
                            to {request.endDate}
                          </p>
                        </div>
                        <div className="col-span-3 flex items-center">
                          <p className="text-gray-700 truncate">
                            {request.reason}
                          </p>
                        </div>
                        <div className="col-span-2 flex items-center justify-center gap-2">
                          <button
                            onClick={() => openLeaveDetail(request)}
                            className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50"
                            title="View Details"
                          >
                            <EyeIcon className="w-5 h-5" />
                          </button>

                          {request.status === "pending" && (
                            <>
                              <button
                                onClick={() => handleApproveLeave(request.id)}
                                className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50"
                                title="Approve"
                              >
                                <CheckCircleIcon className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleRejectLeave(request.id)}
                                className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50"
                                title="Reject"
                              >
                                <XCircleIcon className="w-5 h-5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
