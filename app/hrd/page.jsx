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
  DocumentArrowDownIcon,
  PhotoIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

// Storage keys untuk sinkronisasi
const STORAGE_KEYS = {
  ATTENDANCE: "synchronized_attendance_data",
  NOTIFICATIONS: "synchronized_notifications",
  DASHBOARD: "synchronized_dashboard_data",
  SHIFTS: "synchronized_shifts_data",
  SITES: "synchronized_sites_data",
  LEAVE_REQUESTS: "synchronized_leave_requests",
  OPERATORS: "synchronized_operators_data",
  LAST_SYNC: "last_sync_timestamp",
};

// Data generator untuk data yang lebih realistis
const generateIndonesianName = () => {
  const firstNames = ["Ahmad", "Budi", "Cahyo", "Dewi", "Eko", "Fajar", "Gita", "Hadi", "Indra", "Joko", "Kartika", "Lina", "Mulyadi", "Nina", "Oki", "Putri", "Rudi", "Sari", "Tono", "Wati"];
  const lastNames = ["Santoso", "Wijaya", "Kusuma", "Hidayat", "Purnama", "Saputra", "Lestari", "Prabowo", "Nugroho", "Siregar", "Halim", "Utama", "Wibowo", "Sihombing", "Pangestu", "Simbolon", "Tanuwijaya", "Kurniawan", "Setiawan", "Fernando"];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
};

const generateSiteName = () => {
  const cities = ["Jakarta", "Bandung", "Surabaya", "Semarang", "Yogyakarta", "Medan", "Makassar", "Denpasar", "Palembang", "Balikpapan"];
  const types = ["IPAL", "WWTP", "STP", "WTP", "Pabrik", "Kawasan", "Industri"];
  return `Site ${types[Math.floor(Math.random() * types.length)]} ${cities[Math.floor(Math.random() * cities.length)]}`;
};

// Fungsi untuk mendapatkan tanggal dalam minggu ini
const getCurrentWeekDates = () => {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Minggu, 1 = Senin, dst
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - currentDay + (currentDay === 0 ? -6 : 1)); // Mulai dari Senin
  
  const weekDates = [];
  const dayNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const englishDayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    
    weekDates.push({
      date: date.toISOString().split('T')[0],
      dayName: dayNames[i],
      englishDayName: englishDayNames[i],
      displayDate: date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
    });
  }
  
  return weekDates;
};

// Fungsi untuk mendapatkan nama operator berdasarkan ID
const getOperatorNameById = (operators, operatorId) => {
  const operator = operators.find(op => op.id === operatorId);
  return operator ? operator.name : `Operator ${operatorId}`;
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
  const [showMedicalCertificateModal, setShowMedicalCertificateModal] = useState(false);
  const [selectedMedicalCertificate, setSelectedMedicalCertificate] = useState(null);
  const [editingShift, setEditingShift] = useState(null);
  const [editingSite, setEditingSite] = useState(null);
  const [selectedLeave, setSelectedLeave] = useState(null);
  
  // State untuk menyimpan data minggu ini
  const [currentWeekSchedule, setCurrentWeekSchedule] = useState([]);

  // Form state untuk shift
  const [shiftForm, setShiftForm] = useState({
    name: "Morning Shift",
    startTime: "08:00",
    endTime: "17:00",
    siteId: "",
    maxOperators: 5,
    assignedOperators: [],
    dayOfWeek: "Monday"
  });

  // Form state untuk site
  const [siteForm, setSiteForm] = useState({
    name: "",
    location: "",
    address: "",
    capacity: 12, // Default maksimal 12 operator
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
      } else if (e.key === STORAGE_KEYS.OPERATORS) {
        const newData = JSON.parse(e.newValue || "[]");
        setOperators(newData);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  };

  // ==================== PERHITUNGAN MATEMATIKA YANG SESUAI LOGIKA ====================

  const calculateTotalHours = (checkIn, checkOut) => {
    const parseTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    };
    
    const start = parseTime(checkIn);
    const end = parseTime(checkOut);
    const totalMinutes = end - start;
    
    if (totalMinutes < 0) {
      // Jika check out melewati tengah malam
      return (24 * 60 - start + end) / 60;
    }
    
    return totalMinutes / 60;
  };

  const calculateLateMinutes = (checkIn, shiftStartTime) => {
    const parseTime = (timeStr) => {
      const [hours, minutes] = timeStr.split(':').map(Number);
      return hours * 60 + minutes;
    };
    
    const actualStart = parseTime(checkIn);
    const expectedStart = parseTime(shiftStartTime);
    
    return Math.max(0, actualStart - expectedStart);
  };

  const updateDashboardStats = (attendanceData) => {
    // Hitung total operator dari data aktual
    const totalOperators = operators.length;
    
    // Hitung presensi hari ini berdasarkan data attendance
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = attendanceData.filter(item => item.date === today);
    
    // Hitung yang sudah disetujui hari ini
    const approvedToday = todayAttendance.filter(item => item.status === "approved").length;
    
    // Hitung yang pending validasi
    const pendingValidation = attendanceData.filter(item => item.status === "pending").length;
    
    // Hitung attendance rate berdasarkan operator yang memiliki shift hari ini
    const operatorsWithShiftToday = operators.filter(op => {
      return shifts.some(shift => 
        shift.assignedOperators?.includes(op.id) && 
        isOperatorScheduledToday(op.id)
      );
    }).length;
    
    const attendanceRate = operatorsWithShiftToday > 0 
      ? Math.round((approvedToday / operatorsWithShiftToday) * 100 * 10) / 10
      : 0;

    const newDashboardData = {
      totalOperators,
      presentToday: approvedToday,
      attendanceRate,
      pendingValidation,
      operatorsWithShiftToday,
    };

    setDashboardData(newDashboardData);
    setSynchronizedData(STORAGE_KEYS.DASHBOARD, newDashboardData);
  };

  const isOperatorScheduledToday = (operatorId) => {
    // Logika untuk mengecek apakah operator memiliki shift hari ini
    // Ini adalah contoh sederhana - dalam implementasi nyata akan melibatkan jadwal shift
    const today = new Date().getDay(); // 0 = Minggu, 1 = Senin, dst
    return today >= 1 && today <= 5; // Senin-Jumat
  };

  // ==================== DATA YANG DISINKRONISASI DENGAN LOGIKA REALISTIS ====================

  // Generate data operator
  const generateOperators = () => {
    const operatorList = [];
    for (let i = 1; i <= 50; i++) {
      operatorList.push({
        id: i,
        name: generateIndonesianName(),
        employeeId: `OP${String(i).padStart(3, '0')}`,
        position: "Operator IPAL",
        joinDate: `202${Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        status: Math.random() > 0.1 ? "active" : "inactive",
        contact: `0812${String(Math.floor(Math.random() * 9000) + 1000)}${String(Math.floor(Math.random() * 9000) + 1000)}`,
      });
    }
    return operatorList;
  };

  const [operators, setOperators] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.OPERATORS, generateOperators())
  );

  // Generate data site
  const generateSites = () => {
    const cityList = ["Jakarta Utara", "Bandung", "Surabaya", "Semarang", "Yogyakarta", "Medan", "Makassar", "Denpasar"];
    const siteList = [];
    
    cityList.forEach((city, index) => {
      siteList.push({
        id: index + 1,
        name: `Site ${city.split(' ')[0]} ${['A', 'B', 'C'][index % 3]}`,
        location: city,
        address: `Jl. Raya ${city} No. ${(index + 1) * 10}`,
        capacity: 12, // Fixed to maximum 12 operators
        supervisor: generateIndonesianName(),
        contact: `0813${String(Math.floor(Math.random() * 9000) + 1000)}${String(Math.floor(Math.random() * 9000) + 1000)}`,
        status: "active",
      });
    });
    return siteList;
  };

  const [sites, setSites] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.SITES, generateSites())
  );

  // Generate data shift dengan logika penugasan operator
  const generateShifts = () => {
    const shiftTypes = [
      { name: "Morning Shift", startTime: "07:00", endTime: "15:00" },
      { name: "Afternoon Shift", startTime: "15:00", endTime: "23:00" },
      { name: "Night Shift", startTime: "23:00", endTime: "07:00" },
    ];
    
    const shiftList = [];
    shiftTypes.forEach((shiftType, index) => {
      // Pilih site secara acak
      const siteId = Math.floor(Math.random() * sites.length) + 1;
      
      // Tentukan jumlah operator untuk shift ini (3-8 operator)
      const maxOperators = Math.floor(Math.random() * 6) + 3;
      
      // Pilih operator secara acak untuk shift ini
      const assignedOperators = [];
      const availableOperators = operators.filter(op => op.status === "active");
      
      for (let i = 0; i < Math.min(maxOperators, availableOperators.length); i++) {
        const randomOp = availableOperators[Math.floor(Math.random() * availableOperators.length)];
        if (!assignedOperators.includes(randomOp.id)) {
          assignedOperators.push(randomOp.id);
        }
      }
      
      shiftList.push({
        id: index + 1,
        ...shiftType,
        siteId,
        maxOperators,
        assignedOperators,
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][index % 6],
      });
    });
    return shiftList;
  };

  const [shifts, setShifts] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.SHIFTS, generateShifts())
  );

  // Generate data attendance dengan logika realistis
  const generateAttendanceData = () => {
    const attendanceList = [];
    let idCounter = 1;
    
    // Generate data untuk 7 hari terakhir
    for (let dayOffset = 6; dayOffset >= 0; dayOffset--) {
      const date = new Date();
      date.setDate(date.getDate() - dayOffset);
      const dateStr = date.toISOString().split('T')[0];
      const dayOfWeek = date.getDay(); // 0 = Minggu, 1 = Senin, dst
      
      // Hanya generate untuk hari kerja (Senin-Jumat)
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        // Untuk setiap shift yang aktif hari ini
        shifts.forEach(shift => {
          // Untuk setiap operator yang ditugaskan di shift ini
          shift.assignedOperators?.forEach(operatorId => {
            const operator = operators.find(op => op.id === operatorId);
            if (operator && operator.status === "active") {
              // Tentukan status kehadiran (80% hadir, 15% terlambat, 5% absen)
              const rand = Math.random();
              let status = "pending";
              let lateMinutes = 0;
              
              if (rand < 0.8) {
                status = "approved";
                // 20% kemungkinan terlambat
                if (Math.random() < 0.2) {
                  lateMinutes = Math.floor(Math.random() * 30) + 1; // 1-30 menit terlambat
                }
              } else if (rand < 0.95) {
                status = "rejected"; // Absen
              } else {
                status = "pending"; // Belum divalidasi
              }
              
              // Generate check-in dan check-out time
              let checkIn = shift.startTime;
              let checkOut = shift.endTime;
              
              if (lateMinutes > 0 && status === "approved") {
                // Tambah menit keterlambatan ke check-in
                const [hours, minutes] = checkIn.split(':').map(Number);
                const totalMinutes = hours * 60 + minutes + lateMinutes;
                const newHours = Math.floor(totalMinutes / 60);
                const newMinutes = totalMinutes % 60;
                checkIn = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
              }
              
              // Hitung total hours
              const totalHours = calculateTotalHours(checkIn, checkOut);
              
              attendanceList.push({
                id: idCounter++,
                operatorId: operatorId,
                operator: operator.name,
                site: sites.find(s => s.id === shift.siteId)?.name || "Unknown Site",
                date: dateStr,
                checkIn,
                checkOut,
                status,
                submittedBy: operatorId % 3 === 0 ? "admin" : "operator",
                location: sites.find(s => s.id === shift.siteId)?.location || "Unknown",
                notes: status === "approved" 
                  ? lateMinutes > 0 
                    ? `Check-in terlambat ${lateMinutes} menit` 
                    : "Hadir tepat waktu"
                  : status === "rejected"
                  ? "Tidak hadir tanpa keterangan"
                  : "Menunggu validasi HRD",
                totalHours: totalHours.toFixed(1),
                lateMinutes,
                shiftId: shift.id,
                photoUrl: null,
                locationValid: Math.random() > 0.1, // 90% valid lokasi
                timeValid: Math.random() > 0.05, // 95% valid waktu
              });
            }
          });
        });
      }
    }
    
    return attendanceList;
  };

  const [attendanceData, setAttendanceData] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.ATTENDANCE, generateAttendanceData())
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
        message: "Operator baru mengirim attendance dari Site Jakarta A",
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
      totalOperators: operators.length,
      presentToday: attendanceData.filter(item => 
        item.date === new Date().toISOString().split('T')[0] && 
        item.status === "approved"
      ).length,
      attendanceRate: 0,
      pendingValidation: attendanceData.filter((item) => item.status === "pending").length,
      operatorsWithShiftToday: 0,
    })
  );

  const [leaveRequests, setLeaveRequests] = useState(() =>
    getSynchronizedData(STORAGE_KEYS.LEAVE_REQUESTS, [
      {
        id: 1,
        operatorId: 1,
        operator: generateIndonesianName(),
        type: "izin",
        startDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        endDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        reason: "Sakit demam dan flu",
        status: "pending",
        submittedDate: new Date().toISOString().split('T')[0],
        medicalCertificate: true,
        medicalCertificateUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800",
        medicalCertificateName: "surat_dokter_1.jpg",
      },
      {
        id: 2,
        operatorId: 2,
        operator: generateIndonesianName(),
        type: "libur",
        startDate: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0],
        endDate: new Date(Date.now() + 86400000 * 9).toISOString().split('T')[0],
        reason: "Cuti tahunan keluarga",
        status: "pending",
        submittedDate: new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
        medicalCertificate: false,
        medicalCertificateUrl: null,
        medicalCertificateName: null,
      },
      {
        id: 3,
        operatorId: 3,
        operator: generateIndonesianName(),
        type: "izin",
        startDate: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
        endDate: new Date(Date.now() - 86400000 * 1).toISOString().split('T')[0],
        reason: "Keperluan keluarga mendadak",
        status: "approved",
        submittedDate: new Date(Date.now() - 86400000 * 3).toISOString().split('T')[0],
        medicalCertificate: false,
        medicalCertificateUrl: null,
        medicalCertificateName: null,
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

  useEffect(() => {
    setSynchronizedData(STORAGE_KEYS.OPERATORS, operators);
  }, [operators]);

  // ==================== FUNGSI UTAMA SESUAI SRS ====================

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "attendance", name: "Attendance", icon: DocumentTextIcon },
    { id: "shiftManagement", name: "Shift Management", icon: ClockIcon },
    { id: "siteManagement", name: "Site Management", icon: BuildingOfficeIcon },
    { id: "leaveManagement", name: "Leave Management", icon: CalendarIcon },
  ];
 
  // Fungsi untuk handle approve attendance - SESUAI SRS (Approve Presensi Operator)
  const handleApprove = (id) => {
    const attendanceToApprove = attendanceData.find(item => item.id === id);
    
    // PERUBAHAN: Presensi valid meskipun terlambat, jadi semua ada opsi ACC
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, status: "approved" } : item
    );
    setAttendanceData(updatedData);

    const newNotification = {
      id: Date.now(),
      title: "Attendance Approved",
      message: `Data attendance ${attendanceToApprove.operator} telah disetujui`,
      time: "Baru saja",
      read: false,
      type: "approval",
      route: "attendance",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Fungsi untuk handle reject attendance - SESUAI SRS (Reject Presensi Operator)
  const handleReject = (id) => {
    const attendanceToReject = attendanceData.find(item => item.id === id);
    
    // PERUBAHAN: Presensi valid meskipun terlambat, jadi semua ada opsi ACC
    // HRD tetap bisa menolak jika memang perlu
    const updatedData = attendanceData.map((item) =>
      item.id === id ? { ...item, status: "rejected" } : item
    );
    setAttendanceData(updatedData);

    const newNotification = {
      id: Date.now(),
      title: "Attendance Rejected",
      message: `Data attendance ${attendanceToReject.operator} telah ditolak`,
      time: "Baru saja",
      read: false,
      type: "rejection",
      route: "attendance",
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // ==================== FUNGSI EKSPOR DATA - SESUAI SRS ====================

  // Fungsi untuk ekspor data attendance ke CSV
  const exportAttendanceToCSV = () => {
    const headers = ["ID", "Operator", "Site", "Date", "Check-In", "Check-Out", "Status", "Total Hours", "Late Minutes", "Location", "Notes"];
    const csvData = attendanceData.map(item => [
      item.id,
      item.operator,
      item.site,
      item.date,
      item.checkIn,
      item.checkOut,
      item.status,
      item.totalHours,
      item.lateMinutes,
      item.location,
      item.notes
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `attendance_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fungsi untuk ekspor data attendance ke Excel
  const exportAttendanceToExcel = () => {
    // Buat header
    const headers = ["ID", "Operator", "Site", "Date", "Check-In", "Check-Out", "Status", "Total Hours", "Late Minutes", "Location", "Notes"];
    const csvData = attendanceData.map(item => [
      item.id,
      item.operator,
      item.site,
      item.date,
      item.checkIn,
      item.checkOut,
      item.status,
      item.totalHours,
      item.lateMinutes,
      item.location,
      item.notes
    ]);
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `attendance_data_${new Date().toISOString().split('T')[0]}.xlsx`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fungsi untuk ekspor data shift ke CSV
  const exportShiftsToCSV = () => {
    const headers = ["ID", "Nama Shift", "Hari", "Waktu Mulai", "Waktu Selesai", "Site", "Maks Operator", "Operator Ditugaskan"];
    
    const csvData = shifts.map(shift => {
      const site = sites.find(s => s.id === shift.siteId);
      const assignedOperatorNames = (shift.assignedOperators || [])
        .map(opId => {
          const operator = operators.find(o => o.id === opId);
          return operator ? operator.name : `Operator ${opId}`;
        })
        .join("; ");
      
      return [
        shift.id,
        shift.name,
        shift.dayOfWeek,
        shift.startTime,
        shift.endTime,
        site ? site.name : "Unknown",
        shift.maxOperators,
        assignedOperatorNames
      ];
    });
    
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(","))
    ].join("\n");
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `shifts_data_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ==================== FUNGSI SHIFT MANAGEMENT - SESUAI SRS ====================

  const resetShiftForm = () => {
    setShiftForm({
      name: "Morning Shift",
      startTime: "08:00",
      endTime: "17:00",
      siteId: "",
      maxOperators: 5,
      assignedOperators: [],
      dayOfWeek: "Monday"
    });
    setEditingShift(null);
  };

  // Fungsi untuk mendapatkan operator yang tersedia untuk shift (SRS: Tambah Shift Operator)
  const getAvailableOperatorsForShift = (shiftId = null, dayOfWeek = null) => {
    return operators.filter(operator => {
      // Filter hanya operator aktif
      if (operator.status !== "active") return false;
      
      // Cek apakah operator sudah memiliki shift di hari yang sama
      const hasShiftOnDay = shifts.some(shift => {
        if (shift.id === shiftId) return false; // Skip shift yang sedang diedit
        return shift.assignedOperators?.includes(operator.id) && 
               (shift.dayOfWeek === dayOfWeek || !dayOfWeek);
      });
      
      // Cek apakah operator memiliki cuti/izin
      const hasLeave = leaveRequests.some(leave => 
        leave.operatorId === operator.id && 
        leave.status === "approved" &&
        isDateInLeaveRange(dayOfWeek, leave)
      );
      
      return !hasShiftOnDay && !hasLeave;
    });
  };

  const isDateInLeaveRange = (dayOfWeek, leaveRequest) => {
    // Logika sederhana untuk mengecek apakah hari tertentu masuk dalam range cuti
    // Dalam implementasi nyata, ini akan melibatkan perhitungan tanggal yang lebih kompleks
    const dayMapping = { "Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 0 };
    return Math.random() < 0.1; // 10% kemungkinan operator cuti di hari tersebut
  };

  // Fungsi untuk mengambil jadwal shift minggu ini
  const getCurrentWeekSchedule = () => {
    const weekDates = getCurrentWeekDates();
    const today = new Date().toISOString().split('T')[0];
    
    const weekSchedule = weekDates.map(weekDay => {
      // Filter shift untuk hari ini
      const dayShifts = shifts.filter(shift => shift.dayOfWeek === weekDay.englishDayName);
      
      // Hitung total operator yang ditugaskan di hari ini
      const totalAssignedOperators = dayShifts.reduce((total, shift) => {
        return total + (shift.assignedOperators?.length || 0);
      }, 0);
      
      // Ambil operator yang memiliki shift di hari ini
      const assignedOperatorIds = dayShifts.flatMap(shift => shift.assignedOperators || []);
      const uniqueOperatorIds = [...new Set(assignedOperatorIds)];
      
      // Ambil detail shift untuk hari ini
      const shiftDetails = dayShifts.map(shift => {
        const site = sites.find(s => s.id === shift.siteId);
        return {
          id: shift.id,
          name: shift.name,
          time: `${shift.startTime} - ${shift.endTime}`,
          site: site ? site.name : "Unknown Site",
          operators: (shift.assignedOperators || []).map(opId => getOperatorNameById(operators, opId)),
          operatorCount: shift.assignedOperators?.length || 0,
          maxOperators: shift.maxOperators
        };
      });
      
      return {
        ...weekDay,
        shiftCount: dayShifts.length,
        totalAssignedOperators,
        shiftDetails,
        uniqueOperatorIds,
        isToday: weekDay.date === today
      };
    });
    
    return weekSchedule;
  };

  const handleAddShift = () => {
    if (!shiftForm.name || !shiftForm.siteId || !shiftForm.dayOfWeek) {
      alert("Please fill all required fields");
      return;
    }

    // Validasi jumlah operator tidak melebihi kapasitas site (maksimal 12)
    const selectedSite = sites.find(s => s.id === parseInt(shiftForm.siteId));
    if (selectedSite && shiftForm.maxOperators > 12) {
      alert(`Jumlah operator melebihi kapasitas maksimal. Maksimal: 12 operator`);
      return;
    }

    if (editingShift) {
      // Edit shift - SESUAI SRS (Edit shift Operator)
      const updatedShifts = shifts.map(shift =>
        shift.id === editingShift.id ? { 
          ...shift, 
          ...shiftForm, 
          id: editingShift.id,
          siteId: parseInt(shiftForm.siteId)
        } : shift
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
      // Tambah shift baru - SESUAI SRS (Tambah Shift Operator)
      const newShift = {
        id: shifts.length > 0 ? Math.max(...shifts.map((s) => s.id)) + 1 : 1,
        ...shiftForm,
        siteId: parseInt(shiftForm.siteId)
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
      siteId: shift.siteId.toString(),
      maxOperators: shift.maxOperators,
      assignedOperators: shift.assignedOperators || [],
      dayOfWeek: shift.dayOfWeek || "Monday"
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
      capacity: 12, // Default maksimal 12 operator
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
        status: "active",
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

  const openMedicalCertificate = (medicalCertificateUrl, medicalCertificateName) => {
    setSelectedMedicalCertificate({
      url: medicalCertificateUrl,
      name: medicalCertificateName
    });
    setShowMedicalCertificateModal(true);
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

  // ==================== DATA VISUALISASI DENGAN LOGIKA REALISTIS ====================

  const calculateWeeklyAttendanceData = () => {
    const today = new Date();
    const days = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = dayNames[date.getDay()];

      // Data attendance untuk hari tersebut
      const dayAttendance = attendanceData.filter(item => item.date === dateStr);
      
      // Hitung jumlah operator yang seharusnya bekerja hari itu
      const expectedOperators = operators.filter(op => {
        // Cek apakah operator memiliki shift di hari ini
        return shifts.some(shift => 
          shift.assignedOperators?.includes(op.id) && 
          shift.dayOfWeek === dayNames[date.getDay()]
        );
      }).length;

      // Hitung statistik
      const approved = dayAttendance.filter(item => item.status === "approved");
      const pending = dayAttendance.filter(item => item.status === "pending");
      const rejected = dayAttendance.filter(item => item.status === "rejected");

      const present = approved.length;
      const late = approved.filter(item => item.lateMinutes > 0).length;
      const absent = rejected.length;
      const notScheduled = Math.max(0, expectedOperators - (present + pending.length + absent));

      days.push({
        day: dayName,
        present,
        late,
        absent,
        notScheduled,
        expectedOperators,
      });
    }

    return days;
  };

  const weeklyAttendanceData = calculateWeeklyAttendanceData();

  // Hitung data pie chart untuk hari ini berdasarkan perhitungan realistis
  const calculateTodayStatusData = () => {
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = attendanceData.filter(item => item.date === today);
    
    const approved = todayAttendance.filter(item => item.status === "approved");
    const pending = todayAttendance.filter(item => item.status === "pending");
    const rejected = todayAttendance.filter(item => item.status === "rejected");
    
    const present = approved.length;
    const late = approved.filter(item => item.lateMinutes > 0).length;
    const absent = rejected.length;
    const notProcessed = pending.length;
    
    // Total operator yang dijadwalkan hari ini
    const scheduledToday = dashboardData.operatorsWithShiftToday || operators.length * 0.7;
    
    return [
      { status: "Present", value: Math.round((present / scheduledToday) * 100), color: "#10B981" },
      { status: "Late", value: Math.round((late / scheduledToday) * 100), color: "#F59E0B" },
      { status: "Absent", value: Math.round((absent / scheduledToday) * 100), color: "#EF4444" },
      { status: "Pending", value: Math.round((notProcessed / scheduledToday) * 100), color: "#6B7280" },
    ].filter(item => item.value > 0);
  };

  const todayStatusData = calculateTodayStatusData();

  // Data top performers berdasarkan persentase kehadiran
  const calculateTopPerformers = () => {
    const operatorAttendanceMap = {};
    
    // Hitung kehadiran setiap operator
    attendanceData.forEach(attendance => {
      if (!operatorAttendanceMap[attendance.operatorId]) {
        operatorAttendanceMap[attendance.operatorId] = { total: 0, present: 0 };
      }
      operatorAttendanceMap[attendance.operatorId].total++;
      if (attendance.status === "approved") {
        operatorAttendanceMap[attendance.operatorId].present++;
      }
    });
    
    // Hitung persentase dan urutkan
    const performers = Object.entries(operatorAttendanceMap)
      .map(([operatorId, stats]) => {
        const operator = operators.find(op => op.id === parseInt(operatorId));
        const percentage = stats.total > 0 ? Math.round((stats.present / stats.total) * 100) : 0;
        
        return {
          id: operatorId,
          name: operator ? operator.name : `Operator ${operatorId}`,
          location: "Various Sites",
          performance: `${percentage}%`,
          totalShifts: stats.total,
          presentShifts: stats.present,
        };
      })
      .filter(p => p.totalShifts >= 5) // Hanya operator dengan minimal 5 shift
      .sort((a, b) => {
        // Urutkan berdasarkan persentase, lalu jumlah shift
        if (parseInt(a.performance) !== parseInt(b.performance)) {
          return parseInt(b.performance) - parseInt(a.performance);
        }
        return b.totalShifts - a.totalShifts;
      })
      .slice(0, 4); // Ambil 4 teratas
    
    return performers;
  };

  const topPerformersData = calculateTopPerformers();

  const recentAttendanceData = attendanceData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      name: item.operator,
      location: item.location,
      time: item.checkIn,
      status: item.status,
      checkOut: item.checkOut,
      date: item.date,
    }));

  const calculatePieChart = () => {
    const totalValue = todayStatusData.reduce((sum, item) => sum + item.value, 0);
    if (totalValue === 0) return [];
    
    let accumulatedValue = 0;
    return todayStatusData.map((item, index) => {
      const startAngle = (accumulatedValue / totalValue) * 360;
      accumulatedValue += item.value;
      const endAngle = (accumulatedValue / totalValue) * 360;
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
      item.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || 
      (selectedFilter === "Pending" && item.status === "pending") ||
      (selectedFilter === "Approved" && item.status === "approved") ||
      (selectedFilter === "Rejected" && item.status === "rejected");

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

  // ==================== KOMPONEN MODAL ====================

  // Medical Certificate Modal
  const MedicalCertificateModal = () => {
    if (!selectedMedicalCertificate) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Surat Keterangan Dokter
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedMedicalCertificate.name}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowMedicalCertificateModal(false);
                  setSelectedMedicalCertificate(null);
                }}
                className="text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <img
                src={selectedMedicalCertificate.url}
                alt="Surat Keterangan Dokter"
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={selectedMedicalCertificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
              >
                <DocumentArrowDownIcon className="w-5 h-5" />
                Unduh Gambar
              </a>
              <button
                onClick={() => {
                  setShowMedicalCertificateModal(false);
                  setSelectedMedicalCertificate(null);
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SiteFormModal
  const SiteFormModal = () => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div ref={siteFormRef} className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {editingSite ? "Edit Site" : "Tambah Site Baru"}
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
                  Nama Site *
                </label>
                <input
                  type="text"
                  value={siteForm.name}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: Site Jakarta A"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi *
                </label>
                <input
                  type="text"
                  value={siteForm.location}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, location: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: Jakarta Utara"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alamat Lengkap *
                </label>
                <textarea
                  value={siteForm.address}
                  onChange={(e) =>
                    setSiteForm({ ...siteForm, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Jl. Raya Jakarta No. 123"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kapasitas Operator (Maksimal 12)
                  </label>
                  <div className="relative">
                    <select
                      value={siteForm.capacity}
                      onChange={(e) => setSiteForm({ ...siteForm, capacity: parseInt(e.target.value) })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                        <option key={num} value={num}>{num} operator{num !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Maksimal 12 operator per site</p>
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
                    placeholder="Nama Supervisor"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kontak
                </label>
                <input
                  type="text"
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
  };

  // LeaveDetailModal dengan fitur gambar surat dokter
  // LeaveDetailModal tanpa bagian Surat Keterangan Dokter
const LeaveDetailModal = () => {
  if (!selectedLeave) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Detail Permohonan Cuti/Izin
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

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Operator
              </label>
              <p className="mt-1 text-lg text-gray-900">
                {selectedLeave.operator}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Jenis
                </label>
                <p className="mt-1">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedLeave.type === 'izin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedLeave.type === 'izin' ? 'Izin' : 'Cuti'}
                  </span>
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Status
                </label>
                <p className="mt-1">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedLeave.status === 'approved' ? 'bg-green-100 text-green-800' : 
                    selectedLeave.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedLeave.status === 'approved' ? 'Disetujui' : 
                     selectedLeave.status === 'rejected' ? 'Ditolak' : 'Pending'}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Tanggal Mulai
                </label>
                <p className="mt-1 text-gray-900">
                  {selectedLeave.startDate}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Tanggal Selesai
                </label>
                <p className="mt-1 text-gray-900">
                  {selectedLeave.endDate}
                </p>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Alasan
              </label>
              <p className="mt-1 text-gray-900 bg-gray-50 p-3 rounded-lg">
                {selectedLeave.reason}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Tanggal Pengajuan
                </label>
                <p className="mt-1 text-gray-900">
                  {selectedLeave.submittedDate}
                </p>
              </div>
              {/* Bagian Surat Keterangan Dokter telah dihapus */}
            </div>
          </div>

          {selectedLeave.status === "pending" && (
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  handleApproveLeave(selectedLeave.id);
                  setShowLeaveModal(false);
                  setSelectedLeave(null);
                }}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition font-medium flex items-center justify-center gap-2"
              >
                <CheckCircleIcon className="w-5 h-5" />
                Setujui
              </button>
              <button
                onClick={() => {
                  handleRejectLeave(selectedLeave.id);
                  setShowLeaveModal(false);
                  setSelectedLeave(null);
                }}
                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition font-medium flex items-center justify-center gap-2"
              >
                <XCircleIcon className="w-5 h-5" />
                Tolak
              </button>
            </div>
          )}

          <button
            onClick={() => {
              setShowLeaveModal(false);
              setSelectedLeave(null);
            }}
            className="w-full mt-4 bg-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-400 transition font-medium"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

  // ==================== MODAL SHIFT FORM YANG DIPERBAIKI ====================

  const ShiftFormModal = () => {
    const availableOperators = getAvailableOperatorsForShift(
      editingShift?.id, 
      shiftForm.dayOfWeek || "Monday"
    );
    
    // Ambil data jadwal minggu ini
    const weekSchedule = getCurrentWeekSchedule();
    
    // Mapping hari Inggris ke Indonesia
    const dayMapping = {
      "Monday": "Senin",
      "Tuesday": "Selasa", 
      "Wednesday": "Rabu",
      "Thursday": "Kamis",
      "Friday": "Jumat",
      "Saturday": "Sabtu",
      "Sunday": "Minggu"
    };
    
    // Ambil nama hari dalam bahasa Indonesia untuk form
    const currentDayName = dayMapping[shiftForm.dayOfWeek] || shiftForm.dayOfWeek;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div ref={shiftFormRef} className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                {editingShift ? "Edit Shift Operator" : "Tambah Shift Operator"}
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

            <div className="space-y-6">
              {/* SESUAI SRS: Sistem menampilkan jadwal shift pada minggu tersebut */}
              <div>
                <h4 className="font-medium text-gray-700 mb-3">Jadwal Shift Minggu Ini ({new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })})</h4>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {weekSchedule.map((day, index) => {
                      const isSelected = shiftForm.dayOfWeek === day.englishDayName;
                      const isToday = day.isToday;
                      
                      return (
                        <div 
                          key={index}
                          className={`p-3 rounded-lg border cursor-pointer transition-all ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'} ${isToday ? 'ring-2 ring-blue-200' : ''}`}
                          onClick={() => {
                            setShiftForm({...shiftForm, dayOfWeek: day.englishDayName});
                          }}
                          title={`Klik untuk pilih ${day.dayName}`}
                        >
                          <div className="flex flex-col items-center">
                            <p className={`text-sm font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700'}`}>
                              {day.dayName}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{day.displayDate}</p>
                            <div className="mt-2">
                              {day.shiftCount > 0 ? (
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                                  {day.shiftCount} shift
                                </span>
                              ) : (
                                <span className="text-xs text-gray-400">Tidak ada shift</span>
                              )}
                            </div>
                            {isToday && (
                              <div className="mt-1">
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Hari Ini</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Detail jadwal untuk hari yang dipilih */}
                  <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-medium text-gray-900">
                        Detail Jadwal {currentDayName}
                      </h5>
                      <span className="text-sm text-gray-600">
                        Total: {weekSchedule.find(d => d.englishDayName === shiftForm.dayOfWeek)?.shiftCount || 0} shift
                      </span>
                    </div>
                    
                    {weekSchedule.find(d => d.englishDayName === shiftForm.dayOfWeek)?.shiftCount > 0 ? (
                      <div className="space-y-3">
                        {weekSchedule
                          .find(d => d.englishDayName === shiftForm.dayOfWeek)
                          ?.shiftDetails.map((shift, idx) => {
                            // Temukan shift asli berdasarkan ID
                            const originalShift = shifts.find(s => s.id === shift.id);
                            
                            return (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-900">{shift.name}</span>
                                    <span className="text-sm text-gray-600">{shift.time}</span>
                                  </div>
                                  <div className="mt-1 flex items-center gap-3 text-sm text-gray-600">
                                    <span>Site: {shift.site}</span>
                                    <span>•</span>
                                    <span>Operator: {shift.operatorCount}/{shift.maxOperators}</span>
                                  </div>
                                  {shift.operators.length > 0 && (
                                    <div className="mt-2">
                                      <p className="text-xs text-gray-500 mb-1">Operator Bertugas:</p>
                                      <div className="flex flex-wrap gap-1">
                                        {shift.operators.slice(0, 3).map((op, opIdx) => (
                                          <span key={opIdx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                            {op.split(' ')[0]}
                                          </span>
                                        ))}
                                        {shift.operators.length > 3 && (
                                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            +{shift.operators.length - 3} lainnya
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                {/* TOMBOL EDIT YANG SEKARANG AKTIF */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (originalShift) {
                                      handleEditShift(originalShift);
                                    }
                                  }}
                                  className="ml-2 text-blue-600 hover:text-blue-800 p-2 rounded hover:bg-blue-50 transition-colors"
                                  title="Edit shift ini"
                                >
                                 
                                </button>
                              </div>
                            );
                          })}
                      </div>
                    ) : (
                      <div className="text-center py-4">
                        <ClockIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                        <p className="text-gray-500">Belum ada jadwal shift untuk {currentDayName}</p>
                        <p className="text-sm text-gray-400 mt-1">Tambahkan shift baru untuk hari ini</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Shift *
                  </label>
                  <div className="relative">
                    <select
                      value={shiftForm.name}
                      onChange={(e) => setShiftForm({ ...shiftForm, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="Morning Shift">Morning Shift (07:00-15:00)</option>
                      <option value="Afternoon Shift">Afternoon Shift (15:00-23:00)</option>
                      <option value="Night Shift">Night Shift (23:00-07:00)</option>
                    </select>
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hari *
                  </label>
                  <div className="relative">
                    <select
                      value={shiftForm.dayOfWeek || "Monday"}
                      onChange={(e) => setShiftForm({ ...shiftForm, dayOfWeek: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                    >
                      <option value="Monday">Senin</option>
                      <option value="Tuesday">Selasa</option>
                      <option value="Wednesday">Rabu</option>
                      <option value="Thursday">Kamis</option>
                      <option value="Friday">Jumat</option>
                      <option value="Saturday">Sabtu</option>
                      <option value="Sunday">Minggu</option>
                    </select>
                    <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  </div>
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
                    onChange={(e) => setShiftForm({ ...shiftForm, startTime: e.target.value })}
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
                    onChange={(e) => setShiftForm({ ...shiftForm, endTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Opsi (Site) *
                </label>
                <div className="relative">
                  <select
                    value={shiftForm.siteId}
                    onChange={(e) => {
                      const newSiteId = e.target.value;
                      setShiftForm({ ...shiftForm, siteId: newSiteId });
                      
                      // Update max operators berdasarkan kapasitas site (maksimal 12)
                      const selectedSite = sites.find(s => s.id === parseInt(newSiteId));
                      if (selectedSite && shiftForm.maxOperators > 12) {
                        setShiftForm(prev => ({ ...prev, maxOperators: 12 }));
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    <option value="">Select Opsi</option>
                    {sites.map((site) => (
                      <option key={site.id} value={site.id}>
                        {site.name} - {site.location} (Kapasitas: maksimal 12 operator)
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Operators (Maksimal 12)
                </label>
                <div className="relative">
                  <select
                    value={shiftForm.maxOperators}
                    onChange={(e) => setShiftForm({ ...shiftForm, maxOperators: parseInt(e.target.value) })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
                  >
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(num => (
                      <option key={num} value={num}>{num} operator{num !== 1 ? 's' : ''} (maksimal 12)</option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                </div>
                {shiftForm.siteId && (
                  <p className="text-xs text-gray-500 mt-1">
                    Kapasitas site: {sites.find(s => s.id === parseInt(shiftForm.siteId))?.capacity || 0} operators (maksimal 12)
                  </p>
                )}
              </div>

              {/* SESUAI SRS: HRD menugaskan operator yang tersedia pada shift yang dipilih */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Assign Operators ({shiftForm.assignedOperators.length} selected)
                </label>
                <div className="border border-gray-200 rounded-lg p-4 max-h-60 overflow-y-auto">
                  {availableOperators.length === 0 ? (
                    <div className="text-center py-4">
                      <UsersIcon className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                      <p className="text-gray-500">Tidak ada operator tersedia untuk hari {currentDayName}</p>
                      <p className="text-sm text-gray-400 mt-1">Semua operator sudah memiliki shift atau sedang cuti</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {availableOperators.map(operator => {
                        const isAssigned = shiftForm.assignedOperators.includes(operator.id);
                        const operatorShifts = shifts.filter(s => 
                          s.assignedOperators?.includes(operator.id) && 
                          s.dayOfWeek !== shiftForm.dayOfWeek
                        );
                        
                        return (
                          <div key={operator.id} className={`flex items-center justify-between p-3 rounded border ${isAssigned ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50 border-gray-200'}`}>
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                id={`operator-${operator.id}`}
                                checked={isAssigned}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // Cek apakah sudah mencapai batas maksimal
                                    if (shiftForm.assignedOperators.length >= shiftForm.maxOperators) {
                                      alert(`Maksimal ${shiftForm.maxOperators} operator per shift`);
                                      return;
                                    }
                                    setShiftForm({
                                      ...shiftForm,
                                      assignedOperators: [...shiftForm.assignedOperators, operator.id]
                                    });
                                  } else {
                                    setShiftForm({
                                      ...shiftForm,
                                      assignedOperators: shiftForm.assignedOperators.filter(id => id !== operator.id)
                                    });
                                  }
                                }}
                                className="rounded text-blue-600 focus:ring-blue-500"
                              />
                              <div>
                                <div className="flex items-center gap-2">
                                  <label htmlFor={`operator-${operator.id}`} className="font-medium text-gray-900 cursor-pointer">
                                    {operator.name}
                                  </label>
                                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                                    {operator.employeeId}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500">{operator.position}</p>
                                {operatorShifts.length > 0 && (
                                  <div className="mt-1">
                                    <p className="text-xs text-gray-500">
                                      Shift lain: {operatorShifts.length} hari
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded ${isAssigned ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {isAssigned ? 'Ditugaskan' : 'Tersedia'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Operator yang sedang cuti atau telah melebihi waktu kerja tidak muncul dalam daftar.
                </p>
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
  };

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
                      {selectedAttendance.totalHours} hours
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Validation Status
                    </label>
                    <div className="mt-1 space-y-1">
                      <p className={`text-xs ${selectedAttendance.locationValid ? 'text-green-600' : 'text-red-600'}`}>
                        • Lokasi: {selectedAttendance.locationValid ? 'Valid' : 'Tidak Valid'}
                      </p>
                      <p className={`text-xs ${selectedAttendance.timeValid ? 'text-green-600' : 'text-red-600'}`}>
                        • Waktu: {selectedAttendance.timeValid ? 'Valid' : 'Tidak Valid'}
                      </p>
                    </div>
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
      {showMedicalCertificateModal && <MedicalCertificateModal />}

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

        {/* DASHBOARD CONTENT */}
        {activeMenu === "dashboard" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                HRD Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Sistem Informasi Presensi Operator IPAL - Ringkasan Harian
              </p>
            </div>

            {/* SUMMARY CARD */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
              {[
                {
                  label: "Total Operators",
                  value: dashboardData.totalOperators,
                  percent: `Aktif: ${operators.filter(op => op.status === 'active').length}`,
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
                      ? `+${dashboardData.pendingValidation} new`
                      : "Semua tervalidasi",
                  icon: ClockIcon,
                  bgColor: "bg-yellow-50",
                  iconColor: "text-yellow-600",
                  menu: "attendance",
                },
                {
                  label: "Attendance Rate",
                  value: `${dashboardData.attendanceRate}%`,
                  percent: ``, // PERUBAHAN: Hapus 'Target: 95%'
                  icon: ChartBarIcon,
                  bgColor: dashboardData.attendanceRate >= 95 ? "bg-green-50" : "bg-orange-50",
                  iconColor: dashboardData.attendanceRate >= 95 ? "text-green-600" : "text-orange-600",
                  menu: "attendance"
                },
                {
                  label: "Present Today",
                  value: dashboardData.presentToday,
                  percent: `Dijadwalkan: ${dashboardData.operatorsWithShiftToday || 0}`,
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
                    <p className={`text-xs font-medium mt-1 ${
                      item.percent.includes('+') ? "text-red-600" : 
                      item.label === "Attendance Rate" && dashboardData.attendanceRate < 95 ? "text-orange-600" : 
                      "text-gray-600"
                    }`}>
                      {item.percent}
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
    className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
    onClick={() => setActiveMenu("shiftManagement")}
  >
    <div className="flex-1">
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
          const site = sites.find(s => s.id === shift.siteId);
          const assignedCount = shift.assignedOperators?.length || 0;
          return (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-50 rounded"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{shift.name}</p>
                <p className="text-xs text-gray-600">{shift.dayOfWeek} • {assignedCount}/{shift.maxOperators} ops (maksimal 12)</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {site ? site.name.split(' ')[1] : 'Site'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center">
        View All Shifts →
      </button>
    </div>
  </div>

  {/* Site Management Summary */}
  <div
    className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
    onClick={() => setActiveMenu("siteManagement")}
  >
    <div className="flex-1">
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
              {site.capacity} ops (maksimal 12)
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center">
        View All Sites →
      </button>
    </div>
  </div>

  {/* Leave Management Summary */}
  <div
    className="bg-white p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200 shadow-sm sm:shadow-md hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
    onClick={() => setActiveMenu("leaveManagement")}
  >
    <div className="flex-1">
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
    </div>
    <div className="mt-4 pt-4 border-t border-gray-100">
      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium w-full text-center">
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
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                  </div>
                  <div className="ml-6 sm:ml-8">
                    <div className="w-full h-32 sm:h-40 lg:h-48 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-2 border-b border-l border-gray-200 overflow-visible">
                      {weeklyAttendanceData.map((data, index) => {
                        const maxValue = Math.max(...weeklyAttendanceData.map(d => d.expectedOperators), 50);
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
                            <span className="text-xs text-gray-600 mt-1 sm:mt-2">{data.day}</span>
                            <span className="text-xs text-gray-400 mt-0.5">{data.expectedOperators}</span>
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
                    Today's Status Distribution
                  </h3>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded hidden sm:block">
                    {new Date().toLocaleDateString("id-ID", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded sm:hidden">
                    {new Date().toLocaleDateString("id-ID", {
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
                        {todayStatusData.find(d => d.status === "Present")?.value || 0}%
                      </div>
                      <div className="text-sm text-gray-600">Present Today</div>
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
            <p className="font-semibold text-gray-900 truncate text-sm sm:text-base">{attendance.name}</p>
            <p className="text-gray-600 truncate text-xs sm:text-sm">{attendance.location} • {attendance.time} • {attendance.date}</p>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 ml-2">
            {attendance.status === "approved" ? <CheckCircleIcon className="w-4 h-4 text-green-500" /> : attendance.status === "pending" ? <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500" /> : <XCircleIcon className="w-4 h-4 text-red-500" />}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${attendance.status === "approved" ? "bg-green-100 text-green-800" : attendance.status === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
              {attendance.status}
            </span>
          </div>
        </div>
      ))}
      {/* Tombol View All yang lurus */}
    <div className="mt-4 pt-3 border-t border-gray-200">
      <button
        onClick={() => setActiveMenu("attendance")}
        className="w-full text-center text-blue-600 hover:text-blue-800 text-sm font-medium py-2 hover:bg-gray-50 rounded transition"
      >
        View All Attendance →
      </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}

        {/* ATTENDANCE CONTENT - SESUAI SRS "Lihat Presensi Operator" */}
        {activeMenu === "attendance" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Lihat Presensi Operator
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {attendanceData.filter(item => item.status === "pending").length === 0 
                      ? "Semua data presensi telah divalidasi" 
                      : "Review and validate operator attendance records"}
                  </p>
                  <div className="text-sm text-blue-600 mt-1">
                    {attendanceData.filter(item => item.status === "pending").length > 0 
                      ? "Data perlu validasi HRD" 
                      : "Data tersinkronisasi dengan Admin & Operator"}
                  </div>
                </div>
              <div className="flex gap-2">
  {/* SESUAI SRS: Ekspor Data Presensi Operator - hanya Export to Excel */}
  <button
    onClick={exportAttendanceToExcel}
    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition shadow-sm hover:shadow-md"
  >
    <DocumentArrowDownIcon className="w-5 h-5" />
    Export to Excel
  </button>
</div>
              </div>

              {/* SESUAI SRS: Data presensi operator yang telah divalidasi (disetujui/ditolak) akan ditampilkan dalam bentuk tabel */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {[
                  {
                    label: "Total Records",
                    value: stats.total,
                    icon: DocumentChartBarIcon,
                    bgColor: "bg-gray-100",
                    iconColor: "text-gray-600",
                  },
                  {
                    label: "Disetujui",
                    value: stats.approved,
                    icon: CheckCircleIcon,
                    bgColor: "bg-green-100",
                    iconColor: "text-green-600",
                  },
                  {
                    label: "Ditolak",
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
                    <div key={i} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-gray-700 font-medium text-sm sm:text-base">{item.label}</p>
                        <div className={`p-2 rounded-lg ${item.bgColor}`}>
                          <Icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.label === "Total Records" ? `Minggu ini: ${attendanceData.filter(a => {
                          const weekAgo = new Date();
                          weekAgo.setDate(weekAgo.getDate() - 7);
                          return new Date(a.date) >= weekAgo;
                        }).length}` : item.label === "Pending Review" ? "Menunggu validasi HRD" : "Data tervalidasi"}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* SESUAI SRS: Alternative flows - Data presensi operator belum divalidasi sama sekali, maka sistem akan menampilkan data presensi kosong */}
              {attendanceData.length === 0 ? (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                  <DocumentTextIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Data Presensi Kosong</h3>
                  <p className="text-gray-600 mb-4">Belum ada data presensi yang dikirim oleh operator.</p>
                  <div className="text-sm text-gray-500">
                    <p>Operator akan mengirim data presensi melalui aplikasi mobile.</p>
                    <p>Data akan muncul di sini setelah dikirim.</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
                      <div className="relative flex-1">
                        <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input 
                          type="text" 
                          placeholder="Cari operator, site, atau lokasi..." 
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
                      <div className="col-span-2">Tanggal</div>
                      <div className="col-span-1">Check-In</div>
                      <div className="col-span-1">Check-Out</div>
                      <div className="col-span-2 text-center">Status</div>
                      <div className="col-span-1 text-center">Aksi</div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      {filteredData.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                          <DocumentTextIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                          <p className="text-lg font-medium text-gray-900 mb-2">Tidak ditemukan data presensi</p>
                          <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter</p>
                        </div>
                      ) : (
                        filteredData.map((item) => (
                          <div key={item.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="lg:hidden space-y-4">
                              <div className="flex justify-between items-start">
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{item.operator}</h3>
                                  <p className="text-gray-500 text-sm mt-1 truncate">{item.site}</p>
                                </div>
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
                                  {item.status === "approved" ? "Disetujui" : item.status === "rejected" ? "Ditolak" : "Pending"}
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-gray-500 text-xs uppercase font-medium mb-1">Tanggal</p>
                                  <p className="text-gray-900 text-sm font-medium">{item.date}</p>
                                </div>
                                <div>
                                  <p className="text-gray-500 text-xs uppercase font-medium mb-1">Dikirim Oleh</p>
                                  <p className="text-gray-900 text-sm font-medium capitalize">{item.submittedBy === "admin" ? "Admin" : "Operator"}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                                    <div>
                                      <p className="text-gray-500 text-xs">Check-In</p>
                                      <p className="text-gray-900 text-sm font-medium">{item.checkIn}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                                    <div>
                                      <p className="text-gray-500 text-xs">Check-Out</p>
                                      <p className="text-gray-900 text-sm font-medium">{item.checkOut}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                                <button onClick={() => openDetailModal(item)} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium">
                                  <EyeIcon className="w-4 h-4" /> Lihat Detail
                                </button>
                                {item.status === "pending" && (
                                  <div className="flex gap-2">
                                    {/* SESUAI SRS: Approve Presensi Operator */}
                                    <button onClick={() => handleApprove(item.id)} className="flex items-center gap-2 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium">
                                      <CheckCircleIcon className="w-4 h-4" /> Setujui
                                    </button>
                                    {/* SESUAI SRS: Reject Presensi Operator */}
                                    <button onClick={() => handleReject(item.id)} className="flex items-center gap-2 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium">
                                      <XCircleIcon className="w-4 h-4" /> Tolak
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="hidden lg:contents">
                              <div className="col-span-3 flex items-center">
                                <div>
                                  <p className="font-medium text-gray-900">{item.operator}</p>
                                  <p className="text-sm text-gray-500 mt-0.5">Dikirim oleh: {item.submittedBy === "admin" ? "Admin" : "Operator"}</p>
                                </div>
                              </div>
                              <div className="col-span-2 flex items-center"><p className="text-gray-700 truncate">{item.site}</p></div>
                              <div className="col-span-2 flex items-center"><p className="text-gray-700">{item.date}</p></div>
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
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${item.status === "approved" ? "bg-green-100 text-green-800" : item.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
                                  {item.status === "approved" ? "Disetujui" : item.status === "rejected" ? "Ditolak" : "Pending"}
                                </span>
                              </div>
                              <div className="col-span-1 flex items-center justify-center">
                                <div className="flex gap-2">
                                  <button onClick={() => openDetailModal(item)} className="text-blue-600 hover:text-blue-800 transition p-2 rounded-lg hover:bg-blue-50" title="View Details">
                                    <EyeIcon className="w-5 h-5" />
                                  </button>
                                  {item.status === "pending" && (
                                    <>
                                      <button onClick={() => handleApprove(item.id)} className="text-green-600 hover:text-green-800 transition p-2 rounded-lg hover:bg-green-50" title="Approve">
                                        <CheckCircleIcon className="w-5 h-5" />
                                      </button>
                                      <button onClick={() => handleReject(item.id)} className="text-red-600 hover:text-red-800 transition p-2 rounded-lg hover:bg-red-50" title="Reject">
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
                </>
              )}
              {filteredData.length === 0 && attendanceData.length > 0 && (
                <div className="text-center py-12">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <DocumentTextIcon className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada data yang cocok</h3>
                    <p className="text-gray-600 mb-6">Ubah kata kunci pencarian atau filter untuk menemukan data yang dicari.</p>
                    <button onClick={() => { setSearchQuery(""); setSelectedFilter("All"); }} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">
                      Reset Filter
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SHIFT MANAGEMENT CONTENT - SESUAI SRS */}
        {activeMenu === "shiftManagement" && (
          <div className="px-3 sm:px-4 lg:px-6 py-4 max-w-screen-2xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Shift Management
                  </h1>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {shifts.length === 0 
                      ? "Belum ada jadwal shift operator" 
                      : "Kelola jadwal shift dan penugasan operator"}
                  </p>
                </div>
              <div className="flex gap-2">
  {/* SESUAI SRS: Ekspor Data Shift Operator - hanya Export to Excel */}
  <button
    onClick={exportShiftsToCSV}
    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition shadow-sm hover:shadow-md"
  >
    <DocumentArrowDownIcon className="w-5 h-5" />
    Export to Excel
  </button>
  <button
    onClick={() => {
      resetShiftForm();
      setShowShiftForm(true);
    }}
    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition shadow-sm hover:shadow-md"
  >
    <PlusIcon className="w-5 h-5" />
    Tambah Shift
  </button>
</div>
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
                    <p className="text-sm text-gray-600">Operator Bertugas</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {new Set(shifts.flatMap(s => s.assignedOperators || [])).size}
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <UsersIcon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Rata-rata Operator/Shift</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">
                      {shifts.length > 0 
                        ? Math.round(shifts.reduce((acc, shift) => acc + (shift.assignedOperators?.length || 0), 0) / shifts.length)
                        : 0
                      }
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <UserGroupIcon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* SESUAI SRS: Sistem menampilkan daftar shift dan nama operator yang ditugaskan */}
            {shifts.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <ClockIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Jadwal Shift</h3>
                <p className="text-gray-600 mb-4">Tambahkan jadwal shift untuk operator IPAL.</p>
                <button
                  onClick={() => {
                    resetShiftForm();
                    setShowShiftForm(true);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  Tambah Shift Pertama
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                  <div className="col-span-3">Nama Shift</div>
                  <div className="col-span-2">Waktu</div>
                  <div className="col-span-2">Hari</div>
                  <div className="col-span-2">Operator Bertugas</div>
                  <div className="col-span-3 text-center">Aksi</div>
                </div>

                <div className="divide-y divide-gray-200">
                  {shifts.map((shift) => {
                    const site = sites.find(s => s.id === shift.siteId);
                    const assignedOperatorNames = (shift.assignedOperators || [])
                      .map(opId => {
                        const operator = operators.find(o => o.id === opId);
                        return operator ? operator.name : `Operator ${opId}`;
                      })
                      .join(", ");
                    
                    return (
                      <div
                        key={shift.id}
                        className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="lg:hidden space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{shift.name}</h3>
                              <p className="text-gray-500 text-sm mt-1 truncate">
                                {site ? `${site.name}` : 'Unknown Site'} • {shift.dayOfWeek}
                              </p>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded flex-shrink-0">
                              {(shift.assignedOperators?.length || 0)}/{shift.maxOperators} ops (maksimal 12)
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-medium mb-1">Waktu</p>
                              <p className="text-gray-900 text-sm font-medium">{shift.startTime} - {shift.endTime}</p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-medium mb-1">Site</p>
                              <p className="text-gray-900 text-sm font-medium">{site ? site.name : 'Unknown'}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">Operator Bertugas</p>
                            <p className="text-gray-900 text-sm line-clamp-2">
                              {assignedOperatorNames || "Belum ada operator ditugaskan"}
                            </p>
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                            <div className="flex gap-2">
                              {/* SESUAI SRS: Edit shift Operator */}
                              <button
                                onClick={() => handleEditShift(shift)}
                                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                              >
                                <PencilIcon className="w-4 h-4" />
                                Edit
                              </button>
                              {/* SESUAI SRS: Hapus Shift Operator */}
                              <button
                                onClick={() => handleDeleteShift(shift.id)}
                                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                              >
                                <TrashIcon className="w-4 h-4" />
                                Hapus
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
                              <p className="text-gray-700 text-sm">{shift.dayOfWeek}</p>
                            </div>
                          </div>
                          <div className="col-span-2 flex items-center">
                            <div className="min-w-0">
                              <p className="text-gray-700 truncate text-sm">
                                {assignedOperatorNames || "Belum ada operator"}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {(shift.assignedOperators?.length || 0)}/{shift.maxOperators} operators (maksimal 12)
                              </p>
                            </div>
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
                  })}
                </div>
              </div>
            )}
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
                    Kelola lokasi dan informasi site IPAL
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
                  Tambah Site Baru
                </button>
              </div>
            </div>

            {sites.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <BuildingOfficeIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Site Terdaftar</h3>
                <p className="text-gray-600 mb-4">Tambahkan site IPAL untuk memulai manajemen lokasi.</p>
                <button
                  onClick={() => {
                    resetSiteForm();
                    setShowSiteForm(true);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium inline-flex items-center gap-2"
                >
                  <PlusIcon className="w-5 h-5" />
                  Tambah Site Pertama
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                  <div className="col-span-3">Nama Site</div>
                  <div className="col-span-2">Lokasi</div>
                  <div className="col-span-3">Alamat</div>
                  <div className="col-span-2">Supervisor</div>
                  <div className="col-span-2 text-center">Aksi</div>
                </div>

                <div className="divide-y divide-gray-200">
                  {sites.map((site) => (
                    <div key={site.id} className="block lg:grid lg:grid-cols-12 lg:gap-4 px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
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
                            Kapasitas: {site.capacity} (maksimal 12)
                          </span>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">Alamat</p>
                          <p className="text-gray-900 text-sm line-clamp-2">{site.address}</p>
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
                            <p className="text-gray-500 text-xs uppercase font-medium mb-1">Kontak</p>
                            <p className="text-gray-900 text-sm font-medium">{site.contact}</p>
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
                              Hapus
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden lg:contents">
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">{site.name}</p>
                            <p className="text-sm text-gray-500 mt-0.5">Kapasitas: {site.capacity} operators (maksimal 12)</p>
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
                  ))}
                </div>
              </div>
            )}
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
                Kelola permohonan cuti dan izin operator
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
                <p className="text-gray-600">Permohonan menunggu persetujuan</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">Disetujui</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {
                      leaveRequests.filter((r) => r.status === "approved")
                        .length
                    }
                  </span>
                </div>
                <p className="text-gray-600">Permohonan yang telah disetujui</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-800">Ditolak</h3>
                  <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                    {
                      leaveRequests.filter((r) => r.status === "rejected")
                        .length
                    }
                  </span>
                </div>
                <p className="text-gray-600">Permohonan yang telah ditolak</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Operator</div>
                <div className="col-span-2">Jenis</div>
                <div className="col-span-2">Periode</div>
                <div className="col-span-3">Alasan</div>
                <div className="col-span-2 text-center">Aksi</div>
              </div>

              <div className="divide-y divide-gray-200">
                {leaveRequests.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <CalendarIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900 mb-2">Belum ada permohonan</p>
                    <p className="text-gray-600">Semua permohonan telah diproses</p>
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
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                request.type === 'izin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                              }`}>
                                {request.type === 'izin' ? 'Izin' : 'Cuti'}
                              </span>
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                                request.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {request.status === 'approved' ? 'Disetujui' : 
                                 request.status === 'rejected' ? 'Ditolak' : 'Pending'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">Periode</p>
                          <p className="text-gray-900 text-sm font-medium">
                            {request.startDate} s/d {request.endDate}
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-500 text-xs uppercase font-medium mb-1">Alasan</p>
                          <p className="text-gray-900 text-sm line-clamp-2">{request.reason}</p>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                          <button
                            onClick={() => openLeaveDetail(request)}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 text-sm font-medium"
                          >
                            <EyeIcon className="w-4 h-4" />
                            Lihat Detail
                          </button>

                          {request.status === "pending" && (
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleApproveLeave(request.id)}
                                className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 text-sm font-medium"
                              >
                                <CheckCircleIcon className="w-4 h-4" />
                                Setujui
                              </button>
                              <button
                                onClick={() => handleRejectLeave(request.id)}
                                className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 text-sm font-medium"
                              >
                                <XCircleIcon className="w-4 h-4" />
                                Tolak
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden lg:contents">
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="font-medium text-gray-900">{request.operator}</p>
                            <p className="text-sm text-gray-500 mt-0.5">Diajukan: {request.submittedDate}</p>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <div className="flex flex-col gap-1">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              request.type === 'izin' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                            }`}>
                              {request.type === 'izin' ? 'Izin' : 'Cuti'}
                            </span>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                              request.status === 'approved' ? 'bg-green-100 text-green-800' : 
                              request.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {request.status === 'approved' ? 'Disetujui' : 
                               request.status === 'rejected' ? 'Ditolak' : 'Pending'}
                            </span>
                          </div>
                        </div>
                        <div className="col-span-2 flex items-center">
                          <p className="text-gray-700">
                            {request.startDate}<br/>
                            s/d {request.endDate}
                          </p>
                        </div>
                        <div className="col-span-3 flex items-center">
                          <div>
                            <p className="text-gray-700 truncate">
                              {request.reason}
                            </p>
                          </div>
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