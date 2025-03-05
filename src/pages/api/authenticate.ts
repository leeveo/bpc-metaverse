import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

// Hash the password 'test' using bcrypt
const hashedPassword = bcrypt.hashSync('test', 10);

const users = [
  { email: 'marcmenu707@gmail.com', password: hashedPassword },
  // Add more users as needed
];

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

  res.status(200).json({ message: 'Authenticated' });
}