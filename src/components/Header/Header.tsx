import { FC } from "react";
import style from "./Header.module.scss";
import { HeaderProps } from "./Header.props.ts";
import { Link } from "react-router-dom";

export const Header: FC<HeaderProps> = () => {
  const config = [
    {
      path: "/",
      text: "Главная",
    },
    {
      path: "/addMovie",
      text: "Добавить фильм",
    },
  ];
  return (
    <header className={style.header}>
      <div className="container">
        <nav>
          <ul className={style.header__list}>
            {config.map((item, index) => (
              <li className={style.header__item} key={index}>
                <Link className={style.header__link} to={item.path}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
