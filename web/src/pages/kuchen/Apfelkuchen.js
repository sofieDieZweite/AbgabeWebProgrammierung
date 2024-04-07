//beschreibt den Aufbau der Karte von Apfelkuchen
export default function Apfelkuchen(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="apfelkuchen.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Apfelkuchen</h5>
                    <p class="card-text">Unser Apfelkuchen schmeckt so, wie frisch von Oma! Zu jeder Jahreszeit beliebt!</p>
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
                        <p>12 Stücken</p>
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