import React from "react";
import { LocalShipping } from "./LocalShipping";

export default {
  title: "LocalShipping",
  component: LocalShipping,
};

export const Default = () => <LocalShipping />;
export const Fill = () => <LocalShipping fill="blue" />;
export const Size = () => <LocalShipping height="50" width="50" />;
export const CustomStyle = () => <LocalShipping style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalShipping className="custom-class" />;
