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
        width: "100vw",
        justifyContent: "center",
      }}
    >
      <Certificate
        url="https://www.coursera.org/account/accomplishments/verify/SDWBVJRNNRZQ"
        title="Data Structure and Backend with Java"
        img="Java.jpeg"
      />
      <Certificate
        url="https://www.linkedin.com/learning/certificates/4650d2583b82af81b01fd7ff0cbd02a5393f7178174fa0bd42d4e7e6afb926cd?u=73591282"
        title="Become a Full Stack Web Developer"
        img="1700373639754.jpeg"
      />
      <Certificate
        url="https://www.linkedin.com/learning/certificates/963e6a8b8b016530e4fb04abc0b155a546722921987c8caaded12eb4090a2214?u=73591282"
        title="SQL Essential Training"
        img="1700355462945.jpeg"
      />
    </div>
  );
};
export default CertificateSet;
