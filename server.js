const express = require('express');

app = express();

const port = 5000 || process.env.PORT; // The second option is for when we will be deploying to HEROKU

app.listen(port, () => console.log(`Server running on port ${port}`));
