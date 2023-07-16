import React from "react";
import { Email } from "./Email";

export default {
  title: "Email",
  component: Email,
};

export const Default = () => <Email />;
export const Fill = () => <Email fill="blue" />;
export const Size = () => <Email height="50" width="50" />;
export const CustomStyle = () => <Email style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Email className="custom-class" />;
