import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Guibas',
    email: 'bublitz.stein@gmail.com',
    password_hash: '123456',
    // provider: false,
  });
  return res.json(user);
});

export default routes;
