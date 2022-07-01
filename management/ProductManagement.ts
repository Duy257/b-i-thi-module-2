import {Product} from "../modal/Product";

export class ProductManagement {
    private static id: number = 0;
    private static arr: Product[] = [];

    constructor() {
    }

    getAll() {
        return ProductManagement.arr;
    }

    add(t: Product) {
        let id = ProductManagement.id++
        t.id = id;
        ProductManagement.arr.push(t)
    }
    findByName(name: string): Product | null {
        for (const product of ProductManagement.arr) {
            if(product.name.includes(name)){
                return product;
            }
        }
        return null;
    }

    findByid(id: number): number {
        let index: number = -1;
        for (let i = 0; i < ProductManagement.arr.length; i++) {
            if(id == ProductManagement.arr[i].id) {
                index = i;
            }
        }
        return index;
    }

    deleteProduct(index: number) {
        ProductManagement.arr.splice(index, 1);
    }
}