import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const userDB = {
  dbusername: "test",
  dbpw: "123123123",
};

const Wrap = styled.div`
  height: 65vh;
  background: ${mainStyle.bgcolor};
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px auto;
`;

const LoginWrap = styled.div`
  width: 300px;
  height: 700px;
  border: 2px solid;
  text-align: center;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${mainStyle.mainColor};
  border: 2px solid;
  margin: 100px auto;
  p {
    font-size: 40px;
    font-weight: 600;
  }
`;

const Con = styled.div`
  height: 150px;
`;

const Idcon = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 20px auto;
`;

const Password = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 20px auto;
`;

const SLogin = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const Join = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Idsuh = styled.div``;

const Pasuh = styled.div``;

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
    const { username, Password } = getValues();
    const { dbusername, dbpw } = userDB;

    if (username !== dbusername) {
      setError("usernameResult", { message: "아이디가 틀렸습니다" });
    }
    if (Password !== dbpw) {
      setError("passwordResult", { message: "비밀번호가 틀렸습니다." });
    }
  };

  return;

  // <Wrap>
  //   <LoginWrap>
  //     <Logo>
  //       <p>M-movie</p>
  //     </Logo>
  //     <Con>
  //       <input {...register("username",{
  //         required:"아이디는 필수 입니다.",
  //         minLength:{
  //           value:3,
  //           message:"아이디는 3자리 이상 작성해 주세요",
  //         },
  //       })}

  //       >
  //       <Password>비밀번호</Password>
  //       <SLogin>로그인</SLogin>
  //     </Con>
  //     <Join>
  //       <Idsuh>아이디찾기</Idsuh>
  //       <Pasuh>비밀번호찾기</Pasuh>
  //     </Join>
  //   </LoginWrap>
  // </Wrap>
};
