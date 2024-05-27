const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 1245;

app.use('/', routes);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
