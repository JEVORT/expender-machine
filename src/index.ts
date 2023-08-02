import { ProducServices } from "./app/services/produc.services";
import { ProductViwConsole } from "./app/ui/console/console.ui.utils";
import { ProductUtils } from "./app/common/Utils/products.utils.view";
import { ViewWeb } from "./app/services/web.view.services";


const ViewConsole = new ProductViwConsole(
    new ProducServices,
    new ProductUtils
);

ViewConsole.menu();

export const viewWebServices = new ViewWeb(new ProducServices);
