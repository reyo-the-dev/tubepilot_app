# Project Rules & Folder Structure

This document outlines the architectural patterns and folder organization for TubePilot.

## Folder Structure

All source code resides in the `src` directory.

### `src/` breakdown:

- **`api_hooks/`**: Custom React hooks for data fetching and API management.
- **`components/`**: Organized by component type and scope:
  - **`ui/`**: Atomic, primitive UI components (e.g., `custom_button`, `custom_input`). These are highly reusable and generic.
  - **`common/`**: Reusable components that are specific to the application but used across multiple screens (e.g., `page_banner`, `section_heading`).
  - **`layout/`**: Structural components that define the page frame (e.g., Header, Sidebar, Content Wrapper).
  - **`screens/`**: Screen-specific components. Each screen has its own subdirectory containing components used only within that screen.
- **`context/`**: React Context providers for global state management (e.g., Auth, Theme).
- **`data/`**: Static datasets, constants, and mock data.
- **`helpers/`**: Pure utility functions and helper methods.
- **`pages/`**: Next.js page components representing the application's routes.
- **`services/`**: API service abstraction layer for making network requests.
- **`styles/`**: Global styles, SCSS variables, mixins, and font configurations.

## Development Rules

### 1. Component Creation
- Each component should have its own folder.
- Follow the naming convention: `component_name/component_name.jsx` and `component_name.module.scss`.
- Use functional components with hooks.

### 2. Styling
- Use **SCSS Modules** for component-level styling to avoid global namespace pollution.
- **Global Injection**: SCSS variables (`_variables.scss`), mixins (`_mixins.scss`), and media queries (`_media_queries.scss`) are automatically injected into all SCSS files via `next.config.js`. You do **not** need to manually import or use `@use` for these.
- Avoid hardcoding colors; always use variables from `_variables.scss`.

### 3. State Management
- Use local state for component-specific logic.
- Use React Context for global state.
- Use custom hooks from `api_hooks` for data fetching.

### 4. Routing
- Follow Next.js file-based routing in the `src/pages` directory.
