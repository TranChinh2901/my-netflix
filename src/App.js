import { useSelector } from "react-redux";
import "./App.css";
import Contents from "./components/Contents/Contents";
import Intro from "./components/Intro/intro";
import Menus from "./components/Menus/Menus";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail
        movie={MovieDetail}
        showModal={MovieDetail ? true : false}
      />
    </div>
  );
}

export default App;
