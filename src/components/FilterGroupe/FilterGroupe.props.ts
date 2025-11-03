import React from "react";

export interface FilterGroupeProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectOption: "all" | "favorites";
}
