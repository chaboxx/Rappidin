  
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
    create table Menus_Pickeds (
      id serial primary key,
      Menus_Ids integer[]
    )
  `


}

/*
const findRegexInstance = new FindRegex(/hello \w+/)
findRegexInstance
  .addFile('fileA.txt')
  .addFile('fileB.json')
  .find()
  .on('found', (file, match) => console.log(`Matched "${match}" in file ${file}`))
  .on('error', err => console.error(`Error emitted ${err.message}`))

//A;ADES ARCHIVSO Y CUANDO CAMBIA INTERCEPTAS LA PETICION Y LE AGREGAS LA INFO




*/