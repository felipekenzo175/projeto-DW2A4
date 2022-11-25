import { Header } from "../GoetzForm/Header";
import { Menu } from "../GoetzForm/Menu";
import { Footer } from "../GoetzForm/Footer";

export function Pagina4() {
    return(
        <>
        < Header/>
        < Menu/>
        <div id="main">
            <h2>The Film Era</h2>
            <p>
                The film era ended at the Goetz Theatres 11 December 2011, Sunday.
            </p>
            <p>
                First digital showing, "New Year's Eve" presented 13 December 2011, Tuesday.
            </p>
            <p>
                All Theatres presented in digital Projection - sight & sound - 16 December 2011, Friday. Featured: "Alvin & the Chipmunks: Chipwrecked", "Sherlock Holmes: Game of Shadows" and "New Year's Eve."
            </p>
        </div>
        <div id="right">
            <h3>Goetz 2 Projection Room</h3>
            <p>Apogee projector with flat & scope lenses, digital reader.</p>
            <p>Potts platter system and Lamphouse.</p>
            <p>Dolby digital sound processor with Crossovers and Amplifiers.</p>
        </div>
        < Footer/>
        </>
    );
}
        