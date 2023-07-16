import React from "react";
import { SingleBed } from "./SingleBed";

export default {
  title: "SingleBed",
  component: SingleBed,
};

export const Default = () => <SingleBed />;
export const Fill = () => <SingleBed fill="blue" />;
export const Size = () => <SingleBed height="50" width="50" />;
export const CustomStyle = () => <SingleBed style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SingleBed className="custom-class" />;
