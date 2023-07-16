import React from "react";
import { Stars } from "./Stars";

export default {
  title: "Stars",
  component: Stars,
};

export const Default = () => <Stars />;
export const Fill = () => <Stars fill="blue" />;
export const Size = () => <Stars height="50" width="50" />;
export const CustomStyle = () => <Stars style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Stars className="custom-class" />;
