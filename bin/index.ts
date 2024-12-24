#!/usr/bin/env node

import { exec } from "child_process";

const args = process.argv.slice(2);

if (args[0] === "create") {
  const projectName = args[1];

  if (!projectName) {
    console.error("Error: Please provide a project name.");
    console.error("Usage: npx create-vu create <project-name>");
    process.exit(1);
  }

  console.log(`Creating a new Vue.js project: ${projectName}...`);

  // Create the Vue.js project using npx
  exec(`npx create-vue@latest ${projectName} --default`, (err, stdout, stderr) => {
    if (err) {
      console.error("Error creating project:", err);
      return;
    }
    console.log(stdout);

    // Install the wrapper framework
    console.log("Installing wrapper framework...");
    exec(`npm install framework-wrapper-001`, { cwd: projectName }, (installErr, installStdout) => {
      if (installErr) {
        console.error("Error installing wrapper framework:", installErr);
        return;
      }
      console.log(installStdout);
      console.log("Project created successfully!");
      console.log(`Navigate to '${projectName}' and run 'npm run dev' to start development.`);
    });
  });
} else if (args[0] === "import") {
  const modules = args.slice(1);

  if (modules.length === 0) {
    console.error("Error: Please specify modules to import.");
    console.error("Usage: npx create-vu import <module-name> [module-name...]");
    process.exit(1);
  }

  console.log(`Importing modules: ${modules.join(", ")}`);
  modules.forEach((module) => {
    exec(`npm install ${module}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error importing ${module}:`, err);
        return;
      }
      console.log(`${module} imported successfully.`);
    });
  });
} else {
  console.log("Unknown command.");
  console.log("Available commands:");
  console.log("  create <project-name>  - Create a new Vue.js project using the wrapper framework");
  console.log("  import <module-name> [module-name...]  - Import micro-frontend modules into the project");
}
