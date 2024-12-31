import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";
import { LandingLines2 } from "./components/LandingLinesSvg2";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Reveal } from "./components/Reveal";
import { ChevronDown, Download, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w mx-auto z-[2] bg-background relative pageShadow">
      <div className="max-w-screen-2xl noNavHeight animate-smoothSlide relative px-52 flex justify-center mx-auto">
        <div className="block w-full my-auto relative "><LandingLines2 className="z-[-2] lineColor opacity-60"/></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="text-center text-3xl m-2">Jag är Sihan Li</h1>
          <div className="h-20"><Profession/></div>
          <div className="mx-auto w-fit m-2">
            <Link href="/" className="m-2 text-center contactLink w-40">Kontakta Mig</Link>
            <Link href="projects" className="m-2 text-center contactLink w-40">Mina Arbeten</Link>
          </div>
        </div>
        <div className="animate-bounce mx-auto w-max absolute bottom-3">
          <ChevronDown size={40} />
        </div>
      </div>
      <div className="z-10">
        <Reveal><h2 className="mx-auto w-fit text-3xl my-5">Senaste Projekt</h2></Reveal>
        <Reveal>
          <Card className="max-w-screen-md mx-auto my-10 h-full">
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
                        height={310}
                        width={600}
                        priority
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/gymnasiearbeteTitel.png"
                        alt="Bild på dokumentet"
                        height={300}
                        width={560}
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem >
                      <p className="leading-7 [&:not(:first-child)]:my-6">Mitt gymnasiearbete omfattade en teknisk undersökning om evaporativ kylning
                        Syftet var att besvara följande frågor.
                      </p>
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Vilka mordena förbättringar finns för evaporativ kylning?</li>
                        <li>Vad för- och nackdelarna?</li>
                        <li>När kan man tillämpa dessa?</li>
                        <li>Hur förhåller sig effektiviteten till evaporativ kylning?</li>
                      </ul>
                      <p className="leading-7 [&:not(:first-child)]:my-6">
                        Detta ämne intresserade mig särkilt då jag planerade på att bygga en evaporativ kylare på grund av att min rum var riktigt varmt en sommar. 
                        Det färdiga arbetet är cirka 25 sidor långt och vann priset för bästa tekniska gymnasiearbete året jag tog studenten.  
                      </p>
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
                        alt="Mitt lag från Techarena"
                        height={700}
                        width={900}
                        priority
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                    <Image
                        src="/heet.png"
                        alt="Heet logga"
                        height={300}
                        width={400}
                        priority
                        className="mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <h2 className="border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" >Tema: Socialt Hållbart Borås</h2>
                      <p className="leading-7 [&:not(:first-child)]:my-6">
                        Borås Techarena var ett hackathon jag och mina klasskamrater deltog i udner vårat tredje år på gymnasiet. Vi tävlade mot olika företagslag och 
                        lag från olika högskolor samt gymnasieskolor om vem som kunde utveckla den bästa tekniska lösningen angående temat. Efter 24 timmars hårt arbete 
                        tog vårat lag, Gnomborgen, hem priset för bästa gymnasielag. 
                      </p>
                      <h3 className=" text-2xl font-semibold tracking-tight">HEET</h3>
                      <p className="mt-2 leading-7">
                        Vår lösning var en appen HEET som var en lösning för att hitta sociala evenemang i ens närhet. Namnet HEET härstammar från att
                        appen visar en karta likte en heatmap där man kan se olika händelser i ens närhet. 
                      </p>
                    </CarouselItem>
                    <CarouselItem>
                      <h2>Studenter från LBS gymnasiet i Borås</h2>
                      <blockquote className="mt-6 border-l-2 pl-6 italic">
                        &quot;För en modig elevgrupp som med en grym teamkänsla presenterade en bra teknisk
                         lösning på en hög professionell nivå&quot;
                      </blockquote>
                      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Jessie Lindberg</li>
                        <li>Joar Maltesson</li>
                        <li>Samuel Andersson</li>
                        <li>Liam Ryden</li>
                        <li>Sihan Li</li>
                      </ul>
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
