# Front-End Architecture Patterns

[![website](https://img.shields.io/website?url=https%3A%2F%2Farc.tiagovilasboas.dev)](https://arc.tiagovilasboas.dev)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-Performance-brightgreen?style=flat&logo=lighthouse)](https://github.com/tiagovilasboas/front-end-architecture/actions/workflows/lhci.yml)
[![CI/CD: Deploy](https://github.com/tiagovilasboas/front-end-architecture/actions/workflows/deploy.yml/badge.svg)](https://github.com/tiagovilasboas/front-end-architecture/actions/workflows/deploy.yml)

A curated collection of battle-tested patterns and practices for building modern, maintainable, and scalable front-end applications.

## 🌐 Live Site

You can visit the live version of this project at:
**[arc.tiagovilasboas.dev](https://arc.tiagovilasboas.dev)**

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [pnpm](https://pnpm.io/installation) installed.

### Installation & Execution

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/tiagovilasboas/front-end-architecture.git
    cd front-end-architecture
    ```

2.  **Install dependencies:**
    ```sh
    pnpm install
    ```

3.  **Start the development server:**
    ```sh
    pnpm dev
    ```

The application will be available at `http://localhost:4321`.

## 🧞 Project Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm generate-mdx`       | Generates MDX files from `patterns.json`         |
