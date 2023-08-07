const express = require('express');
const axios = require('axios');
var cors = require('cors')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3400;
console.log(process.env.OPENAI_API_KEY)
app.use(express.json());
app.use(cors())
app.get('/shayari', async (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword)
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: `Shayari about ${keyword}`,
            max_tokens: 100,
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const shayari = response.data.choices[0].text.trim();
        res.json({ shayari });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
    }
});




app.get('/code-convert', async (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword)
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: ` can you convert this code function(){console.log("hello")}into python`,
            max_tokens: 100,
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const shayari = response.data.choices[0].text.trim();
        res.json({ code });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
    }
});



app.get('/Debug', async (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword)
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: `can you Debug this code def function():   print(\"hello\")`,
            max_tokens: 100,
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const shayari = response.data.choices[0].text.trim();
        res.json({ shayari });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.get('/Debug', async (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword)
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: `can you Check  Code Quality of this code def function():   print(\"hello\")  also give me score of every code`,
            max_tokens: 100,
            temperature: 0.7,
            n: 1
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const shayari = response.data.choices[0].text.trim();
        res.json({ shayari });
    } catch (error) {
        console.error('Error:', error.response.data);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
// console.clear()
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
