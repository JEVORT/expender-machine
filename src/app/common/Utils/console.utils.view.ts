import { EnumViewConsoleTicket, Decorator, EnumViewConsoleValidate, menu, MenuConsole } from '../constans/prints.console';
import scanf from "scanf";
import { product } from "../../domain/entities/entity";

export class ProductUtils {
  
  formatter(number: number): string {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })
    return formatter.format(number);
  }

  validatespaces(str: string): string {
    let spaces = 22 - str.length;
    for (let index = 0; index < spaces; index++) {
      str += " "
    }
    return str;
  }

  proccesReturn() {
    process.stdout.write(Decorator.RETURNED)
    scanf("%s");
    console.clear();
  }

  validatePay(moneyEntered: number, price: number): boolean {
    return moneyEntered >= price;
  }

  printTicket(produt: product, moneyChange: number) {
    console.clear();
    console.log(Decorator.DOUBLE);
    console.log(EnumViewConsoleTicket.BUYSTICKET);
    console.log(EnumViewConsoleTicket.COSTUMERTYPE);
    console.log(`${EnumViewConsoleTicket.PRODUCTDESCRIPTION}  ${produt.Description}`);
    console.log(`${EnumViewConsoleTicket.PRODUCTCOST}  ${this.formatter(produt.Price)}`);
    console.log(`${EnumViewConsoleTicket.VALUEPAID}  ${this.formatter(produt.Price + moneyChange)}`);
    console.log(`${EnumViewConsoleTicket.CHANGE}  ${this.formatter(moneyChange)}`);
    console.log(Decorator.DOUBLE);
    console.log();
  }

  printValidate(produt: product, moneyEntered = 0) {
    console.clear();
    console.log(Decorator.DOUBLE);
    console.log(EnumViewConsoleValidate.ORDERDETAIL);
    console.log(`${EnumViewConsoleValidate.PRODUCT} ${produt.Description}`);
    console.log(Decorator.SIMGLE);
    console.log(`${EnumViewConsoleValidate.COST} ${produt.Price}`);
    console.log(`${EnumViewConsoleValidate.VALUEPAID} ${this.formatter(moneyEntered)}`);
    console.log(Decorator.SIMGLE);
  }



  title() {
    console.clear();
    console.log(Decorator.TITLE);
    console.log(Decorator.DOUBLE);
  }

  errorInput(selector: number) {
    return `${selector} ${Decorator.ERROR_SELECTED}`;
  }
}