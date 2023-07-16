import React from "react";
import { LineWeight } from "./LineWeight";

export default {
  title: "LineWeight",
  component: LineWeight,
};

export const Default = () => <LineWeight />;
export const Fill = () => <LineWeight fill="blue" />;
export const Size = () => <LineWeight height="50" width="50" />;
export const CustomStyle = () => <LineWeight style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LineWeight className="custom-class" />;
