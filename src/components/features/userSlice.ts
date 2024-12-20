import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types';

const initialState = {
  user: null as User | null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null; 
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
