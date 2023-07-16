import React from "react";
import { ContactPhone } from "./ContactPhone";

export default {
  title: "ContactPhone",
  component: ContactPhone,
};

export const Default = () => <ContactPhone />;
export const Fill = () => <ContactPhone fill="blue" />;
export const Size = () => <ContactPhone height="50" width="50" />;
export const CustomStyle = () => <ContactPhone style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ContactPhone className="custom-class" />;
