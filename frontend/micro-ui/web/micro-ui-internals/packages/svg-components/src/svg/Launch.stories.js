import React from "react";
import { Launch } from "./Launch";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "Launch",
  component: Launch,
};

export const Default = () => <Launch />;
export const Fill = () => <Launch fill="blue" />;
export const Size = () => <Launch height="50" width="50" />;
export const CustomStyle = () => <Launch style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Launch className="custom-class" />;
