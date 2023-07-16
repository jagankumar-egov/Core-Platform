import React from "react";
import { EditAttributes } from "./EditAttributes";

export default {
  title: "EditAttributes",
  component: EditAttributes,
};

export const Default = () => <EditAttributes />;
export const Fill = () => <EditAttributes fill="blue" />;
export const Size = () => <EditAttributes height="50" width="50" />;
export const CustomStyle = () => <EditAttributes style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <EditAttributes className="custom-class" />;
