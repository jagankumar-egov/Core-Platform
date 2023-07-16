import React from "react";
import { Person } from "./Person";

export default {
  title: "Person",
  component: Person,
};

export const Default = () => <Person />;
export const Fill = () => <Person fill="blue" />;
export const Size = () => <Person height="50" width="50" />;
export const CustomStyle = () => <Person style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Person className="custom-class" />;
