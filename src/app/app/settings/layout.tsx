'use client'

import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";
import { PropsWithChildren } from "react";
import { SettingsSidebar } from "./_components/settings-sidebar";
import { useRouter } from "next/navigation";

export default function Layout({ children }: PropsWithChildren) {
    const router = useRouter();

    return (
        <DashboardPage>

            <DashboardPageHeader>
                <DashboardPageHeaderTitle>
                    Configurações
                </DashboardPageHeaderTitle>
            </DashboardPageHeader>

            <DashboardPageMain>
                <div className="grid grid-cols-[16rem_1fr]">
                   <SettingsSidebar />
                    <div>{children}</div>
                </div>
            </DashboardPageMain>
        </DashboardPage>


    )
}