import { HTMLAttributes } from "react";

export interface AddFavoriteButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  movieId: number;
}
