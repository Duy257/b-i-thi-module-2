"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
class ProductManagement {
    constructor() {
    }
    getAll() {
        return ProductManagement.arr;
    }
    add(t) {
        let id = ProductManagement.id++;
        t.id = id;
        ProductManagement.arr.push(t);
    }
    findByName(name) {
        for (const product of ProductManagement.arr) {
            if (product.name.includes(name)) {
                return product;
            }
        }
        return null;
    }
    findByid(id) {
        let index = -1;
        for (let i = 0; i < ProductManagement.arr.length; i++) {
            if (id == ProductManagement.arr[i].id) {
                index = i;
            }
        }
        return index;
    }
    deleteProduct(index) {
        ProductManagement.arr.splice(index, 1);
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.id = 0;
ProductManagement.arr = [];
