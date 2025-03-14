import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import {renderOrderSummary} from "./checkout/orderSummary.js"; 
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js'

async function loadPage() {
  try {
    // throw 'error1';

    await loadProductsFetch();

    // Because loadProducts not promise
    const value3 = await new Promise((resolve, reject) => {
      loadCart(() => {
        // throw 'error2';
        // reject('error3);
        resolve('value1');
      });
    });
  } catch(error) {
    console.log('Unexpected error. Please try again later.');
  }

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  // console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/