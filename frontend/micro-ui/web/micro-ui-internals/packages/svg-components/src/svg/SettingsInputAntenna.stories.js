import React from "react";
import { SettingsInputAntenna } from "./SettingsInputAntenna";

export default {
  title: "SettingsInputAntenna",
  component: SettingsInputAntenna,
};

export const Default = () => <SettingsInputAntenna />;
export const Fill = () => <SettingsInputAntenna fill="blue" />;
export const Size = () => <SettingsInputAntenna height="50" width="50" />;
export const CustomStyle = () => <SettingsInputAntenna style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SettingsInputAntenna className="custom-class" />;
