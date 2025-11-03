import { AddMoviePage } from "@pages/AddMoviePage";
import { Layoute } from "@pages/Layoute";
import { MovieListPage } from "@pages/MovieListPage";
import { MovieViewPage } from "@pages/MovieViewPage";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layoute />}>
        <Route path="" element={<MovieListPage />} index />
        <Route path="/movie/:id" element={<MovieViewPage />} />
        <Route path="/addMovie" element={<AddMoviePage />} />
      </Route>
    </Routes>
  );
};
