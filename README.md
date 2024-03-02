# Welcome

A greenfield project to explore ideas presented in [Build and Deploy a Modern UI/UX Website with React & Tailwind CSS](https://www.youtube.com/watch?v=B91wc5dCEBA)

## Getting started

Create a new Vite project with Tailwind CSS:

```sh
# Install Tailwind CSS with Vite - https://tailwindcss.com/docs/guides/vite

## Create a new Vite project
npm create vite@latest ./ -- --template react

## Install dependencies
npm install

## Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## Configure your template paths by modifying the content property of ./tailwind.config.js
## Add the Tailwind directives to your CSS at ./src/index.css

## Start using Tailwind CSS + Vite
npm run dev
```
