// "use client";
// import Image from "next/image";
// import { useState } from "react";

// export default function Hero() {
//   return (
//     <section
//       className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-white"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* Bagian Kiri - Info SIOPTIMA */}
//       <div className="flex-1 flex flex-col justify-center bg-[#007f87] text-white px-10 py-12">
//         <div className="max-w-lg mx-auto text-center md:text-left">
//           {/* Logo */}
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
//             <Image
//               src="/hero/logosioptima.png"
//               alt="Logo IPAL"
//               width={60}
//               height={60}
//             />
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight font-tentang">
//                 SIOPTIMA
//               </h1>
//               <p className="text-sm font-light">PT. Procon Djaya Agung</p>
//             </div>
//           </div>

//           {/* Deskripsi */}
//           <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
//             Sistem Informasi Operasional Terintegrasi dan Monitoring IPAL
//           </h2>
//           <p className="text-white/95 text-xl mb-8 leading-relaxed">
//             Centralized real-time monitoring system for Industrial Wastewater
//             Treatment Plants across all branches in Indonesia.
//           </p>

//           {/* Info Box */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">24/7</p>
//               <p className="text-sm">Real-time</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">20+</p>
//               <p className="text-sm">IPAL Sites</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">100%</p>
//               <p className="text-sm">Data Accuracy</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bagian Kanan - Login Form */}
//       <div className="flex-1 flex items-center justify-center bg-white text-gray-800 px-8 py-5">
//         <div className="w-full max-w-sm mb-7">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
//             Welcome Back
//           </h2>
//           <p className="text-gray-500 text-sm mb-7 text-center md:text-left">
//             Sign in to access your IPAL monitoring dashboard
//           </p>

//           <form className="space-y-7 rounded">
//             {/* Username */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="w-full border border-gray-300 rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full border border-gray-300 rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
//               />
//             </div>

//             {/* Tombol Login */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Demo Info */}
//           {/* Demo Info */}
//           <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
//             <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 shadow-sm">
//               <p className="font-semibold text-gray-800 mb-2">
//                 Demo Credentials:
//               </p>
//               <div className="space-y-1 text-gray-600">
//                 <p>
//                   <span className="font-semibold text-teal-700">Admin:</span>{" "}
//                   admin / admin123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">Operator:</span>{" "}
//                   operator / operator123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">HRD:</span> hrd
//                   / hrd123
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS

















// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [touched, setTouched] = useState({ username: false, password: false });
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setError("");

//     if (!username || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username.trim(),
//           password: password.trim(),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       // Ini harus dijalankan supaya browser pindah halaman
//       router.push(data.redirectTo);
//     } catch (err) {
//       console.error(err);
//       setError("Network error");
//     }
//   };

//   const usernameError = !username && (touched.username || submitted);
//   const passwordError = !password && (touched.password || submitted);

//   return (
//     <section
//       className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-white"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* Bagian Kiri - Info SIOPTIMA */}
//       <div className="flex-1 flex flex-col justify-center bg-[#007f87] text-white px-10 py-12">
//         <div className="max-w-lg mx-auto text-center md:text-left">
//           {/* Logo */}
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
//             <Image
//               src="/hero/logosioptima.png"
//               alt="Logo IPAL"
//               width={60}
//               height={60}
//             />
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight font-tentang">
//                 SIOPTIMA
//               </h1>
//               <p className="text-sm font-light">PT. Procon Djaya Agung</p>
//             </div>
//           </div>

//           {/* Deskripsi */}
//           <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
//             Sistem Informasi Operasional Terintegrasi dan Monitoring IPAL
//           </h2>
//           <p className="text-white/95 text-xl mb-8 leading-relaxed">
//             Centralized real-time monitoring system for Industrial Wastewater
//             Treatment Plants across all branches in Indonesia.
//           </p>

//           {/* Info Box */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">24/7</p>
//               <p className="text-sm">Real-time</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">20+</p>
//               <p className="text-sm">IPAL Sites</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">100%</p>
//               <p className="text-sm">Data Accuracy</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bagian Kanan - Login Form */}
//       <div className="flex-1 flex items-center justify-center bg-white text-gray-800 px-8 py-5">
//         <div className="w-full max-w-sm mb-4">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
//             Welcome Back
//           </h2>
//           <p className="text-gray-500 text-sm mb-7 text-center md:text-left">
//             Sign in to access your IPAL monitoring dashboard
//           </p>

//           <form className="space-y-7 rounded" onSubmit={handleSubmit}>
//             {/* Username */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, username: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                   usernameError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {usernameError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Username is required
//                 </p>
//               )}
//             </div>

//             {/* Password dengan hidden eye */}
//             <div className="relative">
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, password: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10 ${
//                   passwordError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <span
//                 className="absolute top-9 right-5 flex items-center cursor-pointer text-gray-500"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeSlashIcon className="h-5 w-5" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5" />
//                 )}
//               </span>
//               {passwordError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Password is required
//                 </p>
//               )}
//             </div>

//             {/* Tombol Login */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Demo Info */}
//           <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
//             <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 shadow-sm">
//               <p className="font-semibold text-gray-800 mb-2">
//                 Demo Credentials:
//               </p>
//               <div className="space-y-1 text-gray-600">
//                 <p>
//                   <span className="font-semibold text-teal-700">Admin:</span>{" "}
//                   admin / admin123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">Operator:</span>{" "}
//                   operator / operator123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">HRD:</span> hrd
//                   / hrd123
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS
// JANGAN DIHAPUS

















// JANGAN DIHAPUSSS YAAAAAAAAAAAAAAAAAAAAAAA
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Tambahkan ini
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [touched, setTouched] = useState({ username: false, password: false });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(""); // Tambahkan state error
//   const router = useRouter(); // Inisialisasi router

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setError("");

//     // Validasi form
//     if (!username || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: username.trim(),
//           password: password.trim(),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       // Redirect ke halaman yang ditentukan
//       console.log("Redirecting to:", data.redirectTo);
//       router.push(data.redirectTo);
      
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Network error - please try again");
//     }
//   };

//   const usernameError = !username && (touched.username || submitted);
//   const passwordError = !password && (touched.password || submitted);

//   return (
//     <section
//       className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-white"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* Bagian Kiri - Info SIOPTIMA */}
//       <div className="flex-1 flex flex-col justify-center bg-[#007f87] text-white px-10 py-12">
//         <div className="max-w-lg mx-auto text-center md:text-left">
//           {/* Logo */}
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
//             <Image
//               src="/hero/logosioptima.png"
//               alt="Logo IPAL"
//               width={60}
//               height={60}
//             />
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight font-tentang">
//                 SIOPTIMA
//               </h1>
//               <p className="text-sm font-light">PT. Procon Djaya Agung</p>
//             </div>
//           </div>

//           {/* Deskripsi */}
//           <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
//             Sistem Informasi Operasional Terintegrasi dan Monitoring IPAL
//           </h2>
//           <p className="text-white/95 text-xl mb-8 leading-relaxed">
//             Centralized real-time monitoring system for Industrial Wastewater
//             Treatment Plants across all branches in Indonesia.
//           </p>

//           {/* Info Box */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">24/7</p>
//               <p className="text-sm">Real-time</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">20+</p>
//               <p className="text-sm">IPAL Sites</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">100%</p>
//               <p className="text-sm">Data Accuracy</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bagian Kanan - Login Form */}
//       <div className="flex-1 flex items-center justify-center bg-white text-gray-800 px-8 py-5">
//         <div className="w-full max-w-sm mb-4">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
//             Welcome Back
//           </h2>
//           <p className="text-gray-500 text-sm mb-7 text-center md:text-left">
//             Sign in to access your IPAL monitoring dashboard
//           </p>

//           {/* Tampilkan error message */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-sm text-sm">
//               {error}
//             </div>
//           )}

//           <form className="space-y-7 rounded" onSubmit={handleSubmit}>
//             {/* Username */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, username: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                   usernameError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {usernameError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Username is required
//                 </p>
//               )}
//             </div>

//             {/* Password dengan hidden eye */}
//             <div className="relative">
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, password: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10 ${
//                   passwordError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <button
//                 type="button"
//                 className="absolute top-9 right-3 flex items-center text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeSlashIcon className="h-5 w-5" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5" />
//                 )}
//               </button>
//               {passwordError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Password is required
//                 </p>
//               )}
//             </div>

//             {/* Tombol Login */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-2 rounded-sm font-medium hover:opacity-90 transition disabled:opacity-50"
//               disabled={!username || !password} // Optional: disable button jika form kosong
//             >
//               Sign In
//             </button>
//           </form>

//           {/* Demo Info */}
//           <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
//             <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 shadow-sm">
//               <p className="font-semibold text-gray-800 mb-2">
//                 Demo Credentials:
//               </p>
//               <div className="space-y-1 text-gray-600">
//                 <p>
//                   <span className="font-semibold text-teal-700">Admin:</span>{" "}
//                   admin / admin123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">Operator:</span>{" "}
//                   operator / operator123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">HRD:</span> hrd
//                   / hrd123
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// JANGAN DIHAPUSSSS YAAAAAAAAAAAAAAAAAAAA





















































// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

// export default function Hero() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [touched, setTouched] = useState({ username: false, password: false });
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setError("");

//     if (!username || !password) {
//       setError("Please fill in all fields");
//       return;
//     }

//     await loginUser(username, password);
//   };

//   const loginUser = async (user, pass) => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           username: user.trim(),
//           password: pass.trim(),
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed");
//         return;
//       }

//       console.log("Redirecting to:", data.redirectTo);
//       router.push(data.redirectTo);
      
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("Network error - please try again");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Fungsi shortcut untuk demo
//   const handleQuickLogin = (role) => {
//     let user = "";
//     let pass = "";

//     switch (role) {
//       case "admin":
//         user = "admin";
//         pass = "admin123";
//         break;
//       case "operator":
//         user = "operator";
//         pass = "operator123";
//         break;
//       case "hrd":
//         user = "hrd";
//         pass = "hrd123";
//         break;
//       default:
//         return;
//     }

//     // Auto-isi form
//     setUsername(user);
//     setPassword(pass);
    
//     // Submit otomatis setelah 300ms (biar user liat form terisi dulu)
//     setTimeout(() => {
//       loginUser(user, pass);
//     }, 300);
//   };

//   const usernameError = !username && (touched.username || submitted);
//   const passwordError = !password && (touched.password || submitted);

//   return (
//     <section
//       className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-white"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {/* Bagian Kiri - Info SIOPTIMA */}
//       <div className="flex-1 flex flex-col justify-center bg-[#007f87] text-white px-10 py-12">
//         <div className="max-w-lg mx-auto text-center md:text-left">
//           {/* Logo */}
//           <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
//             <Image
//               src="/hero/logosioptima.png"
//               alt="Logo IPAL"
//               width={60}
//               height={60}
//             />
//             <div>
//               <h1 className="text-3xl font-bold tracking-tight font-tentang">
//                 SIOPTIMA
//               </h1>
//               <p className="text-sm font-light">PT. Procon Djaya Agung</p>
//             </div>
//           </div>

//           {/* Deskripsi */}
//           <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
//             Sistem Informasi Operasional Terintegrasi dan Monitoring IPAL
//           </h2>
//           <p className="text-white/95 text-xl mb-8 leading-relaxed">
//             Centralized real-time monitoring system for Industrial Wastewater
//             Treatment Plants across all branches in Indonesia.
//           </p>

//           {/* Info Box */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">24/7</p>
//               <p className="text-sm">Real-time</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">20+</p>
//               <p className="text-sm">IPAL Sites</p>
//             </div>
//             <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
//               <p className="text-2xl font-bold">100%</p>
//               <p className="text-sm">Data Accuracy</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bagian Kanan - Login Form */}
//       <div className="flex-1 flex items-center justify-center bg-white text-gray-800 px-8 py-5">
//         <div className="w-full max-w-sm mb-4">
//           <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
//             Welcome Back
//           </h2>
//           <p className="text-gray-500 text-sm mb-7 text-center md:text-left">
//             Sign in to access your IPAL monitoring dashboard
//           </p>

//           {/* Quick Login Buttons */}
//           <div className="mb-6">
//             <p className="text-sm font-medium text-gray-700 mb-3 text-center">
//               🚀 Quick Demo Access:
//             </p>
//             <div className="grid grid-cols-3 gap-2">
//               <button
//                 onClick={() => handleQuickLogin("admin")}
//                 disabled={isLoading}
//                 className="bg-teal-600 text-white py-2 px-3 rounded-sm text-sm font-medium hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Admin
//               </button>
//               <button
//                 onClick={() => handleQuickLogin("operator")}
//                 disabled={isLoading}
//                 className="bg-cyan-600 text-white py-2 px-3 rounded-sm text-sm font-medium hover:bg-cyan-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Operator
//               </button>
//               <button
//                 onClick={() => handleQuickLogin("hrd")}
//                 disabled={isLoading}
//                 className="bg-emerald-600 text-white py-2 px-3 rounded-sm text-sm font-medium hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 HRD
//               </button>
//             </div>
//           </div>

//           <div className="relative mb-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or sign in manually</span>
//             </div>
//           </div>

//           {/* Tampilkan error message */}
//           {error && (
//             <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-sm text-sm">
//               {error}
//             </div>
//           )}

//           <form className="space-y-7 rounded" onSubmit={handleSubmit}>
//             {/* Username */}
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, username: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
//                   usernameError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {usernameError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Username is required
//                 </p>
//               )}
//             </div>

//             {/* Password dengan hidden eye */}
//             <div className="relative">
//               <label className="block text-sm font-medium mb-1 text-gray-700">
//                 Password
//               </label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onBlur={() =>
//                   setTouched((prev) => ({ ...prev, password: true }))
//                 }
//                 className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10 ${
//                   passwordError ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               <button
//                 type="button"
//                 className="absolute top-9 right-3 flex items-center text-gray-500 hover:text-gray-700"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeSlashIcon className="h-5 w-5" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5" />
//                 )}
//               </button>
//               {passwordError && (
//                 <p className="text-red-500 text-sm mt-1">
//                   Password is required
//                 </p>
//               )}
//             </div>

//             {/* Tombol Login */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-2 rounded-sm font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing In...
//                 </>
//               ) : (
//                 "Sign In"
//               )}
//             </button>
//           </form>

//           {/* Demo Info */}
//           <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
//             <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 shadow-sm">
//               <p className="font-semibold text-gray-800 mb-2">
//                 Manual Login Credentials:
//               </p>
//               <div className="space-y-1 text-gray-600">
//                 <p>
//                   <span className="font-semibold text-teal-700">Admin:</span>{" "}
//                   admin / admin123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">Operator:</span>{" "}
//                   operator / operator123
//                 </p>
//                 <p>
//                   <span className="font-semibold text-teal-700">HRD:</span> hrd
//                   / hrd123
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS
// INI ADA FITUR TAMBAHAN TOMBOL JANGAN DIHAPUSSS













"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export default function Hero() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ username: false, password: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setError("");

    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    await loginUser(username, password);
  };

  const loginUser = async (user, pass) => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.trim(),
          password: pass.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      console.log("Redirecting to:", data.redirectTo);
      router.push(data.result.role);
      
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error - please try again");
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi shortcut langsung redirect tanpa validasi
  const handleQuickLogin = (role) => {
    let redirectPath = "";
    
    switch (role) {
      case "admin":
        redirectPath = "/admin/";
        break;
      case "operator":
        redirectPath = "/operator/";
        break;
      case "hrd":
        redirectPath = "/hrd/";
        break;
      default:
        return;
    }

    console.log(`Quick login as ${role}, redirecting to: ${redirectPath}`);
    router.push(redirectPath);
  };

  const usernameError = !username && (touched.username || submitted);
  const passwordError = !password && (touched.password || submitted);

  return (
    <section
      className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Bagian Kiri - Info SIOPTIMA */}
      <div className="flex-1 flex flex-col justify-center bg-[#007f87] text-white px-10 py-12">
        <div className="max-w-lg mx-auto text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-10">
            <Image
              src="/hero/logosioptima.png"
              alt="Logo IPAL"
              width={60}
              height={60}
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-tentang">
                SIOPTIMA
              </h1>
              <p className="text-sm font-light">PT. Procon Djaya Agung</p>
            </div>
          </div>

          {/* Deskripsi */}
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
            Sistem Informasi Operasional Terintegrasi dan Monitoring IPAL
          </h2>
          <p className="text-white/95 text-xl mb-8 leading-relaxed">
            Centralized real-time monitoring system for Industrial Wastewater
            Treatment Plants across all branches in Indonesia.
          </p>

          {/* Info Box */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm">Real-time</p>
            </div>
            <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">20+</p>
              <p className="text-sm">IPAL Sites</p>
            </div>
            <div className="bg-white/10 rounded-sm py-4 backdrop-blur-sm">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm">Data Accuracy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Kanan - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white text-gray-800 px-8 py-5">
        <div className="w-full max-w-sm mb-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center md:text-left">
            Welcome Back
          </h2>
          <p className="text-gray-500 text-sm mb-7 text-center md:text-left">
            Sign in to access your IPAL monitoring dashboard
          </p>

          {/* Quick Login Buttons - LANGSUNG REDIRECT */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 mb-3 text-center">
              Quick Demo Access (No Login Required):
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleQuickLogin("admin")}
                className="bg-teal-600 text-white py-3 px-3 rounded-sm text-sm font-medium hover:bg-teal-700 transition shadow-md"
              >
                Admin
              </button>
              <button
                onClick={() => handleQuickLogin("operator")}
                className="bg-cyan-600 text-white py-3 px-3 rounded-sm text-sm font-medium hover:bg-cyan-700 transition shadow-md"
              >
                Operator
              </button>
              <button
                onClick={() => handleQuickLogin("hrd")}
                className="bg-emerald-600 text-white py-3 px-3 rounded-sm text-sm font-medium hover:bg-emerald-700 transition shadow-md"
              >
                HRD
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Click any role to enter directly
            </p>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign in manually</span>
            </div>
          </div>

          {/* Tampilkan error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-sm text-sm">
              {error}
            </div>
          )}

          <form className="space-y-7 rounded" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, username: true }))
                }
                className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                  usernameError ? "border-red-500" : "border-gray-300"
                }`}
              />
              {usernameError && (
                <p className="text-red-500 text-sm mt-1">
                  Username is required
                </p>
              )}
            </div>

            {/* Password dengan hidden eye */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                className={`w-full border rounded-sm px-3 py-2 text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 pr-10 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                className="absolute top-9 right-3 flex items-center text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  Password is required
                </p>
              )}
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-2 rounded-sm font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 text-sm text-gray-700 text-center md:text-left">
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-4 shadow-sm">
              <p className="font-semibold text-gray-800 mb-2">
                Manual Login Credentials:
              </p>
              <div className="space-y-1 text-gray-600">
                <p>
                  <span className="font-semibold text-teal-700">Admin:</span>{" "}
                  admin / admin123
                </p>
                <p>
                  <span className="font-semibold text-teal-700">Operator:</span>{" "}
                  operator / operator123
                </p>
                <p>
                  <span className="font-semibold text-teal-700">HRD:</span> hrd
                  / hrd123
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



