const app=require('express')();

app.get('/',(req,res,next)=>{
    console.log('user');
    next();
})

app.use(log);

function log(req,res,next){
    console.log('log');
    next();
}

app.listen(3000);