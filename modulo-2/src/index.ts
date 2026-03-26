import type { Estudiante, Asignatura } from "./domain/types/entities.js";
import type { EstadoMatricula } from "./domain/types/matricula.js";
import { generarReporte } from "./domain/types/reportes.js";
import { obtenerRecurso } from "./services/api-client.js";

async function main(): Promise<void> {
  const estadoActiva: EstadoMatricula = {
    tipo: "ACTIVA",
    asignaturas: [
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
    ]
  };

  const estadoSuspendida: EstadoMatricula = {
    tipo: "SUSPENDIDA",
    motivo: "Impago de tasas"
  };

  const estadoFinalizada: EstadoMatricula = {
    tipo: "FINALIZADA",
    notaMedia: 8.7
  };

  console.log("=== REPORTES DE MATRÍCULA ===");
  console.log(generarReporte(estadoActiva));
  console.log(generarReporte(estadoSuspendida));
  console.log(generarReporte(estadoFinalizada));

  console.log("\n=== CONSULTA DE ESTUDIANTES ===");
  const respuestaEstudiantes = await obtenerRecurso<Estudiante[]>("/estudiantes");
  console.log(respuestaEstudiantes);

  console.log("\n=== CONSULTA DE ASIGNATURAS ===");
  const respuestaAsignaturas = await obtenerRecurso<Asignatura[]>("/asignaturas");
  console.log(respuestaAsignaturas);

  console.log("\n=== CONSULTA ERRÓNEA ===");
  try {
    await obtenerRecurso<null>("/matriculas");
  } catch (error) {
    console.error("Error capturado:", error);
  }
}

main().catch((error) => {
  console.error("Error inesperado en la ejecución:", error);
});