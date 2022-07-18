import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { imgUrl } from "../component/content";
import { mainStyle } from "../styles/globalStyle";
import { movieApi } from "../api";
import { Loading } from "../Loading";

const Wrap = styled.div`
  height: 100vh;
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: space-between;
  padding-top: 200px;
  position: relative;
`;

const Con = styled.div`
  width: 48%;
  color: #eeeeee;
  &:nth-child(1) {
    height: 80vh;
  }
`;

const Title = styled.h3`
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Release = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Genres = styled.ul`
  font-size: 20px;
  font-weight: 600;
  margin-top: 30px;
  display: flex;
  justify-content: start;
  align-items: center;
  li {
    list-style: none;
    margin-bottom: 5px;
  }
  li:nth-child(2) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const RunTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;

const LineUp = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid;
  border-radius: 50%;
  margin-top: 30px;
  margin-right: 20px;
  background-color: ${mainStyle.bgcolor};
  text-align: center;
  transition: 1s;
  text {
    font-size: 40px;
    font-weight: 600;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    text {
      color: #1d1d1d;
    }
  }
`;

const Desc = styled.p`
  max-width: 700px;
  width: 100%;
  line-height: 2rem;
  font-size: 18px;
  font-weight: 400;
  line-height: 2rem;
  margin-top: 30px;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;

const StartBt = styled.div`
  width: 150px;
  height: 50px;
  border: 2px solid;
  border-radius: 15px;
  margin-top: 30px;
  background-color: ${mainStyle.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  p {
    font-size: 20px;
    font-weight: 600;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    p {
      color: #1d1d1d;
    }
  }
`;
const PreviewBt = styled.div`
  width: 150px;
  height: 50px;
  border: 2px solid;
  border-radius: 15px;
  margin-top: 30px;
  background-color: ${mainStyle.bgcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  transition: 1s;
  text {
    font-size: 20px;
    font-weight: 600;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    text {
      color: #1d1d1d;
    }
  }
`;
const ConWrap = styled.div`
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: ${mainStyle.padding};
  margin: 40px auto;
`;

const Consimilar = styled.div`
  margin-bottom: 20px;
  text {
    font-size: 30px;
    font-weight: 500;
    color: #eeeeee;
  }
  &:hover {
    text {
    }
  }
`;

const ConLine = styled.div`
  height: 3px;
  background-color: #eeeeee;
  opacity: 0.5;
  padding: ${mainStyle.padding};
  margin-top: 20px;
`;

const WConWrap = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const SCon = styled.div`
  height: 250px;
`;
const Stitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;
// const IframeBox = styled.div``;

// const Iframe = styled.iframe`
//   width: 100%;
//   height: 800px;
//   margin-top: 150px;
//   border: 2px solid;
// `;

// const Bg = styled.div`
//   width: 100%;
//   height: 50%;
//   background: linear-gradient(
//     180deg,
//     rgba(2, 0, 36, 0) 0% rgba(0, 0, 0, 1) 100%
//   );
//   position: absolute;
//   bottom: 5%;
//   left: 0;
// `;
export const MovieDetall = ({ movieData }) => {
  const [movieViedo, setmovieViedo] = useState();
  const [similar, setSimilar] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const movieViedo = async () => {
      try {
        const {
          data: { results },
        } = await movieApi.video(id);
        setmovieViedo(results.length === 0 ? null : results[0].key);
        const {
          data: { results: alike },
        } = await movieApi.similar(id);
        // console.log(alike);
        setSimilar(alike);
      } catch (error) {}
    };
    movieViedo();
  }, []);

  return (
    <Wrap
      style={{
        background: `url(${
          movieData.backdrop_path
            ? `${imgUrl}/${movieData.backdrop_path}`
            : "http://www.gbe.kr/images/co/na/noImg.gif"
        }) no-repeat center/cover`,
      }}
    >
      <Con>
        <Title>{movieData.title}</Title>
        <Release>개봉일: {movieData.release_date}</Release>
        <RunTime>{movieData.runtime}분</RunTime>
        <Genres>
          {movieData.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </Genres>

        <LineUp>
          <StartBt>
            <a href="https://www.youtube.com/">
              <p>재생</p>
            </a>
          </StartBt>
          <PreviewBt>
            <text>Preview</text>
          </PreviewBt>
          <Button>
            <Link to={"/InterestMovie"}>
              <text>+</text>
            </Link>
          </Button>
        </LineUp>
        <Desc>{movieData.overview.slice(0, 100) + "...."}</Desc>
      </Con>
      <ConWrap>
        <Consimilar>
          <text>추천작</text>
          <ConLine></ConLine>
        </Consimilar>
        <WConWrap>
          {similar &&
            similar.map((simil) => (
              <div key={simil.id}>
                <Link to={`/detail/${simil.id}`}>
                  <SCon
                    style={{
                      background: `url(${imgUrl}${simil.backdrop_path}) no-reapeat center/cover`,
                    }}
                  ></SCon>
                  <Stitle>{simil.title}</Stitle>
                </Link>
              </div>
            ))}
        </WConWrap>
      </ConWrap>
    </Wrap>
  );
};
