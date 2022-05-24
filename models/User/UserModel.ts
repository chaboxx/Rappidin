
export const usersModel = ( ) =>{


  const userModelQuery = `
    create table Users (
      id serial primary key,
      name varchar(64),
      email varchar(128),
      tel varchar(32),
      logo varchar(64),
      Orders integer[],
      rol varchar(64),
      Cards integer[],
      Cart integer,
      Prime integer
    )
  `
  
  const primeModelQuery = `
    create table Primes (
      id serial primary key,
      has_prime boolean,
      date_init varchar(128),
      Card integer,
      payments text[],

    )
  `

  const cardsModelQuery = `
    
    create table Cards (
      id serial primary key,
      id_card varchar(64),
      type varchar(64)
      name varchar(64),
      firts_4_digits varchar(16),
      last_4_digits varchar(16),
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