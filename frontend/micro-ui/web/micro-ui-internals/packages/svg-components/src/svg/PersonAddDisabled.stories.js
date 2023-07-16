import React from "react";
import { PersonAddDisabled } from "./PersonAddDisabled";

export default {
  title: "PersonAddDisabled",
  component: PersonAddDisabled,
};

export const Default = () => <PersonAddDisabled />;
export const Fill = () => <PersonAddDisabled fill="blue" />;
export const Size = () => <PersonAddDisabled height="50" width="50" />;
export const CustomStyle = () => <PersonAddDisabled style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PersonAddDisabled className="custom-class" />;
