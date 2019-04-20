import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Grid = styled.div`
  width: 910px;
  display: flex;
  padding: 30px 0;
  flex-direction: column;
`;

export const BoxFilter = styled.div`
  background: #2f2d38;
  width: 100%;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  margin-bottom: 40px;

  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  background: #2f2d38;
  font-size: 15px;
  color: #8e8e93;
  border: none;
  flex: 1;
`;

export const RowMeetups = styled.div`
  margin-bottom: 40px;

  h2 {
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardMeetup = styled.div`
  width: 290px;
  height: 170px;
  background: #fff;
  border-radius: 5px;
`;
