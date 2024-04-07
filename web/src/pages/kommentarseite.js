import KommentarFeld from "./kommentarfeld";
import Kommentare from "./kommentare";

//beschreibt den Aufbau der Kommentarseite
export default function KommentarSeite(){

    return (<>
            <div>
                <h1 className="headline">Kommentare</h1>
            </div>
            <div className="kommentar-information">
                <p >Hinterlasse uns gerne Feedback!</p>
            </div>
              <KommentarFeld/>
      <Kommentare/>
    </>)
}