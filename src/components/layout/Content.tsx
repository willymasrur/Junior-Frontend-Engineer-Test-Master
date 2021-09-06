import styled from 'styled-components';
import { Box } from '@aksara-ui/core';

const MainBase = Box.withComponent('main');

const Content = styled(MainBase)`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export default Content;
