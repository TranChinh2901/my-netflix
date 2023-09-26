import React from "react";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import SearchMovies from "../SearchMovies/SearchMovies";
import { useSelector } from "react-redux";

function Search(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MovieDetail showModal={MovieDetail ? true : false} movie={MovieDetail} />
    </div>
  );
}

export default Search;
