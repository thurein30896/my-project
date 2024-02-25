import { recordRow, totalCost } from "./selector.js";

export const updateTotalCost = () => {
  const allRowCost = document.querySelectorAll(".row-cost");
  totalCost.innerText = [...allRowCost].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
};

export const deleteRow = (e) => {
  const rowList = e.target.closest(".row-list");
  rowList.remove();
//   updateTotalCost();
};

export const updateQuantity = (productId, q) => {
  //   const rowList = e.target.closest(".row-list");
  const rowList = document.querySelector(`[product-id = '${productId}']`);
  const currentQuantity = rowList.querySelector(".row-product-quantity");
  const productPrice = rowList.querySelector(".row-product-price");
  const currentCost = rowList.querySelector(".row-cost");
  if (q > 0 || currentQuantity.innerText > 1)
    currentQuantity.innerText = parseInt(currentQuantity.innerText) + q;
  currentCost.innerText = currentQuantity.innerText * productPrice.innerText;
//   updateTotalCost();
};

export const recordObserver = () => {
  const run = () => {
    updateTotalCost();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
  };

  const observer = new MutationObserver(run);
  observer.observe(recordRow,observerOptions);
};
