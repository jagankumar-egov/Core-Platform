import React from "react";
import { DirectionsRun } from "./DirectionsRun";

export default {
  title: "DirectionsRun",
  component: DirectionsRun,
};

export const Default = () => <DirectionsRun />;
export const Fill = () => <DirectionsRun fill="blue" />;
export const Size = () => <DirectionsRun height="50" width="50" />;
export const CustomStyle = () => <DirectionsRun style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DirectionsRun className="custom-class" />;
