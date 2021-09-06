import * as React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { AksaraProvider, GlobalStyles } from '@aksara-ui/core';

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <AksaraProvider>
        <GlobalStyles />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Shipyard</title>
        </Head>
        <Component {...pageProps} />
      </AksaraProvider>
    );
  }
}
