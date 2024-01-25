const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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"
});

const openFun=async()=>{
const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "can you write sql queries?",}],
    max_tokens:100
  });
  console.log(chatCompletion.choices[0].message.content);
}

openFun();