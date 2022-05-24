
export const restaurantModel = ( ) =>{


  const restaurantModelQuery = `
    create table Restaurants (
      id serial primary key,
      name varchar(64),
      description varchar(512),
      Directions integer[],
      logo varchar(64),
      Menus integer[],
      Administrator int,
      Orders int[],
      min_price money,
      order_time_minimun int,
      order_timen_maximun int,
      starts_calification smallserial,
      delivery_price smallserial,
      schedule varchar(124)

    )
  `

  const menuModelQuery = `
    create table Menus (
      id serial primary key,
      name varchar(64),
      description varchar(128),
      price money,
      image varchar(64),
      Elections integer[],
      Aditionals integer[]
    )
  `

  const electionsModelQuery = `
    
    create table Elections (
      id serial primary key,
      name varchar(64),
      required boolean,
      elections text[]
    )
  `

  const aditionalModelQuery = `
    
    create table Aditionals (
      id serial primary key,
      name varchar(64),
      price money,
      max_portions smallserial,
      aditionals text[]
    )
      
  `



}