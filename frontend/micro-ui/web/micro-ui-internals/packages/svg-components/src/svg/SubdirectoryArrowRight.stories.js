import React from "react";
import { SubdirectoryArrowRight } from "./SubdirectoryArrowRight";

export default {
  title: "SubdirectoryArrowRight",
  component: SubdirectoryArrowRight,
};

export const Default = () => <SubdirectoryArrowRight />;
export const Fill = () => <SubdirectoryArrowRight fill="blue" />;
export const Size = () => <SubdirectoryArrowRight height="50" width="50" />;
export const CustomStyle = () => <SubdirectoryArrowRight style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SubdirectoryArrowRight className="custom-class" />;
