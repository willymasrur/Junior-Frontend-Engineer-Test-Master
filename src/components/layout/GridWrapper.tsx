import styled from 'styled-components';
import { Box } from '@aksara-ui/core';
import { BASE_GRID_SIZE } from 'utils/variables';

const GridWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${BASE_GRID_SIZE}) 1fr 1fr;
`;

export default GridWrapper;
