import { product } from './../domain/entities/entity';
import { IDataBase } from "../domain/interfaces/interface.repository";

export class ViewWeb {

  private producservices: IDataBase<product>;

  constructor(producservices: IDataBase<product>) {
    this.producservices = producservices;
  }

  tableContent() {
    let btnflex = document.getElementById("flex");
    let btntable = document.getElementById("table");

    btnflex?.addEventListener('click', () => {
      this.selectView("flex");
    })

    btntable?.addEventListener('click', () => {
      this.selectView("table");
    })

    let container = document.getElementById("Card-containerTable")
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
      btnPay!.addEventListener('click', (e)=>{
        e.preventDefault();
        this.pago(product);
      })

    });
  }

  selectView(view: string) {

    let contendTable = document.getElementById("Card-containerTable");
    let contendFlex = document.getElementById("Card-containerFlex");
    console.log(contendTable);
    if (view == "flex") {
      console.log("flex");
      console.log(view)
      contendFlex!.style.display = "flex";
      contendTable!.style.display = "none";
    } else {
      console.log("table");
      contendFlex!.style.display = "none";
      contendTable!.style.display = "flex";
    }
  }

  pago(product:product){
    console.log(product)
  }

}

