import logger from "./logger";

const logMessage = () => {
  logger.info(`Log entry at ${new Date().toISOString()}`);
};

logMessage();

logger.info("Script executed");

setInterval(() => {}, 1000 * 60);

process.on("SIGINT", () => {
  logger.info("Script stopped");
  process.exit(0);
});
