import React from "react";
import { SmartButton } from "./SmartButton";

export default {
  title: "SmartButton",
  component: SmartButton,
};

export const Default = () => <SmartButton />;
export const Fill = () => <SmartButton fill="blue" />;
export const Size = () => <SmartButton height="50" width="50" />;
export const CustomStyle = () => <SmartButton style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SmartButton className="custom-class" />;
