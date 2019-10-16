const mongoose = require("mongoose");

const Question = mongoose.model("question");
const utils = require("../utils/Utils");

module.exports = app => {
  /**
   * Create a new question on db
   */
  app.post("/api/questions", async (req, res) => {
    const { title, body, answer, questionType, hints, bodyCode } = req.body;

    const question = new Question({
      title,
      body,
      answer,
      questionType,
      hints,
      bodyCode,
      _user: req.user.id,
      dateCreated: Date.now()
    });
    try {
      await question.save();
      res.sendStatus(200);
    } catch (err) {
      res.sendStatus(500);
    }
  });

  /**
   * fetch questions by filter params
   */
  app.get("/api/questions", async (req, res) => {
    const query = buildQueryObject(req);

    if (utils.isEmpty(query)) {
      res.sendStatus(400);
    } else {
      try {
        const questions = await Question.find(query)
          .populate("_user")
          .exec();
        res.send(questions);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * get a single question by id
   */
  app.get("/api/questions/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        const question = await Question.findById({
          _id: req.params.id
        })
          .populate("_user")
          .exec();
        res.send(question);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**
   * Update a single question -- dateModified
   */
  app.put("/api/questions/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        await Question.updateOne(
          {_id: req.params.id},
          {
            $set:req.body,
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
   * delete a single question by id
   */
  app.delete("/api/questions/:id", async (req, res) => {
    if (req.params.id === null) {
      res.sendStatus(400);
    } else {
      try {
        const ans = await Question.findByIdAndDelete({ _id: req.params.id });
        res.sendStatus(200);
      } catch (err) {
        res.sendStatus(500);
      }
    }
  });

  /**********************Helpers**************************************/
  function buildQueryObject(req) {
    const { title, questionType } = req.query;
    const query = {};
    if (req.query.hasOwnProperty("title")) {
      const titleRegex = new RegExp(title, "i");
      query.title = titleRegex;
    }
    if (req.query.hasOwnProperty("questionType")) {
      query.questionType = questionType;
    }
    return query;
  }
};
