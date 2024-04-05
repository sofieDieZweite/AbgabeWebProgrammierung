export default function Cupcakes(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="cupcakes.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Cupcakes</h5>
                    <p class="card-text">Unsere Cupcakes überzeugen mit ihrer fluffigen Creme jedes Mal aufs Neue!</p>
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
                        <p>12 Stück</p>
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