const mongoose = require('mongoose');

// schema for database to store this type of data like here is defines
const weightModal = mongoose.Schema({
        weight: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

const Weight = mongoose.model("Weight", weightModal);
module.exports = Weight;