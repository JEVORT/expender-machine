export const menu = [
  "Listar",
  "Comprar",
  "Salir"
];

export enum Decorator {
  SIMGLE = "--------------------------------------",
  DOUBLE = "======================================",
  ASTERISK = "***********************************",

};

export function title() {
  console.log(`
${Decorator.DOUBLE}
       MAQUINA EXPENDEDORA
           Bienvenido
${Decorator.DOUBLE}`)
}