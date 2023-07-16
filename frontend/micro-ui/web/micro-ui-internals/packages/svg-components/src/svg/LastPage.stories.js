import React from "react";
import { LastPage } from "./LastPage";

export default {
  title: "LastPage",
  component: LastPage,
};

export const Default = () => <LastPage />;
export const Fill = () => <LastPage fill="blue" />;
export const Size = () => <LastPage height="50" width="50" />;
export const CustomStyle = () => <LastPage style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <LastPage className="custom-class" />;
