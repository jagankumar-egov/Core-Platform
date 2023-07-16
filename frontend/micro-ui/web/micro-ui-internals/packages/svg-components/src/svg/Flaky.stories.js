import React from "react";
import { Flaky } from "./Flaky";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "Flaky",
  component: Flaky,
};

export const Default = () => <Flaky />;
export const Fill = () => <Flaky fill="blue" />;
export const Size = () => <Flaky height="50" width="50" />;
export const CustomStyle = () => <Flaky style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Flaky className="custom-class" />;
