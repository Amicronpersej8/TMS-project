import { Route, Routes } from "react-router-dom";
import style  from "./Content.module.css";
import { MovieDetails } from "../Movies/Movie.Details";
import { RenderMoviesList } from "../Movies/RenderMoviesList";

export const Content = () => {
  return <div className={style.conten}>
    <Routes>
      <Route path="/" element={<RenderMoviesList />}></Route>
      <Route path="/:movieId" element={<MovieDetails ></MovieDetails>}></Route>
    </Routes>
  </div>;
};