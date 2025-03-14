import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExit = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userExit || null,
    isLoading: false,
    isSuccess: false,
    isError: false ,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(registerForm.pending, (state,action)=>{
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(registerForm.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
      state.isError = false
    })
    .addCase(registerForm.rejected, (state,action)=>{
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.message = action.payload
    })
    .addCase(logoutUser.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.user = null
    })
    .addCase(loginUser.pending, (state,action)=>{
      state.isLoading = true
      state.isSuccess = false
      state.isError = false
    })
    .addCase(loginUser.fulfilled, (state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.user = action.payload
      state.isError = false
    })
    .addCase(loginUser.rejected, (state,action)=>{
      state.isLoading = false
      state.isSuccess = false
      state.isError = true
      state.message = action.payload
    })
   
  },
});

export default authSlice.reducer;

export const registerForm = createAsyncThunk("REGISTER/FORM", async(formData, thunkAPI)=>{
  try {
    return await authService.register(formData)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
    
  }
})
export const loginUser = createAsyncThunk("LOGIN/USER", async(formData, thunkAPI)=>{
  try {
    return await authService.login(formData)
  } catch (error) {
    const message = error.response.data.message
    console.log(error);
    
    return thunkAPI.rejectWithValue(message)
    
  }
})
export const logoutUser = createAsyncThunk("LOGOUT/USER", async()=>{
  localStorage.removeItem('user')
})


