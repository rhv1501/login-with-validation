const express=require('express');
const user = require('../models/user');
const router=express.Router();
const {body,validationResult}=require('express-validator');
//creaet a user using post "/api/auth"
router.post('/',[
    body('email',"Enter a valid email").isEmail(),
    body('password',"Password Should atleast be 6 characters").isLength({min:6}),
    body('name',"Name should be Atleast 4 characters").isLength({min:4})
    ],async (req,res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try{
    let User=await user.findOne({email:req.body.email});
    if(User){
        res.status(400).json({message:'Email Already Exsists'})
    }
    else{
     User=await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });res.status(201).json({msg:"Account created successfully",log:User})}
    }
    catch(errors){console.log(errors);res.status(500).json({error:"Internal Server Error"})};
    // .then(user=>res.json(user)).catch(err=>{console.log("duplicate data")
    //     res.status(400).json({msg:"Email Already Exists",error:err.message,errorlog:err
    // })})
})

module.exports=router;