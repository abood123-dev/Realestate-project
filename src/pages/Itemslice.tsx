import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Style } from './Listing';

interface CartState {
  items: Style[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Style>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<Style>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
