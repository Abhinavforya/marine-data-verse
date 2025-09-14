const express = require('express');
const axios = require('axios');
const router = express.Router();

// Indian Ocean bounding box (approximate)
const INDIAN_OCEAN_BOUNDS = {
  minLat: -60,
  maxLat: 30,
  minLon: 20,
  maxLon: 120
};

// OBIS API endpoint for occurrence data
const OBIS_API = 'https://api.obis.org/v3/occurrence';

// Helper: Build OBIS query for Indian Ocean
function buildObisQuery() {
  return `${OBIS_API}?geometry=POLYGON((20 -60, 120 -60, 120 30, 20 30, 20 -60))&size=100`;
}

// GET /api/biodiversity/map
router.get('/map', async (req, res) => {
  try {
    // Fetch occurrence data from OBIS
    const obisUrl = buildObisQuery();
    const response = await axios.get(obisUrl);
    // Transform to GeoJSON features
    const features = response.data.results.map(item => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [item.decimalLongitude, item.decimalLatitude]
      },
      properties: {
        scientificName: item.scientificName,
        eventDate: item.eventDate,
        location: item.locality,
        photo: item.associatedMedia && item.associatedMedia[0]
      }
    }));
    res.json({
      type: 'FeatureCollection',
      features
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
