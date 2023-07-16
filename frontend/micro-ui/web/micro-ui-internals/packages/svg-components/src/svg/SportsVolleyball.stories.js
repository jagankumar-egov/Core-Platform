import React from "react";
import { SportsVolleyball } from "./SportsVolleyball";

export default {
  title: "SportsVolleyball",
  component: SportsVolleyball,
};

export const Default = () => <SportsVolleyball />;
export const Fill = () => <SportsVolleyball fill="blue" />;
export const Size = () => <SportsVolleyball height="50" width="50" />;
export const CustomStyle = () => <SportsVolleyball style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SportsVolleyball className="custom-class" />;
