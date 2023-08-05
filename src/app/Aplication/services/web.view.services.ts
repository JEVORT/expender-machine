import { product } from '../../domain/entities/entity';
import { IDataBase } from "../../domain/interfaces/interface.repository";
import { Denominacion } from '../../common/constans/denominations.money';

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
    let modtitle = document.getElementById("ModaTitle");
    modtitle!.innerHTML = `${product.Description}`;
    let container = document.getElementById("modal-body");
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
          <div id="divMoneyContent" class="divMoneyContent">

          </div>
        </div>`
    container?.appendChild(divcontainer);
    this.denomynationPay(product.Price);
  }

  denomynationPay(price: number) {
    let divMoneyContent = document.getElementById("divMoneyContent");
    this.btnPayEnabled(false)
    Denominacion.forEach((currency) => {
      let divMoneyItem = document.createElement("div");
      divMoneyItem.setAttribute("id", `${currency}`);
      divMoneyItem.addEventListener("click", () => { this.validateMoneyEntered(currency, price) })
      divMoneyItem.classList.add("divMoneyItem");
      divMoneyItem.innerHTML = `
      ${currency}
      `;
      divMoneyContent?.appendChild(divMoneyItem);
    });
    const btnClouse = document.querySelector("#btnCancel");
    btnClouse?.addEventListener("click", () => { })
  };

  validateMoneyEntered(currency: number, price: number) {
    if (currency >= price) {
      this.btnPayEnabled(true);
      let btnPay: HTMLButtonElement;
      (btnPay = document.querySelector("#btnPay") as HTMLButtonElement);
      btnPay.setAttribute("data-dismiss", "modal")
      btnPay.addEventListener("click",()=>{this.pay()})
    }

  }
  pay() {
   
  }

  btnPayEnabled(state: boolean) {
    let btnPay: HTMLButtonElement;
    (btnPay = document.querySelector("#btnPay") as HTMLButtonElement).disabled = !state;
  }

}

