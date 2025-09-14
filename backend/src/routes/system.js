const express = require('express');
const router = express.Router();
const { supabase } = require('../supabaseClient');

router.get('/health', async (req, res) => {
  try {
    // Example: Replace with Supabase queries
    // const { data, error } = await supabase.from('system').select('*');
    res.json({
      dataProcessing: 98,
      apiResponse: 95,
      sensorNetwork: 87
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
