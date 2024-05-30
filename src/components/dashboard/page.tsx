"use client"

import { useSidebar } from '@/app/app/_components/ClientSideProvider'
import { UserDropDown } from '@/app/app/_components/user-dropdown'
import { cn } from '@/lib/utils'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Session } from 'next-auth'

export type DashboardPageGenericProps<T = unknown> = {
  children: React.ReactNode
  className?: string
} & T

export function DashboardPage({
  className,
  children,
}: DashboardPageGenericProps) {
  return <section className={cn(['h-screen', className])}>{children}</section>
}

export function DashboardPageHeader({
  className,
  children,
}: DashboardPageGenericProps) {
  const { toggleSidebar } = useSidebar();
  
  return (
    <header
      className={cn([
        'px-6 border-b border-border flex items-center justify-between',
        className,
      ])}
    >
      {children}

      <button onClick={toggleSidebar} className="md:hidden "><HamburgerMenuIcon className=' w-8 h-8'/></button>
    </header>
  )
}

export function DashboardPageHeaderTitle({
  className,
  children,
}: DashboardPageGenericProps) {
  return (
    <span
      className={cn(['text-xs py-6 text-muted-foreground uppercase', className])}
    >
      {children}
    </span>
  )
}

export function DashboardPageHeaderNav({
  className,
  children,
}: DashboardPageGenericProps) {
  return <nav className={cn(['', className])}>{children}</nav>
}

export function DashboardPageMain({
  className,
  children,
}: DashboardPageGenericProps) {
  return <main className={cn(['p-6', className])}>{children}</main>
}
