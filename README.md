# Git Workflow Practice Project

This is a simple practice project to learn Git workflows before starting our real company website. **This is just for learning Git** - not building a real website.

## 🎯 What You'll Learn

- How to create branches
- How to make commits
- How to create Pull Requests
- How to handle merge conflicts
- How to work with others on the same code

## 🚀 Getting Started

### Prerequisites
- Git installed on your machine
- Node.js (v18 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone <repository-url>
cd git-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

## 📋 Basic Commands

- `npm run dev` - Start the website locally
- `npm run build` - Build the website

## 🌿 Git Workflow Training

### Basic Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-component-name
   # Example: git checkout -b feature/header-styling
   ```

2. **Make Your Changes**
   - Work on your assigned component
   - Follow the coding standards (ESLint + Prettier)
   - Test your changes locally

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add header component with styling"
   ```

4. **Push Your Branch**
   ```bash
   git push origin feature/your-component-name
   ```

5. **Create a Pull Request**
   - Go to GitHub/GitLab
   - Create a PR from your branch to `main`
   - Add a descriptive title and description
   - Request code review from team members

6. **Handle Code Review**
   - Address feedback from reviewers
   - Make additional commits if needed
   - Update your PR

7. **Merge Your PR**
   - Once approved, merge your PR
   - Delete the feature branch
   - Pull latest changes to your local main

### Component Practice
Work on any of these components:
- `Header.tsx` - Add content and styling
- `Footer.tsx` - Add content and styling  
- `Sidebar.tsx` - Add content and styling
- `Card.tsx` - Add content and styling
- `Button.tsx` - Add content and styling

### Merge Conflict Practice
Work on the same file with a teammate to practice resolving merge conflicts!

### Simple Commit Messages

Just write what you did in plain English:
- `Add header component`
- `Fix button styling`
- `Update README`
- `Add navigation menu`

## ⚔️ Merge Conflict Practice

### Scenario Setup
To practice merge conflicts, assign two developers to work on the same file:

1. **Developer A**: Modify `src/App.jsx` to add a new section
2. **Developer B**: Modify `src/App.jsx` to change the layout
3. Both push their branches and create PRs
4. Try to merge both - this will create a merge conflict!

### Resolving Merge Conflicts

1. **Pull the latest main branch**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Merge your feature branch**
   ```bash
   git checkout feature/your-branch
   git merge main
   ```

3. **Resolve conflicts in your editor**
   - Look for conflict markers: `<<<<<<<`, `=======`, `>>>>>>>`
   - Choose which changes to keep
   - Remove conflict markers

4. **Commit the resolution**
   ```bash
   git add .
   git commit -m "resolve: merge conflicts in App.jsx"
   ```

## 🎨 Simple Component Structure

Each component is just a basic React component. You can:
- Add text, buttons, or simple HTML
- Style it with CSS in `App.css`
- Keep it simple - this is just for Git practice!

## 🔄 Simple Branch Names

Just use descriptive names:
- `header-work` - Working on header
- `footer-styling` - Styling the footer
- `button-fix` - Fixing button issues

## 🚨 Common Issues & Solutions

### Issue: "Your branch is behind main"
```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

### Issue: "Merge conflict in package-lock.json"
```bash
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Fix package conflicts"
```

## 📚 Helpful Resources

- [Git Basics](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

## 👥 Team Tips

1. **Always pull before starting work**
2. **Write simple commit messages**
3. **Ask for help if you get stuck**
4. **Test your changes before pushing**

## 📝 Basic Workflow

1. Clone the repository
2. Create a branch for your work
3. Make changes to your assigned component
4. Commit your changes
5. Push your branch
6. Create a Pull Request
7. Handle code review and merge

---

**Remember**: This is just for learning Git! Don't worry about perfect code - focus on the workflow.

---
Ronak cloned and accessed it