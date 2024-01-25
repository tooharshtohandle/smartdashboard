const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getChatGPTResponse } = require('./callingchatgpt'); // Update the path accordingly
const { executeQuery } = require('./dbdataextraction');
//import { convertData } from './dataConversion';


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

    // Call ChatGPT to get a response based on the user query
    const chatGPTResponse = await getChatGPTResponse(userQuery);

    // Here, you can process the ChatGPT response or send it directly to the frontend
    const parsableJSONresponse = chatGPTResponse;
    const parsedResponse=JSON.parse(parsableJSONresponse);
    const dbResponse = await executeQuery(parsedResponse.sqlquery);
    //console.log(dbResponse)
    //const jsonString = JSON.stringify(dbResponse);
    //console.log(jsonString);
    // Parse the JSON string back to an object
    //const parsedResult = JSON.parse(jsonString);
    //console.log(parsedResult);
    // For simplicity, just responding with the ChatGPT response
    let modifieddata = dbResponse
    console.log(parsedResponse.graphtype)
    const outputData = modifieddata.map(item => {
      return {
        id: item.id,
        label: item.id, // Add the "label" property with the same value as "id"
        value: item.value,
      };
    });
    if(parsedResponse.graphType==='pie'){
      modifieddata =outputData(dbResponse);
    }
    const responseData = {
      data : modifieddata,
      calculationneeded : parsedResponse.calculationneeded,
      graphneeded : parsedResponse.graphneeded,
      graphType:parsedResponse.graphtype,
      response: parsedResponse.response,
    };
    console.log(responseData);
    res.json(responseData);
  } catch (error) {
    console.error('Error handling query:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
