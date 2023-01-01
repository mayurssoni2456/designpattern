import IProduct from "../interface/product.interface";
import ISubscriber from "../interface/subscriber.interface";
import Product from "./product";

export default class HomeSection1 implements ISubscriber {
  
    // product: IProduct;
    
    // constructor(product: IProduct) {
    //     this.product = product;
    // }

    display(product: IProduct) {
        console.log("=======Section 1");
        console.log(product);
    }

    update(product: IProduct): void {
        this.display(product);
    }
}