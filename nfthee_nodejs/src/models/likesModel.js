const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const likesSchema=new Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'user'
    },
    postId:{
        type:mongoose.Schema.ObjectId,
        ref:'nft'
    },
    likes:{
        type:Number
    }
})
module.exports=mongoose.model('likesmodel',likesSchema);
