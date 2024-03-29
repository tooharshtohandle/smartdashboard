const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
app.use(cors());
const PORT = 7000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
  });

app.post('/query', (req, res) => {
  try {
    const userQuery = req.body.query;

    // Here, you can process the user query and generate a response
    // For simplicity, just responding with a static message
    const responseData = {
      response: 'Here you go!',
      graphResponse: 'Here you go!',
    };

    res.json(responseData);
  } catch (error) {
    console.error('Error handling query:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
