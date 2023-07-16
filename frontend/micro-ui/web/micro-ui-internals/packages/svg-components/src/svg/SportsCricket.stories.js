import React from "react";
import { SportsCricket } from "./SportsCricket";

export default {
  title: "SportsCricket",
  component: SportsCricket,
};

export const Default = () => <SportsCricket />;
export const Fill = () => <SportsCricket fill="blue" />;
export const Size = () => <SportsCricket height="50" width="50" />;
export const CustomStyle = () => <SportsCricket style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SportsCricket className="custom-class" />;
