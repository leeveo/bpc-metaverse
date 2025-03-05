import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const isAuthenticated = req.cookies.isAuthenticatedArbela === 'true';
  if (isAuthenticated) {
    res.status(200).json({ message: 'Authenticated' });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
}
