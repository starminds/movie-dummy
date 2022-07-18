import styled from "styled-components";
import { imgUrl } from "../component/content";
import { mainStyle } from "../styles/globalStyle";

const Banner = styled.div`
  height: 80vh;
  padding: ${mainStyle.padding};
  position: relative;
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
`;

export const BaseBanner = ({ bannerData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${bannerData.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <Title>
        <h3>NewMovie</h3>
      </Title>
    </Banner>
  );
};
