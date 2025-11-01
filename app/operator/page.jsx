// // ==================================MENU DASHBOARD OPERATOR : START =================================================================
// // ==================================MENU DASHBOARD OPERATOR : START =================================================================
// // ==================================MENU DASHBOARD OPERATOR : START =================================================================
// // ==================================MENU DASHBOARD OPERATOR : START =================================================================

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
// } from "@heroicons/react/24/outline";

// export default function Operator() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const [hoveredPie, setHoveredPie] = useState(null);
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "reports", name: "Daily Reports", icon: DocumentChartBarIcon },
//     { id: "attendance", name: "Presensi", icon: MapPinIcon },
//     { id: "settings", name: "Help Desk", icon: CogIcon },
//   ];

//   // Data untuk pH Level Trends
//   const pHData = [
//     { day: "Mon", value: 6.5 },
//     { day: "Tue", value: 6.8 },
//     { day: "Wed", value: 7.0 },
//     { day: "Thu", value: 7.2 },
//     { day: "Fri", value: 7.1 },
//     { day: "Sat", value: 6.9 },
//     { day: "Sun", value: 6.7 },
//   ];

//   // Data untuk Flow Rate Trends
//   const flowRateData = [
//     { day: "Mon", value: 450 },
//     { day: "Tue", value: 520 },
//     { day: "Wed", value: 480 },
//     { day: "Thu", value: 550 },
//     { day: "Fri", value: 500 },
//     { day: "Sat", value: 420 },
//     { day: "Sun", value: 380 },
//   ];

//   // Data untuk Recent Activity
//   const recentActivityData = [
//     {
//       action: "Daily report submitted",
//       time: "2 hours ago",
//       status: "approved",
//     },
//     {
//       action: "pH level recorded",
//       time: "4 hours ago",
//       status: "approved",
//     },
//     {
//       action: "Flow rate measurement",
//       time: "6 hours ago",
//       status: "approved",
//     },
//   ];

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
//             <h1 className="text-xl font-bold text-gray-800">SIDPTIMA</h1>
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
//                   <button
//                     onClick={() => {
//                       setActiveMenu(item.id);
//                       setIsSidebarOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
//                       ${
//                         activeMenu === item.id
//                           ? "bg-teal-50 text-teal-700 border-r-2 border-teal-600"
//                           : "text-gray-700 hover:bg-gray-100"
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

//         {/* Operator badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 O
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Operator SIDPTIMA</p>
//                 <p className="text-sm text-gray-600">Operator</p>
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
//               <button className="p-2 text-gray-600 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

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
//                     className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     O
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
//                     className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <button
//                       onClick={() => {
//                         setDropdownOpen(false);
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

//         {/* DASHBOARD CONTENT */}
//         {activeMenu === "dashboard" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Welcome Section */}
//             <div className="mb-6">
//               <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                 Operator Dashboard
//               </h2>
//               <p className="text-gray-600 mt-1">
//                 Welcome back! Monitor your daily activities and IPAL status
//               </p>
//             </div>

//             {/* TOP KPIs - DIKECILKAN MENJADI PERSEGI PANJANG */}
//             <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
//               {[
//                 {
//                   label: "Reports Submitted",
//                   value: 24,
//                   percent: "+12%",
//                   icon: DocumentChartBarIcon,
//                 },
//                 {
//                   label: "Attendance Rate",
//                   value: "98%",
//                   percent: "+2%",
//                   icon: ChartBarIcon,
//                 },
//                 {
//                   label: "Next Shift",
//                   value: "Tomorrow",
//                   subValue: "08:00",
//                   icon: ClockIcon,
//                 },
//                 {
//                   label: "Current Site",
//                   value: "Jakarta Utara A",
//                   icon: MapPinIcon,
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <p className="text-gray-600 text-sm font-medium">
//                         {item.label}
//                       </p>
//                       <div className="p-2 rounded-lg bg-blue-50">
//                         <Icon className="w-4 h-4 text-blue-600" />
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-gray-900">
//                         {item.value}
//                       </p>
//                       {item.subValue && (
//                         <p className="text-sm text-gray-600 mt-1">
//                           {item.subValue}
//                         </p>
//                       )}
//                     </div>
//                     {item.percent && (
//                       <p
//                         className={`text-xs font-medium mt-1 ${
//                           item.percent.startsWith("+")
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {item.percent} vs last month
//                       </p>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* TODAY'S LATEST READINGS - DIKECILKAN MENJADI PERSEGI PANJANG */}
//             <div className="mb-8">
//               <h3 className="text-lg font-bold text-gray-900 mb-4">
//                 Today's Latest Readings
//               </h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {[
//                   {
//                     label: "pH Level",
//                     value: "7.2",
//                     status: "normal",
//                   },
//                   {
//                     label: "Flow Rate",
//                     value: "450 L/h",
//                     status: "normal",
//                   },
//                   {
//                     label: "TDS",
//                     value: "480 ppm",
//                     status: "normal",
//                   },
//                   {
//                     label: "EC",
//                     value: "720 μS/cm",
//                     status: "normal",
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-4 rounded-xl shadow-sm border border-gray-200"
//                   >
//                     <div className="flex justify-between items-start mb-3">
//                       <div>
//                         <p className="text-gray-600 text-sm font-medium">
//                           {item.label}
//                         </p>
//                         <p className="text-xl font-bold text-gray-900 mt-1">
//                           {item.value}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div
//                         className={`w-2 h-2 rounded-full ${
//                           item.status === "normal"
//                             ? "bg-green-500"
//                             : "bg-red-500"
//                         }`}
//                       ></div>
//                       <span
//                         className={`text-xs font-medium ${
//                           item.status === "normal"
//                             ? "text-green-600"
//                             : "text-red-600"
//                         }`}
//                       >
//                         {item.status}
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Quick Menu Cards */}
//             <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {[
//                 {
//                   label: "Daily Report",
//                   icon: DocumentTextIcon,
//                   description: "Submit daily monitoring reports",
//                 },
//                 {
//                   label: "Attendance",
//                   icon: MapPinIcon,
//                   description: "Check-in and attendance records",
//                 },
//                 {
//                   label: "Schedule",
//                   icon: CalendarIcon,
//                   description: "View work schedule and shifts",
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="p-3 rounded-lg bg-blue-50">
//                         <Icon className="w-6 h-6 text-blue-600" />
//                       </div>
//                       <div>
//                         <p className="font-semibold text-gray-900">
//                           {item.label}
//                         </p>
//                         <p className="text-sm text-gray-600 mt-1">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Charts Section */}
//             <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* pH Level Trends */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-6">
//                   pH Level Trends (7 Days)
//                 </h3>
//                 <div className="relative">
//                   {/* Y-axis labels */}
//                   <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                     <span>7.25</span>
//                     <span>6.75</span>
//                     <span>6.5</span>
//                   </div>

//                   {/* Chart area */}
//                   <div className="ml-8">
//                     <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//                       {pHData.map((data, index) => (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           {/* Bar */}
//                           <div
//                             className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
//                             style={{
//                               height: `${((data.value - 6.0) / 1.5) * 120}px`,
//                             }}
//                             onMouseEnter={() => setHoveredBar(`ph-${index}`)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           >
//                             {hoveredBar === `ph-${index}` && (
//                               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                 {data.value}
//                               </div>
//                             )}
//                           </div>

//                           {/* Day label */}
//                           <span className="text-xs text-gray-600 mt-2">
//                             {data.day}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Flow Rate Trends */}
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-6">
//                   Flow Rate Trends (7 Days)
//                 </h3>
//                 <div className="relative">
//                   {/* Y-axis labels */}
//                   <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                     <span>600</span>
//                     <span>450</span>
//                     <span>300</span>
//                     <span>150</span>
//                     <span>0</span>
//                   </div>

//                   {/* Chart area */}
//                   <div className="ml-8">
//                     <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
//                       {flowRateData.map((data, index) => (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           {/* Bar */}
//                           <div
//                             className="w-6 bg-gradient-to-t from-green-400 to-green-600 rounded-t transition-all duration-300 hover:from-green-500 hover:to-green-700 cursor-pointer relative group"
//                             style={{
//                               height: `${(data.value / 600) * 120}px`,
//                             }}
//                             onMouseEnter={() => setHoveredBar(`flow-${index}`)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           >
//                             {hoveredBar === `flow-${index}` && (
//                               <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                 {data.value} L/h
//                               </div>
//                             )}
//                           </div>

//                           {/* Day label */}
//                           <span className="text-xs text-gray-600 mt-2">
//                             {data.day}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section - Quick Actions & Recent Activity */}

// <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//   {/* Quick Actions - dikecilkan sedikit */}
//   <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
//     <h3 className="font-semibold text-lg text-gray-800 mb-3">
//       Quick Actions
//     </h3>
//     <div className="space-y-3">
//       <button className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200">
//         <DocumentTextIcon className="w-5 h-5 text-blue-600" />
//         <span className="font-medium text-blue-700">
//           Submit Daily Report
//         </span>
//       </button>
//       <button className="w-full flex text-left gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200">
//         <ChartBarIcon className="w-5 h-5 text-green-600" />
//         <span className="font-medium text-green-700">
//           Record today's readings
//         </span>
//       </button>
//     </div>
//   </div>

//   {/* Recent Activity - tetap sama */}
//   <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
//     <h3 className="font-semibold text-lg text-gray-800 mb-4">
//       Recent Activity
//     </h3>
//     <div className="space-y-4">
//       {recentActivityData.map((activity, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
//         >
//           <div className="flex-1">
//             <p className="font-medium text-gray-900">
//               {activity.action}
//             </p>
//             <p className="text-sm text-gray-600">{activity.time}</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <CheckCircleIcon className="w-4 h-4 text-green-500" />
//             <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
//               {activity.status}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//           </div>
//         )}

//         {/* UNTUK MENU SELAIN DASHBOARD - TAMPILAN DALAM PENGEMBANGAN */}
//         {activeMenu !== "dashboard" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name} sedang dalam tahap pengembangan.
//                   Tim developer kami sedang bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // ==================================MENU DASHBOARD OPERATOR: END =================================================================
// // ==================================MENU DASHBOARD OPERATOR: END =================================================================
// // ==================================MENU DASHBOARD OPERATOR: END =================================================================
// // ==================================MENU DASHBOARD OPERATOR: END =================================================================

// ==================================MENU DAILY REPORT OPERATOR : START =================================================================
// ==================================MENU DAILY REPORT OPERATOR : START =================================================================
// ==================================MENU DAILY REPORT OPERATOR : START =================================================================
// ==================================MENU DAILY REPORT OPERATOR : START =================================================================
// ==================================MENU DAILY REPORT OPERATOR : START =================================================================

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
//   CameraIcon,
//   CalendarDaysIcon,
//   ClockIcon,
//   MagnifyingGlassIcon,
//   ExclamationCircleIcon,
// } from "@heroicons/react/24/outline";

// export default function Operator() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [hoveredBar, setHoveredBar] = useState(null);
//   const [hoveredPie, setHoveredPie] = useState(null);
//   const router = useRouter();
//   const dropdownRef = useRef(null);

//   // Refs untuk input date dan time
//   const dateInputRef = useRef(null);
//   const timeInputRef = useRef(null);
//   const fileInputRef = useRef(null);

//   // State untuk form Daily Report
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
//   const [errors, setErrors] = useState({}); // State untuk error validasi
//   const [isSubmitting, setIsSubmitting] = useState(false); // State untuk loading submit

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     // Hapus error ketika user mulai mengisi field
//     if (errors[field]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: "",
//       }));
//     }
//   };

//   // Fungsi validasi form
//   const validateForm = () => {
//     const newErrors = {};

//     // Validasi required fields
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

//     // Validasi numeric fields
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

//     // Validasi file upload
//     if (uploadedFiles.length === 0) {
//       newErrors.files = "Minimal 1 foto harus diupload";
//     }

//     return newErrors;
//   };

//   // Fungsi untuk submit laporan
//   const handleSubmitReport = () => {
//     const formErrors = validateForm();

//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);

//       // Scroll ke error pertama
//       const firstErrorField = Object.keys(formErrors)[0];
//       const element = document.getElementById(firstErrorField);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "center" });
//       }

//       return;
//     }

//     setIsSubmitting(true);

//     // Simulasi proses submit
//     setTimeout(() => {
//       const newReport = {
//         id: Date.now(),
//         ...formData,
//         uploadedFiles: [...uploadedFiles],
//         timestamp: new Date().toISOString(),
//         location: "IPAL Jakarta Pusat",
//         operator: "Budi Santoso - Pagi",
//         status: "Submitted",
//       };

//       setReports((prev) => [newReport, ...prev]);

//       // Reset form setelah submit
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

//       alert("Laporan berhasil disubmit!");
//     }, 1000);
//   };

//   // Fungsi untuk save as draft (tidak perlu validasi ketat)
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
//       location: "IPAL Jakarta Pusat",
//       operator: "Budi Santoso - Pagi",
//       status: "Draft",
//     };

//     setReports((prev) => [draftReport, ...prev]);

//     alert("Laporan berhasil disimpan sebagai draft!");
//   };

//   // Fungsi untuk membuka date picker ketika icon diklik
//   const handleDateIconClick = () => {
//     if (dateInputRef.current) {
//       dateInputRef.current.showPicker();
//     }
//   };

//   // Fungsi untuk membuka time picker ketika icon diklik
//   const handleTimeIconClick = () => {
//     if (timeInputRef.current) {
//       timeInputRef.current.showPicker();
//     }
//   };

//   // Fungsi untuk membuka file dialog ketika container diklik
//   const handleContainerClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   // Fungsi untuk menangani upload file
//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setUploadedFiles(files);

//     // Hapus error files jika ada file yang diupload
//     if (files.length > 0 && errors.files) {
//       setErrors((prev) => ({
//         ...prev,
//         files: "",
//       }));
//     }
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
//     { id: "presensi", name: "Presence", icon: MapPinIcon },
//     { id: "help", name: "Help Desk", icon: CogIcon },
//   ];

//   // Filter laporan berdasarkan search query
//   const filteredReports = reports.filter(
//     (report) =>
//       report.additionalNotes
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase()) ||
//       report.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       report.status.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
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
//             className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5 text-gray-800" />
//           </button>
//         </div>

//         {/* Sidebar menu */}
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
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
//                       ${
//                         activeMenu === item.id
//                           ? "bg-teal-50 text-teal-800 border-r-2 border-teal-600"
//                           : "text-gray-800 hover:bg-gray-100"
//                       }`}
//                   >
//                     <Icon className="w-5 h-5 text-gray-800" />
//                     {item.name}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Operator badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-white rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 O
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Operator SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Operator</p>
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
//               <button className="p-2 text-gray-800 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6 text-gray-800" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

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
//                     className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     O
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
//                     className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <button
//                       onClick={() => {
//                         setDropdownOpen(false);
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2
//         text-red-600 hover:bg-red-50 text-left text-sm"
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

//         {/* DAILY REPORT CONTENT */}
//         {activeMenu === "reports" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Header Section */}
//             <div className="mb-8">
//               <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                 Daily Report
//               </h2>
//               <p className="text-gray-600 mt-1">
//                 Submit your daily IPAL operational report
//               </p>
//             </div>

//             {/* Guidelines */}
//             <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200 mb-8">
//               <div className="flex items-start gap-3">
//                 <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
//                   <ExclamationTriangleIcon className="w-4 h-4 text-blue-700" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-blue-700 mb-2">
//                     Daily Report Guidelines
//                   </h3>
//                   <p className="text-blue-800 text-sm">
//                     Please ensure all measurements are accurate. Take photos of
//                     equipment and upload them with your report. Reports must be
//                     submitted before end of shift.
//                     <strong className="block mt-2">
//                       Semua field harus diisi sebelum submit!
//                     </strong>
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* FORM INPUT SECTION */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
//               {/* Report Information */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-4">
//                   Report Information
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Date Input */}
//                   <div id="date">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Date <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         ref={dateInputRef}
//                         type="date"
//                         value={formData.date}
//                         onChange={(e) =>
//                           handleInputChange("date", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.date ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//                       />
//                       <button
//                         type="button"
//                         onClick={handleDateIconClick}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
//                       >
//                         <CalendarDaysIcon className="w-5 h-5 text-gray-600" />
//                       </button>
//                     </div>
//                     {errors.date && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <ExclamationCircleIcon className="w-4 h-4" />
//                         {errors.date}
//                       </p>
//                     )}
//                   </div>

//                   {/* Time Input */}
//                   <div id="time">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Time <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <input
//                         ref={timeInputRef}
//                         type="time"
//                         value={formData.time}
//                         onChange={(e) =>
//                           handleInputChange("time", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.time ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//                       />
//                       <button
//                         type="button"
//                         onClick={handleTimeIconClick}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
//                       >
//                         <ClockIcon className="w-5 h-5 text-gray-600" />
//                       </button>
//                     </div>
//                     {errors.time && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <ExclamationCircleIcon className="w-4 h-4" />
//                         {errors.time}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Water Parameters */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-4">
//                   Water Parameters <span className="text-red-500">*</span>
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div id="pHLevel">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         pH Level <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 7.2"
//                         value={formData.pHLevel}
//                         onChange={(e) =>
//                           handleInputChange("pHLevel", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.pHLevel ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.pHLevel && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.pHLevel}
//                         </p>
//                       )}
//                     </div>
//                     <div id="flowRate">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Flow Rate (L/h) <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 450"
//                         value={formData.flowRate}
//                         onChange={(e) =>
//                           handleInputChange("flowRate", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.flowRate ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.flowRate && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.flowRate}
//                         </p>
//                       )}
//                     </div>
//                     <div id="volt">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Volt (V) <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 220"
//                         value={formData.volt}
//                         onChange={(e) =>
//                           handleInputChange("volt", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.volt ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.volt && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.volt}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     <div id="ampere">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Ampere (A) <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 15"
//                         value={formData.ampere}
//                         onChange={(e) =>
//                           handleInputChange("ampere", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.ampere ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.ampere && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.ampere}
//                         </p>
//                       )}
//                     </div>
//                     <div id="tds">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         TDS (ppm) <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 480"
//                         value={formData.tds}
//                         onChange={(e) =>
//                           handleInputChange("tds", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.tds ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.tds && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.tds}
//                         </p>
//                       )}
//                     </div>
//                     <div id="ec">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         EC (μS/cm) <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="e.g., 720"
//                         value={formData.ec}
//                         onChange={(e) =>
//                           handleInputChange("ec", e.target.value)
//                         }
//                         className={`w-full p-3 border ${
//                           errors.ec ? "border-red-500" : "border-gray-200"
//                         } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
//                       />
//                       {errors.ec && (
//                         <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                           <ExclamationCircleIcon className="w-4 h-4" />
//                           {errors.ec}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Equipment Status */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-4">
//                   Equipment Status
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Agitator
//                     </label>
//                     <select
//                       value={formData.agitatorStatus}
//                       onChange={(e) =>
//                         handleInputChange("agitatorStatus", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//                     >
//                       <option value="Normal">Normal</option>
//                       <option value="Maintenance">Maintenance</option>
//                       <option value="Broken">Broken</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Settle
//                     </label>
//                     <select
//                       value={formData.settleStatus}
//                       onChange={(e) =>
//                         handleInputChange("settleStatus", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//                     >
//                       <option value="Normal">Normal</option>
//                       <option value="Maintenance">Maintenance</option>
//                       <option value="Broken">Broken</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Out Filter
//                     </label>
//                     <select
//                       value={formData.outFilterStatus}
//                       onChange={(e) =>
//                         handleInputChange("outFilterStatus", e.target.value)
//                       }
//                       className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
//                     >
//                       <option value="Normal">Normal</option>
//                       <option value="Maintenance">Maintenance</option>
//                       <option value="Broken">Broken</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Supporting Photos */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-4">
//                   Supporting Photos <span className="text-red-500">*</span>
//                 </h3>

//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleFileUpload}
//                   className="hidden"
//                   multiple
//                   accept="image/*"
//                 />

//                 <div
//                   onClick={handleContainerClick}
//                   className={`border-2 border-dashed ${
//                     errors.files ? "border-red-500" : "border-gray-300"
//                   } rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
//                 >
//                   <CameraIcon
//                     className={`w-12 h-12 ${
//                       errors.files ? "text-red-500" : "text-gray-600"
//                     } mx-auto mb-3`}
//                   />
//                   <p
//                     className={`text-sm mb-3 ${
//                       errors.files ? "text-red-500" : "text-gray-500"
//                     }`}
//                   >
//                     {errors.files
//                       ? errors.files
//                       : "Click anywhere in this area to upload photos of equipment and readings"}
//                   </p>

//                   {uploadedFiles.length > 0 && (
//                     <div className="mt-4">
//                       <p className="text-sm font-medium text-gray-700 mb-2">
//                         Uploaded files:
//                       </p>
//                       <ul className="text-sm text-gray-600">
//                         {uploadedFiles.map((file, index) => (
//                           <li key={index} className="truncate">
//                             {file.name}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Additional Notes */}
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-4">
//                   Additional Notes <span className="text-red-500">*</span>
//                 </h3>
//                 <div id="additionalNotes">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Add any additional observations, issues, or inventory
//                     needs...
//                   </label>
//                   <textarea
//                     value={formData.additionalNotes}
//                     onChange={(e) =>
//                       handleInputChange("additionalNotes", e.target.value)
//                     }
//                     rows={4}
//                     className={`w-full p-3 border ${
//                       errors.additionalNotes
//                         ? "border-red-500"
//                         : "border-gray-200"
//                     } bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
//                     placeholder="Enter any additional information, observations, or requirements..."
//                   />
//                   {errors.additionalNotes && (
//                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                       <ExclamationCircleIcon className="w-4 h-4" />
//                       {errors.additionalNotes}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="p-6">
//                 <div className="flex flex-col sm:flex-row gap-4 justify-end">
//                   <button
//                     onClick={handleSaveDraft}
//                     className="w-full sm:w-auto px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
//                   >
//                     Save as Draft
//                   </button>
//                   <button
//                     onClick={handleSubmitReport}
//                     disabled={isSubmitting}
//                     className={`w-full sm:w-auto px-8 py-3 ${
//                       isSubmitting
//                         ? "bg-gray-400 cursor-not-allowed"
//                         : "bg-green-600 hover:bg-green-700"
//                     } text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2`}
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit Report"
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* MY REPORTS SECTION */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//               <div className="p-6 border-b border-gray-200">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       Laporan Saya
//                     </h2>
//                     <p className="text-gray-600 mt-1">
//                       Kelola laporan harian Anda
//                     </p>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3">
//                     {/* Search Input */}
//                     <div className="relative">
//                       <input
//                         type="text"
//                         placeholder="Cari laporan..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
//                       />
//                       <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                     </div>

//                     {/* Status Filter */}
//                     <select className="px-4 py-2 border text-slate-800 bg-slate-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                       <option>Semua Status</option>
//                       <option>Pending</option>
//                       Setujui <option>Tolak</option>
//                     </select>

//                     {/* Export Button */}
//                     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                       Export
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6">
//                 {filteredReports.length === 0 ? (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       Belum ada laporan yang disubmit.
//                     </p>
//                     <p className="text-gray-400 text-sm mt-1">
//                       Submit laporan pertama Anda di atas.
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="space-y-6">
//                     {filteredReports.map((report) => (
//                       <div
//                         key={report.id}
//                         className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
//                       >
//                         <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 mb-2">
//                               <h3 className="font-semibold text-gray-900">
//                                 {report.location}
//                               </h3>
//                               <span className="text-gray-400">•</span>
//                               <span className="text-gray-600">
//                                 {report.operator}
//                               </span>
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                   report.status === "Submitted"
//                                     ? "bg-green-100 text-green-800"
//                                     : "bg-yellow-100 text-yellow-800"
//                                 }`}
//                               >
//                                 {report.status}
//                               </span>
//                             </div>
//                             <p className="text-gray-500 text-sm mb-4">
//                               {report.date} {report.time}
//                             </p>

//                             {/* Parameter Tags */}
//                             <div className="flex flex-wrap gap-2 mb-4">
//                               {report.flowRate && (
//                                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
//                                   <MagnifyingGlassIcon className="w-3 h-3" />
//                                   Flow Rate: {report.flowRate} L/h
//                                 </span>
//                               )}
//                               {report.volt && (
//                                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
//                                   <MagnifyingGlassIcon className="w-3 h-3" />
//                                   Volt: {report.volt} V
//                                 </span>
//                               )}
//                               {report.ampere && (
//                                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
//                                   <MagnifyingGlassIcon className="w-3 h-3" />
//                                   Ampere: {report.ampere} A
//                                 </span>
//                               )}
//                               {report.pHLevel && (
//                                 <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
//                                   <MagnifyingGlassIcon className="w-3 h-3" />
//                                   pH: {report.pHLevel}
//                                 </span>
//                               )}
//                             </div>

//                             {/* Additional Notes */}
//                             {report.additionalNotes && (
//                               <p className="text-gray-700 mb-4">
//                                 {report.additionalNotes}
//                               </p>
//                             )}

//                             {/* Equipment Status */}
//                             <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                               <span>
//                                 Agitator:{" "}
//                                 <span className="font-medium">
//                                   {report.agitatorStatus}
//                                 </span>
//                               </span>
//                               <span>
//                                 Settle:{" "}
//                                 <span className="font-medium">
//                                   {report.settleStatus}
//                                 </span>
//                               </span>
//                               <span>
//                                 Out Filter:{" "}
//                                 <span className="font-medium">
//                                   {report.outFilterStatus}
//                                 </span>
//                               </span>
//                             </div>
//                           </div>

//                           <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
//                             <MagnifyingGlassIcon className="w-4 h-4" />
//                             Detail
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// ==================================MENU DAILY REPORT OPERATOR : END =================================================================
// ==================================MENU DAILY REPORT OPERATOR : END =================================================================
// ==================================MENU DAILY REPORT OPERATOR : END =================================================================
// ==================================MENU DAILY REPORT OPERATOR : END =================================================================
// ==================================MENU DAILY REPORT OPERATOR : END =================================================================

// ==================================MENU PRESENSI OPERATOR : START =================================================================
// ==================================MENU PRESENSI OPERATOR : START =================================================================
// ==================================MENU PRESENSI OPERATOR : START =================================================================
// ==================================MENU PRESENSI OPERATOR : START =================================================================

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
//   CameraIcon,
//   CalendarDaysIcon,
//   ClockIcon,
//   MagnifyingGlassIcon,
//   ExclamationCircleIcon,
//   CheckCircleIcon,
//   MapIcon,
//   EyeIcon,
//   PhotoIcon,
// } from "@heroicons/react/24/outline";

// export default function Operator() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const router = useRouter();
//   const dropdownRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const cameraRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // State untuk user role - sebagai operator
//   const userRole = "operator";

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
//     {
//       id: 2,
//       date: "2025-01-28",
//       checkIn: "08:05 AM",
//       checkOut: "16:02 PM",
//       location: "Jakarta Utara - Site A",
//       status: "approved",
//       approvalStatus: "approved",
//       checkInStatus: "Late",
//       checkInLocation: "Lat: -6.123456, Long: 106.123456",
//       checkOutLocation: "Lat: -6.123456, Long: 106.123456",
//       selfieCheckIn: null,
//       selfieCheckOut: null,
//       approvedBy: "Admin",
//       approvedAt: "2025-01-28 08:35 AM",
//     },
//   ]);

//   // State untuk modal check-in
//   const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
//   const [locationCaptured, setLocationCaptured] = useState(false);
//   const [selfieUploaded, setSelfieUploaded] = useState(false);
//   const [selfiePreview, setSelfiePreview] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(
//     "Click to get location"
//   );
//   const [isCameraActive, setIsCameraActive] = useState(false);
//   const [stream, setStream] = useState(null);

//   // State untuk modal check-out
//   const [isCheckOutModalOpen, setIsCheckOutModalOpen] = useState(false);
//   const [locationCapturedCheckOut, setLocationCapturedCheckOut] = useState(
//     false
//   );
//   const [selfieUploadedCheckOut, setSelfieUploadedCheckOut] = useState(false);
//   const [selfiePreviewCheckOut, setSelfiePreviewCheckOut] = useState(null);
//   const [currentLocationCheckOut, setCurrentLocationCheckOut] = useState(
//     "Click to get location"
//   );
//   const [isCameraActiveCheckOut, setIsCameraActiveCheckOut] = useState(false);
//   const [streamCheckOut, setStreamCheckOut] = useState(null);

//   // State untuk modal detail
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [selectedAttendance, setSelectedAttendance] = useState(null);

//   // Fungsi untuk membuka modal detail
//   const openDetailModal = (attendance) => {
//     setSelectedAttendance(attendance);
//     setIsDetailModalOpen(true);
//   };

//   // Fungsi untuk mendapatkan lokasi
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

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;

//         // Simulasi alamat berdasarkan koordinat (dalam real implementation bisa pakai geocoding API)
//         const locations = [
//           "Jakarta Utara - Site A",
//           "Jakarta Utara - Site B",
//           "Jakarta Utara - Site C",
//         ];
//         const randomLocation =
//           locations[Math.floor(Math.random() * locations.length)];
//         const locationString = `${randomLocation} (Lat: ${latitude.toFixed(
//           6
//         )}, Long: ${longitude.toFixed(6)})`;

//         if (isCheckOut) {
//           setCurrentLocationCheckOut(locationString);
//           setLocationCapturedCheckOut(true);
//         } else {
//           setCurrentLocation(locationString);
//           setLocationCaptured(true);
//         }

//         alert("Location captured successfully!");
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
//         } else {
//           setCurrentLocation("Location unavailable");
//         }
//         alert(`Failed to get location: ${errorMessage}`);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 10000,
//         maximumAge: 60000,
//       }
//     );
//   };

//   // Fungsi untuk mengaktifkan kamera
//   const startCamera = (isCheckOut = false) => {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       navigator.mediaDevices
//         .getUserMedia({ video: true })
//         .then((mediaStream) => {
//           if (isCheckOut) {
//             setStreamCheckOut(mediaStream);
//             setIsCameraActiveCheckOut(true);
//             if (videoRef.current) {
//               videoRef.current.srcObject = mediaStream;
//             }
//           } else {
//             setStream(mediaStream);
//             setIsCameraActive(true);
//             if (videoRef.current) {
//               videoRef.current.srcObject = mediaStream;
//             }
//           }
//         })
//         .catch((error) => {
//           console.error("Error accessing camera:", error);
//           alert("Cannot access camera. Please check permissions.");
//         });
//     } else {
//       alert("Camera not supported in this browser.");
//     }
//   };

//   // Fungsi untuk menangkap foto dari kamera
//   const capturePhoto = (isCheckOut = false) => {
//     if (videoRef.current && canvasRef.current) {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");

//       // Set canvas size sama dengan video
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;

//       // Gambar frame video ke canvas
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);

//       // Dapatkan data URL dari canvas
//       const photoDataUrl = canvas.toDataURL("image/png");

//       if (isCheckOut) {
//         setSelfiePreviewCheckOut(photoDataUrl);
//         setSelfieUploadedCheckOut(true);
//       } else {
//         setSelfiePreview(photoDataUrl);
//         setSelfieUploaded(true);
//       }

//       // Matikan kamera setelah mengambil foto
//       stopCamera(isCheckOut);
//     }
//   };

//   // Fungsi untuk mematikan kamera
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

//   // Fungsi untuk upload selfie dari file
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

//   // Fungsi untuk trigger file input
//   const triggerFileInput = (isCheckOut = false) => {
//     if (isCheckOut) {
//       fileInputRef.current?.click();
//     } else {
//       fileInputRef.current?.click();
//     }
//   };

//   // Fungsi untuk membuka modal check-in
//   const openCheckInModal = () => {
//     setIsCheckInModalOpen(true);
//     setLocationCaptured(false);
//     setSelfieUploaded(false);
//     setSelfiePreview(null);
//     setCurrentLocation("Click to get location");
//     setIsCameraActive(false);
//   };

//   // Fungsi untuk membuka modal check-out
//   const openCheckOutModal = () => {
//     setIsCheckOutModalOpen(true);
//     setLocationCapturedCheckOut(false);
//     setSelfieUploadedCheckOut(false);
//     setSelfiePreviewCheckOut(null);
//     setCurrentLocationCheckOut("Click to get location");
//     setIsCameraActiveCheckOut(false);
//   };

//   // Fungsi untuk confirm check-in
//   const handleConfirmCheckIn = () => {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const ampm = now.getHours() >= 12 ? "PM" : "AM";
//     const formattedHours = (now.getHours() % 12 || 12)
//       .toString()
//       .padStart(2, "0");
//     const checkInTime = `${formattedHours}:${minutes} ${ampm}`;

//     // Tentukan status berdasarkan waktu check-in
//     let checkInStatus = "On Time";
//     const currentTime = now.getHours() * 60 + now.getMinutes();
//     const deadlineTime = 8 * 60 + 15; // 08:15 dalam menit

//     if (currentTime > deadlineTime) {
//       checkInStatus = "Late";
//     } else if (currentTime > 8 * 60) {
//       checkInStatus = "Late";
//     }

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
//     alert(
//       `Check-in berhasil! Waktu: ${checkInTime} - Status: ${checkInStatus}. Menunggu approval admin.`
//     );
//   };

//   // Fungsi untuk confirm check-out
//   const handleConfirmCheckOut = () => {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, "0");
//     const minutes = now.getMinutes().toString().padStart(2, "0");
//     const ampm = now.getHours() >= 12 ? "PM" : "AM";
//     const formattedHours = (now.getHours() % 12 || 12)
//       .toString()
//       .padStart(2, "0");
//     const checkOutTime = `${formattedHours}:${minutes} ${ampm}`;

//     // Update attendance data
//     setAttendanceData((prev) => ({
//       ...prev,
//       checkOutTime: checkOutTime,
//       isCheckedOut: true,
//     }));

//     // Update riwayat dengan check-out time, lokasi, dan selfie
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
//     alert("Check-out berhasil! Menunggu approval admin.");
//   };

//   // Fungsi untuk menentukan status berdasarkan waktu check-in
//   const getStatusColor = (status) => {
//     if (status === "On Time") return "text-green-600 bg-green-100";
//     if (status === "Late") return "text-red-600 bg-red-100";
//     if (status === "Approved") return "text-green-600 bg-green-100";
//     if (status === "pending") return "text-yellow-600 bg-yellow-100";
//     return "text-gray-600 bg-gray-100";
//   };

//   // Fungsi untuk menentukan warna status approval
//   const getApprovalStatusColor = (status) => {
//     if (status === "approved") return "text-green-600 bg-green-100";
//     if (status === "rejected") return "text-red-600 bg-red-100";
//     if (status === "pending") return "text-yellow-600 bg-yellow-100";
//     return "text-gray-600 bg-gray-100";
//   };

//   // Cleanup camera ketika komponen unmount
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
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
//     { id: "presensi", name: "Presence", icon: MapPinIcon },
//     { id: "help", name: "Help Desk", icon: CogIcon },
//   ];

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
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
//             className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5 text-gray-800" />
//           </button>
//         </div>

//         {/* Sidebar menu */}
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
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
//                       ${
//                         activeMenu === item.id
//                           ? "bg-teal-50 text-teal-800 border-r-2 border-teal-600"
//                           : "text-gray-800 hover:bg-gray-100"
//                       }`}
//                   >
//                     <Icon className="w-5 h-5 text-gray-800" />
//                     {item.name}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Operator badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-white rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 O
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Operator SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Operator</p>
//                 {/* <p className="text-xs text-gray-500 mt-1">Role: {userRole}</p> */}
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
//               <button className="p-2 text-gray-800 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6 text-gray-800" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

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
//                     className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     O
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
//                     className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <button
//                       onClick={async () => {
//                         setDropdownOpen(false);
//                         await fetch("/api/auth/logout", {method: "POST"});
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2
//         text-red-600 hover:bg-red-50 text-left text-sm"
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
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* DAILY REPORT CONTENT - DALAM PENGEMBANGAN */}
//         {activeMenu === "reports" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* PRESENCE CONTENT */}
//         {activeMenu === "presensi" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Header Section dengan Check-in Button di samping */}
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
//               <div className="flex-1">
//                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                   Attendance System
//                 </h2>
//                 <p className="text-gray-600 mt-1">
//                   Mark your attendance with location and selfie verification
//                 </p>
//               </div>

//               {/* Check-in/Check-out Button di sebelah kanan header */}
//               <div className="flex-shrink-0">
//                 {!attendanceData.isCheckedIn ? (
//                   <button
//                     onClick={openCheckInModal}
//                     className="w-full lg:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                   >
//                     <CheckCircleIcon className="w-5 h-5" />
//                     Check In Now
//                   </button>
//                 ) : !attendanceData.isCheckedOut ? (
//                   <button
//                     onClick={openCheckOutModal}
//                     className="w-full lg:w-auto px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//                   >
//                     <CheckCircleIcon className="w-5 h-5" />
//                     Check Out Now
//                   </button>
//                 ) : (
//                   <div className="text-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">
//                     Attendance completed for today
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Statistics Section // HAPUS ATAU NONAKTIF SEMENTARA
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-gray-600 text-sm font-medium">This Month</p>
//                 <p className="text-2xl font-bold text-gray-900">22 days</p>
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-gray-600 text-sm font-medium">On Time</p>
//                 <p className="text-2xl font-bold text-gray-900">95%</p>
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-gray-600 text-sm font-medium">Late</p>
//                 <p className="text-2xl font-bold text-gray-900">2 times</p>
//               </div>
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <p className="text-gray-600 text-sm font-medium">Attendance Rate</p>
//                 <p className="text-2xl font-bold text-gray-900">98%</p>
//               </div>
//             </div> */}
//             {/* // HAPUS ATAU NONAKTIF SEMENTARA */}

//             {/* Today's Attendance Section */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
//               {/* Header dengan background abu-abu */}
//               <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   Today's Attendance
//                 </h3>
//               </div>

//               {/* Content dengan background putih */}
//               <div className="p-4 bg-white rounded-b-xl">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {/* Check-in Time */}
//                   <div className="bg-white rounded-lg p-4 border border-gray-200">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <ClockIcon className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-sm font-medium text-gray-600 mb-1">
//                           Check-in Time
//                         </h4>
//                         <p className="text-lg font-bold text-gray-900 mb-2">
//                           {attendanceData.checkInTime}
//                         </p>
//                         <span
//                           className={`inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
//                             attendanceData.status
//                           )}`}
//                         >
//                           {attendanceData.status}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Check-out Time */}
//                   <div className="bg-white rounded-lg p-4 border border-gray-200">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <ClockIcon className="w-5 h-5 text-red-600" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-sm font-medium text-gray-600 mb-1">
//                           Check-out Time
//                         </h4>
//                         <p className="text-lg font-bold text-gray-900 mb-2">
//                           {attendanceData.checkOutTime}
//                         </p>
//                         {attendanceData.isCheckedOut ? (
//                           <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                             Completed
//                           </span>
//                         ) : (
//                           <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//                             Not checked out yet
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Location */}
//                   <div className="bg-white rounded-lg p-4 border border-gray-200">
//                     <div className="flex items-start gap-3">
//                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <MapIcon className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <h4 className="text-sm font-medium text-gray-600 mb-1">
//                           Location
//                         </h4>
//                         <p className="text-sm font-bold text-gray-900 mb-2 leading-tight break-words">
//                           {attendanceData.location}
//                         </p>
//                         <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//                           {attendanceData.location !== "Not located yet"
//                             ? "Verified"
//                             : "Not verified"}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Attendance History Section */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//               <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   Attendance History
//                 </h3>
//               </div>

//               <div className="p-4 bg-white rounded-b-xl">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="border-b border-gray-200">
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Date
//                         </th>
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Check In
//                         </th>
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Check Out
//                         </th>
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Location
//                         </th>
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Status
//                         </th>
//                         <th className="text-left py-3 px-4 font-medium text-gray-700">
//                           Action
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {attendanceHistory.map((record) => (
//                         <tr
//                           key={record.id}
//                           className="border-b border-gray-100 hover:bg-gray-50"
//                         >
//                           <td className="py-3 px-4 text-gray-900">
//                             {record.date}
//                           </td>
//                           <td className="py-3 px-4 text-gray-900">
//                             {record.checkIn}
//                           </td>
//                           <td className="py-3 px-4 text-gray-900">
//                             {record.checkOut}
//                           </td>
//                           <td className="py-3 px-4 text-gray-900 text-sm">
//                             {record.location}
//                           </td>
//                           <td className="py-3 px-4">
//                             <span
//                               className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(
//                                 record.approvalStatus
//                               )}`}
//                             >
//                               {record.approvalStatus === "pending" &&
//                                 "⏳ pending"}
//                               {record.approvalStatus === "approved" &&
//                                 "✓ approved"}
//                               {record.approvalStatus === "rejected" &&
//                                 "✗ rejected"}
//                             </span>
//                           </td>
//                           <td className="py-3 px-4">
//                             <button
//                               onClick={() => openDetailModal(record)}
//                               className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
//                             >
//                               <EyeIcon className="w-4 h-4" />
//                               Detail
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>

//                 {/* Empty State */}
//                 {attendanceHistory.length === 0 && (
//                   <div className="text-center py-8">
//                     <p className="text-gray-500">
//                       No attendance records found.
//                     </p>
//                     <p className="text-gray-400 text-sm mt-1">
//                       Your attendance history will appear here.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* UNTUK MENU HELP DESK - TAMPILAN DALAM PENGEMBANGAN */}
//         {activeMenu === "help" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Modal Check-in */}
//       {isCheckInModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-xl font-bold text-gray-900">Check In</h2>
//               <p className="text-gray-600 mt-1">
//                 Complete both steps to check in
//               </p>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Step 1: Capture Location */}
//               <div>
//                 <h3 className="font-medium text-gray-900 mb-3">
//                   1. Capture Location
//                 </h3>
//                 <button
//                   onClick={() => getCurrentLocation(false)}
//                   className={`w-full flex items-center gap-3 p-4 border rounded-lg ${
//                     locationCaptured
//                       ? "border-green-500 bg-green-50 text-green-700"
//                       : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <MapPinIcon className="w-5 h-5" />
//                   <div className="text-left flex-1">
//                     <span className="block">
//                       {locationCaptured
//                         ? "Location Captured"
//                         : "Get Current Location"}
//                     </span>
//                     <span className="block text-xs mt-1 text-gray-500">
//                       {currentLocation}
//                     </span>
//                   </div>
//                   {locationCaptured && (
//                     <CheckCircleIcon className="w-5 h-5 ml-auto" />
//                   )}
//                 </button>
//               </div>

//               {/* Step 2: Upload Selfie */}
//               <div>
//                 <h3 className="font-medium text-gray-900 mb-3">
//                   2. Upload Selfie
//                 </h3>

//                 {/* Camera Preview */}
//                 {isCameraActive && (
//                   <div className="mb-4">
//                     <div className="relative bg-black rounded-lg overflow-hidden">
//                       <video
//                         ref={videoRef}
//                         autoPlay
//                         playsInline
//                         className="w-full h-64 object-cover"
//                       />
//                       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//                         <button
//                           onClick={() => capturePhoto(false)}
//                           className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
//                         >
//                           <CameraIcon className="w-6 h-6 text-gray-800" />
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => stopCamera(false)}
//                       className="mt-2 text-sm text-red-600 hover:text-red-800"
//                     >
//                       Close Camera
//                     </button>
//                   </div>
//                 )}

//                 {/* Selfie Options */}
//                 {!isCameraActive && (
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     <button
//                       onClick={() => startCamera(false)}
//                       className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
//                     >
//                       <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
//                       <span className="text-sm font-medium text-gray-400">
//                         Take Photo
//                       </span>
//                     </button>

//                     <button
//                       onClick={() => triggerFileInput(false)}
//                       className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
//                     >
//                       <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
//                       <span className="text-s font-medium text-gray-400">
//                         Upload Photo
//                       </span>
//                     </button>
//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={(e) => handleSelfieUpload(e, false)}
//                   accept="image/*"
//                   className="hidden"
//                 />

//                 {/* Selfie Preview */}
//                 {selfiePreview && (
//                   <div className="mt-3">
//                     <p className="text-sm text-gray-600 mb-2">
//                       Selfie Preview:
//                     </p>
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={selfiePreview}
//                         alt="Selfie preview"
//                         className="w-20 h-20 object-cover rounded-lg border border-gray-300"
//                       />
//                       <div className="flex-1">
//                         <p className="text-sm text-green-600 font-medium">
//                           ✓ Selfie captured
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           Ready for check-in
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200 flex gap-3">
//               <button
//                 onClick={() => {
//                   stopCamera(false);
//                   setIsCheckInModalOpen(false);
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmCheckIn}
//                 disabled={!locationCaptured || !selfieUploaded}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 <CheckCircleIcon className="w-5 h-5" />
//                 Confirm Check-In
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal Check-out */}
//       {isCheckOutModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-xl font-bold text-gray-900">Check Out</h2>
//               <p className="text-gray-600 mt-1">
//                 Complete both steps to check out
//               </p>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Step 1: Capture Location */}
//               <div>
//                 <h3 className="font-medium text-gray-900 mb-3">
//                   1. Capture Location
//                 </h3>
//                 <button
//                   onClick={() => getCurrentLocation(true)}
//                   className={`w-full flex items-center gap-3 p-4 border rounded-lg ${
//                     locationCapturedCheckOut
//                       ? "border-green-500 bg-green-50 text-green-700"
//                       : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
//                   }`}
//                 >
//                   <MapPinIcon className="w-5 h-5" />
//                   <div className="text-left flex-1">
//                     <span className="block">
//                       {locationCapturedCheckOut
//                         ? "Location Captured"
//                         : "Get Current Location"}
//                     </span>
//                     <span className="block text-xs mt-1 text-gray-500">
//                       {currentLocationCheckOut}
//                     </span>
//                   </div>
//                   {locationCapturedCheckOut && (
//                     <CheckCircleIcon className="w-5 h-5 ml-auto" />
//                   )}
//                 </button>
//               </div>

//               {/* Step 2: Upload Selfie */}
//               <div>
//                 <h3 className="font-medium text-gray-900 mb-3">
//                   2. Upload Selfie
//                 </h3>

//                 {/* Camera Preview */}
//                 {isCameraActiveCheckOut && (
//                   <div className="mb-4">
//                     <div className="relative bg-black rounded-lg overflow-hidden">
//                       <video
//                         ref={videoRef}
//                         autoPlay
//                         playsInline
//                         className="w-full h-64 object-cover"
//                       />
//                       <div className="absolute bottom-4 left-0 right-0 flex justify-center">
//                         <button
//                           onClick={() => capturePhoto(true)}
//                           className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
//                         >
//                           <CameraIcon className="w-6 h-6 text-gray-800" />
//                         </button>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => stopCamera(true)}
//                       className="mt-2 text-sm text-red-600 hover:text-red-800"
//                     >
//                       Close Camera
//                     </button>
//                   </div>
//                 )}

//                 {/* Selfie Options */}
//                 {!isCameraActiveCheckOut && (
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     <button
//                       onClick={() => startCamera(true)}
//                       className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
//                     >
//                       <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
//                       <span className="text-sm font-medium text-gray-400">
//                         Take Photo
//                       </span>
//                     </button>

//                     <button
//                       onClick={() => triggerFileInput(true)}
//                       className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
//                     >
//                       <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
//                       <span className="text-sm font-medium text-gray-400">
//                         Upload Photo
//                       </span>
//                     </button>
//                   </div>
//                 )}

//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={(e) => handleSelfieUpload(e, true)}
//                   accept="image/*"
//                   className="hidden"
//                 />

//                 {/* Selfie Preview */}
//                 {selfiePreviewCheckOut && (
//                   <div className="mt-3">
//                     <p className="text-sm text-gray-600 mb-2">
//                       Selfie Preview:
//                     </p>
//                     <div className="flex items-center gap-3">
//                       <img
//                         src={selfiePreviewCheckOut}
//                         alt="Selfie preview"
//                         className="w-20 h-20 object-cover rounded-lg border border-gray-300"
//                       />
//                       <div className="flex-1">
//                         <p className="text-sm text-green-600 font-medium">
//                           ✓ Selfie captured
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           Ready for check-out
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200 flex gap-3">
//               <button
//                 onClick={() => {
//                   stopCamera(true);
//                   setIsCheckOutModalOpen(false);
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirmCheckOut}
//                 disabled={!locationCapturedCheckOut || !selfieUploadedCheckOut}
//                 className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 <CheckCircleIcon className="w-5 h-5" />
//                 Confirm Check-Out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal Detail Attendance */}
//       {isDetailModalOpen && selectedAttendance && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Attendance Details
//                 </h2>
//                 <button
//                   onClick={() => setIsDetailModalOpen(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <XMarkIcon className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-600 mt-1">
//                 Date: {selectedAttendance.date}
//               </p>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Approval Status */}
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h3 className="font-semibold text-gray-800 mb-3">
//                   Approval Status
//                 </h3>
//                 <div className="flex items-center gap-2">
//                   <span
//                     className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-3 py-1 rounded-full text-sm font-medium ${getApprovalStatusColor(
//                       selectedAttendance.approvalStatus
//                     )}`}
//                   >
//                     {selectedAttendance.approvalStatus === "pending" &&
//                       "⏳ Pending Approval"}
//                     {selectedAttendance.approvalStatus === "approved" &&
//                       "✓ Approved by Admin"}
//                     {selectedAttendance.approvalStatus === "rejected" &&
//                       "✗ Rejected by Admin"}
//                   </span>
//                   {selectedAttendance.approvalStatus === "pending" && (
//                     <span className="text-sm text-gray-600">
//                       Waiting for admin approval
//                     </span>
//                   )}
//                   {selectedAttendance.approvalStatus === "approved" &&
//                     selectedAttendance.approvedBy && (
//                       <span className="text-sm text-gray-600">
//                         Approved by {selectedAttendance.approvedBy} at{" "}
//                         {selectedAttendance.approvedAt}
//                       </span>
//                     )}
//                 </div>
//               </div>

//               {/* Check-in Information */}
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                   <CheckCircleIcon className="w-5 h-5 text-green-600" />
//                   Check-in Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm text-gray-600">Time</p>
//                     <p className="font-medium text-gray-900">
//                       {selectedAttendance.checkIn}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600">Status</p>
//                     <p
//                       className={`font-medium ${
//                         selectedAttendance.checkInStatus === "On Time"
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {selectedAttendance.checkInStatus}
//                     </p>
//                   </div>
//                   <div className="md:col-span-2">
//                     <p className="text-sm text-gray-600">Location</p>
//                     <p className="font-medium text-gray-900 text-sm">
//                       {selectedAttendance.checkInLocation}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Check-in Selfie */}
//                 {selectedAttendance.selfieCheckIn && (
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-600 mb-2">
//                       Check-in Selfie
//                     </p>
//                     <img
//                       src={selectedAttendance.selfieCheckIn}
//                       alt="Check-in selfie"
//                       className="w-48 h-48 object-cover rounded-lg border border-gray-300"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Check-out Information */}
//               <div className="bg-gray-50 rounded-lg p-4">
//                 <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
//                   <CheckCircleIcon className="w-5 h-5 text-blue-600" />
//                   Check-out Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm text-gray-600">Time</p>
//                     <p className="font-medium text-gray-900">
//                       {selectedAttendance.checkOut}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-600">Status</p>
//                     <p className="font-medium text-gray-900">
//                       {selectedAttendance.checkOut === "--:--"
//                         ? "Not checked out"
//                         : "Completed"}
//                     </p>
//                   </div>
//                   <div className="md:col-span-2">
//                     <p className="text-sm text-gray-600">Location</p>
//                     <p className="font-medium text-gray-900 text-sm">
//                       {selectedAttendance.checkOutLocation}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Check-out Selfie */}
//                 {selectedAttendance.selfieCheckOut && (
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-600 mb-2">
//                       Check-out Selfie
//                     </p>
//                     <img
//                       src={selectedAttendance.selfieCheckOut}
//                       alt="Check-out selfie"
//                       className="w-48 h-48 object-cover rounded-lg border border-gray-300"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Note for Operator */}
//               {userRole === "operator" &&
//                 selectedAttendance.approvalStatus === "pending" && (
//                   <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                     <div className="flex items-start gap-3">
//                       <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
//                       <div>
//                         <p className="font-medium text-yellow-800">
//                           Menunggu Approval Admin
//                         </p>
//                         <p className="text-yellow-700 text-sm mt-1">
//                           Attendance Anda sedang menunggu persetujuan dari
//                           admin. Anda akan mendapatkan notifikasi setelah
//                           disetujui.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//             </div>

//             <div className="p-6 border-t border-gray-200">
//               <button
//                 onClick={() => setIsDetailModalOpen(false)}
//                 className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Canvas untuk capture foto (hidden) */}
//       <canvas ref={canvasRef} className="hidden" />
//     </div>
//   );
// }

// ==================================MENU PRESENSI OPERATOR : END =================================================================
// ==================================MENU PRESENSI OPERATOR : END =================================================================
// ==================================MENU PRESENSI OPERATOR : END =================================================================
// ==================================MENU PRESENSI OPERATOR : END =================================================================
// ==================================MENU PRESENSI OPERATOR : END =================================================================

// ==================================MENU HELP DESK OPERATOR : START =================================================================
// ==================================MENU HELP DESK OPERATOR : START =================================================================
// ==================================MENU HELP DESK OPERATOR : START =================================================================
// ==================================MENU HELP DESK OPERATOR : START =================================================================

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
//   CameraIcon,
//   CalendarDaysIcon,
//   ClockIcon,
//   MagnifyingGlassIcon,
//   ExclamationCircleIcon,
//   CheckCircleIcon,
//   MapIcon,
//   EyeIcon,
//   PhotoIcon,
//   PlusIcon,
//   UserIcon,
//   ChatBubbleLeftRightIcon,
// } from "@heroicons/react/24/outline";

// export default function Operator() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const router = useRouter();
//   const dropdownRef = useRef(null);
//   const statusDropdownRef = useRef(null);
//   const priorityDropdownRef = useRef(null);

//   // State untuk user role - sebagai operator
//   const userRole = "operator";

//   // State untuk Help Desk
//   const [tickets, setTickets] = useState([
//     {
//       id: 1,
//       title: "Masalah Pompa Filter",
//       priority: "High",
//       status: "Open",
//       assignee: "Budi Santoso",
//       site: "IPAL Jakarta Pusat",
//       description: "Pompa filter site Jakarta mengalami penurunan tekanan",
//       createdAt: "2024-01-15",
//       category: "Technical",
//       resolvedAt: null,
//     },
//     {
//       id: 2,
//       title: "Permintaan Penggantian Alat",
//       priority: "Medium",
//       status: "Resolved",
//       assignee: "Budi Santoso",
//       site: "IPAL Jakarta Pusat",
//       description: "pH meter perlu kalibrasi ulang",
//       createdAt: "2024-01-14",
//       category: "Maintenance",
//       resolvedAt: "2024-01-15",
//     },
//   ]);

//   const [newTicket, setNewTicket] = useState({
//     site: "IPAL Jakarta Pusat",
//     category: "Technical",
//     title: "",
//     description: "",
//     priority: "Medium",
//   });

//   const [searchTerm, setSearchTerm] = useState("");
//   const [statusFilter, setStatusFilter] = useState("Semua Status");
//   const [priorityFilter, setPriorityFilter] = useState("Semua Prioritas");
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
//   const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   // Fungsi untuk Help Desk
//   const handleCreateTicket = () => {
//     const errors = {};

//     // Validasi field wajib
//     if (!newTicket.title.trim()) {
//       errors.title = "Judul masalah harus diisi";
//     }

//     if (!newTicket.description.trim()) {
//       errors.description = "Deskripsi masalah harus diisi";
//     }

//     // Jika ada error, tampilkan dan berhenti
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // Jika validasi berhasil, buat tiket
//     const ticket = {
//       id: Date.now(),
//       title: newTicket.title,
//       priority: newTicket.priority,
//       status: "Open",
//       assignee: "Budi Santoso",
//       site: newTicket.site,
//       description: newTicket.description,
//       createdAt: new Date().toISOString().split("T")[0],
//       category: newTicket.category,
//       resolvedAt: null,
//     };

//     setTickets((prev) => [ticket, ...prev]);
//     setNewTicket({
//       site: "IPAL Jakarta Pusat",
//       category: "Technical",
//       title: "",
//       description: "",
//       priority: "Medium",
//     });

//     setFormErrors({});
//     setIsCreateModalOpen(false);
//     alert("Tiket bantuan berhasil diajukan!");
//   };

//   // Reset errors ketika modal dibuka
//   useEffect(() => {
//     if (isCreateModalOpen) {
//       setFormErrors({});
//     }
//   }, [isCreateModalOpen]);

//   const filteredTickets = tickets.filter((ticket) => {
//     const matchesSearch =
//       ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
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

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
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

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
//     { id: "presensi", name: "Presence", icon: MapPinIcon },
//     { id: "help", name: "Help Desk", icon: CogIcon },
//   ];

//   const statusOptions = ["Semua Status", "Open", "In Progress", "Resolved"];
//   const priorityOptions = ["Semua Prioritas", "High", "Medium", "Low"];

//   return (
//     <div className="flex min-h-screen bg-white">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
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
//             className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5 text-gray-800" />
//           </button>
//         </div>

//         {/* Sidebar menu */}
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
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
//                       ${
//                         activeMenu === item.id
//                           ? "bg-teal-50 text-teal-800 border-r-2 border-teal-600"
//                           : "text-gray-800 hover:bg-gray-100"
//                       }`}
//                   >
//                     <Icon className="w-5 h-5 text-gray-800" />
//                     {item.name}
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Operator badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-white rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 O
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Operator SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Operator</p>
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
//               <button className="p-2 text-gray-800 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6 text-gray-800" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

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
//                     className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     O
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
//                     className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
//       py-2 z-[9999] transition-transform origin-top"
//                   >
//                     <button
//                       onClick={async () => {
//                         setDropdownOpen(false);
//                         await fetch("/api/auth/logout", { method: "POST" });
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2
//         text-red-600 hover:bg-red-50 text-left text-sm"
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
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* DAILY REPORT CONTENT - DALAM PENGEMBANGAN */}
//         {activeMenu === "reports" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* PRESENCE CONTENT - DALAM PENGEMBANGAN */}
//         {activeMenu === "presensi" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
//               <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
//                 <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <CogIcon className="w-8 h-8 text-yellow-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   Dalam Pengembangan
//                 </h3>
//                 <p className="text-gray-600">
//                   Fitur {menuItems.find((m) => m.id === activeMenu)?.name}{" "}
//                   sedang dalam tahap pengembangan. Tim developer kami sedang
//                   bekerja untuk menyiapkan fitur ini.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* HELP DESK CONTENT */}
//         {activeMenu === "help" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Header Section dengan tombol Buat Tiket di samping */}
//             <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
//               <div className="flex-1">
//                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                   Help Desk
//                 </h2>
//                 <p className="text-gray-600 mt-1">
//                   Ajukan bantuan atau laporkan masalah
//                 </p>
//               </div>

//               {/* Tombol Buat Tiket di sebelah kanan header */}
//               <div className="flex-shrink-0">
//                 <button
//                   onClick={() => setIsCreateModalOpen(true)}
//                   className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                 >
//                   <PlusIcon className="w-5 h-5" />
//                   Buat Tiket
//                 </button>
//               </div>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Left Column - Ticket List */}
//               <div className="flex-1">
//                 {/* Search and Filters */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
//                   <div className="flex flex-col sm:flex-row gap-3 items-center">
//                     {/* Search Input */}
//                     <div className="flex-1 w-full">
//                       <div className="relative">
//                         <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                         <input
//                           type="text"
//                           placeholder="Cari tiket..."
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//                         />
//                       </div>
//                     </div>

//                     {/* Filter Dropdowns */}
//                     <div className="flex gap-2 w-full sm:w-auto">
//                       {/* Status Dropdown */}
//                       <div className="relative" ref={statusDropdownRef}>
//                         <button
//                           onClick={() =>
//                             setIsStatusDropdownOpen(!isStatusDropdownOpen)
//                           }
//                           className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
//                         >
//                           <span className="truncate">{statusFilter}</span>
//                           <svg
//                             className="w-4 h-4 flex-shrink-0"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>

//                         {isStatusDropdownOpen && (
//                           <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
//                             {statusOptions.map((option) => (
//                               <button
//                                 key={option}
//                                 onClick={() => {
//                                   setStatusFilter(option);
//                                   setIsStatusDropdownOpen(false);
//                                 }}
//                                 className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
//                                   option === statusFilter
//                                     ? "bg-blue-50 text-blue-700"
//                                     : ""
//                                 }`}
//                               >
//                                 {option}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>

//                       {/* Priority Dropdown */}
//                       <div className="relative" ref={priorityDropdownRef}>
//                         <button
//                           onClick={() =>
//                             setIsPriorityDropdownOpen(!isPriorityDropdownOpen)
//                           }
//                           className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
//                         >
//                           <span className="truncate">{priorityFilter}</span>
//                           <svg
//                             className="w-4 h-4 flex-shrink-0"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>

//                         {isPriorityDropdownOpen && (
//                           <div className="absolute left-0 top-full mt-1 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-10">
//                             {priorityOptions.map((option) => (
//                               <button
//                                 key={option}
//                                 onClick={() => {
//                                   setPriorityFilter(option);
//                                   setIsPriorityDropdownOpen(false);
//                                 }}
//                                 className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${
//                                   option === priorityFilter
//                                     ? "bg-blue-50 text-blue-700"
//                                     : ""
//                                 }`}
//                               >
//                                 {option}
//                               </button>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Ticket List */}
//                 <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//                   <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
//                     <h3 className="font-semibold text-lg text-gray-800">
//                       Daftar Tiket
//                     </h3>
//                   </div>

//                   <div className="p-4">
//                     {/* Tickets */}
//                     {filteredTickets.map((ticket, index) => (
//                       <div key={ticket.id} className="mb-6 last:mb-0">
//                         {/* Ticket Item */}
//                         <div className="py-4">
//                           {/* Header dengan nomor urutan, judul dan priority */}
//                           <div className="flex items-start gap-3 mb-3">
//                             {/* Nomor Urutan */}
//                             <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
//                               <span className="text-white text-xs font-bold">
//                                 {index + 1}
//                               </span>
//                             </div>

//                             <div className="flex-1">
//                               <div className="flex justify-between items-start">
//                                 <h4 className="text-lg font-semibold text-gray-900">
//                                   {ticket.title}
//                                 </h4>
//                                 <span
//                                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
//                                     ticket.priority
//                                   )}`}
//                                 >
//                                   {ticket.priority}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>

//                           {/* Assignee dan Site dengan icon - HORIZONTAL */}
//                           <div className="flex items-center gap-4 mb-3 ml-9">
//                             <div className="flex items-center gap-2 text-sm text-gray-600">
//                               <UserIcon className="w-4 h-4 text-gray-400" />
//                               <span className="font-medium">
//                                 {ticket.assignee}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 text-sm text-gray-600">
//                               <ChatBubbleLeftRightIcon className="w-4 h-4 text-gray-400" />
//                               <span>{ticket.site}</span>
//                             </div>
//                           </div>

//                           {/* Deskripsi */}
//                           <div className="ml-9">
//                             <p className="text-sm text-gray-600 mb-3">
//                               {ticket.description}
//                             </p>

//                             {/* Status dan Tanggal */}
//                             <div className="flex justify-between items-center">
//                               <span
//                                 className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTicketStatusColor(
//                                   ticket.status
//                                 )}`}
//                               >
//                                 {ticket.status}
//                               </span>
//                               <div className="text-xs text-gray-500">
//                                 <span>Created: {ticket.createdAt}</span>
//                                 {ticket.resolvedAt && (
//                                   <span className="ml-2">
//                                     Resolved: {ticket.resolvedAt}
//                                   </span>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Separator */}
//                         {index < filteredTickets.length - 1 && (
//                           <hr className="border-gray-200 my-2" />
//                         )}
//                       </div>
//                     ))}

//                     {/* Empty State */}
//                     {filteredTickets.length === 0 && (
//                       <div className="text-center py-8">
//                         <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                           <DocumentChartBarIcon className="w-8 h-8 text-gray-400" />
//                         </div>
//                         <p className="text-gray-500">Belum ada tiket bantuan</p>
//                         <p className="text-gray-400 text-sm mt-1">
//                           Tiket bantuan yang Anda buat akan muncul di sini
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Modal Buat Tiket Baru */}
//       {isCreateModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-bold text-gray-900">
//                   Buat Tiket Bantuan Baru
//                 </h2>
//                 <button
//                   onClick={() => {
//                     setIsCreateModalOpen(false);
//                     setFormErrors({});
//                   }}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   <XMarkIcon className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-600 mt-1">
//                 Isi form berikut untuk mengajukan tiket bantuan
//               </p>
//             </div>

//             <div className="p-6 space-y-4">
//               {/* Site Selection */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Site
//                 </label>
//                 <select
//                   value={newTicket.site}
//                   onChange={(e) =>
//                     setNewTicket({ ...newTicket, site: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//                 >
//                   <option>IPAL Jakarta Pusat</option>
//                   <option>IPAL Jakarta Utara</option>
//                   <option>IPAL Jakarta Selatan</option>
//                   <option>IPAL Jakarta Barat</option>
//                   <option>IPAL Jakarta Timur</option>
//                 </select>
//               </div>

//               {/* Category Selection */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Kategori
//                 </label>
//                 <select
//                   value={newTicket.category}
//                   onChange={(e) =>
//                     setNewTicket({ ...newTicket, category: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
//                 >
//                   <option>Technical</option>
//                   <option>Operational</option>
//                   <option>Maintenance</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               {/* Problem Title */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Judul Masalah <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Masalah pompa filter tidak berfungsi"
//                   value={newTicket.title}
//                   onChange={(e) => {
//                     setNewTicket({ ...newTicket, title: e.target.value });
//                     if (formErrors.title) {
//                       setFormErrors({ ...formErrors, title: "" });
//                     }
//                   }}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white ${
//                     formErrors.title ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {formErrors.title && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {formErrors.title}
//                   </p>
//                 )}
//               </div>

//               {/* Problem Description */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Deskripsi Masalah <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   rows={4}
//                   placeholder="Jelaskan detail masalah yang Anda alami..."
//                   value={newTicket.description}
//                   onChange={(e) => {
//                     setNewTicket({ ...newTicket, description: e.target.value });
//                     if (formErrors.description) {
//                       setFormErrors({ ...formErrors, description: "" });
//                     }
//                   }}
//                   className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white ${
//                     formErrors.description
//                       ? "border-red-500"
//                       : "border-gray-300"
//                   }`}
//                 />
//                 {formErrors.description && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {formErrors.description}
//                   </p>
//                 )}
//               </div>

//               {/* Priority Selection */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Prioritas
//                 </label>
//                 <div className="grid grid-cols-3 gap-2">
//                   <button
//                     onClick={() =>
//                       setNewTicket({ ...newTicket, priority: "Low" })
//                     }
//                     className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
//                       newTicket.priority === "Low"
//                         ? "border-green-500 bg-green-50 text-green-700"
//                         : "border-gray-300 text-gray-900 bg-white"
//                     }`}
//                   >
//                     Low
//                   </button>
//                   <button
//                     onClick={() =>
//                       setNewTicket({ ...newTicket, priority: "Medium" })
//                     }
//                     className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
//                       newTicket.priority === "Medium"
//                         ? "border-blue-500 bg-blue-50 text-blue-700"
//                         : "border-gray-300 text-gray-900 bg-white"
//                     }`}
//                   >
//                     Medium
//                   </button>
//                   <button
//                     onClick={() =>
//                       setNewTicket({ ...newTicket, priority: "High" })
//                     }
//                     className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${
//                       newTicket.priority === "High"
//                         ? "border-red-500 bg-red-50 text-red-700"
//                         : "border-gray-300 text-gray-900 bg-white"
//                     }`}
//                   >
//                     High
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 border-t border-gray-200 flex gap-3">
//               <button
//                 onClick={() => {
//                   setIsCreateModalOpen(false);
//                   setFormErrors({});
//                 }}
//                 className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
//               >
//                 Batal
//               </button>
//               <button
//                 onClick={handleCreateTicket}
//                 className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
//               >
//                 <PlusIcon className="w-5 h-5" />
//                 Ajukan Tiket
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ==================================MENU HELP DESK OPERATOR : END =================================================================
// ==================================MENU HELP DESK OPERATOR : END =================================================================
// ==================================MENU HELP DESK OPERATOR : END =================================================================
// ==================================MENU HELP DESK OPERATOR : END =================================================================





// ==================================GABUNGAN MENU (MERGED) OPERATOR : START =================================================================

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
} from "@heroicons/react/24/outline";

export default function Operator() {
  const [selectedRange, setSelectedRange] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  // Refs untuk berbagai keperluan
  const dateInputRef = useRef(null);
  const timeInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const statusDropdownRef = useRef(null);
  const priorityDropdownRef = useRef(null);

  // State untuk Dashboard
  const pHData = [
    { day: "Mon", value: 6.5 },
    { day: "Tue", value: 6.8 },
    { day: "Wed", value: 7.0 },
    { day: "Thu", value: 7.2 },
    { day: "Fri", value: 7.1 },
    { day: "Sat", value: 6.9 },
    { day: "Sun", value: 6.7 },
  ];

  const flowRateData = [
    { day: "Mon", value: 450 },
    { day: "Tue", value: 520 },
    { day: "Wed", value: 480 },
    { day: "Thu", value: 550 },
    { day: "Fri", value: 500 },
    { day: "Sat", value: 420 },
    { day: "Sun", value: 380 },
  ];

  const recentActivityData = [
    {
      action: "Daily report submitted",
      time: "2 hours ago",
      status: "approved",
    },
    {
      action: "pH level recorded",
      time: "4 hours ago",
      status: "approved",
    },
    {
      action: "Flow rate measurement",
      time: "6 hours ago",
      status: "approved",
    },
  ];

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
    {
      id: 2,
      date: "2025-01-28",
      checkIn: "08:05 AM",
      checkOut: "16:02 PM",
      location: "Jakarta Utara - Site A",
      status: "approved",
      approvalStatus: "approved",
      checkInStatus: "Late",
      checkInLocation: "Lat: -6.123456, Long: 106.123456",
      checkOutLocation: "Lat: -6.123456, Long: 106.123456",
      selfieCheckIn: null,
      selfieCheckOut: null,
      approvedBy: "Admin",
      approvedAt: "2025-01-28 08:35 AM",
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
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Masalah Pompa Filter",
      priority: "High",
      status: "Open",
      assignee: "Budi Santoso",
      site: "IPAL Jakarta Pusat",
      description: "Pompa filter site Jakarta mengalami penurunan tekanan",
      createdAt: "2024-01-15",
      category: "Technical",
      resolvedAt: null,
    },
    {
      id: 2,
      title: "Permintaan Penggantian Alat",
      priority: "Medium",
      status: "Resolved",
      assignee: "Budi Santoso",
      site: "IPAL Jakarta Pusat",
      description: "pH meter perlu kalibrasi ulang",
      createdAt: "2024-01-14",
      category: "Maintenance",
      resolvedAt: "2024-01-15",
    },
  ]);

  const [newTicket, setNewTicket] = useState({
    site: "IPAL Jakarta Pusat",
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

  // Menu Items
  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "reports", name: "Daily Report", icon: DocumentChartBarIcon },
    { id: "presensi", name: "Presence", icon: MapPinIcon },
    { id: "help", name: "Help Desk", icon: CogIcon },
  ];

  // Effects
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
        setIsStatusDropdownOpen(false);
      }
      if (priorityDropdownRef.current && !priorityDropdownRef.current.contains(event.target)) {
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

  // ==================== DASHBOARD FUNCTIONS ====================

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
    if (!formData.additionalNotes.trim()) newErrors.additionalNotes = "Catatan tambahan harus diisi";

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

    setTimeout(() => {
      const newReport = {
        id: Date.now(),
        ...formData,
        uploadedFiles: [...uploadedFiles],
        timestamp: new Date().toISOString(),
        location: "IPAL Jakarta Pusat",
        operator: "Budi Santoso - Pagi",
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
      alert("Laporan berhasil disubmit!");
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
      location: "IPAL Jakarta Pusat",
      operator: "Budi Santoso - Pagi",
      status: "Draft",
    };

    setReports((prev) => [draftReport, ...prev]);
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

    if (files.length > 0 && errors.files) {
      setErrors((prev) => ({
        ...prev,
        files: "",
      }));
    }
  };

  const filteredReports = reports.filter(
    (report) =>
      report.additionalNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    if (isCheckOut) {
      setCurrentLocationCheckOut("Getting location...");
    } else {
      setCurrentLocation("Getting location...");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const locations = [
          "Jakarta Utara - Site A",
          "Jakarta Utara - Site B",
          "Jakarta Utara - Site C",
        ];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const locationString = `${randomLocation} (Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)})`;

        if (isCheckOut) {
          setCurrentLocationCheckOut(locationString);
          setLocationCapturedCheckOut(true);
        } else {
          setCurrentLocation(locationString);
          setLocationCaptured(true);
        }
        alert("Location captured successfully!");
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
        } else {
          setCurrentLocation("Location unavailable");
        }
        alert(`Failed to get location: ${errorMessage}`);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const startCamera = (isCheckOut = false) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          if (isCheckOut) {
            setStreamCheckOut(mediaStream);
            setIsCameraActiveCheckOut(true);
            if (videoRef.current) {
              videoRef.current.srcObject = mediaStream;
            }
          } else {
            setStream(mediaStream);
            setIsCameraActive(true);
            if (videoRef.current) {
              videoRef.current.srcObject = mediaStream;
            }
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
          alert("Cannot access camera. Please check permissions.");
        });
    } else {
      alert("Camera not supported in this browser.");
    }
  };

  const capturePhoto = (isCheckOut = false) => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
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
    fileInputRef.current?.click();
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
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const formattedHours = (now.getHours() % 12 || 12).toString().padStart(2, "0");
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
    alert(`Check-in berhasil! Waktu: ${checkInTime} - Status: ${checkInStatus}. Menunggu approval admin.`);
  };

  const handleConfirmCheckOut = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    const formattedHours = (now.getHours() % 12 || 12).toString().padStart(2, "0");
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
    if (!newTicket.description.trim()) errors.description = "Deskripsi masalah harus diisi";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const ticket = {
      id: Date.now(),
      title: newTicket.title,
      priority: newTicket.priority,
      status: "Open",
      assignee: "Budi Santoso",
      site: newTicket.site,
      description: newTicket.description,
      createdAt: new Date().toISOString().split("T")[0],
      category: newTicket.category,
      resolvedAt: null,
    };

    setTickets((prev) => [ticket, ...prev]);
    setNewTicket({
      site: "IPAL Jakarta Pusat",
      category: "Technical",
      title: "",
      description: "",
      priority: "Medium",
    });
    setFormErrors({});
    setIsCreateModalOpen(false);
    alert("Tiket bantuan berhasil diajukan!");
  };

  useEffect(() => {
    if (isCreateModalOpen) {
      setFormErrors({});
    }
  }, [isCreateModalOpen]);

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "Semua Status" || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === "Semua Prioritas" || ticket.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTicketStatusColor = (status) => {
    switch (status) {
      case "Open": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-green-100 text-green-800";
      case "Closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const statusOptions = ["Semua Status", "Open", "In Progress", "Resolved"];
  const priorityOptions = ["Semua Prioritas", "High", "Medium", "Low"];

  // ==================== RENDER FUNCTIONS ====================
  const renderDashboard = () => (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Operator Dashboard</h2>
        <p className="text-gray-600 mt-1">Welcome back! Monitor your daily activities and IPAL status</p>
      </div>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Reports Submitted", value: 24, percent: "+12%", icon: DocumentChartBarIcon },
          { label: "Attendance Rate", value: "98%", percent: "+2%", icon: ChartBarIcon },
          { label: "Next Shift", value: "Tomorrow", subValue: "08:00", icon: ClockIcon },
          { label: "Current Site", value: "Jakarta Utara A", icon: MapPinIcon },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                <div className="p-2 rounded-lg bg-blue-50">
                  <Icon className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                {item.subValue && <p className="text-sm text-gray-600 mt-1">{item.subValue}</p>}
              </div>
              {item.percent && (
                <p className={`text-xs font-medium mt-1 ${item.percent.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {item.percent} vs last month
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Latest Readings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "pH Level", value: "7.2", status: "normal" },
            { label: "Flow Rate", value: "450 L/h", status: "normal" },
            { label: "TDS", value: "480 ppm", status: "normal" },
            { label: "EC", value: "720 μS/cm", status: "normal" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{item.label}</p>
                  <p className="text-xl font-bold text-gray-900 mt-1">{item.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${item.status === "normal" ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className={`text-xs font-medium ${item.status === "normal" ? "text-green-600" : "text-red-600"}`}>
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Daily Report", icon: DocumentTextIcon, description: "Submit daily monitoring reports" },
          { label: "Attendance", icon: MapPinIcon, description: "Check-in and attendance records" },
          { label: "Schedule", icon: CalendarIcon, description: "View work schedule and shifts" },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-6">pH Level Trends (7 Days)</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>7.25</span><span>6.75</span><span>6.5</span>
            </div>
            <div className="ml-8">
              <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
                {pHData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 relative">
                    <div
                      className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
                      style={{ height: `${((data.value - 6.0) / 1.5) * 120}px` }}
                      onMouseEnter={() => setHoveredBar(`ph-${index}`)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {hoveredBar === `ph-${index}` && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                          {data.value}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-6">Flow Rate Trends (7 Days)</h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>600</span><span>450</span><span>300</span><span>150</span><span>0</span>
            </div>
            <div className="ml-8">
              <div className="w-full h-48 flex items-end justify-between gap-2 px-2 border-b border-l border-gray-200">
                {flowRateData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1 relative">
                    <div
                      className="w-6 bg-gradient-to-t from-green-400 to-green-600 rounded-t transition-all duration-300 hover:from-green-500 hover:to-green-700 cursor-pointer relative group"
                      style={{ height: `${(data.value / 600) * 120}px` }}
                      onMouseEnter={() => setHoveredBar(`flow-${index}`)}
                      onMouseLeave={() => setHoveredBar(null)}
                    >
                      {hoveredBar === `flow-${index}` && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                          {data.value} L/h
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-3">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200">
              <DocumentTextIcon className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-700">Submit Daily Report</span>
            </button>
            <button className="w-full flex text-left gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors border border-green-200">
              <ChartBarIcon className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-700">Record today's readings</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 lg:col-span-2">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivityData.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500" />
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDailyReport = () => (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Daily Report</h2>
        <p className="text-gray-600 mt-1">Submit your daily IPAL operational report</p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-200 mb-8">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
            <ExclamationTriangleIcon className="w-4 h-4 text-blue-700" />
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">Daily Report Guidelines</h3>
            <p className="text-blue-800 text-sm">
              Please ensure all measurements are accurate. Take photos of equipment and upload them with your report. Reports must be submitted before end of shift.
              <strong className="block mt-2">Semua field harus diisi sebelum submit!</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Report Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div id="date">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  ref={dateInputRef}
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                  className={`w-full p-3 border ${errors.date ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                />
                <button type="button" onClick={handleDateIconClick} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Time <span className="text-red-500">*</span></label>
              <div className="relative">
                <input
                  ref={timeInputRef}
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className={`w-full p-3 border ${errors.time ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
                />
                <button type="button" onClick={handleTimeIconClick} className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors">
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
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Water Parameters <span className="text-red-500">*</span></h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div id="pHLevel">
                <label className="block text-sm font-medium text-gray-700 mb-2">pH Level <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 7.2"
                  value={formData.pHLevel}
                  onChange={(e) => handleInputChange("pHLevel", e.target.value)}
                  className={`w-full p-3 border ${errors.pHLevel ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.pHLevel && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.pHLevel}
                  </p>
                )}
              </div>
              <div id="flowRate">
                <label className="block text-sm font-medium text-gray-700 mb-2">Flow Rate (L/h) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 450"
                  value={formData.flowRate}
                  onChange={(e) => handleInputChange("flowRate", e.target.value)}
                  className={`w-full p-3 border ${errors.flowRate ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.flowRate && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.flowRate}
                  </p>
                )}
              </div>
              <div id="volt">
                <label className="block text-sm font-medium text-gray-700 mb-2">Volt (V) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 220"
                  value={formData.volt}
                  onChange={(e) => handleInputChange("volt", e.target.value)}
                  className={`w-full p-3 border ${errors.volt ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Ampere (A) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 15"
                  value={formData.ampere}
                  onChange={(e) => handleInputChange("ampere", e.target.value)}
                  className={`w-full p-3 border ${errors.ampere ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.ampere && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.ampere}
                  </p>
                )}
              </div>
              <div id="tds">
                <label className="block text-sm font-medium text-gray-700 mb-2">TDS (ppm) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 480"
                  value={formData.tds}
                  onChange={(e) => handleInputChange("tds", e.target.value)}
                  className={`w-full p-3 border ${errors.tds ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
                />
                {errors.tds && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <ExclamationCircleIcon className="w-4 h-4" />
                    {errors.tds}
                  </p>
                )}
              </div>
              <div id="ec">
                <label className="block text-sm font-medium text-gray-700 mb-2">EC (μS/cm) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="e.g., 720"
                  value={formData.ec}
                  onChange={(e) => handleInputChange("ec", e.target.value)}
                  className={`w-full p-3 border ${errors.ec ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-gray-900`}
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
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Equipment Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Agitator</label>
              <select
                value={formData.agitatorStatus}
                onChange={(e) => handleInputChange("agitatorStatus", e.target.value)}
                className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="Normal">Normal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Settle</label>
              <select
                value={formData.settleStatus}
                onChange={(e) => handleInputChange("settleStatus", e.target.value)}
                className="w-full p-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
              >
                <option value="Normal">Normal</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Broken">Broken</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Out Filter</label>
              <select
                value={formData.outFilterStatus}
                onChange={(e) => handleInputChange("outFilterStatus", e.target.value)}
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
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Supporting Photos <span className="text-red-500">*</span></h3>
          <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" multiple accept="image/*" />
          <div
            onClick={handleContainerClick}
            className={`border-2 border-dashed ${errors.files ? "border-red-500" : "border-gray-300"} rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors`}
          >
            <CameraIcon className={`w-12 h-12 ${errors.files ? "text-red-500" : "text-gray-600"} mx-auto mb-3`} />
            <p className={`text-sm mb-3 ${errors.files ? "text-red-500" : "text-gray-500"}`}>
              {errors.files ? errors.files : "Click anywhere in this area to upload photos of equipment and readings"}
            </p>
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Uploaded files:</p>
                <ul className="text-sm text-gray-600">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="truncate">{file.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-b border-gray-200">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Additional Notes <span className="text-red-500">*</span></h3>
          <div id="additionalNotes">
            <label className="block text-sm font-medium text-gray-700 mb-2">Add any additional observations, issues, or inventory needs...</label>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
              rows={4}
              className={`w-full p-3 border ${errors.additionalNotes ? "border-red-500" : "border-gray-200"} bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition placeholder-gray-400 text-gray-900`}
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
              className={`w-full sm:w-auto px-8 py-3 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"} text-white rounded-lg transition-colors font-medium flex items-center justify-center gap-2`}
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
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <select className="px-4 py-2 border text-slate-800 bg-slate-100 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Semua Status</option>
                <option>Pending</option>
                <option>Setujui</option>
                <option>Tolak</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Export</button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredReports.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Belum ada laporan yang disubmit.</p>
              <p className="text-gray-400 text-sm mt-1">Submit laporan pertama Anda di atas.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredReports.map((report) => (
                <div key={report.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{report.location}</h3>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">{report.operator}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${report.status === "Submitted" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mb-4">{report.date} {report.time}</p>
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
                      {report.additionalNotes && <p className="text-gray-700 mb-4">{report.additionalNotes}</p>}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>Agitator: <span className="font-medium">{report.agitatorStatus}</span></span>
                        <span>Settle: <span className="font-medium">{report.settleStatus}</span></span>
                        <span>Out Filter: <span className="font-medium">{report.outFilterStatus}</span></span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
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
    <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Attendance System</h2>
          <p className="text-gray-600 mt-1">Mark your attendance with location and selfie verification</p>
        </div>
        <div className="flex-shrink-0">
          {!attendanceData.isCheckedIn ? (
            <button onClick={openCheckInModal} className="w-full lg:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              Check In Now
            </button>
          ) : !attendanceData.isCheckedOut ? (
            <button onClick={openCheckOutModal} className="w-full lg:w-auto px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              Check Out Now
            </button>
          ) : (
            <div className="text-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg">Attendance completed for today</div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h3 className="font-semibold text-lg text-gray-800">Today's Attendance</h3>
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ClockIcon className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Check-in Time</h4>
                  <p className="text-lg font-bold text-gray-900 mb-2">{attendanceData.checkInTime}</p>
                  <span className={`inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(attendanceData.status)}`}>
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
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Check-out Time</h4>
                  <p className="text-lg font-bold text-gray-900 mb-2">{attendanceData.checkOutTime}</p>
                  {attendanceData.isCheckedOut ? (
                    <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Not checked out yet
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
                  <h4 className="text-sm font-medium text-gray-600 mb-1">Location</h4>
                  <p className="text-sm font-bold text-gray-900 mb-2 leading-tight break-words">{attendanceData.location}</p>
                  <span className="inline-flex items-center justify-center min-w-[100px] px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {attendanceData.location !== "Not located yet" ? "Verified" : "Not verified"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200 bg-gray-50 rounded-t-xl">
          <h3 className="font-semibold text-lg text-gray-800">Attendance History</h3>
        </div>
        <div className="p-4 bg-white rounded-b-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Check In</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Check Out</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {attendanceHistory.map((record) => (
                  <tr key={record.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{record.date}</td>
                    <td className="py-3 px-4 text-gray-900">{record.checkIn}</td>
                    <td className="py-3 px-4 text-gray-900">{record.checkOut}</td>
                    <td className="py-3 px-4 text-gray-900 text-sm">{record.location}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-2 py-1 rounded-full text-xs font-medium ${getApprovalStatusColor(record.approvalStatus)}`}>
                        {record.approvalStatus === "pending" && "⏳ pending"}
                        {record.approvalStatus === "approved" && "✓ approved"}
                        {record.approvalStatus === "rejected" && "✗ rejected"}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button onClick={() => openDetailModal(record)} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
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
              <p className="text-gray-500">No attendance records found.</p>
              <p className="text-gray-400 text-sm mt-1">Your attendance history will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderHelpDesk = () => (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
        <div className="flex-1">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Help Desk</h2>
          <p className="text-gray-600 mt-1">Ajukan bantuan atau laporkan masalah</p>
        </div>
        <div className="flex-shrink-0">
          <button onClick={() => setIsCreateModalOpen(true)} className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Buat Tiket
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
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
                    onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
                  >
                    <span className="truncate">{statusFilter}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${option === statusFilter ? "bg-blue-50 text-blue-700" : ""}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative" ref={priorityDropdownRef}>
                  <button
                    onClick={() => setIsPriorityDropdownOpen(!isPriorityDropdownOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 w-40 justify-between text-gray-900 bg-white"
                  >
                    <span className="truncate">{priorityFilter}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-900 text-sm ${option === priorityFilter ? "bg-blue-50 text-blue-700" : ""}`}
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
              <h3 className="font-semibold text-lg text-gray-800">Daftar Tiket</h3>
            </div>
            <div className="p-4">
              {filteredTickets.map((ticket, index) => (
                <div key={ticket.id} className="mb-6 last:mb-0">
                  <div className="py-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-semibold text-gray-900">{ticket.title}</h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
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
                      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                      <div className="flex justify-between items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTicketStatusColor(ticket.status)}`}>
                          {ticket.status}
                        </span>
                        <div className="text-xs text-gray-500">
                          <span>Created: {ticket.createdAt}</span>
                          {ticket.resolvedAt && <span className="ml-2">Resolved: {ticket.resolvedAt}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < filteredTickets.length - 1 && <hr className="border-gray-200 my-2" />}
                </div>
              ))}
              {filteredTickets.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DocumentChartBarIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Belum ada tiket bantuan</p>
                  <p className="text-gray-400 text-sm mt-1">Tiket bantuan yang Anda buat akan muncul di sini</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDevelopment = () => (
    <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md w-full">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CogIcon className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Dalam Pengembangan</h3>
          <p className="text-gray-600">
            Fitur {menuItems.find((m) => m.id === activeMenu)?.name} sedang dalam tahap pengembangan.
            Tim developer kami sedang bekerja untuk menyiapkan fitur ini.
          </p>
        </div>
      </div>
    </div>
  );

  // ==================== MODAL RENDER FUNCTIONS ====================
  const renderCheckInModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Check In</h2>
          <p className="text-gray-600 mt-1">Complete both steps to check in</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">1. Capture Location</h3>
            <button
              onClick={() => getCurrentLocation(false)}
              className={`w-full flex items-center gap-3 p-4 border rounded-lg ${locationCaptured ? "border-green-500 bg-green-50 text-green-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              <MapPinIcon className="w-5 h-5" />
              <div className="text-left flex-1">
                <span className="block">{locationCaptured ? "Location Captured" : "Get Current Location"}</span>
                <span className="block text-xs mt-1 text-gray-500">{currentLocation}</span>
              </div>
              {locationCaptured && <CheckCircleIcon className="w-5 h-5 ml-auto" />}
            </button>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">2. Upload Selfie</h3>
            {isCameraActive && (
              <div className="mb-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-64 object-cover" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button onClick={() => capturePhoto(false)} className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100">
                      <CameraIcon className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                </div>
                <button onClick={() => stopCamera(false)} className="mt-2 text-sm text-red-600 hover:text-red-800">Close Camera</button>
              </div>
            )}
            {!isCameraActive && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => startCamera(false)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">Take Photo</span>
                </button>
                <button
                  onClick={() => triggerFileInput(false)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">Upload Photo</span>
                </button>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={(e) => handleSelfieUpload(e, false)} accept="image/*" className="hidden" />
            {selfiePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Selfie Preview:</p>
                <div className="flex items-center gap-3">
                  <img src={selfiePreview} alt="Selfie preview" className="w-20 h-20 object-cover rounded-lg border border-gray-300" />
                  <div className="flex-1">
                    <p className="text-sm text-green-600 font-medium">✓ Selfie captured</p>
                    <p className="text-xs text-gray-500">Ready for check-in</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => { stopCamera(false); setIsCheckInModalOpen(false); }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCheckIn}
            disabled={!locationCaptured || !selfieUploaded}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Confirm Check-In
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
          <p className="text-gray-600 mt-1">Complete both steps to check out</p>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">1. Capture Location</h3>
            <button
              onClick={() => getCurrentLocation(true)}
              className={`w-full flex items-center gap-3 p-4 border rounded-lg ${locationCapturedCheckOut ? "border-green-500 bg-green-50 text-green-700" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"}`}
            >
              <MapPinIcon className="w-5 h-5" />
              <div className="text-left flex-1">
                <span className="block">{locationCapturedCheckOut ? "Location Captured" : "Get Current Location"}</span>
                <span className="block text-xs mt-1 text-gray-500">{currentLocationCheckOut}</span>
              </div>
              {locationCapturedCheckOut && <CheckCircleIcon className="w-5 h-5 ml-auto" />}
            </button>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">2. Upload Selfie</h3>
            {isCameraActiveCheckOut && (
              <div className="mb-4">
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video ref={videoRef} autoPlay playsInline className="w-full h-64 object-cover" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <button onClick={() => capturePhoto(true)} className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100">
                      <CameraIcon className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                </div>
                <button onClick={() => stopCamera(true)} className="mt-2 text-sm text-red-600 hover:text-red-800">Close Camera</button>
              </div>
            )}
            {!isCameraActiveCheckOut && (
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => startCamera(true)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <CameraIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">Take Photo</span>
                </button>
                <button
                  onClick={() => triggerFileInput(true)}
                  className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <PhotoIcon className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium text-gray-400">Upload Photo</span>
                </button>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={(e) => handleSelfieUpload(e, true)} accept="image/*" className="hidden" />
            {selfiePreviewCheckOut && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Selfie Preview:</p>
                <div className="flex items-center gap-3">
                  <img src={selfiePreviewCheckOut} alt="Selfie preview" className="w-20 h-20 object-cover rounded-lg border border-gray-300" />
                  <div className="flex-1">
                    <p className="text-sm text-green-600 font-medium">✓ Selfie captured</p>
                    <p className="text-xs text-gray-500">Ready for check-out</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => { stopCamera(true); setIsCheckOutModalOpen(false); }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmCheckOut}
            disabled={!locationCapturedCheckOut || !selfieUploadedCheckOut}
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
            <h2 className="text-xl font-bold text-gray-900">Attendance Details</h2>
            <button onClick={() => setIsDetailModalOpen(false)} className="text-gray-400 hover:text-gray-600">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">Date: {selectedAttendance.date}</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Approval Status</h3>
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center justify-center min-w-[100px] gap-1 px-3 py-1 rounded-full text-sm font-medium ${getApprovalStatusColor(selectedAttendance.approvalStatus)}`}>
                {selectedAttendance.approvalStatus === "pending" && "⏳ Pending Approval"}
                {selectedAttendance.approvalStatus === "approved" && "✓ Approved by Admin"}
                {selectedAttendance.approvalStatus === "rejected" && "✗ Rejected by Admin"}
              </span>
              {selectedAttendance.approvalStatus === "pending" && (
                <span className="text-sm text-gray-600">Waiting for admin approval</span>
              )}
              {selectedAttendance.approvalStatus === "approved" && selectedAttendance.approvedBy && (
                <span className="text-sm text-gray-600">Approved by {selectedAttendance.approvedBy} at {selectedAttendance.approvedAt}</span>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-600" />
              Check-in Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><p className="text-sm text-gray-600">Time</p><p className="font-medium text-gray-900">{selectedAttendance.checkIn}</p></div>
              <div><p className="text-sm text-gray-600">Status</p><p className={`font-medium ${selectedAttendance.checkInStatus === "On Time" ? "text-green-600" : "text-red-600"}`}>{selectedAttendance.checkInStatus}</p></div>
              <div className="md:col-span-2"><p className="text-sm text-gray-600">Location</p><p className="font-medium text-gray-900 text-sm">{selectedAttendance.checkInLocation}</p></div>
            </div>
            {selectedAttendance.selfieCheckIn && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Check-in Selfie</p>
                <img src={selectedAttendance.selfieCheckIn} alt="Check-in selfie" className="w-48 h-48 object-cover rounded-lg border border-gray-300" />
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-blue-600" />
              Check-out Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><p className="text-sm text-gray-600">Time</p><p className="font-medium text-gray-900">{selectedAttendance.checkOut}</p></div>
              <div><p className="text-sm text-gray-600">Status</p><p className="font-medium text-gray-900">{selectedAttendance.checkOut === "--:--" ? "Not checked out" : "Completed"}</p></div>
              <div className="md:col-span-2"><p className="text-sm text-gray-600">Location</p><p className="font-medium text-gray-900 text-sm">{selectedAttendance.checkOutLocation}</p></div>
            </div>
            {selectedAttendance.selfieCheckOut && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">Check-out Selfie</p>
                <img src={selectedAttendance.selfieCheckOut} alt="Check-out selfie" className="w-48 h-48 object-cover rounded-lg border border-gray-300" />
              </div>
            )}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Menunggu Approval Admin</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Attendance Anda sedang menunggu persetujuan dari admin. Anda akan mendapatkan notifikasi setelah disetujui.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200">
          <button onClick={() => setIsDetailModalOpen(false)} className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );

  const renderCreateTicketModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Buat Tiket Bantuan Baru</h2>
            <button onClick={() => { setIsCreateModalOpen(false); setFormErrors({}); }} className="text-gray-400 hover:text-gray-600">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-1">Isi form berikut untuk mengajukan tiket bantuan</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site</label>
            <select
              value={newTicket.site}
              onChange={(e) => setNewTicket({ ...newTicket, site: e.target.value })}
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
            <select
              value={newTicket.category}
              onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
            >
              <option>Technical</option>
              <option>Operational</option>
              <option>Maintenance</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Judul Masalah <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Masalah pompa filter tidak berfungsi"
              value={newTicket.title}
              onChange={(e) => {
                setNewTicket({ ...newTicket, title: e.target.value });
                if (formErrors.title) setFormErrors({ ...formErrors, title: "" });
              }}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white ${formErrors.title ? "border-red-500" : "border-gray-300"}`}
            />
            {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Masalah <span className="text-red-500">*</span></label>
            <textarea
              rows={4}
              placeholder="Jelaskan detail masalah yang Anda alami..."
              value={newTicket.description}
              onChange={(e) => {
                setNewTicket({ ...newTicket, description: e.target.value });
                if (formErrors.description) setFormErrors({ ...formErrors, description: "" });
              }}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 bg-white ${formErrors.description ? "border-red-500" : "border-gray-300"}`}
            />
            {formErrors.description && <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Prioritas</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setNewTicket({ ...newTicket, priority: "Low" })}
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${newTicket.priority === "Low" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-300 text-gray-900 bg-white"}`}
              >Low</button>
              <button
                onClick={() => setNewTicket({ ...newTicket, priority: "Medium" })}
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${newTicket.priority === "Medium" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-300 text-gray-900 bg-white"}`}
              >Medium</button>
              <button
                onClick={() => setNewTicket({ ...newTicket, priority: "High" })}
                className={`px-3 py-2 border rounded-lg text-sm hover:bg-gray-50 ${newTicket.priority === "High" ? "border-red-500 bg-red-50 text-red-700" : "border-gray-300 text-gray-900 bg-white"}`}
              >High</button>
            </div>
          </div>
        </div>
        <div className="p-6 border-t border-gray-200 flex gap-3">
          <button
            onClick={() => { setIsCreateModalOpen(false); setFormErrors({}); }}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 bg-white"
          >Batal</button>
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

  // ==================== MAIN RENDER ====================
  return (
    <div className="flex min-h-screen bg-white">
      {/* Overlay mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white">
          <img src="/hero/logosioptima.png" alt="logo" className="w-9 h-9 rounded" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
            <p className="text-sm text-gray-600">IPAL Monitoring</p>
          </div>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto p-2 text-gray-800 hover:text-teal-600 transition">
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
                    onClick={() => { setActiveMenu(item.id); setIsSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${activeMenu === item.id ? "bg-teal-50 text-teal-800 border-r-2 border-teal-600" : "text-gray-800 hover:bg-gray-100"}`}
                  >
                    <Icon className="w-5 h-5 text-gray-800" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">O</div>
              <div>
                <p className="font-semibold text-gray-900">Operator SIOPTIMA</p>
                <p className="text-sm text-gray-600">Operator</p>
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
              <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-800 hover:text-teal-600">
                <Bars3Icon className="w-6 h-6 text-gray-800" />
              </button>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">{menuItems.find((m) => m.id === activeMenu)?.name}</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-800 hover:text-teal-600 relative">
                <BellIcon className="w-6 h-6 text-gray-800" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div ref={dropdownRef} className="relative flex flex-col items-end gap-2">
                <button
                  onClick={(e) => { e.stopPropagation(); setDropdownOpen((prev) => !prev); }}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">O</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-4 h-4 text-gray-800 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
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

      {/* Canvas untuk capture foto (hidden) */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}

// ==================================GABUNGAN MENU (MERGED) OPERATOR : END =================================================================
// ==================================GABUNGAN MENU (MERGED) OPERATOR : END =================================================================
// ==================================GABUNGAN MENU (MERGED) OPERATOR : END =================================================================
// ==================================GABUNGAN MENU (MERGED) OPERATOR : END =================================================================
// ==================================GABUNGAN MENU (MERGED) OPERATOR : END =================================================================