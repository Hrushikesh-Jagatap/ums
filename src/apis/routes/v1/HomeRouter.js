const express = require('express');
const router = express.Router();
const  HomeRouterController = require('@controllers/v1/HomeController');
router.post('/home-tuition', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await HomeRouterController.createHomeTuition(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
