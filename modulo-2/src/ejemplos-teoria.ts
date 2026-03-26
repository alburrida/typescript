// Interface
interface UsuarioSistema {
  readonly id: string;
  nombreCompleto: string;
  email: string;
  fechaUltimoAcceso?: Date;
}

// Type alias
type UUID = string;
type EstadoTransaccion = "PENDIENTE" | "PROCESANDO" | "COMPLETADA" | "RECHAZADA";

// Unión y type guards
function procesarEntrada(input: string | number): string | number {
  if (typeof input === "string") {
    return input.trim().toUpperCase();
  }

  return Math.pow(input, 2);
}

// Intersección
type EntidadAuditable = {
  creadoEn: Date;
  modificadoPor: string;
};

type Documento = {
  titulo: string;
  contenido: string;
};

type DocumentoAuditable = Documento & EntidadAuditable;

// Unión discriminada
interface CargaPendiente {
  estado: "PENDIENTE";
}

interface CargaExitosa {
  estado: "EXITO";
  datos: string[];
}

interface CargaFallida {
  estado: "ERROR";
  codigoHttp: number;
  mensaje: string;
}

type EstadoPeticion = CargaPendiente | CargaExitosa | CargaFallida;

function procesarPeticion(peticion: EstadoPeticion): void {
  if (peticion.estado === "EXITO") {
    console.log("Datos recibidos:", peticion.datos.length);
  } else if (peticion.estado === "ERROR") {
    console.warn(`Fallo con código ${peticion.codigoHttp}`);
  } else {
    console.log("Petición en curso...");
  }
}

// Excess property checking
interface PuntoGeografico {
  latitud: number;
  longitud: number;
}

const puntoConAltitud = {
  latitud: 40.4,
  longitud: -3.7,
  altitud: 600
};

const miPuntoAsignado: PuntoGeografico = puntoConAltitud;

// Enum
enum NivelAcceso {
  Invitado = "GUEST",
  Usuario = "USER",
  Administrador = "ADMIN"
}

// Genéricos
interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

interface Cliente {
  id: number;
  empresa: string;
}

const respuestaCliente: RespuestaAPI<Cliente> = {
  codigoEstado: 200,
  exito: true,
  datos: {
    id: 104,
    empresa: "TechCorp"
  }
};

// Restricción genérica
function procesarConId<T extends { id: string }>(item: T): string {
  return `Procesando elemento con id ${item.id}`;
}

// Pruebas
const usuario: UsuarioSistema = {
  id: "USR-001",
  nombreCompleto: "Ana Torres",
  email: "ana@example.com"
};

const documento: DocumentoAuditable = {
  titulo: "Informe",
  contenido: "Contenido del informe",
  creadoEn: new Date(),
  modificadoPor: "admin"
};

console.log(usuario);
console.log("UUID de ejemplo:", "550e8400-e29b-41d4-a716-446655440000" as UUID);
console.log("Estado transacción:", "COMPLETADA" as EstadoTransaccion);
console.log(procesarEntrada(" hola mundo "));
console.log(procesarEntrada(5));
console.log(documento);
procesarPeticion({ estado: "PENDIENTE" });
procesarPeticion({ estado: "EXITO", datos: ["a", "b", "c"] });
procesarPeticion({ estado: "ERROR", codigoHttp: 500, mensaje: "Error interno" });
console.log("Punto geográfico:", miPuntoAsignado);
console.log("Nivel acceso:", NivelAcceso.Administrador);
console.log("Respuesta cliente:", respuestaCliente);
console.log(procesarConId({ id: "X-99", nombre: "Elemento" }));