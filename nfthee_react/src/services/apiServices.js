// const BASE_URL = 'https://theemarketplace.onrender.com/api/';

import axios from 'axios';
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
    .post('/api/insertHistory')
    .then((response) => {
      return console.log(response);
    })
    .catch((error) => {
      return console.log(error);
    });
};

// export const listNFT

export const getCollection = async (result) => {
  let requestOptions = { name: result };

  let datas = await instance
    .post('/api/getSingleCollectionByName', requestOptions)
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

export const handleLikes = async (result, value, setDisaable) => {
  const removeUrl = '/api/unlike';
  const addUrl = '/api/like';
  let data;

  if (value === 'liked') {
    console.log('value', value);
    setDisaable(true);
    data = await instance
      .post(addUrl, result)
      .finally(() => setDisaable(false));
  }
  if (value === 'unliked') {
    setDisaable(true);
    data = await instance
      .post(removeUrl, result)
      .finally(() => setDisaable(false));
  }
  console.log(data);
  return data;
};






export const createBid = async ({
  nftId,
  bidder,
  owner,
  bid_status,
  bid_price,
  bid_quantity,
}) => {
  const create = '/api/createBidNft';
  const url = '/api/getOrdersByNftId';
  // http://192.168.1.147:8002/api/getOrdersByNftId
  // let all=bidData.nftId

  let data;
  const order = await instance.post(url, { nftId: nftId });
  console.log([order.data.data[0]._id]);
  if (order.data.data[0]._id) {
    let bidData = {
      bidder,
      owner,
      bid_status,
      bid_price: bid_price,
      nftId,
      oderId: order.data.data[0]._id,
      bid_quantity,
    };
    data = await instance.post(create, bidData);
  }
  return data;
};

// export const updateBid=async()=>{
// const create='/api/createBidNft'
// const update='/api/updateBidNft'
// const accept='/api/acceptBidNft'
// const fetch='/api/fetchBidNft'

// }
// export const acceptBid=async()=>{
//   const create='/api/createBidNft'
//   const update='/api/updateBidNft'
//   const accept='/api/acceptBidNft'
//   const fetch='/api/fetchBidNft'

// }
export const fetchBid = async (nftId) => {
  const fetchUrl = '/api/fetchBidNft';
  let data;

  data = await instance.post(fetchUrl, { nftId });

  return data.data;
};

// export const fetchUserBid = async (id) => {
//   // http://localhost:8002?id=640972565a4dfcc2eb3b3fd3/api/userLikes?id=63fc56b0e0637d62e0f6d3ec
//   const fetchUrl = `http://192.168.1.143:8002/api/userBids?id=${id}`;
//   let data;

//   data = await // instance
//   axios.post(fetchUrl);

//   return data.data;
// };


export const handleBuyNotification = async (id) => {
  const ldata = JSON.parse(localStorage.getItem('userLoggedIn'));
  let receiver_token =""

  axios.get(`${process.env.REACT_APP_BASE_URL}/api/signup/read?id=${id}`).then((res)=>{
    console.log("Sdvsdvsdsdvsdv",res.data.data.token_id)
    receiver_token = res.data.data.token_id;
  }).catch((e)=>{
    console.log("get user data with id error-----",e)
  })

  setTimeout(()=>{

    let payload = {sender_id:ldata._id,receiver_id:id,sender_token:ldata.token_id,receiver_token:receiver_token,sender_username:ldata.user_name,message:`${ldata.user_name} bought your Nft`} 

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/notificationSend`,payload).then((res)=>{
    console.log("notification api send receiver",res)
    }).catch((e)=>{
      console.log("notification api receiver",e)
    })

    const server_key = "AAAAkW3_zTk:APA91bGGi7WzQuFoyXb_e3Kv7LL4IKhab5dAfrKQpqBuGB69akF05Nisqcxc5aly1nsKqj-pgYlvWL_J6gLFx5IdwIaAe53JVYuUp602KIdyMfyy98eK2B8lAvzrBjTl2BEN723ySonS";
   
    const headers = {
        'Authorization' : `key=${server_key}`,
        'Content-Type'  : 'application/json',
    };

    let payloads = {
      to   : receiver_token,
      data : {body:`${ldata.user_name} bought your Nft`,title:'Firebase Notification'},
    };

    console.log("token---------------------",receiver_token)
    axios.post(`https://fcm.googleapis.com/fcm/send`,payloads,{
      headers: headers
    }).then((res)=>{
        console.log("FCM send method receiver",res)
      }).catch((e)=>{
        console.log("FCM api error receiver",e)
      })

     
  },3000);


}



export const handleBidNotification = async (id,bidAmount) => {
  const ldata = JSON.parse(localStorage.getItem('userLoggedIn'));
  let receiver_token =""
console.log(bidAmount,'djfjkdfgjdgdjfffjfkjfgn')
  axios.get(`${process.env.REACT_APP_BASE_URL}/api/signup/read?id=${id}`).then((res)=>{
    console.log("Sdvsdvsdsdvsdv",res.data.data.token_id)
    receiver_token = res.data.data.token_id;
  }).catch((e)=>{
    console.log("get user data with id error-----",e)
  })

  setTimeout(()=>{

    let payload = {sender_id:ldata._id,receiver_id:id,sender_token:ldata.token_id,receiver_token:receiver_token,sender_username:ldata.user_name,message:`${ldata.user_name} bided on your Nft ${bidAmount}`} 

    axios.post(`${process.env.REACT_APP_BASE_URL}/api/notificationSend`,payload).then((res)=>{
    console.log("notification api send receiver",res)
    }).catch((e)=>{
      console.log("notification api receiver",e)
    })

    const server_key = "AAAAkW3_zTk:APA91bGGi7WzQuFoyXb_e3Kv7LL4IKhab5dAfrKQpqBuGB69akF05Nisqcxc5aly1nsKqj-pgYlvWL_J6gLFx5IdwIaAe53JVYuUp602KIdyMfyy98eK2B8lAvzrBjTl2BEN723ySonS";
   
    const headers = {
        'Authorization' : `key=${server_key}`,
        'Content-Type'  : 'application/json',
    };

    let payloads = {
      to   : receiver_token,
      data : {body:`${ldata.user_name} bided on your Nft ${bidAmount}`,title:'Firebase Notification'},
    };

    console.log("token---------------------",receiver_token)
    axios.post(`https://fcm.googleapis.com/fcm/send`,payloads,{
      headers: headers
    }).then((res)=>{
        console.log("FCM send method receiver",res)
      }).catch((e)=>{
        console.log("FCM api error receiver",e)
      })

     
  },3000);


}


