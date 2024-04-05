export default function Quiz(){
    return  (
        <>
            <div>
                <h1 className="headline">Quiz</h1>
            </div>
            <div className="textfeld">
                <p>Wenn Sie sich nicht sicher sind, welcher Kuchen für Ihr Event am besten geeignet ist, machen Sie dieses Quiz!</p>
            </div>
            <div className="quiz">
                <p> </p>
                <p className="fragen">Was für ein Event ist es?</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Was für ein Event ist es?</option>
                    <option value="1">elegantes Event (z.B. Hochzeit, Konfirmation, Abiball etc.)</option>
                    <option value="2">alltägliches Event (z.B. Kaffe und Kuchen mit Gästen, kleine Geburtstagsfeier etc.)</option>
                    <option value="3">Event ohne feste Essplätze (z.B. Businessmeeting, Picknick etc.)</option>
                </select>
                <p> </p>
                <p className="fragen">Werden Kinder anwesend sein?</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Werden Kinder anwesend sein?</option>
                    <option value="1">Ja</option>
                    <option value="2">Nein</option>
                </select>
                <p> </p>
                <p className="fragen">Wie viele Gäste werden erwartet?</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Wie viel Gäste werden erwartet?</option>
                    <option value="1">bis zu 5</option>
                    <option value="2">5 bis 10</option>
                    <option value="3">10 bis 20</option>
                </select>
                <p> </p>
                <p className="fragen">Was präferieren Sie geschmacklich?</p>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Was präferieren Sie geschmacklich?</option>
                    <option value="1">cremig-schokoladig </option>
                    <option value="2">fruchtig</option>
                </select>
                <p> </p>

                <p className="fragen">Wogegen sind sie allergisch oder was mögen Sie nicht?</p>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Äpfel</label>
                </div>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Blaubeeren</label>
                </div>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Erdbeeren</label>
                </div>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Kakao/Schokolade</label>
                </div>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Nüsse</label>
                </div>
                <div>
                   <input classname="checkbox" type="checkbox" value=""></input> 
                   <label>Zitronen</label>
                </div>
                <a href="/bewertung" className="btn-event" >zum Kuchen</a>
            </div>
        </>
        )
}