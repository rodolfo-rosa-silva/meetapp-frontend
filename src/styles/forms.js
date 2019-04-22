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
