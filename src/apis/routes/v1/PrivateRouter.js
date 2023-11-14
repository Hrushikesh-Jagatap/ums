const express = require('express');
const router = express.Router();
const  PrivateRouterController = require('@controllers/v1/PrivateController');
router.post('/private-tuition', async (req, res, next) => {
    // Extract the necessary data from the request body
    try {
        const result = await PrivateRouterController.createPrivateTuition(req, res, next);
    } catch (error) {
        next(error);
    }
});
module.exports = router;
