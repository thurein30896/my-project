import { deleteRow, updateQuantity, updateTotalCost } from "./function.js";
import { initialRender } from "./product.js";
import { createRow } from "./record.js";
import { addRecordForm, createProduct, recordRow, totalCost } from "./selector.js";
import { products } from "./variable.js";

export const addRecordFormHandler = (e) => {
  e.preventDefault();
  const formData = new FormData(addRecordForm);
  const currentId = parseInt(formData.get("productSelect"));
  const currentQuantity = parseInt(formData.get("productQuantity"));
  const currentProduct = products.find((product) => product.id === currentId);
  
  const isExitedRecord = recordRow.querySelector(`[product-id= '${currentId}']`);

    if(isExitedRecord) {
        updateQuantity(isExitedRecord.getAttribute('product-id'),currentQuantity);
    }else{
        recordRow.append(createRow(currentProduct, currentQuantity));
    }
  
//   updateTotalCost();
  addRecordForm.reset();
};

export const recordRowHandler = (e) => {
  if (e.target.classList.contains("row-del-btn")) {
    deleteRow(e);
  } else if (e.target.classList.contains("row-add-q")) {
    const add = e.target.closest(".row-list").getAttribute('product-id');
    updateQuantity(add,1);
  } else if (e.target.classList.contains("row-sub-q")) {
    const sub = e.target.closest(".row-list").getAttribute('product-id');
    updateQuantity(sub,-1);
  }
};

export const createProductHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(createProduct);
    const newProduct = {
        id : Date.now(),
        name : formData.get("name"),
        price : formData.get("price")
    }
    products.push(newProduct);
    initialRender();
    createProduct.reset();
}


export const printBtnHandler = () => {
    print();
}