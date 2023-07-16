import React from "react";
import { Subway } from "./Subway";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "Subway",
  component: Subway,
};

export const Default = () => <Subway />;
export const Fill = () => <Subway fill="blue" />;
export const Size = () => <Subway height="50" width="50" />;
export const CustomStyle = () => <Subway style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Subway className="custom-class" />;
