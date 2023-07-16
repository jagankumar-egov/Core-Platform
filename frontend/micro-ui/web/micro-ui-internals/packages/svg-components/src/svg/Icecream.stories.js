import React from "react";
import { Icecream } from "./Icecream";

export default {
  title: "Icecream",
  component: Icecream,
};

export const Default = () => <Icecream />;
export const Fill = () => <Icecream fill="blue" />;
export const Size = () => <Icecream height="50" width="50" />;
export const CustomStyle = () => <Icecream style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Icecream className="custom-class" />;
