import React from "react";
import { LineStyle } from "./LineStyle";

export default {
  title: "LineStyle",
  component: LineStyle,
};

export const Default = () => <LineStyle />;
export const Fill = () => <LineStyle fill="blue" />;
export const Size = () => <LineStyle height="50" width="50" />;
export const CustomStyle = () => <LineStyle style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LineStyle className="custom-class" />;
