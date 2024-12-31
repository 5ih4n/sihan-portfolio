import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

export default function About() {
  return (
    <section className="mx-auto z-[2] bg-background relative pageShadow">
      <div className="max-w-screen-2xl mx-auto px-6 grid sm:grid-cols-2 h-[94vh]">
        <div className="max-w-[80ch] h-min mt-40">
          <Reveal><h2 className="text-2xl my-2 text-zinc-400">Om Mig</h2></Reveal>
          <Reveal>
            <p>
              Hej! Mitt namn är Sihan och just nu studerar jag till att bli civilingenjör inom datateknik på Chalmers.
              Jag hade väldigt många intressen som astronomi och historia men när jag blev äldre fastnade jag för
              data och informationsteknik.
            </p>
          </Reveal>
          
          <br/>
          <Reveal><h2 className="text-2xl my-2 text-zinc-400">Fritid</h2></Reveal>
          <Reveal>
            <p>
            När jag inte studerar så brukar jag umgås med vänner och spela spel. Har även ett intresse inom robotik och ibland bygger jag enkla saker med 
            arduino kort och servomotorer, något jag nu på senare tid fått tillgång till genom CASE-labbet på Chalmers. 
            </p>
          </Reveal>

          <br />
          <Reveal>
            <p>
            Även ifall jag studerar så är jag öppen till arbetsmöjligheter. Hör gärna av er till mig på sihanli2005@gmail.com eller några av  
            <Link href="#" className=" underline-offset-4 navContact oswald animate-none" prefetch={false}> dessa</Link> andra alternativ. 
            </p>
          </Reveal>
          
        </div>
        <Reveal>
          <Image
          src="/soviet.jpg"
          alt="Bild på dokumentet"
          height={310}
          width={400}
          priority
          className="sm:sticky sm:ml-auto rounded-md mt-32"
          />
        </Reveal>
        
      </div>
        
    </section>
  )
}