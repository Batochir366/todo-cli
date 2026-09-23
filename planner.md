# Todo CLI — Backend Learning Plan

> Goal: Build a complete Todo CLI application from scratch to learn Node.js, JavaScript backend fundamentals, file persistence, and CLI architecture.

**Project:** Task Tracker CLI (roadmap.sh)

**Rule:** Do not use AI to generate features. Use AI only to explain concepts or debug after trying yourself.

---

# Learning Goals

By the end of this project I should understand:

- [ ] Node.js project structure.
- [ ] CLI applications.
- [ ] `process.argv`.
- [ ] Reading and writing JSON files.
- [ ] CRUD operations.
- [ ] Validation and error handling.
- [ ] Separating business logic from storage logic.

---

# Project Structure

```text
todo-cli/
├── index.js          # Entry point
├── commands.js       # CLI command parser
├── taskService.js    # CRUD logic
├── storage.js        # Read/Write tasks.json
├── tasks.json        # Database (JSON)
└── package.json
```

**Responsibility**

| File             | Responsibility                                          |
| ---------------- | ------------------------------------------------------- |
| `index.js`       | Starts the application and receives terminal arguments. |
| `commands.js`    | Decides which command to execute.                       |
| `taskService.js` | Contains task logic (add, update, delete, etc.).        |
| `storage.js`     | Handles file persistence.                               |
| `tasks.json`     | Stores all tasks.                                       |

---

# Phase 1 — Design Before Coding

## Task Model

Design what one task looks like.

Questions:

- [ ] What fields does a task have?
- [ ] How is ID generated?
- [ ] What statuses exist?
- [ ] What timestamps are needed?

Example thinking:

- id
- description
- status
- createdAt
- updatedAt

### Learn

- Objects
- Arrays
- Data modeling
- Timestamps

---

# Phase 2 — Understand the CLI

Think of the terminal as your API.

Commands to support:

- [ ] `add`
- [ ] `update`
- [ ] `delete`
- [ ] `mark-in-progress`
- [ ] `mark-done`
- [ ] `list`
- [ ] `list done`
- [ ] `list todo`
- [ ] `list in-progress`

### Learn

- `process.argv`
- Command parsing.
- Input validation.

---

# Phase 3 — File Persistence

The JSON file is the database.

Flow:

```text
CLI Command
      │
      ▼
Read tasks.json
      │
      ▼
Parse JSON
      │
      ▼
Modify Data
      │
      ▼
Write tasks.json
      │
      ▼
Print Result
```

### Edge Cases

- [ ] File doesn't exist.
- [ ] Invalid JSON.
- [ ] Empty task list.

### Learn

- `fs`
- JSON parsing/stringifying.
- Error handling.

---

# Phase 4 — Build Features

## 1. Add Task

**Goal**

Create and save a new task.

### Learn

- Push into arrays.
- Generate IDs.
- Save JSON.

**Checklist**

- [ ] Validate description.
- [ ] Generate ID.
- [ ] Save file.
- [ ] Print success.

---

## 2. List Tasks

**Goal**

Display tasks from the JSON file.

### Learn

- Loops.
- Formatting output.
- Reading files.

**Checklist**

- [ ] Read file.
- [ ] Show all tasks.
- [ ] Handle empty list.

---

## 3. Update Task

**Goal**

Change a task description.

### Learn

- Find by ID.
- Update object.
- Update timestamp.

**Checklist**

- [ ] Validate ID.
- [ ] Task exists.
- [ ] Save changes.

---

## 4. Delete Task

**Goal**

Remove a task.

### Learn

- Filtering arrays.
- Rewriting JSON.

**Checklist**

- [ ] Task exists.
- [ ] Delete safely.
- [ ] Save file.

---

## 5. Mark Status

**Goal**

Update task status.

Statuses:

- todo
- in-progress
- done

### Learn

- Reusing update logic.
- Validation.
- Constants.

**Checklist**

- [ ] Mark in-progress.
- [ ] Mark done.
- [ ] Update timestamp.

---

## 6. Filter Tasks

**Goal**

List tasks by status.

### Learn

- Array filtering.
- Optional CLI arguments.

**Checklist**

- [ ] List done.
- [ ] List todo.
- [ ] List in-progress.

---

# Phase 5 — Refactor

Improve code without changing features.

### Goals

- [ ] Remove duplicated logic.
- [ ] Create reusable functions.
- [ ] Separate storage from business logic.
- [ ] Improve naming.

### Learn

- Single Responsibility Principle.
- Modular code organization.

---

# Phase 6 — Error Handling

Test incorrect user input.

Cases:

- [ ] Unknown command.
- [ ] Missing description.
- [ ] Missing ID.
- [ ] Invalid ID type.
- [ ] Task not found.
- [ ] Corrupted JSON file.

### Learn

- Defensive programming.
- User-friendly CLI messages.

---

# Manual Testing Checklist

## Add

- [ ] Add one task.
- [ ] Add multiple tasks.
- [ ] Add empty description.

## List

- [ ] List empty tasks.
- [ ] List many tasks.

## Update

- [ ] Update existing task.
- [ ] Update missing task.

## Delete

- [ ] Delete existing task.
- [ ] Delete missing task.

## Status

- [ ] Mark done.
- [ ] Mark in-progress.
- [ ] Mark already done.

## Filters

- [ ] List done only.
- [ ] List todo only.
- [ ] List in-progress only.

---

# JavaScript Concepts Learned

| Feature    | JS Concept                   |
| ---------- | ---------------------------- |
| CLI        | `process.argv`               |
| Add        | Objects, arrays              |
| List       | Loops, formatting            |
| Update     | `find()`                     |
| Delete     | `filter()`                   |
| Filter     | `filter()`                   |
| Storage    | `fs`, JSON                   |
| Validation | Conditionals, error handling |

---

# Stretch Goals (After MVP)

- [ ] Colorful terminal output.
- [ ] Sort by newest or oldest.
- [ ] Search tasks by keyword.
- [ ] Due dates.
- [ ] Priority levels.
- [ ] Export tasks.
- [ ] Unit tests.

---

# Daily Progress Tracker

## Day 1 — Project Setup

- [ ] Initialize npm.
- [ ] Configure CLI (`bin`, shebang, `npm link`).
- [ ] Design task model.

## Day 2 — Storage Layer

- [ ] Read JSON.
- [ ] Write JSON.
- [ ] Handle missing file.

## Day 3 — Add + List

- [ ] Add task.
- [ ] List tasks.
- [ ] Manual testing.

## Day 4 — Update + Delete

- [ ] Update description.
- [ ] Delete task.
- [ ] Manual testing.

## Day 5 — Status + Filters

- [ ] Mark done.
- [ ] Mark in-progress.
- [ ] List by status.

## Day 6 — Refactor

- [ ] Clean project structure.
- [ ] Remove duplicate logic.

## Day 7 — Error Handling + Review

- [ ] Test edge cases.
- [ ] Review code without AI.
- [ ] Explain every file in your own words.
