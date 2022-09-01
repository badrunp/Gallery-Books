import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("books/getAll", async () => {
  try {
    const books = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=coding&maxResults=10&key=AIzaSyCxG7X-PSgnVSx1M_FKpgbjEg8dLgs7WbA"
    );
    console.log(books.data);
    return books.data;
  } catch (error) {
    console.log(error);
  }
});

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: true,
    error: false,
  },
  reducers: {
    sort: (state, action) => {
      state.loading = true;
      state.books = {
        ...state.books,
        items: state.books.items.sort((a, b) =>
          action.payload == "asc"
            ? a.volumeInfo.title > b.volumeInfo.title
              ? 1
              : a.volumeInfo.title < b.volumeInfo.title
              ? -1
              : 0
            : a.volumeInfo.title > b.volumeInfo.title
            ? -1
            : a.volumeInfo.title < b.volumeInfo.title
            ? 1
            : 0
        ),
      };
    },
    search: (state, action) => {
      state.books = {
        ...state.books,
        items: action.payload,
      };
    },
    toggleLoading: (state, action) => {
      state.loading =
        action.payload != undefined ? action.payload : !state.loading;
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    [getBooks.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { sort, toggleLoading, search } = bookSlice.actions;

export default bookSlice.reducer;
