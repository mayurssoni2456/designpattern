import IProduct from "./product.interface";

export default interface ISubscriber {
    update(product: IProduct): void;
}