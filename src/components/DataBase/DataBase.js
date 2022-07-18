import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBanner } from "./BaseBanner";
import { movieApi } from "../api";

const Conwrap = styled.div`
  height: 80vh;
`;

const Con = styled.div``;

const Bg = styled.div``;

const Title = styled.div``;

export const DataBase = () => {
  const [baseing, setBaseing] = useState();

  useEffect(() => {
    const bannerData = async () => {
      try {
        const { data: detailData } = await movieApi.moviedetail(id);
        setBaseing(detailData);
      } catch (error) {}
    };
    bannerData();
  }, []);

  return (
    <Conwrap>
      <BaseBanner bannerData={baseing} />
      <Con>
        <Link to={`/detail`}>
          <Bg></Bg>
          <Title>dd</Title>
        </Link>
      </Con>
    </Conwrap>
  );
};
