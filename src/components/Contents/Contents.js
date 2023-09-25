import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import { getNetflixOriginals } from "../store/actions";

const movies = [
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ehGIDAMaYy6Eg0o8ga0oqflDjqW.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vd8YdaH7dzeIMGTNwQinlSiA1gV.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u5tXuFRAz2ckLGap9JKvCCK1Mh.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cswPVyXwQ13dFHU1KFS8dpFxIyY.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4lls2JCt9g1YiusX3xLVSdSZ6cO.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lMFi3ri8h6BYtjqNwMe9y69kTwQ.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wUvUcLTxc83k4l8psyO2pDYHHB3.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kMI3tgxLAZbzGOVlorUBva0kriS.jpg",
];

function Contents(props) {
  const dispatch = useDispatch();
  const { NetflixOriginals } = useSelector((state) => state.infoMovies);

  useEffect(() => {
    dispatch(getNetflixOriginals());
  }, [dispatch]);
  console.log(NetflixOriginals);
  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
      />
      <MoviesRow movies={movies} title="Trending Movies" />
      <MoviesRow movies={movies} title="Top rated Movies" />
      <MoviesRow movies={movies} title="Action Movies" />
      <MoviesRow movies={movies} title="Comedy Movies" />
      <MoviesRow movies={movies} title="Horror Movies" />
      <MoviesRow movies={movies} title="Romance Movies" />
      <MoviesRow movies={movies} title="Documentaries " />
    </div>
  );
}

export default Contents;
