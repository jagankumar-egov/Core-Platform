import React from "react";
import { CameraEnhance } from "./CameraEnhance";

export default {
  title: "CameraEnhance",
  component: CameraEnhance,
};

export const Default = () => <CameraEnhance />;
export const Fill = () => <CameraEnhance fill="blue" />;
export const Size = () => <CameraEnhance height="50" width="50" />;
export const CustomStyle = () => <CameraEnhance style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <CameraEnhance className="custom-class" />;
