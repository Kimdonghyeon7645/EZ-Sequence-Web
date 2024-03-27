import { DownloadBtn, HeaderNavBar, HomePageBody, LogoImg, ScreenshotImg, Section1, TitleArea, TitleEle } from "./HomePage.style";
import Logo from "../assets/logo.png";
import ScreenShot from "../assets/screenshot.png";

const HomePage = () => {
  return (
    <HomePageBody>
      <HeaderNavBar>
        <LogoImg src={Logo} />
      </HeaderNavBar>

      <Section1>
        <TitleArea>
          <TitleEle $seq={1}>EZ-Sequence</TitleEle>
          <TitleEle $seq={2}>이지-시퀀스, 가장 쉬운 시퀀스 회로 프로그램</TitleEle>
          <TitleEle $seq={3}>마우스 클릭으로 1분만에 회로도 그리기</TitleEle>
          <DownloadBtn>무료 다운로드</DownloadBtn>
        </TitleArea>
        <ScreenshotImg src={ScreenShot} alt="screenshot" />
      </Section1>
    </HomePageBody>
  );
};

export default HomePage;
