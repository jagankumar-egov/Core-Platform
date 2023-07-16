import React from "react";
import { Logout } from "./Logout";

export default {
  title: "Logout",
  component: Logout,
};

export const Default = () => <Logout />;
export const Fill = () => <Logout fill="blue" />;
export const Size = () => <Logout height="50" width="50" />;
export const CustomStyle = () => <Logout style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Logout className="custom-class" />;
