import styled from 'styled-components';

export const Input = styled.input.attrs({ type: 'checkbox' })`
  border-radius: 4px;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  outline: 0;
  background: #544b57;

  &:checked {
    background: #f64067;
  }
`;
