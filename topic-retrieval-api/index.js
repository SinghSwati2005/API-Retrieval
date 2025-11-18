const express = require('express');
const topicsRouter = require('./routes/topic-api');

const app = express();
const PORT = 3000;

app.use('/api/topic-api', topicsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
