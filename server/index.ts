import { createServer } from "http";
import { parse } from "url";
import next from "next";
import { logger } from "../services/logger";
import { restGetUsers } from "./routes/index";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    if (req.url === "/api/users") {
      return restGetUsers(req, res);
    }
    handle(req, res, parsedUrl);
  }).listen(port);

  // tslint:disable-next-line:no-console
  logger(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
