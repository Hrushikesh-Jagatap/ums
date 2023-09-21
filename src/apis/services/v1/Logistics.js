// const { createUUID } = require("@root/src/common/libs/UUID/UUIDV4");
// const { systemToken, loadBalancer } = require("@root/src/config");
// const { default: axios } = require("axios");

// const getDeliveryBoy = async (args) => {
//   console.log("user id is", args)
//   let {userId} = args
//   try {
//     const config = {
//       method: 'get',
//       url: `${loadBalancer}/lms/apis/v1/deliveryBoy/details/${userId}`,
//       headers: {
//         app_name: 'studentApp',
//         app_version_code: '101',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${systemToken}`,
//       }
//     };
//     const result = await axios(config);
//     if (result?.data) {
//       return result.data.data;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//     // throw new ORDER_SERVICE_ERROR(error);
//   }
// }

const createDeliveryBoy = async (args) => {
  console.log("user id is", args)
  try {
    const config = {
      method: 'post',
      url: `${loadBalancer}/lms/apis/v1/deliveryBoy/create`,
      headers: {
        app_name: 'studentApp',
        app_version_code: '101',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${systemToken}`,
      },
      data: {
        userId: args.userId,
        preference: 'BIKE',
        uniqueId: createUUID().replace(/\D+/g, '').slice(0, 10),
      }
    };
    const result = await axios(config);
    console.log(result.data)
    if (result?.data) {
      return result.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    // throw new ORDER_SERVICE_ERROR(error);
  }
}


module.exports = {
  createDeliveryBoy,
//   getDeliveryBoy
}