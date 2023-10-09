const axios = require('axios');

export default async (req, res) => {
  const url = req.query.url;

try {
  const response = await axios.get(url);
  console.log('Success: ', response.data);
  res.status(200).json(response.data);
} catch (error) {
  console.error('Error: ', error);
  res.status(500).json({ error: 'Failed to fetch data' });
}
