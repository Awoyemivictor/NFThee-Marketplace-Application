const mongoose = require('mongoose');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { adminModel, authModel } = require('../../models');

const { credentials } = require('../../config').constantCredentials;
/**
 * @function admin data
 * @description using this function to generate refercode for user
 * @param {mobile}
 * @author Rinku sain
 */
exports.all_blog = async() => {
    try {
        let result = await adminModel.find();
        return {
            message: "All Blog Data Fetch.....",
            status: true,
            data: result,
        };
    } catch (error) {
        throw error;
    }
}

exports.single_blog = async (req) => {
    try {
        const _id = req.query.id
        let result = await adminModel.find({_id});
        return {
            message: "Blog Data Fetch.....",
            status: true,
            data: result,
        };
    } catch (error) {
        throw error;
    }
}

exports.adminBlog = async(req) => {
    try {
        console.log(`req.file`, req.file);
        const img_blog_path = `${credentials.BASE_URL}fileUpload/${req.file.filename}`;
        let blogInfo = {
            title: req.body.title,
            author_name: req.body.author_name,
            sub_description: req.body.sub_description,
            description: req.body.description,
            date_of_posting: req.body.date_of_posting,
            date_of_publishing: req.body.date_of_publishing,
            status: req.body.status,
            meta_tag: req.body.meta_tag,
            meta_title: req.body.meta_title,
            meta_description: req.body.meta_description,
            keyword_tag: req.body.keyword_tag,
            uploadFile: img_blog_path
        }

        let result = await adminModel.create(blogInfo);
        return {
            message: "Blog Data Save..........",
            status: true,
            data: result,
        };
    } catch (error) {
        throw error;
    }
}


exports.adminUpdate = async(req) => {
    try {
        let blogId = req.body.blogId
        console.log(`req.file`, req.file);
        if (req.file) {
            req.body.uploadFile = `${credentials.BASE_URL}fileUpload/${req.file.filename}`;
        } else {
            req.body.uploadFile = undefined
        }

        let result = await adminModel.findByIdAndUpdate(mongoose.Types.ObjectId(blogId), { $set: req.body }, {new:true});
        if (result) {
            return {
                message: "Blog Data Updated..........",
                status: true,
                data: result,
            };
        } else {
            return {
                message: "Blog Data not found..........",
                status: false,
                data: {},
            };
        }
    } catch (error) {
        return {
            message: "Something went wrong",
            status: false,
            data: {},
        };
    }
}



exports.blog_delete = async(req) => {
    try {
        let blogId = req.body.blogId;
        let blogData = await adminModel.findById(mongoose.Types.ObjectId(blogId) );
        if (blogData) {
            fs.unlink(blogData.uploadFile, () => {
                console.log("deleted")
            });
            let result = await adminModel.findByIdAndDelete(mongoose.Types.ObjectId(blogId));
            return {
                message: "Blog Data deleted..........",
                status: true,
                data: result,
            };
        } else {
            return {
                message: "Not found this blog..",
                status: false,
                data: [],
            };
        }
    } catch (error) {
        throw error;
    }
}

//login admin api

/**
 * @function loginUser
 * @description function to get all admin data
 * @param (req)
 * @author [Rinku sain]
 */

exports.loginUser = async(req) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        let query = {
            username: email,
        }
        const user = await this.loginData(query);
        console.log(user)
        if (user.length == 0) {
            return {
                status: false,
                message: "User name not register ",
                data:{}
            };
        } else {
            const checkPass = await bcrypt.compare(password, user[0].password);
            if (!checkPass) {
                return {
                    success: false,
                    message: "Invalid Login credentials.",
                    data:{}
                };
            } else {
                const token = jwt.sign({ _id: user[0]._id.toString() },
                    credentials.SECRET_TOKEN
                );
                await authModel.updateOne({ _id: user[0]._id }, { auth_key: token }, { new: true });
                return {
                    message: "Login Successfully.",
                    status: true,
                    data: {
                        token,
                        _id: user[0]._id,
                        username: user[0].username,
                        eamil: user[0].eamil,
                        firstName: user[0].firstName,
                        lastName: user[0].lastName,
                        phoneNumber: user[0].phoneNumber,
                    },
                };
            }
        }
    } catch (error) {
        throw error;
    }
}


/**
 * @function loginData
 * @description function to get all admin data
 * @param (req)
 * @author [Rinku sain]
 */
exports.loginData = async(query) => {
    try {
        return await authModel.find(query);
    } catch (error) {
        throw error;
    }
}



exports.changePassword = async (req) => {
    const {pass, newPass, confirmPass} = req.body;
    if (pass && newPass && confirmPass) {
        if (newPass === confirmPass) {
            const user = await authModel.findById(req.user._id);
            const match = await bcrypt.compare(pass, user.password)
            if (match) {
                const newPassword = await bcrypt.hash(newPass, 10)
                user.password = newPassword;
                await user.save();
                return {
                    success: true,
                    message: "Password changed successfully",
                    data: {
                        token: user.auth_key,
                        _id: user._id,
                        username:user.username,
                        eamil:user.eamil,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        phoneNumber:user.phoneNumber,
                      }
                };
            } else {
                return {
                    success: false,
                    message: "Wrong Password",
                    data:{}
                };
            }
        } else {
            return {
                success: false,
                message: "Passwords are not same",
                data:{}
            };
        }
    } else {
        return {
            success: false,
            message: "Provide all details",
            data:{}
        };
    }
}