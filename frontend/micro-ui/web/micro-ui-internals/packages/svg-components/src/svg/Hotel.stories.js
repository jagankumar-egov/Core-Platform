import React from "react";
import { Hotel } from "./Hotel";

export default {
  title: "Hotel",
  component: Hotel,
};

export const Default = () => <Hotel />;
export const Fill = () => <Hotel fill="blue" />;
export const Size = () => <Hotel height="50" width="50" />;
export const CustomStyle = () => <Hotel style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Hotel className="custom-class" />;
