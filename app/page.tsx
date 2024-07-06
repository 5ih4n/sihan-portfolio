import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto mt-56">
      <h1 className="text-center text-3xl m-2">Jag är Sihan Li</h1>
      <Profession/>
      <div className="mx-auto w-fit m-3">
        <a href="/#" className="m-2 contactLink">Kontakta Mig</a>
        <a href="/#" className="m-2 contactLink">Se Mitt Arbete</a>
      </div>
    </section>
  );
}
