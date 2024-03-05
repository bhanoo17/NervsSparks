import express from 'express'
import { handleUserSignup, handleUserLogin } from '../controllers/userControler.js';

const router = express.Router();

// Get Routes
router.get('/', (req, res) =>{
    res.send("This is from User Pages")
})
router.get('/signup', (req, res) =>{
    res.render("./userView/userSignup.ejs")
    // res.send("Signup Successful")
})
router.get('/login', (req, res) =>{
    res.render("./userView/userLogin.ejs")
    
})
router.get('/vehicle', (req, res) =>{
    res.send("This is user Seeing Vehicle pages")
})

// Post Routes
router.post('/signup', handleUserSignup);
router.post('/login', handleUserLogin);


export { router as userRouter };