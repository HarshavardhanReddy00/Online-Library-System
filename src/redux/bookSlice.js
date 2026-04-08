//created book slice to add book to the data

import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/books";

const bookSlice = createSlice({
  name: "books",
  initialState: booksData,
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // add at beginning
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;