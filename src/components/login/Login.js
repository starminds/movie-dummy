import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const userDB = {
  dbusername: "test",
  dbpw: "a123123123",
};

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  border: 1px solid ${mainStyle.mainColor};
  align-items: center;
  padding: 80px 50px;
  border-radius: 10px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
      all: unset;
      border: 1px solid ${mainStyle.mainColor};
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
    }
  }
`;

const TitleBox = styled.div`
  width: 250px;
  height: 50px;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  p {
    font-size: 30px;
    font-weight: 500;
    color: ${mainStyle.mainColor};
  }
`;

const Button = styled.div`
  all: unset;
  width: 100%;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: ${mainStyle.mainColor};
  box-sizing: border-box;
  color: ${mainStyle.bgcolor};
  border-radius: 10px;
  opacity: 0.8;
  cursor: pointer;
  transition: 0.5s;
`;
const ErrorMessage = styled.div`
  font-weight: 900;
  color: ${mainStyle.mainColor};
  margin-bottom: 10px;
`;

export const Login = () => {
  const navigate = useNavigate;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    const { username, password } = getValues();
    const { dbusername, dbpw } = userDB;

    if (username !== dbusername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }

    if (password !== dbpw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다" });
    }

    if (username === dbusername && password === dbpw) {
      navigate("/");
    }
  };

  console.log(errors);

  return (
    <Wrap>
      <LoginWrap>
        <TitleBox>
          <Logo>
            <Link to={"/"}>
              <p>M-movie</p>
            </Link>
          </Logo>
        </TitleBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
              minLength: {
                value: 3,
                message: "아이디는 3자리 이상 작성해 주세요",
              },
            })}
            type="text"
            placeholder="이메일이나 아이디를 입력 해 주세여"
          />

          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}
          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
              minLength: {
                value: 8,
                message: "패스워드는 8자리 이상 작성해주세요",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/,
                message:
                  "패스워드는 8자리이상 문자,숫자조합으로 작성하셔야 됩니다 ",
              },
            })}
            type="password"
            placeholder="패스워드"
          />
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}
          <Button
            opacity={isValid ? 1 : 0.5}
            cursor={isValid ? "pointer" : "auto"}
          >
            로그인
          </Button>
        </form>
      </LoginWrap>
    </Wrap>
  );
};
