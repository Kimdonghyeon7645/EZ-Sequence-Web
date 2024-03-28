import {
  DownloadBtn,
  Footer,
  FooterNavArea,
  FooterSubTitle,
  FooterTitle,
  FooterTitleArea,
  HeaderNavBar,
  HeaderNavBarRow,
  HomePageBody,
  LogoImg,
  ScreenshotImg,
  Section1,
  Section2,
  SectionTitle,
  TitleArea,
  TitleEle,
  WhiteLogoImg,
} from "./HomePage.style";
import Logo from "../assets/logo.png";
import ScreenShot from "../assets/screenshot.png";

const HomePage = () => {
  return (
    <HomePageBody>
      <HeaderNavBar>
        <HeaderNavBarRow>
          <LogoImg src={Logo} />
          <div>EZ-Sequence</div>
        </HeaderNavBarRow>
        <HeaderNavBarRow>
          <div>제품</div>
          <div>사용법</div>
          <div>문의</div>
          <div>다운로드</div>
          <div>언어</div>
        </HeaderNavBarRow>
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

      <Section2>
        <SectionTitle>EZ-Sequence 프로그램은,</SectionTitle>
      </Section2>

      <Footer>
        <FooterTitleArea>
          <WhiteLogoImg src={Logo} />
          <div>
            <FooterTitle>EZ-Sequence</FooterTitle>
            <FooterSubTitle>Electron Zang-eo(eel) Sequence</FooterSubTitle>
          </div>
        </FooterTitleArea>
        <FooterNavArea></FooterNavArea>
      </Footer>
    </HomePageBody>
  );
};

export default HomePage;
