const createUser = {
  type: 'object',
  properties: {
    basicInformation: {
      type: 'object',
      additionalProperties: true,
    },
    teacherData: {
      type: 'object',
      additionalProperties: true,
    },
    studentData: {
      type: 'object',
      additionalProperties: true,
    },
    householdData: {
      type: 'object',
      additionalProperties: true,
    },
  },
  additionalProperties: true,
};

module.exports = { createUser };
