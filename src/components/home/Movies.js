import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../components/component/content";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { mainStyle } from "../styles/globalStyle";

const Container = styled.div`
  margin-top: 30px;
  padding: ${mainStyle.padding};
  margin-bottom: 60px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #eeeeee;
  margin-bottom: 20px;
`;
const MovieBox = styled.div`
  height: 280px;
`;

const MovieImg = styled.div`
  height: 250px;
  transition: 0.8s;

  &:hover {
    height: 300px;
  }
`;
const MovieTitle = styled.div`
  height: 100%;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
  opacity: 0;
  transition: 0.5s;
  &:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
  }
`;
const MovieText = styled.div`
  transition: 0.5s;
  opacity: 1;
  margin-top: 10px;
  h3 {
    font-size: 20px;
    font-weight: 500;
    color: #e4e4e4;
  }
  &:hover {
    h3 {
      opacity: 0;
    }
  }
`;

export const Movies = ({ movieData, movieName }) => {
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Title>{movieName}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieBox>
                <MovieImg
                  style={{
                    background: `url(${
                      play.backdrop_path
                        ? `${imgUrl}/${play.backdrop_path}`
                        : "http://www.gbe.kr/images/co/na/noImg.gif"
                    }) no-repeat center/cover`,
                  }}
                >
                  <MovieTitle>{play.title}</MovieTitle>
                </MovieImg>
                <MovieText>
                  <h3>{play.title}</h3>
                </MovieText>
              </MovieBox>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
