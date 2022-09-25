const express = require('express');
const router = express.Router();

// time log middleware
const requestTime = (req,res,next) => {
    const time = new Date();
    console.log(`Time: ${time.toString()}`)
    next();
}
router.use(requestTime);

router.get('/', (req,res) =>{
    res.send(`Birds home page`)
})

router.get('/about', (req,res) => {
    res.send('About birds')
})

module.exports = router;
