import React from "react";
import { LocalPhone } from "./LocalPhone";

export default {
  title: "LocalPhone",
  component: LocalPhone,
};

export const Default = () => <LocalPhone />;
export const Fill = () => <LocalPhone fill="blue" />;
export const Size = () => <LocalPhone height="50" width="50" />;
export const CustomStyle = () => <LocalPhone style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalPhone className="custom-class" />;
