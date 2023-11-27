import { createSlice } from '@reduxjs/toolkit';



const formSlice = createSlice({
  name: 'form',
  initialState: {
    employees: [{ id: 'id1', firstName: 'John', lastName: 'Doe', dateOfBirth: '1990-01-01', dateStart: '2020-01-01', address: { street: '1 rue de la Paix', city: 'Paris', state: 'France', zipCode: '75000' }, department: 'IT'}] 
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