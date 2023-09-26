import React, { useEffect } from "react";
import styled from "styled-components";
import { useViewport } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchMovies, setMovieDetail } from "../store/actions";

const moviesList = [
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hSUi0nSrNSmi5tYbr5WXzZW1Crx.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zupyCthty7BP01jrVFC9n7WtGCv.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v1YEOdGptCyNxnc4mJSYNd4cE8E.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zjf0RMAdxRp0EoelY1Mr33KWRKj.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nEvWdHCKJdILLM8qmlW7ENVHVTy.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/u5tXuFRAz2ckLGap9JKvCCK1Mh.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mqNkQhaXxsH8SLNmJnG5oGz4meR.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lMFi3ri8h6BYtjqNwMe9y69kTwQ.jpg",
  "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cU05bKTCIOS5GODIBSB4MeLKq6P.jpg",
];

const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies(props) {
  const [windowWidth] = useViewport();
  const dispatch = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");
  console.log(keywords);

  useEffect(() => {
    if (keywords) dispatch(getSearchMovies(keywords));
  }, [keywords, dispatch]);

  console.log(SearchMovies);

  return (
    <SearchPane>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 992
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imageUrl} alt={movie.title || movie.name} />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <NotFound>
          <h1>your search "keywords" did not have any matches.</h1>
        </NotFound>
      )}
    </SearchPane>
  );
}

export default SearchMovies;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: var(--color-background);
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .movieItem {
      opacity: 0.7;
    }
    .movieItem {
      position: relative;
      min-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0ms.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: var(--color-white);
        font-weight: bold;
      }
    }
  }
`;

const NotFound = styled.div`
  padding: 5rem 8rem;
  color: var(--color-white);
`;
