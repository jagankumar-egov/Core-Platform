import React from "react";
import { DialerSip } from "./DialerSip";

export default {
  title: "DialerSip",
  component: DialerSip,
};

export const Default = () => <DialerSip />;
export const Fill = () => <DialerSip fill="blue" />;
export const Size = () => <DialerSip height="50" width="50" />;
export const CustomStyle = () => <DialerSip style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DialerSip className="custom-class" />;
