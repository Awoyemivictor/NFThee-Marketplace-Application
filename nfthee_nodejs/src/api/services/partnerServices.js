const mongoose = require('mongoose');
const fs = require('fs');
const jwt = require("jsonwebtoken");
const { createToken, Mail } = require('../../utils');
const { partnerModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;
/**
 * @function admin data
 * @description using this function to generate refercode for user
 * @param {mobile}
 * @author Rinku sain
 */
exports.addPartner = async(req, res) => {
    try {
      
        let find = await partnerModel.findOne({ project_name: req.body.project_name });
        console.log(find)
        if (find) {
            return {
                message: "Project Name Already Exist.",
                status: false,
                data: {}
            }
        }
        // if (req.files.nft_artwork) body.nft_artwork = `${credentials.BASE_URL}fileUpload/${req.files.nft_artwork[0].filename}`;
        // if (req.files.banner_image) body.banner_image = `${credentials.BASE_URL}fileUpload/${req.files.banner_image[0].filename}`;
        // if (req.files.icon_image) body.icon_image = `${credentials.BASE_URL}fileUpload/${req.files.icon_image[0].filename}`;
    const nft_artwork = req.files.nft_artwork[0].location;
    const banner_image = req.files.banner_image[0].location;
    const icon_image = req.files.icon_image[0].location;
    const upadate_data = {
        nft_artwork: nft_artwork,
        banner_image: banner_image,
        icon_image: icon_image,
        project_name: req.body.project_name,
        project_desc: req.body.project_desc,
        project_website: req.body.project_website,
        project_status: req.body.project_status,
        project_status_desc: req.body.project_status_desc,
        minted_item_count: req.body.minted_item_count,
        blockchain_mint: req.body.blockchain_mint,
        mint_price: req.body.mint_price,
        is_minting_page: req.body.is_minting_page,
        partnership: req.body.partnership,
        end_day: req.body.end_day,
        send_email_to: req.body.send_email_to,
      };
    // if (req.files.nft_artwork) nft_artwork = req.files.nft_artwork[0].location;
    // if (req.files.banner_image)banner_image = req.files.banner_image[0].location;
    //  if (req.files.icon_image)icon_image = req.files.icon_image[0].location;
    // const project_logo = req.files.project_logo[0].location;

        // const adminMail = new Mail('admin');
        // const userMail = new Mail(req.body.email);
        // await adminMail.sendMail(
        //     adminMail.email,
        //     `<h3>New partner registered, Please check the details:</h3><br><h4>Email - ${req.body.email}</h4><br><p> Project Name: ${req.body.project_name}<br>Description: ${req.body.project_desc}<br>Website: ${req.body.project_website}<br>Status: ${req.body.project_status}<br>Status Description: ${req.body.project_status_desc}<br>Minted Items: ${req.body.minted_item_count}<br>End Day: ${req.body.end_day}<br></p>`,
        //     `New Partner`,
        // );
        // await userMail.sendMail(
        //     userMail.email,
        //     `<p> Thank you for submitting request, We will review your request.</p>`,
        //     `Thank you for submitting request`,
        // );
        let addPartner = await partnerModel.create(upadate_data);
        console.log('::::::::::::>>>>',addPartner);
        return {
            message: "Partner added successfully.",
            status: true,
            data: addPartner,
        };
    } catch (error) {
        throw error;
    }
}

exports.getPartner = async (req,res) => {
    try {
        let query={};
        console.log(req.user)
        if(req.query?.partnerId){
            query={ _id:req.query.partnerId }
        }
        let findData = await partnerModel.find(query).sort({'createdAt':-1});
        return {
            message: "Getting partner listing.",
            status: true,
            data: findData,
        };
    } catch (error) {
        throw error;
    }
}


exports.createPageToken = async (req,res) => {
    try {
        const token = jwt.sign(req.body, credentials.SECRET_TOKEN, { expiresIn: "10m" });
        return {
            message: "Getting token.",
            status: true,
            data: token,
        };
    } catch (error) {
        throw error;
    }
}