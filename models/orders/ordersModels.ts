
export const ordersModel = ( ) =>{


  const ordersOutModelQuery = `
    create table Orders (
      id serial primary key,
      Menus_Picked integer[],
      amount money,
      User integer
    )
  `
  const menusPickedOutModelQuery = `
    create table Menus Pickeds (
      id serial primary key,
      Menus_Ids integer[],
    )
  `


}