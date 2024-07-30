import Link from "next/link"
import Image from "next/image"
import { Oswald} from 'next/font/google'
import { Separator } from "@/components/ui/separator"

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const Footer = () => {
  return (
    <footer className="w-full p-10 h-4/5 sticky bottom-0 z-[1] bg-secondary dot-grid">
        <div className="flex flex-wrap flex-row justify-around mx-auto max-w-screen-2xl">      
            <div>
                <h3>Version 1.0</h3>
            </div>
            <div className="">
                <h3 className="text-xl ">Kontakta Mig</h3>
                <Separator />
                <ul className="">
                    <li className="my-2"><Link href="#" className="text-base font-medium transition group duration-300 light:text-white" prefetch={false}>
                    sihanli2005@gmail.com 
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span></Link>
                    </li>
                    <div className="flex flex-row">
                        <Link href="#" className="text-base font-medium transition group duration-300" prefetch={false}>
                            <Image
                                src="/discord.webp"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>
                        <Link href="#" className="text-base font-medium transition group duration-300" prefetch={false}>
                            <Image
                                src="/github.png"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>
                        <Link href="#" className="text-base font-medium transition group duration-300" prefetch={false}>
                            <Image
                                src="/linkedin.png"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>
                </ul>
            </div>
        </div> 
    </footer>
  )
}

