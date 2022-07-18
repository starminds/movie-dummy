import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../api";
import { imgUrl } from "../component/content";
import { Container } from "../Container";
import { Loading } from "../Loading";
import { mainStyle } from "../styles/globalStyle";

const SearchWrap = styled.div`
  height: 100vh;
  margin-top: 150px;
`;
const Srcon = styled.div``;

const Input = styled.input`
  all: unset;
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 25px;
  font-size: 20px;
  color: ${mainStyle.mainColor};
  font &::placeholder {
    font-size: 20px;
  }
`;
const ConWrap = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 300px;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

export const Search = () => {
  const [searchTerm, setSearchTrem] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });

  const searchmovie = async () => {
    const { Search: term } = getValues();
    setLoading(true);
    try {
      const {
        data: { results },
      } = await movieApi.search(term);
      setSearchTrem(results);

      if (results.length <= 0) {
        setError("result", {
          message: "영화가 없어요..!",
        });
      } else {
        setSearchTrem(results);
      }
      setLoading(false);
    } catch (erros) {
      console.log(errors);
    }
  };
  return (
    <div>
      <Container>
        <SearchWrap>
          <Srcon>
            <form onSubmit={handleSubmit(searchmovie)}>
              <Input
                {...register("Search", {
                  required: "내용은 필수 입니다 ~.~",
                  onChange() {
                    clearErrors("result");
                  },
                })}
                type="text"
                placeholder="영화 검색...."
              />
              {errors?.search?.message}
              {errors?.results?.message}
            </form>
          </Srcon>
        </SearchWrap>

        {loading ? (
          <Loading />
        ) : (
          <>
            {searchTerm && (
              <ConWrap>
                {searchTerm.map((term) => (
                  <Con key={term.id}>
                    <Link to={`/detail/${term.id}`}>
                      <Bg
                        style={{
                          background: `url(${imgUrl}${term.backdrop_path}) no-repeat center/cover`,
                        }}
                      />
                      <Title>{term.title}</Title>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </div>
  );
};
