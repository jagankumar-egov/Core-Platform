import React from "react";
import { FolderOpen } from "./FolderOpen";

export default {
  title: "FolderOpen",
  component: FolderOpen,
};

export const Default = () => <FolderOpen />;
export const Fill = () => <FolderOpen fill="blue" />;
export const Size = () => <FolderOpen height="50" width="50" />;
export const CustomStyle = () => <FolderOpen style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <FolderOpen className="custom-class" />;
