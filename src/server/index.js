const express = require('express');
const shopRouter = require('../routes/shopRouter');
const errorHandler = require('../middleware/error.middleware');
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage
app.get('/', (req, res) => {
  res.send('api-testday project');
});

// Shop routes
app.use(shopRouter);

// Error handling
app.use(errorHandler);

// Page not found handler
app.use(function (req, res) {
  res.status(404).send({
    message: 'Endpoint not found!',
    error: { type: 'Not found', status: 404 },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
