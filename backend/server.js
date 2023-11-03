const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');

const app = express();

const testcoverages = require('./routes/api/testcoverages');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/testcoverages', testcoverages);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));