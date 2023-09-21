'use client'

import Link from "next/link"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Nav = () => {

  // Todo lo que aparecerá en breakpoints mayores al de un celular, debe ir con sm:block
  
  return (
    <nav className="flex justify-between px-5 h-16 fixed-navbar">
      <Sheet className="z-50">
        <SheetTrigger>
          <Image 
            src="/icons/menuIcon.svg"
            width={20}
            height={20}
          />
        </SheetTrigger>
        <SheetContent className="w-[250px]" side="left">
          <SheetHeader>
            <SheetTitle className="primary-color">Roommer</SheetTitle>
            <SheetDescription>Lo que buscas, encuentras.</SheetDescription>
          </SheetHeader>
          <div className="mt-10 flex flex-col space-y-2 text-center sm:text-left">
            <Link href="/rooms">
              <p className="hover:text-[#9327F0] transition-colors duration-300 ease-in-out">Encuentra Habitaciones</p>
            </Link>
            <Link href="/roommates">
              <p className="hover:text-[#9327F0] transition-colors duration-300 ease-in-out">Encuentra Roommates</p>
            </Link>
            <Link href="/alquiler">
              <p className="hover:text-[#9327F0] transition-colors duration-300 ease-in-out">Alquila Habitaciones</p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex gap-3 items-center">
        <Image 
          src="/icons/roommerLogo.svg"
          width={20}
          height={20}
        />
        <p className="primary-color">Roommer</p>
      </Link>

      <Sheet className="z-50">
        <SheetTrigger>
          <Image 
            src="/icons/profileIcon.svg"
            width={20}
            height={20}
          />
        </SheetTrigger>
        <SheetContent className="w-[250px]" side="right">
          <SheetHeader>
            <SheetTitle className="primary-color">Perfil</SheetTitle>
            <SheetDescription>Inicia Sesión o Regístrate</SheetDescription>
          </SheetHeader>
          <div className="mt-10 flex flex-col space-y-2 text-center sm:text-left">
            <Link href="/ingreso">
              <p className="hover:text-[#9327F0] transition-colors duration-300 ease-in-out">Inicia Sesión</p>
            </Link>
            <Link href="/registro">
              <p className="hover:text-[#9327F0] transition-colors duration-300 ease-in-out">Regístrate</p>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default Nav