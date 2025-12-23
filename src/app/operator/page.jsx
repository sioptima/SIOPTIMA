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
  PencilIcon,
  TrashIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  IdentificationIcon,
  ClockIcon as ClockOutlineIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { checkIn, checkOut, createOperatorIjin, createOperatorLibur, createOperatorReport, createTicket, fetchCurrentUser, fetchOperatorActiveAttendance, fetchOperatorAttendance, fetchOperatorDashboardData, fetchOperatorIjin, fetchOperatorLibur, fetchOperatorReports, fetchOperatorShifts, fetchOperatorTicket } from "@/src/lib/fetchApiOperator";
import { fetchSitesData } from "@/src/lib/fetchApiAdmin";

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

// Konstanta untuk demo mode
const DEMO_MODE = true; // Aktifkan demo mode untuk testing
const DEMO_SITE_COORDINATES = {
  "Jakarta Utara - Site A": {
    lat: -7.2375495,
    lng: 112.7271187
  },
  "Jakarta Utara - Site B": {
    lat: -7.2380000,
    lng: 112.7275000
  },
  "Jakarta Utara - Site C": {
    lat: -7.2370000,
    lng: 112.7280000
  }
};

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
    console.log("Camera permission check failed:", error);
    return false;
  }
};

export default function Operator() {
  const [selectedRange, setSelectedRange] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const [loading, setLoading] = useState(false)

  // ==================== DATA USER ====================
  const [user, setUser] = useState({});
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchCurrentUser();
            if (!result) throw new Error("No data returned");
            setUser(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []);  

  // Refs untuk berbagai keperluan
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const priorityDropdownRef = useRef(null);

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
    }
  ]);

  // State untuk Dashboard
  const [dashboardData, setDashboardData] = useState({
    reportsSubmitted: 0,
    attendanceRate: 0,
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
    images: [],
  });

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [reports, setReports] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorReports({limit: 50});
            if (!result) throw new Error("No data returned");
            setReports(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []);  


  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportDetailModalOpen, setIsReportDetailModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [editingReportId, setEditingReportId] = useState(null);

  const [sitesData, setSitesData] = useState([]);
  useEffect(() => {
      const loadData = async () => {
          try {
              const result = await fetchSitesData({limit: 50});
              if (!result) throw new Error("No data returned");
              setSitesData(result.sites);
          } catch (err) {
            //setError
      } finally {
        //setLoading
      }
  };   

  loadData();
  }, []); 

  const getSiteOptions = () => {
    const siteNames = sitesData.map((site) => site.name);
    return siteNames.sort();
  };

  const siteOptions = getSiteOptions();

  // State untuk Presence
  const [attendanceData, setAttendanceData] = useState({
    checkInTime: "--:--",
    checkOutTime: "--:--",
    location: "-",
    status: "-",
    isCheckedIn: false,
    isCheckedOut: false,
  });
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorActiveAttendance();
            if (!result) throw new Error("No data returned");
            setAttendanceData(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };    

  loadData();
  }, []);  

  const [attendanceHistory, setAttendanceHistory] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorAttendance({limit: 50});
            if (!result) throw new Error("No data returned");
            setAttendanceHistory(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []);  

  // State untuk modal check-in/check-out
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedAttendance, setSelectedAttendance] = useState(null);

  // State untuk Edit Presensi (sesuai SRS)
  const [isEditPresenceModalOpen, setIsEditPresenceModalOpen] = useState(false);
  const [editingPresence, setEditingPresence] = useState(null);
  const [editPresenceForm, setEditPresenceForm] = useState({
    checkIn: "",
    checkOut: "",
    checkInLocation: "",
    checkOutLocation: "",
    checkInStatus: "ontime",
  });

  const [locationCaptured, setLocationCaptured] = useState(false);
  const [selfieUploaded, setSelfieUploaded] = useState(false);
  const [selfiePreview, setSelfiePreview] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("Click to get location");
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [stream, setStream] = useState(null);

  const [locationCapturedCheckOut, setLocationCapturedCheckOut] = useState(false);
  const [selfieUploadedCheckOut, setSelfieUploadedCheckOut] = useState(false);
  const [selfiePreviewCheckOut, setSelfiePreviewCheckOut] = useState(null);
  const [currentLocationCheckOut, setCurrentLocationCheckOut] = useState("Click to get location");
  const [isCameraActiveCheckOut, setIsCameraActiveCheckOut] = useState(false);
  const [streamCheckOut, setStreamCheckOut] = useState(null);

  // State untuk Help Desk
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorTicket({limit: 50});
            if (!result) throw new Error("No data returned");
            setTickets(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []); 

  const [newTicket, setNewTicket] = useState({
    site: "",
    category: "Technical",
    title: "",
    description: "",
    priority: "Medium",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Semua Status");
  const [priorityFilter, setPriorityFilter] = useState("Semua Prioritas");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // State untuk modal detail pengajuan
  const [isSubmissionDetailModalOpen, setIsSubmissionDetailModalOpen] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  // State untuk Lihat Shift
  const [shiftData, setShiftData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorShifts({limit: 50});
            if (!result) throw new Error("No data returned");
            setShiftData(result);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []);  

  const [isLiburModalOpen, setIsLiburModalOpen] = useState(false);
  const [isIzinModalOpen, setIsIzinModalOpen] = useState(false);
  const [liburForm, setLiburForm] = useState({
    startDate: "",
    endDate: "",
    reason: ""
  });
  const [izinForm, setIzinForm] = useState({
    startDate: "",
    endDate: "",
    reason: ""
  });

  // State untuk riwayat pengajuan shift
  const [submissionHistory, setSubmissionHistory] = useState([]);
  useEffect(() => {
    const loadData = async () => {
        try {
            const result = await fetchOperatorIjin({limit: 50});
            if (!result) throw new Error("No data returned");
            const ijin = await fetchOperatorLibur({limit: 50});
            if (!ijin) throw new Error("No data returned");
            setSubmissionHistory([...result, ...ijin]);
        } catch (err) {
          //setError
    } finally {
      //setLoading
    }
  };   

  loadData();
  }, []);  

  // Menu Items
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "shift", name: "Lihat Shift", icon: CalendarDaysIcon },
    { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
    { id: "presensi", name: "Presence", icon: MapPinIcon },
    { id: "help", name: "Help Desk", icon: CogIcon },
  ];

  // ==================== FUNGSI PERHITUNGAN ====================
  
  // Fungsi untuk menghitung rate kehadiran berdasarkan data aktual
  const calculateAttendanceRate = () => {
    if (attendanceHistory.length === 0) return { rate: "0%", change: "+0%" };
    
    // Ambil data 30 hari terakhir
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentAttendance = attendanceHistory.filter(att => {
      const attDate = new Date(att.date);
      return attDate >= thirtyDaysAgo;
    });
    
    if (recentAttendance.length === 0) return { rate: "0%", change: "+0%" };
    
    // Hitung persentase kehadiran yang disetujui
    const approvedCount = recentAttendance.filter(att =>
      att.approvalStatus === "approved"
    ).length;
    
    const rate = (approvedCount / recentAttendance.length) * 100;
    
    // Hitung perubahan dari bulan sebelumnya (dummy calculation)
    const previousMonthRate = Math.max(0, rate - 10);
    const change = rate > 0 ? `+${Math.round(((rate - previousMonthRate) / previousMonthRate) * 100)}%` : "+0%";
    
    return { rate: `${Math.round(rate)}%`, change };
  };

  // Fungsi untuk menghitung total laporan bulan ini
  const calculateMonthlyReports = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    const currentMonthReports = reports.filter(report => {
      const reportDate = new Date(report.date);
      return reportDate.getMonth() === currentMonth &&
             reportDate.getFullYear() === currentYear;
    }).length;
    
    // Hitung laporan bulan sebelumnya
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    
    const previousMonthReports = reports.filter(report => {
      const reportDate = new Date(report.date);
      return reportDate.getMonth() === previousMonth &&
             reportDate.getFullYear() === previousYear;
    }).length;
    
    // Hitung persentase perubahan
    const change = previousMonthReports > 0 
      ? `+${Math.round(((currentMonthReports - previousMonthReports) / previousMonthReports) * 100)}%`
      : currentMonthReports > 0 ? "+100%" : "+0%";
    
    return { count: currentMonthReports, change };
  };

  // Fungsi untuk menentukan kategori parameter
  const getParameterCategory = (type, value) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "no data";
    
    switch(type) {
      case 'pHLevel':
        if (numValue >= 6.5 && numValue <= 8.5) return "normal";
        if (numValue < 6.5) return "low";
        return "high";
      case 'flowRate':
        if (numValue >= 400 && numValue <= 600) return "normal";
        if (numValue < 400) return "low";
        return "high";
      case 'tds':
        if (numValue <= 500) return "normal";
        if (numValue <= 1000) return "high";
        return "very high";
      case 'ec':
        if (numValue <= 800) return "normal";
        if (numValue <= 1500) return "high";
        return "very high";
      default:
        return "normal";
    }
  };

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
    const loadData = async () => {
        try {
            const result = await fetchOperatorDashboardData();
            if (!result) throw new Error("No data returned");
            setDashboardData(result);
        } catch (err) {
          //setError
      } finally {
        //setLoading
      }
    };   
  
    loadData();
    
    const submittedReports = reports.filter(
      (report) => report.status === "pending"
    );
    const latestReport = submittedReports[0];

    // Hitung data aktual
    //const attendanceData = calculateAttendanceRate();
    //const monthlyReports = calculateMonthlyReports();

    
    if (submittedReports.length > 0) {
      const latestReports = submittedReports.slice(0, 7);

      const newPHData = latestReports.map((report, index) => {
        const reportDate = new Date(report.date);
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const dayName = days[reportDate.getDay()];

        return {
          day: dayName,
          value: parseFloat(report.pHLevel) || 0,
        };
      });

      const newFlowRateData = latestReports.map((report, index) => {
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

    if (!formData.images) {
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
      if (editingReportId) {
        // Edit existing report; not yet implemented - no time to integrate;(
        setReports(prev => prev.map(report => 
          report.id === editingReportId 
            ? {
                ...report,
                ...formData,
                uploadedFiles: [...uploadedFiles],
                timestamp: new Date().toISOString(),
                status: "Draft"
              }
            : report
        ));
        setEditingReportId(null);
        alert("Laporan berhasil diedit!");
      } else {
        const newReport = await createOperatorReport(formData)
        setReports((prev) => [newReport, ...prev]);
      }

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
        images: []
      });
      setUploadedFiles([]);
      setErrors({});
      setIsSubmitting(false);

      updateDashboardData();

      setNotifications((prev) => [
        {
          id: Date.now(),
          title: editingReportId ? "Laporan Berhasil Diedit" : "Laporan Berhasil Disubmit",
          message: `Laporan harian ${formData.date} telah berhasil ${editingReportId ? 'diedit' : 'disubmit'}`,
          time: "Baru saja",
          type: "success",
          read: false,
        },
        ...prev,
      ]);
    }, 1000);
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

  const handleDeleteReport = (reportId) => {
    const reportToDelete = reports.find(r => r.id === reportId);
    
    if (!reportToDelete) {
      alert("Laporan tidak ditemukan");
      return;
    }
    
    if (reportToDelete.status === "Submitted" || reportToDelete.status === "Approved") {
      alert("Laporan yang sudah disubmit/telah disetujui tidak dapat dihapus");
      return;
    }
    
    if (window.confirm("Apakah Anda yakin ingin menghapus laporan ini?")) {
      setReports(prev => prev.filter(r => r.id !== reportId));
      alert("Laporan berhasil dihapus");
      updateDashboardData();
    }
  };

  const handleEditReport = (report) => {
    setFormData({
      date: report.date,
      time: report.time,
      pHLevel: report.pHLevel,
      flowRate: report.flowRate,
      volt: report.volt,
      ampere: report.ampere,
      tds: report.tds,
      ec: report.ec,
      agitatorStatus: report.agitatorStatus,
      settleStatus: report.settleStatus,
      outFilterStatus: report.outFilterStatus,
      additionalNotes: report.additionalNotes,
    });
    setUploadedFiles(report.uploadedFiles || []);
    setEditingReportId(report.id);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Fungsi untuk membuka modal edit presensi (sesuai SRS)
  const openEditPresenceModal = (attendance) => {
    if (attendance.approvalStatus !== "pending") {
      alert("Presensi yang sudah disetujui tidak dapat diedit");
      return;
    }

    setEditingPresence(attendance);
    setEditPresenceForm({
      checkIn: attendance.checkIn,
      checkOut: attendance.checkOut,
      checkInLocation: attendance.checkInLocation,
      checkOutLocation: attendance.checkOutLocation,
      checkInStatus: attendance.checkInStatus,
    });
    setIsEditPresenceModalOpen(true);
  };

  // Fungsi untuk menyimpan edit presensi (sesuai SRS)
  const handleSaveEditPresence = () => {
    if (!editPresenceForm.checkIn || !editPresenceForm.checkOut) {
      alert("Waktu check-in dan check-out harus diisi");
      return;
    }

    // Validasi format waktu
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9] (AM|PM)$/;
    if (!timeRegex.test(editPresenceForm.checkIn) || !timeRegex.test(editPresenceForm.checkOut)) {
      alert("Format waktu tidak valid. Gunakan format: HH:MM AM/PM");
      return;
    }

    // Update attendance history
    const updatedHistory = attendanceHistory.map(att =>
      att.id === editingPresence.id
        ? {
            ...att,
            ...editPresenceForm,
            timestamp: new Date().toISOString(),
          }
        : att
    );

    setAttendanceHistory(updatedHistory);
    setIsEditPresenceModalOpen(false);
    
    // Update dashboard data
    updateDashboardData();
    
    // Tambah notifikasi
    setNotifications((prev) => [
      {
        id: Date.now(),
        title: "Presensi Berhasil Diedit",
        message: `Presensi tanggal ${editingPresence.date} berhasil diperbarui`,
        time: "Baru saja",
        type: "success",
        read: false,
      },
      ...prev,
    ]);
    
    alert("Presensi berhasil diedit!");
  };

  // PERBAIKAN: Fungsi getCurrentLocation yang sudah diperbaiki
  const getCurrentLocation = (isCheckOut = false) => {
    console.log("getCurrentLocation dipanggil, isCheckOut:", isCheckOut);
    
    // Jika DEMO_MODE aktif, gunakan koordinat dummy dari site
    if (DEMO_MODE) {
      const userSite = user.site || "Jakarta Utara - Site A";
      const siteData = DEMO_SITE_COORDINATES[userSite] || 
                       DEMO_SITE_COORDINATES["Jakarta Utara - Site A"];
      
      // Buat koordinat random dalam radius 50-200 meter dari site
      const randomOffset = () => (Math.random() * 0.003 - 0.0015); // ~50-200 meter
      const demoLat = siteData.lat + randomOffset();
      const demoLng = siteData.lng + randomOffset();
      
      // Hitung jarak dari perusahaan (simulasi)
      const distance = calculateDistance(
        demoLat,
        demoLng,
        COMPANY_COORDINATES.latitude,
        COMPANY_COORDINATES.longitude
      );
      
      const isWithinRadius = distance <= ALLOWED_RADIUS_METERS;
      
      // Format lokasi demo
      const locationString = `Lat: ${demoLat.toFixed(6)}, Long: ${demoLng.toFixed(6)}`;
      const statusMessage = isWithinRadius
        ? `✓ Within allowed radius (${Math.round(distance)} m from company)`
        : `✗ Outside allowed radius (${Math.round(distance)} m from company) - DEMO MODE`;
      
      const fullLocationString = `${locationString}\n${statusMessage}`;
      
      if (isCheckOut) {
        setCurrentLocationCheckOut(fullLocationString);
        setLocationCapturedCheckOut(true); // Selalu true agar bisa presensi
      } else {
        setCurrentLocation(fullLocationString);
        setLocationCaptured(true); // Selalu true agar bisa presensi
      }

      // Hanya beri warning jika di luar radius, tapi tetap izinkan
      if (!isWithinRadius) {
        alert(
          `Warning: Anda berada di luar radius yang diizinkan (${Math.round(distance)} m dari perusahaan). Maximum ${ALLOWED_RADIUS_METERS} meters allowed.\n\nAnda masih bisa melakukan presensi, tetapi status akan dicatat sebagai "Outside Radius".`
        );
      } else {
        alert("Location valid! You are within the allowed radius.");
      }
      return;
    }

    // Jika tidak dalam demo mode, gunakan geolocation asli
    if (!navigator.geolocation) {
      alert("Geolocation tidak didukung oleh browser Anda.");
      if (isCheckOut) {
        setCurrentLocationCheckOut("Geolocation not supported");
        setLocationCapturedCheckOut(true); // Tetap izinkan presensi
      } else {
        setCurrentLocation("Geolocation not supported");
        setLocationCaptured(true); // Tetap izinkan presensi
      }
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
    };

    if (isCheckOut) {
      setCurrentLocationCheckOut("Getting location...");
    } else {
      setCurrentLocation("Getting location...");
    }

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
          : `⚠ Outside allowed radius (${Math.round(distance)} m from company)`;

        const fullLocationString = `${locationString}\n${statusMessage}`;

        if (isCheckOut) {
          setCurrentLocationCheckOut(fullLocationString);
          setLocationCapturedCheckOut(true); // Selalu true agar bisa presensi

          if (!isWithinRadius) {
            alert(
              `Warning: Anda berada di luar radius yang diizinkan (${Math.round(distance)} m dari perusahaan). Maximum ${ALLOWED_RADIUS_METERS} meters allowed.\n\nAnda masih bisa melakukan presensi, tetapi status akan dicatat sebagai "Outside Radius".`
            );
          } else {
            alert("Location valid! You are within the allowed radius.");
          }
        } else {
          setCurrentLocation(fullLocationString);
          setLocationCaptured(true); // Selalu true agar bisa presensi

          if (!isWithinRadius) {
            alert(
              `Warning: Anda berada di luar radius yang diizinkan (${Math.round(distance)} m dari perusahaan). Maximum ${ALLOWED_RADIUS_METERS} meters allowed.\n\nAnda masih bisa melakukan presensi, tetapi status akan dicatat sebagai "Outside Radius".`
            );
          } else {
            alert("Location valid! You are within the allowed radius.");
          }
        }
      },
      (error) => {
        console.log("Error getting location:", error);
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
          setLocationCapturedCheckOut(true); // Tetap izinkan presensi
        } else {
          setCurrentLocation("Location unavailable");
          setLocationCaptured(true); // Tetap izinkan presinsi
        }
        alert(`Warning: ${errorMessage}\n\nAnda masih bisa melakukan presensi tanpa lokasi.`);
      },
      options
    );
  };

  const startCamera = (isCheckOut = false) => {
    console.log("startCamera dipanggil, isCheckOut:", isCheckOut);
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Browser tidak mendukung akses kamera");
      return;
    }

    // Gunakan videoRef yang sesuai
    const videoElement = isCheckOut ? videoRef.current : videoRef.current;
    
    if (!videoElement) {
      console.log("Video element tidak ditemukan");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ 
        video: { 
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      })
      .then((mediaStream) => {
        console.log("Camera accessed successfully");
        
        if (isCheckOut) {
          setStreamCheckOut(mediaStream);
          setIsCameraActiveCheckOut(true);
        } else {
          setStream(mediaStream);
          setIsCameraActive(true);
        }
        
        videoElement.srcObject = mediaStream;
        videoElement.play().catch(err => console.log("Error playing video:", err));
      })
      .catch((error) => {
        console.log("Error accessing camera:", error);
        alert("Tidak dapat mengakses kamera. Silakan periksa izin.");
      });
  };

  const capturePhoto = (isCheckOut = false) => {
    console.log("capturePhoto dipanggil, isCheckOut:", isCheckOut);
    
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    
    if (!videoElement || !canvasElement) {
      console.log("Video atau canvas element tidak ditemukan");
      return;
    }

    const context = canvasElement.getContext("2d");
    if (!context) {
      console.log("Tidak dapat mendapatkan context canvas");
      return;
    }

    // Set canvas size sama dengan video
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    
    // Gambar frame video ke canvas
    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    
    // Dapatkan data URL dari canvas
    const photoDataUrl = canvasElement.toDataURL("image/png");

    if (isCheckOut) {
      setSelfiePreviewCheckOut(photoDataUrl);
      setSelfieUploadedCheckOut(true);
      console.log("Selfie check-out diambil");
    } else {
      setSelfiePreview(photoDataUrl);
      setSelfieUploaded(true);
      console.log("Selfie check-in diambil");
    }
    
    // Hentikan kamera
    stopCamera(isCheckOut);
  };

  const stopCamera = (isCheckOut = false) => {
    console.log("stopCamera dipanggil, isCheckOut:", isCheckOut);
    
    if (isCheckOut) {
      if (streamCheckOut) {
        streamCheckOut.getTracks().forEach((track) => {
          track.stop();
          console.log("Track check-out dihentikan:", track.kind);
        });
        setStreamCheckOut(null);
      }
      setIsCameraActiveCheckOut(false);
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
          console.log("Track check-in dihentikan:", track.kind);
        });
        setStream(null);
      }
      setIsCameraActive(false);
    }
    
    // Clear video source
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleSelfieUpload = (event, isCheckOut = false) => {
    console.log("handleSelfieUpload dipanggil, isCheckOut:", isCheckOut);
    
    const file = event.target.files[0];
    if (!file) return;

    setUploadedFiles(file)

    if (!file.type.startsWith("image/")) {
      alert("Silakan pilih file gambar");
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      alert("Silakan pilih gambar yang lebih kecil dari 5MB");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      if (isCheckOut) {
        setSelfiePreviewCheckOut(e.target.result);
        setSelfieUploadedCheckOut(true);
        console.log("Selfie check-out diupload");
      } else {
        setSelfiePreview(e.target.result);
        setSelfieUploaded(true);
        console.log("Selfie check-in diupload");
      }
    };
    reader.onerror = (error) => {
      console.log("Error reading file:", error);
      alert("Error membaca file");
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = (isCheckOut = false) => {
    console.log("triggerFileInput dipanggil, isCheckOut:", isCheckOut);
    
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.capture = "user"; // Untuk mobile devices
    input.onchange = (e) => handleSelfieUpload(e, isCheckOut);
    input.onerror = (error) => {
      console.log("Error dengan input file:", error);
    };
    input.click();
  };

  // PERBAIKAN: Fungsi openCheckInModal yang sudah diperbaiki
  const openCheckInModal = () => {
    console.log("openCheckInModal dipanggil");
    setIsCheckInModalOpen(true);
    setLocationCaptured(false);
    setSelfieUploaded(false);
    setSelfiePreview(null);
    setCurrentLocation("Click to get location");
    setIsCameraActive(false);
    
    // Pastikan stream sebelumnya dihentikan
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  // PERBAIKAN: Fungsi openCheckOutModal yang sudah diperbaiki
  const openCheckOutModal = () => {
    console.log("openCheckOutModal dipanggil");
    setIsCheckOutModalOpen(true);
    setLocationCapturedCheckOut(false);
    setSelfieUploadedCheckOut(false);
    setSelfiePreviewCheckOut(null);
    setCurrentLocationCheckOut("Click to get location");
    setIsCameraActiveCheckOut(false);
    
    // Pastikan stream sebelumnya dihentikan
    if (streamCheckOut) {
      streamCheckOut.getTracks().forEach(track => track.stop());
      setStreamCheckOut(null);
    }
  };

  // PERBAIKAN: Fungsi handleConfirmCheckIn yang sudah diperbaiki
  const handleConfirmCheckIn = async () => {
    console.log("handleConfirmCheckIn dipanggil");
    
    if (!selfieUploaded) {
      alert("Harap ambil atau upload selfie terlebih dahulu");
      return;
    }
    setLoading(true)
    const now = new Date();
    const formData = new FormData()
    formData.append("selfie",uploadedFiles)
    formData.append("timestamp",now.toISOString())
    const response = await checkIn(formData)
    if(!response){
      setLoading(false)
      alert("Gagal checkin, pastikan anda punya jadwal shift hari ini")
      return
    }


    setAttendanceData((prev) => ({
      ...prev,
      checkInTime: response.checkIn,
      status: response.status,
      isCheckedIn: true,
      isCheckedOut: false,
      checkOutTime: "--:--",
      location: currentLocation,
    }));

    setAttendanceHistory((prev) => [response, ...prev]);
    setIsCheckInModalOpen(false);

    updateDashboardData();

    alert(
      `Check-in berhasil! Jarak ke site: ${response.locationStatus}. Waktu: ${response.checkIn} - Status: ${response.checkInStatus}. Menunggu approval admin.`
    );
    setLoading(false)
  };

  // PERBAIKAN: Fungsi handleConfirmCheckOut yang sudah diperbaiki
  const handleConfirmCheckOut = async () => {
    console.log("handleConfirmCheckOut dipanggil");
    
    if (!selfieUploadedCheckOut) {
      alert("Harap ambil atau upload selfie terlebih dahulu");
      return;
    }

    setLoading(true)
    const now = new Date();
    const formData = new FormData()
    formData.append("selfie",uploadedFiles)
    formData.append("timestamp",now.toISOString())
    const response = await checkOut(formData)
    if(!response){
      setLoading(false)
      return;
    }

    setAttendanceData((prev) => ({
      ...prev,
      checkOutTime: response.checkOutTime,
      isCheckedOut: true,
    }));

    const updatedHistory = attendanceHistory.map((record) =>
      record.id === response.id
        ? {
            ...record,
            checkOut: response.checkOutTime,
            checkOutLocation: response.checkOutLocation,
            selfieCheckOut: response.selfieCheckout,
            status: response.status,
            approvalStatus: response.approvalStatus,
            locationStatus: response.locationStatus,
          }
        : record
    );

    setAttendanceHistory(updatedHistory);
    setIsCheckOutModalOpen(false);

    updateDashboardData();

    alert(`Check-out berhasil! Jarak ke site: ${response.locationStatus}. Menunggu approval admin.`);
    setLoading(false)
  };

  const getStatusColor = (status) => {
    if (status.includes("ontime")) return "text-green-600 bg-green-100";
    if (status.includes("late")) return "text-red-600 bg-red-100";
    if (status.includes("Outside Radius")) return "text-orange-600 bg-orange-100";
    if (status === "approved") return "text-green-600 bg-green-100";
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
  const handleCreateTicket = async () => {
    const errors = {};
    if (!newTicket.title.trim()) errors.title = "Judul masalah harus diisi";
    if (!newTicket.description.trim())
      errors.description = "Deskripsi masalah harus diisi";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading (true)
    const ticket = await createTicket(newTicket)

    if(!ticket){
      setLoading(false)
      return;
    }

    setTickets((prev) => [ticket, ...prev]);
    setNewTicket({
      site: user.site,
      category: "Technical",
      title: "",
      description: "",
      priority: "Medium",
    });
    setFormErrors({});
    setIsCreateModalOpen(false);

    updateDashboardData();

    alert(`Tiket bantuan berhasil diajukan! Nomor tiket: ${ticket.id}`);
    setLoading(false)
  };

  useEffect(() => {
    if (isCreateModalOpen) {
      setFormErrors({});
    }
  }, [isCreateModalOpen]);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "Semua Status" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "Semua Prioritas" ||
      ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTicketStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const statusOptions = ["Semua Status", "open", "pending", "resolved"];
  const priorityOptions = ["Semua Prioritas", "high", "medium", "low"];

  // ==================== FUNGSI LIHAT SHIFT ====================
  const handleSubmitLibur = async () => {
    if (!liburForm.startDate || !liburForm.reason) {
      alert("Tanggal dan alasan harus diisi");
      return;
    }

    setLoading(true)

    const result = await createOperatorLibur({
      start: liburForm.startDate,
      end: liburForm.endDate,
      reason: liburForm.reason,
    });

    if(!result){
      setLoading(false)
      return
    }

    setSubmissionHistory((prev) => [result, ...prev]);
    
    alert(`Pengajuan libur berhasil dikirim!\nTanggal: ${liburForm.startDate}${liburForm.endDate ? ` - ${liburForm.endDate}` : ''}\nAlasan: ${liburForm.reason}`);
    
    setLiburForm({ startDate: "", endDate: "", reason: "" });
    setIsLiburModalOpen(false);
    
    setNotifications((prev) => [
      {
        id: Date.now(),
        title: "Pengajuan Libur Dikirim",
        message: "Pengajuan libur Anda sedang menunggu persetujuan",
        time: "Baru saja",
        type: "info",
        read: false,
      },
      ...prev,
    ]);
    setLoading(false)
  };

  const handleSubmitIzin = async () => {
    if (!izinForm.startDate || !izinForm.reason) {
      alert("Tanggal dan alasan harus diisi");
      return;
    }

    setLoading(true)

    const result = await createOperatorIjin({
      start: izinForm.startDate,
      end: izinForm.endDate,
      reason: izinForm.reason,
    });

    if(!result){
      setLoading(false)
      return
    }

    setSubmissionHistory((prev) => [result, ...prev]);
    
    alert(`Pengajuan izin berhasil dikirim!\nTanggal: ${izinForm.startDate}${izinForm.endDate ? ` - ${izinForm.endDate}` : ''}\nAlasan: ${izinForm.reason}`);
    
    setIzinForm({ startDate: "", endDate: "", reason: "" });
    setIsIzinModalOpen(false);
    
    setNotifications((prev) => [
      {
        id: Date.now(),
        title: "Pengajuan Izin Dikirim",
        message: "Pengajuan izin Anda sedang menunggu persetujuan",
        time: "Baru saja",
        type: "info",
        read: false,
      },
      ...prev,
    ]);

    setLoading(false)
  };

  const getSubmissionStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSubmissionTypeColor = (type) => {
    switch (type) {
      case "libur":
        return "bg-blue-100 text-blue-800";
      case "izin":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Fungsi untuk membuka modal detail pengajuan
  const openSubmissionDetailModal = (submission) => {
    setSelectedSubmission(submission);
    setIsSubmissionDetailModalOpen(true);
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
            Welcome back, {user.name}! Monitor your daily activities and IPAL status
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            {
              label: "Reports Submitted",
              value: dashboardData.reportsSubmitted,
              icon: DocumentChartBarIcon,
            },
            {
              label: "Attendance Rate",
              value: `${dashboardData.attendanceRate?.toFixed(2)}%`,
              icon: ChartBarIcon,
            },
            {
              label: "Next Shift",
              value: dashboardData.nextShift,
              subValue: dashboardData.nextShiftTime,
              icon: ClockIcon,
            },
            { label: "Current Site", value: dashboardData.currentSite, icon: MapPinIcon },
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
              </div>
            );
          })}
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Site Latest Report
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "pH Level",
                value: dashboardData.pHLevel,
                type: 'pHLevel',
              },
              {
                label: "Flow Rate",
                value: dashboardData.flowRate,
                type: 'flowRate',
              },
              {
                label: "TDS",
                value: dashboardData.tds,
                type: 'tds',
              },
              {
                label: "EC",
                value: dashboardData.ec,
                type: 'ec',
              },
            ].map((item, index) => {
              const category = getParameterCategory(item.type, item.value.replace(/[^\d.-]/g, ''));
              return (
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
                        category === "normal"
                          ? "bg-green-500"
                          : category === "no data"
                          ? "bg-gray-400"
                          : category === "low"
                          ? "bg-yellow-500"
                          : category === "high"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span
                      className={`text-xs font-medium ${
                        category === "normal"
                          ? "text-green-600"
                          : category === "no data"
                          ? "text-gray-600"
                          : category === "low"
                          ? "text-yellow-600"
                          : category === "high"
                          ? "text-orange-600"
                          : "text-red-600"
                      }`}
                    >
                      {category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Your Recent Report
        </h3>
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
                      {new Date(report.date).toLocaleTimeString()}
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

  const renderLihatProfil = () => {
    // Hitung statistik berdasarkan data aktual
    const totalReports = reports.filter(r => r.status === "pending").length;
    //const attendanceRate = calculateAttendanceRate();
    const activeTickets = tickets.filter(t => t.status === 'Open').length;
    
    // Hitung performa bulan ini
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const monthlyReports = reports.filter(report => {
      const reportDate = new Date(report.date);
      return reportDate.getMonth() === currentMonth && 
             reportDate.getFullYear() === currentYear;
    }).length;

    const {attendanceRate} = dashboardData
    return (
      <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Lihat Profil</h2>
          <p className="text-gray-600 mt-1">Informasi profil operator</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Foto Profil */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                  {user.initial}
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Active
                  </span>
                </div>
              </div>
              
              {/* Informasi Profil */}
              <div className="flex-1">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                  <p className="text-gray-600 text-lg">{user.role} • {user.site}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IdentificationIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">ID Operator</p>
                        <p className="text-lg font-semibold text-gray-900">{user.employeeId}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <EnvelopeIcon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Email</p>
                        <p className="text-lg font-semibold text-gray-900">{user.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DevicePhoneMobileIcon className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Telepon</p>
                        <p className="text-lg font-semibold text-gray-900">{user.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CalendarDaysIcon className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Tanggal Bergabung</p>
                        <p className="text-lg font-semibold text-gray-900">{user.joinDate}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ClockOutlineIcon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Shift</p>
                        <p className="text-lg font-semibold text-gray-900">{user.shift}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">Site/Lokasi</p>
                        <p className="text-lg font-semibold text-gray-900">{user.site}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alamat */}
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <HomeIcon className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Alamat</p>
                      <p className="text-lg font-semibold text-gray-900">{user.address}</p>
                    </div>
                  </div>
                </div>

                {/* Statistik Kinerja */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Statistik Kinerja</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <p className="text-sm text-gray-600">Total Laporan</p>
                      <p className="text-2xl font-bold text-gray-900">{totalReports}</p>
                      <p className="text-xs text-gray-500 mt-1">{monthlyReports} bulan ini</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <p className="text-sm text-gray-600">Rate Kehadiran</p>
                      <p className="text-2xl font-bold text-gray-900">{attendanceRate}</p>
                      <p className="text-xs text-gray-500 mt-1">30 hari terakhir</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <p className="text-sm text-gray-600">Shift</p>
                      <p className="text-2xl font-bold text-gray-900">{(user.shift ? user.shift : "-")}</p>
                      <p className="text-xs text-gray-500 mt-1">Jadwal reguler</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <p className="text-sm text-gray-600">Tiket Aktif</p>
                      <p className="text-2xl font-bold text-gray-900">{activeTickets}</p>
                      <p className="text-xs text-gray-500 mt-1">Dalam proses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLihatShift = () => (
    <div className="px-4 sm:px-6 lg:px-6 py-6 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Lihat Shift</h2>
        <p className="text-gray-600 mt-1">Jadwal shift dan pengajuan libur/izin</p>
      </div>

      {/* Tombol Aksi */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setIsLiburModalOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <CalendarDaysIcon className="w-5 h-5" />
          Ajukan Libur
        </button>
        <button
          onClick={() => setIsIzinModalOpen(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <CheckBadgeIcon className="w-5 h-5" />
          Ajukan Izin
        </button>
      </div>

      {/* Jadwal Shift */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg text-gray-800">Jadwal Shift Mendatang</h3>
          </div>
          
          {shiftData.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CalendarDaysIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">Belum ada shift yang ditugaskan untuk Anda saat ini</p>
            </div>
          ) : (
            <div className="space-y-4">
              {shiftData.map((shift) => (
                <div key={shift.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-gray-900">{shift.date}</h4>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {shift.day}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <ClockOutlineIcon className="w-4 h-4" />
                            {shift.startTime} - {shift.endTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPinIcon className="w-4 h-4" />
                            {shift.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    {/*<div className="flex flex-col md:items-end gap-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        shift.status === 'Scheduled' ? 'bg-green-100 text-green-800' : 
                        shift.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {shift.status === 'Scheduled' ? '✓ Terjadwal' : 
                         shift.status === 'Cancelled' ? '✗ Dibatalkan' : 
                         shift.status}
                      </span>
                    </div>*/}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* RIWAYAT PENGAJUAN */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg text-gray-800">Riwayat Pengajuan</h3>
            <div className="text-sm text-gray-600">
              {submissionHistory.length} total pengajuan
            </div>
          </div>
          
          {submissionHistory.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">Belum ada riwayat pengajuan</p>
              <p className="text-gray-400 text-sm mt-1">
                Riwayat pengajuan libur dan izin akan muncul di sini
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissionHistory.map((submission) => (
                <div 
                  key={submission.id} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => openSubmissionDetailModal(submission)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${submission.type === 'libur' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                        {submission.type === 'libur' ? (
                          <CalendarDaysIcon className="w-6 h-6 text-blue-600" />
                        ) : (
                          <CheckBadgeIcon className="w-6 h-6 text-purple-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h4 className="font-bold text-gray-900">
                            {submission.type === 'libur' ? 'Pengajuan Libur' : 'Pengajuan Izin'}
                          </h4>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getSubmissionTypeColor(submission.type)}`}>
                            {submission.type === 'libur' ? 'Libur' : 'Izin'}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getSubmissionStatusColor(submission.status)}`}>
                            {submission.status === 'approved' ? '✓ Disetujui' : 
                             submission.status === 'rejected' ? '✗ Ditolak' : 
                             '⏳ Menunggu'}
                          </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <CalendarDaysIcon className="w-4 h-4" />
                            {submission.startDate} {submission.endDate && `- ${submission.endDate}`}
                          </span>
                          <span className="hidden md:block">•</span>
                          <span className="text-gray-700 font-medium">
                            {submission.reason}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">Lihat detail</span>
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderSubmissionDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Detail Pengajuan</h2>
            <button
              onClick={() => setIsSubmissionDetailModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            {selectedSubmission?.type === 'libur' ? 'Pengajuan Libur' : 'Pengajuan Izin'}
          </p>
        </div>
        <div className="p-6 space-y-4">
          {/* Status Pengajuan */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-2">Status Pengajuan</h3>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getSubmissionStatusColor(selectedSubmission?.status)}`}>
                {selectedSubmission?.status === 'approved' ? '✓ Disetujui' : 
                 selectedSubmission?.status === 'rejected' ? '✗ Ditolak' : 
                 '⏳ Menunggu Persetujuan'}
              </span>
              {selectedSubmission?.processedAt && (
                <span className="text-sm text-gray-600">
                  {selectedSubmission.status === 'approved' ? 'Disetujui' : 'Ditolak'} pada {selectedSubmission.processedAt}
                </span>
              )}
            </div>
          </div>

          {/* Informasi Pengajuan */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Informasi Pengajuan</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Jenis</span>
                <span className={`font-medium ${selectedSubmission?.type === 'libur' ? 'text-blue-600' : 'text-purple-600'}`}>
                  {selectedSubmission?.type === 'libur' ? 'Libur' : 'Izin'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Periode</span>
                <span className="font-medium">
                  {selectedSubmission?.startDate} {selectedSubmission?.endDate && `- ${selectedSubmission.endDate}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tanggal Pengajuan</span>
                <span className="font-medium">{selectedSubmission?.submittedAt}</span>
              </div>
              {selectedSubmission?.processedAt && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Tanggal Persetujuan</span>
                  <span className="font-medium">{selectedSubmission.processedAt}</span>
                </div>
              )}
            </div>
          </div>

          {/* Alasan Pengajuan */}
          <div>
            <h3 className="font-medium text-gray-700 mb-2">Alasan Pengajuan</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-800">{selectedSubmission?.reason}</p>
            </div>
          </div>

          {/* Catatan Admin */}
          {selectedSubmission?.notes && (
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Catatan Admin</h3>
              <div className={`p-3 rounded-lg ${selectedSubmission?.status === 'approved' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-start gap-2">
                  {selectedSubmission?.status === 'approved' ? (
                    <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <ExclamationCircleIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  )}
                  <div>
                    <p className={`${selectedSubmission?.status === 'approved' ? 'text-green-800' : 'text-red-800'}`}>
                      {selectedSubmission.notes}
                    </p>
                    {selectedSubmission?.processedBy && (
                      <p className="text-sm text-gray-600 mt-1">
                        Oleh: {selectedSubmission.processedBy}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setIsSubmissionDetailModalOpen(false)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );

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

      {editingReportId && (
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm border border-yellow-200 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center mt-0.5">
              <ExclamationTriangleIcon className="w-4 h-4 text-yellow-700" />
            </div>
            <div>
              <h3 className="font-bold text-yellow-700 mb-2">
                Sedang Mengedit Laporan
              </h3>
              <p className="text-yellow-800 text-sm">
                Anda sedang dalam mode edit. Setelah selesai, klik "Submit Report" untuk menyimpan perubahan.
              </p>
            </div>
          </div>
        </div>
      )}

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
            {/* Input Date */}
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
                  className={`w-full p-3 pr-10 border ${
                    errors.date ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                  style={{ 
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                    appearance: 'none'
                  }}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  {errors.date}
                </p>
              )}
            </div>
            
            {/* Input Time */}
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
                  className={`w-full p-3 pr-10 border ${
                    errors.time ? "border-red-500" : "border-gray-200"
                  } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                  style={{ 
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                    appearance: 'none'
                  }}
                />
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
            onChange={(e) => {
              const files = Array.from(e.target.files);
              handleInputChange("images", files);
              handleFileUpload(e); 
            }}
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
            {editingReportId && (
              <button
                onClick={() => {
                  setEditingReportId(null);
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
                }}
                className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Batal Edit
              </button>
            )}
            {/*<button
              onClick={handleSaveDraft}
              className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Save as Draft
            </button>*/}
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
                  {editingReportId ? "Menyimpan..." : "Submitting..."}
                </>
              ) : editingReportId ? (
                "Update Report"
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
              {/*<select className="px-4 py-2 border text-gray-800 bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Semua Status</option>
                <option>Submitted</option>
                <option>Draft</option>
              </select>*/}
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
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentChartBarIcon className="w-8 h-8 text-gray-400" />
              </div>
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
                              : report.status === "Draft"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
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
                        <p className="text-gray-700 mb-4 line-clamp-2">
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
                    <div className="flex gap-2">
                      <button
                        onClick={() => openReportDetailModal(report)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <MagnifyingGlassIcon className="w-4 h-4" />
                        Detail
                      </button>
                      
                      {/* Tombol Edit - hanya untuk draft */}
                      {report.status === "Draft" && (
                        <button
                          onClick={() => handleEditReport(report)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                        >
                          <PencilIcon className="w-4 h-4" />
                          Edit
                        </button>
                      )}
                      
                      {/* Tombol Hapus - hanya untuk draft */}
                      {report.status === "Draft" && (
                        <button
                          onClick={() => handleDeleteReport(report.id)}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                        >
                          <TrashIcon className="w-4 h-4" />
                          Hapus
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // PERBAIKAN: Render Presence yang sudah diperbaiki
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
          {!attendanceData.isCheckedIn || !dashboardData.nextShiftTime === "-" ? (
            <button
              onClick={() => {
                console.log("Check In button clicked");
                openCheckInModal();
              }}
              className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Check In Now
            </button>
          ) : !attendanceData.isCheckedOut || !dashboardData.nextShiftTime === "-" ? (
            <button
              onClick={() => {
                console.log("Check Out button clicked");
                openCheckOutModal();
              }}
              className="w-full lg:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base"
            >
              <CheckCircleIcon className="w-5 h-5" />
              Check Out Now
            </button>
          ) : (
            <div className="text-center px-4 py-3 bg-gray-100 text-gray-600 rounded-lg text-sm lg:text-base">
              Checkout Berhasil!
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
          {/* Mobile View - Card Layout */}
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

                <div className="flex gap-2">
                  <button
                    onClick={() => openDetailModal(record)}
                    className="flex-1 flex items-center justify-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium py-2 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <EyeIcon className="w-4 h-4" />
                    Detail
                  </button>
                  
                  {/* Tombol Edit sesuai SRS - hanya untuk status pending */}
                  {/*{record.approvalStatus === "pending" && (
                    <button
                      onClick={() => openEditPresenceModal(record)}
                      className="flex-1 flex items-center justify-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium py-2 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors"
                    >
                      <PencilIcon className="w-4 h-4" />
                      Edit
                    </button>
                  )}*/}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Table Layout */}
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
                            record.checkInStatus === "ontime"
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
                      <div className="flex gap-2">
                        <button
                          onClick={() => openDetailModal(record)}
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium whitespace-nowrap"
                        >
                          <EyeIcon className="w-4 h-4" />
                          Detail
                        </button>
                        
                        {/* Tombol Edit sesuai SRS - hanya untuk status pending */}
                        {/*{record.approvalStatus === "pending" && (
                          <button
                            onClick={() => openEditPresenceModal(record)}
                            className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm font-medium whitespace-nowrap"
                          >
                            <PencilIcon className="w-4 h-4" />
                            Edit
                          </button>
                        )}*/}
                      </div>
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

  const renderEditPresenceModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Edit Presensi</h1>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal
            </label>
            <p className="p-3 border border-gray-200 bg-gray-50 rounded-lg text-gray-900">
              {editingPresence?.date}
            </p>
          </div>
          
        
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800 mb-1">
                  Catatan Edit Presensi
                </p>
                <p className="text-yellow-700 text-sm">
                  Presensi hanya dapat diedit jika statusnya belum disetujui (pending).
                  Setelah diedit, presensi akan kembali menunggu approval admin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => setIsEditPresenceModalOpen(false)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            onClick={handleSaveEditPresence}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit Edit
          </button>
        </div>
      </div>
    </div>
  );

  const renderCheckInModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Check In</h2>
          <p className="text-gray-600 mt-1">Upload photo to check in</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Upload Selfie</h3>
            {isCameraActive && (
              <div className="mb-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button
                      onClick={() => capturePhoto(false)}
                      className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
                    >
                      <CameraIcon className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => stopCamera(false)}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Close Camera
                </button>
              </div>
            )}
            {!isCameraActive && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => startCamera(false)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">
                    Take Photo
                  </span>
                </button>
                <button
                  onClick={() => triggerFileInput(false)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">
                    Upload Photo
                  </span>
                </button>
              </div>
            )}
            {selfiePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Selfie Preview:</p>
                <div className="flex items-center gap-3">
                  <img
                    src={selfiePreview}
                    alt="Selfie preview"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-green-600 font-medium">
                      ✓ Selfie captured
                    </p>
                    <p className="text-xs text-gray-500">Ready for check-in</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => {
              stopCamera(false);
              setIsCheckInModalOpen(false);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCheckIn}
            disabled={!selfieUploaded || loading}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Check-In
          </button>
        </div>
      </div>
    </div>
  );

  const renderCheckOutModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Check Out</h2>
          <p className="text-gray-600 mt-1">Upload photo to check out</p>
        </div>
        <div className="p-6 space-y-6">

          <div>
            <h3 className="font-medium text-gray-900 mb-3">Upload Selfie</h3>
            {isCameraActiveCheckOut && (
              <div className="mb-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button
                      onClick={() => capturePhoto(true)}
                      className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
                    >
                      <CameraIcon className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => stopCamera(true)}
                  className="mt-2 text-sm text-red-600 hover:text-red-800"
                >
                  Close Camera
                </button>
              </div>
            )}
            {!isCameraActiveCheckOut && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => startCamera(true)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">
                    Take Photo
                  </span>
                </button>
                <button
                  onClick={() => triggerFileInput(true)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">
                    Upload Photo
                  </span>
                </button>
              </div>
            )}
            {selfiePreviewCheckOut && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Selfie Preview:</p>
                <div className="flex items-center gap-3">
                  <img
                    src={selfiePreviewCheckOut}
                    alt="Selfie preview"
                    className="w-20 h-20 object-cover rounded-lg border border-gray-300"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-green-600 font-medium">
                      ✓ Selfie captured
                    </p>
                    <p className="text-xs text-gray-500">Ready for check-out</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => {
              stopCamera(true);
              setIsCheckOutModalOpen(false);
            }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCheckOut}
            disabled={!selfieUploadedCheckOut || loading}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Confirm Check-Out
          </button>
        </div>
      </div>
    </div>
  );

  const renderDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
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
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Approval Status
            </h3>
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-3 py-1 rounded-full text-sm font-medium ${getApprovalStatusColor(
                  selectedAttendance?.approvalStatus
                )}`}
              >
                {selectedAttendance?.approvalStatus === "pending" &&
                  "⏳ Pending Approval"}
                {selectedAttendance?.approvalStatus === "approved" &&
                  "✓ Approved by Admin"}
                {selectedAttendance?.approvalStatus === "rejected" &&
                  "✗ Rejected by Admin"}
              </span>
              {selectedAttendance?.approvalStatus === "pending" && (
                <span className="text-sm text-gray-600">
                  Waiting for admin approval
                </span>
              )}
              {selectedAttendance?.approvalStatus === "approved" &&
                selectedAttendance?.approvedBy && (
                  <span className="text-sm text-gray-600">
                    Approved by {selectedAttendance.approvedBy} at{" "}
                    {selectedAttendance.approvedAt}
                  </span>
                )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              Check-in Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-medium text-gray-900">
                  {selectedAttendance?.checkIn}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p
                  className={`font-medium ${
                    selectedAttendance?.checkInStatus === "ontime"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {selectedAttendance?.checkInStatus}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-gray-900 text-sm">
                  {selectedAttendance?.checkInLocation}
                </p>
              </div>
            </div>
            {selectedAttendance?.selfieCheckIn && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Check-in Selfie</p>
                <img
                  src={selectedAttendance.selfieCheckIn}
                  alt="Check-in selfie"
                  className="w-48 h-48 object-cover rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-blue-600" />
              Check-out Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="font-medium text-gray-900">
                  {selectedAttendance?.checkOut}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-medium text-gray-900">
                  {selectedAttendance?.checkOut === "--:--"
                    ? "Not checked out"
                    : "Completed"}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-gray-900 text-sm">
                  {selectedAttendance?.checkOutLocation}
                </p>
              </div>
            </div>
            {selectedAttendance?.selfieCheckOut && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Check-out Selfie</p>
                <img
                  src={selectedAttendance.selfieCheckOut}
                  alt="Check-out selfie"
                  className="w-48 h-48 object-cover rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setIsDetailModalOpen(false)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

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
                    placeholder="Cari tiket atau nomor tiket..."
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
                            <p className="text-sm text-gray-600 mt-1">
                              No. Tiket: {ticket.ticketNumber}
                            </p>
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
                    </div>
                    <div className="ml-9">
                      <p className="text-sm text-gray-600 mb-3">
                        {ticket.description}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        Solution: {ticket.solution || "-"}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTicketStatusColor(
                            ticket.status
                          )}`}
                        >
                          {ticket.status}
                        </span>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Site
            </label>
            <select
              value={newTicket.site}
              onChange={(e) =>
                setNewTicket({ ...newTicket, site: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
            >
                    <option value="">Select Site</option>
                    {siteOptions.map((site) => (
                      <option key={site} value={site}>
                        {site}
                      </option>
                    ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategori
            </label>
            <select
              value={newTicket.category}
              onChange={(e) =>
                setNewTicket({ ...newTicket, category: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
            >
              <option>Technical</option>
              <option>Operational</option>
              <option>Maintenance</option>
              <option>Other</option>
            </select>
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
              placeholder="Jelaskan detail masalah yang Anda alami..."
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
              Prioritas
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setNewTicket({ ...newTicket, priority: "Low" })}
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
                  newTicket.priority === "Low"
                    ? "border-green-500 bg-green-50 text-green-700"
                    : "border-gray-300 text-gray-900 bg-white"
                }`}
              >
                Low
              </button>
              <button
                onClick={() =>
                  setNewTicket({ ...newTicket, priority: "Medium" })
                }
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
                  newTicket.priority === "Medium"
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 text-gray-900 bg-white"
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setNewTicket({ ...newTicket, priority: "High" })}
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
                  newTicket.priority === "High"
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-300 text-gray-900 bg-white"
                }`}
              >
                High
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => {
              setIsCreateModalOpen(false);
              setFormErrors({});
            }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
          >
            Batal
          </button>
          <button
            onClick={handleCreateTicket}
            disabled={loading}
            className={`flex-1 px-4 py-2  text-white rounded-lg  flex items-center justify-center gap-2
              ${loading? "bg-gray-100 border-gray-300 cursor-not-allowed":"hover:bg-blue-700 bg-blue-600"}
              `}
          >
            <PlusIcon className="w-5 h-5" />
            Ajukan Tiket
          </button>
        </div>
      </div>
    </div>
  );

  const renderReportDetailModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Detail Laporan</h2>
            <button
              onClick={() => setIsReportDetailModalOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">
            Tanggal: {selectedReport?.date} {selectedReport?.time}
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                Informasi Umum
              </h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Lokasi:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.location}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Operator:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.operator}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span
                    className={`font-semibold ${
                      selectedReport?.status === "Submitted"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {selectedReport?.status}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                Parameter Air
              </h3>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">pH Level:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.pHLevel}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Flow Rate:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.flowRate} L/h
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">TDS:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.tds} ppm
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">EC:</span>
                  <span className="text-gray-900 font-semibold">
                    {selectedReport?.ec} μS/cm
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Status Peralatan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-gray-700 font-medium">Agitator:</span>
                <span className="text-gray-900 font-semibold ml-2">
                  {selectedReport?.agitatorStatus}
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-gray-700 font-medium">Settle:</span>
                <span className="text-gray-900 font-semibold ml-2">
                  {selectedReport?.settleStatus}
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <span className="text-gray-700 font-medium">Out Filter:</span>
                <span className="text-gray-900 font-semibold ml-2">
                  {selectedReport?.outFilterStatus}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Catatan Tambahan
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{selectedReport?.additionalNotes}</p>
            </div>
          </div>

          {selectedReport?.images &&
            selectedReport.images.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Foto Pendukung
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedReport.images.map((image, index) => (
                    <div key={index} className="relative group">
                        <button
                          key={index}
                          onClick={() => openAttachment(image)}
                          className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 hover:bg-blue-100 transition flex items-center gap-2"
                        >
                          <PhotoIcon className="w-4 h-4 text-blue-600" />
                          <p className="text-sm text-blue-700">{`${image.substring(0,10)}...`}</p>
                        </button>

                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
        <div className="p-6 border-t border-gray-200">
          <button
            onClick={() => setIsReportDetailModalOpen(false)}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );

  const renderImageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4">
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={() => setIsImageModalOpen(false)}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        {selectedImage && selectedImage.type?.startsWith("image/") && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        )}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage?.name}
        </div>
      </div>
    </div>
  );

  const renderLiburModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Ajukan Libur</h2>
          <p className="text-gray-600 mt-1">Isi form untuk mengajukan libur</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Mulai <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={liburForm.startDate}
              onChange={(e) => setLiburForm({...liburForm, startDate: e.target.value})}
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Selesai (Opsional)
            </label>
            <input
              type="date"
              value={liburForm.endDate}
              onChange={(e) => setLiburForm({...liburForm, endDate: e.target.value})}
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alasan <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              value={liburForm.reason}
              onChange={(e) => setLiburForm({...liburForm, reason: e.target.value})}
              placeholder="Masukkan alasan mengajukan libur..."
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => setIsLiburModalOpen(false)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            onClick={handleSubmitLibur}
            disabled={loading}
            className={`flex-1 px-4 py-2  text-white rounded-lg
              ${!loading ? "bg-blue-600 hover:bg-blue-700"
            :
            "bg-gray-100 border-gray-300 cursor-not-allowed"}`}
          >
            Ajukan Libur
          </button>
        </div>
      </div>
    </div>
  );

  const renderIzinModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Ajukan Izin</h2>
          <p className="text-gray-600 mt-1">Isi form untuk mengajukan izin</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Mulai <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={izinForm.startDate}
              onChange={(e) => setIzinForm({...izinForm, startDate: e.target.value})}
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal Selesai (Opsional)
            </label>
            <input
              type="date"
              value={izinForm.endDate}
              onChange={(e) => setIzinForm({...izinForm, endDate: e.target.value})}
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alasan <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={3}
              value={izinForm.reason}
              onChange={(e) => setIzinForm({...izinForm, reason: e.target.value})}
              placeholder="Masukkan alasan mengajukan izin..."
              className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => setIsIzinModalOpen(false)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Batal
          </button>
          <button
            onClick={handleSubmitIzin}
            disabled={loading}
            className={`flex-1 px-4 py-2 text-white rounded-lg
              ${!loading ? 'bg-green-600 hover:bg-green-700': "bg-gray-100 border-gray-300 cursor-not-allowed"}
              `}
          >
            Ajukan Izin
          </button>
        </div>
      </div>
    </div>
  );

  // ==================== NOTIFICATION DROPDOWN ====================
  const renderNotificationDropdown = () => (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999]">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <h3 className="font-semibold text-gray-800">Notifikasi</h3>
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
              onClick={() => handleNotificationClick(notification)}
            >
              <div className="flex justify-between items-start mb-1">
                <p
                  className={`font-medium ${
                    notification.read ? "text-gray-600" : "text-gray-900"
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
  );

  // ==================== MAIN RENDER ====================
  return (
    <div className={`flex min-h-screen bg-gray-50 ${loading ? "cursor-wait": ""}`}>
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
              {/* NOTIFIKASI */}
              {/*<div ref={notificationRef} className="relative">
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
                {isNotificationOpen && renderNotificationDropdown()}
              </div>*/}

              {/* PROFILE DROPDOWN */}
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
                      onClick={() => {
                        setActiveMenu('profile');
                        setDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 text-left text-sm"
                    >
                      <UserIcon className="w-4 h-4 text-gray-600" />
                      Profil
                    </button>

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
        {activeMenu === "profile" && renderLihatProfil()}
        {activeMenu === "shift" && renderLihatShift()}
        {activeMenu === "reports" && renderDailyReport()}
        {activeMenu === "presensi" && renderPresence()}
        {activeMenu === "help" && renderHelpDesk()}
      </div>

      {/* Modals */}
      {isCheckInModalOpen && renderCheckInModal()}
      {isCheckOutModalOpen && renderCheckOutModal()}
      {isDetailModalOpen && selectedAttendance && renderDetailModal()}
      {isEditPresenceModalOpen && renderEditPresenceModal()}
      {isCreateModalOpen && renderCreateTicketModal()}
      {isReportDetailModalOpen && selectedReport && renderReportDetailModal()}
      {isImageModalOpen && renderImageModal()}
      {isLiburModalOpen && renderLiburModal()}
      {isIzinModalOpen && renderIzinModal()}
      {isSubmissionDetailModalOpen && selectedSubmission && renderSubmissionDetailModal()}

      {/* Canvas untuk capture foto (hidden) */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}


