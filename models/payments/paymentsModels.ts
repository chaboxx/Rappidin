
export const paymentsModel = ( ) =>{


  const cartModelQuery = `
    create table Carts (
      id serial primary key,
      Menus_Picked integer[],
      total_price money,

    
    )
  `
  const paymentModelQuery = `
      
    create table Payments (
      id serial primary key,
      state varchar(64),
      date_purchased varchar(100),
      data_payment varchar(512)
    )
  `


  const checkOutModelQuery = `
    create table CheckOuts (
      id serial primary key,
      amount money,
      Payment integer,
      Order integer,
      Direction integer,
      User integer
    )
  `



}