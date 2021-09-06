import * as React from 'react';
import { format } from 'date-fns';

import { Box, Text } from '@aksara-ui/core';
import useClock from 'utils/useClock';
import GridWrapper from './GridWrapper';

interface NavigationProps {
  currentStation: string;
}

const Navigation: React.SFC<NavigationProps> = ({ currentStation }) => {
  const time = useClock();

  return (
    <GridWrapper
      as="header"
      height="100%"
      minHeight={60}
      py="sm"
      px="md"
      bg="grey01"
      borderBottom="1px solid"
      borderBottomColor="grey03"
    >
      <Box display="flex" flexDirection="row" gridColumn="3/4">
        <Box display="flex" alignItems="center" mr="xl" style={{ userSelect: 'none' }}>
          <Text>
            Welcome to <strong>{currentStation}</strong>
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          flex="1 1 auto"
          style={{ userSelect: 'none' }}
        >
          <Text>{format(time, 'EEEE, dd MMMM yyyy – HH:mm:ss')}</Text>
        </Box>
      </Box>
    </GridWrapper>
  );
};

export default Navigation;
