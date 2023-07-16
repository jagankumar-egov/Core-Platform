import React from "react";
import { MobileScreenShare } from "./MobileScreenShare";

export default {
  title: "MobileScreenShare",
  component: MobileScreenShare,
};

export const Default = () => <MobileScreenShare />;
export const Fill = () => <MobileScreenShare fill="blue" />;
export const Size = () => <MobileScreenShare height="50" width="50" />;
export const CustomStyle = () => <MobileScreenShare style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MobileScreenShare className="custom-class" />;
