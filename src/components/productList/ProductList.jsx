import React from "react";
import Product from "../product/Product";
import { products } from "../../data";
import "./productList.css";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire</h1>
        <p className="pl-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          consectetur fugiat delectus earum id esse sequi itaque dolorum
          voluptates perferendis ut voluptatem alias, nisi numquam nihil non
          culpa consequuntur ab.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
