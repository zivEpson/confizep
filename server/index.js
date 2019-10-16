const keys = require("./config/keys");

const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/User");
require("./models/Course");
require("./models/Question");
require("./services/passport");

const { mongoHostName, mongoPort } = keys;
const url = `mongodb://${mongoHostName}:${mongoPort}/server?authSource=admin`;

//db client setup
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
//express
const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//require the routes
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/coursesRoutes")(app);
require("./routes/questionRoutes")(app);
require("./routes/userRoutes")(app);

//on production mode .PORT will be populated
const PORT = process.env.PORT || 5000;
app.listen(PORT);
