
'use client';

import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // return (
  //   <header
  //     className={`py-6 sticky top-0 z-30 transition-all ${pathname !== '' && 'bg-[#16347a]'}`}
  //   >
  //     <div className="container mx-auto">
  //       <div className="flex justify-between items-center">
  //         <Logo />
  //         <div className="font-tentang flex items-center gap-x-6">
  //           <Nav
  //             containerStyles="hidden xl:flex gap-x-8 items-center"
  //             linkStyles="relative hover:text-primary transition-all"
  //             underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
  //           />
  //           <div className="xl:hidden">
  //             <MobileNav />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </header>
  // );
};

export default Header;
