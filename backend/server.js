import { createWebSocketStream, WebSocketServer } from "ws";
import { mouseControl } from "./mouseControl.js";

const PORT = 8080;

export const wsServer = new WebSocketServer({ port: PORT });

export function createServer(ws) {
  wsServer.on('connection', function (WebSocket) {
    const stream = createWebSocketStream(WebSocket, { decodeStrings: false })
    
    stream.on('data',  data => {
      stream.write(data.toString())
      mouseControl(data.toString())
    })
    console.log(`websocket server started on port: ${PORT} \n with adress: localhost:8080`);
  });
}





