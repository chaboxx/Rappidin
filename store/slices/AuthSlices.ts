import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginUser, singUpUser } from "../../reducers/authReducers";


import { User } from "../../interfaces/user";
import { Cart } from "../../interfaces/cart";
import { Pedido } from "../../interfaces/pedido";



interface USER_INITITAL_STATE_INTERFACE extends User{
  isLoading : boolean;
  signUp : {
    error : string;
    isLoading : boolean;
  };
  login : {
    error : string;
    isLoading : boolean;
  }
}

const USER_INITITAL_STATE : USER_INITITAL_STATE_INTERFACE= {
  id : "",
  name : "",
  email : "",
  tel : "",
  isLogged : false,
  cart: {} as Cart,
  pedidos : [] as Pedido[],  
  isLoading : true,
  signUp : {
    error : "",
    isLoading : false,
  },
  login : {
    error : "",
    isLoading : false,
  }
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
    [singUpUserThunk.pending as any] : ( state : USER_INITITAL_STATE_INTERFACE, action )=>{
      state.signUp.isLoading = true;
    },
    [singUpUserThunk.fulfilled as any] : ( state : USER_INITITAL_STATE_INTERFACE, action )=>{
      state.signUp.isLoading = false;
    },
    [singUpUserThunk.rejected as any] : ( state : USER_INITITAL_STATE_INTERFACE, action )=>{
      state.signUp.isLoading = false;
      state.signUp.error = "Error Try Again Please"
    },

    [loginUserThunk.pending as any] : ( state : USER_INITITAL_STATE_INTERFACE , action )=>{
      state.login.isLoading = true;
    },
    [loginUserThunk.rejected as any] : ( state : USER_INITITAL_STATE_INTERFACE , action )=>{
      state.login.isLoading = false;
      state.login.error = "Error Try Again Please"
    },
    [loginUserThunk.fulfilled as any] : ( state : USER_INITITAL_STATE_INTERFACE , action )=>{
      state.login.isLoading = false;      
    }

  }
})


// export const aux = singUpUserThunk.
//EXPORTACION DE ACCIONES SYNC
// export const { singUpUserAction } = authSlice.actions;

export default authSlice.reducer;