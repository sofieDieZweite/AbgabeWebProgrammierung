import Navbar from "./Navbar";
import Quiz from "./pages/quiz";
import Event from "./pages/event";
import Home from "./pages/home";
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
  }
  return (
  <>  <Navbar/>
      {component}
  </>
  )
}

export default App;
