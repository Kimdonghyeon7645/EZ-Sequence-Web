import {
  Body,
  Btn,
  Content1,
  GalleryColumn,
  GalleryEle1,
  GalleryEle2,
  GalleryWrapper,
  NavRow,
  PrimaryColor,
  TitleHeader1,
  TopNav,
  WattiLogo,
} from "./WattiPage.style";
import Logo from "../assets/watti_logo.png";

const WattiPage = () => {
  return (
    <Body>
      {/* <div>WE ALWAYS LIVE THE CITY</div> */}
      <TopNav>
        <WattiLogo src={Logo} alt="" />
        <NavRow>
          <div>제품 소개</div>
          <div>문의하기</div>
          <Btn>체험판 시작하기</Btn>
        </NavRow>
      </TopNav>

      <TitleHeader1>
        3D Map-Based Urban Building <br /> Energy Analysis Platform, <PrimaryColor>WATTI</PrimaryColor>
      </TitleHeader1>

      {/* <GalleryWrapper>
        <GalleryEle1></GalleryEle1>
        <GalleryColumn>
          <GalleryEle2></GalleryEle2>
          <GalleryEle2></GalleryEle2>
        </GalleryColumn>
      </GalleryWrapper> */}

      {/* <div style={{height: "20px"}} />
      <Content1>
        와티는 20??년부터 시작된 프로젝트로, 대충 이곳 저곳 고객사들이 사용하는 검증된 서비스입니다. <br />
        어떤 어떤 기능과 같이, 다른 서비스에서 볼수 없는 와티만의 서비스를 제공합니다. <br />
        와티를 통해 에너지 절약으로 우주 평화에 기여하는 솔루션입니다.
      </Content1> */}
    </Body>
  );
};

export default WattiPage;
