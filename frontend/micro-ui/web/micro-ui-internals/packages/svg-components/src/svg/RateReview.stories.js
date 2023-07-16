import React from "react";
import { RateReview } from "./RateReview";

export default {
  title: "RateReview",
  component: RateReview,
};

export const Default = () => <RateReview />;
export const Fill = () => <RateReview fill="blue" />;
export const Size = () => <RateReview height="50" width="50" />;
export const CustomStyle = () => <RateReview style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <RateReview className="custom-class" />;
