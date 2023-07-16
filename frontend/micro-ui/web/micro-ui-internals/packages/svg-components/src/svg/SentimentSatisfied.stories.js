import React from "react";
import { SentimentSatisfied } from "./SentimentSatisfied";

export default {
  tags: ['autodocs'],
  argTypes: {
    className: {
        options: ['custom-class'],
        control: { type: 'check' },
    }
  },
  title: "SentimentSatisfied",
  component: SentimentSatisfied,
};

export const Default = () => <SentimentSatisfied />;
export const Fill = () => <SentimentSatisfied fill="blue" />;
export const Size = () => <SentimentSatisfied height="50" width="50" />;
export const CustomStyle = () => <SentimentSatisfied style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SentimentSatisfied className="custom-class" />;
