require("dotenv").config();
require("./config/db").connect();
const express = require("express");
const bcrypt = require("bcryptjs")
const app = express();
const User = require("./model/user")
const jwt = require("jsonwebtoken")
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

// Logic goes here
app.post('/signup', async (req,res)=>{
    try{
    const {first_name,last_name,email,password
    ,address,address2,city,state,zip} = req.body;

    if(!(first_name && last_name && email && password)){
        res.status(201).json({message : "All inputs are required, please fill all fields with correct values",canLogIn:false})
    }

    const userExists = await User.findOne({
        email:email.toLowerCase()
    })

    if(userExists) return res.status(201).json({message : "User already exists, please login.",canLogIn:true})
    const threshold = 10
    const hashedpassword = await bcrypt.hash(password,threshold)

    const user = await User.create({
        first_name, last_name, email:email.toLowerCase(), password:hashedpassword,
        address:address, address2:address2, city:city, state:state, zip:zip
    })

    const token = jwt.sign(
        {user_id: user._id, email},
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
    );

    user.token = token;
    try{
    await user.save()}
    catch(err){
        console.log(err)
    }

    res.status(201).json({user,canLogin:true});
    }catch (err) {
    console.log(err);
  }

})


//login code here
app.post('/login',async (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!(email && password)) res.json({
            message : "All input is required, please fill all the fields with correct values"
        })

        const user = await User.findOne({email:email.toLowerCase()})

        if(user && (await bcrypt.compare(password,user.password))){
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
              );

              user.token = token;

              return res.status(200).json({user,isLoggedIn:true})
        }

        res.json({message : "Invalid credentials, please recheck",isLoggedIn:false})

    }
    catch(err){
        res.json({message:err})
    }
})

const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});


module.exports = app;