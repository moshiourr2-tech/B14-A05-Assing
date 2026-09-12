# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

# PROJECT NAME :: DevStack

A responsive web application for exploring different technologies.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Toastify
- JSON
- Vite

## Features

1. Browse different technologies
2. Add technologies to your stack
3. Remove technologies from your stack

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

=> JSX allows us to write HTML-like code inside JavaScript or TypeScript.

### 2. What is the difference between props and state?

=> Props are used to pass data from a parent component to a child.
State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project ?

=> useState is used to create and manage state in a React component.
In this project, it is used to manage the selected technologies.

### 4. What does the useEffect hook do, and why did you need it to load JSON data ?

 => useEffect is used to perform side effects.
I used it to load the technology data from the JSON file.

### 5. Why does every item in a map() list need a unique key prop?

=> React uses the key to identify each item in a list and 
update the UI when the list changes.

### 6. What is conditional rendering? show one place you used it (example:the empty stack message).

=> In my project, I used it for the empty stack message. If the stack has no technologies, it shows a message. Otherwise, it shows the selected technologies.

Example:

{stack.length === 0? (

<p>Your stack is empty</p> ):(

)}

stack.map((technology) => ( <div key={technology.id}> {technology.name}

</div>
))
)}

For example, I show an empty-stack message when there are no
technologies in the stack.

### 7. How do you pass data from a parent component to a child component and how does a child send something back to parent ?

Data is passed from parent to child using props.

A child can send data back to the parent by calling a function
passed from the parent as a prop.
