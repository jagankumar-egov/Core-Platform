import React from "react";
import { Build } from "./Build";

export default {
  title: "Build",
  component: Build,
};

export const Default = () => <Build />;
export const Fill = () => <Build fill="blue" />;
export const Size = () => <Build height="50" width="50" />;
export const CustomStyle = () => <Build style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Build className="custom-class" />;
