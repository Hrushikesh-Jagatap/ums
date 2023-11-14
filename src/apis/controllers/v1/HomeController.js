const HomeService = require('@services/v1/HomeService')
const { HttpResponseHandler } = require('intelli-utility');
// Controller function to create
const createHomeTuition = async (req, res, next) => {
    try {
        const { name, subject, grade, targetExam, priceLimit, pinCode, address } = req.body;
        const HomeTutionDetails = await HomeService.createHomeTuition(req.body);
        if (!HomeTutionDetails) {
            return HttpResponseHandler.success(req, res, HomeTutionDetails);
        }
        return HttpResponseHandler.success(req, res, HomeTutionDetails);
    } catch (error) {
        next(error);
    }
};
module.exports = {
    createHomeTuition,
};
