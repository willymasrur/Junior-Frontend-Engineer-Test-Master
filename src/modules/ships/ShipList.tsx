import * as React from 'react';
import { Box, BoxProps } from '@aksara-ui/core';

import { ShipDetail } from 'types/ship';
import { BASE_GRID_SIZE } from 'utils/variables';
import ShipCard from './ShipCard';

interface ShipListProps extends BoxProps {
  ships: ShipDetail[];
  selectedShipId?: string;
  onSelect?: (shipId: string) => void;
}

export const ShipListGrid: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(auto-fill, minmax(calc(${BASE_GRID_SIZE} / 3 - 24px), 1fr))`}
      gridGap="24px"
      height="100%"
      minHeight={300}
      {...rest}
    >
      {children}
    </Box>
  );
};

const ShipList: React.FC<ShipListProps> = ({ ships, onSelect, selectedShipId, ...rest }) => {
  return (
    <ShipListGrid {...rest}>
      {ships.map(ship => (
        <ShipCard key={ship.id} shipDetail={ship} isSelected={selectedShipId === ship.id} onSelect={onSelect} />
      ))}
    </ShipListGrid>
  );
};

export default ShipList;
