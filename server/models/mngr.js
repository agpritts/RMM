const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Mngr = new Schema({
    FID: {
        type: String,
    },
    company_name: {
        type: String,
    },
    name: {
        type: String,
    },
    // first_name: {
    //     type: String,
    // },
    // last_name: {
    //     type: String,
    // },
    department: {
        type: String,
    },
    manager_level: {
        type: String,
    },
    product_area: {
        type: String,
    },
});

module.exports = mongoose.model("Mngr", Mngr);