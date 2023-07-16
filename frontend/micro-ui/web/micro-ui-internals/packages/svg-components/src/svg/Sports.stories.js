import React from "react";
import { Sports } from "./Sports";

export default {
  title: "Sports",
  component: Sports,
};

export const Default = () => <Sports />;
export const Fill = () => <Sports fill="blue" />;
export const Size = () => <Sports height="50" width="50" />;
export const CustomStyle = () => <Sports style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Sports className="custom-class" />;
