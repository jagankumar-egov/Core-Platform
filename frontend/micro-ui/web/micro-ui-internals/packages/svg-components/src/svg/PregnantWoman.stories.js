import React from "react";
import { PregnantWoman } from "./PregnantWoman";

export default {
  title: "PregnantWoman",
  component: PregnantWoman,
};

export const Default = () => <PregnantWoman />;
export const Fill = () => <PregnantWoman fill="blue" />;
export const Size = () => <PregnantWoman height="50" width="50" />;
export const CustomStyle = () => <PregnantWoman style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PregnantWoman className="custom-class" />;
