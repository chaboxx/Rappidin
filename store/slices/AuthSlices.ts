import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { loginUser, singUpUser } from "../../reducers/authReducers";


import { User } from "../../interfaces/user";
import { Cart } from "../../interfaces/cart";
import { Pedido } from "../../interfaces/pedido";



interface USER_INITITAL_STATE_INTERFACE extends User{
  isLoading : boolean;
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
      console.log({state,action});
      state.isLoading = true;

      // return action.payload;
     
    },
    [singUpUserThunk.fulfilled as any] : ( state : USER_INITITAL_STATE_INTERFACE, action )=>{
      console.log({state,action});
      const { ok , msg , data } = action.payload;
      
      if ( ok ){
        const { email,tel } = data[0];
  
        state.email=email;
        state.tel = tel;
        state.isLoading = false;
        // return action.payload;
        //NO SE PUEDE RETORNAR ASI QUE POSIBLEMENTE TODO DEBE SER CON ESTADO
      }

    
    },
    [singUpUserThunk.rejected as any] : ( state : USER_INITITAL_STATE_INTERFACE, action )=>{
      console.log({state,action});
      state.isLoading = false;
      // return action.payload;
      
    },
  }
})


//EXPORTACION DE ACCIONES SYNC
// export const { singUpUserAction } = authSlice.actions;

export default authSlice.reducer;