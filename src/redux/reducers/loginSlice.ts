import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    logged: false
  },
  reducers: {

    makelogin: (state, action) => {
      console.log(action.payload);
      state.logged = action.payload;
    }

  }
});

export const { makelogin } = loginSlice.actions;
export default loginSlice.reducer;