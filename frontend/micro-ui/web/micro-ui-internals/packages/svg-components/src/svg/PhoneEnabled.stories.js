import React from "react";
import { PhoneEnabled } from "./PhoneEnabled";

export default {
  title: "PhoneEnabled",
  component: PhoneEnabled,
};

export const Default = () => <PhoneEnabled />;
export const Fill = () => <PhoneEnabled fill="blue" />;
export const Size = () => <PhoneEnabled height="50" width="50" />;
export const CustomStyle = () => <PhoneEnabled style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PhoneEnabled className="custom-class" />;
