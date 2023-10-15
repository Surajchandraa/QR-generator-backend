const qrcodee = require("qrcode");

function gen(data,res){
    qrcodee.toDataURL(data, (err, url) => {
        if (err) {
            return res.status(500).json({ error: 'Could not generate QR code.' });
        }
        res.json({qrCodeUrl:url})
    });
}

module.exports=gen;