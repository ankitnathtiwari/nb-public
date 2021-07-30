import React, { useState, useEffect } from "react";
import "./index.css";
export const Button = ({ children, onClick, disabled }) => {
  return disabled ? (
    <button className='button' disabled onClick={() => onClick()}>
      {children}
    </button>
  ) : (
    <button className='button' onClick={() => onClick()}>
      {children}
    </button>
  );
};
