import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const result = await fetch(API_URL);
      const data = await result.json();
        return data
      }
  )

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {
        
  },
  extraReducers: (builder) => {
    
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.products  = action.payload;
        state.isLoading = false;
    })
    builder.addCase(fetchProducts.pending, (state, action) => {
        state.products  = action.payload;
        state.isLoading = true;
    })
  },
});

// export const {  } = productSlice.actions;
export default productSlice.reducer;