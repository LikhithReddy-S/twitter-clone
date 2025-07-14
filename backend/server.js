const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready")
})

app.listen(8000,()=>{
    console.log(`server is running on http://localhost:3000`)
})