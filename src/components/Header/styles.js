import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  height: 80px;
  flex-direction: row;
  background: #e5556e;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;

  li {
    margin-right: 20px;

    &:first-child {
      margin-right: 40px;
    }

    a {
      font-size: 16px;
      text-align: left;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
    }
  }
`;

export const BoxLinkProfile = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    margin-left: 20px;
  }
`;
