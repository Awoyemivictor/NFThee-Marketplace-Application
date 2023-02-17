const mongoose = require('mongoose');
const fs = require('fs');
const { likes } = require('../../models');
const { sign } = require('crypto');
const { Mail } = require('../../utils');
const jwt = require('jsonwebtoken');

const { credentials } = require('../../config').constantCredentials;





// exports.insertLikes = async (req, res) => {
//   try {
//     const userId = req.body.userId;
//     const postId = req.body.postId;
//     const type = req.body.type;

//     let like = await likes.findOne({userId, postId});
//     if (!like) {
//       if (type === 'like') {
//         like = new likes({
//           userId,
//           postId,
//           likes: [userId],
//         });
//       } else {
//         return res.status(400).json({message: "You have not liked this post"});
//       }
//     } else {
//       if (type === 'like') {
//         if (like.likes.includes(userId)) {
//           return {message: "You have already liked this post"};
//         }
//         like.likes.push(userId);
//       } else if (type === 'unlike') {
//         if (!like.likes.includes(userId)) {
//           return {message: "You have not liked this post"};
//         }
//         like.likes = like.likes.filter(id => id.toString() !== userId.toString());
//       } else {
//         return res.status(400).json({message: "Invalid type"});
//       }
//     }

//     return like.save().then((results) => {
//             return {

//               message: 'Like added successfully',
//               status: true,
//               data: results,
//             };
//           });
//   } catch (error) {
//     throw error
//   }
// };
exports.getLikes= async(req,res)=>{
  const getlikes= await likes.find({});
  try{
  if(getlikes){
    return {

      message: 'This is your data',
      status: true,
      data: getlikes,
    };
  }
}
catch(error){
  throw error
}

}
// exports.insertLikes = async (req, res) => {
//   try {
//     const userId = req.body.userId;
//     const postId = req.body.postId;
//     const type = req.body.type;   

//     let like = await likes.findOne({postId});
//     if (!like) {
//       if (type === 'like') {
//         like = new likes({
//           postId,
//           likes: [userId],
//         });
//       } else {
//         return {message: "You have not liked this post"}  ;
//       }
//     } else {
//       if (type === 'like') {
//         if (like.likes.includes(userId)) {
//           return {message: "You have already liked this post"};
//         }
//         like.likes.push(userId);
//       } else if (type === 'unlike') {
//         if (!like.likes.includes(userId)) {
//           return {message: "You have not liked this post"};
//         }
//         like.likes = like.likes.filter(id => id.toString() !== userId.toString());
//       } else {
//         return {message: "Invalid type"};
//       }
//     }

//     return like.save().then((results) => {
//       const count = like.likes.length;
//             return {

//               message: 'Like added successfully',
//               status: true,
//               data: {results,count},
//             };
//           });
//   } catch (error) {
//     throw error
//   }
//
exports.insertLikes = async (req, res) => {
  try {
    const userId = req.body.userId;
    const postId = req.body.postId;

    let like = await likes.findOne({ postId});
    if (!like) {
      like = new likes({
        userId,
        postId,
        likes: [userId],
      });
    }
    return like.save().then((results)=>{
      const count = like.likes.length;
      return ({message: "Post liked successfully",
                status:true,
                data:{results,count}
              });

    });
    
  } catch (error) {
    throw error
  }
};


exports.removeLikes = async (req, res) => {
  try {
    const userId = req.body.userId;
    const postId = req.body.postId;

    const like = await likes.findOne({ postId});
 

    like.likes = like.likes.filter(id => id.toString() !== userId.toString());
    return like.save().then((results)=>{
      const count = like.likes.length;
      return {message: "Post unliked successfully",
             status:true,
             data:{results,count}
    };

    });
   
  } catch (error) {
    throw error
  }
};



