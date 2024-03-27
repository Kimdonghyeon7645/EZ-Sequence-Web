import { styled, css } from "styled-components";

export const HomePageBody = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;

  background-color: #b0bde022;
`;

export const LogoImg = styled.img`
  height: 45px;
  width: 48px;
  margin-top: 20px;
  margin-left: 22px;
  margin-bottom: 60px;
`;

export const TitleArea = styled.div`
  position: relative;
  left: 120px;
  width: 90%;
`;

export const TitleEle = styled.div`
  ${(props) =>
    props.$seq === 1
      ? css`
          font-weight: 800;
          font-size: 80px;
          color: #111;
        `
      : props.$seq === 2
      ? css`
          margin-top: 5px;
          font-weight: 500;
          font-size: 40px;
          color: #11111160;
          letter-spacing: -3px;
        `
      : props.$seq === 3
      ? css`
          margin-top: -1px;
          padding-left: 4px;
          font-size: 29px;
          font-weight: 500;
          color: #11111133;
          letter-spacing: -1.5px;
        `
      : ``}
`;

export const DownloadBtn = styled.div`
  border-radius: 12px;
  border: none;
  background-color: #333;
  color: white;
  padding: 10px 30px;
`;
