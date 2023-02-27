// const BASE_URL = 'https://theemarketplace.onrender.com/api/';

import instance from '../axios';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/api';

export const getBlogData = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    let response = await fetch(BASE_URL + 'blog/fetch', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const result = isJson && (await response.json());
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getSearchResult = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(BASE_URL + '/search', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('applicatio/json');
    const result = isJson && (await response.json());
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getSearchCollection = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(BASE_URL + '/searchUser', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const result = isJson && (await response.json());
    return result;
  } catch (error) {
    return error;
  }
};

// export const getCollectionData = async () => {
//   instance.get('/createCollection/read',);
// };

// let historyMetaData = {
//   nftId: bidData.nftId,
//   userId: bidData.owner,
//   action: 'Bids',
//   actionMeta: 'Accept',
//   message: `bid for ${bidData.bidQuantity} of ${
//     details.oQuantity
//   } editions at ${convertToEth(bidData.bidPrice)} ${
//     paymentTokenData.symbol
//   } by ${sellerUsername}`,
//   created_ts: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
// };

export const insertHistory = async () => {
  const headers = {
    Authorization: 'Bearer my-token',
  }; //*  pass this header along with post request
  await instance
    .post(BASE_URL + '/insertHistory')
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      return console.log(error);
    });
};

// export const listNFT

export const getCollection = async (result) => {
  let requestOptions = { name: result.name };

  let datas = await instance
    .post(BASE_URL + '/getSingleCollectionByName', requestOptions)
    .then((response) => {
      let data = response.data.data.contract_address;
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
  return datas;
};
