import { product } from '../../domain/entities/entity';
import { IDataBase } from "../../domain/interfaces/interface.repository";
import { Denominacion } from '../../common/constans/denominations.money';
import { WebUtils } from '../../common/Utils/web.utils';

export class ViewWeb {

  private producservices: IDataBase<product>;
  private utils : WebUtils;

  constructor(producservices: IDataBase<product>, util:WebUtils) {
    this.producservices = producservices;
    this.utils = util;
  }

  CardContent() {
    let container = document.getElementById("Card-containerFlex")
    let products = this.producservices.ReadAll();

    products.forEach(product => {
      let divcard = document.createElement("div");
      divcard.classList.add('card');
      divcard.innerHTML = this.utils.CardView(product);
      container?.appendChild(divcard);
      let btnPay = document.getElementById(`${product.id}`)
      btnPay!.addEventListener('click', (e) => {
        e.preventDefault();
        this.modalPayProduct(product);
      })
    });
  }
    
  modalPayProduct(product: product) {
    let modtitle = document.getElementById("ModaTitle");
    modtitle!.innerHTML = `${product.Description}`;
    let container = document.getElementById("modal-body");
    let divcontainer = document.createElement("div");
    let delettediv = container?.querySelector("div");
    if (delettediv != undefined) { container?.removeChild(delettediv); }
    divcontainer.classList.add('Card-Pay');
    divcontainer.innerHTML = this.utils.ModalView(product);
    container?.appendChild(divcontainer);
    this.denomynationPay(product);
  }

  denomynationPay(product: product) {
    let divMoneyContent = document.getElementById("divMoneyContent");
    this.btnPayEnabled(false)
    Denominacion.forEach((currency) => {
      let btnMoneyItem = document.createElement("button");
      btnMoneyItem.setAttribute("id", `${currency}`);
      btnMoneyItem.addEventListener("click", () => { this.validateMoneyEntered(currency, product.Price, product.id) })
      btnMoneyItem.classList.add("divMoneyItem");
      btnMoneyItem.innerHTML = `
      ${currency}`;
      divMoneyContent?.appendChild(btnMoneyItem);
    });
    const btnClouse = document.querySelector("#btnCancel");
    btnClouse?.addEventListener("click", () => { })
  };

  validateMoneyEntered(currency: number, price: number, idProduct: number) {
    if (currency >= price) {
      this.btnPayEnabled(true);
      let btnPay: HTMLButtonElement;
      (btnPay = document.querySelector("#btnPay") as HTMLButtonElement);
      btnPay.removeAttribute("data-dismiss");
      btnPay.setAttribute("data-dismiss", "modal");
      btnPay.removeEventListener("click", () => { this.pay(idProduct) })
      btnPay.addEventListener("click", () => { this.pay(idProduct) })
    }
  }
  pay(idProduct: number) {
    this.producservices.Update(idProduct);
    alert("Producto pagado satisfactoriamente");
  }

  btnPayEnabled(state: boolean) {
    let btnPay: HTMLButtonElement;
    (btnPay = document.querySelector("#btnPay") as HTMLButtonElement).disabled = !state;
  }
}

