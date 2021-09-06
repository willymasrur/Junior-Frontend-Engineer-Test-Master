import { NextApiRequest, NextApiResponse } from 'next';
import currentShips from 'data/ships';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.station) {
    const currentStation = Array.isArray(req.query.station) ? req.query.station[0] : req.query.station;
    const ships_here = currentShips.filter(ship => ship.currentStation === currentStation);
    const ships_elsewhere = currentShips.filter(ship => ship.currentStation !== currentStation);

    res.statusCode = 200;
    res.json({
      status: 'ok',
      data: {
        ships_here,
        ships_elsewhere,
      },
    });
  } else {
    res.statusCode = 400;
    res.json({ status: 'error', data: { statusCode: 400, message: 'Please set your current station.' } });
  }
};

export default handler;
