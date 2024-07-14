import React, { useEffect, useState } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Main() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      getAllProducts();
    }, []);
  
    const getAllProducts = () => {
      fetch("http://localhost:8000/api/products/")
        .then((res) => res.json())
        .then((products) => setAllProducts(products));
    };
  
  return (
    <>
      {" "}
      <ProductsTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      />
    </>
  );
}
