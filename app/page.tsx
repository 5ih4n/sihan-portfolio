import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto mt-40">
      <h1 className="text-center text-3xl">Jag är Sihan Li</h1>
      <Profession/>
      <div className="mx-auto">
        <a href="/#" className="m-2">Kontakta Mig</a>
      </div>
    </section>
  );
}
