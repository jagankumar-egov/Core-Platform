import React from "react";
import { CheckCircleOutline } from "./CheckCircleOutline";

export default {
  title: "CheckCircleOutline",
  component: CheckCircleOutline,
};

export const Default = () => <CheckCircleOutline />;
export const Fill = () => <CheckCircleOutline fill="blue" />;
export const Size = () => <CheckCircleOutline height="50" width="50" />;
export const CustomStyle = () => <CheckCircleOutline style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <CheckCircleOutline className="custom-class" />;
