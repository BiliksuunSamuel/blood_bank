import express from "express";
import http from "http";
import cors from "cors";
import configuration from "./configuration";

const app = express();
const server = http.createServer(app);

//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

///
server.listen(configuration.port, () => {
  console.log(`server running on http://localhost:${configuration.port}`);
});
