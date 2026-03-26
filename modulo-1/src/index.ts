import {
  calcularMedia,
  calcularMediana,
  filtrarAtipicos
} from "./math-utils.js";

const datosPrueba: number[] = [10, 12, 15, 14, 13, 100];
const datosVacios: number[] = [];

console.log("=== PRUEBAS MODULO 1 ===");

console.log("Datos:", datosPrueba);
console.log("Media:", calcularMedia(datosPrueba));
console.log("Mediana:", calcularMediana(datosPrueba));
console.log("Filtrar atípicos (límite 20):", filtrarAtipicos(datosPrueba, 20));

console.log("\n=== CASOS LÍMITE ===");
console.log("Media array vacío:", calcularMedia(datosVacios));
console.log("Mediana array vacío:", calcularMediana(datosVacios));
console.log("Filtrar atípicos array vacío:", filtrarAtipicos(datosVacios, 10));