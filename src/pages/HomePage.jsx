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
import Sample1 from "../assets/sample1.png";
import Sample2 from "../assets/sample2.png";
import Sample3 from "../assets/sample3.png";

const HomePage = () => {
  const section2CardData = [
    {
      img: Sample1,
      title: "마우스 클릭만으로도 작도 가능",
      body: "어려운 사용법 & 단축키는 그만!\n이젠 마우스 클릭만 사용해도 시퀀스 회로를 그릴수 있습니다.\n단지, 배치할 심볼을 선택하고 원하는 위치에 배치하면 끝입니다.\n라인도 시작점과 끝점만 클릭하여 쉽게 작도할 수 있습니다.",
    },
    {
      img: Sample2,
      title: "작도시 정확한 위치보정 제공",
      body: "라인/심볼을 연결할 때, 정확한 위치에 배치할 수 있도록\n자석과 같이 착 달라붙는 보정 기능을 제공합니다.\n마우스로 조심조심 위치를 조절할 필요없이,\n시원시원하게 작도가 가능합니다!",
    },
    {
      img: Sample3,
      title: "다양한 심볼/글자 입력 가능",
      body: "더이상 일일히 필요한 심볼을 직접 만들 필요가 없습니다.\n30개가 넘는 다양한 심볼 중에서, 원하는 심볼을 골라쓰면 끝입니다.\n또한 원하는 위치에 텍스트박스를 추가해서 원하는 별명, 설명을 추가할 수 있습니다.",
    },
  ];

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
