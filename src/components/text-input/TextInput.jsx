import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography, color } from '../../shared/style';
import { Icon } from '../icon/icon';

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

const StyledInput = styled.input.attrs({ type: 'text' })`
  height: 48px;
  width: 340px;
  border: 2px solid
    ${(props) =>
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
  }
`;

const StyledLabel = styled.label`
  font-weight: ${typography.weight.regular};
  letter-spacing: 0.07rem;
  text-transform: uppercase;
`;

const StyledText = styled.span`
  color: ${(props) => (props.error ? color.error : color.mediumGrey)};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.span`
  position: relative;
  right: 34px;
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
}) => {
  return (
    <TextInputWrapper>
      <StyledLabel htmlFor={id} id={`${id}-label`}>
        {label}
      </StyledLabel>
      <InputWrapper>
        <StyledInput
          id={id}
          name={id}
          error={!!errorText}
          valid={valid}
          aria-invalid={valid !== undefined ? !valid : false}
          aria-describedby={`${id}-hint ${id}-error`}
          required={!!required}
          disabled={disabled}
          placeholder={placeholder}
        />
        {console.log(valid)}
        {(valid || errorText) && (
          <IconWrapper>
            <Icon
              icon={valid ? 'success' : 'error'}
              color={valid ? color.darkBlue : color.error}
            />
          </IconWrapper>
        )}
      </InputWrapper>
      {hintText && <StyledText id={`${id}-hint`}>Hint: {hintText}</StyledText>}
      {errorText && (
        <StyledText id={`${id}-error`} error>
          Error: {errorText}
        </StyledText>
      )}
    </TextInputWrapper>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorText: PropTypes.string,
  hintText: PropTypes.string,
  valid: PropTypes.bool,
  required: PropTypes.bool,
};

export default TextInput;
