
// 1. Crea un array de nombres y muestra el tercer nombre en la consola.
let nombres = ["Alonso", "Charles", "Max", "Lewis"];
console.log(nombres[2]); 

// 2. Añade un nombre al inicio y otro al final del array de nombres.
nombres.unshift("Michael"); //añade inicio
nombres.push("Kimi");    //anñade al final
console.log(nombres);

// 3. Crea un array de números e imprime solo los números impares.
let numeros = [14, 18, 55, 1, 11, 81, 22, 16, 44, 63];
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares); 

// 4. Combina dos arrays de frutas y elimina las frutas duplicadas.
let frutas1 = ["mango", "piña", "naranja", "limon", "melon"];
let frutas2 = ["mango", "cereza", "mamey", "limon", "frambuesa"];
let frutasCombinadas = [...new Set([...frutas1, ...frutas2])];
console.log(frutasCombinadas); 

// 5. Ordena un array de números de mayor a menor.
let nums = [14, 18, 55, 1, 11, 81, 22, 16, 44, 63];
nums.sort((a, b) => b - a);
console.log(nums); 

// 6. Usa map para duplicar los valores en un array de números.
let dobles = numeros.map(num => num * 2);
console.log(dobles); 

// 7. Crea un array de edades y usa filter para encontrar las mayores de 18.
let edades = [17, 21, 12, 39, 15, 43];
let mayoresDe18 = edades.filter(edad => edad > 18);
console.log(mayoresDe18); 

// 8. Usa reduce para encontrar el total de puntos en un array de puntajes.
let puntajes = [503, 213, 172, 134];
let totalPuntos = puntajes.reduce((total, puntos) => total + puntos, 0);
console.log(totalPuntos); 

// 9. Remueve el primer y último elemento de un array de colores.
let colores = ["rojo", "naranja", "azul", "verde"];
colores.shift(); 
colores.pop();
console.log(colores); 

// 10. Verifica si el array de números contiene el número 10.
let contiene10 = numeros.includes(10);
console.log(contiene10); 
