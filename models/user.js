/**
 * @swagger
 * definitions:
 *   user:
 *     type: object
 *     properties:
 *       id:
 *        type: string
 *       username:
 *         type: string
 *       email:
 *         type: string
 *       country:
 *         type: string
 *       img:
 *         type: string
 *       city:
 *         type: string
 *       phone:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 *       required:
 *         - email
 *         - username
 *         - password
 *         - country
 *         - city
 *         - phone
 */

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
