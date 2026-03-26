import type { RespuestaAPI } from "../domain/types/api.js";
import type { Estudiante, Asignatura } from "../domain/types/entities.js";

const estudiantesMock: Estudiante[] = [
  {
    id: "EST-001",
    nombre: "Brais",
    apellidos: "Pérez López",
    email: "brais@example.com",
    fechaNacimiento: new Date("2001-05-10"),
    activo: true
  },
  {
    id: "EST-002",
    nombre: "Lucía",
    apellidos: "García Soto",
    email: "lucia@example.com",
    fechaNacimiento: new Date("2000-11-22"),
    activo: true
  }
];

const asignaturasMock: Asignatura[] = [
  {
    id: "ASG-001",
    nombre: "Arquitectura de Software",
    creditos: 6,
    curso: 3,
    profesor: "Dr. Martínez"
  },
  {
    id: "ASG-002",
    nombre: "Bases de Datos",
    creditos: 6,
    curso: 2,
    profesor: "Dra. Sánchez"
  }
];

function construirRespuesta<T>(
  codigoEstado: number,
  exito: boolean,
  datos: T,
  errores?: string[]
): RespuestaAPI<T> {
  return {
    codigoEstado,
    exito,
    datos,
    errores
  };
}

export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (endpoint) {
        case "/estudiantes":
          resolve(
            construirRespuesta<T>(
              200,
              true,
              estudiantesMock as T
            )
          );
          break;

        case "/asignaturas":
          resolve(
            construirRespuesta<T>(
              200,
              true,
              asignaturasMock as T
            )
          );
          break;

        default:
          reject(
            construirRespuesta<null>(
              404,
              false,
              null,
              [`Endpoint no encontrado: ${endpoint}`]
            )
          );
      }
    }, 800);
  });
}