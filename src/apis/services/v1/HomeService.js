const HomeTuition = require('@models/HomeTut');
// Create Home Tuition
const createHomeTuition = async (homeTuitionData) => {
  try {
    const homeTuition = await HomeTuition.create(homeTuitionData);
    return homeTuition;
  } catch (error) {
    throw new Error('Internal server error');
  }
};
module.exports = {
  createHomeTuition,
};
