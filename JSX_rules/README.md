# JSX Rules in React

This repository contains examples and explanations of fundamental JSX rules and best practices for React development.

## Table of Contents
- [Introduction](#introduction)
- [Key JSX Rules](#key-jsx-rules)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your React components. This repository demonstrates the essential rules and conventions for working with JSX in React applications.

## Key JSX Rules

### 1. Single Parent Element
Every JSX expression must have a single parent element.
```jsx
// Valid
return (
  <div>
    <h1>Hello World</h1>
    <p>Welcome to React</p>
  </div>
);

// Invalid (multiple root elements)
return (
  <h1>Hello</h1>
  <p>World</p>
);
