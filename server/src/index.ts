import { createServer } from "http";
import app from "./app";

const server = createServer(app);

server.listen(3001, () => {
  console.log("server running");
});
