require('dotenv').config()
const express = require('express')
const cors  = require('cors');
const { connect } = require('mongoose');
const {Configuration,OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY
});
// console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAIApi(configuration);


const app = express();

app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    res.send('hello world')
});

app.post('/chatgpt/chat',async(req,res)=>{
    try {
        let searchText = req.body.prompt;
        // console.log(searchText)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${searchText}`,
            temperature: 0, // Higher values means the model will take more risks.
            max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
            top_p: 1, // alternative to sampling with temperature, called nucleus sampling
            frequency_penalty: 0.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
            presence_penalty: 0, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
          });

          res.status(200).send({
            result:response.data.choices[0].text
          })
    } catch (error) {
        res.status(500).send({msg:"Internal Server Error",error})
    }
})

app.listen(process.env.PORT || 8080,async(req,res)=>{
    try{
        // await connect();
        console.log(`listen on http://localhost:${process.env.PORT}`)
    }catch(err){
        console.log(err)
    }

})