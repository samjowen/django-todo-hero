# Todo Hero Monorepo

This is a monorepo for the Todo Hero project. It contains the following packages:

* `todo-hero`: The backend API for the Todo Hero project.
* `todo-hero-frontend`: The frontend web application for the Todo Hero project.

## Prerequisites

1. Poetry (Python package manager)
2. Python (globally installed)
3. NPM (Node package manager)

## Getting Started

### Backend

```bash
cd todoHero
```

```bash
poetry install
```

```bash
poetry run python manage.py migrate
```

```bash
poetry run python manage.py runserver
```

### Frontend

```bash
cd todo-hero-frontend
```

```bash
npm i
```

```bash
npm run start
```
