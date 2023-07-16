import React from "react";
import { ElectricalServices } from "./ElectricalServices";

export default {
  title: "ElectricalServices",
  component: ElectricalServices,
};

export const Default = () => <ElectricalServices />;
export const Fill = () => <ElectricalServices fill="blue" />;
export const Size = () => <ElectricalServices height="50" width="50" />;
export const CustomStyle = () => <ElectricalServices style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ElectricalServices className="custom-class" />;
