import React from "react";
import { CheckCircle } from "./CheckCircle";

export default {
  title: "CheckCircle",
  component: CheckCircle,
};

export const Default = () => <CheckCircle />;
export const Fill = () => <CheckCircle fill="blue" />;
export const Size = () => <CheckCircle height="50" width="50" />;
export const CustomStyle = () => <CheckCircle style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <CheckCircle className="custom-class" />;
