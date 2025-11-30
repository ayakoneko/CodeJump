import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

async function loadPage(){
    try{
        // throw 'error1';
        
        await loadProductsFetch();

        const value = await new Promise((resolve) => {
            loadCart(() => {
                resolve('value3');
            });
        });

    } catch (error){
        console.log('Unexpected error.');   
    }
    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

