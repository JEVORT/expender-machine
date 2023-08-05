import { IDataBase, IProductsArray } from "../../domain/interfaces/interface.repository";
import { product } from "../../domain/entities/entity";


export class ProducServices implements IDataBase<product> {
  private productList: product[];

  constructor(productsArray: IProductsArray) {
    this.productList = productsArray.GetProducts();
  }
  
  Create(product: product): boolean {
    this.productList.push(product);
    return true;
  }

  ReadAll(): product[] {
    return this.productList;
  }

  Update(id: number): boolean {
    let index = this.productList.findIndex(product => product.id == id);

    if (index >= 0) {
      this.productList[index].Stock -= 1;
      return true;
    } else {
      return false;
    }
  }

  Delette(id: number): boolean {
    let index = this.productList.findIndex(product => product.id == id);
    this.productList.splice(index, 1);
    return true;
  }

  ReadById(id: number): product | undefined {
    let product = this.productList.find(product => product.id == id);
    return product;
  }
}