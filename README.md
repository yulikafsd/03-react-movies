# TMDB Movie Search Application

A responsive React web application built with TypeScript and Vite that allows users to search for movies using the TMDB (The Movie Database) API, view a grid of search results, and open a modal with detailed movie information.

## 🚀 Live Demo

[View Live App on Vercel](https://03-react-movies-yu-za.vercel.app/)

## 🛠️ Tech Stack & Tools

- **React 18** — UI library
- **TypeScript** — Static typing
- **Vite** — Fast frontend build tool
- **Axios** — Promise-based HTTP client for API requests
- **React Hot Toast** — Elegant notifications for empty inputs and zero results
- **CSS Modules** — Scoped component styling
- **Modern Normalize** — Consistent cross-browser base styles

## ✨ Features

- **Movie Search**: Search for movies in real-time using TMDB API integration.
- **Form Action & Validation**: Form processing with empty input detection and `react-hot-toast` alerts.
- **Interactive Modal**: View detailed movie info (backdrop image, overview, release date, rating) in a React Portal modal (`createPortal`).
- **Keyboard & Click Accessibility**: Modal closes on `Escape` key press, backdrop click, or close button click. Scroll is locked while modal is open.
- **Conditional Rendering**:
    - Displays a `Loader` indicator while fetching data.
    - Displays an `ErrorMessage` component on HTTP failure.
    - Displays `MovieGrid` only when movies are found.
- **Clean Environment Variables**: Securely handles API authentication via `VITE_TMDB_TOKEN`.

## 📂 Project Structure

```text
src/
├── components/
│   ├── App/
│   │   ├── App.module.css
│   │   └── App.tsx
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.module.css
│   │   └── ErrorMessage.tsx
│   ├── Loader/
│   │   ├── Loader.module.css
│   │   └── Loader.tsx
│   ├── MovieGrid/
│   │   ├── MovieGrid.module.css
│   │   └── MovieGrid.tsx
│   ├── MovieModal/
│   │   ├── MovieModal.module.css
│   │   └── MovieModal.tsx
│   └── SearchBar/
│       ├── SearchBar.module.css
│       └── SearchBar.tsx
├── services/
│   └── movieService.ts
├── types/
│   └── movie.ts
├── declarations.d.ts
├── global.css
└── main.tsx
.env
.gitignore
.prettierrc
eslint.config.js
index.html
package-lock.json
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## 💻 Getting Started Locally

1. Clone the repository:

    ```bash
    git clone [https://github.com/yulikafsd/03-react-movies.git](https://github.com/yulikafsd/03-react-movies.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd 03-react-movies
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:
   Create a .env file in the root directory and add your TMDB API Token:

    ```text
     VITE_TMDB_TOKEN=your_tmdb_bearer_token_here
    ```

5. Start the development server:
    ```Bash
    npm run dev
    ```
