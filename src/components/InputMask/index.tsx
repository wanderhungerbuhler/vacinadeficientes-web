import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';

import { Container, Error } from './styles';
import { FiAlertCircle } from 'react-icons/fi';

interface Props extends InputProps {
  name: string;
  label?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputMask: React.FC<Props> = ({ name, icon: Icon, label, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <label htmlFor={fieldName}>{label}</label>
      <Container isErrored={!!error} isFocused={isFocused}>
        { Icon && <Icon size={20} />}
        <ReactInputMask
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle size={17} />
          </Error>
        )}
      </Container>
    </>
  );
};

export default InputMask;
