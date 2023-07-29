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
      <div class="card">
        <img src="${product.imgUrl}" class="card-img-top" alt="Img Produc">
        <div class="card-body">
          <h5 class="card-title">${product.Description}</h5>
          <p class="card-text">${product.Price}</p>
          <button id="${product.id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalPay">
            Comprar
          </button>
        </div>
      </div>`
      container?.appendChild(divcontainer);
      let btnPay = document.getElementById(`${product.id}`)
      btnPay!.addEventListener('click', (e) => {
        e.preventDefault();
        this.payProduct(product);
      })
    });
  }

  payProduct(product: product) {
    let modtitle = document.getElementById("ModaTitle")!.innerHTML=`${product.Description}`;
    let container = document.getElementById("modal-body")
    let divcontainer = document.createElement("div");
    let delettediv = container?.querySelector("div");
    if (delettediv != undefined) { container?.removeChild(delettediv); }
    container?.innerHTML != "";
    divcontainer.classList.add('Card-Pay');
    divcontainer.innerHTML = `     
        <img src="${product.imgUrl}" class="card-img-pay" alt="Img Produc">
        <div class="card-Pay-body">
          <h5 class="card-title">${product.Description}</h5>
          <p class="card-text">${product.Price}</p>
        </div>`
    container?.appendChild(divcontainer);
  }

}

