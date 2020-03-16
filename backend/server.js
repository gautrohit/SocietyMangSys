require('./db');

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1200;

app.use(cors());
app.use(express.json());

const registrationRouter = require('./routes/registration');
// const loginRouter = require('./routes/login');

app.use('/registration', registrationRouter);
// app.use('/login', loginRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
