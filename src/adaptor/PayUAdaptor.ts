import { IPayment } from "./IPayment";
import PayUPayPayment from "./paymentLibs/PayUPayment";


export default class PayUAdaptor implements IPayment {

    payUPayment: PayUPayPayment;

    constructor(){
        this.payUPayment = new PayUPayPayment();
    }

    pay(): void {
        this.payUPayment.makePayment();
    }


}