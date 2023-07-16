import React from "react";
import { LocalAtm } from "./LocalAtm";

export default {
  title: "LocalAtm",
  component: LocalAtm,
};

export const Default = () => <LocalAtm />;
export const Fill = () => <LocalAtm fill="blue" />;
export const Size = () => <LocalAtm height="50" width="50" />;
export const CustomStyle = () => <LocalAtm style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalAtm className="custom-class" />;
