require('dotenv').config();

const app = require('./app');
const connectDb = require('./db/connectDb');


// Start the server
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    const db = process.env.MONGODB_URI;
    await connectDb(db);
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (error) {
    console.error(error.message);
  }
}

start();
