const router = require("express").Router();
const userCtrl = require("../controllers/user");

const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken");

//UPDATE
/**
 * @swagger
 * /api/users/{id}:
 *    put:
 *      tags:
 *        - Users
 *      summary: Update users data
 *      description: update users data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                  description: enter your username
 *                  example: test
 *                email:
 *                  type: string
 *                  description: enter your email
 *                  example: test@gmail.com
 *                country:
 *                  type: string
 *                  description: enter your country
 *                  example: usa
 *                img:
 *                  type: string
 *                  description: enter your image
 *                  example: test
 *                city:
 *                  type: string
 *                  description: enter your city
 *                  example: newyork
 *                phone:
 *                  type: string
 *                  description: enter your phone
 *                  example: 112233445566
 *                password:
 *                  type: string
 *                  description: enter your password
 *                  example: testpassword12
 *      responses:
 *        200:
 *          description: Successfully updated data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data!
 *
 *
 */
router.put("/:id", verifyUser, userCtrl.updateUser);

//DELETE
/**
 * @swagger
 * /api/users/{id}:
 *    delete:
 *      tags:
 *        - Users
 *      summary: Remove Users data by id
 *      description: Remove users API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: Users id
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Successfully deleted data
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully updated data!
 *
 *
 */
router.delete("/:id", verifyUser, userCtrl.deleteUser);

//GET
/**
 * @swagger
 * /api/users/{id}:
 *    get:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *        - Users
 *      summary: Retrieve users data by id
 *      description: Retrieve users by id from users table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: user id
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: single user data.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  description:
 *                    type: string
 *                    example: Successfully fetched users data by id!
 *                  data:
 *                    type: object
 *                    properties:
 *                      username:
 *                        type: string
 *                        description: enter your username
 *                        example: test
 *                      email:
 *                        type: string
 *                        description: enter your email
 *                        example: test@gmail.com
 *                      country:
 *                        type: string
 *                        description: enter your country
 *                        example: usa
 *                      img:
 *                        type: string
 *                        description: enter your image
 *                        example: test
 *                      city:
 *                        type: string
 *                        description: enter your city
 *                        example: nevada
 *                      phone:
 *                        type: string
 *                        description: enter your phone
 *                        example: 112233445566
 *
 */
router.get("/:id", verifyUser, userCtrl.getUser);

//GET ALL
/**
 * @swagger
 * /api/users:
 *  get:
 *    security:
 *    - bearerAuth: []
 *    tags:
 *      - Users
 *    summary: Retrieve a list of users
 *    description: Retrieve a list of task froma users table
 *    responses:
 *      200:
 *        description: A list of users.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                description:
 *                  type: string
 *                  example: Successfully fetched all data!
 *                data:
 *                  type: array
 *
 */
router.get("/", verifyAdmin, userCtrl.getUsers);

module.exports = router;
