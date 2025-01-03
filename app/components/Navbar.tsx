import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { Oswald} from 'next/font/google'

const oswald = Oswald({ subsets: ["latin"], variable: '--font-oswald' });

export const Navbar = () => {
  return (
    <header className="flex h-16 shrink-0 items-end px-4 md:px-6 max-w-screen-2xl mx-auto mb-2">
        <Link href="/" className="text-4xl oswald">
            Sihan Li
        </Link>
        <nav className="hidden lg:flex space-x-6 ml-6">
          <Link href="projects" className="text-base font-medium transition group duration-300" prefetch={false}>
            Projekt 
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span>
          </Link>
          <Link href="about" className="text-base font-medium transition group duration-300" prefetch={false}>
            Om 
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span>
          </Link>
          <Link href="resumes/sihancv.pdf" target="_blank" className="text-base font-medium transition group duration-300" prefetch={false}>
            CV
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-current"></span>
          </Link>
        </nav>
        <div className="ml-auto ">
          <Link href="#" className="font-medium underline-offset-4 navContact text-2xl mx-4 oswald" prefetch={false}>
            Kontakt
          </Link>
          <ModeToggle/>
        </div>
    </header>
  )
}

