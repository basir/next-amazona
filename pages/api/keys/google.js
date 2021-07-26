import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);
handler.get(async (req, res) => {
  res.send(process.env.GOOGLE_API_KEY || 'nokey');
});

export default handler;
