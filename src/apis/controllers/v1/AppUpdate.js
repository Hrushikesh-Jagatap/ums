const { Logger: log } = require("intelli-utility");


const IsNewUser = (user, app_version_code, app_name) => {
  log.info({info: `App Update :: Inside Is New User${app_name}`})
  if (user === null || typeof user === 'undefined') {
    return false;
  }
  if (app_name === 'teacherApp') {
    return !user.teacherData.isOtpVerified;
  }
  if (app_name === 'householdApp') {
    return !user.householdData.isOtpVerified;
  }
  if (app_name === 'studentApp') {
    return !user.studentData.isOtpVerified;
  }
  return true;
};

const AppData = async (app_version_code, app_name, user, newValues) => {
  log.info({info: 'App Update :: Inside App Data'})
  const isOtpVerified = newValues ? newValues : false;
  if (app_name === 'teacherApp') {
    const prevAppData = user === null || typeof user === 'undefined' ? null : user.teacherData;

    return Object.freeze({
      teacherData: {
        ...prevAppData,
        isOtpVerified,
        lastLogin: new Date(),
      },
    });
  }

  if (app_name === 'studentApp') {
    const prevAppData = user === null || typeof user === 'undefined' ? null : user.studentData;

    return Object.freeze({
      studentData: {
        ...prevAppData,
        isOtpVerified,
        lastLogin: new Date(),
      },
    });
  }

  if (app_name === 'householdApp') {
    const prevAppData = user === null || typeof user === 'undefined' ? null : user.householdData;

    return Object.freeze({
      householdData: {
        ...prevAppData,
        isOtpVerified,
        lastLogin: new Date(),
      },
    });
  }
};

const UpdateAppData = async (app_name, app_version_code, user, newValues) => {
  if (app_name === 'teacherApp') {
    const newAppData = 'teacherData' in newValues ? newValues.teacherData : user.teacherData;
    Object.assign(user.teacherData, newAppData);
  }
  if (app_name === 'studentApp') {
    const newAppData = 'studentData' in newValues ? newValues.studentData : user.studentData;
    Object.assign(user.studentData, newAppData);
  }
  if (app_name === 'householdApp') {
    const newAppData = 'householdData' in newValues ? newValues.householdData : user.householdData;
    Object.assign(user.householdData, newAppData);
  }
  if('basicInformation' in newValues) {
    //can not use assign here as basic information might not be own property of user object
    //case when user didn't updated about me section
    user.basicInformation = newValues.basicInformation
  }

  return Object.freeze(user);
};

const checkProfileCompletion = async (app_name, app_version_code, user) => {
  log.info({info : 'inside check Profile Completion'});
  console.log(user);
  if (app_name === 'teacherApp') {
    if (user.teacherData.isProfileCompleted === false) {
      const { userName, address } = user.teacherData;
      return userName !== null && address !== null;
    }
    return false;
  }
  if (app_name === 'studentApp') {
    if (user.studentData.isProfileCompleted === false) {
      const { userName, address } = user.studentData;
      return userName !== null && address !== null;
    }
    return false;
  }
  if (app_name === 'householdApp') {
    if (user.householdData.isProfileCompleted === false) {
      const { userName, address } = user.householdData;
      return userName !== null && address !== null;
    }
    return false;
  }
  return false;
};

module.exports = {
  AppData,
  IsNewUser,
  UpdateAppData,
  checkProfileCompletion,
};
