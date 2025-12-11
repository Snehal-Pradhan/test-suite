import cron from "node-cron";

console.log(`cron demo started...`);
let count = 0;

cron.schedule("* * * * * *",()=>{
    console.log(`Running cron... every second - count = ${count} seconds`);
    count = count + 1;
});
