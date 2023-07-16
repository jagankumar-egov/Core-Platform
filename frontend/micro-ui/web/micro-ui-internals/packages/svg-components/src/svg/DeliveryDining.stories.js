import React from "react";
import { DeliveryDining } from "./DeliveryDining";

export default {
  title: "DeliveryDining",
  component: DeliveryDining,
};

export const Default = () => <DeliveryDining />;
export const Fill = () => <DeliveryDining fill="blue" />;
export const Size = () => <DeliveryDining height="50" width="50" />;
export const CustomStyle = () => <DeliveryDining style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <DeliveryDining className="custom-class" />;
