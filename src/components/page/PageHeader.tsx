import * as React from 'react';
import { Box, Heading } from '@aksara-ui/core';

import GridWrapper from 'components/layout/GridWrapper';

interface PageHeaderProps {
  title: string;
  rightContent?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, rightContent }) => {
  return (
    <GridWrapper>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gridColumn="3/4"
        py="xl"
      >
        <Box>
          <Heading as="h1" scale={700}>
            {title}
          </Heading>
        </Box>
        {rightContent}
      </Box>
    </GridWrapper>
  );
};

export default PageHeader;
