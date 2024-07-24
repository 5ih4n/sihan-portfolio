import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Oswald} from 'next/font/google'
import { Separator } from "@/components/ui/separator"

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const Footer = () => {
  return (
    <footer className="flex flex-wrap flex-row max-w-screen-2xl mx-auto p-10 justify-around h-4/5">
        <div className="">
            <h3 className="text-xl">Kontakta Mig</h3>
            <Separator />
            <ul className="mt-3">
                <li className="my-2"><a href="/#">0765570442</a></li>
                <li className="my-2"><a href="/#">sihanli2005@gmail.com</a></li>
                <li className="my-2"><a href="/#">0765570442</a></li>
            </ul>
        </div>

        <div className="">
            <h3 className="text-xl">Kontakta Mig</h3>
            <Separator />
            <ul className="mt-3">
                <li className="my-2"><a href="/#">0765570442</a></li>
                <li className="my-2"><a href="/#">sihanli2005@gmail.com</a></li>
                <li className="my-2"><a href="/#">0765570442</a></li>
            </ul>
        </div>

        <div className="">
            <h3 className="text-xl">Kontakta Mig</h3>
            <Separator />
            <ul className="mt-3">
                <li className="my-2"><a href="/#">0765570442</a></li>
                <li className="my-2"><a href="/#">sihanli2005@gmail.com</a></li>
                <li className="my-2"><a href="/#">0765570442</a></li>
            </ul>
        </div>
    </footer>
  )
}

