import React, { useState, useEffect } from "react";
import "./index.css";
export const Button = ({ children, onClick, disabled, className }) => {
  return disabled ? (
    <button
      disabled
      onClick={() => onClick()}
      className={className ? className : "button"}
    >
      {children}
    </button>
  ) : (
    <button
      className={className ? className : "button"}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
