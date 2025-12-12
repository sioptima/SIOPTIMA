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
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  PhotoIcon,
  FilmIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

// Data provinsi dan kota di Indonesia
const provinsiList = [
  "Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Jambi", 
  "Sumatera Selatan", "Bengkulu", "Lampung", "Kepulauan Bangka Belitung", 
  "Kepulauan Riau", "DKI Jakarta", "Jawa Barat", "Jawa Tengah", 
  "DI Yogyakarta", "Jawa Timur", "Banten", "Bali", 
  "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Kalimantan Barat", 
  "Kalimantan Tengah", "Kalimantan Selatan", "Kalimantan Timur", 
  "Kalimantan Utara", "Sulawesi Utara", "Sulawesi Tengah", 
  "Sulawesi Selatan", "Sulawesi Tenggara", "Gorontalo", 
  "Sulawesi Barat", "Maluku", "Maluku Utara", "Papua Barat", "Papua"
];

const kotaByProvinsi = {
  "Aceh": ["Banda Aceh", "Langsa", "Lhokseumawe", "Sabang", "Subulussalam"],
  "Sumatera Utara": ["Medan", "Binjai", "Padang Sidempuan", "Pematangsiantar", "Sibolga", "Tanjungbalai", "Tebing Tinggi"],
  "Sumatera Barat": ["Padang", "Bukittinggi", "Padang Panjang", "Pariaman", "Payakumbuh", "Sawahlunto", "Solok"],
  "Riau": ["Pekanbaru", "Dumai"],
  "Jambi": ["Jambi", "Sungai Penuh"],
  "Sumatera Selatan": ["Palembang", "Pagar Alam", "Prabumulih"],
  "Bengkulu": ["Bengkulu"],
  "Lampung": ["Bandar Lampung", "Metro"],
  "Kepulauan Bangka Belitung": ["Pangkal Pinang"],
  "Kepulauan Riau": ["Batam", "Tanjung Pinang"],
  "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Selatan", "Jakarta Timur", "Jakarta Barat"],
  "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Cimahi", "Cirebon", "Depok", "Sukabumi", "Tasikmalaya", "Banjar"],
  "Jawa Tengah": ["Semarang", "Salatiga", "Surakarta", "Pekalongan", "Tegal", "Magelang"],
  "DI Yogyakarta": ["Yogyakarta"],
  "Jawa Timur": ["Surabaya", "Malang", "Batu", "Blitar", "Kediri", "Madiun", "Mojokerto", "Pasuruan", "Probolinggo"],
  "Banten": ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan"],
  "Bali": ["Denpasar"],
  "Nusa Tenggara Barat": ["Mataram", "Bima"],
  "Nusa Tenggara Timur": ["Kupang"],
  "Kalimantan Barat": ["Pontianak", "Singkawang"],
  "Kalimantan Tengah": ["Palangka Raya"],
  "Kalimantan Selatan": ["Banjarbaru", "Banjarmasin"],
  "Kalimantan Timur": ["Balikpapan", "Bontang", "Samarinda"],
  "Kalimantan Utara": ["Tarakan"],
  "Sulawesi Utara": ["Manado", "Bitung", "Kotamobagu", "Tomohon"],
  "Sulawesi Tengah": ["Palu"],
  "Sulawesi Selatan": ["Makassar", "Palopo", "Parepare"],
  "Sulawesi Tenggara": ["Kendari", "Bau-Bau"],
  "Gorontalo": ["Gorontalo"],
  "Sulawesi Barat": ["Mamuju"],
  "Maluku": ["Ambon", "Tual"],
  "Maluku Utara": ["Ternate", "Tidore Kepulauan"],
  "Papua Barat": ["Manokwari", "Sorong"],
  "Papua": ["Jayapura"]
};

export default function Admin() {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSite, setSelectedSite] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredPie, setHoveredPie] = useState(null);
  const [hoveredSitePie, setHoveredSitePie] = useState(null);
  const [notificationFilter, setNotificationFilter] = useState("all");
  const [isAddSiteModalOpen, setIsAddSiteModalOpen] = useState(false);
  const [isEditSiteModalOpen, setIsEditSiteModalOpen] = useState(false);
  const [editingSite, setEditingSite] = useState(null);
  const [newSiteData, setNewSiteData] = useState({
    name: "",
    city: "",
    address: "",
    province: "",
    status: "active",
    latitude: "",
    longitude: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // State untuk geolokasi
  const [mapClickPosition, setMapClickPosition] = useState({ x: 50, y: 50 });

  // State untuk image preview
  const [previewImage, setPreviewImage] = useState(null);
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);

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

  // ==================== STATE UNTUK HELP/TIKET ====================
  const [ticketsData, setTicketsData] = useState([
    {
      id: 1,
      operatorName: "Budi Santoso",
      operatorId: 1,
      site: "Jakarta Utara - Site A",
      problem: "Mesin filter air mengalami kebocoran pada bagian inlet",
      submittedDate: "2025-01-27",
      submittedTime: "10:30",
      status: "open", // open, pending, resolved
      priority: "high", // high, medium, low
      category: "equipment",
      attachments: ["image1.jpg"],
      solution: "",
      resolvedDate: "",
      resolvedBy: "",
    },
    {
      id: 2,
      operatorName: "Siti Nurhaliza",
      operatorId: 2,
      site: "Bandung - Site B",
      problem: "Pembacaan pH meter tidak stabil, perlu kalibrasi",
      submittedDate: "2025-01-26",
      submittedTime: "14:15",
      status: "pending", // open, pending, resolved
      priority: "medium",
      category: "instrument",
      attachments: ["ph_meter.jpg", "reading.jpg"],
      solution: "Sudah dikalibrasi dengan buffer solution pH 7 dan pH 4",
      resolvedDate: "2025-01-27",
      resolvedBy: "Admin",
    },
    {
      id: 3,
      operatorName: "Ahmad Yani",
      operatorId: 3,
      site: "Surabaya - Site C",
      problem: "Suplai bahan kimia coagulant hampir habis",
      submittedDate: "2025-01-25",
      submittedTime: "09:45",
      status: "resolved", // open, pending, resolved
      priority: "medium",
      category: "supply",
      attachments: [],
      solution: "Sudah dipesan 50kg coagulant, akan dikirim 2 hari lagi",
      resolvedDate: "2025-01-26",
      resolvedBy: "Admin",
    },
    {
      id: 4,
      operatorName: "Budi Santoso",
      operatorId: 1,
      site: "Jakarta Utara - Site A",
      problem: "Software monitoring tidak bisa connect ke server",
      submittedDate: "2025-01-27",
      submittedTime: "11:20",
      status: "open",
      priority: "high",
      category: "software",
      attachments: ["error_screenshot.png"],
      solution: "",
      resolvedDate: "",
      resolvedBy: "",
    },
    {
      id: 5,
      operatorName: "Operator 2",
      operatorId: 4,
      site: "Bandung - Site B",
      problem: "Pompa air utama berisik dan vibrasi berlebihan",
      submittedDate: "2025-01-24",
      submittedTime: "16:30",
      status: "pending",
      priority: "high",
      category: "equipment",
      attachments: ["pump_video.mp4"],
      solution: "Minta operator untuk cek bearing dan alignment pompa",
      resolvedDate: "2025-01-25",
      resolvedBy: "Admin",
    },
  ]);

  // State untuk modal Help/Tiket
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [solutionText, setSolutionText] = useState("");
  const [ticketStatus, setTicketStatus] = useState("open");
  const [ticketFilter, setTicketFilter] = useState("all"); // all, open, pending, resolved
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
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [
    isNotificationModalOpen,
    isExportModalOpen,
    isReviewModalOpen,
    isTicketModalOpen,
  ]);

  // ==================== MENU ITEMS DENGAN HELP ====================
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "sites", name: "Sites", icon: MapPinIcon },
    { id: "users", name: "Users", icon: UsersIcon },
    { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
    { id: "help", name: "Help Tickets", icon: ChatBubbleLeftRightIcon },
  ];

  // ==================== MASTER DATA STATE ====================
  // Initial sites data dengan 6 site (2 Surabaya, 2 Jakarta, 2 Kalimantan) + 2 site wajib
  const initialSitesData = [
    // 2 Site Surabaya
    {
      id: 1,
      name: "Surabaya - Site A",
      city: "Surabaya",
      address: "Jl. Basuki Rahmat No. 123, Surabaya",
      province: "Jawa Timur",
      latitude: "-7.2504",
      longitude: "112.7688",
      operators: 3,
      status: "active",
      lastReport: "2 hours ago",
    },
    {
      id: 2,
      name: "Surabaya - Site B",
      city: "Surabaya",
      address: "Jl. Ahmad Yani No. 456, Surabaya",
      province: "Jawa Timur",
      latitude: "-7.2575",
      longitude: "112.7521",
      operators: 4,
      status: "active",
      lastReport: "3 hours ago",
    },
    // 2 Site Jakarta
    {
      id: 3,
      name: "Jakarta - Site A",
      city: "Jakarta Utara",
      address: "Jl. Industri No. 123, Jakarta Utara",
      province: "DKI Jakarta",
      latitude: "-6.1333",
      longitude: "106.8833",
      operators: 2,
      status: "active",
      lastReport: "5 hours ago",
    },
    {
      id: 4,
      name: "Jakarta - Site B",
      city: "Jakarta Selatan",
      address: "Jl. Sudirman No. 456, Jakarta Selatan",
      province: "DKI Jakarta",
      latitude: "-6.2088",
      longitude: "106.8456",
      operators: 3,
      status: "active",
      lastReport: "1 hour ago",
    },
    // 2 Site Kalimantan
    {
      id: 5,
      name: "Kalimantan - Site A",
      city: "Balikpapan",
      address: "Jl. MT Haryono No. 789, Balikpapan",
      province: "Kalimantan Timur",
      latitude: "-1.2675",
      longitude: "116.8289",
      operators: 2,
      status: "active",
      lastReport: "2 days ago",
    },
    {
      id: 6,
      name: "Kalimantan - Site B",
      city: "Samarinda",
      address: "Jl. Pangeran Hidayatullah No. 321, Samarinda",
      province: "Kalimantan Timur",
      latitude: "-0.5021",
      longitude: "117.1536",
      operators: 3,
      status: "inactive",
      lastReport: "2 days ago",
    },
    // 2 Site Wajib
    {
      id: 7,
      name: "Central Office",
      city: "Jakarta Pusat",
      address: "Jl. Jenderal Sudirman No. 1, Jakarta Pusat",
      province: "DKI Jakarta",
      latitude: "-6.2088",
      longitude: "106.8456",
      operators: 10,
      status: "active",
      lastReport: "Just now",
    },
    {
      id: 8,
      name: "Head Office",
      city: "Surabaya",
      address: "Jl. Tunjungan No. 100, Surabaya",
      province: "Jawa Timur",
      latitude: "-7.2658",
      longitude: "112.7478",
      operators: 15,
      status: "active",
      lastReport: "Just now",
    },
  ];

  const [sitesData, setSitesData] = useState(initialSitesData);

  // Initial users data yang sudah terintegrasi dengan sitesData
  const initialUsersData = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      role: "operator",
      site: "Surabaya - Site A",
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
      site: "Jakarta - Site A",
      status: "inactive",
      lastActive: "3 days ago",
      initial: "O",
    },
  ];

  const [usersData, setUsersData] = useState(initialUsersData);

  const [reportsData, setReportsData] = useState([
    {
      id: 1,
      date: "2025-01-27",
      time: "08:30",
      site: "Surabaya - Site A",
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
      site: "Jakarta - Site A",
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
      site: "Surabaya - Site B",
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
      site: "Surabaya - Site A",
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
      site: "Jakarta - Site B",
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

  // ==================== FUNGSI UNTUK PIE CHART ====================
  const calculatePath = (cx, cy, radius, startAngle, endAngle) => {
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Hitung pieChartData dari reportStatusData
  let currentAngle = 0;
  const pieChartData = reportStatusData.map((item) => {
    const angle = (item.value / 100) * 360;
    const path = calculatePath(50, 50, 50, currentAngle, currentAngle + angle);
    currentAngle += angle;
    return {
      ...item,
      path,
    };
  });

  // ==================== PERHITUNGAN DATA UNTUK SITES PIE CHART ====================
  const sitesStatusData = [
    { status: "Active", value: activeSites, color: "#10B981" },
    { status: "Maintenance", value: maintenanceSites, color: "#F59E0B" },
    {
      status: "Inactive",
      value: totalSites - activeSites - maintenanceSites,
      color: "#9CA3AF",
    },
  ];

  const totalSitesCount = totalSites;
  const sitesPieChartData = sitesStatusData.map((item) => ({
    ...item,
    percentage:
      totalSitesCount > 0
        ? Math.round((item.value / totalSitesCount) * 100)
        : 0,
  }));

  // Hitung path untuk pie chart sites
  let currentSiteAngle = 0;
  const sitesPieChartPaths = sitesPieChartData.map((item) => {
    const angle = (item.percentage / 100) * 360;
    const path = calculatePath(
      50,
      50,
      50,
      currentSiteAngle,
      currentSiteAngle + angle
    );
    currentSiteAngle += angle;
    return {
      ...item,
      path,
    };
  });

  const activePercentage =
    totalSites > 0 ? Math.round((activeSites / totalSites) * 100) : 0;
  // ==================== END SITES PIE CHART ====================

  const totalPercentage = reportStatusData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  // ==================== FILTER DATA ====================
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

  // ==================== FILTER UNTUK TIKET ====================
  const filteredTickets = ticketsData
    .filter((ticket) => {
      // Filter berdasarkan status
      if (ticketFilter !== "all" && ticket.status !== ticketFilter) {
        return false;
      }
      // Filter berdasarkan priority
      if (
        ticketPriorityFilter !== "all" &&
        ticket.priority !== ticketPriorityFilter
      ) {
        return false;
      }
      // Filter berdasarkan search query
      if (
        searchQuery &&
        !ticket.operatorName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) &&
        !ticket.site.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !ticket.problem.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Urutkan berdasarkan tanggal dan waktu terbaru
      const dateCompare = b.submittedDate.localeCompare(a.submittedDate);
      if (dateCompare !== 0) return dateCompare;
      return b.submittedTime.localeCompare(a.submittedTime);
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

  // ==================== HANDLERS UNTUK SITE ====================
  const handleAddSite = () => {
    const errors = validateForm(newSiteData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const newSite = {
      id: sitesData.length + 1,
      ...newSiteData,
      operators: 0,
      lastReport: "No reports yet",
    };

    const updatedSites = [...sitesData, newSite];
    setSitesData(updatedSites);
    
    // Setelah menambahkan site, reset form
    setNewSiteData({
      name: "",
      city: "",
      address: "",
      province: "",
      status: "active",
      latitude: "",
      longitude: "",
    });
    setIsAddSiteModalOpen(false);
    setFormErrors({});
    setMapClickPosition({ x: 50, y: 50 });
  };

  const handleEditSite = (site) => {
    setEditingSite({ ...site });
    setIsEditSiteModalOpen(true);
  };

  const handleUpdateSite = () => {
    const errors = validateForm(editingSite);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const updatedSites = sitesData.map((site) => 
      site.id === editingSite.id ? editingSite : site
    );
    setSitesData(updatedSites);
    setIsEditSiteModalOpen(false);
    setEditingSite(null);
    setFormErrors({});
  };

  const handleDeleteSite = (id) => {
    // Cek apakah site sedang digunakan oleh user
    const isSiteUsed = usersData.some(user => user.site === sitesData.find(s => s.id === id)?.name);
    
    if (isSiteUsed) {
      alert("Site tidak dapat dihapus karena sedang digunakan oleh user. Silahkan ubah site user terlebih dahulu.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this site?")) {
      setSitesData(sitesData.filter((site) => site.id !== id));
    }
  };

  const handleInputChange = (field, value) => {
    setNewSiteData({ ...newSiteData, [field]: value });
    if (formErrors[field]) {
      setFormErrors({ ...formErrors, [field]: null });
    }
  };

  // Handler untuk perubahan provinsi (reset kota saat provinsi berubah)
  const handleProvinceChange = (value, isEditMode = false) => {
    if (isEditMode) {
      setEditingSite({ 
        ...editingSite, 
        province: value, 
        city: "" // Reset kota saat provinsi berubah
      });
      if (formErrors.province) {
        setFormErrors({ ...formErrors, province: null });
      }
      if (formErrors.city) {
        setFormErrors({ ...formErrors, city: null });
      }
    } else {
      setNewSiteData({ 
        ...newSiteData, 
        province: value, 
        city: "" // Reset kota saat provinsi berubah
      });
      if (formErrors.province) {
        setFormErrors({ ...formErrors, province: null });
      }
      if (formErrors.city) {
        setFormErrors({ ...formErrors, city: null });
      }
    }
  };

  const handleEditInputChange = (field, value) => {
    setEditingSite({ ...editingSite, [field]: value });
    if (formErrors[field]) {
      setFormErrors({ ...formErrors, [field]: null });
    }
  };

  // ==================== HANDLERS UNTUK USER ====================
  const handleAddUser = () => {
    const errors = validateUserForm(newUserData);
    if (Object.keys(errors).length > 0) {
      setUserFormErrors(errors);
      return;
    }

    const newUser = {
      id: usersData.length + 1,
      ...newUserData,
      lastActive: "Just now",
      initial: newUserData.name.charAt(0),
    };

    setUsersData([...usersData, newUser]);
    setNewUserData({
      name: "",
      email: "",
      role: "operator",
      site: "",
      status: "active",
    });
    setIsAddUserModalOpen(false);
    setUserFormErrors({});
  };

  const handleEditUser = (user) => {
    setEditingUser({ ...user });
    setIsEditUserModalOpen(true);
  };

  const handleUpdateUser = () => {
    const errors = validateUserForm(editingUser);
    if (Object.keys(errors).length > 0) {
      setUserFormErrors(errors);
      return;
    }

    setUsersData(
      usersData.map((user) => (user.id === editingUser.id ? editingUser : user))
    );
    setIsEditUserModalOpen(false);
    setEditingUser(null);
    setUserFormErrors({});
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsersData(usersData.filter((user) => user.id !== id));
    }
  };

  const handleUserInputChange = (field, value) => {
    setNewUserData({ ...newUserData, [field]: value });
    if (userFormErrors[field]) {
      setUserFormErrors({ ...userFormErrors, [field]: null });
    }
  };

  const handleEditUserInputChange = (field, value) => {
    setEditingUser({ ...editingUser, [field]: value });
    if (userFormErrors[field]) {
      setUserFormErrors({ ...userFormErrors, [field]: null });
    }
  };

  // ==================== HANDLERS UNTUK REPORTS ====================
  const handleReview = (reportId) => {
    const report = reportsData.find((r) => r.id === reportId);
    setSelectedReport(report);
    setIsReviewModalOpen(true);
  };

  const handleApprove = (reportId) => {
    setReportsData(
      reportsData.map((report) =>
        report.id === reportId ? { ...report, status: "approved" } : report
      )
    );
  };

  const handleReject = (reportId) => {
    setReportsData(
      reportsData.map((report) =>
        report.id === reportId ? { ...report, status: "rejected" } : report
      )
    );
  };







  // ==================== FUNGSI FILTER UNTUK EXPORT ====================
const filterReportsForExport = () => {
  let filtered = [...filteredReports]; // Gunakan data yang sudah difilter dari tabel

  // Filter berdasarkan rentang waktu
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  if (exportDateRange === "today") {
    filtered = filtered.filter(report => report.date === todayStr);
  } else if (exportDateRange === "week") {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = weekAgo.toISOString().split('T')[0];
    filtered = filtered.filter(report => report.date >= weekAgoStr);
  } else if (exportDateRange === "month") {
    const monthAgo = new Date();
    monthAgo.setDate(monthAgo.getDate() - 30);
    const monthAgoStr = monthAgo.toISOString().split('T')[0];
    filtered = filtered.filter(report => report.date >= monthAgoStr);
  }

  // Filter berdasarkan status export
  if (exportStatus !== "all") {
    filtered = filtered.filter(report => report.status === exportStatus);
  }

  return filtered;
};







  const handleExportReport = () => {
    setIsExportModalOpen(true);
  };

  const handleConfirmExport = () => {
    if (exportFormat === "pdf") {
      exportToPDF();
    } else {
      exportToCSV();
    }
    setIsExportModalOpen(false);
  };

  const exportToPDF = () => {
  const reportsToExport = filterReportsForExport();
  
  if (reportsToExport.length === 0) {
    alert("Tidak ada data untuk di-export!");
    return;
  }

  // Buat jendela baru untuk cetak PDF
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert("Popup diblokir! Izinkan popup untuk mencetak PDF.");
    return;
  }

  // Buat konten HTML untuk PDF
  const htmlContent = `
    <html>
      <head>
        <title>Report Export - ${new Date().toLocaleDateString()}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          h1 { text-align: center; color: #333; }
          .info { margin-bottom: 20px; padding: 10px; background: #f5f5f5; border-radius: 5px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #4f46e5; color: white; }
          tr:nth-child(even) { background-color: #f9f9f9; }
          .status-approved { color: #10b981; font-weight: bold; }
          .status-pending { color: #f59e0b; font-weight: bold; }
          .status-rejected { color: #ef4444; font-weight: bold; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <h1>Laporan IPAL Monitoring</h1>
        <div class="info">
          <p><strong>Tanggal Export:</strong> ${new Date().toLocaleDateString('id-ID')}</p>
          <p><strong>Total Data:</strong> ${reportsToExport.length} laporan</p>
          <p><strong>Filter:</strong> ${exportDateRange} | ${exportStatus === 'all' ? 'Semua Status' : exportStatus}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tanggal</th>
              <th>Waktu</th>
              <th>Site</th>
              <th>Operator</th>
              <th>pH</th>
              <th>Flow Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${reportsToExport.map(report => `
              <tr>
                <td>${report.id}</td>
                <td>${report.date}</td>
                <td>${report.time}</td>
                <td>${report.site}</td>
                <td>${report.operator}</td>
                <td>${report.pH}</td>
                <td>${report.flowRate}</td>
                <td class="status-${report.status}">
                  ${report.status === 'approved' ? '✓ Disetujui' : 
                    report.status === 'pending' ? '⏳ Pending' : 
                    '✗ Ditolak'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="footer">
          <p>Dokumen ini dihasilkan oleh SIOPTIMA IPAL Monitoring System</p>
          <p>© ${new Date().getFullYear()} - All rights reserved</p>
        </div>
        <script>
          // Cetak otomatis saat jendela terbuka
          window.onload = function() {
            window.print();
            // Tutup jendela setelah cetak (opsional)
            setTimeout(function() {
              window.close();
            }, 1000);
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};

  const exportToCSV = () => {
  const reportsToExport = filterReportsForExport();
  
  if (reportsToExport.length === 0) {
    alert("Tidak ada data untuk di-export!");
    return;
  }

  // Header CSV
  const headers = ["ID", "Date", "Time", "Site", "Operator", "pH", "Flow Rate", "Status"];
  
  // Data
  const csvData = reportsToExport.map(report => [
    report.id,
    report.date,
    report.time,
    `"${report.site}"`,
    `"${report.operator}"`,
    report.pH,
    report.flowRate,
    report.status
  ]);

  // Gabungkan header dan data
  const csvContent = [headers, ...csvData]
    .map(row => row.join(","))
    .join("\n");

  // Buat blob dan download
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `laporan-ipal-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  // Tambah notifikasi
  alert(`Berhasil mengekspor ${reportsToExport.length} laporan ke format CSV!`);
};

  // ==================== FUNGSI DOWNLOAD ATTACHMENT ====================
  const downloadAttachment = (fileName, ticketId) => {
    // Simulasi download file
    const ticket = ticketsData.find((t) => t.id === ticketId);
    if (!ticket) return;

    // Tentukan tipe file
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(fileName);
    const isVideo = /\.(mp4|mov|avi)$/i.test(fileName);
    const isPDF = /\.pdf$/i.test(fileName);

    let content, blob, mimeType;

    if (isImage) {
      // Untuk gambar, buat canvas dengan data dummy
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 600;
      const ctx = canvas.getContext("2d");

      // Background
      ctx.fillStyle = "#f3f4f6";
      ctx.fillRect(0, 0, 800, 600);

      // Text
      ctx.fillStyle = "#374151";
      ctx.font = "24px Arial";
      ctx.textAlign = "center";
      ctx.fillText(`Attachment: ${fileName}`, 400, 200);
      ctx.font = "18px Arial";
      ctx.fillText(`Ticket ID: ${ticketId}`, 400, 250);
      ctx.fillText(`Site: ${ticket.site}`, 400, 300);
      ctx.fillText(`Operator: ${ticket.operatorName}`, 400, 350);
      ctx.fillText(`Downloaded: ${new Date().toLocaleDateString()}`, 400, 400);

      // Convert to blob
      canvas.toBlob((blobData) => {
        if (blobData) {
          const url = URL.createObjectURL(blobData);
          const link = document.createElement("a");
          link.href = url;
          link.download = fileName;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, "image/jpeg");
    } else {
      // Untuk file lainnya, buat file text sederhana
      content = `Attachment File\n\n`;
      content += `File Name: ${fileName}\n`;
      content += `Ticket ID: ${ticketId}\n`;
      content += `Operator: ${ticket.operatorName}\n`;
      content += `Site: ${ticket.site}\n`;
      content += `Problem: ${ticket.problem}\n`;
      content += `Submitted: ${ticket.submittedDate} ${ticket.submittedTime}\n`;
      content += `Downloaded: ${new Date().toLocaleString()}\n`;

      blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName.replace(/\.[^.]+$/, ".txt");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

    // Notifikasi
    alert(`File "${fileName}" sedang diunduh...`);
  };

  // ==================== HANDLERS UNTUK TIKET ====================
  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setSolutionText(ticket.solution || "");
    setTicketStatus(ticket.status);
    setIsTicketModalOpen(true);
  };

  const handleSubmitSolution = () => {
    if (!solutionText.trim() && ticketStatus === "resolved") {
      alert("Harap masukkan solusi sebelum menyelesaikan tiket!");
      return;
    }

    const updatedTickets = ticketsData.map((ticket) =>
      ticket.id === selectedTicket.id
        ? {
            ...ticket,
            solution: solutionText.trim(),
            status: ticketStatus,
            resolvedDate:
              ticketStatus === "resolved"
                ? new Date().toISOString().split("T")[0]
                : "",
            resolvedBy: "Admin",
          }
        : ticket
    );

    setTicketsData(updatedTickets);

    // Kirim notifikasi ke operator (simulasi)
    const operator = usersData.find(
      (user) => user.id === selectedTicket.operatorId
    );
    if (operator && ticketStatus === "resolved") {
      alert(`Solusi telah dikirim ke ${operator.name} (${operator.email})`);
    } else if (ticketStatus === "pending") {
      alert(
        "Tiket telah ditandai sebagai Pending, menunggu informasi tambahan dari operator."
      );
    }

    setIsTicketModalOpen(false);
    setSelectedTicket(null);
    setSolutionText("");
  };

  const handleReturnToOperator = () => {
    if (!solutionText.trim()) {
      alert("Harap berikan instruksi atau pertanyaan untuk operator!");
      return;
    }

    const updatedTickets = ticketsData.map((ticket) =>
      ticket.id === selectedTicket.id
        ? {
            ...ticket,
            solution: solutionText.trim(),
            status: "pending",
          }
        : ticket
    );

    setTicketsData(updatedTickets);
    alert(
      "Tiket telah dikembalikan ke operator dengan permintaan informasi tambahan."
    );
    setIsTicketModalOpen(false);
    setSelectedTicket(null);
    setSolutionText("");
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

  const unreadCount = extendedNotifications.filter(
    (notification) => notification.unread
  ).length;

  const notifications = extendedNotifications
    .filter((notification) => notification.unread)
    .slice(0, 3)
    .map((notification) => ({
      ...notification,
      count: 1,
    }));

  const filteredNotifications = extendedNotifications.filter((notification) => {
    if (notificationFilter === "all") return true;
    return notification.type === notificationFilter;
  });

  // ==================== NOTIFICATION HANDLERS ====================
  const handleNotificationAction = (action, notificationId = null) => {
    setNotificationOpen(false);
    setIsNotificationModalOpen(false);

    if (notificationId) {
      setExtendedNotifications((prev) =>
        prev.map((notif) =>
          notif.id === notificationId ? { ...notif, unread: false } : notif
        )
      );
    }

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

  const getStatusConfig = (status) => {
    const config = {
      approved: {
        icon: CheckCircleIcon,
        color: "text-green-100",
        bgColor: "bg-green-100", // DIUBAH: sama dengan dashboard
        borderColor: "border-green-200",
        text: "Approved",
        textColor: "text-green-800", // DIUBAH: lebih gelap agar terlihat
      },
      pending: {
        icon: ClockIcon,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100", // DIUBAH: sama dengan dashboard
        borderColor: "border-yellow-200",
        text: "Pending",
        textColor: "text-yellow-800", // DIUBAH: lebih gelap agar terlihat
      },
      rejected: {
        icon: XCircleIcon,
        color: "text-red-100",
        bgColor: "bg-red-100", // DIUBAH: sama dengan dashboard
        borderColor: "border-red-200",
        text: "Rejected",
        textColor: "text-red-800", // DIUBAH: lebih gelap agar terlihat
      },
    };
    return config[status] || config.pending;
  };

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

  // Fungsi untuk mendapatkan daftar site options yang selalu update dari sitesData
  const getSiteOptions = () => {
    const siteNames = sitesData.map((site) => site.name);
    // Tambahkan site dari usersData yang mungkin belum ada di sitesData
    const additionalSites = usersData
      .map((user) => user.site)
      .filter((site) => !siteNames.includes(site));
    const allSites = [...new Set([...siteNames, ...additionalSites])];
    return allSites.sort();
  };

  const siteOptions = getSiteOptions();

  // ==================== FUNGSI UNTUK TIKET ====================
  const getTicketStatusConfig = (status) => {
    const config = {
      open: {
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
        icon: ClockIcon,
        label: "Open",
      },
      pending: {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
        icon: ArrowPathIcon,
        label: "Pending",
      },
      resolved: {
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        icon: CheckCircleIcon,
        label: "Resolved",
      },
    };
    return config[status] || config.open;
  };

  const getPriorityConfig = (priority) => {
    const config = {
      high: {
        bgColor: "bg-red-100",
        textColor: "text-red-800",
        label: "High",
      },
      medium: {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
        label: "Medium",
      },
      low: {
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        label: "Low",
      },
    };
    return config[priority] || config.medium;
  };

  const getCategoryConfig = (category) => {
    const config = {
      equipment: {
        bgColor: "bg-purple-100",
        textColor: "text-purple-800",
        label: "Equipment",
      },
      instrument: {
        bgColor: "bg-blue-100",
        textColor: "text-blue-800",
        label: "Instrument",
      },
      supply: {
        bgColor: "bg-orange-100",
        textColor: "text-orange-800",
        label: "Supply",
      },
      software: {
        bgColor: "bg-indigo-100",
        textColor: "text-indigo-800",
        label: "Software",
      },
      other: {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
        label: "Other",
      },
    };
    return config[category] || config.other;
  };

  // ==================== STATISTIK TIKET ====================
  const openTickets = ticketsData.filter(
    (ticket) => ticket.status === "open"
  ).length;
  const pendingTickets = ticketsData.filter(
    (ticket) => ticket.status === "pending"
  ).length;
  const resolvedTickets = ticketsData.filter(
    (ticket) => ticket.status === "resolved"
  ).length;
  const highPriorityTickets = ticketsData.filter(
    (ticket) => ticket.priority === "high"
  ).length;

  // ==================== MODAL ADD USER (FIXED BISA DIKETIK) ====================
  const AddUserModal = () => {
    // Gunakan state lokal untuk form dalam modal
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: "operator",
      site: "",
      status: "active",
    });

    // Inisialisasi form data saat modal terbuka
    useEffect(() => {
      if (isAddUserModalOpen) {
        setFormData({
          name: newUserData.name,
          email: newUserData.email,
          role: newUserData.role,
          site: newUserData.site,
          status: newUserData.status,
        });
      }
    }, [isAddUserModalOpen]);

    const handleFormChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      
      // Clear error jika ada
      if (userFormErrors[field]) {
        setUserFormErrors(prev => ({
          ...prev,
          [field]: null
        }));
      }
    };

    const handleSubmit = () => {
      const errors = validateUserForm(formData);
      if (Object.keys(errors).length > 0) {
        setUserFormErrors(errors);
        return;
      }

      // Update newUserData di parent component
      setNewUserData({
        name: formData.name,
        email: formData.email,
        role: formData.role,
        site: formData.site,
        status: formData.status,
      });

      // Panggil handleAddUser
      const newUser = {
        id: usersData.length + 1,
        ...formData,
        lastActive: "Just now",
        initial: formData.name.charAt(0) || "U",
      };

      setUsersData([...usersData, newUser]);
      setIsAddUserModalOpen(false);
      setUserFormErrors({});
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        role: "operator",
        site: "",
        status: "active",
      });
    };

    return (
      isAddUserModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Add New User</h2>
                <p className="text-sm text-gray-600">Create a new user account</p>
              </div>
              <button
                onClick={() => setIsAddUserModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <div className="space-y-4">
                {/* Full Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFormChange("name", e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                  {userFormErrors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {userFormErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                  {userFormErrors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {userFormErrors.email}
                    </p>
                  )}
                </div>

                {/* Role Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => handleFormChange("role", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  >
                    <option value="operator">Operator</option>
                    <option value="hrd">HRD</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Site Field - MENGGUNAKAN DATA TERKINI DARI sitesData */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Site *
                  </label>
                  <select
                    value={formData.site}
                    onChange={(e) => handleFormChange("site", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  >
                    <option value="">Select Site</option>
                    {siteOptions.map((site) => (
                      <option key={site} value={site}>
                        {site}
                      </option>
                    ))}
                  </select>
                  {userFormErrors.site && (
                    <p className="text-red-500 text-xs mt-1">
                      {userFormErrors.site}
                    </p>
                  )}
                </div>

                {/* Status Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => handleFormChange("status", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={() => setIsAddUserModalOpen(false)}
                className="px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-medium"
              >
                <PlusIcon className="w-4 h-4" />
                Add User
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  // ==================== MODAL EDIT USER (FIXED BISA DIKETIK) ====================
  const EditUserModal = () => {
    const [formData, setFormData] = useState(null);

    // Inisialisasi form data saat modal terbuka
    useEffect(() => {
      if (isEditUserModalOpen && editingUser) {
        setFormData({ ...editingUser });
      }
    }, [isEditUserModalOpen, editingUser]);

    const handleFormChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
      
      // Clear error jika ada
      if (userFormErrors[field]) {
        setUserFormErrors(prev => ({
          ...prev,
          [field]: null
        }));
      }
    };

    const handleSubmit = () => {
      if (!formData) return;

      const errors = validateUserForm(formData);
      if (Object.keys(errors).length > 0) {
        setUserFormErrors(errors);
        return;
      }

      // Update user di parent component
      setUsersData(
        usersData.map((user) => 
          user.id === formData.id 
            ? { 
                ...formData, 
                initial: formData.name.charAt(0) 
              } 
            : user
        )
      );
      
      setIsEditUserModalOpen(false);
      setEditingUser(null);
      setUserFormErrors({});
    };

    if (!isEditUserModalOpen || !formData) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Edit User</h2>
              <p className="text-sm text-gray-600">
                Edit user account information
              </p>
            </div>
            <button
              onClick={() => setIsEditUserModalOpen(false)}
              className="p-2 hover:bg-gray-200 rounded-lg transition"
            >
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="p-6 overflow-y-auto flex-1">
            <div className="space-y-4">
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                />
                {userFormErrors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {userFormErrors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) => handleFormChange("email", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                />
                {userFormErrors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {userFormErrors.email}
                  </p>
                )}
              </div>

              {/* Role Field */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Role
                </label>
                <select
                  value={formData.role || "operator"}
                  onChange={(e) => handleFormChange("role", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                >
                  <option value="operator">Operator</option>
                  <option value="hrd">HRD</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Site Field - MENGGUNAKAN DATA TERKINI DARI sitesData */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Site *
                </label>
                <select
                  value={formData.site || ""}
                  onChange={(e) => handleFormChange("site", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                >
                  <option value="">Select Site</option>
                  {siteOptions.map((site) => (
                    <option key={site} value={site}>
                      {site}
                    </option>
                  ))}
                </select>
                {userFormErrors.site && (
                  <p className="text-red-500 text-xs mt-1">
                    {userFormErrors.site}
                  </p>
                )}
              </div>

              {/* Status Field */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Status
                </label>
                <select
                  value={formData.status || "active"}
                  onChange={(e) => handleFormChange("status", e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
            <button
              onClick={() => setIsEditUserModalOpen(false)}
              className="px-4 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 font-medium"
            >
              <PencilIcon className="w-4 h-4" />
              Update User
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ==================== MODAL REVIEW DETAIL ====================
  const ReviewModal = () => {
    if (!selectedReport) return null;

    // Fungsi untuk membuka attachment
    const openAttachment = (fileName) => {
      // Simulasi membuka file
      if (/\.(jpg|jpeg|png|gif|webp)$/i.test(fileName)) {
        // Jika gambar, buka di tab baru
        window.open(
          `https://via.placeholder.com/800x600?text=${encodeURIComponent(
            fileName
          )}`,
          "_blank"
        );
      } else {
        // Jika file lain, download
        downloadAttachment(fileName, 0);
      }
    };

    return (
      isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <div
            ref={reviewModalRef}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Report Details
                </h2>
                <p className="text-sm text-gray-600">
                  {selectedReport.site} - {selectedReport.date}{" "}
                  {selectedReport.time}
                </p>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition"
              >
                <XMarkIcon className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Basic Information
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Site
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedReport.site}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Operator
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedReport.operator}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Date & Time
                      </label>
                      <p className="mt-1 text-sm text-gray-900">
                        {selectedReport.date} {selectedReport.time}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Status
                      </label>
                      <div className="mt-1">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusConfig(selectedReport.status).bgColor} ${getStatusConfig(selectedReport.status).textColor}`}
                        >
                          {(() => {
                            const Icon = getStatusConfig(
                              selectedReport.status
                            ).icon;
                            return <Icon className="w-4 h-4" />;
                          })()}
                          {getStatusConfig(selectedReport.status).text}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Water Parameters
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">
                        pH Level
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedReport.pH}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">
                        Flow Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedReport.flowRate}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">
                        Temperature
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedReport.details.temperature}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-gray-700">TDS</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {selectedReport.details.tds}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Additional Information
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Notes
                  </label>
                  <p className="mt-1 text-sm text-gray-900 bg-gray-50 p-4 rounded-lg">
                    {selectedReport.details.notes}
                  </p>
                </div>

                {selectedReport.details.images &&
                  selectedReport.details.images.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Attachments
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedReport.details.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => openAttachment(image)}
                            className="bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 hover:bg-blue-100 transition flex items-center gap-2"
                          >
                            {/\.(jpg|jpeg|png|gif|webp)$/i.test(image) ? (
                              <PhotoIcon className="w-4 h-4 text-blue-600" />
                            ) : (
                              <DocumentTextIcon className="w-4 h-4 text-blue-600" />
                            )}
                            <p className="text-sm text-blue-700">{image}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end gap-3">
              {selectedReport.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      handleReject(selectedReport.id);
                      setIsReviewModalOpen(false);
                    }}
                    className="px-4 py-2 text-red-600 bg-white border border-red-300 rounded-lg hover:bg-red-50 transition font-medium"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => {
                      handleApprove(selectedReport.id);
                      setIsReviewModalOpen(false);
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    Approve
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
      )
    );
  };

  // ==================== FUNGSI GEOLOKASI ====================
  const handleMapClick = (e, isEditMode = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Batasi posisi dalam peta
    const boundedX = Math.max(10, Math.min(x, rect.width - 10));
    const boundedY = Math.max(10, Math.min(y, rect.height - 10));

    setMapClickPosition({ x: boundedX, y: boundedY });

    // Konversi ke latitude dan longitude (simulasi)
    const lat = ((rect.height - boundedY) / rect.height) * 180 - 90;
    const lng = (boundedX / rect.width) * 360 - 180;

    if (isEditMode) {
      handleEditInputChange("latitude", lat.toFixed(6));
      handleEditInputChange("longitude", lng.toFixed(6));
    } else {
      handleInputChange("latitude", lat.toFixed(6));
      handleInputChange("longitude", lng.toFixed(6));
    }
  };

  // Fungsi untuk mendapatkan daftar kota berdasarkan provinsi yang dipilih
  const getCityOptions = () => {
    if (!newSiteData.province) return [];
    return kotaByProvinsi[newSiteData.province] || [];
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

      {/* Sidebar */}
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

        {/* Sidebar menu - DITAMBAHKAN MENU HELP */}
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
        <div className="p-4 mt-auto">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
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
                    {/* User Info Section */}
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

        {/* Modal Review Detail - TIKET */}
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
                    Ticket #{selectedTicket.id} - {selectedTicket.operatorName}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Provide solution for the reported problem
                  </p>
                </div>
                <button
                  onClick={() => setIsTicketModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Ticket Information */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                            #{selectedTicket.id}
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Submitted Date
                          </label>
                          <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                            {selectedTicket.submittedDate} at{" "}
                            {selectedTicket.submittedTime}
                          </p>
                        </div>
                      </div>

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
                          Site
                        </label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                          {selectedTicket.site}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                          </label>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getPriorityConfig(selectedTicket.priority).bgColor} ${getPriorityConfig(selectedTicket.priority).textColor}`}
                          >
                            {getPriorityConfig(selectedTicket.priority).label}
                          </span>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                          </label>
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryConfig(selectedTicket.category).bgColor} ${getCategoryConfig(selectedTicket.category).textColor}`}
                          >
                            {getCategoryConfig(selectedTicket.category).label}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Status
                        </label>
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${getTicketStatusConfig(selectedTicket.status).bgColor} ${getTicketStatusConfig(selectedTicket.status).textColor} border`}
                        >
                          {(() => {
                            const Icon = getTicketStatusConfig(
                              selectedTicket.status
                            ).icon;
                            return <Icon className="w-4 h-4" />;
                          })()}
                          {getTicketStatusConfig(selectedTicket.status).label}
                        </span>
                      </div>
                    </div>

                    {/* Problem Description */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                        Problem Description
                      </h3>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Problem Reported
                        </label>
                        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 min-h-[120px]">
                          <p className="text-gray-900 whitespace-pre-line">
                            {selectedTicket.problem}
                          </p>
                        </div>
                      </div>

                      {selectedTicket.attachments &&
                        selectedTicket.attachments.length > 0 && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Attachments
                            </label>
                            <div className="space-y-2">
                              {selectedTicket.attachments.map((file, index) => {
                                const isImage =
                                  /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(file);
                                const isVideo =
                                  /\.(mp4|mov|avi|wmv|flv|mkv)$/i.test(file);
                                const isPDF = /\.pdf$/i.test(file);
                                const isDocument =
                                  /\.(doc|docx|txt|rtf)$/i.test(file);

                                return (
                                  <div
                                    key={index}
                                    className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3"
                                  >
                                    <div className="flex items-center gap-3">
                                      {isImage ? (
                                        <div className="p-2 bg-blue-100 rounded-lg">
                                          <PhotoIcon className="w-5 h-5 text-blue-600" />
                                        </div>
                                      ) : isVideo ? (
                                        <div className="p-2 bg-purple-100 rounded-lg">
                                          <FilmIcon className="w-5 h-5 text-purple-600" />
                                        </div>
                                      ) : isPDF ? (
                                        <div className="p-2 bg-red-100 rounded-lg">
                                          <DocumentTextIcon className="w-5 h-5 text-red-600" />
                                        </div>
                                      ) : (
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                          <DocumentChartBarIcon className="w-5 h-5 text-gray-600" />
                                        </div>
                                      )}

                                      <div className="min-w-0">
                                        <p className="text-sm font-medium text-blue-700 truncate">
                                          {file}
                                        </p>
                                        <p className="text-xs text-blue-500">
                                          {isImage
                                            ? "Image"
                                            : isVideo
                                              ? "Video"
                                              : isPDF
                                                ? "PDF"
                                                : isDocument
                                                  ? "Document"
                                                  : "File"}
                                        </p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      {isImage && (
                                        <button
                                          onClick={() => {
                                            setPreviewImage(file);
                                            setIsImagePreviewOpen(true);
                                          }}
                                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 rounded-lg transition"
                                          title="Preview"
                                        >
                                          <EyeIcon className="w-4 h-4" />
                                        </button>
                                      )}

                                      <button
                                        onClick={() =>
                                          downloadAttachment(
                                            file,
                                            selectedTicket.id
                                          )
                                        }
                                        className="p-2 text-green-600 hover:text-green-800 hover:bg-green-100 rounded-lg transition flex items-center gap-1"
                                        title="Download"
                                      >
                                        <ArrowDownTrayIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">
                                          Download
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                      {selectedTicket.solution && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Previous Solution
                          </label>
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p className="text-green-800 whitespace-pre-line">
                              {selectedTicket.solution}
                            </p>
                            {selectedTicket.resolvedDate && (
                              <p className="text-xs text-green-600 mt-2">
                                Resolved on {selectedTicket.resolvedDate} by{" "}
                                {selectedTicket.resolvedBy}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Solution Form */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Provide Solution
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Status
                        </label>
                        <div className="flex flex-wrap gap-3">
                          {["open", "pending", "resolved"].map((status) => {
                            const config = getTicketStatusConfig(status);
                            const Icon = config.icon;
                            return (
                              <button
                                key={status}
                                onClick={() => setTicketStatus(status)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
                                  ticketStatus === status
                                    ? `${config.bgColor} ${config.textColor} border-gray-300`
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                                {config.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Solution / Response
                        </label>
                        <textarea
                          value={solutionText}
                          onChange={(e) => setSolutionText(e.target.value)}
                          placeholder="Enter your solution, instructions, or request for more information..."
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none bg-white text-gray-900"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Provide clear instructions or solution. If more
                          information is needed from operator, explain what is
                          required.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600">
                  Operator: {selectedTicket.operatorName} • Site:{" "}
                  {selectedTicket.site}
                </div>
                <div className="flex gap-3 flex-wrap justify-center">
                  <button
                    onClick={() => setIsTicketModalOpen(false)}
                    className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition font-medium"
                  >
                    Cancel
                  </button>

                  {selectedTicket.status !== "resolved" && (
                    <button
                      onClick={handleReturnToOperator}
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition font-medium"
                    >
                      <ArrowPathIcon className="w-4 h-4" />
                      Request More Info
                    </button>
                  )}

                  <button
                    onClick={handleSubmitSolution}
                    disabled={
                      ticketStatus === "resolved" && !solutionText.trim()
                    }
                    className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition font-medium ${
                      ticketStatus === "resolved" && !solutionText.trim()
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-teal-600 hover:bg-teal-700"
                    }`}
                  >
                    <PaperAirplaneIcon className="w-4 h-4" />
                    {ticketStatus === "resolved"
                      ? "Submit Solution"
                      : "Update Ticket"}
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
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end">
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

        {/* Modal Add User */}
        <AddUserModal />

        {/* Modal Edit User */}
        <EditUserModal />

        {/* Modal Review Detail */}
        <ReviewModal />

        {/* Modal Add Site */}
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
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Contoh: Surabaya - Site C"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Provinsi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Provinsi <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newSiteData.province}
                      onChange={(e) => handleProvinceChange(e.target.value, false)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        formErrors.province ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Pilih Provinsi</option>
                      {provinsiList.map((provinsi) => (
                        <option key={provinsi} value={provinsi}>
                          {provinsi}
                        </option>
                      ))}
                    </select>
                    {formErrors.province && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.province}
                      </p>
                    )}
                  </div>

                  {/* Kota */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Kota <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={newSiteData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      disabled={!newSiteData.province}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        formErrors.city ? "border-red-500" : "border-gray-300"
                      } ${!newSiteData.province ? "bg-gray-100 cursor-not-allowed" : ""}`}
                    >
                      <option value="">
                        {newSiteData.province ? "Pilih Kota" : "Pilih provinsi terlebih dahulu"}
                      </option>
                      {newSiteData.province && 
                        kotaByProvinsi[newSiteData.province]?.map((kota) => (
                          <option key={kota} value={kota}>
                            {kota}
                          </option>
                        ))}
                    </select>
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

                  {/* GEOLOKASI PINPOINT */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Geolokasi (Opsional)
                    </label>
                    <div className="border border-gray-300 rounded-lg p-3 sm:p-4 bg-white">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        Klik pada peta untuk menentukan lokasi atau masukkan
                        koordinat secara manual
                      </p>

                      {/* Peta Simulasi */}
                      <div className="relative border border-gray-300 rounded-lg overflow-hidden mb-3 sm:mb-4">
                        <div
                          className="w-full h-32 sm:h-48 bg-gradient-to-r from-blue-50 to-green-50 relative cursor-pointer"
                          onClick={handleMapClick}
                        >
                          {/* Grid peta */}
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                          {/* Marker */}
                          <div
                            className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                            style={{
                              left: `${mapClickPosition.x}%`,
                              top: `${mapClickPosition.y}%`,
                            }}
                          >
                            <MapPinIcon className="w-6 h-6 text-red-600 drop-shadow-lg" />
                          </div>

                          {/* Label koordinat */}
                          <div
                            className="absolute bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm"
                            style={{
                              left: `${Math.min(mapClickPosition.x + 5, 85)}%`,
                              top: `${Math.max(mapClickPosition.y - 15, 10)}%`,
                            }}
                          >
                            {newSiteData.latitude && newSiteData.longitude
                              ? `${newSiteData.latitude}, ${newSiteData.longitude}`
                              : "Klik untuk memilih"}
                          </div>
                        </div>
                      </div>

                      {/* Input Koordinat */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Latitude
                          </label>
                          <input
                            type="text"
                            value={newSiteData.latitude}
                            onChange={(e) =>
                              handleInputChange("latitude", e.target.value)
                            }
                            placeholder="-6.2088"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Longitude
                          </label>
                          <input
                            type="text"
                            value={newSiteData.longitude}
                            onChange={(e) =>
                              handleInputChange("longitude", e.target.value)
                            }
                            placeholder="106.8456"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 mt-2">
                        Koordinat akan otomatis terisi saat mengklik peta
                      </p>
                    </div>
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
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Provinsi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Provinsi <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={editingSite.province}
                      onChange={(e) => handleProvinceChange(e.target.value, true)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        formErrors.province ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Pilih Provinsi</option>
                      {provinsiList.map((provinsi) => (
                        <option key={provinsi} value={provinsi}>
                          {provinsi}
                        </option>
                      ))}
                    </select>
                    {formErrors.province && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.province}
                      </p>
                    )}
                  </div>

                  {/* Kota */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Kota <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={editingSite.city}
                      onChange={(e) => handleEditInputChange("city", e.target.value)}
                      disabled={!editingSite.province}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white text-gray-900 text-sm ${
                        formErrors.city ? "border-red-500" : "border-gray-300"
                      } ${!editingSite.province ? "bg-gray-100 cursor-not-allowed" : ""}`}
                    >
                      <option value="">
                        {editingSite.province ? "Pilih Kota" : "Pilih provinsi terlebih dahulu"}
                      </option>
                      {editingSite.province && 
                        kotaByProvinsi[editingSite.province]?.map((kota) => (
                          <option key={kota} value={kota}>
                            {kota}
                          </option>
                        ))}
                    </select>
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

                  {/* GEOLOKASI PINPOINT */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1 sm:mb-2">
                      Geolokasi (Opsional)
                    </label>
                    <div className="border border-gray-300 rounded-lg p-3 sm:p-4 bg-white">
                      <p className="text-xs sm:text-sm text-gray-600 mb-2">
                        Klik pada peta untuk menentukan lokasi atau masukkan
                        koordinat secara manual
                      </p>

                      {/* Peta Simulasi */}
                      <div className="relative border border-gray-300 rounded-lg overflow-hidden mb-3 sm:mb-4">
                        <div
                          className="w-full h-32 sm:h-48 bg-gradient-to-r from-blue-50 to-green-50 relative cursor-pointer"
                          onClick={(e) => handleMapClick(e, true)}
                        >
                          {/* Grid peta */}
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

                          {/* Marker */}
                          <div
                            className="absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                            style={{
                              left: `${
                                editingSite.latitude
                                  ? 50 + (parseFloat(editingSite.longitude) || 0) * 0.1
                                  : 50
                              }%`,
                              top: `${
                                editingSite.latitude
                                  ? 50 - (parseFloat(editingSite.latitude) || 0) * 0.1
                                  : 50
                              }%`,
                            }}
                          >
                            <MapPinIcon className="w-6 h-6 text-red-600 drop-shadow-lg" />
                          </div>

                          {/* Label koordinat */}
                          <div
                            className="absolute bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-sm"
                            style={{
                              left: "60%",
                              top: "20%",
                            }}
                          >
                            {editingSite.latitude && editingSite.longitude
                              ? `${editingSite.latitude}, ${editingSite.longitude}`
                              : "Klik untuk memilih"}
                          </div>
                        </div>
                      </div>

                      {/* Input Koordinat */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Latitude
                          </label>
                          <input
                            type="text"
                            value={editingSite.latitude}
                            onChange={(e) =>
                              handleEditInputChange("latitude", e.target.value)
                            }
                            placeholder="-6.2088"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                            Longitude
                          </label>
                          <input
                            type="text"
                            value={editingSite.longitude}
                            onChange={(e) =>
                              handleEditInputChange("longitude", e.target.value)
                            }
                            placeholder="106.8456"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 mt-2">
                        Koordinat akan otomatis terisi saat mengklik peta
                      </p>
                    </div>
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

        {/* HELP/TICKET CONTENT */}
        {activeMenu === "help" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Help Tickets Management
                </h1>
                <p className="text-gray-600 text-sm">
                  Review and resolve operator problem tickets
                </p>
              </div>
              <div className="text-sm text-gray-500 bg-gray-100 px-3 py-2 rounded-lg">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>

            {/* Stats Cards for Tickets */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 lg:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Open Tickets
                  </h3>
                  <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
                    <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {openTickets}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Pending Tickets
                  </h3>
                  <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
                    <ArrowPathIcon className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {pendingTickets}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    Resolved Tickets
                  </h3>
                  <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
                    <CheckCircleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {resolvedTickets}
                </p>
              </div>

              <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="text-gray-700 text-xs sm:text-sm font-medium">
                    High Priority
                  </h3>
                  <div className="p-1 sm:p-2 bg-red-100 rounded-lg">
                    <ExclamationTriangleIcon className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                  </div>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {highPriorityTickets}
                </p>
              </div>
            </div>

            {/* Search and Filter for Tickets */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 mb-4 sm:mb-6">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 items-start lg:items-center">
                <div className="relative flex-1 w-full">
                  <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search tickets by operator, site, or problem..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["all", "open", "pending", "resolved"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setTicketFilter(status)}
                      className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition ${
                        ticketFilter === status
                          ? "bg-teal-600 text-white shadow-sm"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status === "all"
                        ? "All Status"
                        : status.charAt(0).toUpperCase() + status.slice(1)}
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
                <div className="col-span-1">Ticket ID</div>
                <div className="col-span-2">Operator</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-3">Problem</div>
                <div className="col-span-1">Priority</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredTickets.length === 0 ? (
                  <div className="p-6 sm:p-8 text-center text-gray-500 text-sm">
                    No tickets found matching your criteria.
                  </div>
                ) : (
                  filteredTickets.map((ticket) => {
                    const statusConfig = getTicketStatusConfig(ticket.status);
                    const priorityConfig = getPriorityConfig(ticket.priority);
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
                                Ticket #{ticket.id}
                              </p>
                              <p className="text-xs text-gray-500">
                                {ticket.submittedDate} {ticket.submittedTime}
                              </p>
                            </div>
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} border`}
                            >
                              <StatusIcon className="w-3 h-3" />
                              {statusConfig.label}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">
                                Operator
                              </p>
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {ticket.operatorName}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Site</p>
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {ticket.site}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Problem
                            </p>
                            <p className="text-sm text-gray-900 line-clamp-2">
                              {ticket.problem}
                            </p>
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.textColor}`}
                            >
                              {priorityConfig.label} Priority
                            </span>
                            <button
                              onClick={() => handleViewTicket(ticket)}
                              className="flex items-center gap-1 text-teal-600 hover:text-teal-800 transition px-2 py-1.5 rounded-lg hover:bg-teal-50 border border-teal-200 text-xs font-medium"
                            >
                              <EyeIcon className="w-3 h-3" />
                              View Details
                            </button>
                          </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:flex col-span-1 items-center">
                          <p className="font-medium text-gray-900 text-sm">
                            #{ticket.id}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={ticket.operatorName}
                          >
                            {ticket.operatorName}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={ticket.site}
                          >
                            {ticket.site}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-3 items-center">
                          <p
                            className="text-gray-700 text-sm truncate"
                            title={ticket.problem}
                          >
                            {ticket.problem}
                          </p>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.textColor}`}
                          >
                            {priorityConfig.label}
                          </span>
                        </div>

                        <div className="hidden lg:flex col-span-2 items-center">
                          <span
                            className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} border`}
                          >
                            <StatusIcon className="w-3 h-3" />
                            {statusConfig.label}
                          </span>
                        </div>

                        <div className="hidden lg:flex col-span-1 items-center justify-center">
                          <button
                            onClick={() => handleViewTicket(ticket)}
                            className="p-1.5 text-teal-600 hover:text-teal-800 hover:bg-teal-50 rounded-lg transition border border-transparent hover:border-teal-200"
                            title="View Ticket Details"
                          >
                            <EyeIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Information Box */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-3">
                <InformationCircleIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-blue-900 text-sm mb-1">
                    How to Handle Tickets
                  </h4>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>
                      • <strong>Open</strong> - Ticket baru yang belum diproses
                    </li>
                    <li>
                      • <strong>Pending</strong> - Memerlukan informasi tambahan
                      dari operator
                    </li>
                    <li>
                      • <strong>Resolved</strong> - Solusi telah diberikan dan
                      tiket ditutup
                    </li>
                    <li>
                      • Berikan solusi yang jelas dan spesifik untuk setiap
                      masalah
                    </li>
                    <li>
                      • Jika perlu informasi tambahan, gunakan fitur "Request
                      More Info"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DASHBOARD CONTENT - DIRIVISI */}
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
            </div>

            {/* TOP KPIs - Rangkuman Semua Menu */}
            <div className="mb-6 lg:mb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                {
                  label: "Total Sites",
                  value: totalSites,
                  percent: `${Math.round((activeSites / totalSites) * 100)}% Active`,
                  icon: MapPinIcon,
                  color: "bg-teal-100 text-teal-600",
                  menu: "sites",
                },
                {
                  label: "Active Operators",
                  value: totalOperators,
                  percent: `${usersData.filter((u) => u.status === "active").length} Active Users`,
                  icon: UsersIcon,
                  color: "bg-blue-100 text-blue-600",
                  menu: "users",
                },
                {
                  label: "Daily Reports",
                  value: totalReports,
                  percent: `${complianceRate}% Approved`,
                  icon: DocumentChartBarIcon,
                  color: "bg-purple-100 text-purple-600",
                  menu: "reports",
                },
                {
                  label: "Help Tickets",
                  value: ticketsData.length,
                  percent: `${Math.round((resolvedTickets / ticketsData.length) * 100)}% Resolved`,
                  icon: ChatBubbleLeftRightIcon,
                  color: "bg-orange-100 text-orange-600",
                  menu: "help",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setActiveMenu(item.menu)}
                  >
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <p className="text-xs sm:text-sm text-gray-600 font-medium">
                        {item.label}
                      </p>
                      <div className={`p-1 sm:p-2 rounded-lg ${item.color}`}>
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      {item.percent}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SECOND ROW - Detail Rangkuman dari Setiap Menu */}
            <div className="mb-6 lg:mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {/* Sites Summary */}
              {/* Sites Status dengan Pie Chart */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Sites Status
                  </h3>
                  <button
                    onClick={() => setActiveMenu("sites")}
                    className="text-teal-600 text-sm font-medium hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
                  <div className="relative flex flex-col items-center">
                    {/* Container untuk pie chart dengan overflow visible dan ukuran yang cukup */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: "140px",
                        height: "140px",
                        overflow: "visible",
                      }}
                    >
                      <svg
                        width="120"
                        height="120"
                        className="absolute cursor-pointer transition-all duration-300"
                        style={{
                          transform:
                            hoveredSitePie !== null ? "scale(1.1)" : "scale(1)",
                        }}
                        viewBox="0 0 100 100"
                      >
                        {sitesPieChartPaths.map((item, index) => {
                          // Fungsi untuk membuat warna lebih gelap saat hover
                          const darkenColor = (color) => {
                            // Jika warna dalam format hex (#RRGGBB)
                            if (color.startsWith("#")) {
                              const hex = color.replace("#", "");
                              const r = parseInt(hex.substr(0, 2), 16);
                              const g = parseInt(hex.substr(2, 2), 16);
                              const b = parseInt(hex.substr(4, 2), 16);

                              // Gelapkan 20%
                              const darkerR = Math.floor(r * 0.8);
                              const darkerG = Math.floor(g * 0.8);
                              const darkerB = Math.floor(b * 0.8);

                              return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
                            }
                            return color; // Kembalikan warna asli jika bukan hex
                          };

                          return (
                            <path
                              key={item.status}
                              d={item.path}
                              fill={
                                hoveredSitePie === index
                                  ? darkenColor(item.color)
                                  : item.color
                              }
                              className="transition-all duration-300"
                              stroke="white"
                              strokeWidth="2"
                              onMouseEnter={() => setHoveredSitePie(index)}
                              onMouseLeave={() => setHoveredSitePie(null)}
                            />
                          );
                        })}
                      </svg>
                    </div>

                    <div className="text-center mt-2 sm:mt-4">
                      <div className="text-xl sm:text-2xl font-bold text-gray-800">
                        {activePercentage}%
                      </div>
                      <div className="text-sm text-gray-600">Active</div>
                    </div>

                    {hoveredSitePie !== null && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm z-10 shadow-lg">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded"
                            style={{
                              backgroundColor:
                                sitesPieChartPaths[hoveredSitePie].color,
                            }}
                          ></div>
                          <span>
                            {sitesPieChartPaths[hoveredSitePie].status}:{" "}
                            {sitesPieChartPaths[hoveredSitePie].value} (
                            {sitesPieChartPaths[hoveredSitePie].percentage}%)
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 sm:space-y-3 lg:space-y-4 flex-1 w-full">
                    {sitesPieChartData.map((item, index) => (
                      <div
                        key={item.status}
                        className={`flex items-center justify-between p-2 sm:p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                          hoveredSitePie === index
                            ? "bg-gray-50 transform scale-105"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredSitePie(index)}
                        onMouseLeave={() => setHoveredSitePie(null)}
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
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Total Sites: {totalSites} | Active: {activePercentage}%
                  </p>
                </div>
              </div>

              {/* Report Status - DENGAN PIE CHART */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
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
                    {/* Container untuk pie chart dengan overflow visible dan ukuran yang cukup */}
                    <div
                      className="relative flex items-center justify-center"
                      style={{
                        width: "140px",
                        height: "140px",
                        overflow: "visible",
                      }}
                    >
                      <svg
                        width="120"
                        height="120"
                        className="absolute cursor-pointer transition-all duration-300"
                        style={{
                          transform:
                            hoveredPie !== null ? "scale(1.1)" : "scale(1)",
                        }}
                        viewBox="0 0 100 100"
                      >
                        {pieChartData.map((item, index) => {
                          // Fungsi untuk membuat warna lebih gelap saat hover
                          const darkenColor = (color) => {
                            // Jika warna dalam format hex (#RRGGBB)
                            if (color.startsWith("#")) {
                              const hex = color.replace("#", "");
                              const r = parseInt(hex.substr(0, 2), 16);
                              const g = parseInt(hex.substr(2, 2), 16);
                              const b = parseInt(hex.substr(4, 2), 16);

                              // Gelapkan 20%
                              const darkerR = Math.floor(r * 0.8);
                              const darkerG = Math.floor(g * 0.8);
                              const darkerB = Math.floor(b * 0.8);

                              return `rgb(${darkerR}, ${darkerG}, ${darkerB})`;
                            }
                            return color; // Kembalikan warna asli jika bukan hex
                          };

                          return (
                            <path
                              key={item.status}
                              d={item.path}
                              fill={
                                hoveredPie === index
                                  ? darkenColor(item.color)
                                  : item.color
                              }
                              className="transition-all duration-300"
                              stroke="white"
                              strokeWidth="2"
                              onMouseEnter={() => setHoveredPie(index)}
                              onMouseLeave={() => setHoveredPie(null)}
                            />
                          );
                        })}
                      </svg>
                    </div>

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

            {/* THIRD ROW - Users & Tickets Summary */}
            <div className="mb-6 lg:mb-8 grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {/* Users Summary */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Users Overview
                  </h3>
                  <button
                    onClick={() => setActiveMenu("users")}
                    className="text-teal-600 text-sm font-medium hover:underline"
                  >
                    View All →
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Operators</p>
                    <p className="text-lg font-bold text-gray-900">
                      {usersData.filter((u) => u.role === "operator").length}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">HRD</p>
                    <p className="text-lg font-bold text-gray-900">
                      {usersData.filter((u) => u.role === "hrd").length}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Admins</p>
                    <p className="text-lg font-bold text-gray-900">
                      {usersData.filter((u) => u.role === "admin").length}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">Active</p>
                    <p className="text-lg font-bold text-gray-900">
                      {usersData.filter((u) => u.status === "active").length}
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Last user active:{" "}
                    {usersData.find((u) => u.role === "admin")?.lastActive ||
                      "Today"}
                  </p>
                </div>
              </div>

              {/* Tickets Summary */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-4 sm:mb-5">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    Tickets Status
                  </h3>
                  <button
                    onClick={() => setActiveMenu("help")}
                    className="text-teal-600 text-sm font-medium hover:underline"
                  >
                    View All →
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Open</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {openTickets}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Pending</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {pendingTickets}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">Resolved</span>
                    </div>
                    <span className="font-medium text-gray-900">
                      {resolvedTickets}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    High Priority Tickets: {highPriorityTickets}
                  </p>
                </div>
              </div>
            </div>

            {/* FOURTH ROW - Recent Activity from All Menus */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-md">
              <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-4 sm:mb-5">
                Recent Activity
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Recent Sites */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPinIcon className="w-5 h-5 text-teal-600" />
                    <h4 className="font-medium text-gray-900">Recent Sites</h4>
                  </div>
                  <div className="space-y-2">
                    {sitesData.slice(0, 3).map((site) => (
                      <div
                        key={site.id}
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-gray-700 truncate">
                          {site.name}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getSiteStatusConfig(site.status).bgColor} ${getSiteStatusConfig(site.status).textColor}`}
                        >
                          {site.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Users */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">Recent Users</h4>
                  </div>
                  <div className="space-y-2">
                    {usersData.slice(0, 3).map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-gray-700 truncate">
                          {user.name}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                        >
                          {user.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Reports */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <DocumentChartBarIcon className="w-5 h-5 text-purple-600" />
                    <h4 className="font-medium text-gray-900">
                      Recent Reports
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {reportsData.slice(0, 3).map((report) => (
                      <div
                        key={report.id}
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-gray-700 truncate">
                          {report.site}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusConfig(report.status).bgColor} ${getStatusConfig(report.status).textColor}`}
                        >
                          {report.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Tickets */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-orange-600" />
                    <h4 className="font-medium text-gray-900">
                      Recent Tickets
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {ticketsData.slice(0, 3).map((ticket) => (
                      <div
                        key={ticket.id}
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-gray-700 truncate">
                          {ticket.operatorName}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getTicketStatusConfig(ticket.status).bgColor} ${getTicketStatusConfig(ticket.status).textColor}`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SITES CONTENT */}
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

            {/* Tabel Sites */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* HEADER TABEL */}
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

              {/* BODY TABEL */}
              <div className="divide-y divide-gray-200">
                {filteredSites.map((site) => {
                  const statusConfig = getSiteStatusConfig(site.status);
                  return (
                    <div
                      key={site.id}
                      className="lg:grid lg:grid-cols-12 lg:gap-2 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 hover:bg-gray-50 transition items-center"
                    >
                      <div className="lg:hidden space-y-3">
                        {/* Tampilan mobile */}
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

                      {/* Tampilan Desktop */}
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

        {/* USERS CONTENT */}
        {activeMenu === "users" && (
          <div className="px-3 sm:px-4 lg:px-6 xl:px-8 py-4 max-w-screen-2xl mx-auto">
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

            {/* Stats Cards */}
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

            {/* Search and Filter */}
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

            {/* Tabel Users */}
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

              {/* BODY TABEL */}
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
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop View */}
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
                          onClick={() => handleDeleteUser(user.id)}
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

        {/* REPORTS CONTENT */}
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

            {/* Stats Cards */}
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

            {/* Search and Filter */}
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
                              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} border`}
                            >
                              <StatusIcon className="w-3 h-3" />
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
                            className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor} border`}
                          >
                            <StatusIcon className="w-3 h-3" />
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
        {/* MODAL PREVIEW IMAGE */}
        {isImagePreviewOpen && previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[10000] p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Image Preview
                  </h2>
                  <p className="text-sm text-gray-600">{previewImage}</p>
                </div>
                <button
                  onClick={() => {
                    setIsImagePreviewOpen(false);
                    setPreviewImage(null);
                  }}
                  className="p-2 hover:bg-gray-200 rounded-lg transition"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-4 flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    Size: 800×600 • Type: JPEG
                  </div>
                  <button
                    onClick={() =>
                      downloadAttachment(
                        previewImage,
                        ticketsData.find((t) =>
                          t.attachments?.includes(previewImage)
                        )?.id || 0
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Download Image
                  </button>
                </div>

                <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100">
                  <div className="flex items-center justify-center h-[60vh]">
                    <div className="text-center">
                      <div className="text-gray-700 font-medium mb-2">
                        Preview: {previewImage}
                      </div>
                      <div className="text-gray-500 text-sm mb-4">
                        (Simulasi preview gambar)
                      </div>
                      <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-lg">
                        <PhotoIcon className="w-16 h-16 mx-auto mb-2" />
                        <p>Image Preview</p>
                        <p className="text-sm opacity-90">{previewImage}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  <p>
                    In a real application, this would display the actual image
                    from your server.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}




