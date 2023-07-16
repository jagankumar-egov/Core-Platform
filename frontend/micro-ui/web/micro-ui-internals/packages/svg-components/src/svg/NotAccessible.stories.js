import React from "react";
import { NotAccessible } from "./NotAccessible";

export default {
  title: "NotAccessible",
  component: NotAccessible,
};

export const Default = () => <NotAccessible />;
export const Fill = () => <NotAccessible fill="blue" />;
export const Size = () => <NotAccessible height="50" width="50" />;
export const CustomStyle = () => <NotAccessible style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NotAccessible className="custom-class" />;
