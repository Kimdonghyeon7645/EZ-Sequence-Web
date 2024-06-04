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
  HeaderBtmNav,
  HeaderBtmNavArea,
  HeaderBtmNavTitle,
  HeaderBtmLogo,
  HeaderBtmNavColumn,
  HeaderBtmNavColumnDivider,
} from "./WattiPage.style";
import Logo from "../assets/watti_logo.png";
import Exam1 from "../assets/watti_exam1.png";
import Exam2 from "../assets/watti_exam2.png";
import Exam3 from "../assets/watti_exam3.png";
import Logo2 from "../assets/ninewatt_logo.png";
import Logo3 from "../assets/watti_grey_logo.png";

const CheckSvg = () => {
  return (
    <svg width="40" height="30" viewBox="0 0 45 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.60156 20.0762H12.8613V26.7115H6.60156V20.0762Z" fill="#00A0AD" />
      <path d="M0.353516 13.3633H6.61323V19.9986H0.353516V13.3633Z" fill="#00A0AD" />
      <path d="M12.8916 26.7129H19.1513V33.3482H12.8916V26.7129Z" fill="#00A0AD" />
      <path d="M19.1523 20.0762H25.4121V26.7115H19.1523V20.0762Z" fill="#00A0AD" />
      <path d="M25.3828 13.4277H31.6425V20.063H25.3828V13.4277Z" fill="#00A0AD" />
      <path d="M31.6611 6.79102H37.9209V13.4263H31.6611V6.79102Z" fill="#00A0AD" />
      <path d="M37.8926 0.150391H44.1523V6.78569H37.8926V0.150391Z" fill="#00A0AD" />
    </svg>
  );
};

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
            <div style={{ height: "105px" }} />
            <Btn>
              <div>Check the case studies</div>
              <div style={{ marginTop: "3px" }}>→</div>
            </Btn>
          </TitleHeader>
        </CenterArea>
      </TitleArea>

      <HeaderBtmNav>
        <HeaderBtmNavArea>
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Estimation of building CO2 emissions and potential energy savings using GIS, Big-data, and AI.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>3D Visualization and Analysis of Urban and Building Energy Consumption.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Building Performance Diagnosis and Renovation Planning for Energy Efficiency Improvement.</div>
          </HeaderBtmNavColumn>
          <HeaderBtmNavColumnDivider />
          <HeaderBtmNavColumn>
            <CheckSvg />
            <div>Recommend appropriate types of renovations and their expected benefits, and connect them with local renovation contractors.</div>
          </HeaderBtmNavColumn>
        </HeaderBtmNavArea>
        <HeaderBtmNavTitle>
          Feasibility Evaluation and Implementation Support <br />
          for Sustainable Energy Solutions.
        </HeaderBtmNavTitle>
        <HeaderBtmLogo src={Logo3} alt="" />
      </HeaderBtmNav>

      <Section1>
        <Section1Title>Watti's case studies</Section1Title>
        <Section1Row>
          <Thumbnail src={Exam2} alt="" />
          <Article1>
            <Article1Title>watti in Gangnam-gu</Article1Title>
            <Article1Content>
              The platform visualizes building energy use and CO2 emissions, offering emission rankings and comparisons across Seoul. It aids Gangnam District's
              carbon neutrality and green remodeling efforts, promoting community sustainability.
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
        <Section1Row>
          <Article1>
            <Article1Title>watti in Paris</Article1Title>
            <Article1Content>
              Using data and simulations, we provide energy renovation scenarios and assess building energy efficiency to aid in decision-making for
              renovations. This approach facilitates partnerships with renovation experts, enabling effective renovations that reduce greenhouse gas emissions
              and lower energy costs.
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
          <Thumbnail src={Exam1} alt="" />
        </Section1Row>
        <Section1Row>
          <Thumbnail src={Exam3} alt="" />
          <Article1>
            <Article1Title>watti in Seoul</Article1Title>
            <Article1Content>
              Wattie's Seoul prototype visualizes monthly electricity and gas consumption, identifies buildings with low energy efficiency for green remodeling
              prioritization, and presents comprehensive energy metrics on a 3D map, supported by advanced analysis tools.
            </Article1Content>
            <Article1Btn>
              <div>Check this case</div>
              <div>→</div>
            </Article1Btn>
          </Article1>
        </Section1Row>
      </Section1>
      <Section2>
        <Section2Title>CONTACT US</Section2Title>
        <Section2Btn>
          <div>E-mail</div>
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
              <div>Gangnam-gu</div>
            </FooterTableRow>
            <FooterTableRow>
              <div>Paris</div>
            </FooterTableRow>
            <FooterTableRow>
              <div>Seoul</div>
            </FooterTableRow>
          </FooterTable>
        </FooterColumn>
      </Footer>
      <FooterNav>
        <FooterNavBtns>
          {/* <div>개인정보취급방침</div>
          <div>이용약관</div>
          <div>이메일무단수집거부</div> */}
        </FooterNavBtns>
        <FooterNavBtns>Copyright ⓒ NINEWATT All rights reserved.</FooterNavBtns>
      </FooterNav>
    </Body>
  );
};

export default WattiPage;
