import React from "react";
import { LocalHospital } from "./LocalHospital";

export default {
  title: "LocalHospital",
  component: LocalHospital,
};

export const Default = () => <LocalHospital />;
export const Fill = () => <LocalHospital fill="blue" />;
export const Size = () => <LocalHospital height="50" width="50" />;
export const CustomStyle = () => <LocalHospital style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalHospital className="custom-class" />;
