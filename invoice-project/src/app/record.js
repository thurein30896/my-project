import { recordTemplate } from "./selector";

export const createRow = ({id,name,price},quantity) => {
    const cost = price * quantity;
    const rowUi = recordTemplate.content.cloneNode(true);
    rowUi.querySelector(".row-list").setAttribute("product-id",id);
    rowUi.querySelector(".row-product-name").innerText = name;
    rowUi.querySelector(".row-product-quantity").innerText = quantity;
    rowUi.querySelector(".row-product-price").innerText = price;
    rowUi.querySelector(".row-cost").innerText = cost;

    return rowUi;
}
