import { mouse } from "@nut-tree/nut-js";
import { createWebSocketStream, WebSocketServer } from "ws";
import { drawRectangle } from "./drawEvents/drawRectangle.js";
import { drawSquare } from "./drawEvents/drawSquare.js";
import { mouseControl } from "./mouseEvents/mouseControl.js";

const PORT = 8080;

export const wsServer = new WebSocketServer({ port: PORT });

export function createServer(ws) {
  wsServer.on("connection", function (WebSocket) {
    const stream = createWebSocketStream(WebSocket, { decodeStrings: false });

    stream.on("data", async (data) => {  
      try {
        const dataStringified = data.toString();
        if (dataStringified.startsWith("mouse_")) {
          if (dataStringified === "mouse_position") {
            const position = await mouse.getPosition();
            await stream.write(`mouse_position ${position.x},${position.y}`)
          } else {
            mouseControl(dataStringified);
            stream.write(dataStringified)
          }
        }
        if (dataStringified.startsWith('draw_')) {
          const [command, distance ] = dataStringified.replace('draw_', '').split(' ')

          if (command === 'square') drawSquare(distance);
          if (command === 'rectangle') drawRectangle(distance);
        }
      } catch (error) {
        if (error) console.log(error);
      } 
    });
    console.log(
      `websocket server started on port: ${PORT} \n with adress: localhost:8080`
    );
  });
}
