import React from "react";
import { ChevronLeft } from "./ChevronLeft";

export default {
  title: "ChevronLeft",
  component: ChevronLeft,
};

export const Default = () => <ChevronLeft />;
export const Fill = () => <ChevronLeft fill="blue" />;
export const Size = () => <ChevronLeft height="50" width="50" />;
export const CustomStyle = () => <ChevronLeft style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ChevronLeft className="custom-class" />;
