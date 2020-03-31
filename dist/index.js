"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const tiles_1 = require("./tiles");
const app = express();
const port = 3000;
app.get("/", (req, res) => res.sendFile(path.resolve("./dist/public/index.html")));
app.use(express.static("dist/public"));
const http = require("http").Server(app);
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = socketio(server);
io.on("connection", socket => {
    console.log("connection made from:", socket.id);
    const payload = {
        clientId: socket.id,
        tiles: tiles_1.tiles,
    };
    socket.emit("initial", payload);
    socket.on("drag", function (data) {
        const { id, myClientId, x, y } = data;
        const tile = tiles_1.tiles.find((t) => t.id === id);
        if (tile) {
            tile.x = x;
            tile.y = y;
            console.log("this is the new tile:", tile);
            const updatedTileInfo = {
                tile,
                myClientId,
            };
            socket.broadcast.emit("updateDraggedTiles", updatedTileInfo);
        }
        else {
            console.warn("Tile not found with id:", id);
        }
    });
});
//# sourceMappingURL=index.js.map