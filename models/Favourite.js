const mongoose=require("mongoose");

const FavouriteSchema=new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book:{type:mongoose.Schema.Types.ObjectId,
        ref:'Book',required:true
    },
    addedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Favourite', FavouriteSchema);