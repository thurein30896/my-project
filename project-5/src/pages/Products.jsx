import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/StateContext";
import Card from "../components/Card";

const Products = () => {
  const {state: { productList },search} = useContext(StateContext);
  const [products,setProducts] = useState([]);

  useEffect(() => {
    setProducts(productList);
  },[productList,search])


  return (
    <div className="grid grid-cols-4 gap-10 my-10">
      {products.map((product) => <Card key={product.id} product={product} />)}
    </div>
  )
};

export default Products;
