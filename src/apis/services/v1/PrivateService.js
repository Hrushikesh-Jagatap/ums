const PrivateTuition = require('@models/PrivateTut');
// Create Private Tuition
const createPrivateTuition = async (PrivateTuitionData) => {
  try {
    const privateTuition = await PrivateTuition.create(PrivateTuitionData);
    return privateTuition;
  } catch (error) {
    throw new Error('Internal server error');
  }
};
module.exports = {
    createPrivateTuition,
};
