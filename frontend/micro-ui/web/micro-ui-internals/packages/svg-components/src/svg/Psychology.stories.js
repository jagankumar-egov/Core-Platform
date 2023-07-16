import React from "react";
import { Psychology } from "./Psychology";

export default {
  title: "Psychology",
  component: Psychology,
};

export const Default = () => <Psychology />;
export const Fill = () => <Psychology fill="blue" />;
export const Size = () => <Psychology height="50" width="50" />;
export const CustomStyle = () => <Psychology style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Psychology className="custom-class" />;
