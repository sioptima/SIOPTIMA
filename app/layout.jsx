// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Form Log In SIOPTIMA | KELOMPOK 4",
//   description: "PROYEK MANPRO-ADPL",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThemeProvider attribute='class' defaultTheme='Light'>
//           <Header />
//           {children}
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }













// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SIOPTIMA - IPAL Monitoring",
  description: "Sistem Monitoring IPAL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}






