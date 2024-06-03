import styled from "styled-components";
import backgroundImage from "../assets/background.jpeg";
import ContactBg from "../assets/contact_us_bg.png";

export const Body = styled.div`
  width: 100%;
`;

export const TopNav = styled.div`
  padding: 0 50px 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WattiLogo = styled.img`
  height: 50px;
`;

export const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
  font-size: 20px;
  font-weight: 300;
`;

export const Btn = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;
  width: 320px;

  border-radius: 8px;
  border: none;
  background-color: #00a0ad;
  color: white;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0.2px;

  user-select: none;
  cursor: pointer;
`;

export const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #333;
  text-align: center;
  font-weight: 700;
  font-size: 80px;
  line-height: 90px;
  letter-spacing: 0px;
`;

export const SubTitle = styled.div`
  color: #4ab1bd;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: 0px;
  margin-bottom: -4px;
`;

export const PrimaryColor = styled.span`
  color: #599eab;
  font-weight: 800;
`;

export const TitleBg = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 950px;
  background-image: url(${backgroundImage});
  background-size: cover;
  filter: blur(3px);
  z-index: 1;
`;

export const TitleArea = styled.div`
  height: 905px;
  position: relative;
  padding: 20px;
  z-index: 2;
`;

export const CenterArea = styled.div`
  padding-top: 180px;
  display: flex;
  justify-content: center;
`;

export const Section1 = styled.div`
  position: relative;
  height: 2000px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f6f6f6;
  z-index: 3;
`;

export const Section1Title = styled.div`
  margin: 150px 0 0 0;
  font-size: 50px;
  color: #444;
  font-weight: 600;
  letter-spacing: -0.6px;
`;

export const Section1Row = styled.div`
  margin-top: 150px;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  /* gap: 40px; */
`;

export const Thumbnail = styled.img`
  height: 370px;
  width: 620px;
  background-color: black;

  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;

export const Article1 = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const Article1Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.2px;
  color: #444;
`;

export const Article1Content = styled.div`
  font-size: 26px;
  font-weight: 200;
  color: #444;
`;

export const Article1Btn = styled.div`
  margin-top: 20px;
  height: 58px;
  width: 220px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 18px;
  font-weight: 500;
  color: #888;
  border: 1px solid #aaa;

  cursor: pointer;
`;

export const Section2 = styled.div`
  position: relative;
  height: 450px;
  background-image: url(${ContactBg});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 20%;
`;

export const Section2Title = styled.div`
  color: white;
  font-size: 54px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const Section2Btn = styled.div`
  margin-top: 20px;
  height: 58px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: 20px;
  font-weight: 500;
  color: white;
  border: 1px solid white;

  cursor: pointer;
`;

export const Footer = styled.div`
  height: 380px;
  padding: 0 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 17px;
  font-weight: 400;
  letter-spacing: -1px;
  color: #aaa;

  line-height: 28px;
`;

export const FooterColumn = styled.div`
`;

export const NinewattLogo = styled.img`
  height: 80px;
  margin-bottom: 45px;
`;

export const FooterTable = styled.div`
  height: 220px;
`;

export const FooterTableHeader = styled.div`
  display: flex;
  font-weight: 600;
  gap: 20px;
`;

export const FooterTableRow = styled.div`
  padding-top: 10px;
  display: flex;
  padding-left: 75px;
  text-align: center;
  color: #ccc;
`;

export const FooterNav = styled.div`
  height: 70px;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #aaa;

  font-size: 17px;
  font-weight: 400;
  letter-spacing: -1px;
  color: #aaa;
`;

export const FooterNavBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 5px;
`;
