import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Grid = styled.div`
  width: 900px;
  display: flex;
  flex: 1;
  padding: 30px 0;
  flex-direction: column;
`;

export const ContainerLoad = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MessageError = styled.p`
  display: flex;
  flex: 1;
  color: #e5556e;
  font-size: 12px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerContent = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: center;
`;

export const Content = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;

export const Subscriptions = styled.p`
  font-size: 14px;
  color: #999999;
  margin-top: 5px;
`;

export const Description = styled.p`
  opacity: 0.8;
  font-size: 16px;
  color: #ffffff;
  line-height: 28px;
  margin-top: 20px;
`;

export const LabelLocation = styled.p`
  font-size: 14px;
  color: #999999;
  margin-top: 30px;
`;

export const Location = styled.p`
  opacity: 0.8;
  font-size: 14px;
  color: #ffffff;
  line-height: 24px;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
`;

export const SuccessConfirmation = styled.p`
  font-size: 18px;
  color: #2fde46;
  font-weight: 700;
`;
