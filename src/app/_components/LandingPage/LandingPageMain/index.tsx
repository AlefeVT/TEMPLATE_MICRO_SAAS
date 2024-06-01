
import { LandingPageSectionOne } from "../LandingPageSectionOne"
import { LandingPageSectionTree } from "../LandingPageSectionTree"
import { LandingPageSectionTwo } from "../LandingPageSectionTwo"

export function LandingPageMain() {

    return (

        <main className="flex-1">
            
            <LandingPageSectionOne />
            
            <LandingPageSectionTwo / >

            <LandingPageSectionTree />
            
        </main>

    )
}
