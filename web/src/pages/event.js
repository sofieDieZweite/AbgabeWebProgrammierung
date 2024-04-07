//beschreibt den Aufbau der Eventseite
export default function Event(){
    return (<>
                <div>
                    <h1 className="headline">Events</h1>
                </div>
                <div className="events">
                    <div className="card" styles={{width: '18rem'}}>
                        <img src="halloween.jpg" className="card-img-top" alt="kuchen"/>
                        <div className="card-body">
                            <h5 className="card-title">Halloween Backen</h5>
                            <p className="card-text">Komm zu uns in die Backstube und lerne deine Torten passend zu Halloween zu dekorieren.</p>
                            <a href="/halloween" className="btn-event" >weitere Informationen</a>
                        </div>
                    </div>
                    <div className="card" styles={{width: '18rem'}}>
                        <img src="probieren.jpg" className="card-img-top" alt="kuchen"/>
                            <div className="card-body">
                                <h5 className="card-title">Kuchen Bewertung</h5>
                                <p className="card-text">Entscheiden Sie mit, welche neuen Kuchenkreation dauerhaft in unser Sortiment aufgenommen wird!</p>
                                <a href="/bewertung" className="btn-event" >weitere Informationen</a>
                            </div>               
                    </div>
                    <div className="card" styles={{width: '18rem'}}>
                        <img src="weihnachten.jpg" className="card-img-top" alt="kuchen"/>
                            <div className="card-body">
                                <h5 className="card-title">Weihnachtsbacken</h5>
                                <p className="card-text">Erleben Sie mit uns die Adventszeit und Sie lernen nebenbei professionell Kekse zu dekorieren!</p>
                                <a href="/weihnachten" className="btn-event" >weitere Informationen</a>
                            </div>
                    </div>
                </div>
            </>)
}