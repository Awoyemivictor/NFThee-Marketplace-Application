const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    nftId: {
      type: mongoose.Schema.ObjectId,
      ref: 'nft',
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    action: {
      type: String,
      enum: ['Bids', 'Purchase', 'Transfer', 'Marketplace', 'Creation','Sale','Offer','Auction'],
    },
    actionMeta: {
      type: String,
      enum: ['Default', 'Accept', 'Listed', 'Unlisted'],
    },
    message: {
      type: String,
    },
    collection_name: {
      type: String,
    },
    from: {
      type: String,
    },
    to: {
      type: String,
      default:''
    },
    price: {
      type: Number,
    },
    sCreated: {
      type: Date,
      default: Date.now,
    },

  },
  { toJSON: { virtuals: true } })
  historySchema.virtual('timeSinceCreated').get(function() {
    const now = new Date();
    const diff = now - this.sCreated;
    const diffInSeconds = Math.round(diff / 1000);
  
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
  
    const diffInMinutes = Math.round(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }
  
    const diffInHours = Math.round(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }
  
    const diffInDays = Math.round(diffInHours / 24);
    if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    }
  
    return this.sCreated.toLocaleDateString();
  });
module.exports = mongoose.model('historymodel', historySchema);
