const mongoose = require("mongoose");
const fs = require("fs");
const { signup } = require("../../models");
const nodemailer = require("nodemailer");
// const nodemailer = require("nodemailer");

const { sign } = require("crypto");
const { Mail, Email } = require("../../utils");
const jwt = require("jsonwebtoken");
const { createCollection } = require("../../models");
const { nftIteams } = require("../../models");
const { mailerLogin } = require("../../utils/email");
const { notificationModel } = require("../../models");
// const {signup} = require('../../models');

const { credentials } = require("../../config").constantCredentials;

exports.signupData = async (req, res) => {
  try {
    const token = jwt.sign(req.body, credentials.SIGNUP_TOKEN, {
      expiresIn: "2h",
    });
    // let checkUser = await signup.findOne({user_name:req.body.user_name});
    console.log("tokennnn", token);
    let signupDetails = {
      user_name: req.body.user_name,
      first_name: req.body.first_name,
      token: token,
    };
    const isSigned = await signup.findOne({ email: req.query });
    if (isSigned) {
      return {
        message: "User name already exists..........",
        status: false,
        data: [],
      };
    }

    const userMail = new Mail(req.body.email_address);
    await userMail.sendMail(
      userMail.email,
      `<p> Thank you for submitting request, We will review your request.</p>`,
      `Thank you for submitting request`
    );
    let result = await signup.create(signupDetails);
    return {
      message: "Registration Data Save..........",
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.signupDataAll = async (req) => {
  try {
    let result = await signup.find();
    return {
      message: "Registration All Save Data..........",
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};
exports.signupData = async (req) => {
  try {
    let userId = req.query.id;
    let result = await signup.findOne({ _id: userId });
    return {
      message: "Registration single Save Data..........",
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};
exports.loginOne = async (req) => {
  try {
    const email = req.query.email_address;
    if (!email) {
      return {
        message: "Please Provide Email!!",
        status: false,
        data: [],
      };
    } else {
      let result = await signup.findOne({ email_address: email });
      if (result) {
        return {
          message: "Email Get............",
          status: true,
          data: result,
        };
      } else {
        return {
          message: "Email Get............",
          status: false,
          data: [],
        };
      }
    }
  } catch (error) {
    return error;
  }
};

exports.register = async (req, res) => {
  try {
    const { email_address } = req.body;
    // const token=jwt.sign(req.body, credentials.SIGNUP_TOKEN, { expiresIn: "60" });
    //  token=signuptoken;
    // console.log('token',token)
    const upadate_data = {
      user_name: req.body.user_name,
      // token: token,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email_address: req.body.email_address,
      country: req.body.country,
      account_address: req.body.account_address,
    };
    // const {token}=req.body
    console.log(req.body);

    const isSigned = await signup.findOne({ email_address });
    const userMail = new Mail(req.body.email_address);
    // console.log(isSigned)
    if (!isSigned) {
      await userMail.sendMail(
        userMail.email,
        `<p> Thank you for submitting request, We will review your request.</p>`,
        `Thank you for submitting request`
      );

      // console.log('tokennnnn',token)
      const result = await signup.create(upadate_data);
      console.log("result", result);
      return {
        message: "Registration Data Save..........",
        status: true,
        // data: isSigned,
        data: result,
      };
    } else {
      return {
        message: "User already exists",
        status: false,
        data: null,
      };
    }
  } catch (err) {
    return err;
  }
};

// const mailerLogin = (mail)=>{

//   console.log("mailer function hit---",mail)

//     var transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       service: "gmail",
//       auth: {
//         user: 'mohit.lnwebworks@gmail.com',
//         pass: 'elbwalaqodlvuzxi'
//       },
//     });

//     // Define the email
//     var mailOptions = {
//         from: 'mohit.lnwebworks@gmail.com',
//         to: mail,
//         subject: 'Subject',
//         text: 'welcome'
//     };

//     // We send the email
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//             // res.send(500, err.message);
//         } else {
//             console.log("Email sent",info);
//             // res.status(200).jsonp(req.body);
//         }
//     });
// }

exports.login = async (req, res) => {
  try {
    const { email_address } = req.query;
    console.log(req.body, req.query);
    let test_Message = "Test message";

    let test = await mailerLogin(email_address, test_Message);
    console.log(test);

    // mailerLogin.transporter.sendMail(mailOptions, function(error, info){
    //   //       if (error) {
    //   //           console.log(error);
    //   //           // res.send(500, err.message);
    //   //       } else {
    //   //           console.log("Email sent",info);
    //   //           // res.status(200).jsonp(req.body);
    //   //       }
    //   //   }););
    const user = await signup.findOne({ email_address });
    // const userMail = new Email(req.body.email_address);
    // // console.log(isSigned)
    // if (user) {
    //   await userMail.sendMail(
    //     userMail.email,
    //     `<p> Thank you for submitting request, We will review your request.</p>`,
    //     `Thank you for submitting request`
    //   );
    if (user) {
      return {
        message: "Email Get............",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (err) {
    return err;
  }
};
exports.updateAccountAdrs = async (req, res) => {
  try {
    // const { email_address } = req.;
    // console.log(req.body, req.query);
    const email_address = req.body.email_address;
    const token_data = "0x1f9090aae28b8a3dceadf281b0f12828e676c327";
    await signup.findOneAndUpdate(
      {
        email_address,
      },
      {
        $set: {
          account_address: token_data,
        },
      }
    );
    const user = await signup.find({ email_address });

    /**} */

    if (user) {
      return {
        message: "Email Get............",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (err) {
    return err;
  }
};
exports.updateProfile = async (req, res) => {
  console.log(req.body, "first");
  try {
    //  console.log('req.files:::::::>', req.files);
    const profile_image = `${req.files.profile_image[0].filename}`;
    const banner_image = `${req.files.banner_image[0].filename}`;
    const upadate_data = {
      user_name: req.body.username,
      email_address: req.body.email,
      profile_image: profile_image,
      banner_image: banner_image,
      bio: req.body.bio,
      website: req.body.website,
      facebook: req.body.facebook,
      linkedin: req.body.linkedin,
      youtube: req.body.youtube,
    };
    console.log("::::::>", upadate_data);
    let result = await signup.findOneAndUpdate(
      { email_address: req.body.email },
      { $set: upadate_data }
    );
    return {
      message: "profile updated successfully",
      status: true,
      data: result,
    };
  } catch (error) {
    return error;
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const user = await signup.findOneAndUpdate({ id: req.body.id });
    if (user) {
      return {
        message: "Address Updated Sucessfully",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};
exports.userCollections = async (req, res) => {
  try {
    let userId = req.query.id;
    // const user = await createCollection.find({ created_by: userId , status:'verified'});
    // const user = await createCollection.find({ created_by: userId });
    const user = await createCollection.find({
      created_by: userId,
      status: "verified",
    });
    // const user = await createCollection.find({ created_by: userId });
    // console.log(user)
    if (user) {
      return {
        message: "data Updated Sucessfully",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};
exports.userItems = async (req, res) => {
  try {
    let userId = req.query.id;
    // const user = await createCollection.find({ created_by: userId ,status:'pending'});
    const user = await nftIteams.find({ created_by: userId });
    console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><>", user);
    if (user) {
      return {
        message: "data Updated Sucessfully",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};

//user following list route

exports.followingList = async (req, res) => {
  try {
    let userId = req.query.id;
    // const user = await createCollection.find({ created_by: userId ,status:'pending'});
    const user = await signup
      .find({ _id: userId })
      .select("following")
      .populate("following");
    console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><>", user);
    if (user) {
      return {
        message: "data Updated Sucessfully",
        status: true,
        data: user,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};

// const followMail = (username) => {
//   console.log("mailer function hit---", username);

//   //   var transporter = nodemailer.createTransport({
//   //     host: 'smtp.ethereal.email',
//   //     port: 587,
//   //     auth: {
//   //         user: 'mohit.lnwebworks@gmail.com',
//   //         pass: 'elbwalaqodlvuzxi'
//   //     }
//   // });

//   var transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     service: "gmail",
//     auth: {
//       user: "mohit.lnwebworks@gmail.com",
//       pass: "elbwalaqodlvuzxi",
//     },
//   });

//   // Define the email
//   // const {user_name}=signup.findById({user_name:id.user_name})
//   // console.log('name>>>>>>>>>>>>>>>>>>>>>>>>>',user_name)
//   var mailOptions = {
//     from: "mohit.lnwebworks@gmail.com",
//     to: "mohit.lnwebworks@gmail.com",
//     subject: "New Follower ",
//     // text: `${username} follow you`,
//     html: `<h3>${username}</h3>follow you`,
//   };

//   // We send the email
//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent", info);
//     }
//   });
// };

// follow user
exports.userFollow = async (req, res) => {
  try {
    console.log("njbadjajdjdajdbj", req.body);
    const { email_address } = req.body;
    const { user_name } = req.body;
    let userId = req.query.id;
    let username = req.query.username;
    let email = req.query.email;
    console.log("sjjndjknjkdnnnnnnnnnn", userId, username);
    let message = `<h3>${username}</h3><p>follow you</p>`;
    console.log(
      "mkamkkkkkkkkkkkkkkkkkkkkkkkkk",
      message,
      username,
      userId,
      email
    );
    // mailerLogin(email,message);
    const data = {
      user:
        (await signup.findByIdAndUpdate(
          req.body.id,
          {
            $push: { followers: userId },
          },
          { new: true }
        )) ||
        console.log(
          "<><><><><<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>UserId:",
          userId
        ),
      follow: await signup.findByIdAndUpdate(
        userId,
        {
          $push: { following: req.body.id },
        },
        { new: true }
      ),
    };
    console.log(data);

    if (data) {
      return {
        message: "follow Sucessfully",
        status: true,
        data: data,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};

// // unfollow user
exports.userUnFollow = async (req, res) => {
  try {
    console.log("njbadjajdjdajdbj", req.body);

    let userId = req.query.id;
    console.log("sjjndjknjkdnnnnnnnnnn", userId);

    const data = {
      user:
        (await signup.findByIdAndUpdate(
          req.body.id,
          {
            $pull: { followers: userId },
          },
          { new: true }
        )) ||
        console.log(
          "<><><><><<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>User:",
          user
        ),
      follow: await signup.findByIdAndUpdate(
        userId,
        {
          $pull: { following: req.body.id },
        },
        { new: true }
      ),
    };
    console.log(data);

    if (data) {
      return {
        message: "unfollow Sucessfully",
        status: true,
        data: data,
      };
    } else {
      return {
        message: "User hasn't found",
        status: false,
        data: null,
      };
    }
  } catch (error) {
    return error;
  }
};

// addLoginToken to gernerate token with firebase
exports.addLoginToken = async (req, res) => {
  console.log(req.body, "firstsss");
  const email_address = req.body.email_address;
  let users = await signup.findOne({ email_address });
  if (users) {
    const result = await signup.findOneAndUpdate(
      { email_address: email_address },
      { $set: { token_id: req.body.token_id } }
    );
    users = await signup.findOne({ email_address });
  }

  if (users) {
    return {
      message: "Token update ",
      status: true,
      data: users,
    };
  } else {
    return {
      message: "User hasn't found",
      status: false,
      data: null,
    };
  }
};

exports.notificationSend = async (req, res) => {
  console.log(req.body, "firstsss sdjbjd--------------");

  let id = req.body.receiver_id;
  let r_users = await signup.findById(id);

  payload_data = {
    sender_id: req.body.sender_id,
    receiver_id: req.body.receiver_id,
    sender_token: req.body.sender_token,
    receiver_token: req.body.receiver_token,
    message: req.body.message,
    status: "active",
  };

  let result = "";
  if (r_users) {
    result = await notificationModel.create(payload_data);
    console.log("result-------", result);
  }

  if (result) {
    return {
      message: "Notification update",
      status: true,
      data: result,
    };
  } else {
    return {
      message: "User hasn't found",
      status: false,
      data: null,
    };
  }
};

// router.post('/follow', async (req, res, next) => {
//   exports.userFollow = async (req, res) => {
//   const { action } = req.body;
//   try {
//       switch(action) {
//           case 'follow':
//               await Promise.all([
//                   signup.findByIdAndUpdate(req.body.follower, { $push: { following: req.query.id }}),
//                   signup.findByIdAndUpdate(req.query.id, { $push: { follower: req.body.follower }})

//               ]);
//           break;

//           case 'unfollow':
//               await Promise.all([
//                   signup.findByIdAndUpdate(req.query.id, { $pull: { following: req.body.following }}),
//                   signup.findByIdAndUpdate(req.body.following, { $pull: { follower: req.query.id }})

//               ]);
//           break;

//           default:
//               break;
//       }

//       // res.json({ done: true });

//   } catch(err) {
//       // res.json({ done: false });
//       console.log(err)
//   }
// };
// exports.createPageToken = async (req,res) => {
//   try {
//       const token = jwt.sign(req.body, credentials.SIGNUP_TOKEN, { expiresIn: "2h" });
//       return {
//           message: "Getting token.",
//           status: true,
//           data: token,
//       };
//   } catch (error) {
//       throw error;
//   }
// }
