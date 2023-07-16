import React from "react";
import { EvStation } from "./EvStation";

export default {
  title: "EvStation",
  component: EvStation,
};

export const Default = () => <EvStation />;
export const Fill = () => <EvStation fill="blue" />;
export const Size = () => <EvStation height="50" width="50" />;
export const CustomStyle = () => <EvStation style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <EvStation className="custom-class" />;
