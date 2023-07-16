import React from "react";
import { MarkEmailUnread } from "./MarkEmailUnread";

export default {
  title: "MarkEmailUnread",
  component: MarkEmailUnread,
};

export const Default = () => <MarkEmailUnread />;
export const Fill = () => <MarkEmailUnread fill="blue" />;
export const Size = () => <MarkEmailUnread height="50" width="50" />;
export const CustomStyle = () => <MarkEmailUnread style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MarkEmailUnread className="custom-class" />;
