import React from "react";
import { ContactSupport } from "./ContactSupport";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "ContactSupport",
  component: ContactSupport,
};

export const Default = () => <ContactSupport />;
export const Fill = () => <ContactSupport fill="blue" />;
export const Size = () => <ContactSupport height="50" width="50" />;
export const CustomStyle = () => <ContactSupport style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <ContactSupport className="custom-class" />;
