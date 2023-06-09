import { Subject } from "rxjs/internal/Subject";


export class productsService {
    private products = ['A Book'];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next(productName);
    }

    getProduct() {
        return [...this.products];
    }

    deleteProduct(productName: string){
        this.products = this.products.filter( p => p !== productName );
        this.productsUpdated.next(productName);
    }
}