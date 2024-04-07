import Navbar from "./Navbar";
import Quiz from "./pages/quiz";
import Event from "./pages/event";
import Home from "./pages/home";
import Halloween from "./pages/halloween"; 
import Weihnachten from "./pages/weihnachten";
import Impressum from "./pages/impressum";
import Bewertung from "./pages/bewertung";
import Sortiment from "./pages/sortiment";

import KommentarSeite from "./pages/kommentarseite";

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break;
    case "/event":
      component = <Event/>
      break;
    case "/kommentarseite":
      component = <KommentarSeite/>
      break;
    case "/halloween":
      component = <Halloween/>
      break
    case "/bewertung":
      component = <Bewertung/>
      break
    case "/impressum":
      component = <Impressum/>
      break
    case "/weihnachten":
      component = <Weihnachten/>
      break
    case "/sortiment":
      component = <Sortiment/>
      break
  }
  return (
  <>  <Navbar/>
      {component}
      <div className="center">
        <a className="impressum" href="/impressum">Impressum</a>
      </div>

  </>
  )
}

export default App;
