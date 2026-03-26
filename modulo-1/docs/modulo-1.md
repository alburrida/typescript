# Módulo 1 - Inicialización y lógica pura

## Objetivo
Implementar un proyecto TypeScript desde cero con configuración estricta y funciones matemáticas tipadas.

## Decisiones de diseño
- Se ha activado `strict: true` para forzar comprobaciones exhaustivas.
- Las funciones `calcularMedia` y `calcularMediana` devuelven `number | null` cuando el array está vacío.
- Se ha evitado el uso de `any`.
- Se han separado los ejemplos teóricos en `ejemplos-basicos.ts` y el laboratorio en `math-utils.ts`.

## Funciones implementadas
- `calcularMedia(datos: number[]): number | null`
- `calcularMediana(datos: number[]): number | null`
- `filtrarAtipicos(datos: number[], limite: number): number[] | null`

## Verificación
- Ejecución en desarrollo con `npx tsx src/index.ts`
- Comprobación de tipos con `npx tsc --noEmit`
- Compilación a JavaScript en `dist/` con `npx tsc`