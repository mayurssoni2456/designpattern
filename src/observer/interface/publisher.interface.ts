import IProduct from "./product.interface";
import ISubscriber from "./subscriber.interface";

export default interface IPublisher {
    register(subscriber: ISubscriber): void;
    deregister(subscriber: ISubscriber): void;
    notify(product: IProduct): void;
    // setData(data: any): void; // any is highly discoraged - I am using for time being
}