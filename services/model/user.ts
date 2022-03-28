import { prisma } from "../../prisma";

export function getUsers() {
  return prisma.user.findMany({});
}

if (require.main === module) {
  async function main() {
    const result = await prisma.user.create({
      data: {
        email: "test@test.dk",
      },
    });
    console.log(result);
  }
  main();
}
