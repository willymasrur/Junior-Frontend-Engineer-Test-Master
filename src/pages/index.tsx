import * as React from 'react';
import { NextPage } from 'next';
import qs from 'query-string';
import useSWR from 'swr';

import { Box, Heading, Stack, Text, Card, Button } from '@aksara-ui/core';

import SelectedShip from 'modules/ships/SelectedShip';
import ShipList from 'modules/ships/ShipList';

import Navigation from 'components/layout/Navigation';
import Page from 'components/layout/Page';
import Content from 'components/layout/Content';
import PageHeader from 'components/page/PageHeader';
import GridWrapper from 'components/layout/GridWrapper';

import { APIResponse } from 'types/api';
import { ShipIndexResponse } from 'types/ship';
import fetch from 'utils/fetch';
import { CURRENT_STATION } from 'utils/variables';

const IndexPage: NextPage = () => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [isReady, setIsReady] = React.useState(false);
  const [dockNumber, setDockNumber] = React.useState<number | undefined>(undefined);
  const { data, error } = useSWR<APIResponse<ShipIndexResponse>>(
    () => `${qs.stringifyUrl({ url: '/api/ships', query: { station: CURRENT_STATION } })}`,
    fetch,
  );

  const renderShips = (filter: 'ships_here' | 'ships_elsewhere' = 'ships_here') => {
    if (error) {
      return <Text color="danger">Failed to fetch. Please try again</Text>;
    }

    if (!data) {
      return <Text color="grey06">Loading...</Text>;
    }

    return (
      <ShipList
        ships={data.data[filter]}
        selectedShipId={selected}
        onSelect={filter === 'ships_here' ? shipId => setSelected(shipId) : undefined}
      />
    );
  };

  const handleReady = (dock: number) => {
    setIsReady(true);
    setDockNumber(dock);
  };

  const handleReadyClose = () => {
    setIsReady(false);
    setDockNumber(undefined);
  };

  const renderShipUI = () => {
    if (isReady) {
      return (
        <Content px="md">
          <PageHeader title="Ship Launcher" />
          <GridWrapper>
            <Box gridColumn="3/4">
              <Stack spacing="lg">
                <Card
                  elevation={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  minHeight={300}
                  textAlign="center"
                  px="md"
                  py="lg"
                >
                  <Stack spacing="md">
                    <Text display="inline-block" fontWeight={600}>
                      Your ship is ready at dock
                    </Text>
                    <Heading scale={900}>{dockNumber}</Heading>
                    <Text display="inline-block" scale={500}>
                      Thank you for using our services!
                    </Text>
                  </Stack>
                </Card>
                <Box display="flex" justifyContent="flex-end">
                  <Button type="button" variant="destructive" onClick={handleReadyClose}>
                    Close
                  </Button>
                </Box>
              </Stack>
            </Box>
          </GridWrapper>
        </Content>
      );
    }

    return (
      <Content px="md">
        <PageHeader title="Ship Launcher" />
        <GridWrapper>
          <Box gridColumn="3/4">
            <Stack spacing="xl">
              <SelectedShip shipId={selected} onReady={handleReady} />
              <Stack spacing="lg">
                <Heading scale={600} as="h2">
                  Ships in This Dock
                </Heading>
                {renderShips('ships_here')}
              </Stack>
              <Stack spacing="lg">
                <Heading scale={600} as="h2">
                  Ships Elsewhere
                </Heading>
                {renderShips('ships_elsewhere')}
              </Stack>
            </Stack>
          </Box>
        </GridWrapper>
      </Content>
    );
  };

  return (
    <Page>
      <Navigation currentStation={CURRENT_STATION} />
      {renderShipUI()}
    </Page>
  );
};

export default IndexPage;
