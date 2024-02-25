import { listener } from "./app/listener.js";
import { observer } from "./app/observer.js";
import { initialRender } from "./app/product.js";

class Invoice {
    init() {
        console.log("App Start");
        initialRender();
        listener();
        observer();
    }
}


export default Invoice;