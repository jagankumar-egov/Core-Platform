import React from "react";
import { Store } from "./Store";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "Store",
  component: Store,
};

export const Default = () => <Store />;
export const Fill = () => <Store fill="blue" />;
export const Size = () => <Store height="50" width="50" />;
export const CustomStyle = () => <Store style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <Store className="custom-class" />;
