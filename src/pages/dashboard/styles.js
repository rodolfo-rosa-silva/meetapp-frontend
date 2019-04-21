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

export const BoxFilter = styled.form`
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
  margin-bottom: 20px;

  h2 {
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
    margin-bottom: 20px;
  }
`;

export const ContentRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

export const BoxLoading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const MessageErrorLoad = styled.p`
  text-align: center;
  color: #e5556e;
  font-size: 12px;
`;

export const CardMeetup = styled.div`
  width: 290px;
  border-radius: 5px;
  margin-bottom: 25px;
`;

export const BackgroundMeetup = styled.div`
  width: 100%;
  height: 130px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-image: url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BoxInfos = styled.div`
  display: flex;
  flex: 1;
  padding: 15px;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Infos = styled.div`
  display: flex;
  width: 210px;
  margin-right: 10px;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: #222222;
  width: 100%;
  height: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Subscriptions = styled.h3`
  font-size: 14px;
  color: #999999;
  margin-top: 5px;
  width: 100%;
  height: 19px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonLink = styled.div`
  background: #e5556e;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15px;
    height: 15px;
  }
`;
