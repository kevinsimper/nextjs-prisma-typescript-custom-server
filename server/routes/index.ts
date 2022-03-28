import { IncomingMessage, ServerResponse } from "http";
import { getUsers } from "../../services/model/user";

export async function restGetUsers(_req: IncomingMessage, res: ServerResponse) {
  const users = await getUsers();
  res.end(JSON.stringify(users));
}
