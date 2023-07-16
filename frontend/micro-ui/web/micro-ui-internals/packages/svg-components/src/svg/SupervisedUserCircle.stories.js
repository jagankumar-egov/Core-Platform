import React from "react";
import { SupervisedUserCircle } from "./SupervisedUserCircle";

export default {
  title: "SupervisedUserCircle",
  component: SupervisedUserCircle,
};

export const Default = () => <SupervisedUserCircle />;
export const Fill = () => <SupervisedUserCircle fill="blue" />;
export const Size = () => <SupervisedUserCircle height="50" width="50" />;
export const CustomStyle = () => <SupervisedUserCircle style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SupervisedUserCircle className="custom-class" />;
