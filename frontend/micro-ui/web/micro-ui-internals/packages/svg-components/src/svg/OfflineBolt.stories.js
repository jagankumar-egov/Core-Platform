import React from "react";
import { OfflineBolt } from "./OfflineBolt";

export default {
  title: "OfflineBolt",
  component: OfflineBolt,
};

export const Default = () => <OfflineBolt />;
export const Fill = () => <OfflineBolt fill="blue" />;
export const Size = () => <OfflineBolt height="50" width="50" />;
export const CustomStyle = () => <OfflineBolt style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <OfflineBolt className="custom-class" />;
