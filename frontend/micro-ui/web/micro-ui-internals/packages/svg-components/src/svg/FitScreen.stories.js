import React from "react";
import { FitScreen } from "./FitScreen";

export default {
  title: "FitScreen",
  component: FitScreen,
};

export const Default = () => <FitScreen />;
export const Fill = () => <FitScreen fill="blue" />;
export const Size = () => <FitScreen height="50" width="50" />;
export const CustomStyle = () => <FitScreen style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <FitScreen className="custom-class" />;
