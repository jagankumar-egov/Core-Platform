import React from "react";
import { Badge } from "./Badge";

export default {
  title: "Badge",
  component: Badge,
};

export const Default = () => <Badge />;
export const Fill = () => <Badge fill="blue" />;
export const Size = () => <Badge height="50" width="50" />;
export const CustomStyle = () => <Badge style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Badge className="custom-class" />;
