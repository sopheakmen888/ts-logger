// src/index.ts
import logger from "./logger";

// Function to log a message
const logMessage = () => {
  logger.info(`Log entry at ${new Date().toISOString()}`);
};

// Run immediately when invoked
logMessage();

// Optional: Log startup
logger.info("Script executed");
