const mongoose = require('mongoose')

// Define the person schema
const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        require:true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default:false
    },
    ingredients:{
        type: [String],
        default:[]
    },

})

// Create Person model
const Menu = mongoose.model('Menu', MenuSchema)
module.exports = Menu