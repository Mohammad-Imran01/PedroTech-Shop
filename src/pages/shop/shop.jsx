import React from "react";
import { PRODUCTS } from "./../../product";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
	return (
		<div className="shop">
			<div className="shopTitle">PedroTech Shop</div>
			<div className="products">
				{PRODUCTS.map((product) => (
					<Product data={product} />
				))}
			</div>
		</div>
	);
};
