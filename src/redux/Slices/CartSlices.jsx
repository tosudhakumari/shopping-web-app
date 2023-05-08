import { createSlice } from "@reduxjs/toolkit";

export const CartSlices = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    changeQuantity:(state, action)=>{
      const {id , quantity} = action.payload;
      
      const productIndex = state.findIndex((item)=> item.id === id)
      state[productIndex].quantity = quantity;
    }
    
  },
});

export const { add, remove,changeQuantity } = CartSlices.actions;
export default CartSlices.reducer;
