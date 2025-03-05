import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the authentication cookie
  res.setHeader('Set-Cookie', serialize('isAuthenticatedDynabuy', '', { path: '/', httpOnly: true, maxAge: -1 }));

  res.status(200).json({ message: 'Logged out' });
}
