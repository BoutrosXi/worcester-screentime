const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/api/login', (req, res) => {
    // Allow any login for testing
    res.json({ success: true });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});