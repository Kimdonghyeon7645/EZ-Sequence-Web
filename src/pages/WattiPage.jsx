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
import Exam2 from "../assets/watti_exam2.png";
import Logo2 from "../assets/ninewatt_logo.png";

const WattiPage = () => {
  return (
    <Body>
      <div style={{backgroundColor: "#e3e3e3"}}>
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
              <div style={{ height: "40px" }} />
              <Btn>
              <div>Check the case studies</div>
              <div style={{ marginTop: "3px" }}>→</div>
            </Btn>
            </TitleHeader>
          </CenterArea>
        </TitleArea>
      </div>

      <Section1>
        <Section1Title>Watti's case studies</Section1Title>
        <Section1Row>
          <Thumbnail src={Exam2} alt="" />
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
          <Thumbnail src={Exam2} alt="" />
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
          <div style={{ marginTop: "4px" }}>
            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1.5L9.08579 8.58579C9.86683 9.36683 11.1332 9.36684 11.9142 8.58579L19 1.5M2.5 15H18.5C19.0523 15 19.5 14.5523 19.5 14V2C19.5 1.44772 19.0523 1 18.5 1H2.5C1.94772 1 1.5 1.44772 1.5 2V14C1.5 14.5523 1.94772 15 2.5 15Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
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
