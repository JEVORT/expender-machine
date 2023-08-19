import { product } from "../../domain/entities/entity";

export class WebUtils {


  CardView(product: product): string {
    return `<div class="card-img">
                <img src="${product.imgUrl}" class="card-img-top" alt="Img Produc">
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.Description}</h5>
                <p class="card-text">${this.formatter(product.Price)}</p>
            </div>
            <div class="card-actions">
                <button id="${product.id}" type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalPay">
                    Comprar
                </button>
            </div>`
  }

  ModalView(product: product): string {
    return `     
    <img src="${product.imgUrl}" class="card-img-pay" alt="Img Produc">
    <div class="card-Pay-body">
      <h5 class="card-title">${product.Description}</h5>
      <p class="card-text">${this.formatter(product.Price)}</p>
      <div id="divMoneyContent" class="divMoneyContent">

      </div>
    </div>`
  }

  formatter(number: number): string {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    })
    return formatter.format(number);
  }

}