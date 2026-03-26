// Tipos primitivos
let identificador: string = "USR-492";
let iteraciones: number = 10;
let procesoActivo: boolean = true;

// Inferencia
let timestamp = new Date().getTime();

// Arrays
let metricas: number[] = [12.4, 8.9, 15.0];
let logs: Array<string> = ["INFO: Inicio", "ERROR: Timeout"];

// Tupla
let coordenadaEspacial: [number, number, number] = [40.4168, -3.7038, 600];

// Función con retorno estricto
function calcularDesviacionEstandar(datos: number[], media: number): number {
  if (datos.length === 0) {
    return 0;
  }

  const sumaCuadrados = datos.reduce((acc, valor) => {
    const diferencia = valor - media;
    return acc + diferencia * diferencia;
  }, 0);

  return Math.sqrt(sumaCuadrados / datos.length);
}

// Parámetro opcional y por defecto
function registrarEvento(
  mensaje: string,
  nivelError: number = 1,
  metadatos?: unknown
): void {
  console.log(`[Nivel ${nivelError}] ${mensaje}`);

  if (metadatos !== undefined) {
    console.log("Metadatos:", metadatos);
  }
}

// Declaración vs aserción
interface Configuracion {
  timeout: number;
  reintentos: number;
}

// ✅ Correcto: obliga a cumplir el contrato
const configBien: Configuracion = {
  timeout: 5000,
  reintentos: 3
};

// Widening y literal types
let estado = "ACTIVO";
const estadoFijo = "ACTIVO";

const permisosMutables = { admin: true, nivel: 1 };

const permisosInmutables = { admin: true, nivel: 1 } as const;

// unknown
let valorDesconocido: unknown = "Hola";

if (typeof valorDesconocido === "string") {
  console.log(valorDesconocido.toUpperCase());
}

// void
function imprimirResumen(): void {
  console.log("Resumen impreso");
}

// never
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
}

// Pruebas
console.log("Identificador:", identificador);
console.log("Iteraciones:", iteraciones);
console.log("Proceso activo:", procesoActivo);
console.log("Timestamp:", timestamp);
console.log("Métricas:", metricas);
console.log("Logs:", logs);
console.log("Coordenada:", coordenadaEspacial);
console.log(
  "Desviación estándar:",
  calcularDesviacionEstandar(metricas, 12.1)
);

registrarEvento("Proceso iniciado");
registrarEvento("Timeout detectado", 2, { modulo: "red" });

imprimirResumen();
console.log("Config:", configBien);
console.log("Estado:", estado);
console.log("Estado fijo:", estadoFijo);
console.log("Permisos mutables:", permisosMutables);
console.log("Permisos inmutables:", permisosInmutables);