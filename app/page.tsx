import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";
import { LandingLines2 } from "./components/LandingLinesSvg2";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Fan } from "./components/FanSvg";
import { Reveal } from "./components/Reveal";
import { ChevronDown, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w mx-auto z-[2] bg-background relative pageShadow">
      <div className=" max-w-screen-2xl noNavHeight animate-smoothSlide relative px-52 flex justify-center mx-auto">
        <div className="block w-full my-auto relative "><LandingLines2 className="z-[-2] lineColor opacity-60"/></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-center text-3xl m-2">Jag är Sihan Li</h1>
          <div className="h-20"><Profession/></div>
          <div className="mx-auto w-fit m-2">
            <a href="/#" className="m-2 contactLink w-40">Kontakta Mig</a>
            <a href="/#" className="m-2 contactLink w-40">Se Mitt Arbete</a>
          </div>
        </div>
        <div className="animate-bounce mx-auto w-max absolute bottom-3">
          <ChevronDown size={40} />
        </div>
      </div>
      <div className="z-10">
        <Reveal><h2 className="mx-auto w-fit text-3xl my-5">Senaste Projekt</h2></Reveal>
        <Reveal>
          <Card className="max-w-screen-md mx-auto overflow-hidden my-10">
            <CardHeader>
              <Reveal><CardTitle className="text-2xl">Evaporativ Kylning</CardTitle></Reveal>
              <Reveal><CardDescription>En jämförelse med konventionell luftkonditionering</CardDescription></Reveal>
            </CardHeader>
            <CardContent>
              <Carousel className="mx-10">
                <CarouselContent>
                    <CarouselItem>
                    <Image
                        src="/evaporative2.jpg"
                        alt="Bild på dokumentet"
                        fill={true}
                        priority
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/gymnasiearbeteTitel.png"
                        alt="Bild på dokumentet"
                        height={300}
                        width={300}
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem >
                      <p className="p-2">Mitt gymnasiearbete omfattade en teknisk undersökning om Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe fugiat quas quam aspernatur voluptate veniam culpa, quis
                        tempora quisquam iusto quaerat molestiae nesciunt est rerum commodi nemo deserunt facere maxime!</p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
            <CardFooter className="flex justify-items-center flex-row">
              <a href="/#">Ladda Ner arbetet</a>
              <Download/>
            </CardFooter>
          </Card>
        </Reveal>

        <Reveal>
          <Card className="max-w-screen-md mx-auto overflow-hidden my-10">
            <CardHeader>
              <Reveal><CardTitle className="text-2xl">Techarena</CardTitle></Reveal>
              <Reveal><CardDescription>Bästa Gymnasielag: Team Gnomborgen</CardDescription></Reveal>
            </CardHeader>
            <CardContent>
              <Carousel className="mx-10">
                <CarouselContent>
                    <CarouselItem>
                    <Image
                        src="/techarena.jpg"
                        alt="Bild på dokumentet"
                        fill={true}
                        priority
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <h2>Studenter från LBS gymnasiet i Borås</h2>
                      <blockquote className="mt-6 border-l-2 pl-6 italic">
                        "För en modig elevgrupp som med en grym teamkänsla presenterade en bra teknisk
                         lösning på en hög professionell nivå"
                      </blockquote>
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Jessie Lindberg</li>
                        <li>Joar Maltesson</li>
                        <li>Samuel Andersson</li>
                        <li>Liam Ryden</li>
                        <li>Sihan Li</li>
                      </ul>
                      
                    </CarouselItem>
                    <CarouselItem >
                      <p className="p-2">Mitt gymnasiearbete omfattade en teknisk undersökning om Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe fugiat quas quam aspernatur voluptate veniam culpa, quis
                        tempora quisquam iusto quaerat molestiae nesciunt est rerum commodi nemo deserunt facere maxime!</p>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
            <CardFooter>
              <Link href="#">Heet Gihtub</Link>
              <SquareArrowOutUpRight />
            </CardFooter>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
