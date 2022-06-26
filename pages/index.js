import HandleIndex from './handle-index';
import Head from 'next/head';
import React from 'react';
import Landing from './landing';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet ='utf-8' />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel={'shortcut icon'} sizes="32x32" href={'/favicon_300.ico'} />
        <link rel="apple-touch-icon" sizes="57x57" href={'/favicon_300.ico'} />
        <link rel="apple-touch-icon" sizes="60x60" href={'/favicon_300.ico'} />
        <link rel="apple-touch-icon" sizes="72x72" href={'/favicon_300.ico'} />
        <link rel="apple-touch-icon" sizes="180x180" href={'/favicon_300.ico'} />
        <link rel="icon" type="image/png" sizes="192x192" href={'/favicon_300.ico'} />
        <title>Carmerce에 오신 것을 환영합니다. | WE ARE COMING SOON</title>
      </Head>
     <Landing />
    </>
  )
}
