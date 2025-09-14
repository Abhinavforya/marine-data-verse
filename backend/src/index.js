require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { supabase } = require('./supabaseClient');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(helmet());
app.use(express.json());


// Organized routes
app.use('/api/stats', require('./routes/stats'));
app.use('/api/monitoring', require('./routes/monitoring'));
app.use('/api/infrastructure', require('./routes/infrastructure'));
app.use('/api/system', require('./routes/system'));
app.use('/api/activity', require('./routes/activity'));
app.use('/api/actions', require('./routes/actions'));
app.use('/api/biodiversity', require('./routes/biodiversityMap'));

// Existing endpoints (optional, keep if needed)
app.get('/api/marine-data', async (req, res) => {
  try {
    const { data, error } = await supabase.from('marine_data').select('*').limit(10);
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint (to be implemented)' });
});

app.post('/api/ai/species-identify', (req, res) => {
  res.json({ species: 'Demo species', confidence: 0.99 });
});

app.listen(port, () => {
  console.log(`Marine Data Verse backend running on port ${port}`);
});
