import express from "express";
const router = express.Router()

//? create all user routes here

//*login user route
router.route("/login").post((req, res)=>{
    res.send('Login Route!');
})
//*register user route
router.route('/').post((req, res)=>{
    res.send('Register route!');
})




module.exports = router;