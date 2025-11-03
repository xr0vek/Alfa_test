import { FC } from "react";
import style from "./MovieViewPage.module.scss";
import { MovieViewPageProps } from "./MovieViewPage.props.ts";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@app/redux/hooks.ts";
import { selectMovieById } from "@features/movie.ts";
import { Button } from "@components/Button/Button.tsx";
import ArrowIcon from "@assets/ArrowIcon.svg?react";

export const MovieViewPage: FC<MovieViewPageProps> = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = useAppSelector((state) => selectMovieById(state, Number(id)));

  return (
    <section className={style.movie}>
      <div className={`${style.movie__container} container`}>
        <div className={style.movie__left}>
          <Button className={style.movie__btn} onClick={() => navigate("/")}>
            <ArrowIcon />
          </Button>
          <h1 className={style.movie__title}>{movie?.title}</h1>
          <p className={style.movie__desc}>{movie?.plot}</p>
        </div>
        <div className={style.movie__right}>
          <img
            className={style.movie__img}
            src={movie?.posterUrl}
            alt={movie?.title}
          />
        </div>
      </div>
    </section>
  );
};
