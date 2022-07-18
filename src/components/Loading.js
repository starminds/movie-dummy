import { SpinnerDiamond } from "spinners-react";
import styled from "styled-components";
import { mainStyle } from "./styles/globalStyle";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerDiamond size={100} color={mainStyle.mainColor} />
    </Wrap>
  );
};
