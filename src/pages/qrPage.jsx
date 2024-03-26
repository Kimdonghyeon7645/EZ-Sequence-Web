import { useState } from "react";
import { Header, QrPageBody, QrWrapper, TextField } from "./qrPage.style";
import QRCode from "react-qr-code";

const QrPage = () => {
  const [qrValue, setQrValue] = useState("");

  return (
    <QrPageBody>
      <Header>큐-알<span style={{marginLeft: "20px"}}/>제러네이터</Header>
      <TextField onChange={(e) => setQrValue(e.target.value)} />
      <QrWrapper><QRCode value={qrValue} size="200px" /></QrWrapper>
    </QrPageBody>
  );
};

export default QrPage;
