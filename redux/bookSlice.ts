import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BookInter {
  bookData: any;
  bookLoading: boolean | null;
}

// Async thunk to fetch books from the API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const fetchBooks = createAsyncThunk(
  "book/fetchData",
  async () => {
    try {
        const response = await fetch(`https://freetestapi.com/api/v1/books`,);
        const data = await response.json();
        return data;

        console.log(data)

    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  }
);

const initialState: BookInter = {
  bookData: [],
  bookLoading: null,
  // error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.bookLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.bookData = action.payload;
        state.bookLoading = false;
      });
  },
});

export default homeSlice.reducer;
