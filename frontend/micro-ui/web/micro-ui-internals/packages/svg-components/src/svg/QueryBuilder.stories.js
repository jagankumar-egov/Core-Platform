import React from "react";
import { QueryBuilder } from "./QueryBuilder";

export default {
  title: "QueryBuilder",
  component: QueryBuilder,
};

export const Default = () => <QueryBuilder />;
export const Fill = () => <QueryBuilder fill="blue" />;
export const Size = () => <QueryBuilder height="50" width="50" />;
export const CustomStyle = () => <QueryBuilder style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <QueryBuilder className="custom-class" />;
