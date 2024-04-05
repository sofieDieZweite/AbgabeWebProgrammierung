import Navbar from "./Navbar";
import Quiz from "./pages/quiz";
import Event from "./pages/event";
import Home from "./pages/home";
import Halloween from "./pages/halloween."; 
import Weihnachten from "./pages/weihnachten";
import Impressum from "./pages/impressum";
import Bewertung from "./pages/bewertung";

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break;
    case "/event":
      component = <Event/>
      break;
    case "/quiz":
      component = <Quiz/>
      break;
    case "/halloween":
      component = <Halloween/>
      break
    case "/bewertung":
      component = <Bewertung/>
      break
    case "/impreeum":
      component = <Impressum/>
      break
    case "/weihnachten":
      component = <Weihnachten/>
      break
  }
  return (
  <>  <Navbar/>
      {component}
  </>
  )
}

export default App;
