const express = require('express');
const router = express.Router();
const client = require('../config/twilio');  
const { parseMessage } = require('../utils/messageParser');  

router.post('/', (req, res) => {
  const incomingMsg = req.body.Body;  
  const from = req.body.From;         

  let responseMessage = parseMessage(incomingMsg);

  client.messages.create({
    from: 'whatsapp:' + process.env.TWILIO_WHATSAPP_NUMBER,
    to: from,
    body: responseMessage, 
  })
    .then(message => {
      console.log('Mensagem enviada:', message.sid);
    })
    .catch(err => {
      console.error('Erro ao enviar mensagem:', err);
    });

  res.status(200).send('<Response></Response>');
});

module.exports = router;
