// let pet = {
//   id: 33,
//   caption: 'Jack',
//   isEditing: true,
//   id: 42,
//   caption: 'Bobik',
//   isEditing: false,
//   isEditing: true,
// }

// pet

// ...pet
// id: 42, caption: 'Bobik', isEditing: true,

// {...pet}

// let petA = { id: 42, caption: 'Bobik', isEditing: true }
// let petB = { id: 33, caption: 'John', isEditing: false }

// let newPet = { ...pet }

let objA = { x: 3 }
let objB = { u: 5 }

// Распечатываем в первую очередь
// А уже потом переопределение пропертис

// let objC = { x: 3, y: 5 }
// let objC = { ...objA, y: 5 }
let objC = { ...objA, ...objB }

console.log(objC)

// console.log(pet === newPet)

//

// let giftA = {помада, тушь}
// let giftB = {тоналка, крем}

// помада, тушь, тоналка

// {помада, тушь, тоналка, крем}
