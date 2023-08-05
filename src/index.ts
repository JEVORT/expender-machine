import { ProducServices } from "./app/Aplication/services/produc.services";
import { ProductViwConsole } from "./app/ui/console/console.ui";
import { ProductUtils } from "./app/common/Utils/console.utils.view";
import { ProductArray } from "./app/common/Utils/products.array.util";


const ViewConsole = new ProductViwConsole(
    new ProducServices(new ProductArray),
    new ProductUtils
);

ViewConsole.menu();

