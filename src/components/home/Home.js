import { useEffect, useState } from "react";
import { movieApi } from "../api";
import { movieNum } from "../../components/component/content";
import { MainBanner } from "./MainBanner";
import "swiper/css";
import { Container } from "../../components/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Movies } from "./Movies";
import { Loading } from "../Loading";
import { mainStyle } from "../styles/globalStyle";

const Buttoncr = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 500px) {
    height: 300px;
    display: block;
  }
`;

const Button = styled.div`
  width: 300px;
  height: 150px;
  border: 2px solid #393e46;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0 10px 10px 10px;
  transition: 1s;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    p {
      color: #ffd369;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    p {
      font-size: 13px;
      font-weight: 300;
    }
    &:hover {
      background-color: #eeeeee;
      p {
        color: #ffd369;
      }
    }
  }
`;
const Button_2 = styled.div`
  width: 300px;
  height: 150px;
  border: 2px solid #393e46;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0 10px 10px 10px;
  transition: 1s;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    p {
      color: #ffd369;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;

    p {
      font-size: 13px;
      font-weight: 300;
    }
    &:hover {
      background-color: #eeeeee;
      p {
        color: #ffd369;
      }
    }
  }
`;

const Button_3 = styled.div`
  width: 300px;
  height: 150px;
  border: 2px solid #393e46;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0 10px 10px 10px;
  transition: 1s;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    p {
      color: #ffd369;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;

    p {
      font-size: 13px;
      font-weight: 300;
    }
    &:hover {
      background-color: #eeeeee;
      p {
        color: #ffd369;
      }
    }
  }
`;

const Button_4 = styled.div`
  width: 300px;
  height: 150px;
  border: 2px solid #393e46;
  border-radius: 25px 25px 25px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0 10px 10px 10px;
  transition: 1s;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #eeeeee;
  }
  &:hover {
    background-color: #eeeeee;
    p {
      color: #ffd369;
    }
  }
  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;

    p {
      font-size: 13px;
      font-weight: 300;
    }
    &:hover {
      background-color: #eeeeee;
      p {
        color: #ffd369;
      }
    }
  }
`;

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [comming, setUpcomming] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowplayData },
        } = await movieApi.nowplaying();
        setPlaying(nowplayData);

        const {
          data: { results: topratDate },
        } = await movieApi.topRated();
        setRated(topratDate);

        const {
          data: { results: upCommingData },
        } = await movieApi.upComming();
        setUpcomming(upCommingData);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  // console.log("현재상영 영화:", playing);
  // console.log("인기 영화:", rated);
  // console.log("개봉예정 영화:", comming);

  return (
    <div>
      {/* <PageTitle title={"Home"} /> */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <>
              <MainBanner playData={playing[movieNum]} />
              <Buttoncr>
                <Link to={"/DataBase"}>
                  <Button>
                    <p>NewMovie</p>
                  </Button>
                </Link>
                <Link to={"/DataBase"}>
                  <Button_2>
                    <p>InterestMovie</p>
                  </Button_2>
                </Link>
                <Link to={"/DataBase"}>
                  <Button_3>
                    <p>MovieCharts</p>
                  </Button_3>
                </Link>
                <Link to={"/DataBase"}>
                  <Button_4>
                    <p>Released Movie</p>
                  </Button_4>
                </Link>
              </Buttoncr>
              <Container>
                <Movies movieData={playing} movieName={"현재 상영 영화"} />
                <Movies movieData={rated} movieName={"인기 영화"} />
                <Movies movieData={comming} movieName={"개봉 예정 영화"} />
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
};
