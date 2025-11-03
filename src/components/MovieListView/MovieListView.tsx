import { FC } from "react";
import style from "./MovieListView.module.scss";
import { MovieListViewProps } from "./MovieListView.props.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@app/redux/hooks.ts";
import { deleteMovie, fetchMovieList, selectMovies } from "@features/movie.ts";
import { addFavorit, selectUser } from "@features/user.ts";
import { MovieListRetryError } from "@components/MovieListRetryError/MovieListRetryError.tsx";
import { MovieItemView } from "@components/MovieItemView/MovieItemView.tsx";

export const MovieListView: FC<MovieListViewProps> = ({ filterOption }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectMovies);
  const user = useAppSelector(selectUser);

  function handleClickCard(event: React.MouseEvent<HTMLUListElement>) {
    const target = event.target as HTMLElement;
    const liElement = target.closest("li");
    const id = liElement?.dataset.id;

    if (
      target.tagName === "IMG" ||
      target.tagName === "DIV" ||
      target.tagName === "P"
    ) {
      navigate(`/movie/${id}`);
    }

    if (target.tagName === "BUTTON") {
      dispatch(deleteMovie(id));
    }

    if (target.tagName === "svg" || target.tagName === "path") {
      dispatch(addFavorit(id));
    }
  }

  let content = <></>;

  switch (movies.status) {
    case "error":
      if (movies.error) {
        content = (
          <MovieListRetryError
            error={movies.error}
            handleRefetch={() => dispatch(fetchMovieList())}
          />
        );
      }
      break;
    case "pending":
      content = <div>...loading</div>;
      break;
    case "success":
      content =
        filterOption === "all" ? (
          <ul onClick={handleClickCard} className={style.movieList}>
            {movies.data?.map((movie) => (
              <MovieItemView movie={movie} key={movie.id} />
            ))}
          </ul>
        ) : (
          <ul onClick={handleClickCard} className={style.movieList}>
            {movies.data
              ?.filter((movie) =>
                user.favorites.some((id) => id === movie.id.toString())
              )
              .map((movie) => (
                <MovieItemView movie={movie} key={movie.id} />
              ))}
          </ul>
        );
  }

  return content;
};
