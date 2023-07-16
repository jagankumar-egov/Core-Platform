import React from "react";
import { PeopleAlt } from "./PeopleAlt";

export default {
  title: "PeopleAlt",
  component: PeopleAlt,
};

export const Default = () => <PeopleAlt />;
export const Fill = () => <PeopleAlt fill="blue" />;
export const Size = () => <PeopleAlt height="50" width="50" />;
export const CustomStyle = () => <PeopleAlt style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PeopleAlt className="custom-class" />;
