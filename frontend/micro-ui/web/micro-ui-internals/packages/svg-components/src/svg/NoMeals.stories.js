import React from "react";
import { NoMeals } from "./NoMeals";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "NoMeals",
  component: NoMeals,
};

export const Default = () => <NoMeals />;
export const Fill = () => <NoMeals fill="blue" />;
export const Size = () => <NoMeals height="50" width="50" />;
export const CustomStyle = () => <NoMeals style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <NoMeals className="custom-class" />;
