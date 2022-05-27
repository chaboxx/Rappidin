
export const userSchemas = {
  
  createTableUserQuery : `
    create table Users (
      id serial primary key,
      name varchar(64),
      email varchar(128) unique,
      password varchar(64),
      tel varchar(32),
      logo varchar(64),
      Orders integer[],
      rol varchar(64),
      Cards integer[],
      Cart integer,
      Prime integer
    )
  `,
  createTablePrimeQuery : `
  
    create table Primes (
      id serial primary key,
      has_prime boolean,
      date_init varchar(128),
      Card integer,
      payments text[]

    )
  `,
  createTableCardsQuery : `
    create table Cards (
      id serial primary key,
      id_card varchar(64),
      type varchar(64),
      name varchar(64),
      firts_4_digits varchar(16),
      last_4_digits varchar(16)
    )
  `,


}