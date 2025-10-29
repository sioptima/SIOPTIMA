// ==================================MENU DASHBOARD : START =================================================================
// ==================================MENU DASHBOARD : START =================================================================
// ==================================MENU DASHBOARD : START =================================================================
// ==================================MENU DASHBOARD : START =================================================================

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
// } from "@heroicons/react/24/outline";

// export default function HRD() {
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
//     { id: "validation", name: "Attendance Validation", icon: MapPinIcon },
//   ];

//   // Data untuk Weekly Attendance Trends - SESUAI GAMBAR
//   const weeklyAttendanceData = [
//     { day: "Mon", present: 115, late: 5, absent: 7 },
//     { day: "Tue", present: 118, late: 4, absent: 5 },
//     { day: "Wed", present: 120, late: 3, absent: 4 },
//     { day: "Thu", present: 116, late: 6, absent: 5 },
//     { day: "Fri", present: 119, late: 4, absent: 4 },
//     { day: "Sat", present: 110, late: 8, absent: 9 },
//     { day: "Sun", present: 105, late: 7, absent: 15 },
//   ];

//   // Data untuk Today's Status - SESUAI GAMBAR 2
//   const todayStatusData = [
//     { status: "Present", value: 85, color: "#10B981" },
//     { status: "Late", value: 7, color: "#F59E0B" },
//     { status: "Absent", value: 8, color: "#EF4444" },
//   ];

//   // Data untuk Top Performers - SESUAI GAMBAR 3
//   const topPerformersData = [
//     { name: "Budi Santoso", location: "Jakarta Utara" },
//     { name: "Siti Nurhaliza", location: "Bandung" },
//     { name: "Ahmad Hidayat", location: "Surabaya" },
//     { name: "David Lesteri", location: "Seoul" },
//   ];

//   // Data untuk Recent Attendance - SESUAI GAMBAR 3
//   const recentAttendanceData = [
//     {
//       name: "Budi Santoso",
//       location: "Jakarta Utara",
//       time: "08:00",
//       status: "approved",
//     },
//     {
//       name: "Siti Nurhaliza",
//       location: "Bandung",
//       time: "08:05",
//       status: "pending",
//     },
//     {
//       name: "Ahmad Hidayat",
//       location: "Surabaya",
//       time: "16:02",
//       status: "approved",
//     },
//     {
//       name: "Dewi Lesteri",
//       location: "Semarang",
//       time: "08:10",
//       status: "pending",
//     },
//   ];

//   // Fungsi untuk Pie Chart dengan interaksi - TETAP SAMA seperti kode asli
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
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600">HRD System</p>
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

//         {/* HRD badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 H
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">HRD SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">HRD</p>
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
//                     className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     H
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
//             {/* Headline + Time Range Filter */}
//             <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
//               <div>
//                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//                   HRD Dashboard
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Monitor operator attendance and performance
//                 </p>
//               </div>
//             </div>

//             {/* TOP KPIs - SESUAI GAMBAR 1 */}
//             <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//               {[
//                 {
//                   label: "Total Operators",
//                   value: 127,
//                   percent: "+2.1%",
//                   icon: UsersIcon,
//                 },
//                 {
//                   label: "Present Today",
//                   value: 118,
//                   percent: "+1.5%",
//                   icon: CheckCircleIcon,
//                 },
//                 {
//                   label: "Pending Validation",
//                   value: 8,
//                   percent: "-0.5%",
//                   icon: ClockIcon,
//                 },
//                 {
//                   label: "Attendance Rate",
//                   value: "96.5%",
//                   percent: "+0.8%",
//                   icon: ChartBarIcon,
//                 },
//               ].map((item, i) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <p className="text-gray-800 font-semibold">
//                         {item.label}
//                       </p>
//                       <div className="p-3 rounded-xl bg-teal-50">
//                         <Icon className="w-5 h-5 text-teal-600" />
//                       </div>
//                     </div>
//                     <p className="text-4xl font-bold text-gray-900">
//                       {item.value}
//                     </p>
//                     <p
//                       className={`text-xs font-medium mt-1 ${
//                         item.percent.startsWith("+")
//                           ? "text-green-600"
//                           : "text-red-600"
//                       }`}
//                     >
//                       {item.percent} vs last month
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* SECOND ROW - Charts */}
//             <div className="mb-9 grid grid-cols-1 xl:grid-cols-2 gap-6">
//               {/* Weekly Attendance Trends - DIPERBAIKI dengan skala yang tepat */}
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                   Weekly Attendance Trends
//                 </h3>
//                 <div className="relative">
//                   {/* Y-axis labels */}
//                   <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                     <span>120</span>
//                     <span>90</span>
//                     <span>60</span>
//                     <span>30</span>
//                     <span>0</span>
//                   </div>

//                   {/* Chart area - SKALA YANG TEPAT */}
//                   <div className="ml-8">
//                     <div className="w-full h-48 flex items-end justify-between gap-1 px-2 border-b border-l border-gray-200">
//                       {weeklyAttendanceData.map((data, index) => (
//                         <div
//                           key={index}
//                           className="flex flex-col items-center flex-1 relative"
//                         >
//                           {/* Grouped bars - 3 batang terpisah untuk setiap hari */}
//                           <div className="flex items-end justify-center gap-1 w-full">
//                             {/* Present bar - hijau */}
//                             <div
//                               className="w-3 bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600 cursor-pointer relative group"
//                               style={{
//                                 height: `${(data.present / 120) * 120}px`,
//                               }}
//                               onMouseEnter={() =>
//                                 setHoveredBar(`${index}-present`)
//                               }
//                               onMouseLeave={() => setHoveredBar(null)}
//                             >
//                               {hoveredBar === `${index}-present` && (
//                                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                   Present: {data.present}
//                                 </div>
//                               )}
//                             </div>

//                             {/* Late bar - kuning */}
//                             <div
//                               className="w-3 bg-yellow-500 rounded-t transition-all duration-300 hover:bg-yellow-600 cursor-pointer relative group"
//                               style={{ height: `${(data.late / 120) * 120}px` }}
//                               onMouseEnter={() =>
//                                 setHoveredBar(`${index}-late`)
//                               }
//                               onMouseLeave={() => setHoveredBar(null)}
//                             >
//                               {hoveredBar === `${index}-late` && (
//                                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                   Late: {data.late}
//                                 </div>
//                               )}
//                             </div>

//                             {/* Absent bar - merah */}
//                             <div
//                               className="w-3 bg-red-500 rounded-t transition-all duration-300 hover:bg-red-600 cursor-pointer relative group"
//                               style={{
//                                 height: `${(data.absent / 120) * 120}px`,
//                               }}
//                               onMouseEnter={() =>
//                                 setHoveredBar(`${index}-absent`)
//                               }
//                               onMouseLeave={() => setHoveredBar(null)}
//                             >
//                               {hoveredBar === `${index}-absent` && (
//                                 <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
//                                   Absent: {data.absent}
//                                 </div>
//                               )}
//                             </div>
//                           </div>

//                           {/* Day label */}
//                           <span className="text-xs text-gray-600 mt-2">
//                             {data.day}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Legend di bawah SESUAI GAMBAR */}
//                     <div className="flex justify-center gap-4 mt-4 text-xs">
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-red-500 rounded"></div>
//                         <span className="text-gray-600">absent</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-yellow-500 rounded"></div>
//                         <span className="text-gray-600">late</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-green-500 rounded"></div>
//                         <span className="text-gray-600">present</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Today's Status - PIE CHART TETAP SAMA */}
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                   Today's Status
//                 </h3>
//                 <div className="flex flex-col lg:flex-row items-center gap-8">
//                   {/* Pie Chart dengan interaksi - TETAP SAMA */}
//                   <div className="relative flex flex-col items-center">
//                     <svg
//                       width="160"
//                       height="160"
//                       viewBox="0 0 100 100"
//                       className="cursor-pointer"
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

//                     {/* Text di bawah pie chart - TETAP SAMA */}
//                     <div className="text-center mt-4">
//                       <div className="text-2xl font-bold text-gray-800">
//                         85%
//                       </div>
//                       <div className="text-sm text-gray-600">Present</div>
//                     </div>

//                     {/* Tooltip untuk pie chart - TETAP SAMA */}
//                     {hoveredPie !== null && (
//                       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
//                         <div className="flex items-center gap-2">
//                           <div
//                             className="w-3 h-3 rounded"
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

//                   {/* Legend dengan interaksi hover - TETAP SAMA */}
//                   <div className="space-y-4 flex-1">
//                     {todayStatusData.map((item, index) => (
//                       <div
//                         key={item.status}
//                         className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
//                           hoveredPie === index
//                             ? "bg-gray-50 transform scale-105"
//                             : ""
//                         }`}
//                         onMouseEnter={() => setHoveredPie(index)}
//                         onMouseLeave={() => setHoveredPie(null)}
//                       >
//                         <div className="flex items-center gap-3">
//                           <div
//                             className="w-4 h-4 rounded transition-transform duration-200"
//                             style={{ backgroundColor: item.color }}
//                           ></div>
//                           <span className="text-sm text-gray-700 font-medium">
//                             {item.status}
//                           </span>
//                         </div>
//                         <span className="text-lg font-bold text-gray-900">
//                           {item.value}%
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* LAST ROW - Top Performers dan Recent Attendance SESUAI GAMBAR 3 */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Top Performers */}
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                   Top Performers (This Month)
//                 </h3>
//                 <div className="space-y-4">
//                   {topPerformersData.map((performer, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
//                     >
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <p className="font-semibold text-gray-900">
//                             {performer.name}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             {performer.location}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-gray-900">
//                           {index === 0
//                             ? "100%"
//                             : index === 1
//                               ? "98%"
//                               : index === 2
//                                 ? "97%"
//                                 : "96%"}
//                         </p>
//                         <p className="text-xs text-teal-600 font-medium">
//                           excellent
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Recent Attendance - BAGIAN YANG SUDAH DIREVISI */}
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//                 <div className="flex justify-between items-center mb-5">
//                   <h3 className="font-semibold text-lg text-gray-800">
//                     Recent Attendance
//                   </h3>
//                   <button className="text-teal-600 text-sm font-medium hover:underline">
//                     View All
//                   </button>
//                 </div>
//                 <div className="space-y-4">
//                   {recentAttendanceData.map((attendance, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
//                     >
//                       <div>
//                         <p className="font-semibold text-gray-900">
//                           {attendance.name}
//                         </p>
//                         <p className="text-sm text-gray-600">
//                           {attendance.location} • {attendance.time}
//                         </p>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         {attendance.status === "approved" ? (
//                           <CheckCircleIcon className="w-5 h-5 text-green-500" />
//                         ) : (
//                           <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
//                         )}
//                         <span
//                           className={`px-3 py-1 rounded-full text-xs font-medium ${
//                             attendance.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
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
//       </div>
//     </div>
//   );
// }

// ==================================MENU DASHBOARD : END =================================================================
// ==================================MENU DASHBOARD : END =================================================================
// ==================================MENU DASHBOARD : END =================================================================
// ==================================MENU DASHBOARD : END =================================================================

// ==================================MENU Attendance Validation : START =================================================================
// ==================================MENU Attendance Validation : START =================================================================
// ==================================MENU Attendance Validation : START =================================================================
// ==================================MENU Attendance Validation : START =================================================================
// ==================================MENU Attendance Validation : START =================================================================
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
//   MagnifyingGlassIcon,
//   PlusIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   ClockIcon,
//   EyeIcon,
// } from "@heroicons/react/24/outline";

// export default function HRD() {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("validation");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
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
//     { id: "validation", name: "Attendance Validation", icon: MapPinIcon },
//   ];

//   // Data untuk attendance validation
//   const attendanceData = [
//     {
//       id: 1,
//       operator: "Budi Santoso",
//       site: "Jakarta Utara - Site A",
//       date: "2025-01-27",
//       checkIn: "08:00",
//       checkOut: "16:00",
//       status: "pending",
//     },
//     {
//       id: 2,
//       operator: "Siti Nurhaliza",
//       site: "Bandung - Site B",
//       date: "2025-01-27",
//       checkIn: "08:05",
//       checkOut: "16:02",
//       status: "pending",
//     },
//     {
//       id: 3,
//       operator: "Ahmad Hidayat",
//       site: "Surabaya - Site C",
//       date: "2025-01-27",
//       checkIn: "07:58",
//       checkOut: "16:05",
//       status: "approved",
//     },
//     {
//       id: 4,
//       operator: "Dewi Lestari",
//       site: "Semarang - Site D",
//       date: "2025-01-27",
//       checkIn: "08:10",
//       checkOut: "---",
//       status: "pending",
//     },
//   ];

//   // Filter data berdasarkan status dan pencarian
//   const filteredData = attendanceData.filter((item) => {
//     const matchesSearch =
//       item.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.site.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesFilter =
//       selectedFilter === "All" || item.status === selectedFilter.toLowerCase();

//     return matchesSearch && matchesFilter;
//   });

//   // Statistik
//   const stats = {
//     total: attendanceData.length,
//     pending: attendanceData.filter((item) => item.status === "pending").length,
//     approved: attendanceData.filter((item) => item.status === "approved")
//       .length,
//     rejected: attendanceData.filter((item) => item.status === "rejected")
//       .length,
//   };

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
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600">HRD System</p>
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

//         {/* HRD badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 H
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">HRD SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">HRD</p>
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
//                     className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600
//       rounded-full flex items-center justify-center text-white font-bold"
//                   >
//                     H
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

//         {/* ATTENDANCE VALIDATION CONTENT */}
//         {activeMenu === "validation" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Header Section */}
//             <div className="mb-8">
//               <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                 Attendance Validation
//               </h1>
//               <p className="text-gray-600">
//                 Review and validate operator attendance records
//               </p>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Total Today</h3>
//                   <div className="p-2 bg-gray-100 rounded-lg">
//                     <DocumentChartBarIcon className="w-5 h-5 text-gray-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.total}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Pending: {stats.pending}
//                 </p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Approved</h3>
//                   <div className="p-2 bg-green-100 rounded-lg">
//                     <CheckCircleIcon className="w-5 h-5 text-green-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.approved}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">Validated records</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Rejected</h3>
//                   <div className="p-2 bg-red-100 rounded-lg">
//                     <XCircleIcon className="w-5 h-5 text-red-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.rejected}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">Invalid records</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Pending Review</h3>
//                   <div className="p-2 bg-yellow-100 rounded-lg">
//                     <ClockIcon className="w-5 h-5 text-yellow-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">
//                   {stats.pending}
//                 </p>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Awaiting validation
//                 </p>
//               </div>
//             </div>

//             {/* Filter Section */}
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//               <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//                 <div className="relative flex-1 max-w-lg">
//                   <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search by operator or site..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500"
//                   />
//                 </div>

//                 {/* Status Filter Buttons */}
//                 <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//                   {["All", "Pending", "Approved", "Rejected"].map((filter) => (
//                     <button
//                       key={filter}
//                       onClick={() => setSelectedFilter(filter)}
//                       className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                         selectedFilter === filter
//                           ? "bg-teal-600 text-white shadow-sm"
//                           : "text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {filter}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Attendance Table */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Desktop Table Header */}
//               <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-3">Operator</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-1">Date</div>
//                 <div className="col-span-1">Check-In</div>
//                 <div className="col-span-1">Check-Out</div>
//                 <div className="col-span-2 text-center">Status</div>
//                 <div className="col-span-2 text-center">Actions</div>
//               </div>

//               {/* Table Body */}
//               <div className="divide-y divide-gray-200">
//                 {filteredData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition items-center"
//                   >
//                     {/* Mobile View - Card Layout */}
//                     <div className="md:hidden space-y-3">
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <p className="font-medium text-gray-900">
//                             {item.operator}
//                           </p>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {item.site}
//                           </p>
//                         </div>
//                         <span
//                           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
//                             item.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : item.status === "rejected"
//                                 ? "bg-red-100 text-red-800"
//                                 : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {item.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <p className="text-gray-600">Date</p>
//                           <p className="text-gray-900 font-medium">
//                             {item.date}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-gray-600">Check-In/Out</p>
//                           <div className="flex items-center gap-3 text-gray-900 font-medium">
//                             <div className="flex items-center gap-1">
//                               <ClockIcon className="w-4 h-4 text-green-600" />
//                               <span className="text-sm">{item.checkIn}</span>
//                             </div>
//                             <span className="text-gray-400">/</span>
//                             <div className="flex items-center gap-1">
//                               <ClockIcon className="w-4 h-4 text-red-600" />
//                               <span className="text-sm">{item.checkOut}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                         <div className="flex gap-2">
//                           {item.status === "pending" && (
//                             <>
//                               {/* Approve Button (Check Icon) */}
//                               <button className="text-green-600 hover:text-green-800 transition p-2 rounded hover:bg-green-50">
//                                 <CheckCircleIcon className="w-5 h-5" />
//                               </button>

//                               {/* Reject Button (X Icon) */}
//                               <button className="text-red-600 hover:text-red-800 transition p-2 rounded hover:bg-red-50">
//                                 <XCircleIcon className="w-5 h-5" />
//                               </button>
//                             </>
//                           )}
//                           {(item.status === "approved" ||
//                             item.status === "rejected") && (
//                             /* Review Button (Eye Icon) */
//                             <button className="text-blue-600 hover:text-blue-800 transition p-2 rounded hover:bg-blue-50">
//                               <EyeIcon className="w-5 h-5" />
//                             </button>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Desktop View - Grid Layout */}
//                     <div className="hidden md:block col-span-3">
//                       <p className="font-medium text-gray-900">
//                         {item.operator}
//                       </p>
//                     </div>

//                     <div className="hidden md:block col-span-2">
//                       <p className="text-gray-700">{item.site}</p>
//                     </div>

//                     <div className="hidden md:block col-span-1">
//                       <p className="text-gray-700 text-sm">{item.date}</p>
//                     </div>

//                     <div className="hidden md:block col-span-1">
//                       <div className="flex items-center gap-2 text-gray-700">
//                         <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
//                         <span className="text-sm font-medium">
//                           {item.checkIn}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="hidden md:block col-span-1">
//                       <div className="flex items-center gap-2 text-gray-700">
//                         <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
//                         <span className="text-sm font-medium">
//                           {item.checkOut}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="hidden md:block col-span-2">
//                       <div className="flex justify-center">
//                         <span
//                           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
//                             item.status === "approved"
//                               ? "bg-green-100 text-green-800"
//                               : item.status === "rejected"
//                                 ? "bg-red-100 text-red-800"
//                                 : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {item.status}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="hidden md:block col-span-2">
//                       <div className="flex gap-2 justify-center">
//                         {item.status === "pending" && (
//                           <>
//                             {/* Approve Button (Check Icon) */}
//                             <button className="text-green-600 hover:text-green-800 transition p-2 rounded hover:bg-green-50">
//                               <CheckCircleIcon className="w-5 h-5" />
//                             </button>

//                             {/* Reject Button (X Icon) */}
//                             <button className="text-red-600 hover:text-red-800 transition p-2 rounded hover:bg-red-50">
//                               <XCircleIcon className="w-5 h-5" />
//                             </button>
//                           </>
//                         )}
//                         {(item.status === "approved" ||
//                           item.status === "rejected") && (
//                           /* Review Button (Eye Icon) */
//                           <button className="text-blue-600 hover:text-blue-800 transition p-2 rounded hover:bg-blue-50">
//                             <EyeIcon className="w-5 h-5" />
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// ==================================MENU Recent Attendace HRD : END =================================================================
// ==================================MENU Recent Attendace HRD : END =================================================================
// ==================================MENU Recent Attendace HRD : END =================================================================
// ==================================MENU Recent Attendace HRD : END =================================================================
// ==================================MENU Recent Attendace HRD : END =================================================================

// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :START=================================================================

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
  MagnifyingGlassIcon,
  PlusIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function HRD() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedRange, setSelectedRange] = useState("Month");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
    { id: "validation", name: "Attendance Validation", icon: MapPinIcon },
  ];

  // ==================== DASHBOARD DATA ====================
  // Data untuk Weekly Attendance Trends
  const weeklyAttendanceData = [
    { day: "Mon", present: 115, late: 5, absent: 7 },
    { day: "Tue", present: 118, late: 4, absent: 5 },
    { day: "Wed", present: 120, late: 3, absent: 4 },
    { day: "Thu", present: 116, late: 6, absent: 5 },
    { day: "Fri", present: 119, late: 4, absent: 4 },
    { day: "Sat", present: 110, late: 8, absent: 9 },
    { day: "Sun", present: 105, late: 7, absent: 15 },
  ];

  // Data untuk Today's Status
  const todayStatusData = [
    { status: "Present", value: 85, color: "#10B981" },
    { status: "Late", value: 7, color: "#F59E0B" },
    { status: "Absent", value: 8, color: "#EF4444" },
  ];

  // Data untuk Top Performers
  const topPerformersData = [
    { name: "Budi Santoso", location: "Jakarta Utara" },
    { name: "Siti Nurhaliza", location: "Bandung" },
    { name: "Ahmad Hidayat", location: "Surabaya" },
    { name: "David Lesteri", location: "Seoul" },
  ];

  // Data untuk Recent Attendance
  const recentAttendanceData = [
    {
      name: "Budi Santoso",
      location: "Jakarta Utara",
      time: "08:00",
      status: "approved",
    },
    {
      name: "Siti Nurhaliza",
      location: "Bandung",
      time: "08:05",
      status: "pending",
    },
    {
      name: "Ahmad Hidayat",
      location: "Surabaya",
      time: "16:02",
      status: "approved",
    },
    {
      name: "Dewi Lesteri",
      location: "Semarang",
      time: "08:10",
      status: "pending",
    },
  ];

  // Fungsi untuk Pie Chart
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

  // ==================== ATTENDANCE VALIDATION DATA ====================
  // Data untuk attendance validation
  const attendanceData = [
    {
      id: 1,
      operator: "Budi Santoso",
      site: "Jakarta Utara - Site A",
      date: "2025-01-27",
      checkIn: "08:00",
      checkOut: "16:00",
      status: "pending",
    },
    {
      id: 2,
      operator: "Siti Nurhaliza",
      site: "Bandung - Site B",
      date: "2025-01-27",
      checkIn: "08:05",
      checkOut: "16:02",
      status: "pending",
    },
    {
      id: 3,
      operator: "Ahmad Hidayat",
      site: "Surabaya - Site C",
      date: "2025-01-27",
      checkIn: "07:58",
      checkOut: "16:05",
      status: "approved",
    },
    {
      id: 4,
      operator: "Dewi Lestari",
      site: "Semarang - Site D",
      date: "2025-01-27",
      checkIn: "08:10",
      checkOut: "---",
      status: "pending",
    },
  ];

  // Filter data berdasarkan status dan pencarian
  const filteredData = attendanceData.filter((item) => {
    const matchesSearch =
      item.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.site.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" || item.status === selectedFilter.toLowerCase();

    return matchesSearch && matchesFilter;
  });

  // Statistik untuk attendance validation
  const stats = {
    total: attendanceData.length,
    pending: attendanceData.filter((item) => item.status === "pending").length,
    approved: attendanceData.filter((item) => item.status === "approved")
      .length,
    rejected: attendanceData.filter((item) => item.status === "rejected")
      .length,
  };

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
            <p className="text-sm text-gray-600">HRD System</p>
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
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition
                      ${
                        activeMenu === item.id
                          ? "bg-teal-50 text-teal-700 border-r-2 border-teal-600"
                          : "text-gray-700 hover:bg-gray-100"
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

        {/* HRD badge */}
        <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
                flex items-center justify-center text-white font-bold text-lg"
              >
                H
              </div>
              <div>
                <p className="font-semibold text-gray-900">HRD SIOPTIMA</p>
                <p className="text-sm text-gray-600">HRD</p>
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
              <button className="p-2 text-gray-600 hover:text-teal-600 relative">
                <BellIcon className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

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
                    H
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
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md
      py-2 z-[9999] transition-transform origin-top"
                  >
                    <button
                      onClick={async () => {
                        setDropdownOpen(false);
                        await fetch ("/api/logout", {method: "POST"});
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

        {/* DASHBOARD CONTENT */}
        {activeMenu === "dashboard" && (
          <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
            {/* Headline + Time Range Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  HRD Dashboard
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Monitor operator attendance and performance
                </p>
              </div>
            </div>

            {/* TOP KPIs */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  label: "Total Operators",
                  value: 127,
                  percent: "+2.1%",
                  icon: UsersIcon,
                },
                {
                  label: "Present Today",
                  value: 118,
                  percent: "+1.5%",
                  icon: CheckCircleIcon,
                },
                {
                  label: "Pending Validation",
                  value: 8,
                  percent: "-0.5%",
                  icon: ClockIcon,
                },
                {
                  label: "Attendance Rate",
                  value: "96.5%",
                  percent: "+0.8%",
                  icon: ChartBarIcon,
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-gray-800 font-semibold">
                        {item.label}
                      </p>
                      <div className="p-3 rounded-xl bg-teal-50">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>
                    <p className="text-4xl font-bold text-gray-900">
                      {item.value}
                    </p>
                    <p
                      className={`text-xs font-medium mt-1 ${
                        item.percent.startsWith("+")
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {item.percent} vs last month
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SECOND ROW - Charts */}
            <div className="mb-9 grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Weekly Attendance Trends */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  Weekly Attendance Trends
                </h3>
                <div className="relative">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                    <span>120</span>
                    <span>90</span>
                    <span>60</span>
                    <span>30</span>
                    <span>0</span>
                  </div>

                  {/* Chart area */}
                  <div className="ml-8">
                    <div className="w-full h-48 flex items-end justify-between gap-1 px-2 border-b border-l border-gray-200">
                      {weeklyAttendanceData.map((data, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center flex-1 relative"
                        >
                          {/* Grouped bars - 3 batang terpisah untuk setiap hari */}
                          <div className="flex items-end justify-center gap-1 w-full">
                            {/* Present bar - hijau */}
                            <div
                              className="w-3 bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600 cursor-pointer relative group"
                              style={{
                                height: `${(data.present / 120) * 120}px`,
                              }}
                              onMouseEnter={() =>
                                setHoveredBar(`${index}-present`)
                              }
                              onMouseLeave={() => setHoveredBar(null)}
                            >
                              {hoveredBar === `${index}-present` && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                  Present: {data.present}
                                </div>
                              )}
                            </div>

                            {/* Late bar - kuning */}
                            <div
                              className="w-3 bg-yellow-500 rounded-t transition-all duration-300 hover:bg-yellow-600 cursor-pointer relative group"
                              style={{ height: `${(data.late / 120) * 120}px` }}
                              onMouseEnter={() =>
                                setHoveredBar(`${index}-late`)
                              }
                              onMouseLeave={() => setHoveredBar(null)}
                            >
                              {hoveredBar === `${index}-late` && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                  Late: {data.late}
                                </div>
                              )}
                            </div>

                            {/* Absent bar - merah */}
                            <div
                              className="w-3 bg-red-500 rounded-t transition-all duration-300 hover:bg-red-600 cursor-pointer relative group"
                              style={{
                                height: `${(data.absent / 120) * 120}px`,
                              }}
                              onMouseEnter={() =>
                                setHoveredBar(`${index}-absent`)
                              }
                              onMouseLeave={() => setHoveredBar(null)}
                            >
                              {hoveredBar === `${index}-absent` && (
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
                                  Absent: {data.absent}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Day label */}
                          <span className="text-xs text-gray-600 mt-2">
                            {data.day}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Legend di bawah */}
                    <div className="flex justify-center gap-4 mt-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded"></div>
                        <span className="text-gray-600">absent</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                        <span className="text-gray-600">late</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span className="text-gray-600">present</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Today's Status - PIE CHART */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  Today's Status
                </h3>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Pie Chart dengan interaksi */}
                  <div className="relative flex flex-col items-center">
                    <svg
                      width="160"
                      height="160"
                      viewBox="0 0 100 100"
                      className="cursor-pointer"
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

                    {/* Text di bawah pie chart */}
                    <div className="text-center mt-4">
                      <div className="text-2xl font-bold text-gray-800">
                        85%
                      </div>
                      <div className="text-sm text-gray-600">Present</div>
                    </div>

                    {/* Tooltip untuk pie chart */}
                    {hoveredPie !== null && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded"
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

                  {/* Legend dengan interaksi hover */}
                  <div className="space-y-4 flex-1">
                    {todayStatusData.map((item, index) => (
                      <div
                        key={item.status}
                        className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                          hoveredPie === index
                            ? "bg-gray-50 transform scale-105"
                            : ""
                        }`}
                        onMouseEnter={() => setHoveredPie(index)}
                        onMouseLeave={() => setHoveredPie(null)}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded transition-transform duration-200"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-sm text-gray-700 font-medium">
                            {item.status}
                          </span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">
                          {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LAST ROW - Top Performers dan Recent Attendance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Performers */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  Top Performers (This Month)
                </h3>
                <div className="space-y-4">
                  {topPerformersData.map((performer, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {performer.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {performer.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">
                          {index === 0
                            ? "100%"
                            : index === 1
                              ? "98%"
                              : index === 2
                                ? "97%"
                                : "96%"}
                        </p>
                        <p className="text-xs text-teal-600 font-medium">
                          excellent
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Attendance */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Recent Attendance
                  </h3>
                  <button className="text-teal-600 text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentAttendanceData.map((attendance, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {attendance.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {attendance.location} • {attendance.time}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {attendance.status === "approved" ? (
                          <CheckCircleIcon className="w-5 h-5 text-green-500" />
                        ) : (
                          <ExclamationTriangleIcon className="w-5 h-5 text-yellow-500" />
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            attendance.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {attendance.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATTENDANCE VALIDATION CONTENT */}
        {activeMenu === "validation" && (
          <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Attendance Validation
              </h1>
              <p className="text-gray-600">
                Review and validate operator attendance records
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Total Today</h3>
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <DocumentChartBarIcon className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.total}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Pending: {stats.pending}
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Approved</h3>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.approved}
                </p>
                <p className="text-sm text-gray-500 mt-1">Validated records</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Rejected</h3>
                  <div className="p-2 bg-red-100 rounded-lg">
                    <XCircleIcon className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.rejected}
                </p>
                <p className="text-sm text-gray-500 mt-1">Invalid records</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Pending Review</h3>
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <ClockIcon className="w-5 h-5 text-yellow-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {stats.pending}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Awaiting validation
                </p>
              </div>
            </div>

            {/* Filter Section */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-lg">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search by operator or site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-500"
                  />
                </div>

                {/* Status Filter Buttons */}
                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  {["All", "Pending", "Approved", "Rejected"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                        selectedFilter === filter
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Attendance Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Desktop Table Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-3">Operator</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-1">Date</div>
                <div className="col-span-1">Check-In</div>
                <div className="col-span-1">Check-Out</div>
                <div className="col-span-2 text-center">Status</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200">
                {filteredData.map((item) => (
                  <div
                    key={item.id}
                    className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition items-center"
                  >
                    {/* Mobile View - Card Layout */}
                    <div className="md:hidden space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.operator}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.site}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            item.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : item.status === "rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Date</p>
                          <p className="text-gray-900 font-medium">
                            {item.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Check-In/Out</p>
                          <div className="flex items-center gap-3 text-gray-900 font-medium">
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4 text-green-600" />
                              <span className="text-sm">{item.checkIn}</span>
                            </div>
                            <span className="text-gray-400">/</span>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4 text-red-600" />
                              <span className="text-sm">{item.checkOut}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div className="flex gap-2">
                          {item.status === "pending" && (
                            <>
                              {/* Approve Button (Check Icon) */}
                              <button className="text-green-600 hover:text-green-800 transition p-2 rounded hover:bg-green-50">
                                <CheckCircleIcon className="w-5 h-5" />
                              </button>

                              {/* Reject Button (X Icon) */}
                              <button className="text-red-600 hover:text-red-800 transition p-2 rounded hover:bg-red-50">
                                <XCircleIcon className="w-5 h-5" />
                              </button>
                            </>
                          )}
                          {(item.status === "approved" ||
                            item.status === "rejected") && (
                            /* Review Button (Eye Icon) */
                            <button className="text-blue-600 hover:text-blue-800 transition p-2 rounded hover:bg-blue-50">
                              <EyeIcon className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Desktop View - Grid Layout */}
                    <div className="hidden md:block col-span-3">
                      <p className="font-medium text-gray-900">
                        {item.operator}
                      </p>
                    </div>

                    <div className="hidden md:block col-span-2">
                      <p className="text-gray-700">{item.site}</p>
                    </div>

                    <div className="hidden md:block col-span-1">
                      <p className="text-gray-700 text-sm">{item.date}</p>
                    </div>

                    <div className="hidden md:block col-span-1">
                      <div className="flex items-center gap-2 text-gray-700">
                        <ClockIcon className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {item.checkIn}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-1">
                      <div className="flex items-center gap-2 text-gray-700">
                        <ClockIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {item.checkOut}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-2">
                      <div className="flex justify-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${
                            item.status === "approved"
                              ? "bg-green-100 text-green-800"
                              : item.status === "rejected"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-2">
                      <div className="flex gap-2 justify-center">
                        {item.status === "pending" && (
                          <>
                            {/* Approve Button (Check Icon) */}
                            <button className="text-green-600 hover:text-green-800 transition p-2 rounded hover:bg-green-50">
                              <CheckCircleIcon className="w-5 h-5" />
                            </button>

                            {/* Reject Button (X Icon) */}
                            <button className="text-red-600 hover:text-red-800 transition p-2 rounded hover:bg-red-50">
                              <XCircleIcon className="w-5 h-5" />
                            </button>
                          </>
                        )}
                        {(item.status === "approved" ||
                          item.status === "rejected") && (
                          /* Review Button (Eye Icon) */
                          <button className="text-blue-600 hover:text-blue-800 transition p-2 rounded hover:bg-blue-50">
                            <EyeIcon className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
// ==================================KODINGAN MERGE BEBERAPA MENU ROLE HRD :END=================================================================
