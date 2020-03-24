const express = require("express");

const session = require("express-session");

const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

const server = express();

const sessionConfig = {
  name: "monster",
  secret: "super secret secret",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUninitialized: true
};

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "running" });
});

module.exports = server;
