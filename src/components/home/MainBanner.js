import styled from "styled-components";
import { imgUrl } from "../../components/component/content";
import { mainStyle } from "../../components/styles/globalStyle";

const Banner = styled.section`
  height: 80vh;
  padding: ${mainStyle.padding};
  padding-top: 250px;
  position: relative;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100vh;
    position: relative;
  }
`;
const Title = styled.div`
  max-width: 650px;
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  color: #eeeeee;
  line-height: 6rem;
  position: relative;
  z-index: 8;

  @media screen and (max-width: 500px) {
    max-width: 340px;
    font-size: 45px;
    line-height: 4rem;
    position: absolute;
    bottom: 30%;
    left: 20px;
  }
`;
const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 20px;
  color: #eeeeee;
  margin-top: 20px;
  line-height: 2rem;
  opacity: 0.9;
  font-weight: 300;
  position: relative;
  z-index: 8;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 60vh;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const MainBanner = ({ playData }) => {
  // console.log(playData);
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <Title>{playData.title}</Title>
      <Desc>{playData.overview.slice(0, 100) + "...."}</Desc>
      <BlackBg></BlackBg>
    </Banner>
  );
};
