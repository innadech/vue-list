let objA = { x: 42 }

// let objB = { ...objA }

// console.log(objA === objB)

// objB.x = 101

objA

function processObj(objC) {
  objC.x = 666
}

let objD = { ...objA }

processObj(objD)

objA

objD
