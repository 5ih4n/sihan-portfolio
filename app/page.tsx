import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";
import { LandingLines } from "./components/LandingLinesSvg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto mt-36 animate-smoothSlide relative">
      <div className="absolute w-full"><LandingLines/></div>
      <h1 className="text-center text-3xl m-2 pt-12">Jag är Sihan Li</h1>
      <div className="h-10"><Profession/></div>
      <div className="mx-auto w-fit m-3">
        <a href="/#" className="m-2 contactLink">Kontakta Mig</a>
        <a href="/#" className="m-2 contactLink">Se Mitt Arbete</a>
      </div>
    </section>
  );
}
