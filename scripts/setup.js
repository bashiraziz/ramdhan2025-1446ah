// This is a simple script to run the TypeScript setup file
// You can run this with: node scripts/setup.js

const { execSync } = require("child_process")

try {
  console.log("Running setup script...")
  execSync("npx tsx scripts/create-placeholder-images.ts", { stdio: "inherit" })
  console.log("Setup completed successfully!")
} catch (error) {
  console.error("Error running setup:", error)
}

