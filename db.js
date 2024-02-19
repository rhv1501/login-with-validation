const mongoose=require('mongoose');
const mongouri="mongodb://localhost:27017/i_notebook";
async function connectdb(){
    await mongoose.connect(mongouri,{useNewUrlParser:true}).then(()=>console.log("connected")).catch(err=>console.log(err))
}
module.exports=connectdb;