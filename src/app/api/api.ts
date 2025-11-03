import { MovieSchema, MoviesSchema } from "@app/models/movie";

export const baseUrl = "https://cinemaguide.skillbox.cc";

export const fetchMovieList = () => {
  return fetch(baseUrl + "/movie")
    .then((res) => res.json())
    .then((data) => {
      MoviesSchema.parse(data);
      return data;
    })
    .catch((error) => console.log(error));
};

export const fetchMovie = (id: string) => {
  return fetch(baseUrl + `/movie/${id}`)
    .then((res) => res.json())
    .then((data) => {
      MovieSchema.parse(data);
      return data;
    })
    .catch((error) => console.log(error));
};
