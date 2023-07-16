import React from "react";
import { MiscellaneousServices } from "./MiscellaneousServices";

export default {
  title: "MiscellaneousServices",
  component: MiscellaneousServices,
};

export const Default = () => <MiscellaneousServices />;
export const Fill = () => <MiscellaneousServices fill="blue" />;
export const Size = () => <MiscellaneousServices height="50" width="50" />;
export const CustomStyle = () => <MiscellaneousServices style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MiscellaneousServices className="custom-class" />;
