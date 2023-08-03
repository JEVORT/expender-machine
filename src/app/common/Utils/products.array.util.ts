import { product } from "../../domain/entities/entity";

export function products() {
  let ProductsList: product[] = [
    {
      id: 1,
      Description: "Cocacola",
      Stock: 10,
      Price: 3400,
      imgUrl: 'https://distriplaza.co/wp-content/uploads/2021/01/DISTRIPLAZA.COM-43-1.jpg'
    },
    {
      id: 2,
      Description: "Kola Roman",
      Stock: 10,
      Price: 1800,
      imgUrl: 'https://static.merqueo.com/images/products/large/16f337b1-c04e-4835-92ae-ad259876b4fd.jpg'
    },
    {
      id: 3,
      Description: "Pepsi",
      Stock: 10,
      Price: 1300,
      imgUrl: 'https://delifsupermarket.com/cdn/shop/products/37_5e6fc90d-a7b5-49a5-bc07-8895ed75b06c_580x.jpg?v=1654287809'
    },
    {
      id: 4,
      Description: "7Up",
      Stock: 10,
      Price: 2800,
      imgUrl: 'https://sopranos.localhero.com.co/uploads/lh37_sopranos/products/65/es/img-7UP-en-lata.jpg'
    },
    {
      id: 5,
      Description: "Manzana Postobon",
      Stock: 10,
      Price: 3100,
      imgUrl: 'https://labodeguita-i01.mycdn.no/mysimgprod/labodeguita_mystore_no/images/93752_Postobon_MANZANA_POSTOBON_LATA_330m_1.png/w800h800.png'
    },
    {
      id: 6,
      Description: "Sprite",
      Stock: 10,
      Price: 2700,
      imgUrl: 'https://chedrauimx.vtexassets.com/arquivos/ids/15859378/7501055366347_00.jpg?v=638235822576800000'
    },
    {
      id: 7,
      Description: "Pony Malta",
      Stock: 10,
      Price: 3800,
      imgUrl: 'https://copservir.vtexassets.com/arquivos/ids/763098-800-auto?v=637950264379470000&width=800&height=auto&aspect=true'
    },
    {
      id: 8,
      Description: "Agua Botella",
      Stock: 10,
      Price: 2000,
      imgUrl: 'https://copservir.vtexassets.com/arquivos/ids/763878-800-auto?v=637950268175700000&width=800&height=auto&aspect=true'
    },

    {
      id: 9,
      Description: "Doritos",
      Stock: 10,
      Price: 2000,
      imgUrl: 'https://mercaldas.vtexassets.com/arquivos/ids/1307192/Doritos-FRITO-LAY-mega-queso-x185-g_36405.jpg?v=638175902723900000'
    },
    {
      id: 10,
      Description: "Papas Pollo",
      Stock: 10,
      Price: 1800,
      imgUrl: 'https://exitocol.vtexassets.com/arquivos/ids/18256319/Papas-fritas-sabor-a-pollo-MARGARITA-250-Gramo-892837_a.jpg?v=638188453948230000'
    },
    {
      id: 11,
      Description: "Papas Narural",
      Stock: 10,
      Price: 1900,
      imgUrl: 'https://exitocol.vtexassets.com/arquivos/ids/18259592/Papas-Fritas-Natural-MARGARITA-65-gr-3061833_a.jpg?v=638188552108070000'
    },
    {
      id: 12,
      Description: "Rosquitas Queso",
      Stock: 2,
      Price: 1200,
      imgUrl: 'https://www.servipan.com.co/wp-content/uploads/2020/11/018-1-1024x1024.jpg'
    }
  ]
  return ProductsList;
}

