const mongoose = require("mongoose");
var deepPopulate = require("mongoose-deep-populate")(mongoose);

const Course = mongoose.model("course");
const utils = require("../utils/Utils");

/**
 * @file course routes to handle course API
 * @module coursesRoutes
 */

module.exports = app => {
  /**
   * create a new course on db
   */
  app.post("/api/courses", async (req, res) => {
    const { name, description, questions } = req.body;

    const course = new Course({
      name: name,
      description: description,
      _questions: questions,
      dateModified: Date.now(),
      _user: req.user.id
    });
    try {
      await course.save();
      res.status(200);
    } catch {
      res.status(404);
    }
  });

  /**
   * Update a single course
   */
  app.put("/api/courses/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        await Course.updateOne(
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

  /**
   * fetch courses by filter params
   */
  app.get("/api/courses", async (req, res) => {
    const query = buildQueryObject(req);

    if (utils.isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const courses = await Course.find(query)
          .populate("_user")
          .populate("_questions", "title")
          .exec();
        res.send(courses);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * get a single course by id
   */
  app.get("/api/courses/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        const course = await Course.findById({
          _id: req.params.id
        })
          .populate("_user")
          .populate("_questions", "title")
          .exec();
        res.send(course);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });
};

/**********************Helpers**************************************/
function buildQueryObject(req) {
  const { name } = req.query;
  const query = {};
  if (req.query.hasOwnProperty("name")) {
    const nameRegex = new RegExp(name, "i");
    query.name = nameRegex;
  }
  return query;
}
