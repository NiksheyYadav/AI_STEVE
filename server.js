import express from 'express';
import fetch from 'node-fetch'; // Use 'import' instead of 'require'

const app = express();
const port = 3000;

const WOLFRAM_API_KEY = '<api>'; // Replace this <api> with your Wolfram Alpha API key

app.use(express.static('public')); // Serve your frontend files from a 'public' folder

// Proxy route
app.get('/api', async (req, res) => {
    const question = req.query.question;

    if (!question) {
        return res.status(400).send('Question is required');
    }

    const apiUrl = `http://api.wolframalpha.com/v1/result?appid=${WOLFRAM_API_KEY}&input=${encodeURIComponent(question)}`;

    try {
        const response = await fetch(apiUrl);
        const result = await response.text();
        res.send(result);
    } catch (error) {
        console.error('Error fetching from Wolfram Alpha:', error);
        res.status(500).send('Error fetching');
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening on http://localhost:${port}`);
});
