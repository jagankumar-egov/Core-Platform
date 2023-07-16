import React from "react";
import { PhoneDisabled } from "./PhoneDisabled";

export default {
  title: "PhoneDisabled",
  component: PhoneDisabled,
};

export const Default = () => <PhoneDisabled />;
export const Fill = () => <PhoneDisabled fill="blue" />;
export const Size = () => <PhoneDisabled height="50" width="50" />;
export const CustomStyle = () => <PhoneDisabled style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PhoneDisabled className="custom-class" />;
