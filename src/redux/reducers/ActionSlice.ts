import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionState } from '../../app/ts/redux';

const initialState: ActionState = {
  isOpenAdminNavbar: true,
  orders: [
    {
      username: 'Neil James',
      email: 'testEmail@dev.io',
      date: 'Feb 01, 2023',
      status: 'Completed',
      totalPrice: '$48.55',
      orderActions: 'Edit Order',
    },
  ],
  category: 'electronics',
};

const actionSlice = createSlice({
  name: 'actionSlice',
  initialState: initialState,
  reducers: {
    openAdminNavbar: (state) => {
      state.isOpenAdminNavbar = !state.isOpenAdminNavbar;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { openAdminNavbar, setCategory } = actionSlice.actions;

export default actionSlice.reducer;
