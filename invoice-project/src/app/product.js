import { productGroup, productSelect, productTemplate } from "./selector";
import { products } from "./variable"

const createProduct = ({name,price}) => {
    const productUi = productTemplate.content.cloneNode(true);
    productUi.querySelector(".product-name").innerText = name;
    productUi.querySelector(".product-price").innerText = price;
    return productUi;
}

export const initialRender = () => {
    productSelect.innerHTML = "";
    productGroup.innerHTML = "";
    products.map(({name,price,id}) => {
        productSelect.append(new Option(`${name}-${price}`,id));
        productGroup.append(createProduct({name,price}));
    });
}