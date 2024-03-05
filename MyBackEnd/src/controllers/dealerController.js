// import { UserSchema } from "../models/userSchema";
import { dbConnect } from '../db/dbConnection.js';
// import jwt from 'jsonwebtoken';

// Dealer Signup Handler
async function handleDealerSignup (req, res){
    try{
        const { dealerId, email, password, location, dealerInfo } = req.body;
        const dealerData = req.body

        if(!dealerId || !email || !password || !location || !dealerInfo){
            return res.status(422).json({ error: "Please Enter the Details correct!!!!" });
        }

        const db = await dbConnect();
        const userCollection = db.collection("dealerCollection")
        const flag = await userCollection.findOne({ email: email }); 

        if(flag){
            return res.status(422).json({ error: "Dealer already exists!" });
        }
        else{
            await userCollection.insertMany([dealerData])
            console.log("Dealer Signup Successful");
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

// Handle Dealer Login
async function handleDealerLogin (req, res){
    try{
        const { email, password } = req.body;
        // const userData = req.body

        if(!email || !password){
            return res.status(422).json({ error: "Please Enter the Details correct!!!!" });
        }

        const db = await dbConnect();
        const userCollection = db.collection("dealerCollection")

        const flag = await userCollection.findOne({ email, password }); 

        if(flag){
            console.log("Dealer LoggedIn");
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


export { handleDealerSignup, handleDealerLogin }