const mongoose=require('mongoose');
var Notesschema=new Schema({
    name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
    },
    date:{
        type:date,
        default:Date.now
    },
})
module.exports=mongoose.model('Notes',Notesschema);