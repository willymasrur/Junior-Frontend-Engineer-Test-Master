import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ status: 'ok', data: 'Pong!' });
};

export default handler;
