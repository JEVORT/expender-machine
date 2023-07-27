import { product } from "../domain/entities/entity";
import { IDataBase } from "../domain/interfaces/interface.repository";

export class ViewWeb {

  private producservices: IDataBase<product>;

  constructor(producservices: IDataBase<product>) {
    this.producservices = producservices;
  }

  tableContent() {
    let container = document.getElementById("Card-container")
    let table = document.createElement("table");
    table.classList.add("table", "table-hover", "table-dark", "table_products")
    table.setAttribute("id", "ProductsTable");
    let tableHead = document.createElement("thead");
    tableHead.classList.add("table_products_head");
    tableHead.innerHTML = `
                          <tr>
                            <th>Id</th>
                            <th>Producto</th>
                            <th>Precio</th>
                          </tr>`;
    table.appendChild(tableHead);

    let tableBody = document.createElement("tbody");
    //let tableBody = document.getElementById("table_products_body");
    tableBody.classList.add("table_products_body");
    tableBody.setAttribute("id", "table_products_body");

    let products = this.producservices.ReadAll();
    products.forEach(product => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${product.id}</td>
       <td>${product.Description}</td>
       <td>${product.Price}</td>`
      tableBody?.appendChild(tr);
    });
    table.appendChild(tableBody);
    container?.appendChild(table);
  }

  FlexContent() {
    let container = document.getElementById("Card-container")
    let products = this.producservices.ReadAll();
    products.forEach(product => {
      let divcontainer = document.createElement("div");
      divcontainer.classList.add('Card');
      divcontainer.innerHTML = `
      <div class="card-container" id="${product.id}">
        <div class="card-imgcontent">
          <img class="card-img" src="${product.imgUrl}" alt="img Produc">
        </div>
        <p class="Pdescription">${product.Description}</p>
        <p class="Pprice">$${product.Price}</p>
      </div>`
      container?.appendChild(divcontainer);
    });
  }

  pago(id:number){
    alert(id)
  }
}

