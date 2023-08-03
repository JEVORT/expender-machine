import { products } from "../../common/Utils/products.array.util";
import { IDataBase } from "../../domain/interfaces/interface.repository";
import { product } from "../../domain/entities/entity";


export class ProducServices implements IDataBase<product> {

  Create(product: product): boolean {
    let productList = products();
    productList.push(product);
    return true;
  }

  ReadById(id: number): product | undefined {
    let productList = products();
    let product = productList.find(product => product.id == id);
    return product;
  }

  ReadAll(): product[] {
    return products();
  }

  Update(id: number): boolean {
    let productList = products();
    let index = productList.findIndex(product => product.id == id);

    if (index >= 0) {
      productList[index].Stock -= 1;
      return true;
    } else {
      return false;
    }
  }

  Delette(id: number): boolean {
    let productList = products();
    let index = productList.findIndex(product => product.id == id);
    productList.splice(index, 1);
    return true;
  }
}