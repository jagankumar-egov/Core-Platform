import React from "react";
import { LocalParking } from "./LocalParking";

export default {
  title: "LocalParking",
  component: LocalParking,
};

export const Default = () => <LocalParking />;
export const Fill = () => <LocalParking fill="blue" />;
export const Size = () => <LocalParking height="50" width="50" />;
export const CustomStyle = () => <LocalParking style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LocalParking className="custom-class" />;
