# AI Development Rules - QM Lighting

## Tech Stack
- **React 19**: Core frontend library for building the user interface.
- **Vite**: Next-generation frontend tooling for fast development and bundling.
- **TypeScript**: Used for type safety and better developer experience (transitioning from JSX).
- **Tailwind CSS**: Primary utility-first framework for all styling and responsive design.
- **Shadcn/UI & Radix UI**: Foundation for accessible, high-quality UI components.
- **React Router 7**: Handles all client-side routing and navigation.
- **Lucide React**: Default library for consistent and scalable iconography.

## Library Usage Rules
- **Styling**: Always use **Tailwind CSS** utility classes. Do not create new `.css` files; instead, refactor existing custom CSS to Tailwind where possible.
- **Components**: Prioritize **Shadcn/UI** components. When creating new components, keep them under 100 lines and place them in `src/components/`.
- **Icons**: Use **Lucide React** for all new icons to maintain a modern, consistent look. Use `react-icons` only if a specific brand icon is unavailable in Lucide.
- **Routing**: All route definitions must reside in `src/App.tsx`. Use `Link` from `react-router-dom` for internal navigation.
- **State Management**: Use standard React hooks (`useState`, `useContext`, `useReducer`) for state. Avoid heavy state libraries unless complexity demands it.
- **File Structure**: 
  - Pages go in `src/pages/`.
  - Components go in `src/components/`.
  - Hooks go in `src/hooks/`.
  - Data/Constants go in `src/data/`.
- **Naming Conventions**: 
  - Directories: Always lowercase (e.g., `src/components`).
  - Components: PascalCase (e.g., `ProductCard.tsx`).
  - Utilities/Hooks: camelCase (e.g., `useCart.ts`).

## Best Practices
- **Responsiveness**: Every UI change must be mobile-first and fully responsive using Tailwind's breakpoints (`sm:`, `md:`, `lg:`, etc.).
- **Performance**: Use `useMemo` and `useCallback` for expensive calculations or stable function references.
- **Clean Code**: Maintain high readability, use descriptive variable names, and avoid over-engineering simple features.