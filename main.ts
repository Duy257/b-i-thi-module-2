import {MenuAdmin} from "./menu/menu-admin";
import {Product} from "./modal/Product";
import {ProductManagement} from "./management/ProductManagement";


let pro1 = new Product( 'rau muống', 'rau củ', 10000, 100, '20/6', 'dùng để ăn')
let pro2 = new Product( 'rau cải', 'rau củ', 15000, 111, '20/6', 'dùng để ăn')
let pro3 = new Product( 'cà chua', 'rau củ', 20000, 200, '20/6', 'dùng để ăn')


let productManager = new ProductManagement()
productManager.add(pro1)
productManager.add(pro2)
productManager.add(pro3)

let menuAdmin = new MenuAdmin();
menuAdmin.run();