// import { UserSchema } from "../models/userSchema";
import { dbConnect } from '../db/dbConnection.js';
// import jwt from 'jsonwebtoken';

// User Schema
async function handleUserSchema(req, res){
    const {userId, email, password, location, info} = req.body
    await UserSchema.create({
        userId,
        email,
        password,
        location,
        info
    })
    return res.render("home")
}

// User Signup Handler
async function handleUserSignup (req, res){
    try{
        const { userId, email, password, location, userInfo } = req.body;
        const userData = req.body

        if(!userId || !email || !password || !location || !userInfo){
            return res.status(422).json({ error: "Please Enter the Details correct!!!!" });
        }

        const db = await dbConnect();
        const userCollection = db.collection("userCollection")
        const flag = await userCollection.findOne({ email: email }); 

        if(flag){
            return res.status(422).json({ error: "User already exists!" });
        }
        else{
            await userCollection.insertMany([userData])
            console.log("User Signup Successful");
        }
        
        res.redirect('/explore')

        // Generate JWT token
        // const token = jwt.sign({ userId: newUser.userId }, process.env.JWT_SECRET);
        // res.status(201).json({ message: "User created successfully!", token });

    }catch(error){
        console.error('Error in signup route:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Handle User Login
async function handleUserLogin (req, res){
    try{
        const { email, password } = req.body;
        // const userData = req.body

        if(!email || !password){
            return res.status(422).json({ error: "Please Enter the Details correct!!!!" });
        }

        const db = await dbConnect();
        const userCollection = db.collection("userCollection")

        const flag = await userCollection.findOne({ email, password }); 

        if(flag){
            console.log("User LoggedIn");
            res.redirect('/explore')

            // Generate JWT token
            // const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET);
            // res.status(200).json({ message: "Login successful!", token });
        }
        else{
            
            return res.status(422).json({ error: "Wrong Email or Password!" });
        }

    }catch(error){
        console.error('Error in signup route:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}





export { handleUserSchema, handleUserSignup, handleUserLogin }