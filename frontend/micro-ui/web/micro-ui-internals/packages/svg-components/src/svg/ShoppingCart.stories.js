import React from "react";
import { ShoppingCart } from "./ShoppingCart";

export default {
  title: "ShoppingCart",
  component: ShoppingCart,
};

export const Default = () => <ShoppingCart />;
export const Fill = () => <ShoppingCart fill="blue" />;
export const Size = () => <ShoppingCart height="50" width="50" />;
export const CustomStyle = () => <ShoppingCart style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ShoppingCart className="custom-class" />;
