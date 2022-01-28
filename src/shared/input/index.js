import React, { useState } from "react";
export const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return <input value={inputValue} onChange={handleChange} />;
};
