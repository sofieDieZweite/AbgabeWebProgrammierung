import Schokomuffin from "./kuchen/schokomuffin"
import Apfelkuchen from "./kuchen/Apfelkuchen"
import Cupcakes from "./kuchen/Cupcakes"
import Erdbeerkuchen from "./kuchen/Erdbeerkuchen"
import Schokokuchen from "./kuchen/schokokuchen"
import Zitronenkuchen from "./kuchen/Zitronenkuchen"
import Zitronentorte from "./kuchen/Zitronentorte"
import Nusskuchen from "./kuchen/Nusskuchen"
import Macarons from "./kuchen/Macarons"
import Blaubeermuffins from "./kuchen/Blaubeermuffins"

//beschreibt den Aufbau der Sortimentseite
export default function Sortiment(){
return (
    <>
        <div>
            <h1 className="headline">Sortiment</h1>
        </div>
        <div className="textfeld">
            <p>Bei Interesse an einem unsere Kuchen melden Sie sich bei uns unter der Nummer 030/377054 oder schreiben Sie uns eine E-Mail an kuchenundcoteam@gmx.net!</p>
        </div>
        <div className="events">   
            <Apfelkuchen/>  
            <Blaubeermuffins/>  
            <Cupcakes/>    
            <Erdbeerkuchen/>
            <Macarons/>
            <Nusskuchen/>
            <Schokokuchen/>
            <Schokomuffin/>
            <Zitronenkuchen/>
            <Zitronentorte/>
        </div>
        </>)
}