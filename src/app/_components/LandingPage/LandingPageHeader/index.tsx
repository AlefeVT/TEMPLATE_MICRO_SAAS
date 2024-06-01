
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/logo/logo"
import { useState } from "react"

export function LandingPageHeader() {
  
  
  return (
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <Logo />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" >
            Características
          </a>
          <a id="precos" className="text-sm font-medium hover:underline underline-offset-4" >
            Preços
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" >
            Sobre
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" >
            Contato
          </a>
        </nav>
      </header>
  )
}
