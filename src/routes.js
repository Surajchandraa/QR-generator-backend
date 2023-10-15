const express = require('express');
const qr = require('./qrcode');
const cors = require('cors')
const path = require('path')

const app = express();



app.use(express.json());
app.use(cors())
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));


app.post('/generate/url', (req, res) => {
    const { data } = req.body;

  
    qr(data,res);
    


    
});



app.post('/generate/text',(req,res)=>{
    const {data} = req.body;app.post('/generate/vCard',(req,res)=>{
        const {data} = req.body;
    
        qr(data,res);
    })
    qr(data,res);
})

app.post('/generate/location',(req,res)=>{
    const {data}=req.body;
    qr(data,res)
})

app.post('/generate/email',(req,res)=>{
    const {data}= req.body;
    qr(data,res);
})

app.post('/generate/phone',(req,res)=>{
    const {data}=req.body;
    qr(data,res)
})


app.post('/generate/sms',(req,res)=>{
    const {data}=req.body;
    qr(data,res)
})
module.exports=app;
