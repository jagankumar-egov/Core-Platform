import React from "react";
import { SettingsInputComponent } from "./SettingsInputComponent";

export default {
  title: "SettingsInputComponent",
  component: SettingsInputComponent,
};

export const Default = () => <SettingsInputComponent />;
export const Fill = () => <SettingsInputComponent fill="blue" />;
export const Size = () => <SettingsInputComponent height="50" width="50" />;
export const CustomStyle = () => <SettingsInputComponent style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SettingsInputComponent className="custom-class" />;
