import { IPayment } from "./IPayment";
import RazonPayAdaptor from "./RazorPayAdaptor";



export default class AdaptorApplication {

    paymentG: IPayment;
    constructor(){

        // Case - 1: In Future, let's say some payment gateway is down, we can switch to other payment gateway
        // 
        this.paymentG = new RazonPayAdaptor();        
    }

    process(){
        this.paymentG.pay();
    }
}