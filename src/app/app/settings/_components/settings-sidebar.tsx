'use client'

import { DashboardSidebarNav, DashboardSidebarNavLink, DashboardSidebarNavMain } from "@/components/dashboard/sidebar"

export function SettingsSidebar() {
    return (
        <aside>
        <DashboardSidebarNav>
            <DashboardSidebarNavMain>

                <DashboardSidebarNavLink href="/app/settings">
                    Meu Perfil
                </DashboardSidebarNavLink>

                <DashboardSidebarNavLink href="/app/settings/theme">
                    Tema
                </DashboardSidebarNavLink>

                <DashboardSidebarNavLink href="/app/settings/billing">
                    Faturamento
                </DashboardSidebarNavLink>


            </DashboardSidebarNavMain>
        </DashboardSidebarNav>
    </aside>
    )
}