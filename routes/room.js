const router = require("express").Router();
const roomCtrl = require("../controllers/room");
const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken");

//CREATE
/**
 * @swagger
 * /api/rooms:
 *   post:
 *     description: Create a new room
 *     tags:
 *       - Rooms
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: stock
 *         description: Stock object
 *         in: body
 *         required: true
 *         schema:
 *
 *     responses:
 *       200:
 *         description: new stock
 *         schema:
 *
 */
router.post("/", verifyAdmin, roomCtrl.createRoom);

//UPDATE
/**
 * @swagger
 * /api/rooms/{id}:
 *    put:
 *      tags:
 *        - Rooms
 *      summary: Update rooms data
 *      description: update rooms data API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: rooms id
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                      name:
 *                        type: string
 *                        description: enter name room
 *                        example: villa test
 *                      type:
 *                        type: string
 *                        description: enter type of room
 *                        example: villa
 *                      city:
 *                        type: string
 *                        description: enter your city
 *                        example: sousse
 *                      img:
 *                        type: string
 *                        description: enter your image
 *                        example: test
 *                      address:
 *                        type: string
 *                        description: enter your address
 *                        example: nevada
 *                      distance:
 *                        type: string
 *                        description: enter a distance
 *                        example: 500m²
 *
 *                      photo:
 *                        type: string
 *                        description: enter a photos
 *                        example: ""
 *
 *                      title:
 *                        type: string
 *                        description: enter a title
 *                        example: villa oubeid
 *
 *                      desc:
 *                        type: string
 *                        description: enter a description
 *                        example: villa description
 *
 *                      rating:
 *                        type: number
 *                        description: enter a rating de 1 a 5
 *                        example: 4
 *                      cheapestPrice:
 *                        type: number
 *                        description: enter a price
 *                        example: 200
 *
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
router.put("/:id", verifyAdmin, roomCtrl.updateRoom);
//DELETE
/**
 * @swagger
 * /api/rooms/{id}:
 *    delete:
 *      tags:
 *        - Rooms
 *      summary: Remove Rooms data by id
 *      description: Remove rooms API
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: rooms id
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
router.delete("/:id", verifyAdmin, roomCtrl.deleteRoom);
//GET
/**
 * @swagger
 * /api/rooms/{id}:
 *    get:
 *      security:
 *          - bearerAuth: []
 *      tags:
 *        - Rooms
 *      summary: Retrieve rooms data by id
 *      description: Retrieve rooms by id from rooms table
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: room id
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
 *                    example: Successfully fetched rooms data by id!
 *                  data:
 *                    type: object
 *                    properties:
 *                      name:
 *                        type: string
 *                        description: enter name room
 *                        example: villa test
 *                      type:
 *                        type: string
 *                        description: enter type of room
 *                        example: villa
 *                      city:
 *                        type: string
 *                        description: enter your city
 *                        example: sousse
 *                      img:
 *                        type: string
 *                        description: enter your image
 *                        example: test
 *                      address:
 *                        type: string
 *                        description: enter your address
 *                        example: nevada
 *                      distance:
 *                        type: string
 *                        description: enter a distance
 *                        example: 500m²
 *
 *                      photo:
 *                        type: string
 *                        description: enter a photos
 *                        example: ""
 *
 *                      title:
 *                        type: string
 *                        description: enter a title
 *                        example: villa oubeid
 *
 *                      desc:
 *                        type: string
 *                        description: enter a description
 *                        example: villa description
 *
 *                      rating:
 *                        type: number
 *                        description: enter a rating de 1 a 5
 *                        example: 4
 *                      cheapestPrice:
 *                        type: number
 *                        description: enter a price
 *                        example: 200
 *
 */

router.get("/find/:id", roomCtrl.getRoom);
//GET ALL
/**
 * @swagger
 * /api/rooms:
 *  get:
 *    security:
 *    - bearerAuth: []
 *    tags:
 *      - Rooms
 *    summary: Retrieve a list of rooms
 *    description: Retrieve a list of task from a rooms table
 *    responses:
 *      200:
 *        description: A list of rooms.
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
router.get("/", roomCtrl.getRooms);
router.get("/countByCity", roomCtrl.countByCity);
router.get("/countByType", roomCtrl.countByType);

module.exports = router;
