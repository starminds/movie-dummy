import { Loading } from "../Loading";
import { Container } from "../Container";
import { MovieDetall } from "./MovieDetall";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieApi } from "../api";
import { ScrollTop } from "../../ScrollTop";

export const Detail = () => {
  const [movieData, setmovieData] = useState();
  const [loading, setLoading] = useState();
  const { id } = useParams();

  useEffect(() => {
    const movieData = async () => {
      try {
        const { data: detailData } = await movieApi.moviedetail(id);
        setmovieData(detailData);
        setLoading(false);
      } catch (error) {}
    };
    movieData();
  }, []);

  return (
    <div>
      <ScrollTop />
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {movieData && <MovieDetall movieData={movieData} />}
        </Container>
      )}
    </div>
  );
};
