import React from "react";
import { Liquor } from "./Liquor";

export default {
  title: "Liquor",
  component: Liquor,
};

export const Default = () => <Liquor />;
export const Fill = () => <Liquor fill="blue" />;
export const Size = () => <Liquor height="50" width="50" />;
export const CustomStyle = () => <Liquor style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Liquor className="custom-class" />;
