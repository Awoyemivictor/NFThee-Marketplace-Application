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
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      }],
    createdAt: {
        type: Date,
        default: Date.now
      }
})
module.exports=mongoose.model('likesmodel',likesSchema);
