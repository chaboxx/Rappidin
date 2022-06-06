import { Menu } from "./menu";



export interface Pedido{
  id : string;
  menus : Menu[];
}

export interface Total {
  itemTotal : number;
  charges : number;
  deliveryFee : number;
  discount : number;
  total : number;
}
