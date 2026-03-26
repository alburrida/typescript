# Documentación de arquitectura - Módulo 2

## Introducción

En este módulo se ha desarrollado un modelo de datos para un sistema de gestión universitario usando TypeScript con tipado estricto.

## Entidades del dominio

Se han definido dos entidades principales:

- `Estudiante`
- `Asignatura`

Ambas se han implementado mediante `interface`, ya que representan objetos de dominio con una estructura clara y estable. Además, sus identificadores se han marcado como `readonly` para evitar modificaciones una vez creados.

### Estudiante
Representa a un alumno del sistema con datos personales y académicos básicos.

### Asignatura
Representa una materia del sistema universitario con información como nombre, créditos, curso y profesor.

## Uso de `interface` frente a `type`

Se ha utilizado `interface` para definir entidades y contratos estructurales, ya que resulta más adecuada para modelar objetos.

Se ha utilizado `type` para:
- alias semánticos,
- uniones de tipos literales,
- y la unión discriminada `EstadoMatricula`.

Esta separación mejora la claridad del diseño y sigue las recomendaciones habituales de TypeScript.

## Unión discriminada `EstadoMatricula`

Se ha creado un tipo `EstadoMatricula` compuesto por tres estados posibles:

- `MatriculaActiva`
- `MatriculaSuspendida`
- `MatriculaFinalizada`

Cada uno contiene una propiedad común llamada `tipo`, que actúa como discriminante. Gracias a esto, TypeScript puede identificar de forma segura qué estructura concreta se está manejando dentro de un `switch`.

Esto evita errores como intentar acceder a propiedades que no existen en un estado determinado.

## Función `generarReporte`

La función `generarReporte(estado: EstadoMatricula)` analiza el tipo de matrícula y devuelve un texto descriptivo.

Este diseño aprovecha el estrechamiento de tipos de TypeScript, haciendo que cada caso del `switch` sea seguro y claro.

## Respuesta genérica de API

Se ha definido la interfaz genérica `RespuestaAPI<T>` para representar respuestas tipadas de un servicio de datos.

Esta estructura incluye:
- `codigoEstado`
- `exito`
- `datos`
- `errores` (opcional)

El uso de genéricos permite reutilizar la misma forma de respuesta para distintos tipos de datos sin perder seguridad de tipos.

## Servicio genérico `obtenerRecurso<T>`

Se ha implementado una función `obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>` que simula llamadas a una base de datos usando `setTimeout`.

Su ventaja principal es que permite obtener recursos distintos con una única función, manteniendo siempre el tipo esperado en la respuesta.

Ejemplos:
- `obtenerRecurso<Estudiante[]>("/estudiantes")`
- `obtenerRecurso<Asignatura[]>("/asignaturas")`

## Ventajas del diseño

El uso de TypeScript en este módulo aporta varias ventajas:

- detección temprana de errores,
- contratos de datos explícitos,
- código más mantenible,
- reutilización mediante genéricos,
- y reducción de errores en tiempo de ejecución.
