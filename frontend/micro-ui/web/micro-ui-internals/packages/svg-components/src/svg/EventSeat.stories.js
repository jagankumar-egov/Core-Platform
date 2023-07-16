import React from "react";
import { EventSeat } from "./EventSeat";

export default {
  title: "EventSeat",
  component: EventSeat,
};

export const Default = () => <EventSeat />;
export const Fill = () => <EventSeat fill="blue" />;
export const Size = () => <EventSeat height="50" width="50" />;
export const CustomStyle = () => <EventSeat style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <EventSeat className="custom-class" />;
