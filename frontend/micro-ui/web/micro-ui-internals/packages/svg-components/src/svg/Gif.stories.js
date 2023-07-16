import React from "react";
import { Gif } from "./Gif";

export default {
  title: "Gif",
  component: Gif,
};

export const Default = () => <Gif />;
export const Fill = () => <Gif fill="blue" />;
export const Size = () => <Gif height="50" width="50" />;
export const CustomStyle = () => <Gif style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Gif className="custom-class" />;
