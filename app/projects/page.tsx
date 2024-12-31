import Link from "next/link"
import Image from "next/image";
import { Reveal } from "../components/Reveal";

export default function Page() {
  return (
    <section className="mx-auto z-[2] bg-background relative pageShadow h-lvh">
      <Reveal>
      <div className="grid relative z-10 col-start-1 col-end-13 md:grid-cols-3 max-w-screen-2xl mx-auto gap-3 mt-16 px-4">
        <div className="flex flex-col gap-6">
          <Link href="/" className="transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div>
              <Image
                src="/antworld.png"
                alt="Bild på dokumentet"
                height={310}
                width={600}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-3">
              <Reveal><h1>Antworld</h1></Reveal>
              <Reveal><p className="text-zinc-500">Simulering av myror i Java</p></Reveal>
            </div>
          </Link>
          <Link href="/" className="transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div>
              <Image
                src="/cityklippet.png"
                alt="Bild på dokumentet"
                height={310}
                width={600}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-3">
              <Reveal><h1>cityklippetvandao.com</h1></Reveal>
              <Reveal><p className="text-zinc-500">En hemisda för en lokal frisörsalong</p></Reveal>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Link href="/" className="transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div>
              <Image
                src="/evaporative2.jpg"
                alt="Bild på dokumentet"
                height={310}
                width={600}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-3">
              <Reveal><h1>Årets tekniska gymnasiearbete</h1></Reveal>
              <Reveal><p className="text-zinc-500">LBS Borås 2024, Evaporativ kylning i jämförelse med konventionell luftkonditionering</p></Reveal>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Link href="/" className="transition ease-in-out delay-100 hover:-translate-y-2 duration-300">
            <div>
              <Image
                src="/techarena.jpg"
                alt="Mitt lag från Techarena"
                height={700}
                width={900}
                priority
                className="mx-auto"
              />
            </div>
            <div className="mt-3">
              <Reveal><h1>Techarena 2024</h1></Reveal>
              <Reveal><p className="text-zinc-500">Bästa Gymnasielag</p></Reveal>
            </div>
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  )
}