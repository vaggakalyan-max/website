import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Home />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
