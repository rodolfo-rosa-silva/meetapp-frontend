import styled from 'styled-components';

import InputMask from 'react-input-mask';
import camera from '../assets/images/camera.svg';

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 700;
  text-align: left;
  width: 100%;
`;

export const Input = styled(InputMask)`
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

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 25px;
  padding: 5px 0;
  background: none;
  border: none;
  font-size: 20px;
  color: #ffffff;
  resize: none;
  font-family: 'Helvetica', sans-serif;

  &::-webkit-input-placeholder {
    opacity: 0.5;
    color: #ffffff;
    font-family: 'Helvetica', sans-serif;
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

export const ContainerLink = styled.div`
  margin-top: 30px;

  a {
    opacity: 0.6;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Message = styled.div`
  text-align: center;
  margin: 10px 0 30px;
  width: 100%;
`;

export const ListPreferences = styled.ul`
  width: 100%;
  margin-bottom: 20px;
  list-style: none;

  li {
    margin-bottom: 15px;
  }
`;

export const NamePreference = styled.label`
  font-size: 18px;
  text-align: left;
  margin-left: 10px;
  vertical-align: top;
  line-height: 20px;
`;

export const ImageUpload = styled.div`
  border: 1px dashed #928f95;
  width: 100%;
  height: 100px;
  background-image: url(${camera});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  margin-bottom: 20px;
  cursor: pointer;

  input {
    display: none;
  }
`;
