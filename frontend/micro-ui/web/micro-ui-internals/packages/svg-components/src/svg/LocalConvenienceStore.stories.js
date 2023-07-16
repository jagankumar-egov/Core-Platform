import React from "react";
import { LocalConvenienceStore } from "./LocalConvenienceStore";

export default {
  title: "LocalConvenienceStore",
  component: LocalConvenienceStore,
};

export const Default = () => <LocalConvenienceStore />;
export const Fill = () => <LocalConvenienceStore fill="blue" />;
export const Size = () => <LocalConvenienceStore height="50" width="50" />;
export const CustomStyle = () => <LocalConvenienceStore style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalConvenienceStore className="custom-class" />;
