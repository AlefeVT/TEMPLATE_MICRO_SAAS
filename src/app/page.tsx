import { LandingPageHeader } from "./_components/LandingPage/LandingPageHeader"
import { LandingPageMain } from "./_components/LandingPage/LandingPageMain"

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-[100dvh]">

      <LandingPageHeader />
      
      <LandingPageMain />
  
    </div>
  )
}