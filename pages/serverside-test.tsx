import { User } from "@prisma/client";
import { getUsers } from "../services/model/user";

export default function B({ hello, users }: { hello: string; users: User[] }) {
  return (
    <div>
      b {hello}
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export async function getServerSideProps() {
  const users = await getUsers();
  return {
    props: {
      hello: "world",
      users,
    },
  };
}
