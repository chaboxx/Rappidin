import { useEffect, useState } from "react";


import { Menu } from "../interfaces/menu";


interface MenusByCategory{
  categoria : string;
  menus : Menu[];
}


export const useCategoryMenu = ( menus : Menu[] ) =>{

  const [ menusByCategory, setMenusByCategory ] = useState<MenusByCategory[]>([]);
  
  useEffect(() => {
    let repetidos : string[] = [];
    menus.map(menu=>{
      if ( !repetidos.includes(menu.categoria) ){
        repetidos.push(menu.categoria);
      }

    })

    const result = repetidos.map(repetido=>{
      const menusList = menus.filter(menu=>menu.categoria===repetido);
      
      return {
        categoria : repetido,
        menus : menusList,
      }

    })

    setMenusByCategory(result);
  }, [])
  
  return {
    menusByCategory,
  }

}