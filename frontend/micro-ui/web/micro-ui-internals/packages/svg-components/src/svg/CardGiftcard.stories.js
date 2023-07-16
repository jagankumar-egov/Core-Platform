import React from "react";
import { CardGiftcard } from "./CardGiftcard";

export default {
  title: "CardGiftcard",
  component: CardGiftcard,
};

export const Default = () => <CardGiftcard />;
export const Fill = () => <CardGiftcard fill="blue" />;
export const Size = () => <CardGiftcard height="50" width="50" />;
export const CustomStyle = () => <CardGiftcard style={{ border: "1px solid red" }} />;
export const CustomClassName = () => <CardGiftcard className="custom-class" />;
