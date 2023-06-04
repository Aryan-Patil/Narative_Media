import Home from "./Components/Home";
import "./Css/App.css";
import "./Css/All.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
