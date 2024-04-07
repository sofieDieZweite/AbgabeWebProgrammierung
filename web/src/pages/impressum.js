//Beschreibt den Aufbau der Impressumsseite
export default function Impressum(){
    return (<>
        <div>
            <h1 className= "headline">Impressum</h1>
        </div>
        <div className= "grid-container">
            <div className="impressum-feld">
                <p className="fragen">Kuchen&Co GmbH</p>
                <p className="text-impressum">Schlossallee 4a</p>
                <p>10707 Berlin</p>
                <p className="fragen">Kontaktmöglichkeiten</p>
                <p className="text-impressum">Tel. 030/377054  </p>
                <p>E-Mail: kuchenundcoteam@gmx.net</p>
                <p className="fragen">Vertretungsberechtigt sind die Geschäftsführer*Innen</p>
                <p className="text-impressum">Hans Schulz </p>
                <p className="text-impressum">Klaudia Schulz</p>
                <p>Ust-IdNr: DE248027390</p>
            </div>
            <div className="cupcake">
                <img className="img-fluid" src="paar.jpg" alt="Kuchen"></img>
            </div>
        </div>
    </>)
}