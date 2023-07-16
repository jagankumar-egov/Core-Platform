import React from "react";
import { SentimentSatisfiedAlt } from "./SentimentSatisfiedAlt";

export default {
  title: "SentimentSatisfiedAlt",
  component: SentimentSatisfiedAlt,
};

export const Default = () => <SentimentSatisfiedAlt />;
export const Fill = () => <SentimentSatisfiedAlt fill="blue" />;
export const Size = () => <SentimentSatisfiedAlt height="50" width="50" />;
export const CustomStyle = () => <SentimentSatisfiedAlt style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SentimentSatisfiedAlt className="custom-class" />;
