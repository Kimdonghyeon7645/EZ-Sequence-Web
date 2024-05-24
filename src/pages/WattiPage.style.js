import styled from "styled-components";
import backgroundImage from '../assets/background.jpeg';


export const Body = styled.div`
  padding: 20px;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-position: center;
`

export const TopNav = styled.div`
  padding: 3px 10px 80px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WattiLogo = styled.img`
  height: 22px;
`;

export const NavRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
`;

export const Btn = styled.div`
  display: inline-block;
  padding: 11px 22px 11px 22px;
  border-radius: 8px;
  border: none;
  background-color: #599eab;
  color: white;
  font-size: 16.5px;
  font-weight: 500;
  letter-spacing: -1px;

  user-select: none;
  cursor: pointer;
`;

export const TitleHeader1 = styled.div`
  padding: 0 10px;

  color: #222;
  font-weight: 600;
  /* font-size: 62px; */
  /* line-height: 74px; */
  font-size: 74px;
  line-height: 84px;
  letter-spacing: 1px;
`;

export const PrimaryColor = styled.span`
  color: #599eab;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  height: 550px;
  width: 100%;
  padding: 35px 5px 30px 5px;
`;

export const GalleryColumn = styled.div`
  padding: 0 10px;
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const GalleryEle1 = styled.div`
  height: 100%;
  width: 65%;
  background-color: gray;
`;

export const GalleryEle2 = styled.div`
  height: 50%;
  width: 100%;
  background-color: gray;
`;

export const Content1 = styled.div`
  padding: 0 15px;

  color: #555;
  font-size: 24px;
  font-weight: 300;
  line-height: 45px;
  letter-spacing: -0.5px;
`;
