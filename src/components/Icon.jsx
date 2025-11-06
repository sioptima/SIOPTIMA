import Link from "next/link";
import { Button } from "@/src/components/ui/button"; // Pastikan jalur ini benar
import { Send } from "lucide-react";
import DevImg from "@/src/components/DevImg"; // Pastikan jalur ini benar
import Badge from "@/src/components/Badge"; // Pastikan jalur ini benar
import Socials from "@/src/components/Socials"; // Pastikan jalur ini benar
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "next/image";
import "./hero.css";
import Marquee from "react-fast-marquee";



import MyComponent from "./MyComponent";
import Marquee from "react-fast-marquee";


const App = () => (
    <Marquee>
      <MyComponent />
      <MyComponent />
      <MyComponent />
    </Marquee>
  );
  
  export default App;


