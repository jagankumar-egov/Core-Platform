import React from "react";
import { Share } from "./Share";

export default {
  title: "Share",
  component: Share,
};

export const Default = () => <Share />;
export const Fill = () => <Share fill="blue" />;
export const Size = () => <Share height="50" width="50" />;
export const CustomStyle = () => <Share style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Share className="custom-class" />;
