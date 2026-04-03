const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('awesome-dashboard is running'));
app.listen(3000);