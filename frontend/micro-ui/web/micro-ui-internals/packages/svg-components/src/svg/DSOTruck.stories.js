import React from "react";
import { DSOTruck } from "./DSOTruck";

export default {
  title: "DSOTruck",
  component: DSOTruck,
};

export const Default = () => <DSOTruck />;
export const Fill = () => <DSOTruck fill="blue" />;
export const Size = () => <DSOTruck height="50" width="50" />;
export const CustomStyle = () => <DSOTruck style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DSOTruck className="custom-class" />;
