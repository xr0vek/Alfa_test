import { FC } from "react";
import style from "./MovieListRetryError.module.scss";
import { MovieListRetryErrorProps } from "./MovieListRetryError.props.ts";
import { Button } from "@components/Button/Button.tsx";

export const MovieListRetryError: FC<MovieListRetryErrorProps> = ({
  error,
  handleRefetch,
}) => {
  return (
    <div className={style.errorContainer}>
      <p className={style.errorContainer__desc}>{error}</p>
      <Button className={style.errorContainer__button} onClick={handleRefetch}>
        Загрузить снова
      </Button>
    </div>
  );
};
