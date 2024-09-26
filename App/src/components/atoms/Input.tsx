// src/atoms/Input.tsx
import React from "react";
import styled from "styled-components";

interface InputProps {
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  style?: React.CSSProperties;
}

const StyledInput = styled.input`
  width: 95%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${(props) => props.theme.inputBackground};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.highlight};
    box-shadow: 0 0 0 3px ${(props) => props.theme.highlight}50;
  }
`;

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  style,
}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={style}
    />
  );
};

export default Input;
