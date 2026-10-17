require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.static('public'));
app.post('/start', async (req, res) => {
  try {
    const r = await fetch('https://tavusapi.com/v2/conversations', {
      method: 'POST',
      headers: { 'x-api-key': process.env.TAVUS_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ persona_id: process.env.PERSONA_ID }),
    });
    res.status(r.status).json(await r.json());
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:' + (process.env.PORT || 3000)));
