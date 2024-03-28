import {
  CardBody,
  CardTitle,
  CardWrapper,
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
  LogoTitle,
  NavItem,
  SampleImg,
  ScreenshotImg,
  Section1,
  Section2,
  Section2CardView,
  SectionTitle,
  TitleArea,
  TitleEle,
  WhiteLogoImg,
} from "./HomePage.style";
import Logo from "../assets/logo.png";
import ScreenShot from "../assets/screenshot.png";
import { section2CardData } from "../constants/homeSectionData";


const HomePage = () => {
  return (
    <HomePageBody>
      <HeaderNavBar>
        <HeaderNavBarRow>
          <LogoImg src={Logo} />
          <LogoTitle>EZ-Sequence</LogoTitle>
        </HeaderNavBarRow>
        <HeaderNavBarRow>
          <NavItem>제품</NavItem>
          <NavItem>사용법</NavItem>
          <NavItem>문의</NavItem>
          <NavItem>다운로드</NavItem>
        </HeaderNavBarRow>
      </HeaderNavBar>

      <Section1>
        <TitleArea>
          <TitleEle $seq={1}>EZ-Sequence</TitleEle>
          <TitleEle $seq={2}>이지-시퀀스, 가장 쉬운 시퀀스 회로 프로그램</TitleEle>
          <TitleEle $seq={3}>마우스 클릭으로 1분만에 회로도 그리기</TitleEle>
          <DownloadBtn>데모판 다운로드</DownloadBtn>
        </TitleArea>
        <ScreenshotImg src={ScreenShot} alt="screenshot" />
      </Section1>

      <Section2>
        <SectionTitle>EZ-Sequence 프로그램은,</SectionTitle>
        <Section2CardView>
          {section2CardData.map((e) => (
            <CardWrapper>
              <SampleImg src={e.img} />
              <CardTitle>{e.title}</CardTitle>
              <CardBody>{e.body}</CardBody>
            </CardWrapper>
          ))}
        </Section2CardView>
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
