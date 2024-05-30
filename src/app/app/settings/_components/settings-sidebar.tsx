'use client'

import {
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from '@/components/dashboard/sidebar'
import { usePathname } from 'next/navigation'

export function SettingsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside>
      <DashboardSidebarNav>

        <main className='flex mb-10'>
          <DashboardSidebarNavLink
            href="/app/settings"
            active={isActive('/app/settings')}
            className='px-4'
          >
            Meu Perfil
          </DashboardSidebarNavLink>

          <DashboardSidebarNavLink
            href="/app/settings/theme"
            active={isActive('/app/settings/theme')}
            className='px-4'
          >
            Aparência
          </DashboardSidebarNavLink>

          <DashboardSidebarNavLink
            href="/app/settings/billing"
            active={isActive('/app/settings/billing')}
            className='px-4'
          >
            Faturamento
          </DashboardSidebarNavLink>
          </main>

      </DashboardSidebarNav>
    </aside>
  )
}
