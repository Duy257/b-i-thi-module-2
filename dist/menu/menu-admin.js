"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuAdmin = void 0;
const rl = __importStar(require("readline-sync"));
const ProductManagement_1 = require("../management/ProductManagement");
const Product_1 = require("../modal/Product");
class MenuAdmin {
    run() {
        let login = -1;
        do {
            let choice = -1;
            console.log('---Đây là Menu Admin---');
            console.log('1. Hiển thị danh sách sản phẩm');
            console.log('2. Thêm sản phẩm mới');
            choice = +rl.question('Nhập lựa chọn của bạn: ');
            switch (choice) {
                case 1:
                    this.showAllProduct();
                    break;
                case 2:
                    this.addProduct();
                    break;
            }
        } while (login != 0);
    }
    //Hiển thị toàn bộ sản phẩm
    showAllProduct() {
        let products = MenuAdmin.productManager.getAll();
        for (let i = 0; i < products.length; i++) {
            console.log(`      Mã sản phẩm: ${products[i].id} Tên: ${products[i].name}, Giá: ${products[i].price}, Loại hàng: ${products[i].sectors}, Số lượng: ${products[i].amount}, Ngày tạo: ${products[i].dateCreat}, Mô tả: ${products[i].describe}`);
        }
        let choice = -1;
        console.log('\n1. Tìm kiếm mặt hàng');
        console.log('2. Sửa thông tin mặt hàng');
        console.log('3. xoá mặt hàng');
        console.log('0. Thoát\n');
        choice = +rl.question('Mời nhập lựa chọn của bạn: ');
        switch (choice) {
            case 1:
                let name = rl.question('Nhập tên mặt hàng: ');
                this.searchProduct(name);
                break;
            case 2:
                console.log('\n---Sửa sản phẩm---');
                this.fixProduct();
                break;
            case 3:
                console.log('\n---Xoá sản phẩm---');
                this.deleteProduct();
                break;
            case 0:
                break;
        }
    }
    //thêm sản phẩm
    addProduct() {
        let name = rl.question('Nhập tên sản phẩm: ');
        let sector = rl.question('Nhập loại hàng: ');
        let price = +rl.question('Nhập giá: ');
        let amount = +rl.question('Nhập số lượng: ');
        let dateCreat = rl.question('Nhập ngày tạo: ');
        let describe = rl.question('Nhập mô tả: ');
        let product = new Product_1.Product(name, sector, price, amount, dateCreat, describe);
        MenuAdmin.productManager.add(product);
    }
    //tìm kiếm sản phẩm
    searchProduct(name) {
        let product = MenuAdmin.productManager.findByName(name);
        if (product) {
            console.log(product);
        }
        else {
            console.log('Không tìm thấy mặt hàng!');
        }
    }
    //xoá sản phẩm
    deleteProduct() {
        let id = +rl.question('Nhập mã sản phẩm muốn xoá: ');
        let findbyId = MenuAdmin.productManager.findByid(id);
        if (findbyId) {
            MenuAdmin.productManager.deleteProduct(findbyId);
        }
        else {
            console.log('Không tìm thấy sản phẩm!');
        }
    }
    fixProduct() {
        let choice = true;
        do {
            let name = rl.question('nhập tên sản phẩm: ');
            let findProduct = MenuAdmin.productManager.findByName(name);
            if (findProduct) {
                choice = true;
                let newName = rl.question('Nhập tên mới: ');
                let newPrice = +rl.question('Nhập giá mới');
                let newAmount = +rl.question('Nhập số lượng mới: ');
                let newDateCreat = rl.question('Nhập lại ngày tạo: ');
                let newDescribe = rl.question('nhập lại mô tả: ');
                findProduct.name = newName;
                findProduct.price = newPrice;
                findProduct.amount = newAmount;
                findProduct.dateCreat = newDateCreat;
                findProduct.describe = newDescribe;
            }
            else {
                choice = false;
                console.log('Không tìm thấy sản phẩm!');
            }
        } while (!choice);
    }
}
exports.MenuAdmin = MenuAdmin;
MenuAdmin.productManager = new ProductManagement_1.ProductManagement();
