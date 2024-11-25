/** @format */
import React from "react";
import Root from "./root";
import { renderToString } from "react-dom/server";

export function render() {
  return renderToString(<Root />);
}
