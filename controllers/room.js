const Room = require("../models/room");

const roomCtrl = {
  createRoom: async (req, res, next) => {
    const newRoom = new Room(req.body);

    try {
      const savedRoom = await newRoom.save();
      res.status(200).json(savedRoom);
    } catch (err) {
      next(err);
    }
  },

  updateRoom: async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
  },
  deleteRoom: async (req, res, next) => {
    try {
      await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  },
  getRoom: async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
  },
  getRooms: async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const rooms = await Room.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  },
  countByCity: async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Room.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  },
  countByType: async (req, res, next) => {
    try {
      const hotelCount = await Room.countDocuments({ type: "hotel" });
      const apartmentCount = await Room.countDocuments({ type: "appart" });
      const resortCount = await Room.countDocuments({ type: "resort" });
      const villaCount = await Room.countDocuments({ type: "villa" });
      const cabinCount = await Room.countDocuments({ type: "cabin" });

      res.status(200).json([
        { type: "hotel", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
      ]);
    } catch (err) {
      next(err);
    }
  },
};
module.exports = roomCtrl;
