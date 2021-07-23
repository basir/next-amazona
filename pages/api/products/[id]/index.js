import nc from 'next-connect';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

export default handler;
