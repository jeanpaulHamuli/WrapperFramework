# Micro-Frontend Wrapper Framework

This guide explains how to use the Micro-Frontend Wrapper Framework to create a Vue.js project and integrate micro-frontends dynamically.

---

## Overview

The Micro-Frontend Wrapper Framework is a Vue.js-based library that allows developers to:

- Scaffold a new Vue.js project using the framework.
- Dynamically import and use pre-packaged micro-frontends, such as FeatureA (Counter) and FeatureB (To-Do List).

---

## Installation

### Prerequisites

Before you begin, ensure you have:

- Node.js installed (v14+ recommended).
- npm installed (comes with Node.js).

### Installing the Framework

To install the wrapper framework, run:

```bash
npm install framework-wrapper-001
```

---

## Creating a New Project

### Step 1: Scaffold a New Project

Use the framework to create a new Vue.js project by running:

```bash
npx framework-wrapper-001 create my-new-app
```

This command creates a new directory (`my-new-app`) with the basic application scaffold.

### Step 2: Navigate to the Project Directory

Navigate into the newly created project directory:

```bash
cd my-new-app
```

### Step 3: Install Dependencies

Install the required dependencies:

```bash
npm install
```

### Step 4: Start the Development Server

Run the development server to start the application:

```bash
npm run dev
```
---

```code
import { loadFeature } from "<wrapper-package>/utils/loadFeature";
import { createApp } from "vue";

const loadAndMountFeature = async (featureName: string, container: HTMLElement) => {
  try {
    const Feature = await loadFeature(featureName);
    const app = createApp(Feature, { propKey: "value" });
    app.mount(container);
  } catch (error) {
    console.error(error.message);
  }
};

// Example usage:
const container = document.getElementById('feature-container');
loadAndMountFeature('FeatureA', container);
```
---