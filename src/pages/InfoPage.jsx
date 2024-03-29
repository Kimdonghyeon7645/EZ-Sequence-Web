import { useEffect, useState } from "react";

const InfoPage = () => {
  const [inData, setInData] = useState("");
  const [outData, setOutData] = useState("");

  useEffect(() => {
    const txtLi = inData.split("+");
    const numLi = [];
    for (var idx in txtLi) {
      const [h, m, s] = txtLi[idx].split(":");
      console.log(h, m,s);
      if (h && m && s) numLi.push(parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s));
    }

    console.log(numLi);
    if (numLi.length > 0) {
      const numSum = numLi.reduce((a, b) => a+b);
      setOutData(`${Math.floor(numSum / 3600)}:${Math.floor(numSum % 3600 / 60)}:${numSum % 60}`)
    }
  }, [inData]);

  return <div>
    <input onChange={(e) => setInData(e.target.value)} />
    <p>{outData}</p>
  </div>;
};

export default InfoPage;
