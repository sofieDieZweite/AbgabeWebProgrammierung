export default function Home(){
    return (
    <>
        <div>
            <h1 className="headline">Kuchen & Co</h1>
        </div>
        <div className = "imageBox">
            <img className="img-fluid" src="kuchen.jpg" alt="Kuchen"></img>
        </div>
        <div className="grid-container">
            <div className="textfeld-links">
                <p>Wir von Kuchen & Co haben hier in Berlin unsere kleine Konditorei eröffnet um Sie mit Kuchen und Torten zu jedem Anlass zu verwöhnen. 
                    </p> 
                <p>Bei uns können Sie von uns zusammengestellte oder auf Wunsch erstellte Torten bestellen. </p>
                    <p>Da Kuchen für uns aber nicht nur ein Essen, sondern auch ein Erlebnis ist, bieten wir verschiedene Veranstaltungen mit Kuchen, für die Sie unseren Laden direkt besuchen können.
                    </p>
                    <p> Wir freuen uns auf Sie!
                </p>
            </div>
            <div className="cupcake">
                <img className="img-fluid" src="kuchen2.jpg" alt="Kuchen"></img>
            </div>
        </div>
        <div className="grid-container">
            
            <div className="cupcake">
                <img className="img-fluid" src="backen.jpg" alt="Kuchen"></img>
            </div>
            <div className="textfeld-rechts">
                <p>Mein Ehemann und ich backen schon seit wir klein sind. Die Liebe für Gebäck hat uns auch im Jahr 1985 bei unserer Konditorausbildung in Paris zusammengeführt.
                </p>
                <p>Jetzt haben wir uns endlich unseren Traum einer gemeinsamen Bäckerei erfüllt.
                </p>
            </div>
        </div>
    </>)

}