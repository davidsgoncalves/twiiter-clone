import React, { useCallback, useRef, useState } from 'react';

import { InputProps } from './Input.interfaces';

import * as Styled from './Input.styles';

const Input = ({ name, ...rest }: InputProps) => {
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

	return(
		<Styled.Input>
			<input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        /* defaultValue={defaultValue} */
        ref={inputRef}
        {...rest}
      />
		</Styled.Input>
	);
}

export default Input;