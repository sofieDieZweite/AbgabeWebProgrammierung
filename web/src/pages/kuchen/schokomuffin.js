export default function Schokomuffin(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="schokomuffin.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Schokomuffin</h5>
                    <p class="card-text">Unsere Schokoladenmuffins sind für Kakao-Liebhaber nicht wegzudenken. Ein muss auf jeder Gartenparty!</p>
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
                        <p>12 Stück</p>
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