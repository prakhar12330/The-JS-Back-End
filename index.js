require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

//ye kehta hai ki agar aapke browser se `/` route pe koi get req aati hai to ek callback function call krdo....ar ek response send krdo "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('Please login at chai and code')
})

app.get('/youtube',(req,res)=>{
    res.send('Chai and code')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})