import React from 'react';
import styled from 'styled-components';

import { spacing, color } from '../../shared/style';
import Icon from '../icon/Icon';
import { IStyledInput, IStyledSubtext, ITextInput } from './types';

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  text-align: left;
  align-self: flex-start;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.input<IStyledInput>`
  height: 48px;
  width: -webkit-fill-available;
  width: -moz-available;
  min-width: 18rem;
  border: 2px solid
    ${({ error, isValid }) => error ? color.error : isValid ? color.blue : color.primary};
  padding: ${spacing.padding.small}px 44px ${spacing.padding.small}px ${spacing.padding.small}px;
  transition: all 150ms ease-out;
  margin-top: ${spacing.padding.small}px;
  margin-bottom: ${spacing.padding.small}px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px ${color.white}; /* Change the color to your own background color */ 
  }
  
  &:-webkit-autofill:focus {
      -webkit-box-shadow: inset 0 0 0 50px ${color.white}; /* Change the color to your own background color */
  } 

  &:hover {
    border-color: ${({ error, isValid }) => error ? color.error : isValid ? color.lightBlue : color.primary};
  }

  &:focus {
    border-color: ${({ error, isValid }) => error ? color.error : isValid ? color.blue : color.primary};
    border-radius: 2px;
  }

  &:disabled {
    border-color: ${color.disabled};
  }

  @media (min-width: 62rem) {
    height: 3.5rem;
    width: 36rem;
  }
`;

const IconWrapper = styled.span`
  position: relative;
  right: 34px;
  line-height: 1;
`;

const StyledSubtext = styled.div<IStyledSubtext>`
  padding: .2rem 0 .8rem;
  color: ${({ isError }) => isError ? color.error : color.primary};

  & > *:first-child {
    margin-right: 0.5rem;
  }

  @media (min-width: 48rem) {
    width: 35rem;
  }
`;

const TextInput: React.FC<ITextInput> = ({
  label,
  type,
  id,
  isValid,
  disabled,
  placeholder,
  errorText,
  hintText,
  hintIcon,
  iconColor,

  onChange
}) => (
  <TextInputWrapper>
    <label htmlFor={id} id={`${id}-label`}>
      {label}
    </label>
    <InputWrapper>
      <StyledInput
        required
        type={type}
        id={id}
        name={id}
        aria-invalid={isValid !== undefined}
        aria-describedby={(hintText || errorText) && `${id}-hint ${id}-error`}
        placeholder={placeholder}
        error={errorText}
        isValid={isValid}
        disabled={disabled}
        onChange={onChange}
      />
      {(isValid || errorText) && (
        <IconWrapper>
          <Icon
            icon={isValid ? 'success' : 'error'}
            color={isValid ? color.darkBlue : color.error}
          />
        </IconWrapper>
      )}
    </InputWrapper>
    {errorText && (
      <StyledSubtext id={`${id}-error`} isError>
        Error: {errorText}
      </StyledSubtext>
    )}
    {hintText && (
      <StyledSubtext id={`${id}-hint`}>
        {hintIcon && <Icon icon={hintIcon} color={iconColor} />}
        <span>{hintText}</span>
      </StyledSubtext>
    )}
  </TextInputWrapper>
);

export default TextInput;
