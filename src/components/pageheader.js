import { PageHeader } from "antd";
import React from "react";
import "antd/dist/antd.css";

function Pageheader() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="CryptoBase"
        subTitle="By Dhruvil Prajapati"
      />
    </div>
  );
}

export default Pageheader;
