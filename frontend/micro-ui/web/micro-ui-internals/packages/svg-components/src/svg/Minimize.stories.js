import React from "react";
import { Minimize } from "./Minimize";

export default {
  title: "Minimize",
  component: Minimize,
};

export const Default = () => <Minimize />;
export const Fill = () => <Minimize fill="blue" />;
export const Size = () => <Minimize height="50" width="50" />;
export const CustomStyle = () => <Minimize style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Minimize className="custom-class" />;
