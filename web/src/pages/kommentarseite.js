import KommentarFeld from "./kommentarfeld";
import Kommentare from "./kommentare";

export default function KommentarSeite(){

    return (<>
            <div>
                <h1 className="headline">Kommentare</h1>
            </div>
            <div>
                <p>Hinterlasse uns gerne Feedback!</p>
            </div>
              <KommentarFeld/>
      <Kommentare/>
    </>)
}