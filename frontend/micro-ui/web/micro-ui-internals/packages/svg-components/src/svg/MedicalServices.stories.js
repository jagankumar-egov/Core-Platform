import React from "react";
import { MedicalServices } from "./MedicalServices";

export default {
  title: "MedicalServices",
  component: MedicalServices,
};

export const Default = () => <MedicalServices />;
export const Fill = () => <MedicalServices fill="blue" />;
export const Size = () => <MedicalServices height="50" width="50" />;
export const CustomStyle = () => <MedicalServices style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MedicalServices className="custom-class" />;
