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
        url="https://www.credly.com/badges/38825b57-3aa4-4a3a-8353-77c2d564a6b1/public_url"
        title="AWS Cloud Particioner"
        img="AWSCP.jpg"
      />
      <Certificate
        url="https://media.geeksforgeeks.org/courses/certificates/4a16e03e69cf5db53a1ff99eb2e52a02.pdf"
        title="GFG DSA"
        img="GFGDSA.jpg"
      />

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
      {/* <Certificate
        url="https://www.udemy.com/certificate/UC-1e2be787-6b96-4b46-adef-0967db84880d/"
        title="Udemy C++"
        img="UCPP.jpg"
      /> */}
      <Certificate
        url="https://www.udemy.com/certificate/UC-7e016d1c-6400-4496-90bf-b482a2bbe051/"
        title="Udemy Java"
        img="UJava.jpg"
      />
      <Certificate
        url="https://www.the-cca.org/?watupro_view_certificate=1&taking_id=104906&id=1"
        title="Java Level 1"
        img="Java1.jpg"
      />
      <Certificate
        url="https://www.the-cca.org/?watupro_view_certificate=1&taking_id=104906&id=1"
        title="Java Level 2"
        img="Java2.jpg"
      />
      <Certificate
        url="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b3eb82ce-da6a-4dc2-9c55-2f800343e759.pdf"
        title="Android Studio"
        img="Android.jpg"
      />
      <Certificate
        url="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3ce31dce-389a-4942-88a9-ffb828dfb5af.pdf"
        title="Machine Learning"
        img="ML.jpg"
      />
      <Certificate
        url="https://udemy-certificate.s3.amazonaws.com/pdf/UC-3ce31dce-389a-4942-88a9-ffb828dfb5af.pdf"
        title="Open CV"
        img="OpenCV.jpg"
      />
    </div>
  );
};
export default CertificateSet;
