import { ProducServices } from "./app/Aplication/services/produc.services";
import { ProductViwConsole } from "./app/ui/console/console.ui";
import { ProductUtils } from "./app/common/Utils/console.utils.view";


const ViewConsole = new ProductViwConsole(
    new ProducServices,
    new ProductUtils
);

ViewConsole.menu();

