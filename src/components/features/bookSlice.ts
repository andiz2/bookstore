import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../../types';

const initialState = {
  books: [] as Book[],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.books = action.payload;
    },
    updateBookStock: (state, action: PayloadAction<{ bookId: number; newStock: number }>) => {
      const book = state.books.find((book) => book.id === action.payload.bookId);
      if (book) {
        book.stock = action.payload.newStock;
      }
    },
    decreaseStock: (state, action: PayloadAction<number>) => {
        const bookIndex = state.books.findIndex((book) => book.id === action.payload);
        if (bookIndex !== -1 && state.books[bookIndex].stock > 0) {
          state.books[bookIndex].stock -= 1;
        } else {
          alert("This book is out of stock!");
        }
    },
  },
});

export const { setBooks, updateBookStock, decreaseStock  } = bookSlice.actions;
export default bookSlice.reducer;
