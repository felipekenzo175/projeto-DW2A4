import { Header } from "../GoetzForm/Header";
import { Menu } from "../GoetzForm/Menu";
import { Footer } from "../GoetzForm/Footer";

export function Pagina3() {
    return(
        <>
        < Header/>
        < Menu/>
        <div id="main">
            <h2> 
                Goetz 1 Digital Projection Room 
            </h2>
            <h3> Digital Server </h3>
            <p>
                Movie "ingested" at open bay via portable internal hard drive and stored in "raid drive" configuration on 31tb drives as seen below open bay.
            </p>
            <h3> Digital Projector By Nec </h3>
            <p>
                Featuring a 3000 watt xenon bulb programing screen to left digital server (as seen to left) bottom left.
            </p>
        </div>
        <div id="right">
            <h3>Goetz 2</h3>
            <p>
                The Digital Era began 13 December 2011, Tuesday in Goetz 1. The evening's feature: "New Year's Eve".
            </p>
            <h3>Goetz 3</h3>
            <p>
                All theatres presented Digital Projection - Sight & Sound - 16 December 2011, Friday. Featured: "Alvin & the Chipmunks: Chipwrecked", "Sherlock Holmes: Game of Shadows" and "New Year's Eve."
            </p>
            <p>
                "Welcome to the new world!"
            </p>
        </div>
        < Footer/>
        </>
    );
}