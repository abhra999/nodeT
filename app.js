const app=require('express')();

app.use(log);

app.get('/',(req,res)=>{
    console.log('user');
})

function log(req,res,next){
    console.log('before');
    next();
    console.log('after');
}

app.listen(3000);