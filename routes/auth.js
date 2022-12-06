/**
 * @swagger
 * tags:
 *  name: Authorization
 *  description: default user login and generate authorization token for other endpoints
 *
 */

const router = require("express").Router();
const authCtrl = require("../controllers/auth");
/**
 * @swagger
 * /api/auth/register:
 *  post:
 *      tags:
 *          - Authorization
 *      summary: "Returns object  user create"
 *      description: "Authorizes default users with username and password "
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                          email:
 *                              type: string
 *                          country:
 *                              type: string
 *                          img:
 *                              type: string
 *                          city:
 *                              type: string
 *                          phone:
 *                              type: string
 *                          password:
 *                              type: string
 *              example:
 *                  username: "test"
 *                  email: "test@gmail.com"
 *                  country: "Tunisia"
 *                  img: "test"
 *                  city: "sousse"
 *                  phone: "12345687"
 *                  password: "test"
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: " user register"
 *              content:
 *
 */
router.post("/register", authCtrl.register);
/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      tags:
 *          - Authorization
 *      summary: "Returns Authorization Token"
 *      description: "Authorizes default users with username and password "
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          username:
 *                              type: string
 *                          password:
 *                              type: string
 *              example:
 *                  email: "test"
 *                  password: "test"
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *              description: "Authorization token"
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                      example:
 *                          "data": "token"
 *
 */
router.post("/login", authCtrl.login);

module.exports = router;
