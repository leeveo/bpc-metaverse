import bcrypt from 'bcryptjs';

// Hash the passwords using bcrypt
const hashedPasswordArbela = bcrypt.hashSync('arbela', 10);
const hashedPasswordBureautique = bcrypt.hashSync('bureautique', 10);
const hashedPasswordFormation = bcrypt.hashSync('formation', 10);
const hashedPasswordDynabuy = bcrypt.hashSync('dynabuy', 10);
const hashedPasswordLemetagold = bcrypt.hashSync('BpC75000!', 10);
const hashedPasswordKarate = bcrypt.hashSync('karate', 10); // Hash the password for "karate"

const users = [
  { email: 'marcmenu707@gmail.com', password: hashedPasswordArbela, access: ['arbela'] },
  { email: 'user@example.com', password: hashedPasswordBureautique, access: ['bureautique'] },
  { email: 'formation@example.com', password: hashedPasswordFormation, access: ['formation'] },
  { email: 'dynabuy@example.com', password: hashedPasswordDynabuy, access: ['dynabuy'] },
  { email: 'lemetagold@gmail.com', password: hashedPasswordLemetagold, access: ['arbela', 'bureautique', 'formation', 'dynabuy', 'karate'] },
  { email: 'karate@example.com', password: hashedPasswordKarate, access: ['karate'] }, // New user for "karate"
  // Add more users as needed
];

export default users;
