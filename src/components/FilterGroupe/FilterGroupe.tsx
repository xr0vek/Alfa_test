import { FC } from "react";
import style from "./FilterGroupe.module.scss";
import { FilterGroupeProps } from "./FilterGroupe.props.ts";

export const FilterGroupe: FC<FilterGroupeProps> = ({
  selectOption,
  handleChange,
}) => {
  return (
    <div className={style.filter}>
      <label className={style.filter__label}>
        <input
          type="radio"
          name={"filter"}
          onChange={handleChange}
          value={"all"}
          checked={selectOption === "all"}
        />
        Все фильмы
      </label>
      <label className={style.filter__label}>
        <input
          type="radio"
          name={"filter"}
          onChange={handleChange}
          value={"favorites"}
          checked={selectOption === "favorites"}
        />
        Избранные фильмы
      </label>
    </div>
  );
};
