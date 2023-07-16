import React from "react";
import { NotificationsActive } from "./NotificationsActive";

export default {
  title: "NotificationsActive",
  component: NotificationsActive,
};

export const Default = () => <NotificationsActive />;
export const Fill = () => <NotificationsActive fill="blue" />;
export const Size = () => <NotificationsActive height="50" width="50" />;
export const CustomStyle = () => <NotificationsActive style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NotificationsActive className="custom-class" />;
