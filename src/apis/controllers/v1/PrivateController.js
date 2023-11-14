const HomeService = require('@services/v1/PrivateService')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to create
const createPrivateTuition = async (req, res, next) => {
    try {
        const { name, subject, grade, targetExam, priceLimit, pinCode } = req.body;
        const PrivateTutionDetails = await HomeService.createPrivateTuition(req.body);
        if (!PrivateTutionDetails) {
            return HttpResponseHandler.success(req, res, PrivateTutionDetails);
        }
        return HttpResponseHandler.success(req, res, PrivateTutionDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    createPrivateTuition,
};
