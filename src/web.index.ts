import { ProducServices } from "./app/services/produc.services";
import { ViewWeb } from "./app/services/web.view.services";
import "./assets/style.css";
//import css from "./assets/style";

const viewWebServices = new ViewWeb(new ProducServices);

window.onload = function execute() {
    //viewWebServices.tableContent();
    viewWebServices.FlexContent();
};
