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
                <select className="form-select" aria-label="Default select example">
                    <option selected>Was für ein Event ist es?</option>
                    <option value="1">elegantes Event (z.B. Hochzeit, Konfirmation, Abiball etc.)</option>
                    <option value="2">alltägliches Event (z.B. Kaffe und Kuchen mit Gästen, kleine Geburtstagsfeier etc.)</option>
                    <option value="3">Event ohne feste Essplätze (z.B. Businessmeeting, Picknick etc.)</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Werden Kinder anwesend sein??</option>
                    <option value="1">Ja</option>
                    <option value="2">Nein</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Wie viel Gäste werden erwartet?</option>
                    <option value="1">bis zu 5</option>
                    <option value="2">5 bis 10</option>
                    <option value="3">10 bis 20</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Was präferieren Sie geschmacklich?</option>
                    <option value="1">cremig-schokoladig </option>
                    <option value="2">fruchtig</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Ich bin allergisch gegen oder mag ... nicht</option>
                    <option value="1">Schokolade/Kakao</option>
                    <option value="2">Erdbeeren</option>
                    <option value="2">Blaubeeren</option>
                    <option value="2">Zitronen</option>
                    <option value="2">Nüsse</option>
                    <option value="2">Äpfel</option>
                </select>
            </div>
        </>
        )
}