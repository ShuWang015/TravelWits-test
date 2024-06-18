import React, { ReactNode, useState } from "react";

interface InputProps {
  inputType: string;
  exampleInput: string;
  inputName: string;
  input: string;
  setInput: (Input: string) => void;
}

const InputGroup = ({
  inputType,
  exampleInput,
  inputName,
  input,
  setInput,
}: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text" id="addon-wrapping">
        {inputName}
      </span>
      <input
        type={inputType}
        className="form-control"
        placeholder={exampleInput}
        aria-label="Input"
        aria-describedby="addon-wrapping"
        value={input}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroup;
