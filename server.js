const express = require('express');
const db = require('./config/connection');
const {User} = require('./models');
const routes = require('./routes');



const PORT = process.env.PORT || 9001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

  app.get('/all-users', (req, res) => {
    // Using model to find all users
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  