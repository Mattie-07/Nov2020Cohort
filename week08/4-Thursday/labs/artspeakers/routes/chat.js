const express = require('express')
const router = express.Router();

router.get("/chat", (res, req) => {
    res.render('chat', {
        pageID: "chat",
        pageTitle: "Rouxe Chat"
    })
})
module.exports = router;