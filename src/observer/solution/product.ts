import IProduct from "../interface/product.interface";
import IPublisher from "../interface/publisher.interface";
import ISubscriber from "../interface/subscriber.interface";

export default class Product implements IProduct, IPublisher {

    id: number;
    name: string;
    price: number;
    _stock: number;
    subscribers: ISubscriber[] = [];

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this._stock = stock;
    }


    get stock(): number
    {
      return this._stock
    }
    set stock( value: number )
    {
      this._stock = value;
      this.notify(this);
    }

    // setStock(value: number) {
    //     this.stock = value;
    //     // this.notify(this);
    // }
    
    register(subscriber: ISubscriber): void {
        console.log("====Subscribered to Product");
        this.subscribers.push(subscriber);
    }

    deregister(subscriber: ISubscriber): void {
        console.log("====UnSubscribered to Product");
        this.subscribers = this.subscribers.filter(obs => obs !== subscriber); // HomeScreenTop and HomeScreenBottom
    }

    notify(product: IProduct): void {
        console.log("====Notifying Subscribers");
        this.subscribers.forEach(subscriber => {
            subscriber.update(product)
        });
    }

}