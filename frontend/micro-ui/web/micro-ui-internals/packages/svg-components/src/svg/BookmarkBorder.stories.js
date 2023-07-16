import React from "react";
import { BookmarkBorder } from "./BookmarkBorder";

export default {
  title: "BookmarkBorder",
  component: BookmarkBorder,
};

export const Default = () => <BookmarkBorder />;
export const Fill = () => <BookmarkBorder fill="blue" />;
export const Size = () => <BookmarkBorder height="50" width="50" />;
export const CustomStyle = () => <BookmarkBorder style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <BookmarkBorder className="custom-class" />;
