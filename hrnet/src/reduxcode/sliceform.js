import { createSlice } from '@reduxjs/toolkit';
import { datasMock } from "../datas/datasMock.js";


const formSlice = createSlice({
  name: 'form',
  initialState: {
    employees: datasMock, 
  },
  reducers: {
    submitForm: (state, action) => {
      const newEmployee = {
        ...action.payload
      };
      state.employees.push(newEmployee);
      console.log('New employee payload:', action.payload);

    }
  }
});

export const { submitForm } = formSlice.actions;
export const formSliceReducer = formSlice.reducer;
export default formSliceReducer;