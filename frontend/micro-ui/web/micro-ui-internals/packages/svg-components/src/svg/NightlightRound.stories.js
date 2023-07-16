import React from "react";
import { NightlightRound } from "./NightlightRound";

export default {
  title: "NightlightRound",
  component: NightlightRound,
};

export const Default = () => <NightlightRound />;
export const Fill = () => <NightlightRound fill="blue" />;
export const Size = () => <NightlightRound height="50" width="50" />;
export const CustomStyle = () => <NightlightRound style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NightlightRound className="custom-class" />;
