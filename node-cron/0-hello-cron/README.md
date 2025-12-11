# 0-hello-cron

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.4. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


---
This project demonstrates the most basic use of a cron/scheduler.

```ts
import cron from "node-cron";

console.log(`cron demo started...`);
let count = 0;
/// the first expression in .schedule sets the repetition config.
cron.schedule("* * * * * *",()=>{
    console.log(`Running cron... every second - count = ${count} seconds`);
    count = count + 1;
});
// basic name printing with a count increased every second.
```
