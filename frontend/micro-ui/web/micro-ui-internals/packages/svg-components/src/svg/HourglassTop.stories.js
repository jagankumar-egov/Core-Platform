import React from "react";
import { HourglassTop } from "./HourglassTop";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "HourglassTop",
  component: HourglassTop,
};

export const Default = () => <HourglassTop />;
export const Fill = () => <HourglassTop fill="blue" />;
export const Size = () => <HourglassTop height="50" width="50" />;
export const CustomStyle = () => <HourglassTop style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <HourglassTop className="custom-class" />;
