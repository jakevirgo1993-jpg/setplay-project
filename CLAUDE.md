# CLAUDE.md - AI Assistant Guide for setplay-project

## Project Overview

This is a modern web application built as a monorepo with a React frontend. The project is in early development stages with the foundational setup complete.

**Project Type**: Monorepo Web Application
**Primary Stack**: React 19 + Vite 7 + Tailwind CSS 4
**Last Updated**: 2026-01-24

## Repository Structure

```
setplay-project/
├── frontend/               # React frontend application
│   ├── src/               # Source code
│   │   ├── App.jsx        # Root application component
│   │   ├── main.jsx       # Application entry point
│   │   ├── index.css      # Global styles
│   │   └── assets/        # Static assets (images, SVGs)
│   ├── public/            # Public static files
│   ├── package.json       # Frontend dependencies and scripts
│   ├── vite.config.js     # Vite configuration
│   ├── eslint.config.js   # ESLint configuration (flat config)
│   └── .prettierrc        # Prettier configuration
├── package.json           # Root workspace dependencies
├── .vscode/
│   └── settings.json      # VSCode editor configuration
├── .gitignore             # Git ignore patterns
└── README.md              # Project readme
```

## Technology Stack

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.15 with `@tailwindcss/vite` plugin
- **Language**: JavaScript (JSX)
- **Type Safety**: None (no TypeScript currently)

### Development Tools
- **Linting**: ESLint 9.38.0 with flat config format
- **Formatting**: Prettier
- **Package Manager**: npm (uses package-lock.json)

### Notable Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` - React-specific ESLint rules
- `globals` - Global variables for ESLint

## Code Conventions & Standards

### JavaScript/React Style Guide

#### Prettier Configuration
The project uses Prettier with the following settings:
```json
{
  "singleQuote": true,      // Use single quotes
  "semi": false,            // No semicolons
  "trailingComma": "all"    // Trailing commas everywhere
}
```

**Examples**:
```javascript
// ✅ Correct
const greeting = 'Hello World'
const user = { name: 'John', age: 30 }

// ❌ Incorrect
const greeting = "Hello World";
const user = { name: "John", age: 30 };
```

#### ESLint Rules
Key ESLint configurations:
- **ECMAVersion**: 2021
- **Source Type**: Module (ES6+)
- **JSX**: Enabled
- **Environment**: Browser globals
- **Notable Rules**:
  - `react/react-in-jsx-scope`: OFF (React 19 JSX transform)
  - `react-refresh/only-export-components`: OFF

#### React Patterns
```javascript
// ✅ Preferred - No React import needed (React 19)
export default function MyComponent() {
  return <div>Content</div>
}

// ❌ Avoid - Unnecessary React import
import React from 'react'
export default function MyComponent() {
  return <div>Content</div>
}
```

#### File Organization
- **Components**: Currently in `src/` root (no components directory yet)
- **Entry Point**: `main.jsx` renders the root App component
- **Styling**: Inline Tailwind classes preferred, global CSS in `index.css`

### Styling Conventions

#### Tailwind CSS Usage
The project uses Tailwind CSS 4.x with the Vite plugin. Current patterns:

```javascript
// ✅ Tailwind utility classes
<div className="min-h-screen grid place-items-center">
  <div className="p-[48px] bg-[rebeccapurple] text-[28px] text-white rounded-[20px]">
    Content
  </div>
</div>
```

**Key Points**:
- Use Tailwind utility classes directly in JSX
- Arbitrary values with bracket notation `[48px]` are acceptable
- Grid and flexbox for layouts
- Responsive design utilities when needed

## Development Workflow

### Available Scripts

#### Frontend Development
```bash
cd frontend
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

### VSCode Configuration

The project includes VSCode settings:
```json
{
  "eslint.workingDirectories": ["frontend"],
  "eslint.useFlatConfig": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

**Important for AI Assistants**:
- ESLint working directory is `frontend/`
- Format on save is enabled
- Prettier is the default formatter
- ESLint uses flat config (not legacy .eslintrc)

### Git Workflow

#### Branch Naming Convention
- Feature branches: `claude/claude-md-<session-id>`
- Main branch: (to be determined - likely `main` or `master`)

#### Commit Guidelines
- Write clear, descriptive commit messages
- Focus on the "why" rather than "what"
- Keep commits atomic and focused

#### Current Branch Status
- **Active Branch**: `claude/claude-md-mks2dhgc7dj0cjot-j6IGr`
- **Status**: Clean working directory
- **Recent Commits**:
  - `8a21bf1` - changes
  - `bcbd90b` - Add build and environment ignores
  - `e7e4fec` - Initial project setup
  - `bff2325` - Initial commit

### Environment Files

The project uses `.env` files for configuration (all ignored by git except `.env.example`):
- `.env` - Local environment variables (ignored)
- `.env.local` - Local overrides (ignored)
- `.env.example` - Example template (tracked)

## AI Assistant Guidelines

### File Operations

#### When to Read Files
- **Always read before editing**: Never modify files without reading them first
- **Check existing code**: Understand patterns before adding new code
- **Verify structure**: Check imports, exports, and dependencies

#### When to Edit vs. Create
- **Prefer editing**: Always edit existing files when possible
- **Only create when necessary**: New components, new features, or explicitly requested
- **Never create unnecessary docs**: Don't create markdown files unless asked

### Code Modification Best Practices

#### Anti-Patterns to Avoid
```javascript
// ❌ Don't add unnecessary imports
import React from 'react'  // Not needed in React 19

// ❌ Don't add semicolons (Prettier config)
const foo = 'bar';

// ❌ Don't use double quotes (Prettier config)
const message = "Hello"

// ❌ Don't skip trailing commas (Prettier config)
const obj = { a: 1, b: 2 }
```

#### Recommended Patterns
```javascript
// ✅ Clean component export
export default function Component() {
  return <div className="p-4">Content</div>
}

// ✅ Named exports for utilities
export const helper = () => {}

// ✅ Proper imports
import { useState } from 'react'
import './styles.css'
```

### Making Changes

#### Pre-Change Checklist
1. ✅ Read the file first
2. ✅ Understand the existing patterns
3. ✅ Check related files for context
4. ✅ Verify dependencies in package.json
5. ✅ Follow established code style

#### Post-Change Checklist
1. ✅ Ensure code follows Prettier rules (single quotes, no semicolons, trailing commas)
2. ✅ Verify imports are correct and minimal
3. ✅ Check that React patterns match project conventions
4. ✅ Run `npm run lint` in frontend directory
5. ✅ Test changes if possible

### Common Tasks

#### Adding a New Component
```javascript
// In frontend/src/components/MyComponent.jsx
export default function MyComponent({ prop1, prop2 }) {
  return (
    <div className="container">
      {/* Component content */}
    </div>
  )
}
```

#### Adding Dependencies
```bash
# Frontend dependencies
cd frontend
npm install <package-name>

# Root/workspace dependencies
npm install <package-name>
```

#### Updating Configuration
- **Vite**: Edit `frontend/vite.config.js`
- **ESLint**: Edit `frontend/eslint.config.js` (flat config format)
- **Prettier**: Edit `frontend/.prettierrc`
- **VSCode**: Edit `.vscode/settings.json`

### Debugging & Troubleshooting

#### Common Issues

**ESLint Not Working**
- Check `eslint.workingDirectories` points to `frontend/`
- Ensure `eslint.useFlatConfig: true` in VSCode settings
- Verify using flat config format in `eslint.config.js`

**Prettier Not Formatting**
- Confirm `editor.formatOnSave: true`
- Check `editor.defaultFormatter` is `esbenp.prettier-vscode`
- Verify `.prettierrc` exists in frontend directory

**Vite Build Issues**
- Clear cache: `rm -rf frontend/node_modules/.vite`
- Reinstall: `cd frontend && npm install`
- Check `vite.config.js` for misconfiguration

**Tailwind Not Working**
- Verify `@tailwindcss/vite` is in dependencies
- Check Tailwind plugin is in `vite.config.js`
- Ensure CSS import in `main.jsx`

## Project Architecture

### Current State
The project is in **early development** with:
- ✅ Frontend scaffolding complete
- ✅ Build tools configured (Vite, ESLint, Prettier)
- ✅ Styling system setup (Tailwind CSS 4)
- ✅ Basic React app structure
- ⏳ No backend yet
- ⏳ No routing configured
- ⏳ No state management
- ⏳ No API integration
- ⏳ No testing setup

### Potential Future Additions
When adding these features, maintain consistency with established patterns:
- **Routing**: React Router (if needed)
- **State Management**: React Context or Zustand/Redux
- **API Client**: Fetch API or Axios
- **Testing**: Vitest + React Testing Library
- **Backend**: Node.js/Express, or other framework
- **Database**: TBD based on requirements
- **Authentication**: TBD based on requirements

## Important Notes for AI Assistants

### Critical Rules
1. **Always read before editing** - Never modify files without reading them first
2. **Follow Prettier config** - Single quotes, no semicolons, trailing commas
3. **Use flat ESLint config** - Don't suggest legacy .eslintrc format
4. **No unnecessary React imports** - React 19 doesn't need `import React`
5. **Prefer editing over creating** - Don't create new files unnecessarily
6. **Respect existing patterns** - Match the style and structure of existing code
7. **Work in frontend directory** - Most development happens in `frontend/`
8. **Check package.json** - Verify dependencies before suggesting imports

### Context Awareness
- The project is **brand new** - don't assume existing features
- No backend exists yet - don't reference server-side code
- Limited components - the app structure is minimal
- No testing setup - don't try to run tests
- No CI/CD - no automated workflows

### Communication Style
- Be concise and technical
- Provide code examples following project conventions
- Reference specific files with line numbers when relevant
- Don't use emojis unless explicitly requested
- Focus on facts over validation

## Quick Reference

### File Locations
| Purpose | Path |
|---------|------|
| Root App Component | `frontend/src/App.jsx` |
| Entry Point | `frontend/src/main.jsx` |
| Global Styles | `frontend/src/index.css` |
| Vite Config | `frontend/vite.config.js` |
| ESLint Config | `frontend/eslint.config.js` |
| Prettier Config | `frontend/.prettierrc` |
| Frontend Package | `frontend/package.json` |
| Root Package | `package.json` |

### Key Commands
```bash
# Development
cd frontend && npm run dev

# Linting
cd frontend && npm run lint

# Build
cd frontend && npm run build

# Install dependencies (frontend)
cd frontend && npm install

# Install dependencies (root)
npm install
```

### Styling Reference
```javascript
// Tailwind utility classes
className="min-h-screen grid place-items-center p-4 bg-blue-500 text-white"

// Arbitrary values
className="p-[48px] text-[28px] rounded-[20px]"

// Responsive
className="text-sm md:text-base lg:text-lg"
```

---

**Last Updated**: 2026-01-24
**Maintained By**: AI Assistants working with this codebase
**Version**: 1.0.0
