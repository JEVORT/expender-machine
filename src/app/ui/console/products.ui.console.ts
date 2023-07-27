import scanf from "scanf";
import { ProductUtils } from "../../common/Utils/products.utils.view";
import { product } from "../../domain/entities/entity";
import { IDataBase } from "../../domain/interfaces/interface.repository";
import { Decorator, menu, title } from "../../common/constans/prints.console";
import { Denominacion } from "../../common/constans/denominations.money";


export class ProductViwConsole {

  private appServices: IDataBase<product>;
  private productutils: ProductUtils;

  constructor(appServices: IDataBase<product>, producutils: ProductUtils) {
    this.appServices = appServices;
    this.productutils = producutils;
  }

  menu() {
    console.clear();

    var scanf = require('scanf');
    let selector = 0;
    let selectValue: String;
    let validateError = false;

    while (selector != menu.length) {

      console.clear();
      title();
      menu.forEach((menu, index) => {
        console.log(`*  ${index + 1} - ${this.productutils.validatespaces(menu)}        *`)
      })

      console.log(Decorator.DOUBLE);
      validateError ? console.log(`${selector} No es una opcion valida`) : console;
      process.stdout.write("/>: ")
      selector = scanf('%d');

      selectValue = menu[selector - 1]

      switch (selectValue) {
        case 'Listar':
          this.ViweList();
          this.productutils.proccesReturn();
          break;

        case 'Comprar':
          this.ViweBuy();
          this.productutils.proccesReturn();
          break;

        case 'Salir':
          this.exitAplication();
          break;

        default:
          validateError = true;
          break;
      }
    }
  }

  ViweList() {
    console.clear();
    title();
    console.log(" ")
    console.log(" ******  LISTA DE PRODUCTOS  *********")
    let productList = this.appServices.ReadAll();

    productList.forEach(product => console.log(`${Decorator.SIMGLE}
    ${product.id} : ${this.productutils.validatespaces(product.Description)} ${this.productutils.formatter(product.Price)}`))
    console.log()
  }


  ViweBuy(): void {
    console.clear();
    this.ViweList();
    process.stdout.write("Seleccione el producto />: ")
    let idProduct = scanf('%d');

    let productSelected = this.appServices.ReadById(idProduct);

    if (productSelected == undefined) {
      console.log("No se encontro registro");
    } else {
      let moneyEntered: number = 0;
      let moneyReturned = 0;
      let productCost = productSelected.Price;
      let Description = productSelected.Description;

      moneyReturned = this.validatePayment(productSelected);
      moneyEntered = productCost + moneyReturned;
      console.clear();

      console.log("\n==============================================");
      console.log("     Tiqket de compra ");
      console.log("\nCliente: Generic Client");
      console.log(`\nProducto       :  ${Description}`);

      console.log(`Costo          :  ${this.productutils.formatter(productCost)}`);
      console.log(`Valor Pagado   :  ${this.productutils.formatter(moneyEntered)}`);
      console.log(`Cambio         :  ${this.productutils.formatter(moneyReturned)}`);
      console.log("==============================================");
      console.log(" ")
    }
  }

  validatePayment(productSelected: product): number {
    let moneyEntered: number = 0;
    let productCost = productSelected.Price;
    let Description = productSelected.Description;
    let ItemDenominationSelect: number;

    while (moneyEntered < productCost) {
      console.clear();
      moneyEntered > 0 ? console.log("Dinero Insuficiente") : " "

      console.log("=======================================")
      console.log("-------Detalles del pedido ------------")
      console.log(`Producto: ${Description}`)
      console.log("--------------------------------------")
      console.log(`costo: ${productCost}`)
      console.log(`Dinero ingresado: ${this.productutils.formatter(moneyEntered)}`)
      console.log("--------------------------------------")

      Denominacion.forEach((billete, index) =>
        console.log(`${index + 1} : ${this.productutils.formatter(billete)}`));

      ItemDenominationSelect = scanf('%d');

      if (ItemDenominationSelect > 0 && ItemDenominationSelect <= 7) {
        moneyEntered += Denominacion[ItemDenominationSelect - 1];
      } else {
        console.log("Seleccion invalida");
      }
    }
    return moneyEntered - productCost;
  }

  exitAplication() {
    console.clear()
    console.log(Decorator.DOUBLE);
    console.log(" Gracias por usar nuestros servicios");
    console.log(Decorator.DOUBLE);
    console.log();
  }
}