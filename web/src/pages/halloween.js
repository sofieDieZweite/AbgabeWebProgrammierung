//beschreibt die Halloween Backen Seite
export default function Halloween(){
    return (<>
        <div>
            <h1 className="headline">Halloween Backen</h1>
        </div>
        <div className="grid-container">
            <div className="textfeld-links">
                <p> Eine gelungene Halloweenfeier hat Kostüme, Kürbisse und jede Menge Grusel. Aber auch dekorative Köstlichkeiten dürfen nicht fehlen. Wir zeigen Ihnen, wie Sie mit wenigen Handgriffen Ihr Buffet in eine richtige Grusellandschaft verwandeln können.
                </p>
            </div>
            <div className="cupcake">
                <img className="img-fluid" src="halloween1.jpg" alt="dekorierte Kekse passend zu Halloween"></img>
            </div>
        </div>
        <div className= "information">
            <p className="fragen">Wann:</p> <p> jeden Samstag im Oktober von 10 bis 14 Uhr</p>
            <p className="fragen">Preis:</p> <p> 9€ pro Person</p>
            <p className="fragen">Anmeldung:</p> <p>Rufen Sie uns an oder schreiben Sie uns eine E-Mail bei Interesse oder Fragen!</p>
            <p className="fragen">Telefon:</p> <p> 030/377054 </p>
            <p className="fragen">E-Mail:</p> <p> kuchenundcoteam@gmx.net</p>
        </div>
        </>)
}