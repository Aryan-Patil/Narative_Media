import Home from "./Components/Home";
import "./Css/App.css";
import "./Css/All.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import About from "./Components/About";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Home />
      <Services />
      <Work/>
      <About />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
