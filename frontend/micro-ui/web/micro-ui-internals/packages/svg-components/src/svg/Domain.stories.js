import React from "react";
import { Domain } from "./Domain";

export default {
  title: "Domain",
  component: Domain,
};

export const Default = () => <Domain />;
export const Fill = () => <Domain fill="blue" />;
export const Size = () => <Domain height="50" width="50" />;
export const CustomStyle = () => <Domain style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Domain className="custom-class" />;
