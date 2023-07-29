import { product } from './../domain/entities/entity';
import { IDataBase } from "../domain/interfaces/interface.repository";

export class ViewWeb {

  private producservices: IDataBase<product>;

  constructor(producservices: IDataBase<product>) {
    this.producservices = producservices;
  }

  FlexContent() {
    let container = document.getElementById("Card-containerFlex")
    let products = this.producservices.ReadAll();
    products.forEach(product => {
      let divcontainer = document.createElement("div");
      divcontainer.classList.add('Card');
      divcontainer.innerHTML = `     
      <div class="card" style="width: 18rem;">
        <img src="${product.imgUrl}" class="card-img-top" alt="Img Produc">
        <div class="card-body">
          <h5 class="card-title">${product.Description}</h5>
          <p class="card-text">${product.Price}</p>
          <a id="${product.id}" href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      container?.appendChild(divcontainer);
      let btnPay = document.getElementById(`${product.id}`)
      btnPay!.addEventListener('click', (e) => {
        e.preventDefault();
        this.pago(product);
      })

    });
  }

  pago(product: product) {
    console.log(product)
  }

}

