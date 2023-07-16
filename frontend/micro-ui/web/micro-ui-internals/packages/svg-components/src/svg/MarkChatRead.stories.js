import React from "react";
import { MarkChatRead } from "./MarkChatRead";

export default {
  title: "MarkChatRead",
  component: MarkChatRead,
};

export const Default = () => <MarkChatRead />;
export const Fill = () => <MarkChatRead fill="blue" />;
export const Size = () => <MarkChatRead height="50" width="50" />;
export const CustomStyle = () => <MarkChatRead style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <MarkChatRead className="custom-class" />;
