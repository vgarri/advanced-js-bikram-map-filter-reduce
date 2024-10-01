//RESUELVE LOS EJERCICIOS AQUI
//- [ ] 1.- Dado el array **numbers** cuyo valor sea , 
//crea una función **elevados** que devuelva un array con el cuadrado de cada uno de los elementos.
let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(){
   
   return numbers.map((num)=> num**num);
};

//console.log(elevados([4, 5, 6, 7, 8, 9, 10]));

// - [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], 
//generar un segundo array que consiga generar de salida el resultado esperado.
// ```
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]
// ```
let geo = ['Italia','Japón','Valencia']
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
function frase(foodList){
    let result2 = [];
for (let i = 0; i <= 2; i++) {
    result2.push(`Como soy de ${geo[i]}, amo comer ${foodList[i]}`); 
}
result2.push(`Aunque no como carne, el ${foodList[3]} es sabroso`);
return result2;
};
let result2 = frase(foodList);


/* - [ ] 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo 
accediendo a las propiedades del objeto proporcionado:
```
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

// Resultado esperado
/*
  [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta futbol y queso'
  ]
*/
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
function frase2(staff) {
    let resulto = [];
    staff.map((objeto)=>{
        resulto.push(`${objeto.name} es ${objeto.role} y le gusta ${objeto.hobbies[0]} y ${objeto.hobbies[1]}`)
    });

return resulto;

};
let result3 = frase2(staff);

/* - [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

```
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```*/
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterImpares(numbers2) {
    
    let resultt = numbers2.filter((nume)=>  nume%2 !== 0);
    return resultt;
};
let result4 = filterImpares(numbers2);


// - [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre 
//los platos veganos y saque una sentencia como la del ejemplo
// ```
// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

function veggieFilter(foodList2) {
    return foodList2.filter((comida) => comida.isVeggie ).map (food => `Que ric${food.name === "Tofu burguer"? "a" : "o"} ${food.name} me voy a comer!`);

}
let result5 = veggieFilter(foodList2);



// - [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

// ```

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
// */
// ```
function mayor300(inventory){
return inventory.filter(elem => elem.price > 300).map(el => el.name);
};
let result6 = mayor300(inventory);

//- [ ] 6.- Dado el siguiente array **numeros3** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
//
let numeros3 = [39, 2, 4, 25, 62];
function multiplicar(numeros3){
 return numeros3.reduce((anterior, actual) => anterior * actual);

};
let result7 = multiplicar(numeros3);

// //- [ ] 7.- Concatena todos los elementos del array con reduce para que devuelva una sola frase
// ```
const sentenceElements = [
  'Me',
  'llamo',
  'Victor',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
function frase7(sentenceElements) {
return sentenceElements.reduce((curr, acc) => curr +' '+ acc );



};
let result8 = frase7(sentenceElements);

// // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'

//- [ ] 8.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];
// // Resultado --> 60

function monto(books) {
    return books.filter((book => book.category === "code")).reduce((acc,curr)=> acc.price + curr.price);
}
let result9=(monto(books));