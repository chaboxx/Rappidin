import { Action } from "../../interfaces/reducers/authReducer";
import { User } from "../../interfaces/user";


export const authReducer = ( state : User, action : Action) =>{

  switch (action.type) {
    case "@auth/sign_up_user":
      return state;
    default:
      break;
  }

}