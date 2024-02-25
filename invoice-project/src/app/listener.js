import { addRecordFormHandler, createProductHandler, printBtnHandler, recordRowHandler } from "./handler.js"
import { addRecordForm, createProduct, printBtn, recordRow } from "./selector.js"

export const listener = () => {
    addRecordForm.addEventListener("submit",addRecordFormHandler);
    recordRow.addEventListener("click",recordRowHandler);
    createProduct.addEventListener("submit",createProductHandler);
    printBtn.addEventListener("click",printBtnHandler);
}