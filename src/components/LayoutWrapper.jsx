"use client";

import { usePathname } from "next/navigation";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/loginPage"; // path login

  return (
    <>
      {!isLoginPage && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isLoginPage && <Footer />}
    </>
  );
}
