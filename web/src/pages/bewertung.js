//beschreibt die Kuchen Bewertungsseite
export default function Bewertung(){
    return (<>
    <div>
        <h1 className="headline">Kuchen Bewertung</h1>
    </div>
    <div className="grid-container">
        <div className="textfeld-links">
            <p> Wir arbeiten ständig für Sie an neuen Kuchen Kreationen. Doch um zu entscheiden, welche wir langfristig in unser Sortiment aufnehmen, wollen wir ihre Meinung mit einbeziehen. Kommen Sie vorbei und testen Sie unser neues Gebäck.
            </p>
        </div>
        <div className="cupcake">
            <img className="img-fluid" src="probieren1.jpg" alt="Kuchen"></img>
        </div>
    </div>
    <div className= "information">
        <p className="fragen">Wann:</p> <p> jeweils am ersten Samstag des Monats von 14 bis 16 Uhr</p>
        <p className="fragen">Preis:</p> <p> 4€ pro Person</p>
        <p className="fragen">Anmeldung:</p> <p>Rufen Sie uns an oder schreiben Sie uns eine E-Mail bei Interesse oder Fragen!</p>
        <p className="fragen">Telefon:</p> <p> 030/377054 </p>
        <p className="fragen">E-Mail:</p> <p> kuchenundcoteam@gmx.net</p>
    </div>
        </>)
}