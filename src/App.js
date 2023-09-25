import "./App.css";
import Contents from "./components/Contents/Contents";
import Intro from "./components/Intro/intro";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
    </div>
  );
}

export default App;
