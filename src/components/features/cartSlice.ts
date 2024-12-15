import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Book } from '../../types';

const initialState = {
  items: [] as CartItem[], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(action.payload); 
      }
    },
    removeFromCart: (state, action: PayloadAction<{ itemId: number; userID: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.itemId || item.userID !== action.payload.userID);
    },
    confirmOrder: (state, action: PayloadAction<{ books: Book[]; userID: number }>) => {
      const { books, userID } = action.payload;
      state.items = state.items.filter(item => item.userID !== userID); // Clear items in the user's cart
      books.forEach(book => {
        const quantityInCart = state.items
          .filter(item => item.id === book.id)
          .reduce((total, item) => total + item.quantity, 0);
        
        if (quantityInCart > 0) {
          book.stock -= quantityInCart;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, confirmOrder } = cartSlice.actions;
export default cartSlice.reducer;
