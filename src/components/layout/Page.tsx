import * as React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

interface PageProps {
  title?: string;
}

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Page: React.SFC<PageProps> = ({ children, title }) => (
  <Root>
    <Head>
      <title>{title || 'Shipyard'}</title>
    </Head>
    {children}
  </Root>
);

export default Page;
