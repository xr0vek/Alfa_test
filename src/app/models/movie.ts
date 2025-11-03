import { z } from "zod";

export const MovieSchema = z.object({
  keywords: z.array(z.string()),
  backdropUrl: z.string(),
  production: z.string(),
  trailerYouTubeId: z.string(),
  language: z.string(),
  tmdbRating: z.number(),
  title: z.string(),
  cast: z.array(z.string()),
  revenue: z.string(),
  posterUrl: z.string(),
  plot: z.string(),
  genres: z.array(z.string()),
  id: z.number(),
  budget: z.string(),
  languages: z.array(z.string()),
  releaseDate: z.string(),
  director: z.string(),
  awardsSummary: z.string(),
  runtime: z.number(),
  trailerUrl: z.string(),
  relaseYear: z.number(),
  countriesOfOrigin: z.array(z.string()),
  originalTitle: z.string(),
  searchL: z.string(),
  homepage: z.string(),
  status: z.string(),
});

export type Movie = z.infer<typeof MovieSchema>;

export const MoviesSchema = z.array(MovieSchema);

export type Movies = z.infer<typeof MoviesSchema>;

export const GenresSchema = z.array(z.string());

export type Genres = z.infer<typeof GenresSchema>;
