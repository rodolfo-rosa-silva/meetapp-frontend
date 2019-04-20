import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  width: 315px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const HelloUser = styled.h2`
  font-size: 24px;
  text-align: left;
  width: 100%;
`;

export const IntroText = styled.p`
  opacity: 0.8;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
  margin-top: 20px;
`;

export const TitlePreferences = styled.h3`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  width: 100%;
  margin: 30px 0 20px;
`;

export const BoxLoading = styled.div`
  width: 100%;
  margin-bottom: 20px;
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
