import { styled, css } from "styled-components";

export const HomePageBody = styled.div`
  margin: 0;
  padding-bottom: 60px;
  overflow: hidden;

  background-color: #b0bde022;
`;

export const HeaderNavBar = styled.div`
  height: 90px;
  width: 100vw;
`;

export const LogoImg = styled.img`
  height: 45px;
  width: 48px;
  padding: 22px;
`;

export const Section1 = styled.div`
  display: flex;
  padding-top: 110px;
`;

export const ScreenshotImg = styled.img`
  width: 80%;
  margin-top: -80px;
  margin-left: 70px;
`;


export const TitleArea = styled.div`
  position: relative;
  padding-left: 60px;
`;

export const TitleEle = styled.div`
  ${(props) =>
    props.$seq === 1
      ? css`
          font-weight: 800;
          font-size: 80px;
          line-height: 70px;
          color: #111;
        `
      : props.$seq === 2
      ? css`
          margin-top: 25px;
          font-weight: 500;
          font-size: 40px;
          color: #11111160;
          letter-spacing: -3.3px;
        `
      : props.$seq === 3
      ? css`
          margin-top: -1px;
          padding-left: 4px;
          font-size: 30px;
          font-weight: 500;
          color: #11111133;
          letter-spacing: -2px;
        `
      : ``}
`;

export const DownloadBtn = styled.div`
  display: inline-block;
  margin: 35px 0 0 6px;
  padding: 16px 70px;
  border-radius: 8px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 21px;
  letter-spacing: -1px;
  cursor: pointer;
`;
