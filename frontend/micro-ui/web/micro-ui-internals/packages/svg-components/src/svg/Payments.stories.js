import React from "react";
import { Payments } from "./Payments";

export default {
  title: "Payments",
  component: Payments,
};

export const Default = () => <Payments />;
export const Fill = () => <Payments fill="blue" />;
export const Size = () => <Payments height="50" width="50" />;
export const CustomStyle = () => <Payments style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Payments className="custom-class" />;
