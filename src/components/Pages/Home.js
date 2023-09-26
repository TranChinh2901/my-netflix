import React, { useEffect, useState } from "react";
import Intro from "../Intro/intro";
import Contents from "../Contents/Contents";
import Menus from "../Menus/Menus";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);
  return (
    <div>
      <Intro />
      <Contents />
      <Menus />
      <MoviesDetail
        movie={MovieDetail}
        showModal={isShowMovieDetail ? true : false}
      />
    </div>
  );
}

export default Home;
