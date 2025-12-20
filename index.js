const express = require('express')
const userRoute = require('./routes/userRoute')
const cors = require('cors')
require('./config/db')

const app = express();
app.listen(3000);

// middleware -> req - middleware - route
app.use(express.json())
app.use(cors())

app.use('/user', userRoute)

