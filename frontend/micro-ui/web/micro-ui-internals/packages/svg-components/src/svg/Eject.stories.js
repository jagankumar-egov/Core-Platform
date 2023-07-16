import React from "react";
import { Eject } from "./Eject";

export default {
  title: "Eject",
  component: Eject,
};

export const Default = () => <Eject />;
export const Fill = () => <Eject fill="blue" />;
export const Size = () => <Eject height="50" width="50" />;
export const CustomStyle = () => <Eject style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Eject className="custom-class" />;
