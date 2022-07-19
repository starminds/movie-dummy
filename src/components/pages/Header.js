import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBed,
  faBrain,
  faClose,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { useState } from "react";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #393e46;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${mainStyle.padding};
  z-index: 9;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
  }
`;

const Logo = styled.div`
  p {
    font-size: 30px;
    font-weight: 900;
    color: #eeeeee;
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    p {
      font-size: 24px;
    }
  }
`;

const MainWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Menu = styled.div`
  margin-left: 30px;
  p {
    width: 70px;
    font-size: 15px;
    font-weight: 500;
    color: #eeeeee;
  }
  @media screen and (max-width: 500px) {
    margin-left: 20px;
  }
`;

const MoMmenu = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const MenuBtn = styled.div`
  font-size: 25px;
`;

const Momenu = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${(props) => props.leftResult};
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  li {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 100px;
    &:nth-child(1) {
      font-size: 24px;
    }
    &:nth-child(2) {
      font-size: 24px;
    }
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  font-size: 25px;
  top: 27px;
  right: 20px;
  z-index: 10;
`;

export const Header = () => {
  const [bg, setBg] = useState("transparent");
  const [left, setleft] = useState("100%");

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct > 500) {
      setBg("#1d1d1d");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <SHeader bgcolor={bg}>
      <Logo>
        <Link to={"/"}>
          <p>M-movie</p>
        </Link>
      </Logo>

      <MainWrap>
        <Menu>
          <Link to={"/"}>
            <p>
              <FontAwesomeIcon icon={faHouse} />
              Home
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Interest"}>
            <p>
              <FontAwesomeIcon icon={faBrain} />
              Interest
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Login"}>
            <p>
              <FontAwesomeIcon icon={faBed} />
              Login
            </p>
          </Link>
        </Menu>
        <Menu>
          <Link to={"/Search"}>
            <p>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              Search
            </p>
          </Link>
        </Menu>
      </MainWrap>
      <MoMmenu>
        <MenuBtn onClick={() => setleft("0")}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
        <Momenu leftResult={left}>
          <CloseBtn onClick={() => setleft("100%")}>
            <FontAwesomeIcon icon={faClose} />
          </CloseBtn>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/search"}>Search</Link>
          </li>
        </Momenu>
      </MoMmenu>
    </SHeader>
  );
};
