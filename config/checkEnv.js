const fs = require("fs");

if (fs.existsSync(".env.local")) {
  console.log(".env file exists, proceed");
} else {
  console.error(
    "WARNING, SYSTEM CANNOT DETECT THE .ENV FILE, PLEASE FIX TO AVOID PROBLEMS IN DEVELOPMENT"
  );
  process.exit(1);
}
