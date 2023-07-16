import React from "react";
import { SwapVertical } from "./SwapVertical";

export default {
  title: "SwapVertical",
  component: SwapVertical,
};

export const Default = () => <SwapVertical />;
export const Fill = () => <SwapVertical fill="blue" />;
export const Size = () => <SwapVertical height="50" width="50" />;
export const CustomStyle = () => <SwapVertical style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SwapVertical className="custom-class" />;
