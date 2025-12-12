import {schedule} from 'node-cron';
import config from "./config.js";

schedule(config.scheduler_expression,()=>{

});


