//Ejercicios map

//1. 

const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numbers.map(num => num ** num);


//2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];


const result2 = ['Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'];

//3
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

const result3 = [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Carlos es secretario y le gusta futbol y queso'
]
//2. Ejercicios Filter
//Crea un segundo array con que devuelva los impares

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 != 0);

//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo

const foodList2 = [
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
    }
];


const result5 = [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
];


//3 Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros

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
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];


const result6 = ['TV Samsung', 'Viaje a Cancún'];

//3. Ejercicios reduce
//Dado el siguiente array, obten la multiplicación de todos los elementos del array

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((a, b) => a * b);


//Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
    'Me',
    'llamo',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
const nombre = 'pepe'
const result8 = sentenceElements.reduce((acc, elm) => elm === 'llamo' ? acc + " " + elm + " " + nombre : acc + " " + elm)



//Obtener el monto total de los elementos que pertenecen a catergory "code"
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
// Resultado --> 60

const total = books.filter(function filterCategory(x) {
    if (x["category"] === 'code') {
        return true;
    }
});

const result9 = 60;