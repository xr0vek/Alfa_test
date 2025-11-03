import { FC } from "react";
import style from "./AddMoviePage.module.scss";
import { AddMoviePageProps } from "./AddMoviePage.props.ts";
import { useAppDispatch } from "@app/redux/hooks.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, FormDataSchema } from "./model.ts";
import { Button } from "@components/Button/Button.tsx";
import defaultPoster from "@assets/defaultPoster.png";
import { addMovie } from "@features/movie.ts";
import { useNavigate } from "react-router-dom";

export const AddMoviePage: FC<AddMoviePageProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormDataSchema),
  });
  const onSubmit = (data: FormData) => {
    dispatch(addMovie(data));
    navigate("/");
  };
  return (
    <section className={style.addMovie}>
      <div className="container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={style.addMovie__form}
        >
          <label htmlFor="">
            <input type="text" {...register("title")} placeholder="Название" />
            {errors.title && <span>{errors.title?.message}</span>}
          </label>
          <label htmlFor="">
            <textarea {...register("plot")} placeholder="Описание" />
            {errors.plot && <span>{errors.plot?.message}</span>}
          </label>
          <label htmlFor="">
            <input
              type="text"
              {...register("posterUrl")}
              placeholder="url постера"
              value={defaultPoster}
            />
          </label>
          <Button>Добавить</Button>
        </form>
      </div>
    </section>
  );
};
