const express = require('express')
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth.routes.js')
const mongodbConnect = require('./db/connectMongoDb.js');

dotenv.config()

const app = express();
const PORT = process.env.PORT||8000

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
    mongodbConnect();
})