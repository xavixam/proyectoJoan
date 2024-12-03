const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config")
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

app.use(express.json())

app.use("/tasks",require("./routes/tasks"))

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

module.exports = app;