import "dotenv/config";
import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";

async function main() {
  const user = db
    .insert(UserTable)
    .values({
      name: "somu",
      age: 29,
      email: "test@test.com",
    })
    .returning({
      id: UserTable.id,
    });
  console.log(user);
}

main();
