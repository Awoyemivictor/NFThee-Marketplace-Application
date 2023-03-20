const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    project_name: {
        type: String,
        required:true
    },
    project_desc: {
        type: String,
        required:true
    },
    project_website: {
        type: String,
        required:true
    },
    project_status: {
        type: String,
        required:true
    },
    project_status_desc: {
        type: String,
        required:true
    },
    nft_artwork: {
        type: String,
        default:''
    },
    minted_item_count: {
        type: String,
        required:true
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
        default:''
    },
    icon_image: {
        type: String,
        default:''
    },
    send_email_to: {
        type: String,
        default:''
    }
}, { timestamps: true ,versionKey:false});

module.exports = mongoose.model("partner", partnerSchema);

