import express from "express";
import 'dotenv/config'
import { userRouter } from "./src/routes/user.js";
import { dealerRouter } from "./src/routes/dealer.js";
import { adminRouter } from "./src/routes/admin.js";

// Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// template Engine
app.set('view engine', 'ejs')
app.set('views', './src/views')

// Home Page Rendering
app.get('/', (req, res) =>{
    res.render("home.ejs")
})
app.get('/explore', (req, res) =>{
    res.render("explore.ejs")
})

// Routes 
app.use('/user', userRouter)
app.use('/dealer', dealerRouter)
app.use('/admin', adminRouter)



// Environment Variables
const port = process.env.PORT || 4000

// Server Running
app.listen( port, () =>{
    console.log(`Listening at Port ${port}`);
})