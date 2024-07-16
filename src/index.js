require('dotenv').config();

const app = require('./app');


// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port 3000!'));