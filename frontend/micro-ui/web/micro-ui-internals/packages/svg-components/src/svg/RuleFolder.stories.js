import React from "react";
import { RuleFolder } from "./RuleFolder";

export default {
  title: "RuleFolder",
  component: RuleFolder,
};

export const Default = () => <RuleFolder />;
export const Fill = () => <RuleFolder fill="blue" />;
export const Size = () => <RuleFolder height="50" width="50" />;
export const CustomStyle = () => <RuleFolder style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <RuleFolder className="custom-class" />;
