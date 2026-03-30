# Movie-Tracker
A modern React + Redux Toolkit application for tracking movies, built with TypeScript.
Users can browse, search, filter, and manage their movie collection with a clean UI.
---

## Features

- **Redux Toolkit Store**
  - Centralized state management
  - Movies slice with full CRUD functionality

- **Movie Management**
  - Add new movies
  - Remove movies
  - Toggle watched/unwatched status

- **Async Data Fetching**
  - Uses `createAsyncThunk`
  - Simulates API call with `setTimeout`
  - Handles:
    - Loading state
    - Success state
    - Error state

- **Search & Filter**
  - Search movies by title
  - Filter by genre (Action, Drama, Comedy, Thriller)
  - Optimized using `useMemo`

- **Stats Panel**
  - Total movies count
  - Watched movies count
  - Unwatched movies count

- **Component Architecture**
  - Reusable components
  - Clean separation of concerns

- **Higher Order Component**
  - `withLogger` logs component props

- **Routing**
  - `/` → Movie list page
  - `/movies/:id` → Movie details page

- **Movie Images**
  - Each movie displays a poster image

- **Modal**
  - Add Movie form using a portal
  - Form validation included

---
