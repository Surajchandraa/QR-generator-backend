const express = require('express');
const qr = require('./qrcode');

const app = express();



app.use(express.json());


app.post('/generate/url', (req, res) => {
    const { data } = req.body;

  
    qr(data,res);
    


    
});



app.post('/generate/text',(req,res)=>{
        const {data} = req.body;
    
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
