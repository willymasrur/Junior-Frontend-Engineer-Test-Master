import * as React from 'react';
import useSWR from 'swr';

import { Text, Box, Stack, Heading, Button, Blankslate } from '@aksara-ui/core';
import { IconArrowRight } from '@aksara-ui/icons';

import fetch from 'utils/fetch';

import ShipList from './ShipList';

interface SelectedShipProps {
  shipId?: string;
  onReady?: (dockNumber: number) => void;
}

const ShipEmpty: React.FC = () => {
  return (
    <Blankslate
      image={<img src="/static/cloud.svg" alt="" />}
      variant="inner"
      content={<Text color="grey06">No ships selected. Please select a ship below.</Text>}
    />
  );
};

const SelectedShipRenderer: React.FC<SelectedShipProps> = ({ shipId, ...rest }) => {
  const { data, error } = useSWR(() => `/api/ships/${shipId}`, fetch);

  const renderEmpty = () => {
    return <ShipEmpty {...rest} />;
  };

  if (error) {
    return (
      <Text color="danger" {...rest}>
        Failed to fetch. Please try again
      </Text>
    );
  }

  if (!data) {
    return renderEmpty();
  }

  return <ShipList ships={[data.data]} {...rest} />;
};

const SelectedShip: React.FC<SelectedShipProps> = ({ shipId, onReady, ...rest }) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | undefined>(undefined);

  const renderSelected = () => {
    if (shipId) {
      return <SelectedShipRenderer shipId={shipId} />;
    }

    return <ShipEmpty />;
  };

  const handleLaunch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/ships/prepare', {
        method: 'GET',
        body: JSON.stringify({
          shipId,
        }),
      });

      if (res.status === 'ok') {
        if (onReady && res.data.dock) {
          onReady(res.data.dock);
        } else {
          throw new Error('All docks are full. Please try again later.');
        }
      } else {
        throw new Error(res.data.message);
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Stack spacing="lg" {...rest}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Heading scale={600} as="h2">
          Selected Ship
        </Heading>
        <Button
          type="button"
          variant="primary"
          isLoading={isSubmitting}
          disabled={!shipId}
          icon={IconArrowRight}
          iconPosition="right"
          onClick={handleLaunch}
        >
          Launch
        </Button>
      </Box>
      {renderSelected()}

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>{errorMessage && <Text color="danger">{errorMessage}</Text>}</Box>
      </Box>
    </Stack>
  );
};

export default SelectedShip;
