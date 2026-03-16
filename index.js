const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const user = req.query.user;
    if (user) {
        res.send(`<h1>Привет, ${user}!</h1>`);
    } else {
        res.send('<h1>Добро пожаловать!</h1>');
    }
});

app.get('/login', (req, res) => {
    res.type('text/plain').send('sofia');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
