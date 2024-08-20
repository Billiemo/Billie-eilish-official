const express = require('express');
const app = express();
const redirectRouter = require('./api/redirect');

app.use('/api/redirect', redirectRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
