import scanf from "scanf";

export class ProductUtils {

  formatter(number: number): string {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })
    return formatter.format(number);
  }

  validatespaces(str:string):string{
    let spaces = 22 - str.length;
    for (let index = 0; index < spaces; index++) {
      str+=" " 
    }
    return str;
  }

  proccesReturn(){
    console.log("Presione Enter para volver al menu principal")
    process.stdout.write("/>: ")
    scanf("%s");
    console.clear();
  }
}