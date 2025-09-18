# Git Training Steps - Instructor Guide

## 📋 Step-by-Step Instructions for Your Team

### **STEP 1: Setup (Everyone)**
Tell your team to do this first:

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd git-demo

# 2. Install dependencies
npm install

# 3. Start the website to see what we're working with
npm run dev
```

**What they should see**: A simple website with Header, Sidebar, Content, and Footer sections.

---

### **STEP 2: Create Branches (Everyone)**
Each person creates their own branch:

**Priyanka:**
```bash
git checkout -b priyanka-header
```

**Shanu:**
```bash
git checkout -b shanu-footer
```

**Raunak:**
```bash
git checkout -b raunak-sidebar
```

---

### **STEP 3: Individual Work (15-20 minutes)**

**Tell Priyanka:**
- Open `src/components/Header.tsx`
- Change the text from "Header Component" to something like "My Company Name"
- Maybe add a simple navigation link
- Save the file

**Tell Shanu:**
- Open `src/components/Footer.tsx`
- Change the text from "Footer Component" to something like "Contact Us: email@company.com"
- Maybe add "© 2024 My Company"
- Save the file

**Tell Raunak:**
- Open `src/components/Sidebar.tsx`
- Change the text from "Sidebar Component" to something like "Menu"
- Add a few list items like "Home", "About", "Contact"
- Save the file

---

### **STEP 4: First Commit (Everyone)**
Tell everyone to commit their changes:

```bash
# Add all changes
git add .

# Commit with a simple message
git commit -m "Add content to my component"

# Push the branch
git push origin <their-branch-name>
```

---

### **STEP 5: Create Pull Requests (Everyone)**
Tell them to:
1. Go to GitHub/GitLab
2. Create a Pull Request from their branch to `main`
3. Add a title like "Add content to Header" (or Footer/Sidebar)
4. Write a simple description of what they changed

---

### **STEP 6: Code Review Practice**
- Have each person review someone else's PR
- Ask them to comment on the changes
- Approve the PRs
- Merge them one by one

---

### **STEP 7: Update Local Main (Everyone)**
After PRs are merged, tell everyone:

```bash
# Go back to main branch
git checkout main

# Pull the latest changes
git pull origin main

# Delete their old branch
git branch -d <their-branch-name>
```

---

### **STEP 8: Merge Conflict Practice (Priyanka & Shanu)**
This is the fun part! Tell them:

**Both Priyanka and Shanu should:**
1. Create new branches:
   ```bash
   git checkout -b priyanka-app-changes
   git checkout -b shanu-app-changes
   ```

2. **Priyanka** - Edit `src/App.jsx`:
   - Change the main heading to "Welcome to Our Company"
   - Add a paragraph about the company

3. **Shanu** - Edit `src/App.jsx`:
   - Change the main heading to "About Our Business"
   - Add different content about the company

4. Both commit and push:
   ```bash
   git add .
   git commit -m "Update main page content"
   git push origin <their-branch-name>
   ```

5. Both create PRs at the same time
6. Try to merge the first one - it will work
7. Try to merge the second one - **CONFLICT!** 🎉

---

### **STEP 9: Resolve Merge Conflicts**
When the conflict happens, tell them:

1. **Shanu** (the one with the conflict):
   ```bash
   git checkout main
   git pull origin main
   git checkout shanu-app-changes
   git merge main
   ```

2. **This will show conflict markers in App.jsx:**
   ```
   <<<<<<< HEAD
   Shanu's changes
   =======
   Priyanka's changes
   >>>>>>> main
   ```

3. **Edit the file to keep both changes or choose one**
4. **Remove the conflict markers**
5. **Commit the resolution:**
   ```bash
   git add .
   git commit -m "Resolve merge conflict in App.jsx"
   git push origin shanu-app-changes
   ```

6. **Now the PR can be merged!**

---

### **STEP 10: Cleanup (Everyone)**
```bash
git checkout main
git pull origin main
git branch -d <their-conflict-branch>
```

---

## 🎯 What They Learned

✅ How to create branches  
✅ How to make commits  
✅ How to push branches  
✅ How to create Pull Requests  
✅ How to review code  
✅ How to merge PRs  
✅ How to handle merge conflicts  
✅ How to work as a team  

## 🚨 Common Issues & Quick Fixes

**"My branch is behind main"**
```bash
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

**"Permission denied when pushing"**
- Make sure they have access to the repository
- Check if they're using the right remote URL

**"Merge conflict in package-lock.json"**
```bash
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Fix package conflicts"
```

---

## 📝 Instructor Notes

- **Total time**: 1-2 hours
- **Best to do**: In person or with screen sharing
- **Encourage**: Questions and helping each other
- **Focus on**: The workflow, not perfect code
- **Celebrate**: When they successfully resolve conflicts!

**Remember**: This is about learning Git, not building a perfect website! 🎉
