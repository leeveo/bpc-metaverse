import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { serialize } from 'cookie';
import users from '@/config/passwords';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  if (!user.access.includes('arbela')) {
    return res.status(403).json({ message: 'Access denied' });
  }

  // Set a cookie to indicate the user is authenticated
  res.setHeader('Set-Cookie', serialize('isAuthenticatedArbela', 'true', { path: '/', httpOnly: true, maxAge: 60 * 60 * 24 }));

  res.status(200).json({ message: 'Authenticated' });
}
