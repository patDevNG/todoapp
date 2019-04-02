import React from "react";
import Head from "next/head";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>My Next React Todo App</title>
        <link rel="stylesheet" href="../../static/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
      </Head>
       <div className="d-flex flex-column justify-content-between">
       <div className="container">{props.children}</div>
       
      </div>
    </div>
  );
};

export default Layout;
