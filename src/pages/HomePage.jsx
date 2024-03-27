import { HomePageBody, LogoImg, TitleArea, TitleEle } from "./HomePage.style";
import Logo from "../assets/logo.png";

const HomePage = () => {
  return (
    <HomePageBody>
      <LogoImg src={Logo} />
      <TitleArea>
        <TitleEle $seq={1}>EZ-Sequence</TitleEle>
        <TitleEle $seq={2}>이지-시퀀스, 가장 쉬운 시퀀스 회로 프로그램</TitleEle>
        <TitleEle $seq={3}>마우스 클릭으로 1분만에 회로도 그리기</TitleEle>
      </TitleArea>
    </HomePageBody>
  );
};

export default HomePage;
