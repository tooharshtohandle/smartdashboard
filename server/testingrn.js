// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getChatGptResponse } = require('./chatgpt');

const app = express();
app.use(cors());
const PORT = 7000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from the Express server!');
});

app.post('/query', async (req, res) => {
    try {
        const userQuery = req.body.query;

        // Replace these with your actual ChatGPT API URL and API key
        const chatGptApiUrl = 'https://api.openai.com/v1/chat/completions';
        const chatGptApiKey = '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';

        // Use the function from chatgpt.js
        const chatGptResponse = await getChatGptResponse(userQuery, chatGptApiUrl, chatGptApiKey);

        // Process the response from ChatGPT
        const responseData = {
            response: 'Here you go!',
            graphResponse: 'Here you go!',
            chatGptResponse: chatGptResponse,
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



