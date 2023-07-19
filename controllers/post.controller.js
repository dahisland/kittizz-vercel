import Kitty from "../models/post.model.js";

// GET ALL KITTIES
export const getAllKitties = (req, res, next) => {
  Kitty.find()
    .select("-__v")
    .then((kitties) =>
      res.status(200).json({
        data: kitties,
        status: 200,
        message: "Get all kitties request success",
      })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ status: 500, error: err.message ? err.message : err })
    );
};

// GET ONE KITTY
export const getOneKitty = (req, res, next) => {
  Kitty.findOne({ _id: req.params.id })
    .select("-__v")
    .then((kitty) => {
      if (kitty === null) {
        throw Error(`Kitty with ID : ${req.params.id} not found`);
      } else {
        res.status(200).json({
          data: kitty,
          status: 200,
          message: `Get kitty with id ${req.params.id} request success`,
        });
      }
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: 400, error: err.message ? err.message : err })
    );
};

// CREATE NEW KITTY
export const createKitty = (req, res) => {
  const { title, slogan, author, goal, details } = req.body;
  if (
    title === undefined ||
    slogan === undefined ||
    details === undefined ||
    author === undefined ||
    goal === undefined
  ) {
    res.status(400).send({
      status: 400,
      error:
        "Request body requires title, slogan, goal, details and author data",
    });
  } else {
    const kitty = new Kitty(req.body);

    kitty
      .save()
      .then((kitty) => {
        res.status(201).json({
          id: kitty._id,
          status: 201,
          message: `New kitty data has been registered`,
        });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ status: 500, error: err.message ? err.message : err })
      );
  }
};

// UPDATE ONE KITTY
export const updateKitty = async (req, res, next) => {
  try {
    const kittyId = await Kitty.findById(req.params.id);
    Kitty.findByIdAndUpdate(kittyId, req.body, { new: true })
      .then((kittyUpdated) =>
        res.status(200).json({
          data: kittyUpdated,
          status: 200,
          message: `Kitty with id : ${req.params.id} has been successfully updated`,
        })
      )
      .catch((err) =>
        res
          .status(500)
          .json({ status: 500, error: err.message ? err.message : err })
      );
  } catch (err) {
    res.status(400).json({
      status: 400,
      error: `Kitty with id ${req.params.id} doesn't exists`,
    });
  }
};

// DELETE ONE KITTY
export const deleteKitty = (req, res, next) => {
  Kitty.findOneAndDelete({ _id: req.params.id })
    .then((kitty) => {
      if (kitty === null || kitty === undefined) {
        throw Error(`Kitty with id : ${req.params.id} not found`);
      } else {
        res
          .status(200)
          .json({ status: 200, message: "Kitty successfully deleted" });
      }
    })
    .catch((err) =>
      res
        .status(400)
        .json({ status: 400, error: err.message ? err.message : err })
    );
};

// ADD LIKE IN KITTY
export const likeKitty = async (req, res, next) => {
  if (req.body.ip === undefined || req.body.ip === "") {
    res.status(400).json({
      status: 400,
      error: `Request need body ip param`,
    });
  } else {
    try {
      const kittyId = await Kitty.findById(req.params.id);
      // const clientIpAddress = req.socket.remoteAddress;
      Kitty.findByIdAndUpdate(
        kittyId,
        { $addToSet: { likers: req.body.ip } },
        { new: true }
      )
        .then((kittyUpdated) =>
          res.status(200).json({
            data: kittyUpdated,
            status: 200,
            message: `Kitty with id : ${req.params.id} has been successfully liked`,
          })
        )
        .catch((err) =>
          res
            .status(500)
            .json({ status: 500, error: err.message ? err.message : err })
        );
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: `Kitty with id ${req.params.id} doesn't exists`,
      });
    }
  }
};

// REMOVE LIKE IN KITTY
export const unlikeKitty = async (req, res, next) => {
  if (req.body.ip === undefined || req.body.ip === "") {
    res.status(400).json({
      status: 400,
      error: `Request need body ip param`,
    });
  } else {
    try {
      const kittyId = await Kitty.findById(req.params.id);
      // const clientIpAddress = req.socket.remoteAddress;
      Kitty.findByIdAndUpdate(
        kittyId,
        { $pull: { likers: req.body.ip } },
        { new: true }
      )
        .then((kittyUpdated) =>
          res.status(200).json({
            data: kittyUpdated,
            status: 200,
            message: `Kitty with id : ${req.params.id} has been successfully unliked`,
          })
        )
        .catch((err) =>
          res
            .status(500)
            .json({ status: 500, error: err.message ? err.message : err })
        );
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: `Kitty with id ${req.params.id} doesn't exists`,
      });
    }
  }
};

// SEND MONEY TO KITTY
export const sendToKitty = async (req, res, next) => {
  if (req.body.gift === undefined || req.body.gift === "") {
    res.status(400).json({
      status: 400,
      error: `Request need body gift param`,
    });
  } else {
    try {
      const kittyId = await Kitty.findById(req.params.id);
      // const clientIpAddress = req.socket.remoteAddress;
      Kitty.findByIdAndUpdate(
        kittyId,
        { $addToSet: { amount: req.body.gift } },
        { new: true }
      )
        .then((kittyUpdated) =>
          res.status(200).json({
            data: kittyUpdated,
            status: 200,
            message: `Kitty with id : ${req.params.id} has successfully received gift`,
          })
        )
        .catch((err) =>
          res
            .status(500)
            .json({ status: 500, error: err.message ? err.message : err })
        );
    } catch (err) {
      res.status(400).json({
        status: 400,
        error: `Kitty with id ${req.params.id} doesn't exists`,
      });
    }
  }
};
