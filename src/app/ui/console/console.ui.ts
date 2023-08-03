import { EnumViewConsoleTicket, EnumViewConsoleValidate, MenuConsole } from '../../common/constans/prints.console';
import scanf from "scanf";
import { ProductUtils } from "../../common/Utils/console.utils.view";
import { product } from "../../domain/entities/entity";
import { IDataBase } from "../../domain/interfaces/interface.repository";
import { Decorator, EnumPrintsGeneral, menu } from "../../common/constans/prints.console";
import { Denominacion } from "../../common/constans/denominations.money";

export class ProductViwConsole {

  private appServices: IDataBase<product>;
  private productutils: ProductUtils;

  constructor(appServices: IDataBase<product>, producutils: ProductUtils) {
    this.appServices = appServices;
    this.productutils = producutils;
  }

  menu() {
    this.productutils.title();
    let selector = 0;
    let selectValue: String;
    let validateError = false;

    while (selector != menu.length) {
      this.productutils.title();
      menu.forEach((menu, index) => {
        console.log(`*  ${index + 1} - ${this.productutils.validatespaces(menu)}        *`)
      })

      console.log(Decorator.DOUBLE);
      validateError ? console.log(`${selector} ${Decorator.ERRORSELECTED}`) : console;
      process.stdout.write("/>: ")
      selector = scanf('%d');
      selectValue = menu[selector -1];

      validateError = this.launchSelectedOption(selectValue);
    }
  }

  launchSelectedOption(selectValue: String) {
    switch (selectValue) {
      case `${MenuConsole.LIST}`:
        this.ViewList();
        this.productutils.proccesReturn();
        return false;

      case `${MenuConsole.BUY}`:
        this.ViewBuy();
        this.productutils.proccesReturn();
        return false;

      case `${MenuConsole.EXIT}`:
        this.exitAplication();
        return false;

      default:
        console.log("error");
        return true;
    }
  }

  ViewList() {
    console.clear();
    console.log(Decorator.TITLE);
    console.log();
    console.log(EnumViewConsoleTicket.PRODUCLIST);
    let productList = this.appServices.ReadAll();

    productList.forEach(product => this.listProducValid(product))
    console.log()
  }

  listProducValid(product:product){
    if(product.Stock > 0){
      console.log(`${Decorator.SIMGLE}
    ${product.id} : ${this.productutils.validatespaces(product.Description)} ${this.productutils.formatter(product.Price)}`)
    }
  }

  ViewBuy(): void {
    console.clear();
    this.ViewList();
    process.stdout.write(Decorator.SELECTIONPRODUCT)
    let idProduct = scanf('%d');
    let productSelected = this.appServices.ReadById(idProduct);

    if (productSelected == undefined) {
      console.log(EnumPrintsGeneral.WITEHOUTREGISTRATION);
    } else {
      let moneyReturned = this.validatePayment(productSelected);
      this.productutils.printTicket(productSelected, moneyReturned);
    }
  }

  validatePayment(productSelected: product): number {
    let moneyEntered: number = 0;
    let ItemDenominationSelect: number;
    let paymentstatus = false;

    while (!paymentstatus) {
      moneyEntered > 0 ? console.log(EnumViewConsoleValidate.INSUFFICIENTMONEY) : " "
      this.productutils.printValidate(productSelected, moneyEntered);

      Denominacion.forEach((billete, index) =>
        console.log(`${index + 1} : ${this.productutils.formatter(billete)}`));

      ItemDenominationSelect = scanf('%d');

      if (ItemDenominationSelect > 0 && ItemDenominationSelect <= 7) {
        moneyEntered += Denominacion[ItemDenominationSelect - 1];
        paymentstatus = this.productutils.validatePay(moneyEntered, productSelected.Price);
      } else {
        console.log(EnumViewConsoleValidate.INVALIDSELECTION);
      }
    }
    return moneyEntered - productSelected.Price;
  }


  exitAplication() {
    console.clear()
    console.log(Decorator.DOUBLE);
    console.log(Decorator.THANKS);
    console.log(Decorator.DOUBLE);
    console.log();
  }
}