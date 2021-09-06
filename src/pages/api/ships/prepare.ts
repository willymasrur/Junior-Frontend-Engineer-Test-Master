import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const randomDock = Math.floor(Math.random() * 33);

    res.statusCode = 200;
    res.json({ status: 'ok', data: { message: 'Your ship is ready.', randomDock } });
  } else {
    res.statusCode = 404;
    res.json({ status: 'error', data: { statusCode: 404, message: 'Page not found' } });
  }
};

export default handler;
