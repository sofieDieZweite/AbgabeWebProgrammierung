//beschreibt den Aufbau der Karte von Zitronenkuchen
export default function Zitronenkuchen(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="zitronenkuchen.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Zitronenkuchen</h5>
                    <p class="card-text">Unser Zitronenkuchen ist ein Klassiker, der auf keiner Gartenparty fehlen darf!</p>
                </div>
                
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">Preis</p>
                        <p>20€</p>
                    </div>
                </ul>
                <div className="card-div">
                    <div class="card-grid">
                        <p class="fragen">Anzahl</p>
                        <p>15 Stücken</p>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">passender Anlass</p>
                        <p>allgemein</p>
                    </div>
                </ul>
            </div>
        </>)
    }