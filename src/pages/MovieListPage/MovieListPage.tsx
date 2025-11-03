import React, { FC, useState } from "react";
import style from "./MovieListPage.module.scss";
import { MovieListPageProps } from "./MovieListPage.props.ts";
import { MovieListView } from "@components/MovieListView/MovieListView.tsx";
import { FilterGroupe } from "@components/FilterGroupe/FilterGroupe.tsx";

export const MovieListPage: FC<MovieListPageProps> = () => {
  const [selectOption, setSelectOption] = useState<"all" | "favorites">("all");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectOption(event.target.value as "all" | "favorites");
  }

  return (
    <section className={style.movieList}>
      <div className="container">
        <FilterGroupe handleChange={handleChange} selectOption={selectOption} />
        <MovieListView filterOption={selectOption} />
      </div>
    </section>
  );
};
