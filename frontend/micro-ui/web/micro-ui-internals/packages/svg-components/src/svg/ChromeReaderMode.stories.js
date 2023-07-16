import React from "react";
import { ChromeReaderMode } from "./ChromeReaderMode";

export default {
  title: "ChromeReaderMode",
  component: ChromeReaderMode,
};

export const Default = () => <ChromeReaderMode />;
export const Fill = () => <ChromeReaderMode fill="blue" />;
export const Size = () => <ChromeReaderMode height="50" width="50" />;
export const CustomStyle = () => <ChromeReaderMode style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ChromeReaderMode className="custom-class" />;
