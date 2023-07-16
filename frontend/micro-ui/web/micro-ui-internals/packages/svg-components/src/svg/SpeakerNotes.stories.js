import React from "react";
import { SpeakerNotes } from "./SpeakerNotes";

export default {
  title: "SpeakerNotes",
  component: SpeakerNotes,
};

export const Default = () => <SpeakerNotes />;
export const Fill = () => <SpeakerNotes fill="blue" />;
export const Size = () => <SpeakerNotes height="50" width="50" />;
export const CustomStyle = () => <SpeakerNotes style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <SpeakerNotes className="custom-class" />;
