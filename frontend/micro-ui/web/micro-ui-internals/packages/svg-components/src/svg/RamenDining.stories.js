import React from "react";
import { RamenDining } from "./RamenDining";

export default {
  title: "RamenDining",
  component: RamenDining,
};

export const Default = () => <RamenDining />;
export const Fill = () => <RamenDining fill="blue" />;
export const Size = () => <RamenDining height="50" width="50" />;
export const CustomStyle = () => <RamenDining style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <RamenDining className="custom-class" />;
