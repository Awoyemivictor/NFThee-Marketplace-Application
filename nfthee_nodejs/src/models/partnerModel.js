const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    project_name: {
        type: String,
        required: [true, 'project_name required'],
        unique:[true,'project_name already exist']
    },
    project_desc: {
        type: String,
        required: [true, 'project_desc required'],
    },
    project_website: {
        type: String,
        required: [true, 'project_website required'],
    },
    project_status: {
        type: String,
        required: [true, 'project_status required'],
    },
    project_status_desc: {
        type: String,
        required: [true, 'project_status_desc required'],
    },
    nft_artwork: {
        type: String,
        required: [true, 'nft_artwork required'],
    },
    minted_item_count: {
        type: String,
        required: [true, 'minted_item_count required'],
    },
    blockchain_mint: {
        type: String,
        default:''
    },
    mint_price: {
        type: String,
        default:''
    },
    is_minting_page: {
        type: Boolean,
        default:true
    },
    partnership: {
        type: String,
        default:''
    },
    end_day: {
        type: String,
        required:true
    },
    banner_image: {
        type: String,
        required: [true, 'banner_image required'],
    },
    icon_image: {
        type: String,
        required: [true, 'icon_image required'],
    },
    send_email_to: {
        type: String,
        required: [true, 'send_email required'],
    }
}, { timestamps: true ,versionKey:false});

module.exports = mongoose.model("partner", partnerSchema);

