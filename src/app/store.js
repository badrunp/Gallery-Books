import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../features/books/books";

export default configureStore({
  reducer: {
    books: bookSlice,
  },
});
