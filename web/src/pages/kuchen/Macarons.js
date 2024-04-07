//beschreibt den Aufbau der Karte von Macarons
export default function Macarons(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="macarons.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Macarons</h5>
                    <p class="card-text">Kleine elegante Köstlichkeiten, die jeden verführen können mit ihrer Mischung aus Crunch und Creme!</p>
                </div>
                
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">Preis</p>
                        <p>25€</p>
                    </div>
                </ul>
                <div className="card-div">
                    <div class="card-grid">
                        <p class="fragen">Anzahl</p>
                        <p>10 Stück</p>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">passender Anlass</p>
                        <p>formell</p>
                    </div>
                </ul>
            </div>
        </>)
    }