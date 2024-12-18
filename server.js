const express = require('express');
const app = express();

app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.status(200).send('Hello, World!');
});

// Another route
app.post('/echo', (req, res) => {
    res.status(200).json({ message: req.body.message || 'No message sent' });
});


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
