import { httpServer } from "./src/http_server/index.js";
import { mouse } from "@nut-tree/nut-js";
import { createWebSocketStream, WebSocket } from "ws";
import { createServer } from "./backend/server.js";

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const PORT = 8080;
const ws = new WebSocket(`ws://localhost:${PORT}`);

ws.on('message', data => {
  console.log(data.toString());
})
ws.on('close', () => {
  console.log('Connection closed');
})

createServer(ws);

