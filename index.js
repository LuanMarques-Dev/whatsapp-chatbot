const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const twilioConfig = require('./config/twilio');
const webhookRoute = require('./routes/webhook');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/webhook', webhookRoute);

app.get('/', (req, res) => {
    res.send('Bot do WhatsApp está funcionando!');
});

app.listen(port, () => {
    console.log(`Servido rodando na porta ${port}`);
});