import { ProducServices } from "./app/Aplication/services/produc.services";
import { ViewWeb } from "./app/Aplication/services/web.view.services";
import "./assets/style.css";


const viewWebServices = new ViewWeb(new ProducServices);

window.onload = function execute() {
    viewWebServices.FlexContent();
};
