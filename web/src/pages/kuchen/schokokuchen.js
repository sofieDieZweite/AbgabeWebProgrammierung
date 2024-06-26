//beschreibt den Aufbau der Karte von Schokokuchen
export default function Schokokuchen(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="schokokuchen.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Schokokuchen</h5>
                    <p class="card-text">Unser vollmundige Schokoladenkuchen lässt Herzen weit und breit schneller schlagen! Eine cremige süße Sünde!</p>
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
                        <p>12 Stücken</p>
                    </div>
                </div>
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">passender Anlass</p>
                        <p>allgemein & formell</p>
                    </div>
                </ul>
            </div>
        </>)
    }