import styled from "styled-components";

export const QrPageBody = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;

  /* background-color: #111; */
  background-color: #dbd6d4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  color: #111;
  font-size: 70px;
  font-weight: 900;
  letter-spacing: -7px;
  z-index: 10;

  user-select: none;
  text-shadow: 0 0 50px rgba(255, 255, 255, 1);
`;

export const TextField = styled.input`
  min-width: 400px;
  margin-top: 6px;
  margin-bottom: 32px;
  border-radius: 999px;
  padding: 10px 20px;

  background-color: #ffffff99;
  color: gray;
  box-shadow: 0 0 50px 6px rgba(255, 255, 255, 1);
`;

export const QrWrapper = styled.div`
  box-shadow: 0 0 60px 12px rgba(255, 255, 255, 1);
`;
