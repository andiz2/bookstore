// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/features/cartSlice';
import bookReducer from './components/features/bookSlice';  // Assuming you have this
import userReducer from './components/features/userSlice';  // Assuming you want to add this

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        books: bookReducer,    
        users: userReducer,    
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;