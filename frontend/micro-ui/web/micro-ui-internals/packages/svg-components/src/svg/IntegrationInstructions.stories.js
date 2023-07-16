import React from "react";
import { IntegrationInstructions } from "./IntegrationInstructions";

export default {
  title: "IntegrationInstructions",
  component: IntegrationInstructions,
};

export const Default = () => <IntegrationInstructions />;
export const Fill = () => <IntegrationInstructions fill="blue" />;
export const Size = () => <IntegrationInstructions height="50" width="50" />;
export const CustomStyle = () => <IntegrationInstructions style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <IntegrationInstructions className="custom-class" />;
