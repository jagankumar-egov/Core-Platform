import React from "react";
import { PublishedWithChanges } from "./PublishedWithChanges";

export default {
  title: "PublishedWithChanges",
  component: PublishedWithChanges,
};

export const Default = () => <PublishedWithChanges />;
export const Fill = () => <PublishedWithChanges fill="blue" />;
export const Size = () => <PublishedWithChanges height="50" width="50" />;
export const CustomStyle = () => <PublishedWithChanges style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <PublishedWithChanges className="custom-class" />;
