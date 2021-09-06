import { NextApiRequest, NextApiResponse } from 'next';
import currentShips from 'data/ships';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.shipId) {
    const shipId = Array.isArray(req.query.shipId) ? req.query.shipId[0] : req.query.shipId;

    if (data) {
      res.statusCode = 200;
      res.json({
        status: 'ok',
        data,
      });
    } else {
      res.statusCode = 404;
      res.json({ status: 'error', data: { statusCode: 404, message: 'Cannot find a ship by this ID.' } });
    }
  } else {
    res.statusCode = 400;
    res.json({ status: 'error', data: { statusCode: 400, message: 'Please set your current station.' } });
  }
};

export default handler;
