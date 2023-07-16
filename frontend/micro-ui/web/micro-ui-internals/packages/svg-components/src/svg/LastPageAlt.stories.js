import React from "react";
import { LastPageAlt } from "./LastPageAlt";

export default {
  title: "LastPageAlt",
  component: LastPageAlt,
};

export const Default = () => <LastPageAlt />;
export const Fill = () => <LastPageAlt fill="blue" />;
export const Size = () => <LastPageAlt height="50" width="50" />;
export const CustomStyle = () => <LastPageAlt style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LastPageAlt className="custom-class" />;
