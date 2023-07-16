import React from "react";
import { NotListedLocation } from "./NotListedLocation";

export default {
  title: "NotListedLocation",
  component: NotListedLocation,
};

export const Default = () => <NotListedLocation />;
export const Fill = () => <NotListedLocation fill="blue" />;
export const Size = () => <NotListedLocation height="50" width="50" />;
export const CustomStyle = () => <NotListedLocation style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NotListedLocation className="custom-class" />;
