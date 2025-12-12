import cron from 'node-cron';
import config from "./config.js";

cron.schedule(config.scheduler_expression,()=>{

});


