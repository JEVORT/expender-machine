export const menu = [
  "Listar",
  "Comprar",
  "Salir"
];

export enum Decorator {
  SIMGLE = "--------------------------------------",
  DOUBLE = "======================================",
  ASTERISK = "***********************************",
  SELECTIONPRODUCT = "Seleccione el producto />: ",
  TITLE = `
         MAQUINA EXPENDEDORA
              Bienvenido`
};

export enum EnumViewConsoleTicket {
  BUYSTICKET = "     Tiqket de compra ",
  COSTUMERTYPE = "\nCliente: Generic Client",
  PRODUCTDESCRIPTION = "\nProducto       :",
  PRODUCTCOST = "Costo          :",
  VALUEPAID = "Valor Pagado   :",
  CHANGE = "Cambio         :",
  PRODUCLIST = " ******  LISTA DE PRODUCTOS  *********"
}

export enum EnumViewConsoleValidate {
  ORDERDETAIL = "-------Detalles del pedido ------------",
  PRODUCT = "\nProducto:",
  COST = "Costo          :",
  VALUEPAID = "Dinero ingresado:",
  INSUFFICIENTMONEY = "Dinero Insuficiente",
  INVALIDSELECTION = "Seleccion invalida"

}

export enum EnumPrintsGeneral {
  WITEHOUTREGISTRATION = "No se encontro registro"
}
