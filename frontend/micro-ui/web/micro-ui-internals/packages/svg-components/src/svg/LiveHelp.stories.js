import React from "react";
import { LiveHelp } from "./LiveHelp";

export default {
  title: "LiveHelp",
  component: LiveHelp,
};

export const Default = () => <LiveHelp />;
export const Fill = () => <LiveHelp fill="blue" />;
export const Size = () => <LiveHelp height="50" width="50" />;
export const CustomStyle = () => <LiveHelp style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LiveHelp className="custom-class" />;
