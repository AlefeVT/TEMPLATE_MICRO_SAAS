import { DashboardPage, DashboardPageHeader, DashboardPageHeaderTitle, DashboardPageMain } from "@/components/dashboard/page";

export default async function Page() {

  return (
    <DashboardPage>

      <DashboardPageHeader>
        <DashboardPageHeaderTitle>
          Home
        </DashboardPageHeaderTitle>
      </DashboardPageHeader>

      <DashboardPageMain>
        <h1>Home</h1>
      </DashboardPageMain>
    </DashboardPage>
  )
}
