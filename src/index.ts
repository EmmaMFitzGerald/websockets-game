import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";
import { tiles } from "./tiles";

const app = express();
const port = 3000;

app.get("/", (req, res) =>
    res.sendFile(path.resolve("./dist/public/index.html"))
);

app.use(express.static("dist/public"));

const http = require("http").Server(app);

const server = app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = socketio(server);


io.on("connection", socket => { 
    console.log("connection  made")
    socket.emit("initial", tiles);
});
