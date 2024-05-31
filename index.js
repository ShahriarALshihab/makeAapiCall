const express=require('express'); 

const app=express(); 
app.use(express.json()); 

const PORT=8080; 

app.listen(PORT,()=>{
    console.log(`Server is running on port http://127.0.0.1:${PORT}`);   
}); 

app.get('/',(req,res)=>{
   res.status(200).json({
    tshirt:'👕',
    size:'L'
   })
})

app.post('/tshirt/:id',(req,res)=>{
    const {id}=req.params
    const {logo}=req.body

    if(!logo){
        res.status(418).send({message:'Logo not found'}); 
    }

    res.json({
        tshirt:`👕 with your logo-  ${logo} and id is ${id}`,
    })
})