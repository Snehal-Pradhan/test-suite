type CronConfig = {
    scheduler_expression : string;
    temp_folder_path : string;
    retention_threshold : number;
    log_file_path? : string;
}
const config: CronConfig = {
    scheduler_expression : "*/10 * * * *",
    temp_folder_path : "./temp",
    retention_threshold : 86400,
    log_file_path: "./logs/cleanup.log"
}

export default config;