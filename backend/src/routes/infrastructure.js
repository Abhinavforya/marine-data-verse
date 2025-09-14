const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/', async (req, res) => {
  try {
    // Example: Replace with Supabase queries
    // const { data, error } = await supabase.from('infrastructure').select('*');
    res.json({
      sensors: [{ id: 1, location: 'Bay of Bengal', status: 'active' }],
      stations: [{ id: 1, name: 'Alpha', location: 'Bay of Bengal' }],
      mapUrl: '/maps/research-infrastructure.png'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
