const mongoose = require('mongoose');

const productVariantSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    size:{
        type: String,
        required: true        
    },
    color:{
        type: String,
        required: true
    },
   inventory: {
     type: Number,
     required: true
    },
    image: {
        type: String,
        default: ''
    },
    images:[{
        type: String
    }]
})

productVariantSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

productVariantSchema.set('toJSON', {
    virtuals: true
})

exports.ProductVariant = mongoose.model('ProductVariant', productVariantSchema);