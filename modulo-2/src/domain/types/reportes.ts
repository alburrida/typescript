import type { EstadoMatricula } from "./matricula.js";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignatura(s) matriculada(s).`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivo}.`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media de ${estado.notaMedia}.`;

    default: {
      const comprobacionExhaustiva: never = estado;
      throw new Error(`Estado no manejado: ${JSON.stringify(comprobacionExhaustiva)}`);
    }
  }
}