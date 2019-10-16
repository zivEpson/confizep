const mongoose = require("mongoose");

const User = mongoose.model("users");
const utils = require("../utils/Utils");

module.exports = app => {
  /**
   * fetch users by filter params
   */
  app.get("/api/users", async (req, res) => {
    const query = buildQueryObject(req);
    if (utils.isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const users = await User.find(query);
        res.send(users);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * get a single question by id
   */
  app.get("/api/users/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        const user = await User.findById({
          _id: req.params.id
        })
          .populate("_user")
          .exec();
        res.send(user);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * Update a single user
   */
  app.put("/api/users/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        await User.updateOne(
          {_id: req.params.id}, 
          {
            $set: req.body,
            dateModified: Date.now()
          }
        );
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });
};

function buildQueryObject(req) {
  const { name } = req.query;
  const query = {};
  if (req.query.hasOwnProperty("name")) {
    const nameRegex = new RegExp(name, "i");
    query.name = nameRegex;
  }
  return query;
}
