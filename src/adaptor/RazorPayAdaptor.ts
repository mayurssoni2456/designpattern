import { IPayment } from "./IPayment";
import RazonPayPayment from "./paymentLibs/RazonPayPayment";



export default class RazonPayAdaptor implements IPayment {

    rayzorPay: RazonPayPayment;

    constructor(){
        this.rayzorPay = new RazonPayPayment();
    }

    pay(): void {
        this.rayzorPay.processPayment();
    }


}