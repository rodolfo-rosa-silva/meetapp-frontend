import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 5px 0;
  background: none;
  border: none;
  font-size: 20px;
  color: #ffffff;

  &::-webkit-input-placeholder {
    opacity: 0.5;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #e5556e;
  border: none;
  border-radius: 25px;
  color: #fff;
  font-weight: 700;
  padding: 15px 0;
  font-size: 16px;
`;

export const Link = styled.a`
  margin-top: 20px;
  opacity: 0.6;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const Message = styled.div`
  text-align: center;
  margin: 10px 0 30px;
  width: 100%;
`;
