import { baseUrl } from "@app/api/api";
import { Movies } from "@app/models/movie";
import { createAppAsynkThunk } from "@app/redux/hooks";
import { RootState } from "@app/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  status: "success" | "error" | "pending" | "idle";
  error: string | null;
  data: Movies | null;
}

const initialState: InitialState = {
  status: "idle",
  error: null,
  data: null,
};

export const fetchMovieList = createAppAsynkThunk(
  "movie/fetchMovieList",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(loadingMovie());
      const response = await fetch(baseUrl + "/movie?count=8");
      if (!response.ok) {
        return rejectWithValue(`Ошибка HTTP ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Не известная ошибка");
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadingMovie: (state) => {
      state.status = "pending";
    },
    deleteMovie: (state, action) => {
      const id = state.data?.findIndex((movie) => movie.id == action.payload);
      state.data?.splice(Number(id), 1);
    },
    addMovie: (state, action) => {
      state.data?.push({ ...action.payload, id: Date.now() });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.status = "success";
    });
    builder.addCase(fetchMovieList.rejected, (state, action) => {
      console.log(action.payload);
      state.status = "error";
      state.data = null;
      state.error = action.payload
        ? action.payload.toString()
        : "Не известная ошибка";
    });
  },
});

export const movieReducer = movieSlice.reducer;
export const { loadingMovie, deleteMovie, addMovie } = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movie;
export const selectMovieById = (state: RootState, id: Number) =>
  state.movie.data?.find((movie) => movie.id === id);
