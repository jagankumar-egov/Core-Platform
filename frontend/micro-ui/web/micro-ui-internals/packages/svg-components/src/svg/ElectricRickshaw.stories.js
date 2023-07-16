import React from "react";
import { ElectricRickshaw } from "./ElectricRickshaw";

export default {
  title: "ElectricRickshaw",
  component: ElectricRickshaw,
};

export const Default = () => <ElectricRickshaw />;
export const Fill = () => <ElectricRickshaw fill="blue" />;
export const Size = () => <ElectricRickshaw height="50" width="50" />;
export const CustomStyle = () => <ElectricRickshaw style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ElectricRickshaw className="custom-class" />;
