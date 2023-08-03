import { ProducServices } from "./app/Aplication/services/produc.services";
import { ProductViwConsole } from "./app/ui/console/console.ui";
import { ProductUtils } from "./app/common/Utils/console.utils.view";
import { ViewWeb } from "./app/Aplication/services/web.view.services";


const ViewConsole = new ProductViwConsole(
    new ProducServices,
    new ProductUtils
);

ViewConsole.menu();

export const viewWebServices = new ViewWeb(new ProducServices);
