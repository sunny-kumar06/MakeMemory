// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const listingSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
    
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   location: {
//     type: String,
//     required: true
//   },
//   country: {
//     type: String,
//     required: true
//   },
//   images: {
//     type: String,
//     default: "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg",
//     set: (v) => v === "" ? "https://cdn.photographylife.com/wp-content/uploads/2014/06/Nikon-D810-Image-Sample-6.jpg" : v,
//   }
  
// });
// const Listing = mongoose.model('Listing', listingSchema);
// module.exports = Listing;



// const mongoose = require("mongoose");

// const listingSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   location: {
//     type: String,
//     required: true
//   },
//   country: {
//     type: String,
//     required: true
//   },
//   image: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model("Listing", listingSchema);


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;