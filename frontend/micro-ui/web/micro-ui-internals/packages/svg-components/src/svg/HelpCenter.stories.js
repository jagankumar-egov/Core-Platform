import React from "react";
import { HelpCenter } from "./HelpCenter";

export default {
  title: "HelpCenter",
  component: HelpCenter,
};

export const Default = () => <HelpCenter />;
export const Fill = () => <HelpCenter fill="blue" />;
export const Size = () => <HelpCenter height="50" width="50" />;
export const CustomStyle = () => <HelpCenter style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <HelpCenter className="custom-class" />;
