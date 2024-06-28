import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "./productService";

const initialState = {
  allProduct: [
    {
      id: 1,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      id: 2,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      id: 3,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      id: 4,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      id: 5,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
    {
      id: 6,
      title: "New Title set here, please check my website",
      description: "New Content check on page....",
      img: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp",
    },
  ],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   deleteData : (state, action) => {
    return {
      ...state,
      allProduct : state.allProduct.filter((item) => item.id !== action.payload)
    }
   }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductData.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getProductData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allProduct = action.payload;
        state.isError = false;
      })
      .addCase(getProductData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
  },
});

export const getProductData = createAsyncThunk("GET/DATA", async () => {
  try {
    return await getData();
  } catch (error) {
    console.log(error.message);
  }
});


export const {deleteData} = productSlice.actions;
 
export default productSlice.reducer;
