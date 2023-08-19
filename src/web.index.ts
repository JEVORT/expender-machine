import { ProducServices } from "./app/Aplication/services/produc.services";
import { ViewWeb } from "./app/Aplication/services/web.view.services";
import { ProductArray } from "./app/common/Utils/products.array.util";
import { WebUtils } from "./app/common/Utils/web.utils";
import "./assets/style.css";


const viewWebServices = new ViewWeb(
    new ProducServices(new ProductArray),
    new WebUtils
);

window.onload = function execute() {
    viewWebServices.CardContent();
};
