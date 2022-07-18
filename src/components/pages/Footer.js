import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const SFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393e46;
  padding: ${mainStyle.padding};
  margin-top: 150px;
`;

const Logo = styled.div`
  text-align: center;
  p {
    font-size: 24px;
    font-weight: 700;
    color: red;
  }
`;

const MenuWrap = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Menu = styled.div`
  text-align: center;
  p {
    font-size: 11px;
    font-weight: 700;
    color: #eeeeee;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <Logo>
        <Link to={"/"}>
          <p>M-movie</p>
        </Link>
        <MenuWrap>
          <Menu>
            <a href="https://www.youtube.com/">
              <p>youtube |</p>
            </a>
          </Menu>
          <Menu>
            <a href="https://www.themoviedb.org/?language=ko">
              <p>tmdb |</p>
            </a>
          </Menu>
          <Menu>
            <p>전화 번호 : 080-0800-0080 |</p>
          </Menu>
          <Menu>
            <p>서울 어딘가?</p>
          </Menu>
        </MenuWrap>
      </Logo>
    </SFooter>
  );
};
