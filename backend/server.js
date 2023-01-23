import { WebSocketServer } from "ws";

export const wsServer = new WebSocketServer({ port:8080 })

export function createServer() {
  wsServer.on('connection', function connection(ws) {
    wsServer.on('message', function message(message) {
      console.log(`websocket server started on port: ${PORT} \n with adress: localhost:8080`)
      console.log('received: ', message.toString());
    }); 
    ws.send('something');
  });
}

