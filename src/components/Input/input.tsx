import React, { useCallback, useRef, useState } from 'react';

import { InputProps } from './Input.interfaces';

import * as Styled from './Input.styles';

const Input = ({ name, type, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Styled.Input>
      <input
        name={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        /* defaultValue={defaultValue} */
        ref={inputRef}
        placeholder={placeholder}
        type={type}
      />
    </Styled.Input>
  );
};

export default Input;
