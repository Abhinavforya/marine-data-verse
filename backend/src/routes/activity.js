const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/recent', async (req, res) => {
  try {
    // Example: Replace with Supabase queries
    // const { data, error } = await supabase.from('activity').select('*');
    res.json([
      { type: 'species', description: 'New species detected', location: 'Bay of Bengal', timestamp: Date.now() },
      { type: 'sensor', description: 'Sensor data updated', location: 'Research Station Alpha', timestamp: Date.now() },
      { type: 'analysis', description: 'Analysis completed', location: 'Coral reef survey', timestamp: Date.now() }
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
