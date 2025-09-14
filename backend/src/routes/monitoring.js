const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/live', async (req, res) => {
  try {
    // Example: Replace with Supabase queries
    // const { data, error } = await supabase.from('monitoring').select('*');
    res.json({
      temperature: 24.7,
      acidity: 7.8,
      currents: 2.3,
      biodiversity: 'High'
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
