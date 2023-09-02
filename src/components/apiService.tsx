import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  loading: boolean;
  users: number[]; // Assuming users are represented by an array of numbers (user IDs)
  error: string;
}

// Define the initial state
const initialState: UserState = {
  loading: false,
  users: [],
  error: "",
};

// Create an asynchronous thunk to fetch users
export const fetchUsers = createAsyncThunk<number[]>(
  "user/fetchUsers",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data.map((user: any) => user.id);
  }
);

// Create a user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message ?? "An error occurred.";
    });
  },
});

// Export the actions and reducer
export const {} = userSlice.actions;
export default userSlice.reducer;
