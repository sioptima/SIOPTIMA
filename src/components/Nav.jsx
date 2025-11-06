// import Link from "next/link";

// // next hooks
// import { usePathname } from "next/navigation";

// // framer motion
// import { color, motion } from "framer-motion";

// // links data
// const links = [

//   { path: "/", name: "Home" },
//   { path: "/tentang", name: "About", color:"#1E3A8A" },
//   { path: "/login", name: "LOG IN" },
//   // { path: "/blog", name: "Blog" },
//   // { path: "/contact", name: "Contact" },

// ];

// const Nav = ({ containerStyles, linkStyles, underlineStyles, onNavClick }) => {
//   const path = usePathname();

//   return (
//     <nav className={`${containerStyles}`}>
//       {links.map((link, index) => {
//         return (
//           <Link
//             href={link.path}
//             key={index}
//             className={`capitalize ${linkStyles}`}
//             onClick={onNavClick} // Menambahkan event handler untuk menutup sidebar
//           >
//             {link.path === path && (
//               <motion.span
//                 initial={{ y: "-100%" }}
//                 animate={{ y: 0 }}
//                 transition={{ type: "tween" }}
//                 layoutId="underline"
//                 className={`${underlineStyles}`}
//               />
//             )}
//             {link.name}
//           </Link>
//         );
//       })}
//     </nav>
//   );
// };

// export default Nav;





















import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "Home" },
  { path: "/tentang", name: "About" },
  { path: "/loginPage", name: "LOG IN" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onNavClick }) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        // Kalau link adalah /login, kasih style khusus
        const isLogin = link.path === "/loginPage";

        return (
          <Link
            href={link.path}
            key={index}
            onClick={onNavClick}
            className={`capitalize ${linkStyles} ${
              isLogin
                ? "bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
                : ""
            }`}
          >
            {link.path === path && !isLogin && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
