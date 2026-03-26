export interface Estudiante {
  readonly id: string;
  nombre: string;
  apellidos: string;
  email: string;
  fechaNacimiento: Date;
  activo: boolean;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  curso: number;
  profesor: string;
}

export type UUID = string;
export type EstadoAcademico = "ACTIVO" | "SUSPENDIDO" | "GRADUADO";