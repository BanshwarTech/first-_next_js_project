# my-next-app/
    1. next/                     # Build output (auto-generated, don't edit)
    2. node_modules/              # Installed npm packages
    3. public/                    # Static assets like images, favicon
        1. favicon.ico

    4.src/                       # Source code folder
        1. app/                   # App router directory
        2. layout.tsx        # Global layout (wrapper, themes)
        3. page.tsx          # Home route
        4. (other routes)
    5. .gitignore                 # Files and folders to ignore in Git
    6. eslint.config.mjs         # ESLint rules and plugins
    7. next-env.d.ts             # TypeScript declarations for Next.js
    8. next.config.ts            # Next.js config (redirects, images, etc.)
    9. package.json              # Project metadata and dependencies
    10. package-lock.json         # NPM dependency lock file
    11. postcss.config.mjs        # PostCSS config for Tailwind CSS
    12. tailwind.config.ts        # Tailwind CSS theme and plugin setup
    13. tsconfig.json             # TypeScript config
    14. README.md                 # Project overview and instructions


# First Next.js Project 🚀

A basic introduction and setup guide for your first Next.js project, including essential concepts, architecture, rendering strategies, and how it differs from plain React.

---

## 📦 Prerequisites

- Node.js installed  
  Check your version:
  ```bash
  node -v
  ```

---

## ⚙️ Creating Your Next.js Project

Run the following command to set up a new project:

```bash
npx create-next-app@latest my-next-app
```

Navigate to your project:

```bash
cd my-next-app
```

---

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

---

## ✨ Latest Features in Next.js

- **App Router (app directory)**
- **Partial Pre-rendering (PPR)**
- **`next/after` (optional module usage)**
- **Server Components with HTTP caching (HMR Cache)**

---

## 🧠 What Does Next.js Offer That React Doesn’t?

| Feature | React | Next.js |
|--------|--------|---------|
| Routing | ❌ Manual (React Router) | ✅ Built-in File-based Routing |
| SSR/SSG | ❌ Requires setup | ✅ Native Support |
| API Routes | ❌ | ✅ Built-in |
| Image Optimization | ❌ | ✅ Automatic |
| SEO Support | ❌ | ✅ Server-side rendering improves SEO |

---

## 🛠️ Using Sanity as CMS

Sanity is a headless CMS that works well with Next.js.

### Steps:
1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Install CLI:
   ```bash
   npm install -g @sanity/cli
   ```
3. Create a project:
   ```bash
   sanity init
   ```
4. Connect your frontend with the Sanity project using Sanity Client in Next.js:
   ```bash
   npm install @sanity/client
   ```

---

## 🧱 Architecture Overview

### Component Types in React:
1. **Functional Components** (modern, hooks)
2. **Class-based Components** (legacy)

### Based on Execution:
- **Client Components**: Render in the browser
- **Server Components**: Render on the server (Next.js feature)

---

## ⚡ Rendering Strategies in Next.js

### 1. Client-Side Rendering (CSR)
- Runs entirely in the browser.
- Good for interactive dashboards.

### 2. Server-Side Rendering (SSR)
- HTML is rendered on the server for each request.
- Great for SEO.

### 3. Static Site Generation (SSG)
- HTML is generated at build time.

### 4. Incremental Static Regeneration (ISR)
- Combines benefits of SSR and SSG with automatic revalidation.

---

## 🚀 Built-in Performance Optimizations

- ✅ Font optimization
- ✅ Image optimization (`next/image`)
- ✅ Script loading strategy

---

## 🔀 Routing

- Pages are created inside the `/app` or `/pages` directory.
- File-based routing system.
- URLs match folder and file structure.

### Nested Routes
- Just create folders inside `/pages` or `/app`.

Example:
```txt
/app/about/page.tsx -> /about
/app/blog/[slug]/page.tsx -> /blog/my-article
```

---

## 🧰 Developer Shortcuts

- `rafce`: React arrow function component export (via ES7+ snippets)
- Props, state, routing — all supported out of the box.

---

Let me know if you'd like a section on **deployment**, **dark mode**, **tailwind setup**, or **API routes**!