import React, { useState, useEffect } from "react";
import "./followButton.css";
export const FollowButton = ({ children, onClick, disabled, className }) => {
  return disabled ? (
    <button
      disabled
      onClick={() => onClick()}
      className={className ? className : "follow-button"}
    >
      {children}
    </button>
  ) : (
    <button
      className={className ? className : "follow-button"}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};
