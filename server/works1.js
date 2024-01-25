const OPENAI_API_KEY = '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';
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

async function getChatCompletion() {
  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello!' }],
    });

    if (chatCompletion.choices && chatCompletion.choices.length > 0) {
      console.log(chatCompletion.choices[0].message);
    } else {
      console.error('No choices available.');
    }
  } catch (error) {
    console.error('Error fetching chat completion:', error);
  }
}

getChatCompletion();

//const OPENAI_API_KEY='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'
//const { OpenAI } = require("openai");

//const openai = new OpenAI({
//  apiKey:OPENAI_API_KEY // This is also the default, can be omitted
//});

//const chatCompletion = openai.chat.completions.create({
  //model: "gpt-3.5-turbo",
//  messages: [{"role": "user", "content": "Hello!"}],
//});
//console.log(chatCompletion.choices[0].message);
