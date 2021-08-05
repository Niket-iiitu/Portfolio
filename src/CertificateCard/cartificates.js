import React from "react";
import Certificate from "./Card/card";

const CertificateSet = () => {
  return (
    <div
      className="row"
      style={{
        paddingLeft: "40px",
        paddingRight: "40px",
        alignItems: "center",
      }}
    >
      <Certificate
        url="https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/0000000000435bad"
        title="KickStart 2021"
        img="KS2021.jpg"
      />

      <Certificate
        url="https://codingcompetitions.withgoogle.com/kickstart/certificate/summary/000000000019ffc6"
        title="Kick Start 2020"
        img="KS2020.jpg"
      />
      <Certificate
        url="https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000004360f1"
        title="Code Jam 2021"
        img="CJ2021.jpg"
      />
      <Certificate
        url="https://codingcompetitions.withgoogle.com/codejam/certificate/summary/00000000001857b3"
        title="Code Jam 2020"
        img="CJ2020.jpg"
      />
      <Certificate
        url="https://media.geeksforgeeks.org/courses/certificates/4a16e03e69cf5db53a1ff99eb2e52a02.pdf"
        title="GFG DSA"
        img="GFGDSA.jpg"
      />
    </div>
  );
};
export default CertificateSet;
