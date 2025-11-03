import { RootState } from "@app/redux/store";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  favorites: string[];
}

const initialState: InitialState = {
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorit: (state, action) => {
      if (state.favorites.some((id) => id === action.payload)) {
        const index = state.favorites.findIndex((id) => id === action.payload);
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addFavorit } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
