# Astro + Hono + HTMX Template (Powered by Bun)

Welcome to a project template that combines the power of Astro, Hono, and HTMX, with Bun as the runtime for a fast and modern development experience. This template is designed to help you build high-performance, simple, and interactive web applications without unnecessary complexity.

## Why This Template?

This template brings together the best technologies for modern web needs:

- **Astro**: A fast and simple frontend framework that delivers static HTML by default with optional partial hydration for interactivity. Perfect for high-performance sites with minimal load times.
- **Hono**: A lightweight library for handling APIs and server-side routing. Fast, flexible, and ideal for creating efficient API endpoints within an Astro project.
- **HTMX**: A simple tool to add interactivity directly in HTML. With HTMX, you can create dynamic UIs without writing a lot of JavaScript.
- **Bun**: A super-fast JavaScript runtime used here to run the project, replacing Node.js with better performance and built-in tooling like a package manager.

This combination is great for projects like interactive blogs, simple dashboards, or web apps needing lightweight APIs and responsive UIs.

## Prerequisites

- **Bun**: Make sure you have Bun installed (see [Bun installation instructions](https://bun.sh/)).
- **Git** (for cloning the repository).

## How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/AgungBahtiarr/ahx-stack.git
cd ahx-stack
```

### 2. Install Dependencies with Bun

Bun provides a built-in package manager that's faster than npm. Run the following command to install all dependencies:

```bash
bun install
```

### 3. Run the Project Locally

Use Bun to start the local development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the project running. Code changes will be automatically detected, and the page will reload instantly.

### 4. Build for Production

Generate a static or server-side version:

```bash
bun run build
```

## Project Structure

```
├── src/                # Main source code
│   ├── pages/         # Astro pages
│   ├── api/           # API routes with Hono
│   └── components/    # Astro and HTMX components
├── public/            # Static assets (images, fonts, etc.)
├── astro.config.mjs   # Astro configuration
├── package.json       # Dependencies and scripts
└── README.md          # This documentation
```

## How to Customize

- **Add Pages**: Add `.astro` files in `src/pages/`.
- **Add APIs**: Edit or add routes in `src/api/` using Hono.
- **Add Interactivity**: Use HTMX attributes (e.g., `hx-get`, `hx-post`) in components or pages.
- **Styling**: This template supports CSS in Astro—add as needed.

## Contributing

Have ideas or improvements? Feel free to open an issue or submit a pull request at [this repository](https://github.com/AgungBahtiarr/ahx-stack).

## License

MIT License - use it as you like!
