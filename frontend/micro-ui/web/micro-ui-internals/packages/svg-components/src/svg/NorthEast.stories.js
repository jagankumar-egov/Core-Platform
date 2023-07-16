import React from "react";
import { NorthEast } from "./NorthEast";

export default {
  title: "NorthEast",
  component: NorthEast,
};

export const Default = () => <NorthEast />;
export const Fill = () => <NorthEast fill="blue" />;
export const Size = () => <NorthEast height="50" width="50" />;
export const CustomStyle = () => <NorthEast style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NorthEast className="custom-class" />;
