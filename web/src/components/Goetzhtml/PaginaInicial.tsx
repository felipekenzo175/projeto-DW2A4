import { Header } from "../GoetzForm/Header";
import { Menu } from "../GoetzForm/Menu";
import { Footer } from "../GoetzForm/Footer";

export function Pagina1() {
    return (
        <>
        < Header/>
        < Menu/>
        <div id="main">
                <h2>
                    Goetz theatre gift passes when theatre is open.
                </h2>
                <p>
                    Damage occurred to the Sky-Vu Drive-In projector during the winter.
                    If the parts could not have been repaired there would've been no outdoor season as replacement parts are 3 to 4 months away - caught up in the supply chain. 
                    New projectors are backlogged over 10 months. After many days of repair, then several days of testing all is working.
                    <br></br>
                    Sky-Vu opening date is scheduled for 27 May 2022 with Top Gun: Maverick. Co-feature: Sonic the Hedgehog 2.
                    Show time and opening time information to be posted at the Sky-Vu page of this website: Sky-Vu Shows & Times.
                    The Goetz Theatre will not be open while Sky-Vu is open. It will re-open in September.
                    Thank you for your patience.
                </p>
        </div>
        <div id="right">
            <h2>Digital Projection</h2>
            <p>
                16  December 2011
                by: bright star systems cinema minneapolis. mn. New Carpet leading to Goetz 3 and interiors of  Goetz 2 & 3. Carpet & installation: j&j barrett flooring, monroe, wi. New Neon Lighting or Sign & Clock.
                <br></br>
                As Part of  Goetz Theatre's 80th Anniversary since 02 September 1931.
            </p>
        </div>
        < Footer/>
        </>
    );
}