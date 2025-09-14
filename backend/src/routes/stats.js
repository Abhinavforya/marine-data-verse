const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/', async (req, res) => {
  try {
    // Example: Replace with Supabase queries
    // const { data, error } = await supabase.from('stats').select('*');
    // Replace with actual Supabase logic as needed
    res.json({
      dataRecords: 2400000,
      speciesIdentified: 15847,
      systemUptime: 98.5,
      activeResearchers: 1247
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
