// ======MENU DASHBOARD : START ==
// ======MENU DASHBOARD : START ==
// ======MENU DASHBOARD : START ==
// ======MENU DASHBOARD : START ==

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// "use client";
// import React, { useState } from "react";
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

// export default function Admin() {
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
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const router = useRouter();

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];


//   // Data untuk Water Quality Trends - SESUAI GAMBAR
//   const waterQualityData = [
//     { day: "Mon", ec: 670, tds: 440, pH: 7.0 },
//     { day: "Tue", ec: 720, tds: 480, pH: 6.8 },
//     { day: "Wed", ec: 580, tds: 390, pH: 7.2 },
//     { day: "Thu", ec: 810, tds: 520, pH: 6.9 },
//     { day: "Fri", ec: 630, tds: 410, pH: 7.1 },
//     { day: "Sat", ec: 590, tds: 380, pH: 7.3 },
//     { day: "Sun", ec: 690, tds: 450, pH: 7.0 },
//   ];

//   // Data untuk Report Status - SESUAI GAMBAR
//   const reportStatusData = [
//     { status: "Approved", value: 85, color: "#10B981" }, // green-500
//     { status: "Pending", value: 12, color: "#F59E0B" }, // yellow-500
//     { status: "Rejected", value: 3, color: "#EF4444" }, // red-500
//   ];

//   // Data untuk Site Performance
//   const sitePerformanceData = [
//     { city: "Jakarta", compliance: 92, reports: 12 },
//     { city: "Bandung", compliance: 95, reports: 8 },
//     { city: "Surabaya", compliance: 88, reports: 15 },
//     { city: "Semarang", compliance: 85, reports: 6 },
//     { city: "Yogyakarta", compliance: 90, reports: 9 },
//     { city: "Bali", compliance: 87, reports: 11 },
//   ];

//   // Fungsi untuk Pie Chart dengan interaksi
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
//         middleAngle: (startAngle + endAngle) / 2
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

//       {/* Sidebar - tetap sama */}
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

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50">
//         {/* Logo */}
//         <div className="p-6 border-b flex items-center justify-between bg-white">
//           <div>
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600 mt-1">IPAL Monitoring</p>
//           </div>
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition"

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

//         {/* Admin badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 A
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Admin SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Admin</p>
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
//                     A
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
//                   Admin Dashboard
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-1">
//                   Monitor IPAL operations across all sites
//                 </p>
//               </div>

//               <div className="flex gap-2 bg-gray-100 rounded-full p-1 mt-3 lg:mt-0">
//                 {["Week", "Month", "Year"].map((range) => (
//                   <button
//                     key={range}
//                     onClick={() => setSelectedRange(range)}
//                     className={`px-4 py-1.5 rounded-full text-sm font-medium transition
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
//               </div>
//             </div>

//             {/* TOP KPIs - tetap sama */}
//             <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//               {[
//                 {
//                   label: "Total Sites",
//                   value: 52,
//                   percent: "+4.2%",
//                   icon: MapPinIcon,
//                 },
//                 {
//                   label: "Active Operators",
//                   value: 127,
//                   percent: "+2.1%",
//                   icon: UsersIcon,
//                 },
//                 {
//                   label: "Daily Reports",
//                   value: 48,
//                   percent: "+8.5%",
//                   icon: DocumentChartBarIcon,
//                 },
//                 {
//                   label: "Compliance Rate",
//                   value: "98.5%",
//                   percent: "+1.2%",
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
//                     <p className="text-xs text-green-600 font-medium mt-1">
//                       {item.percent} vs last month
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* SECOND ROW - Charts YANG SUDAH DIPERBAIKI */}
//             <div className="mb-9 grid grid-cols-1 xl:grid-cols-2 gap-6">
//               {/* Water Quality Trends - dengan interaksi */}
//               <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                   Water Quality Trends
//                 </h3>
//                 <div className="relative">
//                   {/* Y-axis labels */}
//                   <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                     <span>800</span>
//                     <span>600</span>
//                     <span>400</span>
//                     <span>200</span>
//                     <span>0</span>
//                   </div>
                  
//                   {/* Chart area */}
//                   <div className="ml-8">
//                     <div className="w-full h-48 flex items-end justify-between gap-1 px-2 border-b border-l border-gray-200">
//                       {waterQualityData.map((data, index) => (
//                         <div key={index} className="flex flex-col items-center flex-1 relative">
//                           {/* Single bar dengan interaksi hover */}
//                           <div
//                             className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
//                             style={{ height: `${(data.ec / 800) * 120}px` }}
//                             onMouseEnter={() => setHoveredBar(index)}
//                             onMouseLeave={() => setHoveredBar(null)}
//                           />
                          
//                           {/* Day label */}
//                           <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                          
//                           {/* Hover Tooltip */}
//                           {hoveredBar === index && (
//                             <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 min-w-32 shadow-lg">
//                               <div className="flex items-center gap-2 mb-1">
//                                 <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                                 <p>EC: {data.ec}</p>
//                               </div>
//                               <div className="flex items-center gap-2 mb-1">
//                                 <div className="w-3 h-3 bg-green-500 rounded"></div>
//                                 <p>TDS: {data.tds}</p>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <div className="w-3 h-3 bg-purple-500 rounded"></div>
//                                 <p>pH: {data.pH}</p>
//                               </div>
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Legend di bawah seperti gambar */}
//                     <div className="flex justify-center gap-4 mt-4 text-xs">
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                         <span className="text-gray-600">EC</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-green-500 rounded"></div>
//                         <span className="text-gray-600">TDS</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <div className="w-3 h-3 bg-purple-500 rounded"></div>
//                         <span className="text-gray-600">pH</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//              {/* Report Status - PIE CHART YANG SUDAH DIPERBAIKI */}
// <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
//   <h3 className="font-semibold text-lg text-gray-800 mb-5">
//     Report Status
//   </h3>
//   <div className="flex flex-col lg:flex-row items-center gap-8">
//     {/* Pie Chart dengan interaksi */}
//     <div className="relative flex flex-col items-center">
//       <svg 
//         width="160" 
//         height="160" 
//         viewBox="0 0 100 100" 
//         className="cursor-pointer"
//       >
//         {pieChartData.map((item, index) => (
//           <path
//             key={item.status}
//             d={item.path}
//             fill={item.color}
//             className={`transition-all duration-300 ${
//               hoveredPie === index ? 'opacity-80 scale-105' : 'opacity-100'
//             }`}
//             stroke="white"
//             strokeWidth="2"
//             onMouseEnter={() => setHoveredPie(index)}
//             onMouseLeave={() => setHoveredPie(null)}
//           />
//         ))}
//       </svg>
      
//       {/* Text di bawah pie chart - RAPI DAN TIDAK MIRING */}
//       <div className="text-center mt-4">
//         <div className="text-2xl font-bold text-gray-800">85%</div>
//         <div className="text-sm text-gray-600">Approved</div>
//       </div>
      
//       {/* Tooltip untuk pie chart */}
//       {hoveredPie !== null && (
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
//           <div className="flex items-center gap-2">
//             <div 
//               className="w-3 h-3 rounded" 
//               style={{ backgroundColor: pieChartData[hoveredPie].color }}
//             ></div>
//             <span>{pieChartData[hoveredPie].status}: {pieChartData[hoveredPie].value}%</span>
//           </div>
//         </div>
//       )}
//     </div>
    
//     {/* Legend dengan interaksi hover */}
//     <div className="space-y-4 flex-1">
//       {reportStatusData.map((item, index) => (
//         <div 
//           key={item.status} 
//           className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
//             hoveredPie === index ? 'bg-gray-50 transform scale-105' : ''
//           }`}
//           onMouseEnter={() => setHoveredPie(index)}
//           onMouseLeave={() => setHoveredPie(null)}
//         >
//           <div className="flex items-center gap-3">
//             <div 
//               className="w-4 h-4 rounded transition-transform duration-200"
//               style={{ backgroundColor: item.color }}
//             ></div>
//             <span className="text-sm text-gray-700 font-medium">{item.status}</span>
//           </div>
//           <span className="text-lg font-bold text-gray-900">{item.value}%</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//             </div>

//             {/* THIRD ROW - Site Performance dengan interaksi */}
//             <div className="mb-9 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
//               <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                 Site Performance
//               </h3>
              
//               {/* Legend */}
//               <div className="flex gap-6 mb-6 text-sm">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-teal-500 rounded"></div>
//                   <span className="text-gray-600">Compliance</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-blue-500 rounded"></div>
//                   <span className="text-gray-600">Reports</span>
//                 </div>
//               </div>

//               {/* Chart Area dengan interaksi */}
//               <div className="relative">
//                 {/* Y-axis labels untuk compliance */}
//                 <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
//                   <span>100%</span>
//                   <span>75%</span>
//                   <span>50%</span>
//                   <span>25%</span>
//                   <span>0%</span>
//                 </div>

//                 {/* Chart bars */}
//                 <div className="ml-8">
//                   <div className="w-full h-48 flex items-end justify-between gap-4 px-2 border-b border-l border-gray-200">
//                     {sitePerformanceData.map((site, index) => (
//                       <div key={index} className="flex flex-col items-center flex-1 relative">
//                         {/* Grouped bars dengan interaksi */}
//                         <div className="flex gap-2 items-end w-full justify-center">
//                           {/* Compliance Bar */}
//                           <div
//                             className="w-4 bg-teal-500 rounded-t transition-all duration-300 hover:bg-teal-600 cursor-pointer relative group"
//                             style={{ height: `${(site.compliance / 100) * 120}px` }}
//                           >
//                             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
//                               Compliance: {site.compliance}%
//                             </div>
//                           </div>
                          
//                           {/* Reports Bar */}
//                           <div
//                             className="w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 cursor-pointer relative group"
//                             style={{ height: `${(site.reports / 15) * 120}px` }}
//                           >
//                             <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
//                               Reports: {site.reports}
//                             </div>
//                           </div>
//                         </div>
                        
//                         {/* City label */}
//                         <span className="text-xs text-gray-600 mt-2 text-center w-full">
//                           {site.city}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* LAST ROW - tetap sama */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md lg:col-span-2">
//                 <div className="flex justify-between items-center mb-5">
//                   <h3 className="font-semibold text-lg text-gray-800">
//                     Recent Reports
//                   </h3>
//                   <button className="text-teal-600 text-sm font-medium hover:underline">
//                     View All
//                   </button>
//                 </div>

//                 <div className="overflow-x-auto">
//                   <table className="w-full text-sm text-gray-800">
//                     <thead>
//                       <tr className="border-b border-gray-200">
//                         <th className="pb-3 text-left font-semibold">Site</th>
//                         <th className="pb-3 text-left font-semibold">Operator</th>
//                         <th className="pb-3 text-left font-semibold">pH</th>
//                         <th className="pb-3 text-left font-semibold">Status</th>
//                         <th className="pb-3 text-left font-semibold">Time</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {[
//                         ["Jakarta Utara - Site A", "Budi Santoso", "7.2", "approved", "2h ago"],
//                         ["Bandung - Site B", "Siti Nurhaliza", "6.8", "pending", "3h ago"],
//                         ["Surabaya - Site C", "Ahmad Hidayat", "7.5", "approved", "5h ago"],
//                         ["Medan - Site D", "Rina Wijaya", "6.9", "rejected", "6h ago"],
//                         ["Bali - Site E", "Dewi Kurnia", "7.1", "approved", "7h ago"],
//                       ].map((report, index) => (
//                         <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                           <td className="py-4 font-medium text-gray-900">{report[0]}</td>
//                           <td className="py-4 text-gray-600">{report[1]}</td>
//                           <td className="py-4">
//                             <span className={`px-2 py-1 rounded-full text-xs ${
//                               parseFloat(report[2]) >= 7.0 ? 'bg-green-100 text-green-800' : 
//                               parseFloat(report[2]) >= 6.5 ? 'bg-yellow-100 text-yellow-800' : 
//                               'bg-red-100 text-red-800'
//                             }`}>
//                               pH {report[2]}
//                             </span>
//                           </td>
//                           <td className="py-4">
//                             <span className={`px-2 py-1 rounded-full text-xs ${
//                               report[3] === "approved" ? "bg-green-100 text-green-800" :
//                               report[3] === "pending" ? "bg-yellow-100 text-yellow-800" :
//                               "bg-red-100 text-red-800"
//                             }`}>
//                               {report[3]}
//                             </span>
//                           </td>
//                           <td className="py-4 text-gray-500">{report[4]}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//                 <h3 className="font-semibold text-lg text-gray-800 mb-5">
//                   System Alerts
//                 </h3>
//                 <div className="space-y-4 text-sm text-gray-800">
//                   {[
//                     ["pH level above threshold at Site Jakarta B", "1 hour ago", "warning"],
//                     ["3 reports pending validation", "2 hours ago", "pending"],
//                     ["All sites reported successfully today", "5 hours ago", "success"],
//                   ].map(([message, time, type], i) => (
//                     <div
//                       key={i}
//                       className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 transition-all duration-200 hover:bg-gray-100 cursor-pointer"
//                     >
//                       <div
//                         className={`p-2 rounded-lg border flex items-center justify-center ${
//                           type === "warning" ? "bg-red-50 text-red-600 border-red-200" :
//                           type === "pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
//                           "bg-green-50 text-green-700 border-green-200"
//                         }`}
//                       >
//                         {type === "warning" && <ExclamationTriangleIcon className="w-5 h-5" />}
//                         {type === "pending" && <ClockIcon className="w-5 h-5" />}
//                         {type === "success" && <CheckCircleIcon className="w-5 h-5" />}
//                       </div>
//                       <div>
//                         <p className="font-medium">{message}</p>
//                         <p className="text-xs text-gray-500">{time}</p>
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
// ======MENU DASHBOARD : END ==
// ======MENU DASHBOARD : END ==
// ======MENU DASHBOARD : END ==
// ======MENU DASHBOARD : END ==

// ======MENU SITES : START ==
// ======MENU SITES : START ==
// ======MENU SITES : START ==
// ======MENU SITES : START ==

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
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [selectedStatus, setSelectedStatus] = useState("All Status");
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("sites");
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
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];

//   // Data sites sesuai dengan gambar
//   const sitesData = [
//     {
//       id: 1,
//       name: "Jakarta Utara - Site A",
//       address: "Jl. Industri No. 123, Jakarta Utara",
//       coordinates: "-6.138414, 106.849396",
//       operators: 3,
//       status: "active",
//       lastReport: "2 hours ago",
//     },
//     {
//       id: 2,
//       name: "Bandung - Site B",
//       address: "Jl. Soekarno Hatta No. 456, Bandung",
//       coordinates: "-6.914744, 107.609810",
//       operators: 2,
//       status: "active",
//       lastReport: "3 hours ago",
//     },
//     {
//       id: 3,
//       name: "Surabaya - Site C",
//       address: "Jl. Basuki Rahmat No. 789, Surabaya",
//       coordinates: "-7.250445, 112.768845",
//       operators: 4,
//       status: "active",
//       lastReport: "5 hours ago",
//     },
//     {
//       id: 4,
//       name: "Semarang - Site D",
//       address: "Jl. Pemuda No. 321, Semarang",
//       coordinates: "-6.966667, 110.416664",
//       operators: 2,
//       status: "inactive",
//       lastReport: "2 days ago",
//     },
//     {
//       id: 5,
//       name: "Yogyakarta - Site E",
//       address: "Jl. Malioboro No. 654, Yogyakarta",
//       coordinates: "-7.797068, 110.370529",
//       operators: 3,
//       status: "active",
//       lastReport: "1 hour ago",
//     },
//   ];

//   // Filter sites berdasarkan pencarian
//   // Filter sites berdasarkan pencarian dan status
//   const filteredSites = sitesData.filter(
//     (site) =>
//       (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         site.address.toLowerCase().includes(searchQuery.toLowerCase())) &&
//       (selectedStatus === "All Status" ||
//         (selectedStatus === "Active" && site.status === "active") ||
//         (selectedStatus === "Inactive" && site.status === "inactive"))
//   );

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
//           <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
//             S
//           </div>
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

//         {/* User Profile */}
//         <div className="p-4 border-b bg-gray-50">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//               H
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900">HRD Manager</p>
//               <p className="text-sm text-gray-600">Hrd</p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Menu */}

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

//         {/* Admin badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 A
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Admin SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Admin</p>
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
//                     A
//                   </div>

//                   {/* Chevron dropdown indicator */}
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

//                 {/* Dropdown */}
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

//         {/* SITES CONTENT */}
// {activeMenu === "sites" && (
//   <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//     {/* Header Section dengan Add New Site Button */}
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//       <div>
//         <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//           Site Management
//         </h1>
//         <p className="text-gray-600">Manage IPAL sites and locations</p>
//       </div>
//       <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
//         <PlusIcon className="w-5 h-5" />
//         Add New Site
//       </button>
//     </div>

//     {/* Stats Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Total Sites</h3>
//           <div className="p-2 bg-teal-100 rounded-lg">
//             <MapPinIcon className="w-5 h-5 text-teal-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">5</p>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Active Sites</h3>
//           <div className="p-2 bg-green-100 rounded-lg">
//             <MapPinIcon className="w-5 h-5 text-green-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">4</p>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Total Operators</h3>
//           <div className="p-2 bg-blue-100 rounded-lg">
//             <UsersIcon className="w-5 h-5 text-blue-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">14</p>
//       </div>
//     </div>

//     {/* Search and Filter Bar */}
//     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//       <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//         <div className="relative flex-1 max-w-lg">
//           <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//           <input
//             type="text"
//             placeholder="Search sites by name or address..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-9 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//           />
//         </div>

//         {/* Status Filter Buttons dengan state management */}
//         <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//           {["All Status", "Active", "Inactive"].map((status) => (
//             <button
//               key={status}
//               onClick={() => setSelectedStatus(status)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                 selectedStatus === status
//                   ? "bg-teal-600 text-white shadow-sm"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* Sites Table - Responsive untuk mobile */}
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//       {/* Desktop Table Header (hidden on mobile) */}
//       <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//         <div className="col-span-4">Site Name</div>
//         <div className="col-span-3">Address</div>
//         <div className="col-span-1 text-center">Operators</div>
//         <div className="col-span-1 text-center">Status</div>
//         <div className="col-span-2">Last Report</div>
//         <div className="col-span-1 text-center">Actions</div>
//       </div>

//       {/* Table Body */}
//       <div className="divide-y divide-gray-200">
//         {filteredSites.map((site) => (
//           <div
//             key={site.id}
//             className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition"
//           >
//             {/* Mobile View - Card Layout */}
//             <div className="md:hidden space-y-3">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="font-medium text-gray-900">
//                     {site.name}
//                   </p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     {site.coordinates}
//                   </p>
//                 </div>
//                 <span
//                   className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     site.status === "active"
//                       ? "bg-green-100 text-green-800"
//                       : "bg-gray-100 text-gray-800"
//                   }`}
//                 >
//                   {site.status}
//                 </span>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <p className="text-gray-600">Address</p>
//                   <p className="text-gray-900 font-medium">
//                     {site.address}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600">Operators</p>
//                   <div className="flex items-center gap-2">
//                     {/* Icon orang dalam kotak */}
//                     <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-4 w-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                         />
//                       </svg>
//                       <span className="text-sm font-medium">
//                         {site.operators}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                 <div>
//                   <p className="text-gray-600 text-sm">Last Report</p>
//                   <p className="text-gray-900 font-medium">
//                     {site.lastReport}
//                   </p>
//                 </div>
//                 {/* Actions dengan pensil dan tempat sampah */}
//                 <div className="flex gap-2">
//                   {/* Edit Button (Pensil) */}
//                   <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                       />
//                     </svg>
//                   </button>

//                   {/* Delete Button (Tempat Sampah) */}
//                   <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Desktop View - Grid Layout */}
//             <div className="hidden md:block col-span-4">
//               <p className="font-medium text-gray-900">{site.name}</p>
//               <p className="text-sm text-gray-500 mt-1">
//                 {site.coordinates}
//               </p>
//             </div>

//             <div className="hidden md:block col-span-3">
//               <p className="text-gray-700">{site.address}</p>
//             </div>

//             <div className="hidden md:block col-span-1 text-center">
//               <div className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md mx-auto w-fit">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//                 <span className="text-sm font-medium">{site.operators}</span>
//               </div>
//             </div>

//             <div className="hidden md:block col-span-1 text-center">
//               <span
//                 className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                   site.status === "active"
//                     ? "bg-green-100 text-green-800"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {site.status}
//               </span>
//             </div>

//             <div className="hidden md:block col-span-2">
//               <p className="text-gray-700">{site.lastReport}</p>
//             </div>

//             <div className="hidden md:block col-span-1 text-center">
//               {/* Actions dengan pensil dan tempat sampah untuk desktop */}
//               <div className="flex gap-2 justify-center">
//                 {/* Edit Button (Pensil) */}
//                 <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                     />
//                   </svg>
//                 </button>

//                 {/* Delete Button (Tempat Sampah) */}
//                 <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-4 w-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// )}
//       </div>
//     </div>
//   );
// }
// ======MENU SITES : END ==
// ======MENU SITES : END ==
// ======MENU SITES : END ==
// ======MENU SITES : END ==

// ======MENU USERS : START ==
// ======MENU USERS : START ==
// ======MENU USERS : START ==
// ======MENU USERS : START ==

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
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [selectedStatus, setSelectedStatus] = useState("All Users");
//   const [selectedRole, setSelectedRole] = useState("all");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("users"); // Default ke "users"
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
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];

//   // Data users
//   const usersData = [
//     {
//       id: 1,
//       name: "Budi Santoso",
//       email: "budi.santoso@email.com",
//       role: "operator",
//       site: "Jakarta Utara - Site",
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
//   ];

//   // Filter users berdasarkan pencarian, status, dan role
//   const filteredUsers = usersData.filter(
//     (user) =>
//       (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
//       (selectedStatus === "All Users" ||
//         (selectedStatus === "Active" && user.status === "active") ||
//         (selectedStatus === "Inactive" && user.status === "inactive")) &&
//       (selectedRole === "all" || user.role === selectedRole)
//   );

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

//         {/* Admin badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 A
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Admin SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Admin</p>
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
//                     A
//                   </div>

//                   {/* Chevron dropdown indicator */}
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

//                 {/* Dropdown */}
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

//         {/* USERS CONTENT - Default tampilan */}
//         {activeMenu === "users" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             {/* Header Section */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//               <div>
//                 <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   User Management
//                 </h1>
//                 <p className="text-gray-600">
//                   Manage system users and permissions
//                 </p>
//               </div>
//               <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
//                 <PlusIcon className="w-5 h-5" />
//                 Add New User
//               </button>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Total Users</h3>
//                   <div className="p-2 bg-teal-100 rounded-lg">
//                     <UsersIcon className="w-5 h-5 text-teal-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">6</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Operators</h3>
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <UsersIcon className="w-5 h-5 text-blue-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">4</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">HRD</h3>
//                   <div className="p-2 bg-orange-100 rounded-lg">
//                     <UsersIcon className="w-5 h-5 text-orange-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">1</p>
//               </div>

//               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-gray-700 font-medium">Admins</h3>
//                   <div className="p-2 bg-purple-100 rounded-lg">
//                     <UsersIcon className="w-5 h-5 text-purple-600" />
//                   </div>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">1</p>
//               </div>
//             </div>

//             {/* Search and Filter Bar */}
//             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//               <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//                 <div className="relative flex-1 max-w-md">
//                   <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search users by name, email, or role..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                   />
//                 </div>

//                 {/* Status Filter Buttons */}
//                 <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//                   {["All Users", "Active", "Inactive"].map((status) => (
//                     <button
//                       key={status}
//                       onClick={() => setSelectedStatus(status)}
//                       className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                         selectedStatus === status
//                           ? "bg-teal-600 text-white shadow-sm"
//                           : "text-gray-700 hover:bg-gray-200"
//                       }`}
//                     >
//                       {status}
//                     </button>
//                   ))}
//                 </div>

//                 {/* Roles Filter Dropdown */}
//                 <div className="relative">
//                   <select
//                     className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
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

//             {/* Users Table */}
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Desktop Table Header */}
//               <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//                 <div className="col-span-4">User</div>
//                 <div className="col-span-2">Role</div>
//                 <div className="col-span-2">Site</div>
//                 <div className="col-span-2">Status</div>
//                 <div className="col-span-1">Last Active</div>
//                 <div className="col-span-1 text-center">Actions</div>
//               </div>

//               {/* Table Body */}
//               <div className="divide-y divide-gray-200">
//                 {filteredUsers.map((user) => (
//                   <div
//                     key={user.id}
//                     className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition"
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
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               {user.name}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {user.email}
//                             </p>
//                           </div>
//                         </div>
//                         <span
//                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                             user.status === "active"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {user.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 text-sm">
//                         <div>
//                           <p className="text-gray-600">Role</p>
//                           <p className="text-gray-900 font-medium capitalize">
//                             {user.role}
//                           </p>
//                         </div>
//                         <div>
//                           <p className="text-gray-600">Site</p>
//                           <p className="text-gray-900 font-medium">
//                             {user.site}
//                           </p>
//                         </div>
//                       </div>

//                       <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                         <div>
//                           <p className="text-gray-600 text-sm">Last Active</p>
//                           <p className="text-gray-900 font-medium">
//                             {user.lastActive}
//                           </p>
//                         </div>
//                         <div className="flex gap-2">
//                           <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-4 w-4"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                               />
//                             </svg>
//                           </button>
//                           <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-4 w-4"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                               />
//                             </svg>
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
//                         } rounded-full flex items-center justify-center text-white font-bold`}
//                       >
//                         {user.initial}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{user.name}</p>
//                         <p className="text-sm text-gray-500">{user.email}</p>
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
//                       <p className="text-gray-700">{user.site}</p>
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
//                       <p className="text-gray-700">{user.lastActive}</p>
//                     </div>

//                     <div className="hidden md:flex col-span-1 items-center justify-center">
//                       <div className="flex gap-2">
//                         <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
//                             />
//                           </svg>
//                         </button>
//                         <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Untuk menu lainnya bisa ditambahkan konten kosong atau placeholder */}
//         {activeMenu !== "users" && (
//           <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 {menuItems.find((m) => m.id === activeMenu)?.name} Page
//               </h2>
//               <p className="text-gray-600">This page is under development</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// ======MENU USERS : END ==
// ======MENU USERS : END ==
// ======MENU USERS : END ==
// ======MENU USERS : END ==

// ======MENU REPORT : START ==
// ======MENU REPORT : START ==
// ======MENU REPORT : START ==
// ======MENU REPORT : START ==
// ======MENU REPORT : START ==
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
//   MagnifyingGlassIcon,
//   PlusIcon,
//   CheckCircleIcon,
//   ClockIcon,
//   XCircleIcon,
//   EyeIcon,
//   CheckIcon,
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [selectedStatus, setSelectedStatus] = useState("All Reports");
//   const [selectedSite, setSelectedSite] = useState("all");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("reports");
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
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];

//   // Data reports dengan status yang lebih real
//   const reportsData = [
//     {
//       id: 1,
//       date: "2025-01-27",
//       time: "08:30",
//       site: "Jakarta Utara - Site A",
//       operator: "Budi Santoso",
//       pH: 7.2,
//       flowRate: "450 L/h",
//       status: "pending",
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
//     },
//   ];

//   // Filter logic
//   const filteredReports = reportsData.filter(
//     (report) =>
//       (report.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         report.date.includes(searchQuery)) &&
//       (selectedStatus === "All Reports" ||
//         (selectedStatus === "Approved" && report.status === "approved") ||
//         (selectedStatus === "Pending" && report.status === "pending") ||
//         (selectedStatus === "Rejected" && report.status === "rejected")) &&
//       (selectedSite === "all" || report.site === selectedSite)
//   );

//   // Stats calculation logic
//   const totalReports = reportsData.length;
//   const approvedReports = reportsData.filter(
//     (r) => r.status === "approved"
//   ).length;
//   const pendingReports = reportsData.filter(
//     (r) => r.status === "pending"
//   ).length;
//   const rejectedReports = reportsData.filter(
//     (r) => r.status === "rejected"
//   ).length;

//   // Get unique sites for filter
//   const uniqueSites = [...new Set(reportsData.map((report) => report.site))];

//   // Status configuration logic
// const getStatusConfig = (status) => {
//   const config = {
//     approved: {
//       icon: CheckCircleIcon,
//       color: "text-green-100",
//       bgColor: "bg-green-800",
//       borderColor: "border-green-200",
//       text: "Approved",
//       textColor: "text-green-800" // Tambahkan textColor untuk warna text
//     },
//     pending: {
//       icon: ClockIcon,
//       color: "text-yellow-600",
//       bgColor: "bg-yellow-300",
//       borderColor: "border-yellow-200",
//       text: "Pending",
//       textColor: "text-yellow-800" // Tambahkan textColor untuk warna text
//     },
//     rejected: {
//       icon: XCircleIcon,
//       color: "text-red-100",
//       bgColor: "bg-red-600",
//       borderColor: "border-red-200",
//       text: "Rejected",
//       textColor: "text-red-800" // Tambahkan textColor untuk warna text
//     }
//   };
//   return config[status] || config.pending;
// };

//   // Action handlers
//   const handleReview = (reportId) => {
//     console.log("Review report:", reportId);
//     // Logic untuk review report
//   };

//   const handleApprove = (reportId) => {
//     console.log("Approve report:", reportId);
//     // Logic untuk approve report
//   };

//   const handleReject = (reportId) => {
//     console.log("Reject report:", reportId);
//     // Logic untuk reject report
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

//         {/* Admin badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
//                 flex items-center justify-center text-white font-bold text-lg"
//               >
//                 A
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Admin SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Admin</p>
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
//                 className="lg:hidden p-2 text-gray-600 hover:text-teal-600"
//               >
//                 <Bars3Icon className="w-6 h-6" />
//               </button>
//               <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//                 Report Monitoring
//               </h1>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="p-2 text-gray-600 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

//               <div ref={dropdownRef} className="relative">
//                 <button
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   className="flex items-center gap-2 cursor-pointer"
//                 >
//                   <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
//                     A
//                   </div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2}
//                     stroke="currentColor"
//                     className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
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
//                   <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
//                     <button
//                       onClick={() => {
//                         setDropdownOpen(false);
//                         router.push("/");
//                       }}
//                       className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm"
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

//         {/* REPORTS CONTENT */}
//         {activeMenu === "reports" && (
//           <div className="p-4 sm:p-6 lg:p-8">
//             {/* Header */}
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//               <div className="mb-4 sm:mb-0">
//                 <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
//                   Report Monitoring
//                 </h1>
//                 <p className="text-gray-600">
//                   Review and validate daily IPAL reports
//                 </p>
//               </div>
//               <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium">
//                 <PlusIcon className="w-5 h-5" />
//                 Export Report
//               </button>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-gray-700 text-sm font-medium">
//                     Total Reports
//                   </h3>
//                   <DocumentChartBarIcon className="w-5 h-5 text-teal-600" />
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {totalReports}
//                 </p>
//               </div>

//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-gray-700 text-sm font-medium">
//                     Approved
//                   </h3>
//                   <CheckCircleIcon className="w-5 h-5 text-green-600" />
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {approvedReports}
//                 </p>
//               </div>

//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-gray-700 text-sm font-medium">Pending</h3>
//                   <ClockIcon className="w-5 h-5 text-yellow-600" />
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {pendingReports}
//                 </p>
//               </div>

//               <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                 <div className="flex items-center justify-between mb-2">
//                   <h3 className="text-gray-700 text-sm font-medium">
//                     Rejected
//                   </h3>
//                   <XCircleIcon className="w-5 h-5 text-red-600" />
//                 </div>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {rejectedReports}
//                 </p>
//               </div>
//             </div>

//             {/* Search and Filter */}
//             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
//               <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
//                 <div className="relative flex-1 w-full">
//                   <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//                   <input
//                     type="text"
//                     placeholder="Search reports..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//                   />
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {["All Reports", "Approved", "Pending", "Rejected"].map(
//                     (status) => (
//                       <button
//                         key={status}
//                         onClick={() => setSelectedStatus(status)}
//                         className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
//                           selectedStatus === status
//                             ? "bg-teal-600 text-teal-50 shadow-md"
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
//                   className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
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
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//               {/* Desktop Table Header */}
//               <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
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
//                   <div className="p-8 text-center text-gray-500">
//                     No reports found matching your criteria.
//                   </div>
//                 ) : (
//                   filteredReports.map((report) => {
//                     const statusConfig = getStatusConfig(report.status);
//                     const StatusIcon = statusConfig.icon;

//                     return (
//                       <div
//                         key={report.id}
//                         className="lg:grid lg:grid-cols-12 lg:gap-4 p-4 lg:p-6 hover:bg-gray-50 transition items-center"
//                       >
//                         {/* Mobile View */}
//                         <div className="lg:hidden space-y-4">
//                           {/* Header dengan Date & Status */}
//                           <div className="flex justify-between items-start">
//                             <div className="space-y-1">
//                               <p className="font-semibold text-gray-900">
//                                 {report.date}
//                               </p>
//                               <p className="text-sm text-gray-500">
//                                 {report.time}
//                               </p>
//                             </div>
//                             <span
//                               className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
//                             >
//                               <span className={statusConfig.color}>
//                                 {statusConfig.dot}
//                               </span>
//                               {statusConfig.text}
//                             </span>
//                           </div>

//                           {/* Site & Operator */}
//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">Site</p>
//                               <p className="text-sm font-medium text-gray-900">
//                                 {report.site}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-500 mb-1">
//                                 Operator
//                               </p>
//                               <p className="text-sm font-medium text-gray-900">
//                                 {report.operator}
//                               </p>
//                             </div>
//                           </div>

//                           {/* pH & Flow Rate */}
//                           <div className="grid grid-cols-2 gap-4">
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

//                           {/* Actions */}
//                           <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
//                             <button
//                               onClick={() => handleReview(report.id)}
//                               className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 border border-blue-200 text-sm font-medium"
//                             >
//                               <EyeIcon className="w-4 h-4" />
//                               Review
//                             </button>
//                             {report.status === "pending" && (
//                               <>
//                                 <button
//                                   onClick={() => handleApprove(report.id)}
//                                   className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 border border-green-200 text-sm font-medium"
//                                 >
//                                   <CheckIcon className="w-4 h-4" />
//                                   Approve
//                                 </button>
//                                 <button
//                                   onClick={() => handleReject(report.id)}
//                                   className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 border border-red-200 text-sm font-medium"
//                                 >
//                                   <XCircleIcon className="w-4 h-4" />
//                                   Reject
//                                 </button>
//                               </>
//                             )}
//                           </div>
//                         </div>

//                         {/* Desktop View */}
//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <div>
//                             <p className="font-medium text-gray-900">
//                               {report.date}
//                             </p>
//                             <p className="text-sm text-gray-500">
//                               {report.time}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p className="text-gray-700">{report.site}</p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p className="text-gray-700">{report.operator}</p>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <p className="text-gray-900 font-medium">
//                             {report.pH}
//                           </p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <p className="text-gray-700">{report.flowRate}</p>
//                         </div>

//                         <div className="hidden lg:flex col-span-2 items-center">
//                           <span
//                             className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
//                           >
//                             <StatusIcon
//                               className={`w-4 h-4 ${statusConfig.color}`}
//                             />
//                             {statusConfig.text}
//                           </span>
//                         </div>

//                         <div className="hidden lg:flex col-span-1 items-center justify-center">
//                           <div className="flex items-center gap-1">
//                             <button
//                               onClick={() => handleReview(report.id)}
//                               className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
//                               title="Review Report"
//                             >
//                               <EyeIcon className="w-4 h-4" />
//                             </button>
//                             {report.status === "pending" && (
//                               <>
//                                 <button
//                                   onClick={() => handleApprove(report.id)}
//                                   className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition border border-transparent hover:border-green-200"
//                                   title="Approve Report"
//                                 >
//                                   <CheckIcon className="w-4 h-4" />
//                                 </button>
//                                 <button
//                                   onClick={() => handleReject(report.id)}
//                                   className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-200"
//                                   title="Reject Report"
//                                 >
//                                   <XCircleIcon className="w-4 h-4" />
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

//         {/* Placeholder for other menus */}
//         {activeMenu !== "reports" && (
//           <div className="p-8">
//             <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
//               <h2 className="text-xl font-bold text-gray-900 mb-2">
//                 {menuItems.find((m) => m.id === activeMenu)?.name} Page
//               </h2>
//               <p className="text-gray-600">This page is under development</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// ======MENU REPORT : END ==
// ======MENU REPORT : END ==
// ======MENU REPORT : END ==
// ======MENU REPORT : END ==
// ======MENU REPORT : END ==

// ======KODINGAN MERGE / gabungan BEBERAPA MENU :START==
// ======KODINGAN MERGE / gabungan BEBERAPA MENU :START==
// ======KODINGAN MERGE / gabungan BEBERAPA MENU :START==
// ======KODINGAN MERGE / gabungan BEBERAPA MENU :START==
// ======KODINGAN MERGE / gabungan BEBERAPA MENU :START==

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
//   MagnifyingGlassIcon,
//   PlusIcon,
//   ExclamationTriangleIcon,
//   ClockIcon,
//   CheckCircleIcon,
//   XCircleIcon,
//   EyeIcon,
//   CheckIcon,
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [selectedRange, setSelectedRange] = useState("Month");
//   const [selectedStatus, setSelectedStatus] = useState("All Reports");
//   const [selectedRole, setSelectedRole] = useState("all");
//   const [selectedSite, setSelectedSite] = useState("all");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState("dashboard");
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
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];

//   // ====== DATA ======
  
//   // Data Dashboard Stats
//   const dashboardStats = [
//     {
//       label: "Total Sites",
//       value: 52,
//       percent: "+4.2%",
//       icon: MapPinIcon,
//     },
//     {
//       label: "Active Operators",
//       value: 127,
//       percent: "+2.1%",
//       icon: UsersIcon,
//     },
//     {
//       label: "Daily Reports",
//       value: 48,
//       percent: "+8.5%",
//       icon: DocumentChartBarIcon,
//     },
//     {
//       label: "Compliance Rate",
//       value: "98.5%",
//       percent: "+1.2%",
//       icon: ChartBarIcon,
//     },
//   ];

//   // Data Recent Reports untuk Dashboard
//   const recentReports = [
//     ["Jakarta Utara - Site A", "Budi Santoso", "7.2", "approved", "2h ago"],
//     ["Bandung - Site B", "Siti Nurhaliza", "6.8", "pending", "3h ago"],
//     ["Surabaya - Site C", "Ahmad Hidayat", "7.5", "approved", "5h ago"],
//   ];

//   // Data System Alerts
//   const systemAlerts = [
//     ["pH level above threshold at Site Jakarta B", "1 hour ago", "warning"],
//     ["3 reports pending validation", "2 hours ago", "pending"],
//     ["All sites reported successfully today", "5 hours ago", "success"],
//   ];

//   // Data Sites
//   const sitesData = [
//     {
//       id: 1,
//       name: "Jakarta Utara - Site A",
//       address: "Jl. Industri No. 123, Jakarta Utara",
//       coordinates: "-6.138414, 106.849396",
//       operators: 3,
//       status: "active",
//       lastReport: "2 hours ago",
//     },
//     {
//       id: 2,
//       name: "Bandung - Site B",
//       address: "Jl. Soekarno Hatta No. 456, Bandung",
//       coordinates: "-6.914744, 107.609810",
//       operators: 2,
//       status: "active",
//       lastReport: "3 hours ago",
//     },
//     {
//       id: 3,
//       name: "Surabaya - Site C",
//       address: "Jl. Basuki Rahmat No. 789, Surabaya",
//       coordinates: "-7.250445, 112.768845",
//       operators: 4,
//       status: "active",
//       lastReport: "5 hours ago",
//     },
//     {
//       id: 4,
//       name: "Semarang - Site D",
//       address: "Jl. Pemuda No. 321, Semarang",
//       coordinates: "-6.966667, 110.416664",
//       operators: 2,
//       status: "inactive",
//       lastReport: "2 days ago",
//     },
//     {
//       id: 5,
//       name: "Yogyakarta - Site E",
//       address: "Jl. Malioboro No. 654, Yogyakarta",
//       coordinates: "-7.797068, 110.370529",
//       operators: 3,
//       status: "active",
//       lastReport: "1 hour ago",
//     },
//   ];

//   // Data Users
//   const usersData = [
//     {
//       id: 1,
//       name: "Budi Santoso",
//       email: "budi.santoso@email.com",
//       role: "operator",
//       site: "Jakarta Utara - Site",
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
//   ];

//   // Data Reports
//   const reportsData = [
//     {
//       id: 1,
//       date: "2025-01-27",
//       time: "08:30",
//       site: "Jakarta Utara - Site A",
//       operator: "Budi Santoso",
//       pH: 7.2,
//       flowRate: "450 L/h",
//       status: "pending",
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
//     },
//   ];

//   // ====== FILTER LOGIC ======

//   // Filter Sites
//   const filteredSites = sitesData.filter(
//     (site) =>
//       (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         site.address.toLowerCase().includes(searchQuery.toLowerCase())) &&
//       (selectedStatus === "All Status" ||
//         (selectedStatus === "Active" && site.status === "active") ||
//         (selectedStatus === "Inactive" && site.status === "inactive"))
//   );

//   // Filter Users
//   const filteredUsers = usersData.filter(
//     (user) =>
//       (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         user.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
//       (selectedStatus === "All Users" ||
//         (selectedStatus === "Active" && user.status === "active") ||
//         (selectedStatus === "Inactive" && user.status === "inactive")) &&
//       (selectedRole === "all" || user.role === selectedRole)
//   );

//   // Filter Reports
//   const filteredReports = reportsData.filter(
//     (report) =>
//       (report.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         report.date.includes(searchQuery)) &&
//       (selectedStatus === "All Reports" ||
//         (selectedStatus === "Approved" && report.status === "approved") ||
//         (selectedStatus === "Pending" && report.status === "pending") ||
//         (selectedStatus === "Rejected" && report.status === "rejected")) &&
//       (selectedSite === "all" || report.site === selectedSite)
//   );

//   // ====== STATS CALCULATION ======

//   // Sites Stats
//   const totalSites = sitesData.length;
//   const activeSites = sitesData.filter(site => site.status === "active").length;
//   const totalOperators = sitesData.reduce((sum, site) => sum + site.operators, 0);

//   // Users Stats
//   const totalUsers = usersData.length;
//   const operatorUsers = usersData.filter(user => user.role === "operator").length;
//   const hrdUsers = usersData.filter(user => user.role === "hrd").length;
//   const adminUsers = usersData.filter(user => user.role === "admin").length;

//   // Reports Stats
//   const totalReports = reportsData.length;
//   const approvedReports = reportsData.filter(r => r.status === "approved").length;
//   const pendingReports = reportsData.filter(r => r.status === "pending").length;
//   const rejectedReports = reportsData.filter(r => r.status === "rejected").length;

//   // ====== HELPER FUNCTIONS ======

//   // Get unique sites for filter
//   const uniqueSites = [...new Set(reportsData.map(report => report.site))];

//   // Status configuration for Reports
//   const getStatusConfig = (status) => {
//     const config = {
//       approved: {
//         icon: CheckCircleIcon,
//         color: "text-green-600",
//         bgColor: "bg-green-100",
//         borderColor: "border-green-200",
//         text: "Approved",
//         textColor: "text-green-800"
//       },
//       pending: {
//         icon: ClockIcon,
//         color: "text-yellow-600",
//         bgColor: "bg-yellow-100",
//         borderColor: "border-yellow-200",
//         text: "Pending",
//         textColor: "text-yellow-800"
//       },
//       rejected: {
//         icon: XCircleIcon,
//         color: "text-red-600",
//         bgColor: "bg-red-100",
//         borderColor: "border-red-200",
//         text: "Rejected",
//         textColor: "text-red-800"
//       }
//     };
//     return config[status] || config.pending;
//   };

//   // Action handlers
//   const handleReview = (reportId) => {
//     console.log("Review report:", reportId);
//   };

//   const handleApprove = (reportId) => {
//     console.log("Approve report:", reportId);
//   };

//   const handleReject = (reportId) => {
//     console.log("Reject report:", reportId);
//   };

//   // ====== RENDER FUNCTIONS ======

//   const renderDashboard = () => (
//     <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//       {/* Headline + Time Range Filter */}
//       <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
//         <div>
//           <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Admin Dashboard</h2>
//           <p className="text-gray-600 text-sm mt-1">Monitor IPAL operations across all sites</p>
//         </div>
//         <div className="flex gap-2 bg-gray-100 rounded-full p-1 mt-3 lg:mt-0">
//           {["Week", "Month", "Year"].map((range) => (
//             <button
//               key={range}
//               onClick={() => setSelectedRange(range)}
//               className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
//                 selectedRange === range
//                   ? "bg-teal-600 text-white shadow-sm"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {range}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* TOP KPIs */}
//       <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//         {dashboardStats.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//               <div className="flex justify-between items-start mb-4">
//                 <p className="text-gray-800 font-semibold">{item.label}</p>
//                 <div className="p-3 rounded-xl bg-teal-50">
//                   <Icon className="w-5 h-5 text-teal-600" />
//                 </div>
//               </div>
//               <p className="text-4xl font-bold text-gray-900">{item.value}</p>
//               <p className="text-xs text-green-600 font-medium mt-1">{item.percent} vs last month</p>
//             </div>
//           );
//         })}
//       </div>

//       {/* SECOND ROW */}
//       <div className="mb-9 grid grid-cols-1 xl:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md min-h-[260px]">
//           <h3 className="font-semibold text-lg text-gray-800 mb-5">Water Quality Trends</h3>
//           <div className="w-full h-48 bg-gray-100 rounded-xl animate-pulse" />
//         </div>
//         <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md min-h-[260px]">
//           <h3 className="font-semibold text-lg text-gray-800 mb-5">Report Status</h3>
//           <div className="w-full h-48 bg-gray-100 rounded-full animate-pulse" />
//         </div>
//       </div>

//       {/* THIRD ROW */}
//       <div className="mb-9 bg-white p-6 rounded-2xl border border-gray-200 shadow-md shadow-sm">
//         <h3 className="font-semibold text-lg text-gray-800 mb-5">Site Performance</h3>
//         <div className="w-full h-56 bg-gray-100 rounded-xl animate-pulse" />
//       </div>

//       {/* LAST ROW */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md lg:col-span-2">
//           <div className="flex justify-between items-center mb-5">
//             <h3 className="font-semibold text-lg text-gray-800">Recent Reports</h3>
//             <button className="text-teal-600 text-sm font-medium hover:underline">View All</button>
//           </div>
//           <ul className="divide-y text-sm text-gray-800">
//             {recentReports.map((r, i) => (
//               <li key={i} className="py-4 flex justify-between items-center">
//                 <div>
//                   <p className="font-semibold text-gray-900">{r[0]}</p>
//                   <p className="text-xs text-gray-500">{r[1]}</p>
//                 </div>
//                 <span className={`px-3 py-1 text-xs rounded-full ${
//                   r[3] === "approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
//                 }`}>
//                   {r[3]}
//                 </span>
//                 <p className="text-xs text-gray-500 ml-4">{r[4]}</p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
//           <h3 className="font-semibold text-lg text-gray-800 mb-5">System Alerts</h3>
//           <div className="space-y-4 text-sm text-gray-800">
//             {systemAlerts.map(([message, time, type], i) => {
//               const Icon = type === "warning" ? ExclamationTriangleIcon : type === "pending" ? ClockIcon : CheckCircleIcon;
//               const style = type === "warning" ? "bg-red-50 text-red-600 border-red-200" 
//                 : type === "pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" 
//                 : "bg-green-50 text-green-700 border-green-200";
//               return (
//                 <div key={i} className="p-4 rounded-xl bg-gray-50 border flex items-start gap-3">
//                   <div className={`p-2 rounded-lg border ${style} flex items-center justify-center`}>
//                     <Icon className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="font-medium">{message}</p>
//                     <p className="text-xs text-gray-500">{time}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderSites = () => (
//     <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Site Management</h1>
//           <p className="text-gray-600">Manage IPAL sites and locations</p>
//         </div>
//         <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
//           <PlusIcon className="w-5 h-5" />
//           Add New Site
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Total Sites</h3>
//             <div className="p-2 bg-teal-100 rounded-lg">
//               <MapPinIcon className="w-5 h-5 text-teal-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{totalSites}</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Active Sites</h3>
//             <div className="p-2 bg-green-100 rounded-lg">
//               <MapPinIcon className="w-5 h-5 text-green-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{activeSites}</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Total Operators</h3>
//             <div className="p-2 bg-blue-100 rounded-lg">
//               <UsersIcon className="w-5 h-5 text-blue-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{totalOperators}</p>
//         </div>
//       </div>

//       {/* Search and Filter Bar */}
//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//         <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//           <div className="relative flex-1 max-w-lg">
//             <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search sites by name or address..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-9 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//             />
//           </div>
//           <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//             {["All Status", "Active", "Inactive"].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setSelectedStatus(status)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                   selectedStatus === status
//                     ? "bg-teal-600 text-white shadow-sm"
//                     : "text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Sites Table */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//         <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//           <div className="col-span-4">Site Name</div>
//           <div className="col-span-3">Address</div>
//           <div className="col-span-1 text-center">Operators</div>
//           <div className="col-span-1 text-center">Status</div>
//           <div className="col-span-2">Last Report</div>
//           <div className="col-span-1 text-center">Actions</div>
//         </div>
//         <div className="divide-y divide-gray-200">
//           {filteredSites.map((site) => (
//             <div key={site.id} className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition">
//               {/* Mobile View */}
//               <div className="md:hidden space-y-3">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="font-medium text-gray-900">{site.name}</p>
//                     <p className="text-sm text-gray-500 mt-1">{site.coordinates}</p>
//                   </div>
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     site.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                   }`}>
//                     {site.status}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="text-gray-600">Address</p>
//                     <p className="text-gray-900 font-medium">{site.address}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Operators</p>
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
//                         <UsersIcon className="w-4 h-4" />
//                         <span className="text-sm font-medium">{site.operators}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                   <div>
//                     <p className="text-gray-600 text-sm">Last Report</p>
//                     <p className="text-gray-900 font-medium">{site.lastReport}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                       {/* Edit Icon */}
//                     </button>
//                     <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                       {/* Delete Icon */}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Desktop View */}
//               <div className="hidden md:block col-span-4">
//                 <p className="font-medium text-gray-900">{site.name}</p>
//                 <p className="text-sm text-gray-500 mt-1">{site.coordinates}</p>
//               </div>
//               <div className="hidden md:block col-span-3">
//                 <p className="text-gray-700">{site.address}</p>
//               </div>
//               <div className="hidden md:block col-span-1 text-center">
//                 <div className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md mx-auto w-fit">
//                   <UsersIcon className="w-4 h-4" />
//                   <span className="text-sm font-medium">{site.operators}</span>
//                 </div>
//               </div>
//               <div className="hidden md:block col-span-1 text-center">
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                   site.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                 }`}>
//                   {site.status}
//                 </span>
//               </div>
//               <div className="hidden md:block col-span-2">
//                 <p className="text-gray-700">{site.lastReport}</p>
//               </div>
//               <div className="hidden md:block col-span-1 text-center">
//                 <div className="flex gap-2 justify-center">
//                   <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                     {/* Edit Icon */}
//                   </button>
//                   <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                     {/* Delete Icon */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderUsers = () => (
//     <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <div>
//           <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">User Management</h1>
//           <p className="text-gray-600">Manage system users and permissions</p>
//         </div>
//         <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
//           <PlusIcon className="w-5 h-5" />
//           Add New User
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Total Users</h3>
//             <div className="p-2 bg-teal-100 rounded-lg">
//               <UsersIcon className="w-5 h-5 text-teal-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{totalUsers}</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Operators</h3>
//             <div className="p-2 bg-blue-100 rounded-lg">
//               <UsersIcon className="w-5 h-5 text-blue-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{operatorUsers}</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">HRD</h3>
//             <div className="p-2 bg-orange-100 rounded-lg">
//               <UsersIcon className="w-5 h-5 text-orange-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{hrdUsers}</p>
//         </div>
//         <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-gray-700 font-medium">Admins</h3>
//             <div className="p-2 bg-purple-100 rounded-lg">
//               <UsersIcon className="w-5 h-5 text-purple-600" />
//             </div>
//           </div>
//           <p className="text-3xl font-bold text-gray-900">{adminUsers}</p>
//         </div>
//       </div>

//       {/* Search and Filter Bar */}
//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//         <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//           <div className="relative flex-1 max-w-md">
//             <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//             <input
//               type="text"
//               placeholder="Search users by name, email, or role..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//             />
//           </div>
//           <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//             {["All Users", "Active", "Inactive"].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setSelectedStatus(status)}
//                 className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                   selectedStatus === status
//                     ? "bg-teal-600 text-white shadow-sm"
//                     : "text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {status}
//               </button>
//             ))}
//           </div>
//           <div className="relative">
//             <select
//               className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//               onChange={(e) => setSelectedRole(e.target.value)}
//             >
//               <option value="all">All Roles</option>
//               <option value="operator">Operator</option>
//               <option value="hrd">HRD</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Users Table */}
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//         <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//           <div className="col-span-4">User</div>
//           <div className="col-span-2">Role</div>
//           <div className="col-span-2">Site</div>
//           <div className="col-span-2">Status</div>
//           <div className="col-span-1">Last Active</div>
//           <div className="col-span-1 text-center">Actions</div>
//         </div>
//         <div className="divide-y divide-gray-200">
//           {filteredUsers.map((user) => (
//             <div key={user.id} className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition">
//               {/* Mobile View */}
//               <div className="md:hidden space-y-3">
//                 <div className="flex justify-between items-start">
//                   <div className="flex items-center gap-3">
//                     <div className={`w-10 h-10 bg-gradient-to-r ${
//                       user.role === "operator" ? "from-teal-500 to-cyan-600" 
//                       : user.role === "hrd" ? "from-orange-500 to-red-600" 
//                       : "from-purple-500 to-indigo-600"
//                     } rounded-full flex items-center justify-center text-white font-bold`}>
//                       {user.initial}
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">{user.name}</p>
//                       <p className="text-sm text-gray-500">{user.email}</p>
//                     </div>
//                   </div>
//                   <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                     user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                   }`}>
//                     {user.status}
//                   </span>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <p className="text-gray-600">Role</p>
//                     <p className="text-gray-900 font-medium capitalize">{user.role}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-600">Site</p>
//                     <p className="text-gray-900 font-medium">{user.site}</p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center pt-2 border-t border-gray-200">
//                   <div>
//                     <p className="text-gray-600 text-sm">Last Active</p>
//                     <p className="text-gray-900 font-medium">{user.lastActive}</p>
//                   </div>
//                   <div className="flex gap-2">
//                     <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                       {/* Edit Icon */}
//                     </button>
//                     <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                       {/* Delete Icon */}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               {/* Desktop View */}
//               <div className="hidden md:flex col-span-4 items-center gap-3">
//                 <div className={`w-10 h-10 bg-gradient-to-r ${
//                   user.role === "operator" ? "from-teal-500 to-cyan-600" 
//                   : user.role === "hrd" ? "from-orange-500 to-red-600" 
//                   : "from-purple-500 to-indigo-600"
//                 } rounded-full flex items-center justify-center text-white font-bold`}>
//                   {user.initial}
//                 </div>
//                 <div>
//                   <p className="font-medium text-gray-900">{user.name}</p>
//                   <p className="text-sm text-gray-500">{user.email}</p>
//                 </div>
//               </div>
//               <div className="hidden md:flex col-span-2 items-center">
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                   user.role === "operator" ? "bg-blue-100 text-blue-800" 
//                   : user.role === "hrd" ? "bg-orange-100 text-orange-800" 
//                   : "bg-purple-100 text-purple-800"
//                 } capitalize`}>
//                   {user.role}
//                 </span>
//               </div>
//               <div className="hidden md:flex col-span-2 items-center">
//                 <p className="text-gray-700">{user.site}</p>
//               </div>
//               <div className="hidden md:flex col-span-2 items-center">
//                 <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                   user.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                 }`}>
//                   {user.status}
//                 </span>
//               </div>
//               <div className="hidden md:flex col-span-1 items-center">
//                 <p className="text-gray-700">{user.lastActive}</p>
//               </div>
//               <div className="hidden md:flex col-span-1 items-center justify-center">
//                 <div className="flex gap-2">
//                   <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
//                     {/* Edit Icon */}
//                   </button>
//                   <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
//                     {/* Delete Icon */}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderReports = () => (
//   <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//     {/* Header */}
//     <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//       <div>
//         <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Report Monitoring</h1>
//         <p className="text-gray-600">Review and validate daily IPAL reports</p>
//       </div>
//       <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
//         <PlusIcon className="w-5 h-5" />
//         Export Report
//       </button>
//     </div>

//     {/* Stats Cards */}
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Total Reports</h3>
//           <div className="p-2 bg-teal-100 rounded-lg">
//             <DocumentChartBarIcon className="w-5 h-5 text-teal-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">{totalReports}</p>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Approved</h3>
//           <div className="p-2 bg-green-100 rounded-lg">
//             <CheckCircleIcon className="w-5 h-5 text-green-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">{approvedReports}</p>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Pending</h3>
//           <div className="p-2 bg-yellow-100 rounded-lg">
//             <ClockIcon className="w-5 h-5 text-yellow-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">{pendingReports}</p>
//       </div>

//       <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-gray-700 font-medium">Rejected</h3>
//           <div className="p-2 bg-red-100 rounded-lg">
//             <XCircleIcon className="w-5 h-5 text-red-600" />
//           </div>
//         </div>
//         <p className="text-3xl font-bold text-gray-900">{rejectedReports}</p>
//       </div>
//     </div>

//     {/* Search and Filter */}
//     <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
//       <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
//         <div className="relative flex-1 max-w-md">
//           <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
//           <input
//             type="text"
//             placeholder="Search reports by site, operator, or date..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//           />
//         </div>

//         <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
//           {["All Reports", "Approved", "Pending", "Rejected"].map((status) => (
//             <button
//               key={status}
//               onClick={() => setSelectedStatus(status)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition ${
//                 selectedStatus === status
//                   ? "bg-teal-600 text-white shadow-sm"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {status}
//             </button>
//           ))}
//         </div>

//         <select
//           value={selectedSite}
//           onChange={(e) => setSelectedSite(e.target.value)}
//           className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
//         >
//           <option value="all">All Sites</option>
//           {uniqueSites.map((site) => (
//             <option key={site} value={site}>
//               {site}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>

//     {/* Reports Table */}
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
//       {/* Desktop Table Header */}
//       <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
//         <div className="col-span-2">Date & Time</div>
//         <div className="col-span-2">Site</div>
//         <div className="col-span-2">Operator</div>
//         <div className="col-span-1 text-center">pH</div>
//         <div className="col-span-2">Flow Rate</div>
//         <div className="col-span-2">Status</div>
//         <div className="col-span-1 text-center">Actions</div>
//       </div>

//       {/* Table Body */}
//       <div className="divide-y divide-gray-200">
//         {filteredReports.length === 0 ? (
//           <div className="p-8 text-center text-gray-500">
//             No reports found matching your criteria.
//           </div>
//         ) : (
//           filteredReports.map((report) => {
//             const statusConfig = getStatusConfig(report.status);
//             const StatusIcon = statusConfig.icon;

//             return (
//               <div
//                 key={report.id}
//                 className="lg:grid lg:grid-cols-12 lg:gap-4 px-4 lg:px-6 py-4 hover:bg-gray-50 transition items-center"
//               >
//                 {/* Mobile View */}
//                 <div className="lg:hidden space-y-4">
//                   <div className="flex justify-between items-start">
//                     <div className="space-y-1">
//                       <p className="font-semibold text-gray-900">{report.date}</p>
//                       <p className="text-sm text-gray-500">{report.time}</p>
//                     </div>
//                     <span
//                       className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} ${statusConfig.textColor} border`}
//                     >
//                       <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
//                       {statusConfig.text}
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-500 mb-1">Site</p>
//                       <p className="text-sm font-medium text-gray-900">{report.site}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500 mb-1">Operator</p>
//                       <p className="text-sm font-medium text-gray-900">{report.operator}</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-xs text-gray-500 mb-1">pH</p>
//                       <p className="text-sm font-medium text-gray-900">{report.pH}</p>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500 mb-1">Flow Rate</p>
//                       <p className="text-sm font-medium text-gray-900">{report.flowRate}</p>
//                     </div>
//                   </div>

//                   <div className="flex justify-end gap-2 pt-3 border-t border-gray-200">
//                     <button
//                       onClick={() => handleReview(report.id)}
//                       className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 border border-blue-200 text-sm font-medium"
//                     >
//                       <EyeIcon className="w-4 h-4" />
//                       Review
//                     </button>
//                     {report.status === "pending" && (
//                       <>
//                         <button
//                           onClick={() => handleApprove(report.id)}
//                           className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 border border-green-200 text-sm font-medium"
//                         >
//                           <CheckIcon className="w-4 h-4" />
//                           Approve
//                         </button>
//                         <button
//                           onClick={() => handleReject(report.id)}
//                           className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 border border-red-200 text-sm font-medium"
//                         >
//                           <XCircleIcon className="w-4 h-4" />
//                           Reject
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 {/* Desktop View */}
//                 <div className="hidden lg:flex col-span-2 items-center">
//                   <div>
//                     <p className="font-medium text-gray-900">{report.date}</p>
//                     <p className="text-sm text-gray-500">{report.time}</p>
//                   </div>
//                 </div>

//                 <div className="hidden lg:flex col-span-2 items-center">
//                   <p className="text-gray-700">{report.site}</p>
//                 </div>

//                 <div className="hidden lg:flex col-span-2 items-center">
//                   <p className="text-gray-700">{report.operator}</p>
//                 </div>

//                 <div className="hidden lg:flex col-span-1 items-center justify-center">
//                   <p className="text-gray-900 font-medium">{report.pH}</p>
//                 </div>

//                 <div className="hidden lg:flex col-span-2 items-center">
//                   <p className="text-gray-700">{report.flowRate}</p>
//                 </div>

//                 <div className="hidden lg:flex col-span-2 items-center">
//                   <span
//                     className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} ${statusConfig.textColor} border`}
//                   >
//                     <StatusIcon className={`w-4 h-4 ${statusConfig.color}`} />
//                     {statusConfig.text}
//                   </span>
//                 </div>

//                 <div className="hidden lg:flex col-span-1 items-center justify-center">
//                   <div className="flex items-center gap-1">
//                     <button
//                       onClick={() => handleReview(report.id)}
//                       className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
//                       title="Review Report"
//                     >
//                       <EyeIcon className="w-4 h-4" />
//                     </button>
//                     {report.status === "pending" && (
//                       <>
//                         <button
//                           onClick={() => handleApprove(report.id)}
//                           className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition border border-transparent hover:border-green-200"
//                           title="Approve Report"
//                         >
//                           <CheckIcon className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => handleReject(report.id)}
//                           className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-200"
//                           title="Reject Report"
//                         >
//                           <XCircleIcon className="w-4 h-4" />
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   </div>
// );

//   const renderPlaceholder = () => (
//     <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
//         <h2 className="text-xl font-bold text-gray-900 mb-2">
//           {menuItems.find((m) => m.id === activeMenu)?.name} Page
//         </h2>
//         <p className="text-gray-600">This page is under development</p>
//       </div>
//     </div>
//   );

//   // ====== MAIN RENDER ======

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Overlay mobile */}
//       {isSidebarOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <div className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
//         {/* Logo */}
//         <div className="p-6 border-b border-gray-200 flex items-center gap-3 bg-white">
//           <img src="/hero/logosioptima.png" alt="logo" className="w-9 h-9 rounded" />
//           <div>
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600">IPAL Monitoring</p>
//           </div>
//           <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden ml-auto p-2 text-gray-600 hover:text-teal-600 transition">
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
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
//                       activeMenu === item.id
//                         ? "bg-teal-50 text-teal-700 border-r-2 border-teal-600"

//                     onClick={() => setActiveMenu(item.id)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
//                       activeMenu === item.id
//                         ? "bg-teal-50 text-teal-700 border-r-2 border-teal-500"

//                         : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />

//                     {item.name}

//                     <span className="font-medium">{item.name}</span>

//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>


//         {/* Admin badge */}
//         <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">

//         {/* Bottom Section */}
//         <div className="p-4 border-t bg-white mt-auto">
//           <div className="space-y-3">
//             <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <BellIcon className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-900">Pending</p>
//                   <p className="text-xs text-gray-600">Validation needed</p>
//                 </div>
//               </div>
//               <span className="w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                 3
//               </span>
//             </div>

//             <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg p-3 text-white text-center">
//               <div className="text-xs opacity-80 mb-1">SYSTEM STATUS</div>
//               <div className="text-sm font-semibold">
//                 All Systems Operational
//               </div>
//               <div className="flex justify-center mt-1">
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full mx-1"></div>
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full mx-1"></div>
//                 <div className="w-1.5 h-1.5 bg-green-400 rounded-full mx-1"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-64 overflow-auto">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b sticky top-0 z-30">
//           <div className="flex justify-between items-center px-4 lg:px-6 py-4">
//             <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//               {menuItems.find((m) => m.id === activeMenu)?.name} Dashboard
//             </h1>

//             {/* Profile & Logout */}
//             <div className="flex items-center gap-3 lg:gap-4 pl-3 lg:pl-4 border-l relative group">
//               <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
//                 H
//               </div>
//               <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
//                 <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 text-left text-sm">
//                   <CogIcon className="w-4 h-4" />
//                   <span>Account Settings</span>
//                 </button>
//                 <button
//                   onClick={() => router.push("./")}
//                   className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm"
//                 >
//                   <ArrowRightOnRectangleIcon className="w-4 h-4" />
//                   <span>Log Out</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Conditional Content */}
//         <div className="p-4 lg:p-6">
//           {activeMenu === "dashboard" && (
//             <div>
//               {/* Stats Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-teal-100 rounded-lg">
//                       <MapPinIcon className="w-5 h-5 text-teal-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">Total Sites</h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">52</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +4.3% vs last month
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-blue-100 rounded-lg">
//                       <UsersIcon className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Active Operators
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">127</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +2.1% vs last month
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-orange-100 rounded-lg">
//                       <DocumentChartBarIcon className="w-5 h-5 text-orange-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Daily Reports
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">48</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +8.5% vs last month
//                   </p>
//                 </div>
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-green-100 rounded-lg">
//                       <ChartBarIcon className="w-5 h-5 text-green-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Compliance Rate
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">98.5%</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +1.2% vs last month
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeMenu === "sites" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Site List</h2>
//               <ul className="space-y-2">
//                 {[...Array(10)].map((_, i) => (
//                   <li key={i} className="p-3 bg-white border rounded-lg">
//                     Site {i + 1} - Location {i + 1}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {activeMenu === "users" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Users List</h2>
//               <ul className="space-y-2">
//                 {[...Array(8)].map((_, i) => (
//                   <li key={i} className="p-3 bg-white border rounded-lg">
//                     User {i + 1} - Role: Operator
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {activeMenu === "reports" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Report Status</h2>
//               <div className="space-y-4">
//                 {["Approved", "Pending Review", "Rejected"].map((status, i) => (
//                   <div key={i}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-700 font-medium">
//                         {status}
//                       </span>
//                       <span
//                         className={`font-semibold ${
//                           status === "Approved"
//                             ? "text-green-600"
//                             : status === "Pending Review"
//                               ? "text-yellow-600"
//                               : "text-red-600"
//                         }`}
//                       >
//                         {status === "Approved"
//                           ? "85%"
//                           : status === "Pending Review"
//                             ? "12%"
//                             : "3%"}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className={`h-2 rounded-full ${
//                           status === "Approved"
//                             ? "bg-green-500"
//                             : status === "Pending Review"
//                               ? "bg-yellow-500"
//                               : "bg-red-500"
//                         }`}
//                         style={{
//                           width:
//                             status === "Approved"
//                               ? "85%"
//                               : status === "Pending Review"
//                                 ? "12%"
//                                 : "3%",
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState } from "react";
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
// } from "@heroicons/react/24/outline";

// export default function Admin() {
//   const [activeMenu, setActiveMenu] = useState("dashboard");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const router = useRouter();

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: ChartBarIcon },
//     { id: "sites", name: "Sites", icon: MapPinIcon },
//     { id: "users", name: "Users", icon: UsersIcon },
//     { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed top-0 left-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50">
//         {/* Logo */}
//         <div className="p-6 border-b flex items-center justify-between bg-white">
//           <div>
//             <h1 className="text-xl font-bold text-gray-800">SIOPTIMA</h1>
//             <p className="text-sm text-gray-600 mt-1">IPAL Monitoring</p>
//           </div>
//           <button
//             onClick={() => setIsSidebarOpen(false)}
//             className="lg:hidden p-2 text-gray-600 hover:text-teal-600 transition"
//           >
//             <XMarkIcon className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <nav className="p-4 flex-1">
//           <ul className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => setActiveMenu(item.id)}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
//                       activeMenu === item.id
//                         ? "bg-teal-50 text-teal-700 border-r-2 border-teal-500"
//                         : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span className="font-medium">{item.name}</span>
//                   </button>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Bottom Section */}
//         {/* Bottom Section - Admin Profile */}
//         <div className="p-4 border-t bg-white mt-auto">

//           <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
//                 A
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-900">Admin SIOPTIMA</p>
//                 <p className="text-sm text-gray-600">Admin</p>
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
//               <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-gray-600 hover:text-teal-600">
//                 <Bars3Icon className="w-6 h-6" />
//               </button>
//               <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//                 {menuItems.find((m) => m.id === activeMenu)?.name}
//               </h1>
//             </div>
//             <div className="flex items-center gap-4">

//       {/* Main Content */}
//       <div className="flex-1 ml-64 overflow-auto">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b sticky top-0 z-30">
//           <div className="flex justify-between items-center px-4 lg:px-6 py-4">
//             <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
//               {menuItems.find((m) => m.id === activeMenu)?.name} Dashboard
//             </h1>

//             {/* Settings & Notification + Profile */}
//             <div className="flex items-center gap-4">
//               {/* Notifications */}

//               <button className="p-2 text-gray-600 hover:text-teal-600 relative">
//                 <BellIcon className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>

//               <div ref={dropdownRef} className="relative flex flex-col items-end gap-2">
//                 <button onClick={(e) => { e.stopPropagation(); setDropdownOpen((prev) => !prev); }} className="flex items-center gap-2 cursor-pointer">
//                   <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
//                     A
//                   </div>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {dropdownOpen && (
//                   <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 shadow-md py-2 z-[9999] transition-transform origin-top">
//                     <button onClick={() => { setDropdownOpen(false); router.push("/"); }} className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm">
//                       <ArrowRightOnRectangleIcon className="w-4 h-4" />
//                       Log Out
//                     </button>
//                   </div>
//                 )}


//               {/* Settings */}
//               <button className="p-2 text-gray-600 hover:text-teal-600">
//                 <CogIcon className="w-6 h-6" />
//               </button>

//               {/* Profile & Logout */}
//               <div className="flex items-center gap-3 lg:gap-4 pl-3 lg:pl-4 border-l relative group">
//                 <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
//                   A
//                 </div>
//                 <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
//                   <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 text-left text-sm">
//                     <CogIcon className="w-4 h-4" />
//                     <span>Account Settings</span>
//                   </button>
//                   <button
//                     onClick={() => router.push("/")}
//                     className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 text-left text-sm"
//                   >
//                     <ArrowRightOnRectangleIcon className="w-4 h-4" />
//                     <span>Log Out</span>
//                   </button>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </header>


//         {/* Content berdasarkan activeMenu */}
//         {activeMenu === "dashboard" && renderDashboard()}
//         {activeMenu === "sites" && renderSites()}
//         {activeMenu === "users" && renderUsers()}
//         {activeMenu === "reports" && renderReports()}
//         {!["dashboard", "sites", "users", "reports"].includes(activeMenu) && renderPlaceholder()}

//         {/* Conditional Content */}
//         <div className="p-4 lg:p-6">
//           {activeMenu === "dashboard" && (
//             <div>
//               {/* Stats Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//                 {/* Total Sites */}
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-teal-100 rounded-lg">
//                       <MapPinIcon className="w-5 h-5 text-teal-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">Total Sites</h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">52</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +4.3% vs last month
//                   </p>
//                 </div>

//                 {/* Active Operators */}
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-blue-100 rounded-lg">
//                       <UsersIcon className="w-5 h-5 text-blue-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Active Operators
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">127</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +2.1% vs last month
//                   </p>
//                 </div>

//                 {/* Daily Reports */}
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-orange-100 rounded-lg">
//                       <DocumentChartBarIcon className="w-5 h-5 text-orange-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Daily Reports
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">48</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +8.5% vs last month
//                   </p>
//                 </div>

//                 {/* Compliance Rate */}
//                 <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="p-2 bg-green-100 rounded-lg">
//                       <ChartBarIcon className="w-5 h-5 text-green-600" />
//                     </div>
//                     <h3 className="font-semibold text-gray-700">
//                       Compliance Rate
//                     </h3>
//                   </div>
//                   <p className="text-2xl font-bold text-gray-900">98.5%</p>
//                   <p className="text-xs text-green-600 font-medium">
//                     +1.2% vs last month
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeMenu === "sites" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Site List</h2>
//               <ul className="space-y-2">
//                 {[...Array(10)].map((_, i) => (
//                   <li key={i} className="p-3 bg-white border rounded-lg">
//                     Site {i + 1} - Location {i + 1}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {activeMenu === "users" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Users List</h2>
//               <ul className="space-y-2">
//                 {[...Array(8)].map((_, i) => (
//                   <li key={i} className="p-3 bg-white border rounded-lg">
//                     User {i + 1} - Role: Operator
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {activeMenu === "reports" && (
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Report Status</h2>
//               <div className="space-y-4">
//                 {["Approved", "Pending Review", "Rejected"].map((status, i) => (
//                   <div key={i}>
//                     <div className="flex justify-between mb-2">
//                       <span className="text-gray-700 font-medium">
//                         {status}
//                       </span>
//                       <span
//                         className={`font-semibold ${
//                           status === "Approved"
//                             ? "text-green-600"
//                             : status === "Pending Review"
//                               ? "text-yellow-600"
//                               : "text-red-600"
//                         }`}
//                       >
//                         {status === "Approved"
//                           ? "85%"
//                           : status === "Pending Review"
//                             ? "12%"
//                             : "3%"}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className={`h-2 rounded-full ${
//                           status === "Approved"
//                             ? "bg-green-500"
//                             : status === "Pending Review"
//                               ? "bg-yellow-500"
//                               : "bg-red-500"
//                         }`}
//                         style={{
//                           width:
//                             status === "Approved"
//                               ? "85%"
//                               : status === "Pending Review"
//                                 ? "12%"
//                                 : "3%",
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }









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
} from "@heroicons/react/24/outline";

export default function Admin() {
  const [selectedRange, setSelectedRange] = useState("Month");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedSite, setSelectedSite] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [hoveredBar, setHoveredBar] = useState(null);
  const [hoveredPie, setHoveredPie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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
    { id: "sites", name: "Sites", icon: MapPinIcon },
    { id: "users", name: "Users", icon: UsersIcon },
    { id: "reports", name: "Reports", icon: DocumentChartBarIcon },
  ];

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

  const reportStatusData = [
    { status: "Approved", value: 85, color: "#10B981" },
    { status: "Pending", value: 12, color: "#F59E0B" },
    { status: "Rejected", value: 3, color: "#EF4444" },
  ];

  const sitePerformanceData = [
    { city: "Jakarta", compliance: 92, reports: 12 },
    { city: "Bandung", compliance: 95, reports: 8 },
    { city: "Surabaya", compliance: 88, reports: 15 },
    { city: "Semarang", compliance: 85, reports: 6 },
    { city: "Yogyakarta", compliance: 90, reports: 9 },
    { city: "Bali", compliance: 87, reports: 11 },
  ];

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
        middleAngle: (startAngle + endAngle) / 2
      };
    });
  };

  const pieChartData = calculatePieChart();

  // ==================== SITES DATA ====================
  const sitesData = [
    {
      id: 1,
      name: "Jakarta Utara - Site A",
      address: "Jl. Industri No. 123, Jakarta Utara",
      coordinates: "-6.138414, 106.849396",
      operators: 3,
      status: "active",
      lastReport: "2 hours ago",
    },
    {
      id: 2,
      name: "Bandung - Site B",
      address: "Jl. Soekarno Hatta No. 456, Bandung",
      coordinates: "-6.914744, 107.609810",
      operators: 2,
      status: "active",
      lastReport: "3 hours ago",
    },
    {
      id: 3,
      name: "Surabaya - Site C",
      address: "Jl. Basuki Rahmat No. 789, Surabaya",
      coordinates: "-7.250445, 112.768845",
      operators: 4,
      status: "active",
      lastReport: "5 hours ago",
    },
    {
      id: 4,
      name: "Semarang - Site D",
      address: "Jl. Pemuda No. 321, Semarang",
      coordinates: "-6.966667, 110.416664",
      operators: 2,
      status: "inactive",
      lastReport: "2 days ago",
    },
    {
      id: 5,
      name: "Yogyakarta - Site E",
      address: "Jl. Malioboro No. 654, Yogyakarta",
      coordinates: "-7.797068, 110.370529",
      operators: 3,
      status: "active",
      lastReport: "1 hour ago",
    },
  ];

  const filteredSites = sitesData.filter(
    (site) =>
      (site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.address.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedStatus === "All Status" ||
        (selectedStatus === "Active" && site.status === "active") ||
        (selectedStatus === "Inactive" && site.status === "inactive"))
  );

  // ==================== USERS DATA ====================
  const usersData = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi.santoso@email.com",
      role: "operator",
      site: "Jakarta Utara - Site",
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
  ];

  const filteredUsers = usersData.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.role.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedStatus === "All Users" ||
        (selectedStatus === "Active" && user.status === "active") ||
        (selectedStatus === "Inactive" && user.status === "inactive")) &&
      (selectedRole === "all" || user.role === selectedRole)
  );

  // ==================== REPORTS DATA ====================
  const reportsData = [
    {
      id: 1,
      date: "2025-01-27",
      time: "08:30",
      site: "Jakarta Utara - Site A",
      operator: "Budi Santoso",
      pH: 7.2,
      flowRate: "450 L/h",
      status: "pending",
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
    },
  ];

  const filteredReports = reportsData.filter(
    (report) =>
      (report.site.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.date.includes(searchQuery)) &&
      (selectedStatus === "All Reports" ||
        (selectedStatus === "Approved" && report.status === "approved") ||
        (selectedStatus === "Pending" && report.status === "pending") ||
        (selectedStatus === "Rejected" && report.status === "rejected")) &&
      (selectedSite === "all" || report.site === selectedSite)
  );

  const totalReports = reportsData.length;
  const approvedReports = reportsData.filter((r) => r.status === "approved").length;
  const pendingReports = reportsData.filter((r) => r.status === "pending").length;
  const rejectedReports = reportsData.filter((r) => r.status === "rejected").length;
  const uniqueSites = [...new Set(reportsData.map((report) => report.site))];

  const getStatusConfig = (status) => {
    const config = {
      approved: {
        icon: CheckCircleIcon,
        color: "text-green-100",
        bgColor: "bg-green-800",
        borderColor: "border-green-200",
        text: "Approved",
        textColor: "text-green-800"
      },
      pending: {
        icon: ClockIcon,
        color: "text-yellow-600",
        bgColor: "bg-yellow-300",
        borderColor: "border-yellow-200",
        text: "Pending",
        textColor: "text-yellow-800"
      },
      rejected: {
        icon: XCircleIcon,
        color: "text-red-100",
        bgColor: "bg-red-600",
        borderColor: "border-red-200",
        text: "Rejected",
        textColor: "text-red-800"
      }
    };
    return config[status] || config.pending;
  };

  const handleReview = (reportId) => {
    console.log("Review report:", reportId);
  };

  const handleApprove = (reportId) => {
    console.log("Approve report:", reportId);
  };

  const handleReject = (reportId) => {
    console.log("Reject report:", reportId);
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

        {/* Admin badge */}
        <div className="p-4 border border-gray-200 shadow-md bg-white mt-auto">
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full
                flex items-center justify-center text-white font-bold text-lg"
              >
                A
              </div>
              <div>
                <p className="font-semibold text-gray-900">Admin</p>
                <p className="text-sm text-gray-600">Admin</p>
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
                    A
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

        {/* DASHBOARD CONTENT */}
        {activeMenu === "dashboard" && (
          <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
            {/* Headline + Time Range Filter */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Admin Dashboard
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Monitor IPAL operations across all sites
                </p>
              </div>

              <div className="flex gap-2 bg-gray-100 rounded-full p-1 mt-3 lg:mt-0">
                {["Week", "Month", "Year"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedRange(range)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition
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
              </div>
            </div>

            {/* TOP KPIs */}
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {[
                {
                  label: "Total Sites",
                  value: 52,
                  percent: "+4.2%",
                  icon: MapPinIcon,
                },
                {
                  label: "Active Operators",
                  value: 127,
                  percent: "+2.1%",
                  icon: UsersIcon,
                },
                {
                  label: "Daily Reports",
                  value: 48,
                  percent: "+8.5%",
                  icon: DocumentChartBarIcon,
                },
                {
                  label: "Compliance Rate",
                  value: "98.5%",
                  percent: "+1.2%",
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
                    <p className="text-xs text-green-600 font-medium mt-1">
                      {item.percent} vs last month
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SECOND ROW - Charts */}
            <div className="mb-9 grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Water Quality Trends */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  Water Quality Trends
                </h3>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>0</span>
                  </div>
                  
                  <div className="ml-8">
                    <div className="w-full h-48 flex items-end justify-between gap-1 px-2 border-b border-l border-gray-200">
                      {waterQualityData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center flex-1 relative">
                          <div
                            className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t transition-all duration-300 hover:from-blue-500 hover:to-blue-700 cursor-pointer relative group"
                            style={{ height: `${(data.ec / 800) * 120}px` }}
                            onMouseEnter={() => setHoveredBar(index)}
                            onMouseLeave={() => setHoveredBar(null)}
                          />
                          
                          <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                          
                          {hoveredBar === index && (
                            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 min-w-32 shadow-lg">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                <p>EC: {data.ec}</p>
                              </div>
                              <div className="flex items-center gap-2 mb-1">
                                <div className="w-3 h-3 bg-green-500 rounded"></div>
                                <p>TDS: {data.tds}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                                <p>pH: {data.pH}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span className="text-gray-600">EC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded"></div>
                        <span className="text-gray-600">TDS</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-purple-500 rounded"></div>
                        <span className="text-gray-600">pH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Report Status */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  Report Status
                </h3>
                <div className="flex flex-col lg:flex-row items-center gap-8">
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
                            hoveredPie === index ? 'opacity-80 scale-105' : 'opacity-100'
                          }`}
                          stroke="white"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredPie(index)}
                          onMouseLeave={() => setHoveredPie(null)}
                        />
                      ))}
                    </svg>
                    
                    <div className="text-center mt-4">
                      <div className="text-2xl font-bold text-gray-800">85%</div>
                      <div className="text-sm text-gray-600">Approved</div>
                    </div>
                    
                    {hoveredPie !== null && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-10 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded" 
                            style={{ backgroundColor: pieChartData[hoveredPie].color }}
                          ></div>
                          <span>{pieChartData[hoveredPie].status}: {pieChartData[hoveredPie].value}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {reportStatusData.map((item, index) => (
                      <div 
                        key={item.status} 
                        className={`flex items-center justify-between p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                          hoveredPie === index ? 'bg-gray-50 transform scale-105' : ''
                        }`}
                        onMouseEnter={() => setHoveredPie(index)}
                        onMouseLeave={() => setHoveredPie(null)}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded transition-transform duration-200"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-sm text-gray-700 font-medium">{item.status}</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* THIRD ROW - Site Performance */}
            <div className="mb-9 bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
              <h3 className="font-semibold text-lg text-gray-800 mb-5">
                Site Performance
              </h3>
              
              <div className="flex gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-teal-500 rounded"></div>
                  <span className="text-gray-600">Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-gray-600">Reports</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500 py-4">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                <div className="ml-8">
                  <div className="w-full h-48 flex items-end justify-between gap-4 px-2 border-b border-l border-gray-200">
                    {sitePerformanceData.map((site, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 relative">
                        <div className="flex gap-2 items-end w-full justify-center">
                          <div
                            className="w-4 bg-teal-500 rounded-t transition-all duration-300 hover:bg-teal-600 cursor-pointer relative group"
                            style={{ height: `${(site.compliance / 100) * 120}px` }}
                          >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                              Compliance: {site.compliance}%
                            </div>
                          </div>
                          
                          <div
                            className="w-4 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600 cursor-pointer relative group"
                            style={{ height: `${(site.reports / 15) * 120}px` }}
                          >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                              Reports: {site.reports}
                            </div>
                          </div>
                        </div>
                        
                        <span className="text-xs text-gray-600 mt-2 text-center w-full">
                          {site.city}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LAST ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md lg:col-span-2">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-lg text-gray-800">
                    Recent Reports
                  </h3>
                  <button className="text-teal-600 text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-800">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="pb-3 text-left font-semibold">Site</th>
                        <th className="pb-3 text-left font-semibold">Operator</th>
                        <th className="pb-3 text-left font-semibold">pH</th>
                        <th className="pb-3 text-left font-semibold">Status</th>
                        <th className="pb-3 text-left font-semibold">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Jakarta Utara - Site A", "Budi Santoso", "7.2", "approved", "2h ago"],
                        ["Bandung - Site B", "Siti Nurhaliza", "6.8", "pending", "3h ago"],
                        ["Surabaya - Site C", "Ahmad Hidayat", "7.5", "approved", "5h ago"],
                        ["Medan - Site D", "Rina Wijaya", "6.9", "rejected", "6h ago"],
                        ["Bali - Site E", "Dewi Kurnia", "7.1", "approved", "7h ago"],
                      ].map((report, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 font-medium text-gray-900">{report[0]}</td>
                          <td className="py-4 text-gray-600">{report[1]}</td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              parseFloat(report[2]) >= 7.0 ? 'bg-green-100 text-green-800' : 
                              parseFloat(report[2]) >= 6.5 ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'
                            }`}>
                              pH {report[2]}
                            </span>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              report[3] === "approved" ? "bg-green-100 text-green-800" :
                              report[3] === "pending" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {report[3]}
                            </span>
                          </td>
                          <td className="py-4 text-gray-500">{report[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 shadow-md">
                <h3 className="font-semibold text-lg text-gray-800 mb-5">
                  System Alerts
                </h3>
                <div className="space-y-4 text-sm text-gray-800">
                  {[
                    ["pH level above threshold at Site Jakarta B", "1 hour ago", "warning"],
                    ["3 reports pending validation", "2 hours ago", "pending"],
                    ["All sites reported successfully today", "5 hours ago", "success"],
                  ].map(([message, time, type], i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 transition-all duration-200 hover:bg-gray-100 cursor-pointer"
                    >
                      <div
                        className={`p-2 rounded-lg border flex items-center justify-center ${
                          type === "warning" ? "bg-red-50 text-red-600 border-red-200" :
                          type === "pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" :
                          "bg-green-50 text-green-700 border-green-200"
                        }`}
                      >
                        {type === "warning" && <ExclamationTriangleIcon className="w-5 h-5" />}
                        {type === "pending" && <ClockIcon className="w-5 h-5" />}
                        {type === "success" && <CheckCircleIcon className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-medium">{message}</p>
                        <p className="text-xs text-gray-500">{time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SITES CONTENT */}
        {activeMenu === "sites" && (
          <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Site Management
                </h1>
                <p className="text-gray-600">Manage IPAL sites and locations</p>
              </div>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
                <PlusIcon className="w-5 h-5" />
                Add New Site
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Total Sites</h3>
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Active Sites</h3>
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MapPinIcon className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">4</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Total Operators</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">14</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-lg">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search sites by name or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-9 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  {["All Status", "Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                        selectedStatus === status
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-4">Site Name</div>
                <div className="col-span-3">Address</div>
                <div className="col-span-1 text-center">Operators</div>
                <div className="col-span-1 text-center">Status</div>
                <div className="col-span-2">Last Report</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredSites.map((site) => (
                  <div
                    key={site.id}
                    className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition"
                  >
                    <div className="md:hidden space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-900">
                            {site.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {site.coordinates}
                          </p>
                        </div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            site.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {site.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Address</p>
                          <p className="text-gray-900 font-medium">
                            {site.address}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Operators</p>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span className="text-sm font-medium">
                                {site.operators}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div>
                          <p className="text-gray-600 text-sm">Last Report</p>
                          <p className="text-gray-900 font-medium">
                            {site.lastReport}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>

                          <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-4">
                      <p className="font-medium text-gray-900">{site.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {site.coordinates}
                      </p>
                    </div>

                    <div className="hidden md:block col-span-3">
                      <p className="text-gray-700">{site.address}</p>
                    </div>

                    <div className="hidden md:block col-span-1 text-center">
                      <div className="flex items-center justify-center gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md mx-auto w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span className="text-sm font-medium">{site.operators}</span>
                      </div>
                    </div>

                    <div className="hidden md:block col-span-1 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          site.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {site.status}
                      </span>
                    </div>

                    <div className="hidden md:block col-span-2">
                      <p className="text-gray-700">{site.lastReport}</p>
                    </div>

                    <div className="hidden md:block col-span-1 text-center">
                      <div className="flex gap-2 justify-center">
                        <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>

                        <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* USERS CONTENT */}
        {activeMenu === "users" && (
          <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  User Management
                </h1>
                <p className="text-gray-600">
                  Manage system users and permissions
                </p>
              </div>
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
                <PlusIcon className="w-5 h-5" />
                Add New User
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Total Users</h3>
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">6</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Operators</h3>
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">4</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">HRD</h3>
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">1</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-700 font-medium">Admins</h3>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <UsersIcon className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">1</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="relative flex-1 max-w-md">
                  <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search users by name, email, or role..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 border-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
                  {["All Users", "Active", "Inactive"].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                        selectedStatus === status
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <select
                    className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
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

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                <div className="col-span-4">User</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-2">Site</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1">Last Active</div>
                <div className="col-span-1 text-center">Actions</div>
              </div>

              <div className="divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="md:grid md:grid-cols-12 md:gap-4 px-4 md:px-6 py-4 hover:bg-gray-50 transition"
                  >
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
                          <div>
                            <p className="font-medium text-gray-900">
                              {user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>
                          </div>
                        </div>
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

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Role</p>
                          <p className="text-gray-900 font-medium capitalize">
                            {user.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Site</p>
                          <p className="text-gray-900 font-medium">
                            {user.site}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div>
                          <p className="text-gray-600 text-sm">Last Active</p>
                          <p className="text-gray-900 font-medium">
                            {user.lastActive}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </button>
                          <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex col-span-4 items-center gap-3">
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
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
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
                      <p className="text-gray-700">{user.site}</p>
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
                      <p className="text-gray-700">{user.lastActive}</p>
                    </div>

                    <div className="hidden md:flex col-span-1 items-center justify-center">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 transition p-1 rounded hover:bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button className="text-red-600 hover:text-red-800 transition p-1 rounded hover:bg-red-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
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
        {/* REPORTS CONTENT */}
{activeMenu === "reports" && (
  <div className="px-4 sm:px-6 lg:px-10 xl:px-16 py-6 max-w-screen-2xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Report Monitoring
        </h1>
        <p className="text-gray-600">
          Review and validate daily IPAL reports
        </p>
      </div>
      <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
        <PlusIcon className="w-5 h-5" />
        Export Report
      </button>
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-700 text-sm font-medium">
            Total Reports
          </h3>
          <DocumentChartBarIcon className="w-5 h-5 text-teal-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {totalReports}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-700 text-sm font-medium">
            Approved
          </h3>
          <CheckCircleIcon className="w-5 h-5 text-green-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {approvedReports}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-700 text-sm font-medium">Pending</h3>
          <ClockIcon className="w-5 h-5 text-yellow-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {pendingReports}
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-700 text-sm font-medium">
            Rejected
          </h3>
          <XCircleIcon className="w-5 h-5 text-red-600" />
        </div>
        <p className="text-2xl font-bold text-gray-900">
          {rejectedReports}
        </p>
      </div>
    </div>

    {/* Search and Filter */}
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="relative flex-1 w-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All Reports", "Approved", "Pending", "Rejected"].map(
            (status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  selectedStatus === status
                    ? "bg-teal-600 text-teal-50 shadow-md"
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
          className="px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-700"
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
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Desktop Table Header */}
      <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
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
          <div className="p-8 text-center text-gray-500">
            No reports found matching your criteria.
          </div>
        ) : (
          filteredReports.map((report) => {
            const statusConfig = getStatusConfig(report.status);
            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={report.id}
                className="lg:grid lg:grid-cols-12 lg:gap-4 px-6 py-4 hover:bg-gray-50 transition items-center"
              >
                {/* Mobile View */}
                <div className="lg:hidden space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900">
                        {report.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        {report.time}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
                    >
                      <span className={statusConfig.color}>
                        {statusConfig.dot}
                      </span>
                      {statusConfig.text}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Site</p>
                      <p className="text-sm font-medium text-gray-900">
                        {report.site}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">
                        Operator
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {report.operator}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
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
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition px-3 py-2 rounded-lg hover:bg-blue-50 border border-blue-200 text-sm font-medium"
                    >
                      <EyeIcon className="w-4 h-4" />
                      Review
                    </button>
                    {report.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(report.id)}
                          className="flex items-center gap-1 text-green-600 hover:text-green-800 transition px-3 py-2 rounded-lg hover:bg-green-50 border border-green-200 text-sm font-medium"
                        >
                          <CheckIcon className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(report.id)}
                          className="flex items-center gap-1 text-red-600 hover:text-red-800 transition px-3 py-2 rounded-lg hover:bg-red-50 border border-red-200 text-sm font-medium"
                        >
                          <XCircleIcon className="w-4 h-4" />
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex col-span-2 items-center">
                  <div>
                    <p className="font-medium text-gray-900">
                      {report.date}
                    </p>
                    <p className="text-sm text-gray-500">
                      {report.time}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex col-span-2 items-center">
                  <p className="text-gray-700">{report.site}</p>
                </div>

                <div className="hidden lg:flex col-span-2 items-center">
                  <p className="text-gray-700">{report.operator}</p>
                </div>

                <div className="hidden lg:flex col-span-1 items-center justify-center">
                  <p className="text-gray-900 font-medium">
                    {report.pH}
                  </p>
                </div>

                <div className="hidden lg:flex col-span-2 items-center">
                  <p className="text-gray-700">{report.flowRate}</p>
                </div>

                <div className="hidden lg:flex col-span-2 items-center">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.borderColor} border`}
                  >
                    <StatusIcon
                      className={`w-4 h-4 ${statusConfig.color}`}
                    />
                    {statusConfig.text}
                  </span>
                </div>

                <div className="hidden lg:flex col-span-1 items-center justify-center">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleReview(report.id)}
                      className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition border border-transparent hover:border-blue-200"
                      title="Review Report"
                    >
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    {report.status === "pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(report.id)}
                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition border border-transparent hover:border-green-200"
                          title="Approve Report"
                        >
                          <CheckIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleReject(report.id)}
                          className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition border border-transparent hover:border-red-200"
                          title="Reject Report"
                        >
                          <XCircleIcon className="w-4 h-4" />
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