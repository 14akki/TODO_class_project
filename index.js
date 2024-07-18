const express= require('express');
const app= express();

app.get('/',(req, res)=>{
    res.send("hello from the server")
})
const PORTNo= 3000;

app.listen(PORTNo,()=>{
    console.log(`Application is running on Port number ${PORTNo}`);
});;