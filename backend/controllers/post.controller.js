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
  const { title, description, author } = req.body;
  if (
    title === undefined ||
    description === undefined ||
    author === undefined
  ) {
    res.status(400).send({
      status: 400,
      error: "Request requires body title, description and author data",
    });
  } else {
    const kitty = new Kitty({
      title: title,
      description: description,
      author: author,
    });

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
  try {
    const kittyId = await Kitty.findById(req.params.id);
    const clientIpAddress = req.socket.remoteAddress;
    Kitty.findByIdAndUpdate(
      kittyId,
      { $addToSet: { likers: clientIpAddress } },
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
};

// REMOVE LIKE IN KITTY
export const unlikeKitty = async (req, res, next) => {
  try {
    const kittyId = await Kitty.findById(req.params.id);
    const clientIpAddress = req.socket.remoteAddress;
    Kitty.findByIdAndUpdate(
      kittyId,
      { $pull: { likers: clientIpAddress } },
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
};

// Patch

// const ipAddress = req.socket.remoteAddress;
// const ipAddresses = req.header('x-forwarded-for');

/*
// UPDATE ONE KITTY
export const updateKitty = (req, res, next) => {
  const { title, description, author } = req.body;

  if (
    title === undefined &&
    description === undefined &&
    author === undefined
  ) {
    // Data can be updated for title only, description only, author only or both
    return res.status(400).json({
      status: 400,
      error: `Body request requires at least title, description or author data`,
    });
  } else {
    Kitty.findOne({ _id: req.params.id })
      .then((kitty) => {
        if (kitty === null) {
          throw Error(`Data with id : ${req.params.id} not found`);
        } else {
          if (title !== undefined) {
            kitty.title = title;
          }
          if (description !== undefined) {
            kitty.description = description;
          }
          if (author !== undefined) {
            kitty.author = author;
          }

          kitty
            .save()
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
        }
      })
      .catch((err) =>
        res
          .status(400)
          .json({ status: 400, error: err.message ? err.message : err })
      );
  }
};

*/
