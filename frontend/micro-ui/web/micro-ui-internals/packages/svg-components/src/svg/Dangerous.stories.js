import React from "react";
import { Dangerous } from "./Dangerous";

export default {
  title: "Dangerous",
  component: Dangerous,
};

export const Default = () => <Dangerous />;
export const Fill = () => <Dangerous fill="blue" />;
export const Size = () => <Dangerous height="50" width="50" />;
export const CustomStyle = () => <Dangerous style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Dangerous className="custom-class" />;
