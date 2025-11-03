import { FC } from "react";
import style from "./MovieItemView.module.scss";
import { MovieItemViewProps } from "./MovieItemView.props.ts";
import { AddFavoriteButton } from "@components/AddFavoriteButton/AddFavoriteButton.tsx";
import { Button } from "@components/Button/Button.tsx";

export const MovieItemView: FC<MovieItemViewProps> = ({ movie }) => {
  return (
    <li className={style.item} key={movie.id} data-id={movie.id.toString()}>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className={style.item__img}
      />
      <div className={style.item__btnGroupe}>
        <AddFavoriteButton
          className={style.item__favoriteBtn}
          movieId={movie.id}
        />
        <Button className={style.item__deleteBtn}>Удалить</Button>
      </div>
      <p className={style.item__desc}>{movie.plot}</p>
    </li>
  );
};
