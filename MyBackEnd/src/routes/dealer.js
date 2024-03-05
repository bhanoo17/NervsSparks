import express from 'express'
import { handleDealerLogin, handleDealerSignup } from '../controllers/dealerController.js';
const router = express.Router();

// GET routes
router.get('/', (req, res) =>{
    res.send("Dealer Page And it detatils")
})
router.get('/signup', (req, res) =>{
    res.render("./dealerView/dealerSignup.ejs")
})
router.get('/login', (req, res) =>{
    res.render("./dealerView/dealerLogin.ejs") 
})
router.get('/addvehicle', (req, res) =>{
    res.send("Dealer Adding new car Entry")
})

// POST routes
router.post('/signup', handleDealerSignup);
router.post('/login', handleDealerLogin);

export { router as dealerRouter };