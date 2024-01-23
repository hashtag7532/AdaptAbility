const express = require('express');
const axios = require('axios');
const cors = require('cors')
const app = express();
const port = 8000; // Choose the port you want to run the server on
app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/jobs', async (req, res) => {
  try {
    console.log("hitting server")
    // const { query} = req.body.toString();
    const query = "full stack developer mumbai"
    
    console.log(query)

    const serpApiUrl = 'https://serpapi.com/search';
    const response = await axios.get(serpApiUrl, {
      params: {
        api_key: "98a1671d5b1c1efae84bf3516820fab33875cb7a4e541c9fa4ddc6523eadeb98",
        engine: "google_jobs",
        lrad: "0",
        q: query,
        google_domain: "google.com",
        gl: "in"
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from SerpAPI:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});