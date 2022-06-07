import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginUser, singUpUser } from "../../reducers/authReducers";


import { User } from "../../interfaces/user";
import { Cart } from "../../interfaces/cart";
import { Pedido } from "../../interfaces/pedido";




const USER_INITITAL_STATE : User= {
  id : "",
  name : "",
  email : "",
  tel : "",
  isLogged : false,
  cart: {} as Cart,
  pedidos : [] as Pedido[],  
}


//REDUCERS ASYNC
export const singUpUserThunk = createAsyncThunk("authProvider/signUpUser", singUpUser );

export const loginUserThunk = createAsyncThunk("authProvider/loginUser", loginUser );





export const authSlice = createSlice({
  name : "Auth",
  initialState : USER_INITITAL_STATE,
  reducers : {
    

  },
  extraReducers : {
    [singUpUserThunk.fulfilled as any]:(state : any,action : any)=>{
      state.name = action.payload;
      console.log({state});
    },
  }
})


//EXPORTACION DE ACCIONES SYNC
// export const { singUpUserAction } = authSlice.actions;

export default authSlice.reducer;