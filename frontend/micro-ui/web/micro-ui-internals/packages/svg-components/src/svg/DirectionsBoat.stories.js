import React from "react";
import { DirectionsBoat } from "./DirectionsBoat";

export default {
  title: "DirectionsBoat",
  component: DirectionsBoat,
};

export const Default = () => <DirectionsBoat />;
export const Fill = () => <DirectionsBoat fill="blue" />;
export const Size = () => <DirectionsBoat height="50" width="50" />;
export const CustomStyle = () => <DirectionsBoat style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DirectionsBoat className="custom-class" />;
