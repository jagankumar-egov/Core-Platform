import React from "react";
import { MarkunreadMailbox } from "./MarkunreadMailbox";

export default {
  title: "MarkunreadMailbox",
  component: MarkunreadMailbox,
};

export const Default = () => <MarkunreadMailbox />;
export const Fill = () => <MarkunreadMailbox fill="blue" />;
export const Size = () => <MarkunreadMailbox height="50" width="50" />;
export const CustomStyle = () => <MarkunreadMailbox style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MarkunreadMailbox className="custom-class" />;
