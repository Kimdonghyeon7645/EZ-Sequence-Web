import { styled, css } from "styled-components";

export const HomePageBody = styled.div`
  margin: 0;
  overflow: hidden;
  background-color: #b0bde022;
`;

export const HeaderNavBar = styled.div`
  height: 75px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid #11111110; */
`;

export const HeaderNavBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoImg = styled.img`
  height: 44px;
  width: 45px;
`;

export const Section1 = styled.div`
  display: flex;
  padding-top: 110px;
  padding-bottom: 80px;
`;

export const ScreenshotImg = styled.img`
  width: 77%;
  max-width: 1200px;
  margin-top: -80px;
  margin-left: 65px;
  border-radius: 20px;
`;

export const TitleArea = styled.div`
  position: relative;
  padding-left: 65px;
`;

export const TitleEle = styled.div`
  user-select: none;
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
          margin-top: 28px;
          font-weight: 500;
          font-size: 40px;
          color: #11111160;
          letter-spacing: -3px;
          line-height: 46px;
        `
      : props.$seq === 3
      ? css`
          margin-top: 6px;
          padding-left: 4px;
          font-size: 30px;
          font-weight: 400;
          color: #11111140;
          letter-spacing: -2px;
          line-height: 38px;
        `
      : ``}
`;

export const DownloadBtn = styled.div`
  display: inline-block;
  margin: 35px 0 0 6px;
  padding: 15px 65px;
  border-radius: 8px;
  border: none;
  background-color: #222;
  color: white;
  font-size: 19px;
  letter-spacing: -1.5px;

  user-select: none;
  cursor: pointer;
`;

export const Section2 = styled.div`
  height: 1000px;
  background-color: white;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const SectionTitle = styled.div`
  padding: 60px 0;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -1.5px;
  color: #111;
`;

export const Footer = styled.div`
  padding: 85px 120px;
  height: 260px;
  background-color: #131313;
  color: white;
`;

export const FooterTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const FooterTitle = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

export const FooterSubTitle = styled.div`
  margin-top: -1.5px;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: -0.3px;
`;

export const WhiteLogoImg = styled.img`
  filter: invert(100%);
  height: 39px;
  width: 39px;
`;

export const FooterNavArea = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
