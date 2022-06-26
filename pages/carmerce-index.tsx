import React from 'react';
import Head from 'next/head';
import theme from "../src/styles/theme";
import CountDate from '../src/components/count/count-date'
import {Layout, Container, CountTxt} from '../src/styles/count';

const CarmerceIndex = () => {
  let deadline = "april, 01, 2022";

  return(
    <Layout theme={theme}>
      <Head>
        <meta charSet ='utf-8' />
        <meta
            name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Carmerce에 오신 것을 환영합니다. | WE ARE COMING SOON</title>
      </Head>

      <Container theme={theme}>
        <h1>
          <img src="/images/carmerce_wh_cc.svg"/>
        </h1>
        <h3>WE ARE COMING SOON</h3>
        <CountDate deadline={deadline}/>
        <CountTxt theme={theme}>
          <span>DAYS</span>
          <span>HOURS</span>
          <span>MINUTES</span>
          <span>SECONDS</span>
        </CountTxt>
      </Container>
    </Layout>
  );
};

export default CarmerceIndex;



