import React from "react";
import { LocalPizza } from "./LocalPizza";

export default {
  title: "LocalPizza",
  component: LocalPizza,
};

export const Default = () => <LocalPizza />;
export const Fill = () => <LocalPizza fill="blue" />;
export const Size = () => <LocalPizza height="50" width="50" />;
export const CustomStyle = () => <LocalPizza style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalPizza className="custom-class" />;
