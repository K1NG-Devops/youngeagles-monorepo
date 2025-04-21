# Youngeagles Monorepo 🦅

This is a monorepo for managing multiple frontend applications — currently a **React app** and an **Angular app** — using [PNPM workspaces](https://pnpm.io/workspaces).

## 📁 Project Structure

```
.
├── apps/
│   ├── angular-app/      # Angular application
│   └── react-app/        # React application
├── packages/
│   ├── ui/               # Shared UI components (optional)
│   └── utils/            # Shared utilities (optional)
├── pnpm-workspace.yaml   # Workspace config
├── package.json          # Root dependencies & scripts
└── pnpm-lock.yaml
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/K1NG-Devops/youngeagles-monorepo.git
cd youngeagles-monorepo
```

Or with SSH:

```bash
git clone git@github.com:K1NG-Devops/youngeagles-monorepo.git
```

---

### 2. Install Dependencies

Install [PNPM](https://pnpm.io/installation) globally (if not already installed):

```bash
npm install -g pnpm
```

Then install all workspace dependencies:

```bash
pnpm install
```

---

## 📦 Running the Apps

### 🔹 React App

```bash
pnpm --filter react-app dev
```

### 🔵 Angular App

```bash
pnpm --filter angular-app start
```

> If the Angular app hasn’t been initialized yet, run this in `apps/angular-app`:

```bash
npx @angular/cli new . --skip-git --skip-install
pnpm install
```

---

## 👥 For Collaborators

1. Clone the repo and run `pnpm install`
2. Navigate to `apps/angular-app/` to start developing the Angular frontend
3. Create a new branch for your feature:
   ```bash
   git checkout -b feat/angular-initial-setup
   ```
4. Push your branch and open a Pull Request when ready.

---

## 🛠️ Tooling Suggestions

- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) for consistent code style
- [Turborepo](https://turbo.build/repo) for caching and task orchestration (optional)
- [Storybook](https://storybook.js.org/) for UI components (optional)

---

## 🤝 Contributing

Coming soon — PR guidelines, commit style, and CI integration.

---

## 📜 License

MIT License

