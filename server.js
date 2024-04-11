const express = require('express');
const requestIp = require('request-ip');
const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    const visitorIP = 
        // req.headers['cf-connecting-ip'] ||  // High priority in case Cloudflare is used
        // req.headers['x-real-ip'] ||
        // req.headers['x-forwarded-for'] ||
        // req.socket.remoteAddress || '';

        requestIp.getClientIp(req);
        return res.json({visitorIP})
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})