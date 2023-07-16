import React from "react";
import { PermContactCalendar } from "./PermContactCalendar";

export default {
  title: "PermContactCalendar",
  component: PermContactCalendar,
};

export const Default = () => <PermContactCalendar />;
export const Fill = () => <PermContactCalendar fill="blue" />;
export const Size = () => <PermContactCalendar height="50" width="50" />;
export const CustomStyle = () => <PermContactCalendar style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PermContactCalendar className="custom-class" />;
