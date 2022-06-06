import { Cart } from "./cart";
import { Pedido } from "./pedido";

export interface User {
  id: string;
  name : string;
  email : string;
  tel : string;
  isLogged : boolean;
  cart : Cart;
  pedidos : Pedido[];
}