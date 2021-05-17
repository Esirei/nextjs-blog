export default function handler(req, res) {
  const { name = 'World' } = req.query;
  res.status(200).json({ text: `Hello ${name}!` });
}
