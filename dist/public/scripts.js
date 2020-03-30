/*
    1. Make 100 absolute positioned DIVs

        jQuery and a loop < 100 

        let newDiv = $("<div></div>");
        newDiv.draggable({
            drag: function() {
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;

                console.log(`xPos: ${xPos}, yPos: ${yPos}`);

                // send the message with socket.io as in #7
            }
        });

        newdiv.id = "tile" + id;
        document.appendChild(newDiv)
        newDiv has a css class with position: absolute, left:0, top: 0


    2. Make the socket.io connection
    3. When the connection is made, in the event, receive the tiles data

    4. Pass this data to a function that updates the position of each tile.

        updateTilePositions(data) {
            loop through data[]
            $("#tile" + data.id).offset(data.x, data.y);
        }

    5. Listen for more updates from socket.io - call the fn in #4 to do subsequent updates

        socket.on("message", () => {
            if (message.type === "update") {
                updateTilePositions(data)
            }
        });

    6. Attach a mousemove/drag handler to each DIV
    7. Send an socket.io message when dragging with the id and x,y of the tile being dragged

    8. We don't want to respond to #7 if we are the publisher of the event
*/

function buildTiles() {
    for (var i = 0; i < 100; i++) {
        let newDiv = $("<div>hello</div>").appendTo("#tiles");
        newDiv.id = "tile" + i;
        newDiv.draggable({
            drag: function() {
                var offset = $(this).offset();
                var xPos = offset.left;
                var yPos = offset.top;
    
                console.log(`xPos: ${xPos}, yPos: ${yPos}`);
    
                // send the message with socket.io as in #7
            }
        });
    }
}

function openConnection() {
    io.connect("http://localhost:3000")
}

function updateTiles() {
    let socket = io.connect("http://localhost:3000")
    socket.on("initial", function(tiles){
        console.log(tiles.letter)
    })
}

function initialize() {
    buildTiles();

    openConnection();

    updateTiles();
}
