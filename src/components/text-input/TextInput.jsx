import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { spacing, color } from "../../shared/style";
import Icon from "../icon/Icon";

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

const StyledInput = styled.input`
  height: 48px;
  width: -webkit-fill-available;
  width: -moz-available;
  min-width: 18rem;
  border: 2px solid
    ${({ error, valid }) =>
      error ? color.error : valid ? color.blue : color.primary};
  padding: ${spacing.padding.medium}px ${spacing.padding.small}px;
  transition: all 150ms ease-out;
  margin-top: ${spacing.padding.small}px;
  margin-bottom: ${spacing.padding.small}px;
  font-size: calc(16px + (18 - 16) * ((100vw - 300px) / (1600 - 300)));

  &:hover {
    border-color: ${color.lightBlue};
  }

  &:focus {
    border-color: ${color.blue};
    border-radius: 2px;
  }

  &:disabled {
    border-color: ${color.disabled};
  }

  @media (min-width: 62rem) {
    height: 3.5rem;
    width: 43rem;
  }
`;

const IconWrapper = styled.span`
  position: relative;
  right: 34px;
`;

const StyledSubtext = styled.div`
  padding: 1rem 0;
  color: ${({ error }) => (error ? color.error : color.mediumGrey)};

  & > *:first-child {
    margin-right: 0.5rem;
  }

  @media (min-width: 48rem) {
    width: 35rem;
  }
`;

const TextInput = ({
  label,
  type,
  id,
  valid,
  disabled,
  placeholder,
  errorText,
  hintText,
  hintIcon,
  iconColor,

  onChange,
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
        aria-invalid={valid !== undefined}
        aria-describedby={(hintText || errorText) && `${id}-hint ${id}-error`}
        placeholder={placeholder}
        error={errorText}
        valid={valid}
        disabled={disabled}
        onChange={onChange}
      />
      {(valid || errorText) && (
        <IconWrapper>
          <Icon
            icon={valid ? "success" : "error"}
            color={valid ? color.darkBlue : color.error}
          />
        </IconWrapper>
      )}
    </InputWrapper>
    {hintText && (
      <StyledSubtext id={`${id}-hint`}>
        {hintIcon && <Icon icon={hintIcon} color={iconColor} />}
        <span>{hintText}</span>
      </StyledSubtext>
    )}
    {errorText && (
      <StyledSubtext id={`${id}-error`} error>
        Error: {errorText}
      </StyledSubtext>
    )}
  </TextInputWrapper>
);

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  hintText: PropTypes.string,
  hintIcon: PropTypes.string,
  iconColor: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
