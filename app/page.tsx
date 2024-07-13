import Image from "next/image";
import { Profession } from "./components/TypeAnimation";
import "./globals.css";
import { LandingLines2 } from "./components/LandingLinesSvg2";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Fan } from "./components/FanSvg";
import { Reveal } from "./components/Reveal";

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto h-screen">
      <div className="h-max animate-smoothSlide relative px-52 my-32">
        <div className="block w-full"><LandingLines2/></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-center text-3xl m-2 pt-12">Jag är Sihan Li</h1>
          <div className="h-20"><Profession/></div>
          <div className="mx-auto w-fit m-2">
            <a href="/#" className="m-2 contactLink">Kontakta Mig</a>
            <a href="/#" className="m-2 contactLink">Se Mitt Arbete</a>
          </div>
        </div>
      </div>
      <div className="pt-64">
        <Reveal><h2 className="mx-auto w-fit text-3xl my-10">Senaste Projekt</h2></Reveal>
        <Reveal>
          <Card className="max-w-screen-md mx-auto overflow-hidden">
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
            <CardFooter>
              <a href="/#">Dokumentation</a>
            </CardFooter>
          </Card>
        </Reveal>
      </div>
      
    </section>
  );
}
