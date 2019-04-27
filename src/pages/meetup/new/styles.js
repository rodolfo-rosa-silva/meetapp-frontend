import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerLoad = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MessageError = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #e5556e;
`;

export const Form = styled.form`
  width: 335px;
  display: flex;
  flex: 1;
  padding-top: 60px;
  flex-direction: column;
  align-items: center;
`;
