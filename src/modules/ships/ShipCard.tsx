import * as React from 'react';
import { ShipDetail } from 'types/ship';
import { Card, Box, Heading, Text, Paragraph, Button } from '@aksara-ui/core';

interface ShipCardProps {
  shipDetail: ShipDetail;
  isSelected?: boolean;
  onSelect?: (shipId: string) => void;
}

const ShipCard: React.FC<ShipCardProps> = ({ shipDetail, onSelect }) => {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(shipDetail.id);
    }
  };

  return (
    <Card elevation={1} display="flex" flexDirection="column" height="100%" minHeight={300}>
      <Box p="sm">
        <Heading scale={400} mb="xs">
          {shipDetail.name || '(no name)'}
        </Heading>
        <Text fontWeight={600} color="grey06">
          {shipDetail.id}
        </Text>
      </Box>
      <Box p="sm" flex="1 1 auto">
        <Paragraph scale={300}>
          <strong>Type: {shipDetail.type}</strong>
        </Paragraph>
        <Paragraph scale={300}>Role: {shipDetail.role}</Paragraph>
        <Paragraph scale={300}>Value: {new Intl.NumberFormat().format(shipDetail.shipValue)}</Paragraph>
        <Paragraph scale={300}>Current Dock: {shipDetail.currentStation}</Paragraph>
      </Box>
      {onSelect && (
        <Box display="flex" justifyContent="flex-end" p="sm">
          <Button type="button" variant="outline" size={32} onClick={handleSelect}>
            Select Ship
          </Button>
        </Box>
      )}
    </Card>
  );
};

export default ShipCard;
