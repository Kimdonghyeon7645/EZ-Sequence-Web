import {
  Body,
  Btn,
  CenterArea,
  NavRow,
  PrimaryColor,
  Section1,
  Article1,
  Section1Row,
  Section1Title,
  SubTitle,
  Thumbnail,
  TitleArea,
  TitleBg,
  TitleHeader,
  TopNav,
  WattiLogo,
  Article1Title,
  Article1Content,
  Article1Btn,
  Section2,
  Footer,
  Section2Title,
  Section2Btn,
  FooterNav,
  FooterNavBtns,
  FooterColumn,
  NinewattLogo,
  FooterTable,
  FooterTableHeader,
  FooterTableRow,
} from "./WattiPage.style";
import Logo from "../assets/watti_logo.png";
import Exam1 from "../assets/watti_exam1.png";
import Logo2 from "../assets/ninewatt_logo.png";

const WattiPage = () => {
  return (
    <Body>
      <TitleBg />
      <TitleArea>
        <TopNav>
          <WattiLogo src={Logo} alt="" />
          <NavRow>
            <div>
              <PrimaryColor>Home</PrimaryColor>
            </div>
            <div>Case studies</div>
            <div>Language</div>
          </NavRow>
        </TopNav>

        <CenterArea>
          <TitleHeader>
            <SubTitle>WE ALWAYS LIVE THE CITY</SubTitle>
            <div>
              3D Map-Based Urban Building <br /> Energy Analysis Platform
            </div>
            <div style={{ height: "100px" }} />
            <Btn>
              <div>Check the case studies</div>
              <div>→</div>
            </Btn>
          </TitleHeader>
        </CenterArea>
      </TitleArea>

      <Section1>
        <Section1Title>Watti's case studies</Section1Title>
        <Section1Row>
          <Thumbnail src={Exam1} alt="" />
          <Article1>
            <Article1Title>watti in Gangnam-gu</Article1Title>
            <Article1Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
        <Section1Row>
          <Article1>
            <Article1Title>watti in France</Article1Title>
            <Article1Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
          <Thumbnail src={Exam1} alt="" />
        </Section1Row>
        <Section1Row>
          <Thumbnail src={Exam1} alt="" />
          <Article1>
            <Article1Title>watti in Gangnam-gu</Article1Title>
            <Article1Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
      </Section1>
      <Section2>
        <Section2Title>Contact Us</Section2Title>
        <Section2Btn>
          <div>contact us</div>
          <div>@</div>
        </Section2Btn>
      </Section2>
      <Footer>
        <FooterColumn>
          <NinewattLogo src={Logo2} alt="" />
          <div>
            204 Convensia-daero, Yeonsu-gu, Incheon | 21, Baekbeom-ro 31-gil, Mapo-gu, Seoul, Republic of Korea Korean <br />
            EID : 107-88-42750 | NINEWATT Co., Ltd | CEO : YeongRok Kim <br />
            ninewatt@ninewatt.com | 070-1234-2345
          </div>
        </FooterColumn>
        <FooterColumn>
          <FooterTable>
            <FooterTableHeader>
              <div>HOME</div>
              <div>CASE STUDIES</div>
              <div>CONTACT</div>
            </FooterTableHeader>
            <FooterTableRow>
              <div>gangnam-gu</div>
            </FooterTableRow>
            <FooterTableRow>
              <div>paris</div>
            </FooterTableRow>
            <FooterTableRow>
              <div>cocacola</div>
            </FooterTableRow>
          </FooterTable>
        </FooterColumn>
      </Footer>
      <FooterNav>
        <FooterNavBtns>
          <div>개인정보취급방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div>
        </FooterNavBtns>
        <FooterNavBtns>Copyright ⓒ NINEWATT All rights reserved.</FooterNavBtns>
      </FooterNav>
    </Body>
  );
};

export default WattiPage;
