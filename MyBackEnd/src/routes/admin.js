import express from 'express'

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Admin Page")
})
router.get('/singup', (req, res) =>{
    res.send("Admin Signup Page")
})
router.get('/login', (req, res) =>{
    res.render("./adminView/adminLogin.ejs")
})


export { router as adminRouter };