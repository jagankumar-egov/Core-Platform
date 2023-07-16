import React from "react";
import { DeleteOutline } from "./DeleteOutline";

export default {
  title: "DeleteOutline",
  component: DeleteOutline,
};

export const Default = () => <DeleteOutline />;
export const Fill = () => <DeleteOutline fill="blue" />;
export const Size = () => <DeleteOutline height="50" width="50" />;
export const CustomStyle = () => <DeleteOutline style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DeleteOutline className="custom-class" />;
