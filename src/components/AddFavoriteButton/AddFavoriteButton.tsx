import { FC } from "react";
import style from "./AddFavoriteButton.module.scss";
import { AddFavoriteButtonProps } from "./AddFavoriteButton.props.ts";
import HeartIcon from "@assets/heart.svg?react";
import { useAppSelector } from "@app/redux/hooks.ts";
import { selectUser } from "@features/user.ts";

export const AddFavoriteButton: FC<AddFavoriteButtonProps> = ({
  className,
  movieId,
}) => {
  const user = useAppSelector(selectUser);
  return (
    <button
      className={`${style.heartIcon} ${className} ${
        user.favorites.some((id) => id === movieId.toString()) && style.fill
      }`}
    >
      <HeartIcon />
    </button>
  );
};
