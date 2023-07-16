import React from "react";
import { SportsEsports } from "./SportsEsports";

export default {
  title: "SportsEsports",
  component: SportsEsports,
};

export const Default = () => <SportsEsports />;
export const Fill = () => <SportsEsports fill="blue" />;
export const Size = () => <SportsEsports height="50" width="50" />;
export const CustomStyle = () => <SportsEsports style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SportsEsports className="custom-class" />;
