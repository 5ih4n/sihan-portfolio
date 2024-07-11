import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";
import { LandingLines } from "./components/LandingLinesSvg";
import { motion } from "framer-motion";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto overflow-hidden">
      <div className="my-32 animate-smoothSlide relative">
        <div className="absolute w-full"><LandingLines/></div>
        <h1 className="text-center text-3xl m-2 pt-12">Jag är Sihan Li</h1>
        <div className="h-14"><Profession/></div>
        <div className="mx-auto w-fit m-3">
          <a href="/#" className="m-2 contactLink">Kontakta Mig</a>
          <a href="/#" className="m-2 contactLink">Se Mitt Arbete</a>
        </div>
      </div>
      <div className="my-52">
        <h2 className="mx-auto w-fit text-3xl">Senaste Projekt</h2>
        <Card>
          <CardHeader>
            <CardTitle>Gymnasiearbete</CardTitle>
            <CardDescription>Mitt gymnasiearbete</CardDescription>
          </CardHeader>
        </Card>
      </div>
      
    </section>
  );
}
