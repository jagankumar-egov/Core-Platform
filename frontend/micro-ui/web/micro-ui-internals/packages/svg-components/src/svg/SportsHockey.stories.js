import React from "react";
import { SportsHockey } from "./SportsHockey";

export default {
  title: "SportsHockey",
  component: SportsHockey,
};

export const Default = () => <SportsHockey />;
export const Fill = () => <SportsHockey fill="blue" />;
export const Size = () => <SportsHockey height="50" width="50" />;
export const CustomStyle = () => <SportsHockey style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SportsHockey className="custom-class" />;
