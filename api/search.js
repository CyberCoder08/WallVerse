// api/search.js
export default async function handler(req, res) {
  const { query, per_page = 30 } = req.query;

  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${per_page}`, {
    headers: {
      Authorization: process.env.tPlJc5tScaNJbJtYPLIW5CvCb9uDHaGU4z4Drocl45QlKU7kLfyJl5 hl,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
