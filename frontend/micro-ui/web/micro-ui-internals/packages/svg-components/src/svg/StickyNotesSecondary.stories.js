import React from "react";
import { StickyNotesSecondary } from "./StickyNotesSecondary";

export default {
  title: "StickyNotesSecondary",
  component: StickyNotesSecondary,
};

export const Default = () => <StickyNotesSecondary />;
export const Fill = () => <StickyNotesSecondary fill="blue" />;
export const Size = () => <StickyNotesSecondary height="50" width="50" />;
export const CustomStyle = () => <StickyNotesSecondary style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <StickyNotesSecondary className="custom-class" />;
