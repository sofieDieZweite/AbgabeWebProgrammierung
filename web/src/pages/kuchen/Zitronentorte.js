export default function Zitronentorte(){
    return (
        <>
            <div class="card" styles={{width: '18rem'}}>
                <img src="zitronentorte.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Zitronentorte</h5>
                    <p class="card-text">Unsere Zitronentorte ist ein Hingucker und mit seiner leichten Säure auch immer ein Hochgenuß!</p>
                </div>
                
                <ul class="list-group list-group-flush">
                    <div class= "card-grid">
                        <p class="fragen">Preis</p>
                        <p>22€</p>
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