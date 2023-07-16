import React from "react";
import { PrintDisabled } from "./PrintDisabled";

export default {
  title: "PrintDisabled",
  component: PrintDisabled,
};

export const Default = () => <PrintDisabled />;
export const Fill = () => <PrintDisabled fill="blue" />;
export const Size = () => <PrintDisabled height="50" width="50" />;
export const CustomStyle = () => <PrintDisabled style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PrintDisabled className="custom-class" />;
