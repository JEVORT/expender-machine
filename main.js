var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("app/domain/entities/entity", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("app/common/Utils/products.array.util", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.products = void 0;
    function products() {
        let ProductsList = [
            {
                id: 1,
                Description: "Cocacola",
                Stock: 10,
                Price: 1500
            },
            {
                id: 2,
                Description: "Pepsi",
                Stock: 10,
                Price: 1300
            },
            {
                id: 3,
                Description: "Doritos",
                Stock: 10,
                Price: 2000
            },
            {
                id: 4,
                Description: "Papas Pollo",
                Stock: 10,
                Price: 1800
            },
            {
                id: 5,
                Description: "Papas Picantes",
                Stock: 10,
                Price: 1900
            },
            {
                id: 6,
                Description: "Rosquitas Queso",
                Stock: 10,
                Price: 1200
            }
        ];
        return ProductsList;
    }
    exports.products = products;
});
define("app/domain/interfaces/interface.repository", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("app/services/produc.services", ["require", "exports", "app/common/Utils/products.array.util"], function (require, exports, products_array_util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProducServices = void 0;
    class ProducServices {
        Create(product) {
            let productList = (0, products_array_util_1.products)();
            productList.push(product);
            return true;
        }
        ReadById(id) {
            let productList = (0, products_array_util_1.products)();
            let product = productList.find(product => product.id == id);
            return product;
        }
        ReadAll() {
            return (0, products_array_util_1.products)();
        }
        Update(id) {
            let productList = (0, products_array_util_1.products)();
            let index = productList.findIndex(product => product.id == id);
            if (index >= 0) {
                productList[index].Stock -= 1;
                return true;
            }
            else {
                return false;
            }
        }
        Delette(id) {
            let productList = (0, products_array_util_1.products)();
            let index = productList.findIndex(product => product.id == id);
            productList.slice(index, 1);
            return true;
        }
    }
    exports.ProducServices = ProducServices;
});
define("app/common/constans/denominations.money", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Denominacion = void 0;
    exports.Denominacion = [
        100000,
        50000,
        20000,
        10000,
        5000,
        2000,
        1000
    ];
});
define("app/common/Utils/products.utils.view", ["require", "exports", "scanf"], function (require, exports, scanf_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductUtils = void 0;
    scanf_1 = __importDefault(scanf_1);
    class ProductUtils {
        formatter(number) {
            const formatter = new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 0
            });
            return formatter.format(number);
        }
        validatespaces(str) {
            let spaces = 22 - str.length;
            for (let index = 0; index < spaces; index++) {
                str += " ";
            }
            return str;
        }
        proccesReturn() {
            console.log("Presione Enter para volver al menu principal");
            process.stdout.write("/>: ");
            (0, scanf_1.default)("%s");
            console.clear();
        }
    }
    exports.ProductUtils = ProductUtils;
});
define("app/common/constans/menu", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.title = exports.Decorator = exports.menu = void 0;
    exports.menu = [
        "Listar",
        "Comprar",
        "Salir"
    ];
    var Decorator;
    (function (Decorator) {
        Decorator["SIMGLE"] = "--------------------------------------";
        Decorator["DOUBLE"] = "======================================";
        Decorator["ASTERISK"] = "***********************************";
    })(Decorator || (exports.Decorator = Decorator = {}));
    ;
    function title() {
        console.log(`
${Decorator.DOUBLE}
       MAQUINA EXPENDEDORA
           Bienvenido
${Decorator.DOUBLE}`);
    }
    exports.title = title;
});
define("app/ui/console/products.ui.console", ["require", "exports", "scanf", "app/common/constans/menu", "app/common/constans/denominations.money"], function (require, exports, scanf_2, menu_1, denominations_money_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProductViwConsole = void 0;
    scanf_2 = __importDefault(scanf_2);
    class ProductViwConsole {
        appServices;
        productutils;
        constructor(appServices, producutils) {
            this.appServices = appServices;
            this.productutils = producutils;
        }
        menu() {
            console.clear();
            var scanf = require('scanf');
            let selector = 0;
            let selectValue;
            let validateError = false;
            while (selector != menu_1.menu.length) {
                console.clear();
                (0, menu_1.title)();
                menu_1.menu.forEach((menu, index) => {
                    console.log(`*  ${index + 1} - ${this.productutils.validatespaces(menu)}        *`);
                });
                console.log(menu_1.Decorator.DOUBLE);
                validateError ? console.log(`${selector} No es una opcion valida`) : console;
                process.stdout.write("/>: ");
                selector = scanf('%d');
                selectValue = menu_1.menu[selector - 1];
                switch (selectValue) {
                    case 'Listar':
                        this.ViweList();
                        this.productutils.proccesReturn();
                        break;
                    case 'Comprar':
                        this.ViweBuy();
                        this.productutils.proccesReturn();
                        break;
                    case 'Salir':
                        this.exitAplication();
                        break;
                    default:
                        validateError = true;
                        break;
                }
            }
        }
        ViweList() {
            console.clear();
            (0, menu_1.title)();
            console.log(" ");
            console.log(" ******  LISTA DE PRODUCTOS  *********");
            let productList = this.appServices.ReadAll();
            productList.forEach(product => console.log(`${menu_1.Decorator.SIMGLE}
    ${product.id} : ${this.productutils.validatespaces(product.Description)} ${this.productutils.formatter(product.Price)}`));
            console.log();
        }
        ViweBuy() {
            console.clear();
            this.ViweList();
            process.stdout.write("Seleccione el producto />: ");
            let idProduct = (0, scanf_2.default)('%d');
            let productSelected = this.appServices.ReadById(idProduct);
            if (productSelected == undefined) {
                console.log("No se encontro registro");
            }
            else {
                let moneyEntered = 0;
                let moneyReturned = 0;
                let productCost = productSelected.Price;
                let Description = productSelected.Description;
                moneyReturned = this.validatePayment(productSelected);
                moneyEntered = productCost + moneyReturned;
                console.clear();
                console.log("\n==============================================");
                console.log("     Tiqket de compra ");
                console.log("\nCliente: Generic Client");
                console.log(`\nProducto       :  ${Description}`);
                console.log(`Costo          :  ${this.productutils.formatter(productCost)}`);
                console.log(`Valor Pagado   :  ${this.productutils.formatter(moneyEntered)}`);
                console.log(`Cambio         :  ${this.productutils.formatter(moneyReturned)}`);
                console.log("==============================================");
                console.log(" ");
            }
        }
        validatePayment(productSelected) {
            let moneyEntered = 0;
            let productCost = productSelected.Price;
            let Description = productSelected.Description;
            let ItemDenominationSelect;
            while (moneyEntered < productCost) {
                console.clear();
                moneyEntered > 0 ? console.log("Dinero Insuficiente") : " ";
                console.log("=======================================");
                console.log("-------Detalles del pedido ------------");
                console.log(`Producto: ${Description}`);
                console.log("--------------------------------------");
                console.log(`costo: ${productCost}`);
                console.log(`Dinero ingresado: ${this.productutils.formatter(moneyEntered)}`);
                console.log("--------------------------------------");
                denominations_money_1.Denominacion.forEach((billete, index) => console.log(`${index + 1} : ${this.productutils.formatter(billete)}`));
                ItemDenominationSelect = (0, scanf_2.default)('%d');
                if (ItemDenominationSelect > 0 && ItemDenominationSelect <= 7) {
                    moneyEntered += denominations_money_1.Denominacion[ItemDenominationSelect - 1];
                }
                else {
                    console.log("Seleccion invalida");
                }
            }
            return moneyEntered - productCost;
        }
        exitAplication() {
            console.clear();
            console.log(menu_1.Decorator.DOUBLE);
            console.log(" Gracias por usar nuestros servicios");
            console.log(menu_1.Decorator.DOUBLE);
            console.log();
        }
    }
    exports.ProductViwConsole = ProductViwConsole;
});
define("app/services/web.view.services", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ViewWeb = void 0;
    class ViewWeb {
        producservices;
        constructor(producservices) {
            this.producservices = producservices;
        }
        tableContent() {
            let table = document.getElementById("table_products_body");
            let products = this.producservices.ReadAll();
            products.forEach(product => {
                let tr = document.createElement("tr");
                tr.innerHTML = `<th>${product.id}</th>
      <td>${product.Description}</td>
      <td>${product.Price}</td>`;
                table?.appendChild(tr);
            });
        }
    }
    exports.ViewWeb = ViewWeb;
});
define("index", ["require", "exports", "app/services/produc.services", "app/ui/console/products.ui.console", "app/common/Utils/products.utils.view", "app/services/web.view.services"], function (require, exports, produc_services_1, products_ui_console_1, products_utils_view_1, web_view_services_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.viewWebServices = void 0;
    const ViewConsole = new products_ui_console_1.ProductViwConsole(new produc_services_1.ProducServices, new products_utils_view_1.ProductUtils);
    ViewConsole.menu();
    exports.viewWebServices = new web_view_services_1.ViewWeb(new produc_services_1.ProducServices);
});
