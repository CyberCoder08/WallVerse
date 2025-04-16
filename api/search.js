// api/search.js
export default async function handler(req, res) {
  const { query, per_page = 30 } = req.query;

  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`, {
    headers: {
      Authorization: process.env.8cBUjJ99dXuFDzwqUgvMOyzHUd5hLCz3mYBRZoCUfI8,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
