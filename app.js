const app=require('express')();

app.use(auth);

app.get('/',auth,(req,res,next)=>{
    res.send(`user admin ${req.admin}`);
    next();
})

app.use(log);

function auth(req,res,next){
    if(req.query.admin=='true'){
       req.admin=true; 
       next();
       return;
    }
    res.send('No Auth');

}

function log(req,res,next){
    console.log('log');
    next();
}

app.listen(3000);