import React from "react";
import { IosShare } from "./IosShare";

export default {
  title: "IosShare",
  component: IosShare,
};

export const Default = () => <IosShare />;
export const Fill = () => <IosShare fill="blue" />;
export const Size = () => <IosShare height="50" width="50" />;
export const CustomStyle = () => <IosShare style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <IosShare className="custom-class" />;
