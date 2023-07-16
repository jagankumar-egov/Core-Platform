import React from "react";
import { ElectricCar } from "./ElectricCar";

export default {
  title: "ElectricCar",
  component: ElectricCar,
};

export const Default = () => <ElectricCar />;
export const Fill = () => <ElectricCar fill="blue" />;
export const Size = () => <ElectricCar height="50" width="50" />;
export const CustomStyle = () => <ElectricCar style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ElectricCar className="custom-class" />;
