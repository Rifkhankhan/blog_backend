const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const BlogSchema = new Schema({      
    title : String,
    parent : String,
    child : String,
    desc : String,
    userId : String,
    image : String,
    likes:[], 
    comments: [,{
        timestamps: true  
    }]
},
{
    timestamps: true
}
);

const BlogModel = mongoose.model("blogs",BlogSchema)
module.exports = BlogModel