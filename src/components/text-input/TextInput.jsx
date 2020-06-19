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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.input.attrs({ type: "text" })`
  height: 48px;
  width: -webkit-fill-available;
  border: 2px solid
    ${props =>
      props.error ? color.error : props.valid ? color.blue : color.primary};
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

  @media (min-width: 1440px) {
    height: 56px;
    width: 576px;
  }
`;

const IconWrapper = styled.span`
  position: relative;
  right: 34px;
`;

const StyledSubtext = styled.div`
  padding: 1rem 0;
  color: ${props => (props.error ? color.error : color.mediumGrey)};

  & > *:first-child {
    margin-right: 0.5rem;
  }
`;

const TextInput = ({
  label,
  hintText,
  errorText,
  valid,
  id,
  required,
  disabled,
  placeholder,
  onChange,
  width,
  hintIcon,
  iconColor,
}) => (
  <TextInputWrapper>
    <label htmlFor={id} id={`${id}-label`}>
      {label}
    </label>
    <InputWrapper>
      <StyledInput
        id={id}
        name={id}
        error={!!errorText}
        valid={valid}
        aria-invalid={valid !== undefined ? !valid : false}
        aria-describedby={(hintText || errorText) && `${id}-hint ${id}-error`}
        required={!!required}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        width={width}
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  hintText: PropTypes.string,
  valid: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.number,
  hintIcon: PropTypes.string,
  iconColor: PropTypes.string,
};

export default TextInput;
