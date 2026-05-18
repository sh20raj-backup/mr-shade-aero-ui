'use client'

import { TextGif } from '@/components/ui/text-gif'
import { siteConfig } from '@/configs/site'
import { Button } from '@/components/ui/button'
import { Navbar as NavbarComponent, NavbarLeft, NavbarRight } from '@/components/ui/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import Navigation from './navigation'
import { Logo } from "@/components/common/logo/LogoImage"

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarProps {
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  className?: string;
  isAuthenticated?: boolean;
}

export default function Navbar({
  name = 'Aero',
  homeUrl = '/',
  mobileLinks = [
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#price' },
    { text: 'Contact', href: '/contact' },
  ],
  className,
}: NavbarProps) {
  return (
    <header className={cn('sticky top-0 z-50 -mb-4 px-4 pb-4', className)}>
      <div className="fade-bottom bg-[var(--background-landing)]/15 absolute left-0 h-24 w-full backdrop-blur-lg" />
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <div className="flex items-center gap-2">
              <Link href={homeUrl}>
                <div className="flex items-center gap-1 justify-center rounded-xl">
                  <Logo />
                  <TextGif text={name} weight="bold" />
                </div>
              </Link>
            </div>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <Button variant="default" asChild className="hidden sm:inline-flex">
              <Link href={siteConfig.getStartedUrl}>Purchase Template</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
                    <span>{name}</span>
                  </Link>
                  {mobileLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Button variant="default" asChild className="w-full">
                      <Link href={siteConfig.getStartedUrl}>Purchase Template</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  )
}
