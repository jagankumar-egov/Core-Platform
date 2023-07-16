import React from "react";
import { Grading } from "./Grading";

export default {
  title: "Grading",
  component: Grading,
};

export const Default = () => <Grading />;
export const Fill = () => <Grading fill="blue" />;
export const Size = () => <Grading height="50" width="50" />;
export const CustomStyle = () => <Grading style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Grading className="custom-class" />;
